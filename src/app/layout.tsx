import type { Metadata } from "next";
import { Inter, Michroma } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const michroma = Michroma({ 
  weight: ["400"],
  subsets: ["latin"], 
  variable: "--font-michroma" 
});

export const metadata: Metadata = {
  title: "Iceberg Terminal | Market Intelligence & Research Terminal",
  description:
    "A market intelligence and research terminal designed to help users monitor market developments, discover opportunities, track sector activity, and analyze market data through a unified research experience.",
  keywords: [
    "Iceberg Terminal",
    "market intelligence",
    "research terminal",
    "financial terminal",
    "options flow",
    "sector activity",
    "market data",
    "investment research",
  ],
  authors: [{ name: "Iceberg Terminal" }],
  openGraph: {
    title: "Iceberg Terminal | Market Intelligence & Research Terminal",
    description:
      "A market intelligence and research terminal designed to help users monitor market developments, discover opportunities, track sector activity, and analyze market data through a unified research experience.",
    url: "https://icebergterminal.com",
    siteName: "Iceberg Terminal",
    images: [
      {
        url: "/iceberg_terminal_logo.png",
        width: 800,
        height: 800,
        alt: "Iceberg Terminal Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iceberg Terminal | Market Intelligence & Research Terminal",
    description:
      "A market intelligence and research terminal designed to help users monitor market developments, discover opportunities, track sector activity, and analyze market data through a unified research experience.",
    images: ["/iceberg_terminal_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${michroma.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans">{children}</body>
    </html>
  );
}
