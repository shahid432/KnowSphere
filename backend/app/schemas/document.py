from uuid import UUID
from datetime import datetime

from pydantic import BaseModel


class DocumentResponse(BaseModel):
    id: UUID
    original_filename: str
    stored_filename: str
    file_size: int
    total_chunks: int
    uploaded_at: datetime

    class Config:
        from_attributes = True