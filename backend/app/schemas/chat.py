from pydantic import BaseModel, Field, AliasChoices


class ChatRequest(BaseModel):
    question: str = Field(
        ...,
        description="The question or prompt to ask",
        validation_alias=AliasChoices("question", "query", "prompt", "message")
    )

