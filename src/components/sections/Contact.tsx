"use client";

import { FadeUp, ScrollReveal } from "@/components/ui/Animations";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";
import { motion } from "framer-motion";

export default function Contact() {
  const openTo = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Applied AI Engineer",
    "Software Engineer",
    "Research Collaborations",
    "Startup Collaborations",
    "Hackathons",
    "Technical Speaking",
    "Content Creation"
  ];

  return (
    <section className="section-spacing" id="contact">
      <div className="container-1440 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Let's Build AI That Matters.
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto">
            I'm open to discussing new opportunities in AI engineering, research, and collaborative building.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <motion.a
              href="mailto:abishekramamoorthy22@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold transition-colors hover:bg-gray-200 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abishekr22"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#111214] border border-white/10 text-white px-8 py-4 rounded-full font-semibold transition-colors hover:bg-white/5"
            >
              <LinkedinIcon className="w-5 h-5" />
              LinkedIn
            </motion.a>
          </div>
        </ScrollReveal>

        <div className="border-t border-white/10 pt-12">
          <p className="text-sm text-[#A1A1AA] mb-6 uppercase tracking-widest font-semibold">Currently Open To</p>
          <div className="flex flex-wrap justify-center gap-3">
            {openTo.map((item, i) => (
              <FadeUp key={item} delay={0.05 * i}>
                <span className="px-4 py-2 rounded-full border border-white/5 bg-[#111214]/50 text-sm text-[#A1A1AA]">
                  {item}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
