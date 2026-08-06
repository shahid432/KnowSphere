from fastapi import APIRouter

# Authentication
# pyrefly: ignore [missing-module-attribute]
from app.api.v1.auth import auth_router

# Documents
from app.api.v1.document import router as document_router

# Chat
from app.api.v1.chat import router as chat_router

# Test Gemini
# pyrefly: ignore [missing-module-attribute]
from app.api.v1.test import router as test_router

api_router = APIRouter()

# Register Routers
api_router.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"],)
api_router.include_router(document_router)
api_router.include_router(chat_router)
api_router.include_router(test_router)