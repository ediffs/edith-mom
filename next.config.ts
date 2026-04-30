import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/edith-mom", // not necessary ???
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
