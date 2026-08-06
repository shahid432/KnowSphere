import fitz
from fastapi import HTTPException


class PDFLoader:

    @staticmethod
    def load(file_path: str) -> str:

        try:

            document = fitz.open(file_path)

            text = ""

            for page in document:

                page_text = page.get_text("text")

                if isinstance(page_text, str):
                    text += page_text

            document.close()

            return text

        except Exception as e:

            raise HTTPException(
                status_code=400,
                detail=f"Unable to read PDF: {str(e)}"
            )