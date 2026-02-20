#!/usr/bin/env python3
from __future__ import annotations

import argparse
import base64
import datetime as dt
import json
import math
import os
import re
import sys
from collections import defaultdict
from typing import Any, Dict, List, Optional, Tuple

import requests
import pytz
import firebase_admin
from firebase_admin import credentials, firestore
from dotenv import load_dotenv

# Load environment variables from .env if present
load_dotenv()

# -----------------------------
# CONFIG DEFAULTS (you can override via CLI)
# -----------------------------
MSC_API_URL = "https://api.weather.gc.ca"
MSC_UA = "ril-backfill/1.0 (+https://api.weather.gc.ca/)"
CEHQ_UA = "ril-backfill/1.0 (+https://www.cehq.gouv.qc.ca/)"
CEHQ_QTXT_URL = "https://www.cehq.gouv.qc.ca/depot/historique_donnees/fichier/{station}_Q.txt"

TZ_QC = pytz.timezone("America/Toronto")


# -----------------------------
# FIREBASE SETUP (same pattern you use)
# -----------------------------
def init_firebase() -> firestore.Client:
    if not firebase_admin._apps:
        b64_json = os.environ.get("FIREBASE_SA_JSON_B64")
        if b64_json:
            try:
                cred_json = json.loads(base64.b64decode(b64_json).decode("utf-8"))
                cred = credentials.Certificate(cred_json)
                firebase_admin.initialize_app(cred)
            except Exception as e:
                print(f"Error initializing Firebase from FIREBASE_SA_JSON_B64: {e}")
                sys.exit(1)
        else:
            try:
                # Try finding it relative to the script
                script_dir = os.path.dirname(os.path.abspath(__file__))
                sa_path = os.path.join(script_dir, "service-account.json")
                if not os.path.exists(sa_path):
                    # Fallback to current working directory
                    sa_path = "service-account.json"
                cred = credentials.Certificate(sa_path)
                firebase_admin.initialize_app(cred)
            except Exception as e:
                print(f"No credentials found. Set FIREBASE_SA_JSON_B64 or provide service-account.json. Error: {e}")
                sys.exit(1)
    return firestore.client()


# -----------------------------
# UTILS
# -----------------------------
def parse_date_iso(s: str) -> dt.date:
    return dt.datetime.strptime(s, "%Y-%m-%d").date()


def date_range(start: dt.date, end: dt.date) -> List[dt.date]:
    out = []
    cur = start
    while cur <= end:
        out.append(cur)
        cur += dt.timedelta(days=1)
    return out


def get_season_id(date_obj: dt.date) -> str:
    # Season rule: starts Oct 15
    y = date_obj.year
    md = date_obj.month * 100 + date_obj.day
    if md >= 1015:
        return f"{y}_{str(y+1)[2:]}"
    return f"{y-1}_{str(y)[2:]}"


def qc_midday_iso(d: dt.date) -> str:
    # Use midday to avoid DST edge cases at 00:00
    naive = dt.datetime(d.year, d.month, d.day, 12, 0, 0)
    aware = TZ_QC.localize(naive)
    return aware.isoformat()


def haversine_km(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    R = 6371.0088
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dphi = math.radians(lat2 - lat1)
    dlmb = math.radians(lon2 - lon1)
    a = math.sin(dphi / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dlmb / 2) ** 2
    return 2 * R * math.asin(math.sqrt(a))


def bbox_from_radius_km(lat: float, lon: float, radius_km: float) -> List[float]:
    lat_deg = radius_km / 111.0
    lon_deg = radius_km / (111.0 * max(0.1, math.cos(math.radians(lat))))
    return [lon - lon_deg, lat - lat_deg, lon + lon_deg, lat + lat_deg]


def get_json(path: str, params: Dict[str, Any]) -> Dict[str, Any]:
    url = f"{MSC_API_URL}{path}"
    r = requests.get(url, params=params, timeout=60, headers={"User-Agent": MSC_UA})
    r.raise_for_status()
    return r.json()


def to_float(x: Any) -> Optional[float]:
    if x is None:
        return None
    try:
        return float(x)
    except Exception:
        return None


# -----------------------------
# MSC CLIMATE-DAILY (daily mean temperature)
# -----------------------------
def fetch_candidate_stations(lat: float, lon: float, radius_km: float, province_code: str = "QC") -> List[Dict[str, Any]]:
    bbox = bbox_from_radius_km(lat, lon, radius_km)
    data = get_json(
        "/collections/climate-stations/items",
        {
            "f": "json",
            "lang": "en",
            "bbox": ",".join(map(str, bbox)),
            "limit": 800,
            "PROV_STATE_TERR_CODE": province_code,
        },
    )

    feats = data.get("features", []) or []
    stations: List[Dict[str, Any]] = []
    for feat in feats:
        geom = feat.get("geometry") or {}
        coords = geom.get("coordinates") or [None, None]
        st_lon, st_lat = coords[0], coords[1]
        if st_lat is None or st_lon is None:
            continue

        props = feat.get("properties") or {}
        climate_id = props.get("CLIMATE_IDENTIFIER")
        if not climate_id:
            continue

        dist = haversine_km(lat, lon, float(st_lat), float(st_lon))
        stations.append(
            {
                "distance_km": dist,
                "lat": float(st_lat),
                "lon": float(st_lon),
                "name": props.get("STATION_NAME") or "Unknown",
                "climate_id": climate_id,
            }
        )

    stations.sort(key=lambda s: s["distance_km"])
    return stations


def fetch_climate_daily(climate_identifier: str, start: dt.date, end: dt.date) -> List[Dict[str, Any]]:
    time_range = f"{start.isoformat()}/{end.isoformat()}"
    props_filter = ",".join(
        [
            "LOCAL_DATE",
            "MEAN_TEMPERATURE",
            "MEAN_TEMPERATURE_FLAG",
            "MIN_TEMPERATURE",
            "MAX_TEMPERATURE",
            "STATION_NAME",
            "CLIMATE_IDENTIFIER",
        ]
    )

    out: List[Dict[str, Any]] = []
    limit = 500
    offset = 0

    while True:
        data = get_json(
            "/collections/climate-daily/items",
            {
                "f": "json",
                "lang": "en",
                "CLIMATE_IDENTIFIER": climate_identifier,
                "datetime": time_range,
                "properties": props_filter,
                "sortby": "LOCAL_DATE",
                "limit": limit,
                "offset": offset,
            },
        )
        feats = data.get("features", []) or []
        if not feats:
            break
        out.extend(feats)
        if len(feats) < limit:
            break
        offset += limit

    return out


def build_temp_maps(feats: List[Dict[str, Any]]) -> Tuple[Dict[str, Optional[float]], Dict[str, str]]:
    """
    Returns:
      mean_by_date: { 'YYYY-MM-DD': mean_temp or None }
      flag_by_date: { 'YYYY-MM-DD': flag string (maybe empty) }
    Dedup by date: keep first occurrence.
    """
    mean_by_date: Dict[str, Optional[float]] = {}
    flag_by_date: Dict[str, str] = {}

    rows: List[Tuple[str, Optional[float], str]] = []
    for f in feats:
        p = f.get("properties") or {}
        local_date = p.get("LOCAL_DATE")
        if not local_date:
            continue
        # MSC API can return 'YYYY-MM-DD 00:00:00' or 'YYYY-MM-DD', we only want the date part
        d = str(local_date)[:10]
        mean_t = to_float(p.get("MEAN_TEMPERATURE"))
        flag = str(p.get("MEAN_TEMPERATURE_FLAG") or "")
        rows.append((d, mean_t, flag))

    rows.sort(key=lambda x: x[0])
    for d, mean_t, flag in rows:
        if d in mean_by_date:
            continue
        mean_by_date[d] = mean_t
        flag_by_date[d] = flag

    return mean_by_date, flag_by_date


def compute_djgc_over_range(mean_by_date: Dict[str, Optional[float]]) -> Dict[str, float]:
    """
    Computes DJGC starting at 0, day by day chronologically, using mean daily temperature T_mean:
      - if T_mean < 0: DJGC += abs(T_mean)
      - if T_mean > 0: DJGC = max(0, DJGC - T_mean)
      - if T_mean == 0 or missing: DJGC unchanged
    """
    djgc = 0.0
    out: Dict[str, float] = {}
    
    # Sort dates chronologically to ensure proper DJGC accumulation
    sorted_dates = sorted(mean_by_date.keys())
    
    for ds in sorted_dates:
        mean_t = mean_by_date.get(ds)
        
        if mean_t is None:
            # no update if missing
            out[ds] = round(djgc, 3)
            continue
            
        if mean_t < 0:
            djgc += abs(mean_t)
        elif mean_t > 0:
            djgc = max(0.0, djgc - mean_t)
            
        out[ds] = round(djgc, 3)
        
    return out


# -----------------------------
# CEHQ Q.TXT (daily discharge)
# -----------------------------
DATA_RE = re.compile(
    r"^\s*(?P<station>\d+)\s+"
    r"(?P<date>\d{4}/\d{2}/\d{2})\s+"
    r"(?P<q>-?\d+(?:[.,]\d+)?)"
    r"(?:\s+(?P<remark>\S+))?\s*$"
)


def fetch_text(url: str) -> str:
    r = requests.get(url, timeout=120, headers={"User-Agent": CEHQ_UA})
    r.raise_for_status()
    if not r.encoding:
        r.encoding = "utf-8"
    text = r.text
    # If decoding looks broken, fallback to latin-1
    if "\ufffd" in text:
        text = r.content.decode("latin-1", errors="replace")
    return text


def parse_date_ymd_slash(s: str) -> dt.date:
    return dt.datetime.strptime(s, "%Y/%m/%d").date()


def to_float_maybe(x: str) -> Optional[float]:
    if x is None:
        return None
    s = str(x).strip().replace("\xa0", " ")
    if not s:
        return None
    s = s.replace("*", "").strip()
    s = s.replace(",", ".")
    try:
        return float(s)
    except ValueError:
        return None


def parse_qtxt_daily(text: str, station_filter: str) -> List[Tuple[dt.date, float, str]]:
    rows: List[Tuple[dt.date, float, str]] = []
    for line in text.replace("\r\n", "\n").replace("\r", "\n").split("\n"):
        m = DATA_RE.match(line)
        if not m:
            continue
        st = m.group("station")
        if st != station_filter:
            continue
        d = parse_date_ymd_slash(m.group("date"))
        q = to_float_maybe(m.group("q"))
        if q is None:
            continue
        remark = (m.group("remark") or "").strip()
        rows.append((d, q, remark))
    rows.sort(key=lambda x: x[0])
    return rows


def filter_range_q(rows: List[Tuple[dt.date, float, str]], start: dt.date, end: dt.date) -> List[Tuple[dt.date, float, str]]:
    return [(d, q, r) for (d, q, r) in rows if start <= d <= end]


def dedupe_daily_q(rows: List[Tuple[dt.date, float, str]]) -> List[Tuple[dt.date, float, str]]:
    sums: Dict[dt.date, float] = defaultdict(float)
    counts: Dict[dt.date, int] = defaultdict(int)
    remarks: Dict[dt.date, set[str]] = defaultdict(set)

    for d, q, r in rows:
        sums[d] += q
        counts[d] += 1
        if r:
            remarks[d].add(r)

    out: List[Tuple[dt.date, float, str]] = []
    for d in sorted(counts.keys()):
        avg = sums[d] / counts[d]
        rem = " ".join(sorted(remarks[d])) if remarks[d] else ""
        out.append((d, avg, rem))
    return out


def fetch_cehq_daily_discharge(station: str, start: dt.date, end: dt.date) -> Dict[str, Tuple[float, str]]:
    url = CEHQ_QTXT_URL.format(station=station)
    print(f"[download] {url}")
    text = fetch_text(url)

    rows = parse_qtxt_daily(text, station_filter=station)
    if not rows:
        raise SystemExit(
            "No discharge rows parsed from CEHQ Q.txt.\n"
            "Tip: open the URL in a browser and confirm data lines look like: 052219 1970/01/01 9.400 R"
        )

    rows = filter_range_q(rows, start, end)
    if not rows:
        raise SystemExit("Parsed CEHQ Q.txt, but no rows fall inside the requested date range.")

    rows = dedupe_daily_q(rows)

    out: Dict[str, Tuple[float, str]] = {}
    for d, q, r in rows:
        out[d.isoformat()] = (q, r)
    return out


# -----------------------------
# FIRESTORE WRITE
# -----------------------------
def chunk_list(xs: List[str], n: int) -> List[List[str]]:
    return [xs[i : i + n] for i in range(0, len(xs), n)]


def main() -> None:
    ap = argparse.ArgumentParser(description="Backfill daily mean temp (MSC) + daily discharge (CEHQ) into Firestore.")
    ap.add_argument("--station-doc", default="lassomption", help="Firestore station document id (default: lassomption)")
    ap.add_argument("--cehq-station", default="052219", help="CEHQ station id used in *_Q.txt (default: 052219)")

    ap.add_argument("--lat", type=float, default=45.81)
    ap.add_argument("--lon", type=float, default=-73.43)
    ap.add_argument("--radius-km", type=float, default=250.0)
    ap.add_argument("--try-n", type=int, default=25)
    ap.add_argument("--min-days", type=int, default=30)

    ap.add_argument("--start", default="2025-10-15")
    ap.add_argument("--end", default="2026-02-08")

    ap.add_argument("--dry-run", action="store_true", help="Fetch/compute but do not write to Firestore")
    ap.add_argument("--chunk-days", type=int, default=150, help="Write in chunks of N days (default 150)")
    args = ap.parse_args()

    start = parse_date_iso(args.start)
    end = parse_date_iso(args.end)
    if end < start:
        raise SystemExit("--end must be >= --start")

    season_id = get_season_id(start)  # for this range it's one season
    now_qc = dt.datetime.now(TZ_QC).isoformat()

    # 1) Pick best climate station for coverage
    stations = fetch_candidate_stations(args.lat, args.lon, args.radius_km, province_code="QC")
    if not stations:
        raise SystemExit("No climate stations found. Increase --radius-km.")

    best = None
    best_count = -1
    best_feats: List[Dict[str, Any]] = []

    expected_days = (end - start).days + 1
    for st in stations[: max(1, args.try_n)]:
        feats = fetch_climate_daily(st["climate_id"], start, end)
        mean_by_date, _ = build_temp_maps(feats)
        n = len(mean_by_date)
        if n > best_count:
            best = st
            best_count = n
            best_feats = feats
        if n >= expected_days:
            break

    if best is None or best_count < args.min_days:
        raise SystemExit(
            f"Tried {min(args.try_n, len(stations))} stations within {args.radius_km} km, "
            f"but best returned only {best_count} days. Increase --radius-km or widen try-n."
        )

    mean_by_date, flag_by_date = build_temp_maps(best_feats)
    djgc_by_date = compute_djgc_over_range(mean_by_date)

    print("\n=== Temperature source (MSC climate-daily) ===")
    print(f"Station:   {best['name']}")
    print(f"ClimateID: {best['climate_id']}")
    print(f"Distance:  {best['distance_km']:.2f} km")
    print(f"Coverage:  {best_count}/{expected_days} days")

    # 2) Fetch discharge from CEHQ Q.txt
    q_by_date = fetch_cehq_daily_discharge(args.cehq_station, start, end)
    print("\n=== Discharge source (CEHQ Q.txt) ===")
    print(f"Station:   {args.cehq_station}")
    print(f"Coverage:  {len(q_by_date)}/{expected_days} days")

    # Build the DJGC / Discharge points array
    all_dates = [d.isoformat() for d in date_range(start, end)]
    points = []

    for ds in all_dates:
        djgc = djgc_by_date.get(ds)
        q_tuple = q_by_date.get(ds)
        
        # Only keep days where both DJGC and Q exist
        if djgc is not None and q_tuple is not None:
            q_val = q_tuple[0]
            if q_val is not None:
                points.append({
                    "djgc": round(float(djgc), 3),
                    "q": round(float(q_val), 3)
                })

    updates = {
        "djgc_q_points": points
    }

    print("\n=== Firestore target ===")
    print(f"stations/{args.station_doc}/seasons/{season_id}")
    print(f"Total valid DJGC vs Q points: {len(points)}")
    print(f"Dry-run: {args.dry_run}")

    if args.dry_run:
        print("Dry-run enabled: not writing anything.")
        # If dry run, let's print the last few points just to verify the structure
        print("Sample points:", json.dumps(points[-5:], indent=2))
        return

    db = init_firebase()
    ref = db.collection("stations").document(args.station_doc).collection("seasons").document(season_id)

    # We can just write the entire object at once
    ref.set(updates, merge=True)
    print(f"Committed {len(points)} DJGC vs Q pairs to Firestore.")

    print("Done.")


if __name__ == "__main__":
    main()
