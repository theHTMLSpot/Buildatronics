import os
from pathlib import Path

from dotenv import load_dotenv
import stripe
from fastapi import HTTPException
from schemas import stripe as stripe_schema

dotenv_path = Path(__file__).resolve().parents[2] / ".env"
print(f"Loading environment variables from: {dotenv_path}")
load_dotenv(dotenv_path)

stripe.api_key = os.getenv("STRIPE_SECRET_KEY")
base_url = os.getenv("BASE_URL")

if not stripe.api_key:
    raise RuntimeError("STRIPE_SECRET_KEY not found in environment")

if not base_url:
    raise RuntimeError("BASE_URL not found in environment")


async def create_checkout_session(data: stripe_schema.CheckoutRequest):
    """
    Creates a Stripe checkout session for payment processing.
    """
    try:
        session = stripe.checkout.Session.create(
            line_items=[{
                'price': data.price_id,
                'quantity': data.quantity,
            }],
            mode='payment',
            success_url=f'{base_url}/payment_success',
            cancel_url=f'{base_url}/payment_cancel',
        )
        return {"url": session.url}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Stripe error: {str(e)}")
