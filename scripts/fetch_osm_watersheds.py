import requests
import json
import time

rivers = [
    "L'Assomption", "Montmorency", "Chaudière", "Châteauguay", 
    "Matane", "Matapédia", "Mistassini", "Saint-François", 
    "Sainte-Anne", "Beaurivage", "Bécancour", "Eaton", 
    "Etchemin", "Saint-Charles"
]

results = {}

for river in rivers:
    query = f"""
    [out:json];
    relation["boundary"="watershed"]["name"~"Rivière {river}|{river}"];
    out geom;
    """
    try:
        print(f"Querying {river}...")
        resp = requests.post('https://overpass-api.de/api/interpreter', data=query.encode('utf-8'))
        if resp.status_code == 200:
            data = resp.json()
            if data.get('elements'):
                print(f"  Found {len(data['elements'])} elements for {river}")
                results[river] = data['elements']
            else:
                print(f"  Not found for {river}")
        else:
            print(f"  Error {resp.status_code}")
    except Exception as e:
        print(f"  Exception: {e}")
    time.sleep(1)

print("Total found:", len(results))
