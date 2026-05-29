import requests
import zipfile
import json
import os
import io

url = 'https://stqc380donopppdtce01.blob.core.windows.net/donnees-ouvertes/Aire_drainage/DQ/AD_CE_BV_Lacs_json.zip'
print("Downloading...")
resp = requests.get(url)
with zipfile.ZipFile(io.BytesIO(resp.content)) as z:
    for filename in z.namelist():
        if filename.endswith('.json') or filename.endswith('.geojson'):
            print(f"Extracting {filename}...")
            data = json.loads(z.read(filename).decode('utf-8'))
            print("Features:", len(data.get('features', [])))
            # check the first feature properties
            if len(data.get('features', [])) > 0:
                print("Properties:", data['features'][0]['properties'].keys())
            
            # check if we can find our rivers
            rivers = ["L'Assomption", "Montmorency", "Chaudière", "Châteauguay", "Matane", "Matapédia", "Mistassini", "Saint-François", "Sainte-Anne", "Beaurivage", "Bécancour", "Eaton", "Etchemin", "Saint-Charles"]
            found = set()
            for f in data.get('features', []):
                props = f['properties']
                # Try to find a name property
                name = props.get('NOM_CE', props.get('NOM', str(props.values())))
                for r in rivers:
                    if r.lower() in str(name).lower():
                        found.add(r)
            print("Found rivers:", found)
            break
