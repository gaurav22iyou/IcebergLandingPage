import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iceberg Terminal",
    short_name: "Iceberg",
    description:
      "A market intelligence and research terminal designed to help users monitor market developments, discover opportunities, track sector activity, and analyze market data through a unified research experience.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/iceberg_terminal_logo.png",
        sizes: "800x800",
        type: "image/png",
      },
    ],
  };
}
