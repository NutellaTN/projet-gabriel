#!/usr/bin/env python3
"""
poll_daily.py — single-file polling script for Projet Gabriel.

Includes all utility functions previously spread across:
  - new_hydro_cehq.py      (CEHQ Highcharts CSV extractor via Playwright)
  - temperature-forecast-main.py (MSC CityPage day/night + hourly forecast)
  - temperature-hourly-main.py  (MSC SWOB realtime hourly temperature)
"""
from __future__ import annotations

import base64
import csv
import io
import json
import math
import os
import re
import sys
import argparse
import datetime
from datetime import timedelta
from typing import Any, Dict, List, Optional, Tuple
from urllib.parse import unquote

import requests
import pytz
import firebase_admin
from firebase_admin import credentials, firestore

# ── Playwright is only needed for the CEHQ fetcher ──────────────────────────
try:
    from playwright.sync_api import sync_playwright
    _HAS_PLAYWRIGHT = True
except ImportError:
    _HAS_PLAYWRIGHT = False

# ── zoneinfo (Python 3.9+) ───────────────────────────────────────────────────
try:
    from zoneinfo import ZoneInfo
except ImportError:
    ZoneInfo = None  # type: ignore

# ═══════════════════════════════════════════════════════════════════════════════
# CONSTANTS
# ═══════════════════════════════════════════════════════════════════════════════
FIREBASE_SA_ENV_VAR = "FIREBASE_SA_JSON_B64"
SEASON              = "2025_26"

RIVERS = {
    "lassomption": {"cehq": "052219", "climate_id": "7014160", "lat": 45.81, "lon": -73.43},
    "montmorency": {"cehq": "051001", "climate_id": "7010565", "lat": 46.837, "lon": -71.197},
    "chaudiere": {"cehq": "023429", "climate_id": "7028754", "lat": 46.205, "lon": -70.785},
    "chateauguay": {"cehq": "030905", "climate_id": "7027039", "lat": 45.167222, "lon": -73.678889},
    "matane": {"cehq": "021601", "climate_id": "7051201", "lat": 48.308632, "lon": -67.252525},
    "matapedia": {"cehq": "011509", "climate_id": "7051201", "lat": 48.308632, "lon": -67.252525},
    "mistassini": {"cehq": "062102", "climate_id": "7065639", "lat": 48.841667, "lon": -72.546944},
    "saintfrancois": {"cehq": "030208", "climate_id": "7024280", "lat": 45.368889, "lon": -71.823611},
    "sainteanne": {"cehq": "050408", "climate_id": "7016293", "lat": 46.791111, "lon": -71.393333},
    "beaurivage": {"cehq": "023401", "climate_id": "7028754", "lat": 46.205, "lon": -70.785},
    "becancour": {"cehq": "024014", "climate_id": "7028442", "lat": 46.049167, "lon": -71.266112},
    "eaton": {"cehq": "030234", "climate_id": "7028123", "lat": 45.438611, "lon": -71.691389},
    "etchemin": {"cehq": "023303", "climate_id": "7028754", "lat": 46.205, "lon": -70.785},
    "saintcharles": {"cehq": "050904", "climate_id": "7016293", "lat": 46.791111, "lon": -71.393333},
}

# Values overridden in main()
STATION_KEY  = "lassomption"
CEHQ_STATION = "052219"
LAT          = 45.81
LON          = -73.43
CLIMATE_ID   = "7014160"

# MSC API
MSC_BASE_URL = "https://api.weather.gc.ca"
MSC_UA       = "poll-daily/2.0 (+https://github.com/projet-gabriel)"

RADIUS_KM  = 80.0
MSC_LANG   = "en"
QUEBEC_TZ  = "America/Montreal"
MAX_HOURS   = 48
MAX_PERIODS = 14

# CEHQ Playwright config
CEHQ_GRAPH_URL = "https://www.cehq.gouv.qc.ca/suivihydro/graphique.asp?NoStation={station}"
CEHQ_UA        = "cehq-csv-extract/1.0 (+https://www.cehq.gouv.qc.ca/)"
CEHQ_NEEDLES   = [
    "Débit observ", "Debit observ",
    "Débit prévu", "Debit prev",
    "IC 25-75", "Emission de la prevision", "Émission de la prévision",
]


# ═══════════════════════════════════════════════════════════════════════════════
# FIREBASE
# ═══════════════════════════════════════════════════════════════════════════════

def init_firebase() -> firestore.Client:
    if not firebase_admin._apps:
        try:
            from dotenv import load_dotenv
            load_dotenv()
        except ImportError:
            pass
        b64_json = os.environ.get(FIREBASE_SA_ENV_VAR)
        if b64_json:
            try:
                cred_json = json.loads(base64.b64decode(b64_json).decode("utf-8"))
                cred = credentials.Certificate(cred_json)
                firebase_admin.initialize_app(cred)
            except Exception as e:
                print(f"Error initialising Firebase from {FIREBASE_SA_ENV_VAR}: {e}")
                sys.exit(1)
        else:
            try:
                script_dir = os.path.dirname(os.path.abspath(__file__))
                sa_path = os.path.join(script_dir, "service-account.json")
                if not os.path.exists(sa_path):
                    sa_path = "service-account.json"
                cred = credentials.Certificate(sa_path)
                firebase_admin.initialize_app(cred)
            except Exception as e:
                print(f"No credentials found. Set {FIREBASE_SA_ENV_VAR} or provide service-account.json. Error: {e}")
                sys.exit(1)
    return firestore.client()


# ═══════════════════════════════════════════════════════════════════════════════
# SHARED HELPERS
# ═══════════════════════════════════════════════════════════════════════════════

def to_float(x: Any) -> Optional[float]:
    if x is None:
        return None
    try:
        return float(x)
    except Exception:
        return None


def get_quebec_tz() -> datetime.tzinfo:
    if ZoneInfo is None:
        raise RuntimeError("zoneinfo not available. Use Python 3.9+ or: pip install tzdata")
    return ZoneInfo(QUEBEC_TZ)


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


def msc_get_json(path: str, params: Dict[str, Any]) -> Dict[str, Any]:
    url = f"{MSC_BASE_URL}{path}"
    r = requests.get(url, params=params, timeout=30, headers={"User-Agent": MSC_UA})
    r.raise_for_status()
    return r.json()


def get_lang_value(obj: Any, lang: str = MSC_LANG) -> Any:
    if isinstance(obj, dict) and lang in obj:
        return obj.get(lang)
    return obj


def parse_iso8601_z_to_utc(s: str) -> datetime.datetime:
    s = s.strip()
    if s.endswith("Z"):
        s = s[:-1] + "+00:00"
    d = datetime.datetime.fromisoformat(s)
    if d.tzinfo is None:
        d = d.replace(tzinfo=datetime.timezone.utc)
    return d.astimezone(datetime.timezone.utc)


# ═══════════════════════════════════════════════════════════════════════════════
# MSC CLIMATE-DAILY (historical temperatures)
# ═══════════════════════════════════════════════════════════════════════════════

def fetch_climate_daily(climate_id: str, start_date: str, end_date: str) -> Dict[str, Optional[float]]:
    url = "https://api.weather.gc.ca/collections/climate-daily/items"
    limit, offset, all_props = 500, 0, []
    while True:
        params = {
            "f": "json",
            "CLIMATE_IDENTIFIER": climate_id,
            "datetime": f"{start_date}/{end_date}",
            "limit": limit,
            "offset": offset,
            "sortby": "LOCAL_DATE",
        }
        try:
            r = requests.get(url, params=params, timeout=30)
            r.raise_for_status()
            data = r.json()
        except Exception as e:
            raise RuntimeError(f"Error fetching climate-daily data: {e}")
        features = data.get("features", [])
        if not features:
            break
        for f in features:
            all_props.append(f.get("properties", {}))
        if len(features) < limit:
            break
        offset += limit

    mean_by_date: Dict[str, Optional[float]] = {}
    for p in all_props:
        local_date = p.get("LOCAL_DATE")
        if not local_date:
            continue
        d = str(local_date)[:10]
        mean_t = to_float(p.get("MEAN_TEMPERATURE"))
        if mean_t is not None or d not in mean_by_date:
            mean_by_date[d] = mean_t
    return mean_by_date


# ═══════════════════════════════════════════════════════════════════════════════
# MSC CITYPAGE (forecast temperatures — day/night + hourly)
# ═══════════════════════════════════════════════════════════════════════════════

def pick_nearest_citypage_item(lat: float, lon: float, radius_km: float, lang: str) -> Tuple[str, float]:
    bbox = bbox_from_radius_km(lat, lon, radius_km)
    data = msc_get_json(
        "/collections/citypageweather-realtime/items",
        {"f": "json", "lang": lang, "bbox": ",".join(map(str, bbox)), "limit": 200},
    )
    feats = data.get("features", []) or []
    if not feats:
        raise RuntimeError("No citypage points found. Increase RADIUS_KM.")

    best_id, best_dist = None, None
    for f in feats:
        fid = f.get("id")
        coords = (f.get("geometry") or {}).get("coordinates") or [None, None]
        st_lon, st_lat = coords[0], coords[1]
        if fid is None or st_lat is None or st_lon is None:
            continue
        d = haversine_km(lat, lon, float(st_lat), float(st_lon))
        if best_dist is None or d < best_dist:
            best_dist, best_id = d, fid

    if best_id is None:
        raise RuntimeError("Nearby items returned, but none had usable coordinates/ids.")
    return best_id, best_dist  # type: ignore[return-value]


def extract_hourly_forecast_rows(props: Dict[str, Any], lang: str, max_hours: int, qc_tz: datetime.tzinfo) -> List[List[Any]]:
    hfg = props.get("hourlyForecastGroup") or {}
    hourly = hfg.get("hourlyForecasts") or []
    if not isinstance(hourly, list) or not hourly:
        return []

    by_hour: Dict[datetime.datetime, Tuple[datetime.datetime, Optional[float], Optional[str]]] = {}
    for hf in hourly:
        ts_raw = hf.get("timestamp")
        ts_raw = get_lang_value(ts_raw, lang) if ts_raw is not None else None
        if not ts_raw:
            continue
        ts_utc = parse_iso8601_z_to_utc(str(ts_raw))
        ts_local = ts_utc.astimezone(qc_tz)
        hour_bucket = ts_local.replace(minute=0, second=0, microsecond=0)
        temp_block = hf.get("temperature") or {}
        temp_val = get_lang_value(temp_block.get("value"), lang)
        temp_units = get_lang_value(temp_block.get("units"), lang)
        by_hour[hour_bucket] = (ts_local, to_float(temp_val), temp_units)

    rows: List[List[Any]] = []
    for hb in sorted(by_hour.keys())[: (max_hours if max_hours > 0 else len(by_hour))]:
        ts_local, temp, units = by_hour[hb]
        rows.append([hb.strftime("%Y-%m-%d %H:%M %Z"), temp, units])
    return rows


def extract_daynight_rows(props: Dict[str, Any], lang: str, max_periods: int) -> List[List[Any]]:
    fg = props.get("forecastGroup") or {}
    forecasts = fg.get("forecasts") or []
    if not isinstance(forecasts, list) or not forecasts:
        return []

    rows: List[List[Any]] = []
    seen: set = set()
    for fc in forecasts:
        period = fc.get("period") or {}
        label = (
            get_lang_value(period.get("textForecastName"), lang)
            or get_lang_value(period.get("value"), lang)
            or "?"
        )
        temps_container = fc.get("temperatures") or {}
        temps = temps_container.get("temperature") or []
        if isinstance(temps, dict):
            temps = [temps]

        high = low = units = None
        for t in temps:
            t_class = get_lang_value(t.get("class"), lang)
            t_val = get_lang_value(t.get("value"), lang) if "value" in t else get_lang_value(t, lang)
            t_units = get_lang_value(t.get("units"), lang)
            if units is None and t_units:
                units = t_units
            v = to_float(t_val)
            if t_class == "high":
                high = v
            elif t_class == "low":
                low = v
            else:
                if high is None:
                    high = v
                elif low is None:
                    low = v

        start_time = (
            period.get("startTime") or period.get("start_time")
            or fc.get("startTime") or fc.get("start_time")
        )
        start_time = get_lang_value(start_time, lang) if start_time is not None else None
        key = ("t", str(start_time)) if start_time else ("v", str(label), str(high), str(low))
        if key in seen:
            continue
        seen.add(key)
        rows.append([label, high, low, units])
        if max_periods > 0 and len(rows) >= max_periods:
            break
    return rows


def get_realtime_and_forecast_temps() -> Dict[str, float]:
    """Fetch ECCC Day/Night forecasts and compute daily average temperatures."""
    print("[running] Fetching ECCC forecast temperatures via MSC CityPage API...")
    qc_tz = get_quebec_tz()

    item_id, _ = pick_nearest_citypage_item(LAT, LON, RADIUS_KM, MSC_LANG)
    item = msc_get_json(
        f"/collections/citypageweather-realtime/items/{item_id}",
        {"f": "json", "lang": MSC_LANG},
    )
    props = item.get("properties") or {}
    daynight_rows = extract_daynight_rows(props, MSC_LANG, MAX_PERIODS)

    tz = pytz.timezone(QUEBEC_TZ)
    now = datetime.datetime.now(tz)
    current_date = now.date()

    future_temps: Dict[str, float] = {}
    last_night_low = None

    for row in daynight_rows:
        label = row[0].lower().strip()
        high  = row[1]
        low   = row[2]
        if label == "today":
            pass
        elif label == "tonight" or "night" in label:
            if low is not None:
                last_night_low = low
        else:
            target_date = current_date
            days = {"monday": 0, "tuesday": 1, "wednesday": 2, "thursday": 3,
                    "friday": 4, "saturday": 5, "sunday": 6}
            if label in days:
                target_wd = days[label]
                target_date += timedelta(days=1)
                while target_date.weekday() != target_wd:
                    target_date += timedelta(days=1)
            else:
                target_date += timedelta(days=1)

            if last_night_low is not None and high is not None:
                avg_t = (last_night_low + high) / 2.0
                future_temps[target_date.strftime("%Y-%m-%d")] = round(avg_t, 3)
            current_date = target_date

    # Bridge gaps with hourly average
    hourly_rows = extract_hourly_forecast_rows(props, MSC_LANG, MAX_HOURS, qc_tz)
    hourly_by_date: Dict[str, List[float]] = {}
    for hr in hourly_rows:
        dt_str = str(hr[0])
        if len(dt_str) >= 10:
            d = dt_str[:10]
            val = hr[1]
            if val is not None:
                hourly_by_date.setdefault(d, []).append(val)
    for d, vals in hourly_by_date.items():
        if d not in future_temps and vals:
            future_temps[d] = round(sum(vals) / len(vals), 3)

    return future_temps


# ═══════════════════════════════════════════════════════════════════════════════
# CEHQ HIGHCHARTS CSV EXTRACTOR (Playwright)
# ═══════════════════════════════════════════════════════════════════════════════

def _sniff_delimiter(text: str) -> str:
    sample = text[:4096]
    try:
        return csv.Sniffer().sniff(sample, delimiters=";,\t").delimiter
    except Exception:
        return ";"


def _to_float_csv(x: str) -> Optional[float]:
    s = (x or "").strip().replace("\xa0", " ")
    if not s:
        return None
    s = s.replace("*", "").strip()
    s = re.sub(r"[^0-9,\.\-]+", "", s)
    if not s:
        return None
    s = s.replace(",", ".")
    try:
        return float(s)
    except ValueError:
        return None


def _decode_if_data_url(s: str) -> str:
    if not s.startswith("data:text/csv"):
        return s
    if ";base64," in s:
        b64 = s.split(";base64,", 1)[1]
        return base64.b64decode(b64).decode("utf-8", errors="replace")
    if "," in s:
        return unquote(s.split(",", 1)[1])
    return s


def _parse_cehq_csv(csv_text: str) -> Tuple[List[str], List[List[Any]]]:
    if csv_text.startswith("\ufeff"):
        csv_text = csv_text.lstrip("\ufeff")
    delim = _sniff_delimiter(csv_text)
    reader = csv.reader(io.StringIO(csv_text), delimiter=delim)
    rows = [r for r in reader if r and any(c.strip() for c in r)]
    if not rows:
        raise RuntimeError("CSV is empty.")
    headers = [h.strip().strip('"').strip() for h in rows[0]]
    width = len(headers)
    data: List[List[Any]] = []
    for r in rows[1:]:
        r = [c.strip().strip('"').strip() for c in r]
        if len(r) < width:
            r += [""] * (width - len(r))
        elif len(r) > width:
            r = r[:width]
        out_row: List[Any] = []
        for i, v in enumerate(r):
            if i == 0 and "date" in headers[0].lower():
                out_row.append(v)
            else:
                fv = _to_float_csv(v)
                out_row.append(fv if fv is not None else v)
        data.append(out_row)
    return headers, data


def _get_cehq_csv_via_playwright(station: str, headless: bool = True) -> str:
    if not _HAS_PLAYWRIGHT:
        raise RuntimeError("playwright is not installed. Run: pip install playwright && playwright install chromium")
    url = CEHQ_GRAPH_URL.format(station=station)

    EXTRACT_JS = """
    ({needles}) => {
      const charts = (window.Highcharts && Array.isArray(Highcharts.charts))
        ? Highcharts.charts.filter(Boolean) : [];

      function tryChart(chart) {
        if (!chart) return null;
        if (typeof chart.getCSV === "function") {
          try { const c = chart.getCSV(); if (typeof c === "string" && c.length > 20) return c; } catch(e) {}
        }
        if (typeof chart.downloadCSV === "function") {
          try {
            let captured = null;
            const old = window.Highcharts.downloadURL;
            window.Highcharts.downloadURL = (dataURL) => { captured = dataURL; };
            chart.downloadCSV();
            window.Highcharts.downloadURL = old;
            if (captured && captured.startsWith("data:text/csv")) return captured;
          } catch(e) {}
        }
        return null;
      }

      for (const ch of charts) {
        const csv = tryChart(ch);
        if (!csv) continue;
        if (needles.some(n => csv.includes(n))) return { ok: true, csv };
      }
      for (const ch of charts) {
        const csv = tryChart(ch);
        if (csv) return { ok: true, csv };
      }
      return { ok: false };
    }
    """

    import time
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=headless)
        page = browser.new_page(user_agent=CEHQ_UA)
        
        result = {"ok": False}
        max_retries = 3
        for attempt in range(1, max_retries + 1):
            try:
                page.goto(url, wait_until="networkidle", timeout=120_000)
                page.wait_for_function(
                    "window.Highcharts && Array.isArray(Highcharts.charts) && Highcharts.charts.filter(Boolean).length > 0",
                    timeout=90_000,
                )
                result = page.evaluate(EXTRACT_JS, {"needles": CEHQ_NEEDLES})
                if result.get("ok"):
                    break
            except Exception as e:
                print(f"[warning] CEHQ navigation/evaluation failed (Attempt {attempt}/{max_retries}): {e}")
                if attempt < max_retries:
                    time.sleep(10 * attempt)
                    
        browser.close()

    if not result.get("ok"):
        raise RuntimeError(f"Could not extract CSV from CEHQ Highcharts for station {station}.")
    return _decode_if_data_url(str(result["csv"]))


def parse_highcharts_q() -> Tuple[Dict[str, float], Dict[str, Dict[str, float]]]:
    """
    Returns (observed_q_by_date, predicted_q_by_date).
    Fetches CEHQ Highcharts data directly via Playwright — no subprocess needed.
    """
    print("[running] Fetching CEHQ discharge data via Playwright...")
    try:
        raw_csv = _get_cehq_csv_via_playwright(CEHQ_STATION, headless=True)
        _, rows = _parse_cehq_csv(raw_csv)

        daily_obs: Dict[str, Dict] = {}
        daily_pred: Dict[str, Dict] = {}

        for row in rows:
            if len(row) < 8:
                continue
            dt_str = str(row[0]).strip()
            if len(dt_str) < 19:
                continue
            d = dt_str[:10]
            hour = int(dt_str[11:13])
            dist = abs(hour - 12)

            obs_val  = to_float(str(row[2]).replace(",", ".")) if row[2] else None
            pred_val = to_float(str(row[5]).replace(",", ".")) if row[5] else None
            if pred_val is None:
                pred_val = to_float(str(row[4]).replace(",", ".")) if row[4] else None
            p25 = to_float(str(row[6]).replace(",", ".")) if row[6] else None
            p75 = to_float(str(row[7]).replace(",", ".")) if row[7] else None

            if obs_val is not None:
                if d not in daily_obs or dist < daily_obs[d]["dist"]:
                    daily_obs[d] = {"dist": dist, "q": obs_val}
            if pred_val is not None and p25 is not None and p75 is not None:
                if d not in daily_pred or dist < daily_pred[d]["dist"]:
                    daily_pred[d] = {"dist": dist, "q": pred_val, "p25": p25, "p75": p75}

        obs_by_date  = {d: v["q"] for d, v in daily_obs.items()}
        pred_by_date = {d: {"q": v["q"], "p25": v["p25"], "p75": v["p75"]} for d, v in daily_pred.items()}
        return obs_by_date, pred_by_date

    except Exception as e:
        raise RuntimeError(f"Failed to fetch CEHQ data: {e}")


# ═══════════════════════════════════════════════════════════════════════════════
# DJDC-5 COMPUTATION
# ═══════════════════════════════════════════════════════════════════════════════

def compute_djdc_array(mean_by_date: Dict[str, float]) -> Dict[str, float]:
    djdc = 0.0
    out: Dict[str, float] = {}
    for ds in sorted(mean_by_date.keys()):
        t = mean_by_date[ds]
        delta = t + 5.0
        if delta > 0:
            djdc += delta
        elif delta < 0:
            djdc = max(0.0, djdc - abs(delta))
        out[ds] = round(djdc, 3)
    return out


# ═══════════════════════════════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════════════════════════════

def process_station(db: firestore.Client, station_key: str, start_date: str, dry_run: bool) -> None:
    global STATION_KEY, CEHQ_STATION, LAT, LON, CLIMATE_ID
    cfg = RIVERS[station_key]
    STATION_KEY = station_key
    CEHQ_STATION = cfg["cehq"]
    LAT = cfg["lat"]
    LON = cfg["lon"]
    CLIMATE_ID = cfg["climate_id"]

    # 1. Historical Temp
    yesterday = (datetime.datetime.utcnow() - timedelta(days=1)).strftime("%Y-%m-%d")
    print(f"Fetching climate-daily from {start_date} to {yesterday} for {STATION_KEY}...")
    hist_temp = fetch_climate_daily(CLIMATE_ID, start_date, yesterday)

    # 2. Future Temp (forecast)
    future_temp = get_realtime_and_forecast_temps()

    # 3. Merge Temp
    all_temp: Dict[str, float] = {}
    for d, t in hist_temp.items():
        if t is not None:
            all_temp[d] = t
    for d, t in future_temp.items():
        if d not in all_temp:
            all_temp[d] = t

    # 4. Generate DJDC-5 series
    djdc_series = compute_djdc_array(all_temp)

    # 5. Fetch Realtime & Prediction Q
    obs_q, pred_q = parse_highcharts_q()

    # 6. Prepare Firestore updates
    doc_ref = (
        db.collection("stations")
        .document(STATION_KEY)
        .collection("seasons")
        .document(SEASON)
    )

    doc_snap = doc_ref.get()
    doc_data = doc_snap.to_dict() if doc_snap.exists else {}

    existing_points = doc_data.get("djdc_q_points", [])
    merged_points: Dict[str, Any] = {}

    base_date = datetime.datetime.strptime(start_date, "%Y-%m-%d")
    for pt in existing_points:
        d_str = pt.get("date")
        if not d_str:
            d_str = base_date.strftime("%Y-%m-%d")
            base_date += timedelta(days=1)
        pt["date"] = d_str
        merged_points[d_str] = pt

    sorted_obs_dates = sorted(obs_q.keys())
    for d in sorted_obs_dates:
        if d in djdc_series:
            merged_points[d] = {"date": d, "djdc": djdc_series[d], "q": obs_q[d]}

    final_points = [merged_points[d] for d in sorted(merged_points.keys())]

    latest_date = sorted_obs_dates[-1] if sorted_obs_dates else None
    latest_obj = doc_data.get("latest")
    if latest_date and latest_date in djdc_series:
        latest_obj = {
            "date":  latest_date,
            "dj":    djdc_series[latest_date],
            "q":     obs_q[latest_date],
            "phase": "DJDC5",
        }

    pred_values: Dict[str, Any] = {}
    for d, q_info in pred_q.items():
        if d in obs_q:
            continue
        if d in djdc_series:
            pred_values[d] = {
                "dj":  djdc_series[d],
                "q":   q_info["q"],
                "p25": q_info["p25"],
                "p75": q_info["p75"],
            }

    prediction_obj = {"phase": "DJDC5", "values": pred_values}

    print(f"\n=== Firestore target ===")
    print(f"Latest Point: {latest_obj}")
    print(f"Predictions:  {len(pred_values)} future points")

    if dry_run:
        print("Dry-run enabled: not writing anything.")
        return

    tz = get_quebec_tz()
    last_updated_str = datetime.datetime.now(tz).strftime("%d/%m/%Y %H:%M:%S")

    # 1. Set historical/latest data (merges with existing)
    doc_ref.set(
        {"djdc_q_points": final_points, "latest": latest_obj, "last_updated": last_updated_str},
        merge=True,
    )
    # 2. Fully overwrite the prediction object to wipe out old prediction dates
    doc_ref.update({"prediction": prediction_obj})
    print("Updates committed. Done.")

def main() -> None:
    parser = argparse.ArgumentParser(description="Poll daily data and push to Firestore.")
    parser.add_argument("--station", default="lassomption", help="Station key or 'all'")
    parser.add_argument("--start", default="2026-02-15", help="Start date for DJDC-5 accumulation (YYYY-MM-DD)")
    parser.add_argument("--dry-run", action="store_true", help="Do not write to Firestore")
    args = parser.parse_args()

    if args.station == "all":
        stations = list(RIVERS.keys())
    else:
        if args.station not in RIVERS:
            print(f"Unknown station: {args.station}")
            sys.exit(1)
        stations = [args.station]

    # Stop polling if in off-season (May 16th to October 14th)
    tz = get_quebec_tz()
    today = datetime.datetime.now(tz).date()
    off_season_start = datetime.date(today.year, 5, 16)
    off_season_end = datetime.date(today.year, 10, 14)
    if off_season_start <= today <= off_season_end:
        print(f"Current date {today} is in the off-season ({off_season_start} to {off_season_end}). Exiting without polling.")
        sys.exit(0)

    # Set active season dynamically based on date
    global SEASON
    year = today.year
    if today.month > 10 or (today.month == 10 and today.day >= 15):
        SEASON = f"{year}_{str(year + 1)[2:]}"
    else:
        SEASON = f"{year - 1}_{str(year)[2:]}"
    print(f"Active season: {SEASON}")


    db = init_firebase()
    
    errors = []

    for st in stations:
        try:
            print(f"\n======================================")
            print(f"Polling station: {st}")
            print(f"======================================")
            process_station(db, st, args.start, args.dry_run)
        except Exception as e:
            print(f"Error processing station {st}: {e}")
            errors.append(st)

    if errors:
        print(f"\nFailed to process the following stations: {', '.join(errors)}")
        sys.exit(1)
    else:
        print("\nAll stations processed successfully.")


if __name__ == "__main__":
    main()
