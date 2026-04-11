import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "http://localhost:3000/",
        port: "",
        pathname: "public/image/**"
      }
    ]
  }
};

export default nextConfig;
