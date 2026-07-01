"use client";

import { ScrollReveal } from "@/components/ui/Animations";
import { Briefcase, Trophy } from "lucide-react";

export default function ExperienceAchievements() {
  const experiences = [
    {
      role: "Founder",
      company: "TulasiAI",
      date: "2024 - Present",
      description: "Building autonomous AI systems for healthcare and professional intelligence. Orchestrating multi-agent architectures and LLM workflows.",
    },
    {
      role: "AI Intern",
      company: "Tech Solutions",
      date: "2023 - 2024",
      description: "Developed and optimized machine learning models for computer vision applications. Improved inference speed by 30%.",
    },
  ];

  const achievements = [
    "🏆 3× International Hackathon Finalist",
    "🚀 4+ Hackathons Participated",
    "🤖 Built Multi-Agent AI System",
    "💼 Founder of TulasiAI",
    "🌏 National Level Finalist",
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
