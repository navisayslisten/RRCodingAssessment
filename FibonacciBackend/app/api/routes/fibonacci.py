from fastapi import APIRouter, HTTPException, status
from app.core.response_messages import INTEGER_ERROR

router = APIRouter(prefix="/fibonacci", tags=["fibonacci"])


# For simplicity, I'm just going to keep the fibonacci code in the same place as the route

# Recursion hit a depth limit, that was fun. Blocking out this code just to show what work was done
# class Fibonacci:
#     sys.setrecursionlimit(10 ** 6) # or else sequence up to 10^6 will not work. Nice trick on proj requirements, gang
#     def __init__(self):
#         self.cache = [0, 1] # We always start with 1 pair of rabbits :)
#
#     def __call__(self, n): # Use the class itself for recursion because of encapsulation benefits
#         if not (isinstance(n, int) and n >= 0):
#             raise ValueError(f'Positive integer greater than 0 expected. You submitted: {n}')
#         if n < len(self.cache):
#             return self.cache[n]
#         if n > 10 ** 6:
#             # I'd love to read into this more
#             # I guess now I'd have to figure out how to get similar performance from an iterative func instead
#             raise ValueError(f'We cannot calculate n > 10^6, for now')
#         else:
#             fibonacci_number = self(n - 1) + self(n - 2)
#             self.cache.append(fibonacci_number)
#
#         return self.cache[n]

# Wow! Generator was way more simple
def fibonacci_gen(n):
    if n == 0:
        return 0
    a, b = 0, 1
    # Quirk of using a generator: we start at F(1) = 0 unless we yield b first
    # Will have to insert 0 afterward if we want to start the sequence from 0
    for _ in range(n):
        yield b
        a, b = b, a + b

@router.get("/{n}")
async def get_fibonacci_sequence(n: int):
    if n <= 0:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=f'{INTEGER_ERROR} {n}')
    sequence = list(fibonacci_gen(n))
    sequence.insert(0, 0)
    return {'sequence': sequence}
