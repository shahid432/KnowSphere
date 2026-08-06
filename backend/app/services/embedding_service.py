from fastapi import HTTPException

from app.rag.embedding import LocalEmbedding
from app.rag.milvus import get_collection


class EmbeddingService:

    @staticmethod
    def save_chunks(chunks):

        try:

            collection = get_collection()

            texts = []
            embeddings = []

            for chunk in chunks:

                embedding = LocalEmbedding.embed(chunk)

                texts.append(chunk)
                embeddings.append(embedding)

            result = collection.insert([
                texts,
                embeddings
            ])

            collection.flush()
            collection.load()

            print("=" * 60)
            print("Chunks inserted :", len(texts))
            print("Insert Result    :", result)
            print("Entities in DB   :", collection.num_entities)
            print("=" * 60)

            return len(chunks)

        except Exception as e:

            raise HTTPException(
                status_code=500,
                detail=f"Embedding Save Error: {str(e)}"
            )