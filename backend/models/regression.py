import numpy as np

def calculate_economic_drain(students_migrated: int, avg_tuition: float, avg_living: float, years: int = 4):
    """
    Simulates a regression calculation to determine economic drain.
    In a real ML pipeline, this would load a pre-trained scikit-learn LinearRegression model
    (e.g., joblib.load('economic_drain_model.pkl')) to predict the drain based on historical multi-variate features.
    
    For scaffolding, we use a heuristic representation of the regression equation:
    y = b0 + b1(tuition) + b2(living) + e
    """
    
    # Base calculation
    total_cost_per_student_per_year = avg_tuition + avg_living
    base_drain = students_migrated * total_cost_per_student_per_year * years
    
    # Simulated ML noise/variance (e.g., inflation factor, local multiplier)
    inflation_factor = np.random.normal(1.05, 0.02) 
    
    predicted_drain = base_drain * inflation_factor
    
    return {
        "total_drain": float(predicted_drain),
        "confidence": [float(predicted_drain * 0.95), float(predicted_drain * 1.05)]
    }
