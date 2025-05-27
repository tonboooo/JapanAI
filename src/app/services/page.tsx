import { Metadata } from 'next';
import { ROUTES } from '@/lib/routes';
import ServicesClient from '@/components/services-client';

export const metadata: Metadata = {
  title: 'サービス一覧 - 株式会社JapanAI',
  description: '遊び心と日本の伝統が融合した、JapanAIのサービスラインナップをご紹介します。Web制作、AIエージェント、アカデミーの3つの柱で、新しい体験を提供します。',
};

// サービス詳細情報
const services = [
  {
    id: 'web',
    title: 'Web制作',
    description: '日本の伝統美を現代のデザインに取り入れた、唯一無二のWebサイトを制作します。和紙の質感、日本の色彩感覚を大切にしながら、最新のWeb技術で表現します。',
    features: [
      '伝統色を活かしたブランディングデザイン',
      '和紙質感を再現したテクスチャ表現',
      'モバイルファーストのレスポンシブデザイン',
      'アクセシビリティに配慮したUI/UX設計',
      'SEO対策とパフォーマンス最適化',
    ],
    icon: '🎨',
    path: ROUTES.SERVICES.children?.WEB.path || '/services/web',
    color: 'from-washi-300 to-washi-500',
  },
  {
    id: 'agent',
    title: 'AIエージェント',
    description: '日本文化に精通したAIエージェントの開発。伝統工芸の知識や日本の作法、歴史を理解し、外国人観光客や日本文化愛好家をサポートします。',
    features: [
      '日本文化・伝統に特化した知識ベース',
      '多言語対応（日本語・英語・中国語など）',
      'チャットボットやバーチャルアシスタント開発',
      'APIとの連携による拡張機能',
      'プライバシーとセキュリティに配慮した設計',
    ],
    icon: '🤖',
    path: ROUTES.SERVICES.children?.AGENT.path || '/services/agent',
    color: 'from-kisui-300 to-kisui-500',
  },
  {
    id: 'academy',
    title: 'アカデミー',
    description: 'バイブコーディングをメインに、非エンジニアでもAIを活用したプログラミング手法を学べる場を提供。日本の「守破離」の精神で、技術と創造性を共に育む環境です。',
    features: [
      'AIを活用した直感的なコーディング手法の習得',
      '非エンジニアのためのバイブコーディング実践講座',
      'プロンプトエンジニアリングとAIツール活用法',
      '実務に即したプロジェクト型学習方式',
      'オンライン・オフラインのハイブリッドコミュニティ',
    ],
    icon: '🎓',
    path: ROUTES.SERVICES.children?.ACADEMY.path || '/services/academy',
    color: 'from-washi-400 to-kisui-400',
  },
];



export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* ヘッダーセクション */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              サービス
            </h1>
            <p className="text-xl text-foreground/80">
              遊び心と日本の伝統が融合した、JapanAIのサービスラインナップをご紹介します。
              Web制作、AIエージェント、アカデミーの3つの柱で、新しい体験を提供します。
            </p>
          </div>
        </div>
      </section>

      {/* クライアントコンポーネントでサービス詳細を表示 */}
      <ServicesClient services={services} />
    </div>
  );
}
