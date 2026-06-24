export interface FeatureSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  isIntro?: boolean;
}

export const FEATURES: FeatureSlide[] = [
  {
    id: "what-is-iceberg",
    title: "WHAT IS ICEBERG TERMINAL?",
    description:
      "A market intelligence and research platform built to monitor markets, track developments, analyze data, and support research workflows.",
    image: "",
    isIntro: true,
  },
  {
    id: "sector-pulse",
    title: "SECTOR PULSE",
    description:
      "Track sector momentum, capital rotation,\nand market leadership in real time.",
    image: "/feature-2.png",
  },
  {
    id: "options-flow",
    title: "OPTIONS FLOW",
    description:
      "Monitor IV, PCR, Max Pain,\nand evolving options sentiment.",
    image: "/feature-3.png",
  },
  {
    id: "voice-os",
    title: "VOICE OPERATING SYSTEM",
    description:
      "Navigate the terminal with voice.\nOperate at the speed of thought.",
    image: "/feature-4.png",
  },
];

