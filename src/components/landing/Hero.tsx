"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { useLogoClickSound } from "@/lib/useLogoClickSound";

export function Hero() {
  const playClick = useLogoClickSound();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex w-full flex-col items-center justify-center text-center"
    >
      <div 
        className="relative z-10 w-[95vw] md:w-[85vw] h-[25vh] flex items-center justify-center shrink animate-pulse cursor-pointer"
        onClick={playClick}
      >
        <Image
          src="/new_logo.svg"
          alt="Iceberg Terminal Logo"
          fill
          className="object-cover drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-[1.3] md:scale-[1.4]"
          priority
        />
      </div>
    </motion.div>
  );
}
