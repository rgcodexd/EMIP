from fastapi import APIRouter
from api.routes import migration, economics

api_router = APIRouter()

api_router.include_router(migration.router, prefix="/migration", tags=["Migration Clustering"])
api_router.include_router(economics.router, prefix="/economics", tags=["Economic Drain"])
