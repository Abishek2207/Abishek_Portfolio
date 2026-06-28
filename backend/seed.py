"""
Seed Script - Populate Abishek R's AI Portfolio Database with Real Data
Run: python seed.py
"""
import os
import sys
from sqlalchemy.orm import Session
from database import engine, Base, get_db
import models
import auth

def seed_database():
    Base.metadata.create_all(bind=engine)
    db = next(get_db())

    # --- Admin User ---
    existing = db.query(models.User).filter(models.User.email == "admin@abishek.ai").first()
    if not existing:
        admin = models.User(
            email="admin@abishek.ai",
            hashed_password=auth.get_password_hash("TulasiAdmin@2024"),
            is_admin=True,
            is_active=True,
        )
        db.add(admin)
        print("✅ Admin user created: admin@abishek.ai / TulasiAdmin@2024")
    else:
        print("ℹ️  Admin user already exists.")

    # --- Projects ---
    existing_projects = db.query(models.Project).count()
    if existing_projects == 0:
        projects = [
            models.Project(
                title="TulasiHealth EMR",
                tagline="Bridging Traditional & Modern Medicine",
                description="A production-grade Electronic Medical Record system integrating NAMASTE (Ayurvedic) and ICD-11 dual-coding, Scikit-Learn RandomForest prognosis, OpenCV biometric verification, and a SHA-256 blockchain audit ledger. Built with FastAPI + Next.js. FHIR R4 compliant.",
                tech_stack="Next.js,FastAPI,PostgreSQL,Scikit-Learn,OpenCV,Redis,Docker,Framer Motion",
                github_url="https://github.com/Abishek2207/tulasihealth",
                demo_url="",
                status="Completed",
                category="HealthTech AI",
            ),
            models.Project(
                title="TulasiAI Labs Career OS",
                tagline="AI-Powered Career Growth Operating System",
                description="A full-stack AI career intelligence platform for students and professionals. Features personalized 7-day roadmaps, gamified streak tracking, a Placement Readiness Score, and Salary Growth Predictor using adaptive ML. Built with Next.js 14, FastAPI, Supabase, and Zustand.",
                tech_stack="Next.js 14,FastAPI,Supabase,PostgreSQL,Zustand,Recharts,Framer Motion",
                github_url="https://github.com/Abishek2207/tulasi-ai-labs",
                demo_url="",
                status="Active",
                category="Career AI",
            ),
            models.Project(
                title="AI Portfolio Platform",
                tagline="Self-Aware Developer Portfolio with RAG Pipeline",
                description="A dynamic personal portfolio powered by a FastAPI backend, SQLAlchemy ORM, and a local NLP AI assistant that can answer recruiter queries about skills and projects in real-time. Features a resume intelligence parser, live GitHub proxy, dynamic certificate verification, and an admin management panel.",
                tech_stack="Next.js 14,FastAPI,SQLite,SQLAlchemy,Python,Tailwind CSS,Framer Motion",
                github_url="https://github.com/Abishek2207/abishek-portfolio",
                demo_url="https://abishek.ai",
                status="Live",
                category="Portfolio",
            ),
        ]
        db.add_all(projects)
        print(f"✅ {len(projects)} projects seeded.")
    else:
        print(f"ℹ️  {existing_projects} projects already exist.")

    # --- Certificates ---
    existing_certs = db.query(models.Certificate).count()
    if existing_certs == 0:
        certs = [
            models.Certificate(
                uid="CERT-TF-001",
                title="TensorFlow Developer Certificate",
                issuer="Google",
                date="2024",
                verified=True,
                category="AI/ML",
            ),
            models.Certificate(
                uid="CERT-GCP-002",
                title="Google Cloud Associate Engineer",
                issuer="Google Cloud",
                date="2024",
                verified=True,
                category="Cloud",
            ),
            models.Certificate(
                uid="CERT-AWS-003",
                title="AWS Certified Solutions Architect",
                issuer="Amazon Web Services",
                date="2023",
                verified=True,
                category="Cloud",
            ),
            models.Certificate(
                uid="CERT-FB-004",
                title="Meta Python Programming",
                issuer="Meta / Coursera",
                date="2023",
                verified=True,
                category="Programming",
            ),
        ]
        db.add_all(certs)
        print(f"✅ {len(certs)} certificates seeded.")
    else:
        print(f"ℹ️  {existing_certs} certificates already exist.")

    # --- Experience ---
    existing_exp = db.query(models.Experience).count()
    if existing_exp == 0:
        experiences = [
            models.Experience(
                role="AI/ML Engineer Intern",
                company="Tulasi Technologies",
                duration="Jan 2024 – Present",
                description="Led development of TulasiHealth EMR and TulasiAI Labs platforms. Spearheaded Scikit-Learn ML integration for clinical prognosis, built OpenCV biometric verification, and implemented FHIR R4 dual-coding compliance.",
                type="Internship",
            ),
            models.Experience(
                role="Full Stack Developer",
                company="Freelance Projects",
                duration="Jun 2023 – Dec 2023",
                description="Designed and deployed 3 production-grade full-stack applications using Next.js and FastAPI, integrating Supabase auth, PostgreSQL databases, and Docker containerization.",
                type="Freelance",
            ),
        ]
        db.add_all(experiences)
        print(f"✅ {len(experiences)} experiences seeded.")
    else:
        print(f"ℹ️  {existing_exp} experiences already exist.")

    # --- Skills ---
    existing_skills = db.query(models.Skill).count()
    if existing_skills == 0:
        skills_data = [
            ("Python", "Languages"), ("TypeScript", "Languages"), ("SQL", "Languages"),
            ("Next.js", "Frontend"), ("React", "Frontend"), ("Framer Motion", "Frontend"), ("Tailwind CSS", "Frontend"),
            ("FastAPI", "Backend"), ("SQLAlchemy", "Backend"), ("PostgreSQL", "Backend"), ("Redis", "Backend"),
            ("Scikit-Learn", "AI/ML"), ("TensorFlow", "AI/ML"), ("OpenCV", "AI/ML"), ("FHIR R4", "HealthTech"),
            ("Docker", "DevOps"), ("Supabase", "DevOps"), ("Vercel", "DevOps"),
        ]
        skills = [models.Skill(name=s[0], category=s[1]) for s in skills_data]
        db.add_all(skills)
        print(f"✅ {len(skills)} skills seeded.")
    else:
        print(f"ℹ️  {existing_skills} skills already exist.")

    db.commit()
    db.close()
    print("\n🚀 Database seeding complete!")

if __name__ == "__main__":
    seed_database()
