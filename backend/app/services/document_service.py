import os
import uuid
from fastapi import HTTPException

from app.rag.loader import PDFLoader
from app.rag.chunker import Chunker
from app.services.embedding_service import EmbeddingService
from app.repositories.document_repository import DocumentRepository

UPLOAD_DIR = "app/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


class DocumentService:

    @staticmethod
    def upload(file, db):

        filename = f"{uuid.uuid4()}.pdf"

        filepath = os.path.join(
            UPLOAD_DIR,
            filename
        )

        try:

            with open(filepath, "wb") as f:

                while chunk := file.file.read(8192):

                    f.write(chunk)

            text = PDFLoader.load(filepath)

            if not text or not text.strip():

                raise HTTPException(
                    status_code=400,
                    detail="The uploaded PDF file contains no extractable text."
                )

            chunks = Chunker.split(text)

            saved = EmbeddingService.save_chunks(chunks)

            document = DocumentRepository.create(
                db=db,
                user_id=None,
                original_filename=file.filename,
                stored_filename=filename,
                file_size=os.path.getsize(filepath),
                total_chunks=len(chunks)
            )

            return {
                "document_id": str(document.id),
                "filename": filename,
                "original_filename": file.filename,
                "chunks": saved
            }

        except HTTPException:

            raise

        except Exception as e:

            raise HTTPException(
                status_code=500,
                detail=f"Failed to process uploaded PDF: {str(e)}"
            )

        finally:

            if os.path.exists(filepath):

                try:

                    os.remove(filepath)

                except Exception:

                    pass

    @staticmethod
    def get_all(db):

        documents = DocumentRepository.get_all(db)

        return [
            {
                "id": str(document.id),
                "original_filename": document.original_filename,
                "file_size": document.file_size,
                "total_chunks": document.total_chunks,
            }
            for document in documents
        ]

    @staticmethod
    def delete(document_id, db):

        document = DocumentRepository.get_by_id(
            db,
            document_id
        )

        if not document:

            raise HTTPException(
                status_code=404,
                detail="Document not found"
            )

        DocumentRepository.delete(
            db,
            document
        )

        return {
            "message": "Document deleted successfully"
        }