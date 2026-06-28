import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  console.log("Seeding real platform data...");

  // Clear existing to avoid unique constraint errors during re-seed
  await db.trainingLog.deleteMany();
  await db.experience.deleteMany();
  await db.certificate.deleteMany();
  await db.project.deleteMany();

  // Projects
  await db.project.createMany({
    data: [
      {
        title: "Tulasi AI",
        tagline: "LLM-based Medical AI Assistant",
        description: "A comprehensive health tech AI assistant featuring a RAG pipeline and PDF QA system to help users query medical documentation effectively. Built with a highly scalable FastAPI backend and Next.js frontend.",
        techStack: "Next.js, FastAPI, RAG, LLMs, LangChain",
        githubUrl: "https://github.com/abishekr/tulasi-ai",
        demoUrl: "https://tulasi-ai.vercel.app",
        status: "Ongoing",
        category: "AI/ML",
      },
      {
        title: "NASA Space Apps Hackathon",
        tagline: "Exoplanet Detection System",
        description: "Developed an AI model for recognizing data patterns in stellar light curves to identify potential exoplanet transits. Used advanced deep learning techniques to process vast amounts of astronomical data.",
        techStack: "PyTorch, Pandas, Scikit-Learn, CNNs",
        githubUrl: "https://github.com/abishekr/nasa-exoplanet",
        status: "Completed",
        category: "Deep Learning",
      },
      {
        title: "Handloom AI Platform",
        tagline: "Digital Storytelling & Marketplace",
        description: "An AI platform aimed at reviving the handloom industry by providing digital storytelling for artisans and a smart AI-driven marketplace to connect them with global buyers.",
        techStack: "React, Python, Generative AI, Stable Diffusion",
        status: "Hackathon Finalist",
        category: "Generative AI",
      },
    ],
  });

  // Certificates
  await db.certificate.createMany({
    data: [
      {
        uid: "CERT-AI-12345",
        title: "Advanced Machine Learning Specialization",
        issuer: "Coursera / Stanford",
        date: "Jan 2024",
        verificationUrl: "https://coursera.org/verify/ai-abishek",
        verified: true,
        category: "AI",
      },
      {
        uid: "CERT-GENAI-67890",
        title: "Generative AI Foundations",
        issuer: "Google Cloud",
        date: "March 2024",
        verificationUrl: "https://tala.google/verify/abishek",
        verified: true,
        category: "Generative AI",
      },
      {
        uid: "CERT-DELL-9999",
        title: "Deloitte AI Simulation",
        issuer: "Deloitte",
        date: "Feb 2024",
        verified: true,
        category: "Experience",
      },
    ],
  });

  // Experiences
  await db.experience.createMany({
    data: [
      {
        role: "AI/ML Intern",
        company: "TANSAM (TIDCO & Siemens)",
        duration: "Jan 2024 - Present",
        description: "Working on cutting edge Artificial Intelligence and Machine Learning solutions. Focused on optimizing neural networks and deploying scalable models for industrial applications.",
        type: "Internship",
      },
    ],
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
