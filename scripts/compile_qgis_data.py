import geopandas as gpd
import pandas as pd
import shapely
import json
import os

watershed_files = {
    "lassomption": "QGIS/BV_Assomption_.shp",
    "beaurivage": "QGIS/BV_Beaurivage_.shp",
    "becancour": "QGIS/BV_Becancour_VF.shp",
    "chateauguay": "QGIS/BV_Chateauguay_VF.shp",
    "chaudiere": "QGIS/BV_Chaudiere_VF.shp",
    "eaton": "QGIS/BV_Eaton_VF.shp",
    "etchemin": "QGIS/BV_Etchemin_VF.shp",
    "matane": "QGIS/BV_Matane_VF.shp",
    "matapedia": "QGIS/BV_Matapedia_VF.shp",
    "mistassini": "QGIS/BV_Mistassini_VF.shp",
    "montmorency": "QGIS/BV_Montmorency.shp",
    "saintcharles": "QGIS/BV_St_Charles.shp",
    "saintfrancois": "QGIS/BV_St_Francois_VF.shp",
    "sainteanne": "QGIS/BV_Ste_Anne.shp"
}

watercourse_files = {
    "lassomption": "QGIS/CE_Assomption.shp",
    "beaurivage": "QGIS/CE_Beaurivage.shp",
    "becancour": "QGIS/CE_Becancour.shp",
    "chateauguay": "QGIS/CE_Chateauguay.shp",
    "chaudiere": "QGIS/CE_Chaudiere.shp",
    "eaton": "QGIS/CE_Eaton.shp",
    "etchemin": "QGIS/CE_Etchemin.shp",
    "matane": "QGIS/CE_Matane.shp",
    "matapedia": "QGIS/CE_Matapedia.shp",
    "mistassini": "QGIS/CE_Mistassini.shp",
    "montmorency": "QGIS/CE_Montmorency.shp",
    "saintcharles": "QGIS/CE_St_Charles.shp",
    "saintfrancois": "QGIS/CE_St_Francois.shp",
    "sainteanne": "QGIS/CE_Ste_Anne.shp"
}

def compile_geojson(files_dict, output_path):
    gdfs = []
    for river_id, filepath in files_dict.items():
        if not os.path.exists(filepath):
            print(f"Warning: file {filepath} not found for {river_id}")
            continue
        print(f"Reading {filepath} for {river_id}...")
        gdf = gpd.read_file(filepath)
        
        # Reproject to EPSG:4326 if not already
        if gdf.crs is None or gdf.crs.to_epsg() != 4326:
            gdf = gdf.to_crs(epsg=4326)
            
        # Clean columns, only keep geometry and add river_id
        gdf = gdf[["geometry"]].copy()
        gdf["river_id"] = river_id
        
        # Force geometries to 2D
        gdf["geometry"] = gdf["geometry"].apply(shapely.force_2d)
        
        gdfs.append(gdf)
        
    if gdfs:
        combined = pd.concat(gdfs, ignore_index=True)
        # Convert back to GeoDataFrame since pandas concat returns DataFrame/GeoDataFrame depending on input
        combined = gpd.GeoDataFrame(combined, geometry="geometry", crs="EPSG:4326")
        
        # Save to output file
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        combined.to_file(output_path, driver="GeoJSON")
        print(f"Successfully wrote {len(combined)} features to {output_path}")
    else:
        print(f"Error: No features found to write to {output_path}")

print("=== Compiling Watersheds ===")
compile_geojson(watershed_files, "public/data/watersheds.geojson")

print("\n=== Compiling Watercourses ===")
compile_geojson(watercourse_files, "public/data/river_paths.geojson")
