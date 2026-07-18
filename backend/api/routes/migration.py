from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Dict, Any
from models.clustering import run_dbscan_clustering

router = APIRouter()

class MigrationDataPoint(BaseModel):
    district: str
    lat: float
    lng: float
    volume: int

class ClusterRequest(BaseModel):
    data: List[MigrationDataPoint]
    eps: float = 0.5
    min_samples: int = 5

@router.post("/cluster")
def perform_clustering(request: ClusterRequest):
    """
    Takes in an array of geospatial data representing student migration origin points
    and returns them categorized into DBSCAN clusters to identify high-density out-migration zones.
    """
    # Convert payload to dictionary list for model processing
    raw_data = [point.dict() for point in request.data]
    
    # Run the clustering model
    results = run_dbscan_clustering(raw_data, request.eps, request.min_samples)
    
    return {"status": "success", "clusters": results}
