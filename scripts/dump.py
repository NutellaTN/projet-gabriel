import datetime as dt
from inject_historic import RIVERS, fetch_best_msc_station

djgc_start = dt.date(2025, 10, 15)
djdc_end = dt.date(2026, 4, 15)

print('RIVERS = {')
for k, cfg in RIVERS.items():
    cid = fetch_best_msc_station(cfg['lat'], cfg['lon'], djgc_start, djdc_end)
    cehq = cfg["cehq"]
    lat = cfg["lat"]
    lon = cfg["lon"]
    print(f'    "{k}": {{"cehq": "{cehq}", "climate_id": "{cid}", "lat": {lat}, "lon": {lon}}},')
print('}')
