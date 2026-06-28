import { mockDb } from "../src/lib/db";

async function seed() {
  console.log("Seeding real platform data via JSON...");

  const projects = [
    {
      id: "tulasi",
      title: "Tulasi AI",
      tagline: "LLM-based Medical AI Assistant",
      description: "A comprehensive health tech AI assistant featuring a RAG pipeline and PDF QA system to help users query medical documentation effectively. Built with a highly scalable FastAPI backend and Next.js frontend.",
      techStack: ["Next.js", "FastAPI", "RAG", "LLMs", "LangChain"],
      githubUrl: "https://github.com/abishekr/tulasi-ai",
      demoUrl: "https://tulasi-ai.vercel.app",
      status: "Ongoing",
      category: "AI/ML",
    },
    {
      id: "nasa",
      title: "NASA Space Apps Hackathon",
      tagline: "Exoplanet Detection System",
      description: "Developed an AI model for recognizing data patterns in stellar light curves to identify potential exoplanet transits. Used advanced deep learning techniques to process vast amounts of astronomical data.",
      techStack: ["PyTorch", "Pandas", "Scikit-Learn", "CNNs"],
      githubUrl: "https://github.com/abishekr/nasa-exoplanet",
      status: "Completed",
      category: "Deep Learning",
    },
    {
      id: "handloom",
      title: "Handloom AI Platform",
      tagline: "Digital Storytelling & Marketplace",
      description: "An AI platform aimed at reviving the handloom industry by providing digital storytelling for artisans and a smart AI-driven marketplace to connect them with global buyers.",
      techStack: ["React", "Python", "Generative AI", "Stable Diffusion"],
      status: "Hackathon Finalist",
      category: "Generative AI",
    },
  ];

  const certificates = [
    {
      id: "1",
      uid: "CERT-AI-12345",
      title: "Advanced Machine Learning Specialization",
      issuer: "Coursera / Stanford",
      date: "Jan 2024",
      verificationUrl: "https://coursera.org/verify/ai-abishek",
      verified: true,
      category: "AI",
    },
    {
      id: "2",
      uid: "CERT-GENAI-67890",
      title: "Generative AI Foundations",
      issuer: "Google Cloud",
      date: "March 2024",
      verificationUrl: "https://tala.google/verify/abishek",
      verified: true,
      category: "Generative AI",
    },
    {
      id: "3",
      uid: "CERT-DELL-9999",
      title: "Deloitte AI Simulation",
      issuer: "Deloitte",
      date: "Feb 2024",
      verified: true,
      category: "Experience",
    },
  ];

  const experiences = [
    {
      id: "exp1",
      role: "AI/ML Intern",
      company: "TANSAM (TIDCO & Siemens)",
      duration: "Jan 2024 - Present",
      description: "Working on cutting edge Artificial Intelligence and Machine Learning solutions. Focused on optimizing neural networks and deploying scalable models for industrial applications.",
      type: "Internship",
    },
  ];

  await mockDb.write("projects", projects);
  await mockDb.write("certificates", certificates);
  await mockDb.write("experiences", experiences);

  console.log("JSON seeding completed successfully!");
}

seed().catch(console.error);
