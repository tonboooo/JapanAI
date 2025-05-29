/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // ─────────────────────────────
  // 共通設定
  // ─────────────────────────────
  reactStrictMode: true,
  swcMinify: true,

  // Next.js 13 以降の静的書き出し設定
  output: 'export',
  trailingSlash: true,

  // ─────────────────────────────
  // GitHub Pages 用パス設定
  // （<ユーザー名>.github.io/JapanAI/ で公開するため）
  // ─────────────────────────────
  assetPrefix: isProd ? '/JapanAI/' : '',
  basePath:    isProd ? '/JapanAI'  : '',

  // 画像最適化を無効化（export と相性を良くする）
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
