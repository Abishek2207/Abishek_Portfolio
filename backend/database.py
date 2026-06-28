import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Production Database Configuration
# Default to SQLite for local development, but use DATABASE_URL (Postgres) in production
DATABASE_URL = os.environ.get("DATABASE_URL", "sqlite:///./ai_platform.db")

# Production-ready engine arguments
if DATABASE_URL.startswith("postgresql"):
    # Fix for Render/Heroku which might use 'postgres://' instead of 'postgresql://'
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    engine_args = {
        "pool_size": 10,
        "max_overflow": 20,
        "pool_pre_ping": True,
        "pool_recycle": 1800,
    }
else:
    # SQLite logic
    engine_args = {"connect_args": {"check_same_thread": False}}

engine = create_engine(DATABASE_URL, **engine_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
