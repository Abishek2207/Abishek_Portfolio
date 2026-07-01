"use client";

import { FadeUp, ScrollReveal } from "@/components/ui/Animations";

export default function Skills() {
  const categories = [
    {
      title: "Artificial Intelligence",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Generative AI", "LLMs", "RAG", "AI Agents", "Prompt Engineering", "Multi-Agent Systems", "AI Workflow Automation"]
    },
    {
      title: "Programming",
      skills: ["Python", "Java", "SQL", "C"]
    },
    {
      title: "Frameworks",
      skills: ["FastAPI", "React", "Next.js", "Tailwind CSS", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "OpenClaw", "Hermes Agent"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "SQLite"]
    },
    {
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Docker", "VS Code", "Figma", "Canva", "CapCut", "Adobe Express"]
    }
  ];

  return (
    <section className="section-spacing" id="skills">
      <div className="container-1440">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Technical Arsenal
            </h2>
            <p className="text-lg text-[#A1A1AA]">
              The stack behind my AI engineering and development workflows.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <FadeUp key={category.title} delay={0.1 * index} className={category.title === "Frameworks" ? "md:col-span-2 lg:col-span-1" : ""}>
              <div className="bento-card glow-border p-8 h-full">
                <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-sm text-[#A1A1AA] hover:text-white hover:border-white/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
