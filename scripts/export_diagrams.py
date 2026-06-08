#!/usr/bin/env python3
"""
export_diagrams.py
Loads scripts/river_data.json, queries Google Firestore for real-time observed
data (historical series and latest observations), clears the exports folder,
and renders professional debâcle diagrams for each river as vector PDF and
300 DPI PNG in the `exports/` folder.
"""

import os
import sys
import json
import math
import base64

try:
    import matplotlib
    matplotlib.use('Agg')  # Non-interactive backend
    import matplotlib.pyplot as plt
    import matplotlib.patches as mpatches
    import matplotlib.ticker as ticker
except ImportError:
    print("Error: matplotlib is required. Please install it using 'pip install matplotlib'.")
    sys.exit(1)

# Colors matching the application specifications (with 0.53 opacity in D3)
COLOR_GREEN = (29/255, 211/255, 29/255)
COLOR_YELLOW = (246/255, 240/255, 26/255)
COLOR_RED = (255/255, 0/255, 0/255)
ALPHA = 0.53

COLOR_OBSERVED = "#2563eb"  # Bright blue for observed lines

def load_env_manually(filepath=".env"):
    """
    Manually parses the local .env file to extract environment variables
    without requiring third-party library dependencies.
    """
    if not os.path.exists(filepath):
        print(f"Warning: .env file not found at {filepath}")
        return
    with open(filepath, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if "=" in line:
                key, val = line.split("=", 1)
                os.environ[key.strip()] = val.strip()

def init_firestore():
    """
    Initializes the Google Firebase Admin SDK using credentials loaded from .env.
    """
    load_env_manually()
    b64_json = os.environ.get("FIREBASE_SA_JSON_B64")
    if not b64_json:
        print("Error: FIREBASE_SA_JSON_B64 environment variable not found in .env.")
        print("Ensure you have set the base64 Firestore credentials in your .env file.")
        sys.exit(1)

    try:
        import firebase_admin
        from firebase_admin import credentials, firestore
    except ImportError:
        print("Error: firebase-admin is required. Please install it using 'pip install firebase-admin'.")
        sys.exit(1)

    if not firebase_admin._apps:
        try:
            cred_json = json.loads(base64.b64decode(b64_json).decode("utf-8"))
            cred = credentials.Certificate(cred_json)
            firebase_admin.initialize_app(cred)
        except Exception as e:
            print(f"Error initializing Firebase Admin SDK: {e}")
            sys.exit(1)
            
    return firestore.client()

def build_polygon_below(boundary, q_bottom):
    if not boundary or len(boundary) < 2:
        return []
    pts = []
    pts.append({"dj": boundary[0]["dj"], "q": q_bottom})
    pts.append({"dj": boundary[-1]["dj"], "q": q_bottom})
    for i in range(len(boundary) - 1, -1, -1):
        pts.append({"dj": boundary[i]["dj"], "q": boundary[i]["q"]})
    return pts

def build_polygon_between(lower, upper):
    if not lower or not upper or len(lower) < 2 or len(upper) < 2:
        return []
    pts = []
    for p in lower:
        pts.append({"dj": p["dj"], "q": p["q"]})
    for i in range(len(upper) - 1, -1, -1):
        pts.append({"dj": upper[i]["dj"], "q": upper[i]["q"]})
    return pts

def build_polygon_above(boundary, q_top):
    if not boundary or len(boundary) < 2:
        return []
    pts = []
    pts.append({"dj": boundary[0]["dj"], "q": q_top})
    pts.append({"dj": boundary[-1]["dj"], "q": q_top})
    for i in range(len(boundary) - 1, -1, -1):
        pts.append({"dj": boundary[i]["dj"], "q": boundary[i]["q"]})
    return pts

def normalize_segments(raw_zones):
    if not raw_zones:
        return []
    if isinstance(raw_zones[0], list):
        return raw_zones
    return [raw_zones]

def draw_panel_zones(ax, zones, q_min, q_max):
    """
    Renders the green, yellow, and red safety zones for a single panel.
    """
    if not zones:
        return

    # 1. Explicit modes (e.g. sainteanne)
    if "green" in zones or "yellow" in zones or "red" in zones:
        for color_key, color_val in [("green", COLOR_GREEN), ("yellow", COLOR_YELLOW), ("red", COLOR_RED)]:
            polys = normalize_segments(zones.get(color_key, []))
            for poly in polys:
                if not poly:
                    continue
                xs = [p["dj"] for p in poly]
                ys = [p["q"] for p in poly]
                ax.fill(xs, ys, color=color_val, alpha=ALPHA, edgecolor='none', zorder=2)
        return

    # 2. Legacy boundary modes
    raw_gy = zones.get("greenYellow", [])
    raw_yr = zones.get("yellowRed", [])

    segments_gy = normalize_segments(raw_gy)
    segments_yr = normalize_segments(raw_yr)

    max_segments = max(len(segments_gy), len(segments_yr))

    green_polys = []
    yellow_polys = []
    red_polys = []

    # Bottom green area is below the very first GY segment
    if len(segments_gy) > 0 and segments_gy[0]:
        green_poly = build_polygon_below(segments_gy[0], q_min)
        if green_poly:
            green_polys.append(green_poly)

    for i in range(max_segments):
        gy = segments_gy[i] if i < len(segments_gy) else None
        yr = segments_yr[i] if i < len(segments_yr) else None

        if gy and yr:
            yellow_poly = build_polygon_between(gy, yr)
            if yellow_poly:
                yellow_polys.append(yellow_poly)

        if yr:
            next_gy = segments_gy[i + 1] if i + 1 < len(segments_gy) else None
            if next_gy:
                red_poly = build_polygon_between(yr, next_gy)
                if red_poly:
                    red_polys.append(red_poly)
            else:
                red_poly = build_polygon_above(yr, q_max)
                if red_poly:
                    red_polys.append(red_poly)

    # Fill generated polygons
    for poly in green_polys:
        xs = [p["dj"] for p in poly]
        ys = [p["q"] for p in poly]
        ax.fill(xs, ys, color=COLOR_GREEN, alpha=ALPHA, edgecolor='none', zorder=2)

    for poly in yellow_polys:
        xs = [p["dj"] for p in poly]
        ys = [p["q"] for p in poly]
        ax.fill(xs, ys, color=COLOR_YELLOW, alpha=ALPHA, edgecolor='none', zorder=2)

    for poly in red_polys:
        xs = [p["dj"] for p in poly]
        ys = [p["q"] for p in poly]
        ax.fill(xs, ys, color=COLOR_RED, alpha=ALPHA, edgecolor='none', zorder=2)

def generate_log_ticks(q_min, q_max, modes):
    ticks = []
    min_exp = int(math.floor(math.log10(q_min)))
    max_exp = int(math.ceil(math.log10(q_max)))
    
    for exp in range(min_exp, max_exp + 1):
        for val_multiplier in modes:
            val = (10 ** exp) * val_multiplier
            if q_min <= val <= q_max:
                ticks.append(val)
    return ticks

def build_broken_observed_line(points, latest_pt, phase_key):
    """
    Combines historical points and the latest point, sorts them chronologically,
    and inserts NaN breaks where the gap between consecutive dates is > 3 days
    to prevent false connecting lines over missing periods in reality.
    """
    import datetime
    
    clean_pts = []
    dj_key = "djgc" if phase_key == "DJGC" else "djdc"
    latest_phase_key = "DJGC" if phase_key == "DJGC" else "DJDC5"
    
    for p in points:
        d_str = p.get("date")
        x_val = p.get(dj_key)
        y_val = p.get("q")
        if d_str and x_val is not None and y_val is not None and y_val > 0:
            try:
                dt_val = datetime.datetime.strptime(d_str, "%Y-%m-%d").date()
                clean_pts.append({
                    "date": dt_val,
                    "x": float(x_val),
                    "y": float(y_val)
                })
            except Exception:
                pass
                
    if (latest_pt and latest_pt.get("phase") == latest_phase_key and 
        latest_pt.get("date") and latest_pt.get("dj") is not None and latest_pt.get("q") is not None and latest_pt["q"] > 0):
        try:
            dt_val = datetime.datetime.strptime(latest_pt["date"], "%Y-%m-%d").date()
            if not any(cp["date"] == dt_val for cp in clean_pts):
                clean_pts.append({
                    "date": dt_val,
                    "x": float(latest_pt["dj"]),
                    "y": float(latest_pt["q"])
                })
        except Exception:
            pass
            
    if not clean_pts:
        return [], []
        
    clean_pts.sort(key=lambda p: p["date"])
    
    xs = []
    ys = []
    
    for i, pt in enumerate(clean_pts):
        if i > 0:
            prev_pt = clean_pts[i-1]
            day_diff = (pt["date"] - prev_pt["date"]).days
            if day_diff > 3:
                xs.append(float('nan'))
                ys.append(float('nan'))
        xs.append(pt["x"])
        ys.append(pt["y"])
        
    return xs, ys

def main():
    # 1. Initialize Firestore
    print("Connecting to Firestore database...")
    db = init_firestore()

    import pandas as pd
    global_rows = []
    river_dfs = {}

    # Load structures JSON
    json_path = os.path.join(os.path.dirname(__file__), 'river_data.json')
    if not os.path.exists(json_path):
        print(f"Error: JSON data file not found at {json_path}. Run extract_river_data.js first.")
        sys.exit(1)

    with open(json_path, 'r', encoding='utf-8') as f:
        river_configs = json.load(f)

    # 2. Setup and clear output directory
    output_dir = os.path.join(os.path.dirname(__file__), '../exports')
    os.makedirs(output_dir, exist_ok=True)

    print("Clearing all existing diagrams in 'exports/' folder...")
    for file in os.listdir(output_dir):
        file_path = os.path.join(output_dir, file)
        try:
            if os.path.isfile(file_path):
                os.unlink(file_path)
        except Exception as e:
            print(f"Error deleting file {file_path}: {e}")

    print(f"\nLoaded {len(river_configs)} river configurations. Starting export with observed data points...")

    # Configure global styling
    plt.rcParams['font.family'] = 'sans-serif'
    plt.rcParams['font.sans-serif'] = ['DejaVu Sans', 'Arial', 'Helvetica']

    for river_key, cfg in river_configs.items():
        label = cfg.get("label", river_key)
        print(f"\nProcessing: {label} ({river_key})...")

        # Limits
        q_min = float(cfg.get("qMin", 1))
        q_max = float(cfg.get("qMax", 1000))
        djgc_max = float(cfg.get("djgcMax", 1300))
        djdc_max = float(cfg.get("djdcMax", 300))
        q_bank = float(cfg.get("qBankfull", float('nan')))

        if q_min <= 0:
            q_min = 0.1

        # 3. Query Firestore for real-time observed data
        djgc_pts = []
        djdc_pts = []
        latest_pt = None

        try:
            doc_ref = db.collection("stations").document(river_key).collection("seasons").document("2025_26")
            doc = doc_ref.get()
            if doc.exists:
                db_data = doc.to_dict()
                djgc_pts = db_data.get("djgc_q_points", [])
                djdc_pts = db_data.get("djdc_q_points", [])
                latest_pt = db_data.get("latest")
                print(f" -> Found observed points in Firestore (DJGC: {len(djgc_pts)}, DJDC: {len(djdc_pts)})")
            else:
                print(" -> Warning: Document not found in Firestore. Plotting blank baseline thresholds.")
        except Exception as e:
            print(f" -> Warning: Failed to query Firestore ({e}). Plotting blank baseline thresholds.")

        # Accumulate observed data for tabular export
        river_rows = []
        for p in djgc_pts:
            d_str = p.get("date")
            x_val = p.get("djgc")
            y_val = p.get("q")
            if d_str and x_val is not None and y_val is not None:
                river_rows.append({
                    "Date": d_str,
                    "Phase": "DJGC",
                    "DJ": float(x_val),
                    "Q (m3/s)": float(y_val)
                })
        for p in djdc_pts:
            d_str = p.get("date")
            x_val = p.get("djdc")
            y_val = p.get("q")
            if d_str and x_val is not None and y_val is not None:
                river_rows.append({
                    "Date": d_str,
                    "Phase": "DJDC-5",
                    "DJ": float(x_val),
                    "Q (m3/s)": float(y_val)
                })
        if (latest_pt and latest_pt.get("date") and latest_pt.get("dj") is not None and 
            latest_pt.get("q") is not None and latest_pt["q"] > 0):
            d_str = latest_pt["date"]
            x_val = latest_pt["dj"]
            y_val = latest_pt["q"]
            phase_val = "DJGC" if latest_pt.get("phase") == "DJGC" else "DJDC-5"
            if not any(r["Date"] == d_str and r["Phase"] == phase_val for r in river_rows):
                river_rows.append({
                    "Date": d_str,
                    "Phase": phase_val,
                    "DJ": float(x_val),
                    "Q (m3/s)": float(y_val)
                })
        river_rows.sort(key=lambda r: r["Date"])
        river_dfs[river_key] = pd.DataFrame(river_rows)
        for r in river_rows:
            global_rows.append({
                "Riviere": label,
                "ID Riviere": river_key,
                "Date": r["Date"],
                "Phase": r["Phase"],
                "DJ": r["DJ"],
                "Q (m3/s)": r["Q (m3/s)"]
            })

        # Create Matplotlib Figure side-by-side
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 7.5), dpi=300)

        minor_ticks = generate_log_ticks(q_min, q_max, range(1, 10))
        major_ticks = generate_log_ticks(q_min, q_max, [1, 2, 5])

        # ----------------------------------------------------
        # Panel 1: DJGC vs Q
        # ----------------------------------------------------
        ax1.set_yscale('log')
        ax1.set_xlim(0, djgc_max)
        ax1.set_ylim(q_min, q_max)

        # Draw safety zones
        draw_panel_zones(ax1, cfg.get("djgcZones"), q_min, q_max)

        # Draw gridlines (Minor and Major)
        for val in minor_ticks:
            ax1.axhline(val, color='#e5e7eb', linewidth=0.5, zorder=1)
        for val in major_ticks:
            ax1.axhline(val, color='#d1d5db', linewidth=0.8, zorder=1)

        djgc_ticks = cfg.get("djgcTicks", [])
        for val in djgc_ticks:
            if 0 <= val <= djgc_max:
                ax1.axvline(val, color='#e5e7eb', linewidth=0.5, zorder=1)

        # Bankfull reference
        if not math.isnan(q_bank):
            ax1.axhline(q_bank, color='#000000', linestyle='--', linewidth=1.5, zorder=3)

        # Draw observed DJGC line & latest marker
        x_obs_djgc, y_obs_djgc = build_broken_observed_line(djgc_pts, latest_pt, "DJGC")

        # Plot observed line (breaks on NaNs naturally)
        if len(x_obs_djgc) > 0:
            ax1.plot(x_obs_djgc, y_obs_djgc, color=COLOR_OBSERVED, linewidth=2.5, zorder=4)

        # Check if the latest point belongs to DJGC for isolated latest marker plotting
        latest_on_djgc = (latest_pt and latest_pt.get("phase") == "DJGC" and 
                          latest_pt.get("dj") is not None and latest_pt.get("q") is not None and latest_pt["q"] > 0)

        # Plot latest dot
        if latest_on_djgc:
            ax1.plot(latest_pt["dj"], latest_pt["q"], marker='o', markerfacecolor='white', 
                     markeredgecolor=COLOR_OBSERVED, markeredgewidth=2, markersize=8, zorder=5)

        # Format axes
        ax1.set_xticks(djgc_ticks)
        ax1.set_yticks(major_ticks)
        ax1.get_yaxis().set_major_formatter(ticker.FuncFormatter(lambda y, _: f'{y:g}'))
        
        ax1.set_title("DJGC", fontsize=13, fontweight='bold', pad=10)
        ax1.set_xlabel("DJGC (°C·d)", fontsize=11, labelpad=8)
        ax1.set_ylabel("Débit Q (m³/s)", fontsize=11, labelpad=8)

        # ----------------------------------------------------
        # Panel 2: DJDC vs Q
        # ----------------------------------------------------
        ax2.set_yscale('log')
        ax2.set_xlim(0, djdc_max)
        ax2.set_ylim(q_min, q_max)

        # Draw safety zones
        draw_panel_zones(ax2, cfg.get("djdcZones"), q_min, q_max)

        # Draw gridlines (Minor and Major)
        for val in minor_ticks:
            ax2.axhline(val, color='#e5e7eb', linewidth=0.5, zorder=1)
        for val in major_ticks:
            ax2.axhline(val, color='#d1d5db', linewidth=0.8, zorder=1)

        djdc_ticks = cfg.get("djdcTicks", [])
        for val in djdc_ticks:
            if 0 <= val <= djdc_max:
                ax2.axvline(val, color='#e5e7eb', linewidth=0.5, zorder=1)

        # Bankfull reference
        if not math.isnan(q_bank):
            ax2.axhline(q_bank, color='#000000', linestyle='--', linewidth=1.5, zorder=3)

        # Draw observed DJDC line & latest marker
        x_obs_djdc, y_obs_djdc = build_broken_observed_line(djdc_pts, latest_pt, "DJDC")

        # Plot observed line (breaks on NaNs naturally)
        if len(x_obs_djdc) > 0:
            ax2.plot(x_obs_djdc, y_obs_djdc, color=COLOR_OBSERVED, linewidth=2.5, zorder=4)

        # Check if the latest point belongs to DJDC5 for isolated latest marker plotting
        latest_on_djdc = (latest_pt and latest_pt.get("phase") == "DJDC5" and 
                          latest_pt.get("dj") is not None and latest_pt.get("q") is not None and latest_pt["q"] > 0)

        # Plot latest dot
        if latest_on_djdc:
            ax2.plot(latest_pt["dj"], latest_pt["q"], marker='o', markerfacecolor='white', 
                     markeredgecolor=COLOR_OBSERVED, markeredgewidth=2, markersize=8, zorder=5)

        # Format axes
        ax2.set_xticks(djdc_ticks)
        ax2.set_yticks(major_ticks)
        ax2.get_yaxis().set_major_formatter(ticker.FuncFormatter(lambda y, _: f'{y:g}'))
        ax2.yaxis.tick_right()
        ax2.yaxis.set_label_position("right")

        ax2.set_title("DJDC-5", fontsize=13, fontweight='bold', pad=10)
        ax2.set_xlabel("DJDC -5 °C (°C·d)", fontsize=11, labelpad=8)
        ax2.set_ylabel("Débit Q (m³/s)", fontsize=11, labelpad=8)

        # ----------------------------------------------------
        # Figure Layout, Title and Legends
        # ----------------------------------------------------
        # Add super title
        fig.suptitle(f"{label}\nDiagramme de Débâcle avec Données Observées", fontsize=16, fontweight='bold', y=0.96)

        # Build legend patches
        green_patch = mpatches.Patch(color=COLOR_GREEN, alpha=ALPHA, label='Sécuritaire (Vert)')
        yellow_patch = mpatches.Patch(color=COLOR_YELLOW, alpha=ALPHA, label='Surveiller (Jaune)')
        red_patch = mpatches.Patch(color=COLOR_RED, alpha=ALPHA, label='Critique (Rouge)')
        
        # Observed data markers
        observed_line = plt.Line2D([0], [0], color=COLOR_OBSERVED, linewidth=2.5, label='Données observées')
        latest_dot = plt.Line2D([0], [0], marker='o', markerfacecolor='white', 
                                markeredgecolor=COLOR_OBSERVED, markeredgewidth=2, markersize=8, 
                                linestyle='None', label='Dernière observation')

        legend_handles = [green_patch, yellow_patch, red_patch, observed_line, latest_dot]
        
        if not math.isnan(q_bank):
            bankfull_line = plt.Line2D([0], [0], color='#000000', linestyle='--', linewidth=1.5, label='Débit de référence (plein bord)')
            legend_handles.append(bankfull_line)

        fig.legend(
            handles=legend_handles, 
            loc='lower center', 
            bbox_to_anchor=(0.5, 0.02), 
            ncol=3 if math.isnan(q_bank) else 3, 
            frameon=True, 
            facecolor='#ffffff', 
            edgecolor='#e5e7eb', 
            fontsize=10.5
        )

        # Adjust margins with generous padding so nothing is cut off
        plt.tight_layout(rect=[0.02, 0.08, 0.98, 0.90], h_pad=2, w_pad=0.2)

        # Save files
        pdf_path = os.path.join(output_dir, f"{river_key}_diagram.pdf")
        png_path = os.path.join(output_dir, f"{river_key}_diagram.png")

        plt.savefig(pdf_path, format='pdf', bbox_inches='tight')
        plt.savefig(png_path, format='png', bbox_inches='tight', dpi=300)
        plt.close(fig)

    print("\nAll observed data reference diagrams successfully exported to the 'exports/' directory!")

    # 4. Export consolidated tabular data
    print("\nExporting season 2025_26 observed data...")
    
    # Export stacked CSV
    csv_path = os.path.join(output_dir, "all_rivers_data_2025_26.csv")
    if global_rows:
        df_all = pd.DataFrame(global_rows)
        df_all.to_csv(csv_path, index=False, encoding='utf-8-sig')
        print(f"Successfully exported consolidated CSV data to: {csv_path}")
    else:
        print("Warning: No observed data points found to export to CSV.")
        
    # Export multi-sheet Excel
    excel_path = os.path.join(output_dir, "all_rivers_data_2025_26.xlsx")
    try:
        with pd.ExcelWriter(excel_path, engine='openpyxl') as writer:
            for r_key, df in river_dfs.items():
                sheet_label = river_configs[r_key].get("label", r_key)
                sheet_name = sheet_label.replace("Rivière ", "")[:31]
                if df.empty:
                    df_empty = pd.DataFrame([{"Message": "Aucune donnee observee disponible pour cette riviere."}])
                    df_empty.to_excel(writer, sheet_name=sheet_name, index=False)
                else:
                    df.to_excel(writer, sheet_name=sheet_name, index=False)
        print(f"Successfully exported multi-sheet Excel data to: {excel_path}")
    except Exception as e:
        print(f"Error exporting Excel spreadsheet: {e}")

if __name__ == "__main__":
    main()
