from fastapi import HTTPException

from app.rag.retriever import Retriever
from app.rag.generator import Generator


class ChatService:

    @staticmethod
    def ask(question: str):

        try:

            if not question.strip():

                raise HTTPException(
                    status_code=400,
                    detail="Question cannot be empty."
                )

            chunks = Retriever.search(
                query=question,
                limit=5
            )

            if not chunks:

                return {
                    "question": question,
                    "answer": "I couldn't find any relevant information in the uploaded documents.",
                    "sources": []
                }

            context = "\n\n".join(chunks)

            answer = Generator.generate(
                question=question,
                context=context
            )

            return {
                "question": question,
                "answer": answer,
                "sources": chunks
            }

        except HTTPException:

            raise

        except Exception as e:

            message = str(e)

            if "503" in message or "UNAVAILABLE" in message:

                raise HTTPException(
                    status_code=503,
                    detail="KnowSphere AI is temporarily busy. Please try again in a few seconds."
                )

            raise HTTPException(
                status_code=500,
                detail=f"Chat processing error: {message}"
            )