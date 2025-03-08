from fastapi import APIRouter

from app.api.routes import fibonacci

api_router = APIRouter()
api_router.include_router(fibonacci.router)