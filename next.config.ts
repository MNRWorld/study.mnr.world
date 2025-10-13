import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "raw.githubusercontent.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/ac",
        destination: "/calendar",
        permanent: true,
      },
      {
        source: "/qb",
        destination: "/question-bank",
        permanent: true,
      },
    ];
  },
  compiler: {
    browserslist: ">= 0.5%, not dead",
  },
};

export default nextConfig;
