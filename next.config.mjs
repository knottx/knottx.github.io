/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["localhost", "knottx.github.io"],
    loader: "custom",
    unoptimized: true,
  },
};

export default nextConfig;
