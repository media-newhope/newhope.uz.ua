import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  basePath: "/newhope.uz.ua",
  images: {
    unoptimized: true,
  },
  assetPrefix: "/newhope.uz.ua",
};

export default nextConfig;
