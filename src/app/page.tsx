"use client";

import { BackgroundGlow } from "@/components/landing/BackgroundGlow";
import { Hero } from "@/components/landing/Hero";
import { LaunchBadge } from "@/components/landing/LaunchBadge";
import { FeatureCarousel } from "@/components/landing/FeatureCarousel";
import { SocialLinks } from "@/components/landing/SocialLinks";
import dynamic from "next/dynamic";

const LiveClock = dynamic(
  () => import("@/components/landing/LiveClock").then((mod) => mod.LiveClock),
  { ssr: false }
);
export default function Home() {
  return (
    <main className="relative w-full h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-black gap-4 sm:gap-6 md:gap-8 px-4">
      <BackgroundGlow />
      
      {/* Top Left Logo Area */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 z-10">
        <span className="text-[9px] md:text-[10px] tracking-[0.5em] text-white uppercase font-light">
          ICEBERG<span className="hidden sm:inline"> TERMINAL</span>
        </span>
      </div>

      {/* Top Right Live Clock */}
      <div className="absolute top-4 right-6 md:top-6 md:right-8 z-10">
        <LiveClock />
      </div>

      <Hero />
      <LaunchBadge />
      <FeatureCarousel />
      <SocialLinks />
    </main>
  );
}
