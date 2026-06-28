"use client";

import { motion } from "framer-motion";
import { Mic, MicOff, Settings2 } from "lucide-react";
import { useState } from "react";

export default function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div 
        className="glass-panel p-4 rounded-2xl flex items-center gap-4 border border-[#D7E2EA]/10 shadow-2xl bg-[#0C0C0C]/90 backdrop-blur-md"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex flex-col">
          <span className="text-xs text-[#D7E2EA]/60 font-mono uppercase tracking-widest mb-1">AI Assistant</span>
          <span className="text-sm text-white font-medium">
            {isListening ? "Listening..." : "Idle"}
          </span>
        </div>

        <div className="h-8 w-[1px] bg-[#D7E2EA]/10 mx-2" />

        <button 
          onClick={() => setIsListening(!isListening)}
          className={`p-3 rounded-xl transition-all ${
            isListening 
              ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
              : "bg-[#141418] text-[#D7E2EA] hover:bg-white hover:text-black"
          }`}
        >
          {isListening ? <Mic size={20} className="animate-pulse" /> : <MicOff size={20} />}
        </button>

        <button className="p-3 rounded-xl bg-[#141418] text-[#D7E2EA]/60 hover:text-white transition-colors">
          <Settings2 size={20} />
        </button>
      </motion.div>
    </div>
  );
}
