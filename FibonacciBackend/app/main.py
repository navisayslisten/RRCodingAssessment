from fastapi import FastAPI
from functools import lru_cache
from app.api.main import api_router
from app.core.config import Settings
from fastapi.middleware.cors import CORSMiddleware


@lru_cache
def get_settings():
    return Settings()

settings = get_settings()

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_STR}/openapi.json",
)

origins = ["*"]

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_STR)