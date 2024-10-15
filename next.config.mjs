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
};

export default nextConfig;
