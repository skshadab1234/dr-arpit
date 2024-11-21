/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND: process.env.BACKEND,
    BACKEND2: process.env.BACKEND2,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  // images: {
  //   domains: ['backend.drarpitbansal.in','scontent-waw2-1.cdninstagram.com'], // Add your image source domain here
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
