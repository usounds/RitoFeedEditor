import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost:3000", "localhost:3001", "192.168.1.120"]
};

export default nextConfig;
