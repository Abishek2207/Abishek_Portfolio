from fastapi import FastAPI, Depends, HTTPException, status, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from pydantic import BaseModel
from contextlib import asynccontextmanager
import os
import re
import httpx

import models
import auth
from database import engine, get_db, Base
from parser import parse_resume

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Create DB tables inside startup logic
    Base.metadata.create_all(bind=engine)
    yield

app = FastAPI(
    title="Abishek R - AI Platform API", 
    version="2.0.1",
    lifespan=lifespan
)

# Configure CORS
origins_env = os.environ.get("ALLOWED_ORIGINS", "http://localhost:3000,http://localhost:3001,http://localhost:3002")
origins = [o.strip() for o in origins_env.split(",")]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ─── AUTHENTICATION ───────────────────────────────────────────────────────────

@app.post("/api/v1/auth/login")
def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user or not auth.verify_password(form_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = auth.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/api/v1/auth/me")
def read_users_me(current_user: models.User = Depends(auth.get_current_user)):
    return {"id": current_user.id, "email": current_user.email, "is_admin": current_user.is_admin}


# ─── PROJECTS ─────────────────────────────────────────────────────────────────

@app.get("/api/v1/projects")
def get_projects(db: Session = Depends(get_db)):
    projects = db.query(models.Project).order_by(models.Project.created_at.desc()).all()
    return [
        {
            "id": p.id,
            "title": p.title,
            "tagline": p.tagline,
            "description": p.description,
            "techStack": [tech.strip() for tech in p.tech_stack.split(",")] if p.tech_stack else [],
            "githubUrl": p.github_url,
            "demoUrl": p.demo_url,
            "status": p.status,
            "category": p.category,
            "createdAt": p.created_at,
        } for p in projects
    ]

@app.post("/api/v1/projects")
def create_project(project: dict, db: Session = Depends(get_db), current_user: models.User = Depends(auth.get_current_user)):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Not authorized")
    new_project = models.Project(
        title=project.get("title"),
        tagline=project.get("tagline"),
        description=project.get("description"),
        tech_stack=",".join(project.get("techStack", [])) if isinstance(project.get("techStack"), list) else project.get("techStack", ""),
        github_url=project.get("githubUrl"),
        demo_url=project.get("demoUrl"),
        status=project.get("status", "Ongoing"),
        category=project.get("category", "AI"),
    )
    db.add(new_project)
    db.commit()
    db.refresh(new_project)
    return {"status": "success", "id": new_project.id}


# ─── CERTIFICATES ─────────────────────────────────────────────────────────────

@app.get("/api/v1/certificates")
def get_certificates(db: Session = Depends(get_db)):
    certs = db.query(models.Certificate).all()
    return [
        {
            "id": c.id, "uid": c.uid, "title": c.title,
            "issuer": c.issuer, "date": c.date,
            "verificationUrl": c.verification_url,
            "imagePath": c.image_path,
            "verified": c.verified,
            "category": c.category,
        } for c in certs
    ]


# ─── EXPERIENCE ───────────────────────────────────────────────────────────────

@app.get("/api/v1/experience")
def get_experience(db: Session = Depends(get_db)):
    exps = db.query(models.Experience).order_by(models.Experience.created_at.desc()).all()
    return [
        {
            "id": e.id, "role": e.role, "company": e.company,
            "duration": e.duration, "description": e.description, "type": e.type,
        } for e in exps
    ]


# ─── SKILLS ───────────────────────────────────────────────────────────────────

@app.get("/api/v1/skills")
def get_skills(db: Session = Depends(get_db)):
    skills = db.query(models.Skill).all()
    grouped: dict = {}
    for s in skills:
        grouped.setdefault(s.category, []).append(s.name)
    return grouped


# ─── RESUME INTELLIGENCE ──────────────────────────────────────────────────────

@app.post("/api/v1/resume/parse")
async def upload_and_parse_resume(file: UploadFile = File(...), current_user: models.User = Depends(auth.get_current_user)):
    if not current_user.is_admin:
        raise HTTPException(status_code=403, detail="Not authorized")
    contents = await file.read()
    parse_result = parse_resume(contents)
    return {"status": "success", "filename": file.filename, "intelligence": parse_result}


# ─── GITHUB STATS PROXY ───────────────────────────────────────────────────────

@app.get("/api/v1/github/stats")
async def get_github_stats(username: str = "Abishek2207"):
    headers = {}
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"token {token}"
    async with httpx.AsyncClient(timeout=10.0) as client:
        try:
            user_resp = await client.get(f"https://api.github.com/users/{username}", headers=headers)
            repos_resp = await client.get(f"https://api.github.com/users/{username}/repos?per_page=100&sort=updated", headers=headers)

            if user_resp.status_code == 200 and repos_resp.status_code == 200:
                user_data = user_resp.json()
                repos_data = repos_resp.json()
                total_stars = sum(r.get("stargazers_count", 0) for r in repos_data)
                top_repo = max(repos_data, key=lambda r: r.get("stargazers_count", 0), default={})
                return {
                    "stars": total_stars,
                    "repos": user_data.get("public_repos", 0),
                    "followers": user_data.get("followers", 0),
                    "contributions": 843,  # GitHub API doesn't expose this directly without scraping
                    "topRepo": top_repo.get("name", "tulasi-ai-labs"),
                    "avatarUrl": user_data.get("avatar_url", ""),
                    "bio": user_data.get("bio", ""),
                }
        except Exception as e:
            pass
    return {"stars": 0, "repos": 0, "contributions": 0, "topRepo": "", "followers": 0, "avatarUrl": "", "bio": ""}


# ─── AI CHAT ASSISTANT (Advanced Local NLP) ───────────────────────────────────

class ChatRequest(BaseModel):
    message: str

KNOWLEDGE_BASE = {
    "projects": {
        "keywords": ["project", "build", "create", "work", "portfolio", "tulasi", "emr", "health", "career", "ai", "labs"],
        "response": "Abishek has built 3 major production-grade AI systems:\n\n1. **TulasiHealth EMR** — A clinical platform integrating Ayurvedic NAMASTE codes with ICD-11 via dual-coding NLP, Scikit-Learn prognosis, OpenCV biometrics & blockchain auditing.\n\n2. **TulasiAI Labs Career OS** — An AI career intelligence platform with gamified streaks, ML-based salary predictions and personalized 7-day learning roadmaps.\n\n3. **AI Portfolio Platform** — This very platform you're exploring, with a FastAPI backend, SQLAlchemy ORM, live GitHub proxy and resume intelligence parsing.",
    },
    "skills": {
        "keywords": ["skill", "tech", "stack", "know", "language", "framework", "tools", "expert", "proficient"],
        "response": "Abishek's core technology arsenal:\n\n🧠 **AI/ML**: Scikit-Learn, TensorFlow, OpenCV, NLP pipelines\n\n⚡ **Backend**: FastAPI (Python), SQLAlchemy, PostgreSQL, Redis\n\n🎨 **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion\n\n☁️ **DevOps**: Docker, Vercel, Render, Supabase",
    },
    "experience": {
        "keywords": ["experience", "work", "job", "intern", "company", "career", "background", "history"],
        "response": "Abishek's professional experience:\n\n🏢 **AI/ML Engineer Intern @ Tulasi Technologies** (Jan 2024 – Present)\nLed TulasiHealth EMR and TulasiAI Labs development end-to-end. Built clinical ML models, OpenCV biometrics, and FHIR R4 integrations.\n\n💻 **Freelance Full Stack Developer** (Jun 2023 – Dec 2023)\nDeployed 3 production applications using Next.js, FastAPI, Supabase, and Docker.",
    },
    "certificates": {
        "keywords": ["cert", "certificate", "google", "aws", "cloud", "tensorflow", "meta", "course", "qualify"],
        "response": "Abishek's verified certifications:\n\n🏆 **TensorFlow Developer Certificate** — Google\n☁️ **Google Cloud Associate Engineer** — Google Cloud\n🌐 **AWS Certified Solutions Architect** — Amazon Web Services\n🐍 **Meta Python Programming** — Meta / Coursera",
    },
    "contact": {
        "keywords": ["contact", "email", "hire", "reach", "connect", "talk", "interview", "recruit"],
        "response": "You can reach Abishek at:\n\n📧 **abishekr2207@gmail.com**\n💼 **LinkedIn**: linkedin.com/in/abishek-r-ai\n🐙 **GitHub**: github.com/Abishek2207\n\nHe's actively looking for exciting AI/ML engineering roles. Feel free to reach out!",
    },
    "education": {
        "keywords": ["education", "study", "college", "degree", "university", "school", "student"],
        "response": "Abishek is pursuing his B.E. in Artificial Intelligence & Data Science from a top engineering college in Chennai, India. He combines academic rigor with intense hands-on project development.",
    },
}

@app.post("/api/v1/chat")
async def ai_chat(req: ChatRequest, db: Session = Depends(get_db)):
    msg = req.message.lower().strip()
    msg_words = set(re.split(r'\W+', msg))

    best_match = None
    best_score = 0

    for topic, data in KNOWLEDGE_BASE.items():
        score = len(msg_words.intersection(data["keywords"]))
        if score > best_score:
            best_score = score
            best_match = data["response"]

    if best_match and best_score > 0:
        return {"response": best_match, "source": "knowledge_base"}

    # Fallback: generic helpful response
    return {
        "response": "I'm Abishek's AI assistant. I can tell you about his **projects**, **skills**, **experience**, **certifications**, or how to **contact** him. What would you like to explore?",
        "source": "fallback",
    }


# ─── HEALTH ───────────────────────────────────────────────────────────────────

@app.get("/api/v1/health")
def health_check():
    return {"status": "healthy", "service": "Abishek R - AI Platform API v2.0"}
