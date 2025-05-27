/** @type {import('next').NextConfig} */
const nextConfig = {
  // 開発環境と本番環境の共通設定
  reactStrictMode: true,
  swcMinify: true,
  
  // 開発サーバーの設定
  devIndicators: {
    buildActivity: true,
  }
};

// 本番環境の場合のみ静的エクスポート設定を適用
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
  nextConfig.images = {
    unoptimized: true,
  };
  nextConfig.trailingSlash = true;
  
  // 静的出力時にパス設定を修正
  nextConfig.assetPrefix = './';
}

module.exports = nextConfig;
