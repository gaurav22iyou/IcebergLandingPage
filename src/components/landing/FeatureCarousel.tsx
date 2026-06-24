"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FEATURES } from "@/data/features";
import Image from "next/image";
import { useCarouselClickSound } from "@/lib/useCarouselClickSound";

export function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const playClick = useCarouselClickSound();

  useEffect(() => {
    const delay = FEATURES[currentIndex].isIntro ? 7000 : 4000;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURES.length);
    }, delay);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handleNext = () => {
    playClick();
    setCurrentIndex((prev) => (prev + 1) % FEATURES.length);
  };

  const handlePrev = () => {
    playClick();
    setCurrentIndex((prev) => (prev - 1 + FEATURES.length) % FEATURES.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="absolute bottom-20 md:bottom-28 z-10 flex flex-col items-center w-full max-w-[500px] sm:max-w-[600px] mx-auto px-4 shrink-0"
    >
      <div className="flex items-center gap-3 w-full">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="p-1.5 text-white/30 hover:text-white transition-colors block rounded-full hover:bg-white/5"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel Container */}
        <div className="flex-1 h-[150px] md:h-auto md:min-h-[100px] py-3 rounded-2xl glass-panel relative overflow-hidden flex flex-col items-center justify-center gap-1 md:justify-between md:gap-0 border border-white/5 bg-white/[0.02] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
          <div className="md:flex-1 flex flex-col items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center px-6 w-full"
              >
                <h3 className="text-[11px] md:text-xs tracking-[0.2em] font-medium text-white mb-1">
                  {FEATURES[currentIndex].title}
                </h3>
                <p className={`text-[10px] md:text-[11px] text-white/50 tracking-wide ${FEATURES[currentIndex].isIntro ? "md:line-clamp-none" : "line-clamp-1"}`}>
                  {FEATURES[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <AnimatePresence mode="wait">
            {!FEATURES[currentIndex].isIntro && (
              <motion.p
                key="disclaimer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-[8px] md:text-[9px] text-white/40 tracking-wider font-light mt-1 px-4 text-center uppercase"
              >
                Disclaimer: For informational purposes only. Not investment advice. No buy/sell recommendations.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="p-1.5 text-white/30 hover:text-white transition-colors block rounded-full hover:bg-white/5"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-1.5 mt-4">
        {FEATURES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              playClick();
              setCurrentIndex(index);
            }}
            className={`w-1 h-1 rounded-full transition-all duration-500 ease-out ${index === currentIndex
                ? "bg-white w-4 opacity-100"
                : "bg-white/20 hover:bg-white/40 opacity-50"
              }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
