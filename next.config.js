/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app', 'src'],
  },
  images: {
    domains: ['cdn.pixabay.com', 'static.wixstatic.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
