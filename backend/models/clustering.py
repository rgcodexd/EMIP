import numpy as np
from sklearn.cluster import DBSCAN
import pandas as pd

def run_dbscan_clustering(data: list, eps: float = 0.5, min_samples: int = 5):
    """
    Runs DBSCAN on geospatial data to find out-migration hotspots.
    Data format expected: [{'lat': float, 'lng': float, 'volume': int, 'district': str}, ...]
    """
    if not data:
        return []

    df = pd.DataFrame(data)
    
    # We cluster based on lat and lng
    coords = df[['lat', 'lng']].to_numpy()
    
    # Initialize and fit DBSCAN
    # In a real scenario, eps should be converted to radians for haversine distance
    db = DBSCAN(eps=eps, min_samples=min_samples, algorithm='ball_tree', metric='euclidean').fit(coords)
    
    labels = db.labels_
    df['cluster'] = labels
    
    # Format results
    results = []
    # Identify unique clusters (ignoring -1 which is noise)
    unique_labels = set(labels)
    
    for k in unique_labels:
        if k == -1:
            continue
            
        class_member_mask = (labels == k)
        cluster_points = df[class_member_mask]
        
        # Calculate cluster center and total volume
        center_lat = cluster_points['lat'].mean()
        center_lng = cluster_points['lng'].mean()
        total_volume = cluster_points['volume'].sum()
        districts = cluster_points['district'].unique().tolist()
        
        results.append({
            "cluster_id": int(k),
            "center": {"lat": float(center_lat), "lng": float(center_lng)},
            "total_students": int(total_volume),
            "districts_involved": districts
        })
        
    return results
