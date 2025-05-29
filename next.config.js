/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProd ? '/JapanAI/' : '',
  basePath: isProd ? '/JapanAI' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
