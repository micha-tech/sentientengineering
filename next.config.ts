import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    qualities: [70, 75],
  },
  async headers() {
    const immutableMediaHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      {
        source: "/videos/sentient-hero-optimized.mp4",
        headers: immutableMediaHeaders,
      },
      {
        source: "/images/sentient-hero-poster.webp",
        headers: immutableMediaHeaders,
      },
    ];
  },
};

export default nextConfig;
