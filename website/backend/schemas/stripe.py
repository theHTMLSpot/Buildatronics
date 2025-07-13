from pydantic import BaseModel

class CheckoutRequest(BaseModel):
    price_id: str
    quantity: int = 1