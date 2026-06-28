"use client";

import { motion } from "framer-motion";
import { GitCommit, GitPullRequest, GitMerge, Star } from "lucide-react";

export default function GithubStats() {
  const stats = [
    { label: "Total Commits", value: "1,204", icon: GitCommit, color: "text-emerald-400" },
    { label: "Pull Requests", value: "156", icon: GitPullRequest, color: "text-ai-cyan" },
    { label: "Repositories", value: "42", icon: GitMerge, color: "text-ai-purple" },
    { label: "Stars Earned", value: "89", icon: Star, color: "text-amber-400" },
  ];

  return (
    <section id="github" className="relative py-32 px-4 bg-background border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-gradient-ai">Open Source</span> Footprint
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ai-cyan to-ai-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center group"
            >
              <stat.icon size={28} className={`${stat.color} mb-4 group-hover:scale-125 transition-transform`} />
              <h4 className="text-3xl font-black mb-1 text-white">{stat.value}</h4>
              <p className="text-xs text-gray-400 font-mono uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph Placeholder / 3D Snake Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-64 glass-panel rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ai-cyan/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="text-center">
            <GitMerge size={48} className="text-ai-cyan/50 mx-auto mb-4 animate-pulse" />
            <p className="text-gray-400 font-mono text-sm">
              [Live GitHub Contribution Data Stream Initializing...]
            </p>
            <p className="text-gray-500 text-xs mt-2">
              (In production, connect GitHub GraphQL API for the 3D contribution snake)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
