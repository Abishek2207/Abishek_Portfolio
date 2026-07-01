"use client";

import { FadeUp, ScrollReveal } from "@/components/ui/Animations";
import { BrainCircuit, Database, ServerCog, Workflow } from "lucide-react";

export default function MultiAgentSystem() {
  const components = [
    {
      icon: <ServerCog className="w-6 h-6" />,
      title: "Orchestration",
      description: "Supervisor agent dynamically routes tasks to specialized sub-agents based on capability.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Memory",
      description: "Short-term context windows coupled with Long-term vector DB retrieval for persistent state.",
    },
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Reasoning",
      description: "Chain-of-thought and ReAct prompting loops for complex problem decomposition.",
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Tool Calling",
      description: "Agents autonomously invoke external APIs, execute code, and query databases.",
    },
  ];

  return (
    <section className="section-spacing bg-[#111214]/30 border-y border-white/5" id="architecture">
      <div className="container-1440">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Multi-Agent Architecture
            </h2>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto">
              Designing intelligent systems where autonomous agents collaborate to solve complex reasoning tasks.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((comp, index) => (
            <FadeUp key={index} delay={0.1 * index}>
              <div className="glass-card p-8 h-full flex flex-col items-start">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 mb-6 text-white">
                  {comp.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{comp.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {comp.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Abstract Diagram Placeholder */}
        <FadeUp delay={0.4} className="mt-16">
          <div className="w-full aspect-[21/9] rounded-2xl border border-white/10 bg-[#111214] overflow-hidden relative flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
            <div className="text-[#A1A1AA] text-sm uppercase tracking-widest font-mono border border-white/10 px-4 py-2 rounded">
              Interactive Architecture Diagram
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
