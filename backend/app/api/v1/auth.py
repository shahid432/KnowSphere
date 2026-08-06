from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.schemas.auth import RegisterRequest, LoginRequest, TokenResponse
from app.schemas.api_response import ApiResponse
from app.services.auth_service import AuthService

auth_router = APIRouter()

@auth_router.post("/register", response_model=ApiResponse)
def register(request: RegisterRequest, db: Session = Depends(get_db)):
    try:
        user = AuthService.register(
            db=db,
            full_name=request.full_name,
            email=request.email,
            password=request.password,
        )
        return ApiResponse(
            success=True,
            message="User registered successfully",
            data={"id": str(user.id), "email": user.email},
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )


@auth_router.post("/login", response_model=TokenResponse)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    try:
        token = AuthService.login(
            db=db,
            email=request.email,
            password=request.password,
        )
        return TokenResponse(access_token=token)
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),
        )