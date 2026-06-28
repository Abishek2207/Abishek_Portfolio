"use client";

import { useState, useRef, useEffect } from "react";

export default function TerminalOverlay({ scrollProgress }: { scrollProgress: number }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show terminal only at the very bottom of the scroll (progress > 0.95)
  const isVisible = scrollProgress > 0.95;

  // Auto-focus and initialize output when becoming visible
  useEffect(() => {
    if (isVisible) {
      if (output.length === 0) {
        setOutput([
          "ABISHEK.EXE [Version 10.0.19045.2965]",
          "(c) TulasiAI Corporation. All rights reserved.",
          "",
          "TYPE 'help' FOR COMMANDS."
        ]);
      }
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isVisible, output.length]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response = "";

    switch (cmd) {
      case "help":
        response = "AVAILABLE COMMANDS: about, projects, skills, resume, contact, future, clear";
        break;
      case "about":
        response = "ABISHEK R: B.Tech AI & ML Student, Madurai -> Chennai. Visionary builder.";
        break;
      case "projects":
        response = "MISSIONS COMPLETED: TulasiHealth EMR, AI Accident Predictor, Handloom AI, TulasiAI Core.";
        break;
      case "skills":
        response = "LOADED MODULES: [Python, TensorFlow, PyTorch, FastAPI, Next.js, Docker, WebGL]";
        break;
      case "contact":
        response = "ESTABLISH SECURE LINK: contact@abishekr.com";
        break;
      case "future":
        response = "DESTINATION: Impact at Scale. Google, Microsoft, NVIDIA, DeepMind.";
        break;
      case "resume":
        response = "INITIATING DOWNLOAD... (Just kidding, link not connected yet).";
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      default:
        if (cmd) response = `COMMAND NOT RECOGNIZED: ${cmd}`;
    }

    if (cmd) {
      setOutput((prev) => [...prev, `C:\\ABISHEK> ${cmd}`, response, ""]);
    }
    setInput("");
  };

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 pointer-events-auto">
      <div className="w-full max-w-3xl h-[60vh] bg-[#0c0c0c]/90 border border-[#00f0ff]/30 rounded-lg shadow-[0_0_50px_rgba(0,240,255,0.1)] p-6 font-mono text-sm overflow-hidden flex flex-col">
        <div className="text-white/40 border-b border-white/10 pb-2 mb-4 flex justify-between">
          <span>TERMINAL ACCESS // AUTHORIZED</span>
          <span className="text-[#00f0ff] animate-pulse">● ONLINE</span>
        </div>
        
        <div className="flex-1 overflow-y-auto text-[#00f0ff] custom-scrollbar flex flex-col justify-end">
          {output.map((line, i) => (
            <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
          ))}
          <form onSubmit={handleCommand} className="flex items-center mt-2">
            <span className="text-white mr-2">C:\ABISHEK{">"}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[#00f0ff] font-mono"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
