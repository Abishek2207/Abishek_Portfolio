from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text, Text
from sqlalchemy.sql import func
from database import Base
import uuid

def generate_uuid():
    return str(uuid.uuid4())

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, default=generate_uuid)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Project(Base):
    __tablename__ = "projects"
    id = Column(String, primary_key=True, default=generate_uuid)
    title = Column(String, index=True)
    tagline = Column(String)
    description = Column(Text)
    tech_stack = Column(String) # Comma separated
    github_url = Column(String, nullable=True)
    demo_url = Column(String, nullable=True)
    status = Column(String, default="Ongoing")
    category = Column(String, default="AI")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Certificate(Base):
    __tablename__ = "certificates"
    id = Column(String, primary_key=True, default=generate_uuid)
    uid = Column(String, unique=True, index=True) # Official ID
    title = Column(String)
    issuer = Column(String)
    date = Column(String)
    verification_url = Column(String, nullable=True)
    image_path = Column(String, nullable=True)
    verified = Column(Boolean, default=True)
    category = Column(String, default="AI")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Experience(Base):
    __tablename__ = "experience"
    id = Column(String, primary_key=True, default=generate_uuid)
    role = Column(String)
    company = Column(String)
    duration = Column(String)
    description = Column(Text)
    type = Column(String, default="Internship")
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Skill(Base):
    __tablename__ = "skills"
    id = Column(String, primary_key=True, default=generate_uuid)
    name = Column(String, unique=True, index=True)
    category = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
