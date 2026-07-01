"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/Animations";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Particle animation component
function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: [null, Math.random() * -200],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col justify-center relative overflow-hidden" id="hero">
      <Particles />
      <div className="container-1440 flex flex-col items-center text-center relative z-10">
        
        {/* Profile Image with Glowing Border */}
        <FadeUp delay={0.1}>
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20 overflow-hidden bg-black">
              <Image
                src="/abishek.jpg" // Place your professional photo here
                alt="Abishek R"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["AI Engineer", "Founder & CEO — TulasiAI", "Tech Content Creator"].map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-[#A1A1AA]">
                {tag}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.3} className="flex flex-col gap-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            ABISHEK R
          </h1>
          <p className="text-xl md:text-2xl text-[#A1A1AA] font-light leading-relaxed max-w-3xl mx-auto">
            Building production-ready AI systems using <span className="text-white font-medium">Large Language Models (LLMs), AI Agents, Computer Vision</span>, and modern AI technologies to solve real-world problems.
          </p>
        </FadeUp>

        <FadeUp delay={0.4} className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold transition-all hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            View My Work
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </FadeUp>

      </div>
    </section>
  );
}
