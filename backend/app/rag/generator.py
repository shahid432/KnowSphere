from fastapi import HTTPException

from app.core.groq_client import client


class Generator:

    MODEL = "llama-3.3-70b-versatile"

    @staticmethod
    def generate(question: str, context: str):

        prompt = f"""
You are KnowSphere, an Enterprise Knowledge Assistant.

Answer ONLY from the provided context.

If the answer is not available in the context, reply exactly:

I could not find the answer in the uploaded documents.

Context:

{context}

Question:

{question}
"""

        try:

            response = client.chat.completions.create(

                model=Generator.MODEL,

                messages=[
                    {
                        "role": "system",
                        "content": "You answer only from the provided context."
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],

                temperature=0.2,

                max_tokens=1024

            )

            return response.choices[0].message.content

        except Exception as e:

            raise HTTPException(
                status_code=500,
                detail=f"Groq Error: {str(e)}"
            )