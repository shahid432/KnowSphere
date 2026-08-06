from fastapi import FastAPI, Response, status
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api.v1.router import api_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Enterprise Knowledge Assistant API",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/favicon.ico", include_in_schema=False)
def favicon():
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@app.get("/test-key")
def test_key():
    return {
        "key": (settings.GEMINI_API_KEY[:10] + "...") if settings.GEMINI_API_KEY else None
    }


@app.get("/")
def root():
    return {
        "message": f"Welcome to {settings.APP_NAME}"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }

app.include_router(
    api_router,
    prefix="/api/v1"
)
from app.core.config import settings

@app.get("/debug")
def debug():
    return {
        "key": settings.GEMINI_API_KEY[:10] if settings.GEMINI_API_KEY else "EMPTY"
    }