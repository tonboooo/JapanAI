import type { Metadata } from 'next';
import { Noto_Serif_JP, Playfair_Display, Cormorant } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/shodo.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

// フォント設定
const notoSerifJP = Noto_Serif_JP({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-jp',
});

// 高級感のある見出し用フォント
const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

// 高級ホテル風のサブ見出し用フォント
const cormorant = Cormorant({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
});

// メタデータ設定
export const metadata: Metadata = {
  title: '株式会社JapanAI - 遊び心×日本の伝統',
  description: '遊び心と日本の伝統が融合した、新しい体験を提供する株式会社JapanAI。常識を革新するサービスを展開しています。',
  keywords: 'JapanAI, Web制作, AIエージェント, アカデミー, 日本の伝統, 遊び心',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* クリティカルCSS確認スクリプト */}
        <script dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              if(![...document.styleSheets].length)
                console.error('🔥 CSS not loaded');
            }, 500);
          `
        }} />
        
        {/* 書道風フォントとスタイル */}
        <link rel="stylesheet" href="/fonts/shodo.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700;800&display=swap" />
      </head>
      <body className={`${notoSerifJP.variable} ${playfairDisplay.variable} ${cormorant.variable} min-h-screen flex flex-col`}>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* NoScript フォールバック */}
        <noscript>
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">JavaScriptが無効です</h2>
              <p className="mb-4">このサイトの機能を最大限に活用するには、JavaScriptを有効にしてください。</p>
              <div className="flex flex-col space-y-2">
                <a href="/" className="btn-primary text-center">ホームに戻る</a>
                <a href="/contact" className="btn-secondary text-center">お問い合わせ</a>
              </div>
            </div>
          </div>
        </noscript>
        
        {/* 自己診断QA */}
        <script dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
              // ボタンエフェクト初期化
              if (typeof window.initButtonEffects === 'function') {
                window.initButtonEffects();
              }
              
              const diagnostics = {
                css_loaded: [...document.styleSheets].length > 0 ? '✅' : '❌',
                all_links_ok: document.querySelectorAll('a[href="#"], a:not([href])').length === 0 ? '✅' : '❌',
                theme_support: document.documentElement.hasAttribute('data-theme') ? '✅' : '❌',
                accessibility: document.querySelector('.skip-link') ? '✅' : '❌',
                responsive: window.matchMedia('(min-width: 768px)').media !== 'not all' ? '✅' : '❌',
                button_effects: typeof window.initButtonEffects === 'function' ? '✅' : '❌',
              };
              console.log(JSON.stringify(diagnostics, null, 2));
            });
          `
        }} />
        
        {/* ボタンエフェクトスクリプト読み込み */}
        <script src="/scripts/button-effects.js" defer></script>
      </body>
    </html>
  );
}
