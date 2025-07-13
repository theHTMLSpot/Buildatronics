from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import payment  

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(payment.router, prefix="/api/payment")
