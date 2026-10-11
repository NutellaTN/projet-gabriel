# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"Projet Gabriel" is a real-time river ice-breakup (débâcle) monitor for 14 Quebec rivers. A Python pipeline pushes discharge (Q) and cumulative thermal indices into Firebase Firestore; a Vite/vanilla-JS frontend subscribes to Firestore and renders a Leaflet map plus a D3 two-panel diagram with green/yellow/red risk zones. UI text is French by default with an English toggle.

There are no tests and no linter. Verify frontend changes by running the dev server and loading both pages.

## Commands

Frontend (Vite):

```
npm install
npm run dev        # dev server; open /index.html (map) and /diagram.html?river=<key>
npm run build      # outputs to dist/ (both index.html and diagram.html are Rollup entries)
npm run preview
```

Deploy: `firebase.json` serves `dist/` on Firebase Hosting (project `ril-gp` in `.firebaserc`) and deploys `firestore.rules`. Build first, then `firebase deploy`.

Python pipeline (CI uses Python 3.10; local `.vscode/settings.json` points at 3.13):

```
pip install -r requirements.txt
python -m playwright install chromium          # needed for the CEHQ scraper
python scripts/poll_daily.py --station all     # what the GitHub Action runs
python scripts/poll_daily.py --station chaudiere --dry-run
python scripts/poll_daily.py --station all --start 2027-02-15   # override DJDC-5 start date
```

Diagram export to PDF/PNG (needs `matplotlib`, which is NOT in requirements.txt):

```
node scripts/extract_river_data.js     # evals src/river-data.js -> scripts/river_data.json
python scripts/export_diagrams.py      # reads that JSON + Firestore, wipes and refills exports/
```

Regenerating map GeoJSON from the QGIS shapefiles: `python scripts/compile_qgis_data.py` (needs geopandas/shapely, also not in requirements.txt) writes `public/data/watersheds.geojson` and `public/data/river_paths.geojson`.

## Environment and secrets

`.env` is gitignored. Vite reads `VITE_FIREBASE_*` and `VITE_CARTO_API_KEY` at build time. Python scripts read `FIREBASE_SA_JSON_B64` (base64-encoded service-account JSON); `poll_daily.py` falls back to `scripts/service-account.json` if the env var is missing. `export_diagrams.py` parses `.env` by hand rather than via python-dotenv.

The GitHub Action (`.github/workflows/poll_daily.yml`) runs daily at 12:00 UTC and on `workflow_dispatch`, using repo secrets `FIREBASE_SA_JSON_B64` and `FIREBASE_PROJECT_ID`.

## Architecture

### Two pages, shared modules

- `index.html` -> `src/map.js`: Leaflet map with a station marker per river, coloured by the current zone of `data.latest`, plus a sidebar list. Clicking a marker navigates to `diagram.html?river=<key>`.
- `diagram.html` -> `src/main.js`: the D3 diagram for one river, with a config sidebar, a zone control-point editor, a "focus on observed" view mode, and a manual pipeline trigger.
- Shared: `src/river-data.js` (`riverConfigs`, the single source of truth for river labels, marker lat/lon, axis limits, tick arrays and zone geometry), `src/firestore-service.js` (subscription + data shaping), `src/zone-logic.js` (point-in-polygon classification used by the map), `src/i18n.js` (`t()` and `translateDOM()` driven by `data-i18n` attributes), `src/firebase-config.js`.

### Firestore data model

One document per river per season at `stations/{riverKey}/seasons/{seasonId}` (e.g. `2025_26`):

- `djgc_q_points: [{date, djgc, q}]` — winter phase (Oct 15 to Feb 15). Merged by date on each poll. `scripts/inject_historic.py` (gitignored) can backfill a whole season with the same algorithm.
- `djdc_q_points: [{date, djdc, q}]` — spring thaw phase (Feb 15 to May 15). Merged by date on each poll. Feb 15 appears in both arrays.
- `latest: {date, dj, q, phase}` — drives the map colour. `phase` is `DJGC` or `DJDC5`.
- `prediction: {phase, values: {date: {dj, q, p25, p75}}}` — fully overwritten on each poll so stale dates disappear. Stays within today's phase.
- `last_updated` — string formatted `dd/mm/YYYY HH:MM:SS` in America/Montreal.

`firestore-service.js` flattens this into `{historical: [{dj, q, phase: "DJGC"|"DJDC5"}], latest, prediction: [{date, dj, q, q25, q75, phase}], lastUpdated}` which is what `chart.js` and `map.js` consume. Firestore rules allow public reads of everything except `secrets/*` and no client writes; all writes come from the Python admin SDK.

### Season and off-season logic (duplicated in four places)

A season starts Oct 15 and its ID is `YYYY_YY` of the start year. The off-season is May 16 to Oct 14: `poll_daily.py` exits without polling, `map.js` shows "no status", and `chart.js` renders an empty chart. This date logic is copied independently in `firestore-service.js` (`getSeasonId`), `poll_daily.py` (`get_season` and the off-season check in `main`), `map.js` and `chart.js`. Change all four together.

`poll_daily.py` derives all phase dates from the season (`get_season`); `--start` only overrides the DJDC-5 start (which is also the last DJGC day). `export_diagrams.py` and `inject_historic.py` still hard-code the season document ID.

### Zone geometry formats

`djgcZones` / `djdcZones` in `river-data.js` come in two formats and every consumer must handle both:

- Legacy boundary format: `greenYellow` and `yellowRed` are boundary polylines. Each may be a flat `[{dj, q}]` array or a nested `[[...], [...]]` array of segments so detached horizontal bands can be stacked (index N of `greenYellow` pairs with index N of `yellowRed`; red between `yellowRed[i]` and `greenYellow[i+1]`, or to the top). Ordering rules and a worked example are in `RIVER_DATA_GUIDE.md` (gitignored, present locally).
- Explicit format: `green`, `yellow`, `red` as closed polygons.

The polygon-building helpers (`buildPolygonBelow/Between/Above`) and the two-format detection are duplicated in `src/chart.js`, `src/zone-logic.js` and `scripts/export_diagrams.py`. Q is compared on a log scale in `zone-logic.js` to match the D3 log axis. Keep the three in sync when changing zone semantics.

### Data pipeline (`scripts/poll_daily.py`)

Single-file script; per station it:

1. Fetches daily mean temperature from the MSC `climate-daily` API (api.weather.gc.ca) using the station's `climate_id`, from Oct 15 to yesterday, carries the previous day forward over missing days (same rule as `inject_historic.py`), then appends the MSC CityPage forecast for future days.
2. Computes DJGC (0 °C, cumulative, floored at 0) over Oct 15 to Feb 15 and DJDC-5 (threshold -5 °C, cumulative, floored at 0) over Feb 15 to May 15, each restarting at 0.
3. Scrapes observed and forecast discharge (with 25–75 % band) from the CEHQ Highcharts page via Playwright, with a retry loop for transient failures. The page only shows about 4 days of observations, so missed runs can only be backfilled within that window.
4. Routes each observed date into `djgc_q_points` and/or `djdc_q_points` by phase window, merges by date with `set(merge=True)` (which also creates a new season document), then overwrites `prediction`.

The `RIVERS` dict at the top of `poll_daily.py` maps river keys to CEHQ station numbers and MSC climate IDs. Its lat/lon are weather-station coordinates and intentionally differ from the marker coordinates in `river-data.js`.

### Manual poll trigger from the UI

The "Lancer la collecte" button in `main.js` prompts for a passcode, signs into Firebase Auth as a fixed admin email, reads a GitHub PAT from Firestore `secrets/github`, dispatches the `poll_daily.yml` workflow on `NutellaTN/projet-gabriel` via the GitHub API, polls the run until completion, then signs out. The repo owner/name are hard-coded there.

## Adding a river

Touch all of these: `riverConfigs` in `src/river-data.js`; `RIVERS` in `scripts/poll_daily.py`; an `<option>` in `diagram.html`; `river.<key>` entries in both `fr` and `en` blocks of `src/i18n.js`; shapefiles in `QGIS/` plus the mapping dicts in `scripts/compile_qgis_data.py` if it should appear on the map. River keys are lowercase with no accents or spaces (e.g. `saintfrancois`, `sainteanne`).

## Gotchas

- `firestore-service.js` contains a hard-coded Matapédia special case that inserts a NaN gap between two specific dates to break the line.
- `chart.js` drops leading zero-DJ points per phase (`filterLeadingZeros`) before rendering; `main.js` mutates `riverConfigs` in place when editing control points (changes are not persisted).
- `public/index_old.html` and `historic_diagrams*` are legacy; `scripts/inject_historic.py`, `generate_historic_diagrams.py`, `chaudiere_river_analysis.py`, `test_raycast.py`, `exports/` and `GeoMet-OGC-RIL/` are gitignored but exist locally.
- The README mentions `src/data-import.js`; that file no longer exists.
