from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.services.document_service import DocumentService

router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)


@router.post("/upload")
def upload_document(
    file: UploadFile = File(...),
    db: Session = Depends(get_db)
):
    return DocumentService.upload(
        file=file,
        # pyrefly: ignore [unexpected-keyword]
        db=db
    )
@router.get("/")
def get_documents(
    db: Session = Depends(get_db)
):
    return DocumentService.get_all(
        db=db
    )
@router.delete("/{document_id}")
def delete_document(
    document_id: str,
    db: Session = Depends(get_db)
):
    return DocumentService.delete(
        document_id=document_id,
        db=db
    )