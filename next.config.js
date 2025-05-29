/** @type {import('next').NextConfig} */
const nextConfig = {
  // 開発環境と本番環境の共通設定
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  
  // 開発サーバーの設定
  devIndicators: {
    buildActivity: true,
  },
  
  // すべてのホストからのアクセスを許可
  experimental: {
    // 最新の実験的機能設定
  }
};

nextConfig.images = {
  unoptimized: true,
};
nextConfig.trailingSlash = true;
// 静的出力時にパス設定を修正
nextConfig.assetPrefix = '/';

module.exports = nextConfig;
