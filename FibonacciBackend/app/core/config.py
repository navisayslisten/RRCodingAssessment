from typing import Literal

from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        # Use project level .env file
        env_file="../.env",
        env_ignore_empty=True,
        extra="ignore",
    )
    API_STR: str = "/api"
    PROJECT_NAME: str = "RRCodingAssessment"
    FRONTEND_HOST: str = "http://localhost:4200"
    ENVIRONMENT: Literal["local", "test", "production"] = "local"