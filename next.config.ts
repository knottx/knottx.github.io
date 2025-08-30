import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Inline the (small) stylesheet into the HTML so text can render without
  // waiting for a separate CSS request — speeds up FCP/LCP.
  experimental: { inlineCss: true },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "knottx.dev",
      },
    ],
  },
};

export default nextConfig;
