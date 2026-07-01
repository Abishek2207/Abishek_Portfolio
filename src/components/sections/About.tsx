"use client";

import { ScrollReveal } from "@/components/ui/Animations";

export default function About() {
  const timeline = [
    { year: "2021", label: "Started Programming" },
    { year: "2023", label: "AI Internship" },
    { year: "2023", label: "Hackathons" },
    { year: "2024", label: "Founder" },
    { year: "Present", label: "Building AI Products" },
  ];

  return (
    <section className="section-spacing" id="about">
      <div className="container-1440 max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="glass-card p-8 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              My Journey
            </h2>
            <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto mb-16">
              From writing my first lines of code to building production-grade AI
              systems, my journey has been driven by a singular focus: using
              artificial intelligence to solve meaningful problems.
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 hidden md:block" />

              <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
                {timeline.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-4">
                    <div className="w-4 h-4 rounded-full bg-[#111214] border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    <div className="text-center">
                      <div className="text-sm font-semibold text-white mb-1">
                        {item.year}
                      </div>
                      <div className="text-xs font-medium text-[#A1A1AA] uppercase tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
