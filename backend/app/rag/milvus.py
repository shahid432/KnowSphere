from pymilvus import (
    connections,
    utility,
    FieldSchema,
    CollectionSchema,
    DataType,
    Collection,
)

from fastapi import HTTPException, status
from app.core.config import settings

COLLECTION_NAME = settings.MILVUS_COLLECTION
EMBEDDING_DIM = 384


def get_connection():

    try:

        if not connections.has_connection("default"):

            connections.connect(
                alias="default",
                host=settings.MILVUS_HOST,
                port=settings.MILVUS_PORT,
                timeout=5.0,
            )

    except Exception as e:

        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Milvus Connection Failed: {str(e)}"
        )


def create_collection():

    get_connection()

    try:

        # Collection already exists
        if utility.has_collection(COLLECTION_NAME):

            collection = Collection(COLLECTION_NAME)

            collection.load()

            return collection

        # Create new collection

        fields = [

            FieldSchema(
                name="id",
                dtype=DataType.INT64,
                is_primary=True,
                auto_id=True,
            ),

            FieldSchema(
                name="text",
                dtype=DataType.VARCHAR,
                max_length=65535,
            ),

            FieldSchema(
                name="embedding",
                dtype=DataType.FLOAT_VECTOR,
                dim=EMBEDDING_DIM,
            ),

        ]

        schema = CollectionSchema(
            fields=fields,
            description="KnowSphere Document Chunks"
        )

        collection = Collection(
            name=COLLECTION_NAME,
            schema=schema,
        )

        collection.create_index(
            field_name="embedding",
            index_params={
                "metric_type": "COSINE",
                "index_type": "AUTOINDEX",
            },
        )

        collection.load()

        return collection

    except Exception as e:

        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail=f"Milvus Error: {str(e)}"
        )


get_collection = create_collection