import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cv-noc-react', 
  assetPrefix: '/cv-noc-react',
  images: {
    unoptimized: true, 
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;