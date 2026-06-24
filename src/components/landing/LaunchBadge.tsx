"use client";

import { motion } from "framer-motion";

export function LaunchBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative z-10 hidden md:flex items-center justify-center gap-4 my-2 shrink-0"
    >
      <div className="h-[1px] w-8 md:w-12 bg-white/30" />
      <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-white/50 uppercase font-light whitespace-nowrap">
        Launching Soon
      </span>
      <div className="h-[1px] w-8 md:w-12 bg-white/30" />
    </motion.div>
  );
}
