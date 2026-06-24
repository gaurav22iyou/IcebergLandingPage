"use client";

import { useCallback, useRef, useEffect } from "react";

export function useClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload the audio file when the component mounts
    audioRef.current = new Audio("/audley_fergine-ui-button-click-5-327756.mp3");
  }, []);

  const playClick = useCallback(() => {
    if (audioRef.current) {
      // Reset the audio to the beginning in case it's clicked rapidly
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        // Silently fail if autoplay is blocked or file is missing
        console.warn("Failed to play click sound:", err);
      });
    }
  }, []);

  return playClick;
}

