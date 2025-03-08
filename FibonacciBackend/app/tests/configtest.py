from collections.abc import Generator

import pytest
from fastapi.testclient import TestClient

from app.main import app


# Neat trick to test for bad app config, however, won't count as an actual test if everything is okay
@pytest.fixture(scope="module")
def client() -> Generator[TestClient, None, None]:
    with TestClient(app) as client:
        yield client