"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function LiveClock() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setMounted(true);
    // Set initial time
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3 px-4 py-2 rounded-full 
                 bg-white/[0.03] backdrop-blur-2xl 
                 border border-white/10 
                 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_8px_32px_rgba(0,0,0,0.5)]"
    >
      {/* Blinking Live Dot */}
      <div className="relative flex items-center justify-center w-2 h-2">
        <div className="absolute w-full h-full bg-green-500 rounded-full animate-ping opacity-75"></div>
        <div className="relative w-1.5 h-1.5 bg-green-400 rounded-full"></div>
      </div>

      <span className="text-[10px] md:text-xs font-medium text-white/90 tracking-widest uppercase">
        Live: <span className="font-mono tabular-nums text-white ml-1">{time}</span>
      </span>
    </motion.div>
  );
}
