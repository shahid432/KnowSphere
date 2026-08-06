from fastapi import APIRouter

from app.rag.generator import Generator

router = APIRouter(
    prefix="/test",
    tags=["Test"]
)


@router.get("")
def test():

    return {
        "response": Generator.generate(
            "What is AI?",
            "Artificial Intelligence is simulation of human intelligence."
        )
    }