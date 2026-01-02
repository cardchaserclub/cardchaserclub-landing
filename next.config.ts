import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Dev-only: allow loading the dev server from other devices on your LAN
  allowedDevOrigins: ["*"],
};

export default nextConfig;

