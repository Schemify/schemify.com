import type { NextConfig } from "next";

const envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true;

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  images: {
    unoptimized: envImageUnoptimize,
  },
};

export default nextConfig;
