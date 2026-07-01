"use client";

import { FadeUp, ScrollReveal } from "@/components/ui/Animations";
import { CheckCircle2 } from "lucide-react";

export default function AiSystems() {
  const experiences = [
    "Built multiple production-ready AI systems.",
    "Designed autonomous Multi-Agent AI workflows.",
    "Experience using OpenClaw.",
    "Experience using Hermes Agent.",
    "Built Retrieval-Augmented Generation pipelines.",
    "Built LLM-powered applications.",
    "Built scalable FastAPI backends.",
    "Designed AI workflows from idea to deployment.",
    "Integrated AI agents into real applications."
  ];

  return (
    <section className="section-spacing border-y border-white/5 relative overflow-hidden" id="ai-systems">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111214]/50 to-transparent pointer-events-none" />
      <div className="container-1440 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              AI Systems Engineering
            </h2>
            <p className="text-lg text-[#A1A1AA]">
              Engineering achievements in orchestrating robust, production-ready multi-agent workflows.
            </p>
          </div>
        </ScrollReveal>

        <div className="bento-card glow-border p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
            {experiences.map((exp, index) => (
              <FadeUp key={index} delay={0.05 * index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span className="text-[#A1A1AA] leading-relaxed">{exp}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
