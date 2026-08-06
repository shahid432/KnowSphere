from sqlalchemy.orm import Session

from app.models.document import Document


class DocumentRepository:

    @staticmethod
    def create(db: Session, **kwargs):
        document = Document(**kwargs)

        db.add(document)
        db.commit()
        db.refresh(document)

        return document

    @staticmethod
    def get_all(db: Session):
        return db.query(Document).all()

    @staticmethod
    def get_by_id(db: Session, document_id):
        return (
            db.query(Document)
            .filter(Document.id == document_id)
            .first()
        )

    @staticmethod
    def delete(db: Session, document):
        db.delete(document)
        db.commit()