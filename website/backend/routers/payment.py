from fastapi import APIRouter
from schemas import stripe
import payment.main

router = APIRouter()

@router.post("/purchase/")
async def purchase(data: stripe.CheckoutRequest):
    return await payment.main.create_checkout_session(data)
