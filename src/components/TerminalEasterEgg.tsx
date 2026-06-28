"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>(["SYSTEM READY. TYPE 'help' FOR COMMANDS."]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Konami Code Logic
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setIsOpen(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    let newOutput = `> ${cmd}`;
    let response = "";

    switch (cmd) {
      case "help":
        response = "AVAILABLE COMMANDS: whoami, skills, clear, exit";
        break;
      case "whoami":
        response = "ABISHEK R - AI ENGINEER & FOUNDER";
        break;
      case "skills":
        response = "PYTHON, NEXT.JS, PYTORCH, TENSORFLOW, LANGCHAIN";
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        setInput("");
        return;
      default:
        response = `COMMAND NOT FOUND: ${cmd}`;
    }

    setOutput(prev => [...prev, newOutput, response]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-[#0C0C0C]/90 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="w-full max-w-2xl bg-[#141418] border border-[#D7E2EA]/20 rounded-xl overflow-hidden shadow-2xl font-mono text-sm"
        >
          {/* Header */}
          <div className="bg-[#0C0C0C] px-4 py-3 border-b border-[#D7E2EA]/20 flex justify-between items-center">
            <span className="text-[#D7E2EA]/60 uppercase">System Terminal</span>
            <button onClick={() => setIsOpen(false)} className="text-[#D7E2EA]/60 hover:text-white">
              [CLOSE]
            </button>
          </div>

          {/* Terminal Body */}
          <div className="p-6 h-[400px] overflow-y-auto text-[#D7E2EA]">
            {output.map((line, i) => (
              <div key={i} className="mb-2 uppercase">
                {line}
              </div>
            ))}
            <form onSubmit={handleCommand} className="flex mt-4 items-center uppercase">
              <span className="mr-2 text-white">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent outline-none text-[#D7E2EA]"
                autoFocus
              />
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
