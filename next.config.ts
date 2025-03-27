import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/schemify.com" : "",
  assetPrefix: isProd ? "/schemify.com/" : "",
  images: {
    loader: "custom",
    path: isProd ? "/schemify.com/" : "/",
  },
};

export default nextConfig;
