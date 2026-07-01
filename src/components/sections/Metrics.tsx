"use client";

import { FadeUp } from "@/components/ui/Animations";

export default function Metrics() {
  const metrics = [
    { label: "Live AI Products", value: "4", highlight: true },
    { label: "USAII Global AI", value: "Hackathon Finalist", highlight: false },
    { label: "Current CGPA", value: "7.87", highlight: true },
    { label: "Experience In", value: "Multiple AI Domains", highlight: false },
  ];

  return (
    <section className="section-spacing border-y border-white/5 relative overflow-hidden" id="stats">
      <div className="absolute inset-0 bg-gradient-to-b from-[#111214]/50 to-transparent pointer-events-none" />
      <div className="container-1440 relative z-10">
        <div className="bento-grid">
          {metrics.map((metric, index) => (
            <FadeUp key={index} delay={0.1 * index}>
              <div className="bento-card glow-border p-8 flex flex-col justify-center items-center text-center h-full min-h-[200px]">
                <div className={`text-4xl md:text-5xl font-bold tracking-tight mb-2 ${metric.highlight ? "text-white" : "text-[#A1A1AA] text-2xl md:text-3xl"}`}>
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-[#A1A1AA] uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
