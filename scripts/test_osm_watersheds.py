import requests
import time

rivers = [
    "L'Assomption", "Montmorency", "Chaudière",
    "Châteauguay", "Matane", "Matapédia",
    "Mistassini", "Saint-François", "Sainte-Anne",
    "Beaurivage", "Bécancour", "Eaton",
    "Etchemin", "Saint-Charles"
]

for river in rivers:
    query = f"""
    [out:json][timeout:25];
    relation["boundary"="watershed"]["name"~"Rivière {river}|{river}"];
    out geom;
    """
    try:
        resp = requests.post('https://overpass-api.de/api/interpreter', data={'data': query})
        if resp.status_code == 200:
            data = resp.json()
            elements = data.get('elements', [])
            print(f'{river}: {len(elements)} watersheds found.')
        else:
            print(f'{river}: Error {resp.status_code} - {resp.text[:100]}')
    except Exception as e:
        print(f'{river}: Exception {e}')
    time.sleep(1)
