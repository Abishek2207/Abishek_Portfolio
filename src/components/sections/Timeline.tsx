"use client";

import { FadeUp, ScrollReveal } from "@/components/ui/Animations";

export default function Timeline() {
  const timelineData = [
    {
      year: "2026",
      events: [
        { title: "TulasiAI", role: "Founder & CEO" },
        { title: "TulasiAI Platform Launched", role: "Launched" },
        { title: "TulasiHealth Platform Launched", role: "Launched" },
        { title: "WeaveTales AI Platform Launched", role: "Launched" },
        { title: "OceanGuard AI Platform Launched", role: "Launched" },
        { title: "USAII Global AI Hackathon", role: "Finalist" },
        { title: "Forage Job Simulations Completed", role: "Completed" },
      ]
    },
    {
      year: "2025",
      events: [
        { title: "Handloom Hackathon", role: "National Finalist" },
        { title: "TANSAM Centre of Excellence", role: "AI & ML Internship" },
        { title: "NASA Space Apps Challenge", role: "Participant" },
        { title: "Future Ready AI Summit", role: "Participant" },
        { title: "RightsX Summit", role: "Approved Delegate" },
      ]
    }
  ];

  return (
    <section className="section-spacing border-y border-white/5 relative overflow-hidden" id="timeline">
      <div className="absolute inset-0 bg-gradient-to-t from-[#111214]/50 to-transparent pointer-events-none" />
      <div className="container-1440 max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Timeline & Milestones
            </h2>
            <p className="text-lg text-[#A1A1AA]">
              A verified record of my academic, professional, and builder journey.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {timelineData.map((group, groupIndex) => (
            <div key={group.year} className="relative">
              <FadeUp delay={0.1 * groupIndex}>
                <div className="sticky top-24 z-10 bg-black/80 backdrop-blur-md inline-block px-4 py-1 border border-white/10 rounded-full mb-8">
                  <span className="text-xl font-bold text-white">{group.year}</span>
                </div>
              </FadeUp>

              <div className="flex flex-col gap-6 pl-6 md:pl-12 border-l border-white/10 ml-4 md:ml-8 relative">
                {group.events.map((event, index) => (
                  <FadeUp key={index} delay={0.05 * index} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute w-3 h-3 bg-[#111214] border border-white rounded-full -left-[30px] md:-left-[54px] top-1.5 transition-all group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                    
                    <div className="bento-card glow-border p-5 flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-lg font-medium text-white">{event.title}</h3>
                      <span className="text-sm text-[#A1A1AA] bg-white/5 border border-white/10 px-3 py-1 rounded-md whitespace-nowrap w-fit">
                        {event.role}
                      </span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
