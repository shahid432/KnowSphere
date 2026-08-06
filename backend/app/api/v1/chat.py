from fastapi import APIRouter

from app.schemas.chat import ChatRequest
from app.services.chat_service import ChatService

chat_router = router = APIRouter(
    prefix="/chat",
    tags=["Chat"]
)


@chat_router.post("", summary="Ask question")
def ask(request: ChatRequest):
    return ChatService.ask(
        request.question
    )
