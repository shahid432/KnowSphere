from fastapi import HTTPException

from app.rag.embedding import LocalEmbedding
from app.rag.milvus import get_collection


class Retriever:

    @staticmethod
    def search(query: str, limit: int = 3):

        try:

            collection = get_collection()

            print("Milvus Entities :", collection.num_entities)

            if collection.num_entities == 0:

                return []

            query_vector = LocalEmbedding.embed(query)

            results = collection.search(
                data=[query_vector],
                anns_field="embedding",
                param={
                    "metric_type": "COSINE",
                    "params": {}
                },
                limit=limit,
                output_fields=["text"]
            )

            chunks = []

            for hit in results[0]: # type: ignore

                text = hit.entity.get("text")

                if text:
                    chunks.append(text)

            print("=" * 60)
            print("Retrieved Chunks :", len(chunks))
            print(chunks)
            print("=" * 60)

            return chunks

        except Exception as e:

            raise HTTPException(
                status_code=500,
                detail=f"Retriever Error: {str(e)}"
            )