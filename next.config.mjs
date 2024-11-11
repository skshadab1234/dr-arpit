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
    images: {
      domains: ['backend.drarpitbansal.in'], // Add your image source domain here
    },
  };
  
  export default nextConfig;
  