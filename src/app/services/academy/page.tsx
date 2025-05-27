import { Metadata } from 'next';
import { BookOpen, Palette, Lightbulb, Compass, Users } from 'lucide-react';
import AcademyServiceClient from '@/components/academy-service-client';

export const metadata: Metadata = {
  title: 'アカデミーサービス - 株式会社JapanAI',
  description: '日本の伝統とテクノロジーを学ぶ場を提供。職人の技とデジタル技術を融合させ、新しい表現方法や商品開発を支援します。',
};

// プログラム情報
const programs = [
  {
    icon: <BookOpen className="h-10 w-10 text-accent" />,
    title: 'デジタル和紙ワークショップ',
    description: '伝統的な和紙づくりの技法とデジタルデザインを融合させるワークショップ。職人から和紙の歴史や製法を学び、デジタルツールで現代的な表現を探求します。',
    details: [
      '和紙の歴史と文化的背景',
      '伝統的な和紙製造技法の実演と体験',
      'デジタルスキャニングと質感再現技術',
      'デジタル和紙テクスチャを活用したデザイン実習',
      '最終作品の制作とプレゼンテーション',
    ],
    duration: '2日間',
    level: '初級〜中級',
  },
  {
    icon: <Palette className="h-10 w-10 text-accent" />,
    title: '日本の色彩とWebデザイン',
    description: '伝統的な日本の色彩感覚を現代のWebデザインに取り入れる講座。日本の伝統色の歴史や意味を学び、Webサイトやアプリのデザインに活かす方法を習得します。',
    details: [
      '日本の伝統色の体系と歴史',
      '色彩心理学と文化的コンテキスト',
      'カラーパレット設計とブランディング',
      'レスポンシブデザインにおける色彩の活用',
      'アクセシビリティを考慮した色彩設計',
    ],
    duration: '1日間',
    level: '全レベル対応',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: 'AIと伝統工芸の共創プロジェクト',
    description: '伝統工芸職人とAIエンジニアが協働する革新的なプロジェクト。AIを活用して伝統技術を解析し、新しいデザインや製品開発の可能性を探ります。',
    details: [
      '伝統工芸の技術分析とデジタル化',
      'AIによるパターン認識と生成モデル',
      '職人技術とAIの協働ワークフロー',
      'プロトタイピングと製品開発',
      '市場展開と持続可能なビジネスモデル',
    ],
    duration: '3ヶ月間（週1回）',
    level: '中級〜上級',
  },
  {
    icon: <Compass className="h-10 w-10 text-accent" />,
    title: 'デジタル時代の日本文化ガイド養成講座',
    description: '観光や文化紹介の現場で活躍する日本文化ガイドのためのデジタルスキル習得講座。最新技術を活用して日本文化の魅力を効果的に伝える方法を学びます。',
    details: [
      'デジタルストーリーテリングの技法',
      'AR/VRを活用した文化体験の設計',
      'SNSとデジタルメディアの効果的活用',
      'オンラインツアーの企画と実施',
      'データ分析による体験の最適化',
    ],
    duration: '5週間（週1回）',
    level: '全レベル対応',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: '子ども向け伝統×テクノロジー教室',
    description: '次世代を担う子どもたちに日本の伝統文化とテクノロジーの融合を体験してもらう教室。遊びながら学べる参加型プログラムで創造性を育みます。',
    details: [
      '伝統的な遊びとデジタルゲームの融合',
      '簡単なプログラミングで伝統模様の生成',
      'デジタル工作と伝統的な手仕事の組み合わせ',
      'ストーリーテリングとアニメーション制作',
      'チームプロジェクトと発表会',
    ],
    duration: '半日（定期開催）',
    level: '子ども（8〜15歳）',
  },
];

// アニメーション設定
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AcademyServicePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* クライアントコンポーネントでアカデミーサービスの詳細を表示 */}
      <AcademyServiceClient programs={programs} />








    </div>
  );
}
