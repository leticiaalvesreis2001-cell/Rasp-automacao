import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Rasp-automacao",
  assetPrefix: "/Rasp-automacao/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
