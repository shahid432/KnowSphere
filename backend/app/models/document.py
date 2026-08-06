import uuid

from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship

from app.db.base import Base


class Document(Base):
    __tablename__ = "documents"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )

    user_id = Column(
        UUID(as_uuid=True),
        ForeignKey("users.id"),
        nullable=True
    )

    original_filename = Column(
        String(255),
        nullable=True
    )

    stored_filename = Column(
        String(255),
        nullable=False,
        unique=True
    )

    file_size = Column(
        Integer,
        nullable=True
    )

    total_chunks = Column(
        Integer,
        nullable=True,
        default=0
    )

    uploaded_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    user = relationship(
        "User",
        back_populates="documents"
    )