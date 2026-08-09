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
      },
      {
        protocol: 'https',
        hostname: 'assets.codepen.io',
        port: '',
        pathname: '/**',
      },
     {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ]
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
