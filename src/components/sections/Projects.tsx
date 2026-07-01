"use client";

import { FadeUp } from "@/components/ui/Animations";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "TulasiAI",
      logo: "/tulasiai-logo.png",
      description: "An AI-powered career intelligence ecosystem that addresses the lack of personalized guidance for students and professionals. Utilizing Large Language Models (LLMs), autonomous AI Agents, and Retrieval-Augmented Generation (RAG), the platform delivers real-time, context-aware career roadmaps, mock interview simulations, and resume analysis to solve practical career planning problems.",
      techStack: ["Next.js", "FastAPI", "Python", "PostgreSQL", "LLMs", "RAG", "AI Agents"],
      status: "🟢 LIVE",
      github: "https://github.com/Abishek2207",
      demo: "https://tulasiai.in",
    },
    {
      title: "TulasiHealth",
      logo: "/tulasihealth-logo.png",
      description: "A healthcare interoperability platform that bridges legacy systems and standardizes patient data format exchange. Leveraging Natural Language Processing (NLP) and machine learning models, it streamlines clinical text processing, resolves medical terminology, and acts as a production-ready medical intelligence system.",
      techStack: ["React", "FastAPI", "Python", "NLP", "Machine Learning"],
      status: "🟢 LIVE",
      github: "https://github.com/Abishek2207",
      demo: "https://tulasihealth.vercel.app",
    },
    {
      title: "WeaveTales AI",
      logo: "/weavetales-logo.png",
      description: "An AI-powered handloom discovery and virtual try-on platform resolving visibility issues and search friction for traditional weavers. By integrating Computer Vision pipelines, TensorFlow, and FastAPI, it facilitates real-time virtual try-ons and intelligent search interfaces for physical textile assets.",
      techStack: ["React", "FastAPI", "Python", "Computer Vision", "TensorFlow"],
      status: "🟢 LIVE",
      github: "https://github.com/Abishek2207",
      demo: "https://weavetalesai.vercel.app",
    },
    {
      title: "OceanGuard AI",
      logo: "/oceanguard-logo.png",
      description: "A maritime intelligence platform designed to address illegal dark fishing and restricted zone violations. Leveraging Geospatial AI, Deep Learning, and vessel pattern prediction, the platform ingests satellite imagery and vessel data to automatically detect suspicious maritime behavior in real-time.",
      techStack: ["React", "FastAPI", "Python", "Computer Vision", "Deep Learning"],
      status: "🟢 LIVE",
      github: "https://github.com/Abishek2207",
      demo: "https://oceanguardai.vercel.app",
    },
  ];

  return (
    <section className="section-spacing" id="projects">
      <div className="container-1440">
        <FadeUp>
          <div className="mb-16 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Production AI Products
            </h2>
            <p className="text-lg text-[#A1A1AA]">
              Scalable, real-world AI applications built with modern infrastructure.
            </p>
          </div>
        </FadeUp>

        <div className="bento-grid">
          {projects.map((project, index) => (
            <FadeUp key={index} delay={0.1 * index} className="h-full">
              <div className="bento-card glow-border p-8 flex flex-col h-full group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden relative">
                    {/* Placeholder for official logo */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <span className="text-xl font-bold text-white/50">{project.title.charAt(0)}</span>
                  </div>
                  <div className="px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-xs font-medium text-green-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    {project.status}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-[#A1A1AA]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                  <motion.a
                    whileHover={{ x: 2 }}
                    href={project.demo} 
                    target="_blank" 
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    Live Demo <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ x: 2 }}
                    href={project.github} 
                    target="_blank" 
                    className="flex items-center gap-2 text-sm font-medium text-[#A1A1AA] hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> Source
                  </motion.a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
