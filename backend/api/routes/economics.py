from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
from models.regression import calculate_economic_drain

router = APIRouter()

class EconomicInput(BaseModel):
    district: str
    students_migrated: int
    avg_tuition_cost: float
    avg_living_cost: float
    years: int = 4

@router.post("/drain")
def estimate_drain(request: EconomicInput):
    """
    Calculates the financial drain on a home district when students migrate,
    using basic linear regression coefficients (stubbed for now).
    """
    result = calculate_economic_drain(
        request.students_migrated, 
        request.avg_tuition_cost, 
        request.avg_living_cost, 
        request.years
    )
    
    return {
        "status": "success",
        "district": request.district,
        "drain_estimation_inr": result["total_drain"],
        "confidence_interval": result["confidence"]
    }
