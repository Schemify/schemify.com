import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/schemify" : "",
  assetPrefix: isProd ? "/schemify/" : "",
};

export default nextConfig;
