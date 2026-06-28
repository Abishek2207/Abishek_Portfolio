"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioManager() {
  const [isMuted, setIsMuted] = useState(false);
  const howlRef = useRef<any>(null);

  useEffect(() => {
    import("howler").then(({ Howl }) => {
      howlRef.current = new Howl({
        // A very moody, deep space ambient track fitting the cinematic vibe
        src: ["https://cdn.pixabay.com/download/audio/2022/11/22/audio_78112fb9fb.mp3"],
        loop: true,
        volume: 0.4,
        html5: true,
        autoplay: true,
      });
    });

    return () => {
      howlRef.current?.unload();
    };
  }, []);

  const toggleMute = () => {
    if (!howlRef.current) return;
    if (isMuted) {
      howlRef.current.volume(0.4);
      setIsMuted(false);
    } else {
      howlRef.current.volume(0);
      setIsMuted(true);
    }
  };

  return (
    <button
      onClick={toggleMute}
      className="fixed top-8 right-8 z-50 p-4 rounded-full bg-black/50 border border-[#00f0ff]/20 text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:shadow-[0_0_15px_#00f0ff50] transition-all backdrop-blur-md"
    >
      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
    </button>
  );
}
