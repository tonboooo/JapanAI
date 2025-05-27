import { Metadata } from 'next';
import AgentServiceClient from '@/components/agent-service-client';
import { Database, Globe, MessageSquare, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AIエージェントサービス - 株式会社JapanAI',
  description: '日本文化に精通したAIエージェントの開発。伝統工芸の知識や日本の作法、歴史を理解し、外国人観光客や日本文化愛好家をサポートします。',
};

// サービスの特徴
const features = [
  {
    icon: <Database className="h-10 w-10 text-accent" />,
    title: '日本文化に特化した知識ベース',
    description: '伝統工芸、歴史、作法、観光名所など、日本文化に関する豊富な知識を持つAIエージェントを開発します。専門家の監修による正確な情報を提供します。',
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: '多言語対応',
    description: '日本語はもちろん、英語、中国語、フランス語など、多言語に対応したAIエージェントを開発。言語の壁を越えて、日本文化の魅力を世界に発信します。',
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-accent" />,
    title: 'カスタマイズ可能なインターフェース',
    description: 'チャットボット、音声アシスタント、キャラクターベースのアバターなど、用途に合わせた多様なインターフェースを提供。ブランドイメージに合わせたカスタマイズも可能です。',
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: 'APIとの連携',
    description: '予約システム、ECサイト、観光情報データベースなど、様々なAPIと連携し、単なる情報提供だけでなく、実用的なサービスを提供するAIエージェントを実現します。',
  },
  {
    icon: <Shield className="h-10 w-10 text-accent" />,
    title: 'プライバシーとセキュリティ',
    description: 'ユーザーデータの保護を最優先に考えた設計。GDPR準拠のデータ管理と、最新のセキュリティ対策を施したAIエージェントを提供します。',
  },
];

// 導入事例（プレースホルダー）
const caseStudies = [
  {
    title: '多言語観光案内AIアシスタント',
    description: '京都の観光名所に導入された多言語対応のAIアシスタント。歴史的背景や文化的意義を詳しく説明し、外国人観光客の満足度向上に貢献しています。',
    imagePlaceholder: 'bg-gradient-to-br from-kisui-300 to-kisui-500',
  },
  {
    title: '伝統工芸品ECサイトのカスタマーサポートAI',
    description: '伝統工芸品を扱うECサイトに導入されたカスタマーサポートAI。商品の製法や歴史、使い方のアドバイスなど、専門的な質問に24時間対応しています。',
    imagePlaceholder: 'bg-gradient-to-br from-kisui-400 to-washi-300',
  },
  {
    title: '日本文化学習アプリのAIチューター',
    description: '日本語や日本文化を学ぶ外国人向けアプリに導入されたAIチューター。ユーザーのレベルに合わせた学習コンテンツの提案や、会話練習のパートナーとして活躍しています。',
    imagePlaceholder: 'bg-gradient-to-br from-washi-400 to-kisui-300',
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

export default function AgentServicePage() {
  // サービスの特徴
  const features = [
    {
      icon: <Database className="h-10 w-10 text-accent" />,
      title: '日本文化に特化した知識ベース',
      description: '伝統工芸、歴史、作法、観光名所など、日本文化に関する豊富な知識を持つAIエージェントを開発します。専門家の監修による正確な情報を提供します。',
    },
    {
      icon: <Globe className="h-10 w-10 text-accent" />,
      title: '多言語対応',
      description: '日本語はもちろん、英語、中国語、フランス語など、多言語に対応したAIエージェントを開発。言語の壁を越えて、日本文化の魅力を世界に発信します。',
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-accent" />,
      title: 'カスタマイズ可能なインターフェース',
      description: 'チャットボット、音声アシスタント、キャラクターベースのアバターなど、用途に合わせた多様なインターフェースを提供。ブランドイメージに合わせたカスタマイズも可能です。',
    },
    {
      icon: <Zap className="h-10 w-10 text-accent" />,
      title: 'APIとの連携',
      description: '予約システム、ECサイト、観光情報データベースなど、様々なAPIと連携し、単なる情報提供だけでなく、実用的なサービスを提供するAIエージェントを実現します。',
    },
    {
      icon: <Shield className="h-10 w-10 text-accent" />,
      title: 'プライバシーとセキュリティ',
      description: 'ユーザーデータの保護を最優先に考えた設計。GDPR準拠のデータ管理と、最新のセキュリティ対策を施したAIエージェントを提供します。',
    },
  ];

  // 導入事例（プレースホルダー）
  const caseStudies = [
    {
      title: '多言語観光案内AIアシスタント',
      description: '京都の観光名所に導入された多言語対応のAIアシスタント。歴史的背景や文化的意義を詳しく説明し、外国人観光客の満足度向上に貢献しています。',
      imagePlaceholder: 'bg-gradient-to-br from-kisui-300 to-kisui-500',
    },
    {
      title: '伝統工芸品ECサイトのカスタマーサポートAI',
      description: '伝統工芸品を扱うECサイトに導入されたカスタマーサポートAI。商品の製法や歴史、使い方のアドバイスなど、専門的な質問に24時間対応しています。',
      imagePlaceholder: 'bg-gradient-to-br from-kisui-400 to-washi-300',
    },
    {
      title: '日本文化学習アプリのAIチューター',
      description: '日本語や日本文化を学ぶ外国人向けアプリに導入されたAIチューター。ユーザーのレベルに合わせた学習コンテンツの提案や、会話練習のパートナーとして活躍しています。',
      imagePlaceholder: 'bg-gradient-to-br from-washi-400 to-kisui-300',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* クライアントコンポーネントでAIエージェントサービスの詳細を表示 */}
      <AgentServiceClient features={features} caseStudies={caseStudies} />
    </div>
  );
}
