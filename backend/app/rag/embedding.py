from fastapi import HTTPException
from sentence_transformers import SentenceTransformer


class LocalEmbedding:

    _model = SentenceTransformer(
        "all-MiniLM-L6-v2"
    )

    @staticmethod
    def embed(text: str):

        try:

            embedding = LocalEmbedding._model.encode(
                text,
                normalize_embeddings=True
            )

            return embedding.tolist()

        except Exception as e:

            raise HTTPException(
                status_code=500,
                detail=f"Embedding error: {str(e)}"
            )