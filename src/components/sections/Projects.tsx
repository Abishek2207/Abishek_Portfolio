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
      logo: "/tulasiai-logo.png", // User to replace with actual logo
      description: "AI Career Intelligence Platform built for students and professionals featuring Resume Intelligence, AI Interview Assistant, Career Roadmaps, Opportunity Discovery and AI Agents.",
      techStack: ["Next.js", "Python", "FastAPI", "PostgreSQL", "LangChain"],
      status: "🟢 LIVE",
      github: "https://github.com/Abishek2207",
      demo: "https://tulasiai.in",
    },
    {
      title: "TulasiHealth",
      logo: "/tulasihealth-logo.png", // User to replace with actual logo
      description: "Healthcare interoperability platform powered by AI supporting medical intelligence, NLP and structured healthcare data.",
      techStack: ["React", "FastAPI", "NLP", "Machine Learning"],
      status: "🟢 LIVE",
      github: "https://github.com/Abishek2207",
      demo: "https://tulasihealth.vercel.app",
    },
    {
      title: "WeaveTales AI",
      logo: "/weavetales-logo.png", // User to replace with actual logo
      description: "Computer Vision powered handloom discovery platform with intelligent artisan search and virtual try-on.",
      techStack: ["React", "Node.js", "Computer Vision", "TensorFlow"],
      status: "🟢 LIVE",
      github: "https://github.com/Abishek2207",
      demo: "https://weavetalesai.vercel.app",
    },
    {
      title: "OceanGuard AI",
      logo: "/oceanguard-logo.png", // User to replace with actual logo
      description: "Marine intelligence platform for vessel monitoring, dark fishing detection and maritime risk prediction.",
      techStack: ["PyTorch", "OpenCV", "Docker", "Machine Learning"],
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
