from collections.abc import Generator

import pytest
from fastapi.testclient import TestClient

from app.api.routes.fibonacci import fibonacci_gen
from app.core.config import Settings
from app.core.response_messages import INTEGER_ERROR

from app.main import app

settings = Settings()


@pytest.fixture(scope="function")
def client() -> Generator[TestClient, None, None]:
    with TestClient(app) as c:
        yield c

@pytest.mark.parametrize("n, expected", [
    (1, 1),
    (10, 55),
    (70, 190392490709135),
    (1001, 70330367711422815821835254877183549770181269836358732742604905087154537118196933579742249494562611733487750449241765991088186363265450223647106012053374121273867339111198139373125598767690091902245245323403501)
]) # heh big number
def test_fibonacci_gen(n, expected):
    sequence = list(fibonacci_gen(n))
    assert sequence[-1] == expected

def test_route_fibonacci_gen(client: TestClient):
    n = 10
    response = client.get(f'{settings.API_STR}/fibonacci/{n}')
    assert response.status_code == 200
    content = response.json()
    assert content['sequence'] == [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

@pytest.mark.parametrize("n", [0, -10])
def test_route_fibonacci_invalid_integers(n, client: TestClient):
    response = client.get(f'{settings.API_STR}/fibonacci/{n}')
    assert response.status_code == 400
    content = response.json()
    assert content['detail'] == f'{INTEGER_ERROR} {n}'