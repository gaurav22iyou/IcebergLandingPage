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

const SITE_URL = "https://icebergterminal.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Iceberg Terminal | Market Intelligence & Research Terminal",
    template: "%s | Iceberg Terminal",
  },
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
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Iceberg Terminal | Market Intelligence & Research Terminal",
    description:
      "A market intelligence and research terminal designed to help users monitor market developments, discover opportunities, track sector activity, and analyze market data through a unified research experience.",
    url: SITE_URL,
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Iceberg Terminal",
      url: SITE_URL,
      logo: `${SITE_URL}/iceberg_terminal_logo.png`,
      sameAs: [
        "https://x.com/icebergterminal",
        "https://instagram.com/icebergterminal.in",
      ],
    },
    {
      "@type": "WebSite",
      name: "Iceberg Terminal",
      url: SITE_URL,
    },
  ],
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
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
