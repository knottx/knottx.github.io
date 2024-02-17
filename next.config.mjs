/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["knottx.github.io"],
  },
};

export default nextConfig;
