"use client";

import { useCallback, useRef, useEffect } from "react";

export function useLogoClickSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload the audio file when the component mounts
    audioRef.current = new Audio("/alexzavesa-calm-inspiring-technology-logo-short-version-518993.mp3");
  }, []);

  const playClick = useCallback(() => {
    if (audioRef.current) {
      // Reset the audio to the beginning in case it's clicked rapidly
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        // Silently fail if autoplay is blocked or file is missing
        console.warn("Failed to play logo click sound:", err);
      });
    }
  }, []);

  return playClick;
}
