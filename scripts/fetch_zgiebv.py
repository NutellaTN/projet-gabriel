import requests
import json
import os
from pyproj import Transformer

transformer = Transformer.from_crs('EPSG:32198', 'EPSG:4326', always_xy=True)

def transform_coords(coords):
    if isinstance(coords[0], (int, float)):
        return list(transformer.transform(coords[0], coords[1]))
    return [transform_coords(c) for c in coords]

url = 'https://stqc380donopppdtce01.blob.core.windows.net/donnees-ouvertes/Zones_gestion_integree_eau/ZGIEBV.json'
print("Downloading ZGIEBV dataset...")
resp = requests.get(url)
data = resp.json()

mapping = {
    "lassomption": "L'Assomption",
    "montmorency": "Capitale",
    "chaudiere": "Chaudière",
    "chateauguay": "Châteauguay",
    "matane": "Nord-Est du Bas-Saint-Laurent",
    "matapedia": "Matapédia",
    "mistassini": "Lac-Saint-Jean", # Mistassini flows into Lac Saint-Jean
    "saintfrancois": "Saint-François",
    "sainteanne": "Sainte-Anne",
    "beaurivage": "Chaudière", # Tributary of Chaudiere
    "becancour": "Bécancour",
    "eaton": "Saint-François", # Tributary of Saint-Francois
    "etchemin": "Etchemin",
    "saintcharles": "Capitale"
}

# Find all valid names in ZGIEBV
zgie_names = set()
for f in data['features']:
    props = f['properties']
    if 'ZGIE' in props:
        zgie_names.add(props['ZGIE'])

features = []
for river_id, zgie_target in mapping.items():
    found = False
    for f in data['features']:
        props = f['properties']
        if props.get('ZGIE') == zgie_target or props.get('OBV') == zgie_target or zgie_target in str(props.get('OBV')):
            # Clone feature and set its id property for the map
            new_f = json.loads(json.dumps(f))
            new_f['properties'] = {'river_id': river_id, 'ZGIE': props.get('ZGIE')}
            if 'geometry' in new_f and new_f['geometry']:
                new_f['geometry']['coordinates'] = transform_coords(new_f['geometry']['coordinates'])
            features.append(new_f)
            found = True
            break
    if not found:
        print(f"Warning: Could not find matching ZGIE for {river_id} (target: {zgie_target})")

out_geojson = {
    "type": "FeatureCollection",
    "features": features
}

out_path = os.path.join('public', 'data', 'watersheds.geojson')
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(out_geojson, f)

print(f"Successfully generated {out_path} with {len(features)} features.")
