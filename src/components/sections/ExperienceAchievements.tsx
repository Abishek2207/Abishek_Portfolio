"use client";

import { ScrollReveal } from "@/components/ui/Animations";
import { Briefcase, Trophy } from "lucide-react";

export default function ExperienceAchievements() {
  const experiences = [
    {
      role: "Founder & CEO",
      company: "TulasiAI",
      date: "2026 - Present",
      description: "Founded and developed TulasiAI. Designed and deployed autonomous AI workflows, multi-agent architectures, and LLM-powered features.",
    },
    {
      role: "AI & ML Intern",
      company: "TANSAM Centre of Excellence",
      date: "2025",
      description: "Applied Python, machine learning, and data analytics to analyze large-scale datasets and extract insights.",
    },
  ];

  const achievements = [
    "✔ Founder & CEO of TulasiAI",
    "✔ Built and deployed TulasiAI",
    "✔ Built and deployed TulasiHealth",
    "✔ Built and deployed WeaveTales AI",
    "✔ Built and deployed OceanGuard AI",
    "✔ AI & ML Internship at TANSAM Centre of Excellence",
    "✔ National Finalist — Handloom Hackathon",
    "✔ USAII Global AI Hackathon 2026 — Finalist",
    "✔ NASA Space Apps Challenge — Participant",
    "✔ Future Ready AI Summit — Participant",
    "✔ RightsX Summit — Approved Delegate",
    "✔ Completed Forage Job Simulation Programs",
    "✔ Building multiple AI products",
    "✔ Tech Content Creator",
  ];

  return (
    <section className="section-spacing" id="experience">
      <div className="container-1440 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <ScrollReveal>
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            </div>
            
            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <div className="text-sm text-[#A1A1AA] mb-1 font-mono">{exp.date}</div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <div className="text-sm font-medium text-white mb-3">{exp.company}</div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Achievements Column */}
        <ScrollReveal delay={0.2}>
          <div>
            <div className="flex items-center gap-3 mb-10">
              <Trophy className="w-6 h-6" />
              <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
            </div>

            <div className="flex flex-col gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card p-6 flex items-center hover:bg-white/5 transition-colors">
                  <span className="font-medium text-lg">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
