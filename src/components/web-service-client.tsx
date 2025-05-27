'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Palette, Globe, Code, Users } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

// サービスの特徴
const features = [
  {
    icon: <Palette className="h-10 w-10 text-accent" />,
    title: '伝統美と現代デザインの融合',
    description: '日本の伝統色や和紙の質感を取り入れながら、モダンでユーザーフレンドリーなデザインを提供します。伝統と革新が調和した、唯一無二のWebサイトを制作します。',
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: '高速・高パフォーマンス',
    description: '最新のWeb技術を駆使し、美しさと速さを両立したサイトを構築します。ページ読み込み速度の最適化、モバイルレスポンシブ対応など、ユーザー体験を最大化します。',
  },
  {
    icon: <Globe className="h-10 w-10 text-accent" />,
    title: 'グローバル対応',
    description: '多言語対応、文化的配慮を含めたデザイン、国際SEO対策など、世界中のユーザーにアプローチできるサイトを制作します。日本文化を世界に発信するお手伝いをします。',
  },
  {
    icon: <Code className="h-10 w-10 text-accent" />,
    title: 'カスタム開発',
    description: 'テンプレートに頼らない、お客様のビジョンに合わせたカスタム開発を行います。独自のCMS構築、APIインテグレーション、カスタム機能の実装など、柔軟に対応します。',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'ユーザー中心設計',
    description: 'ターゲットユーザーの行動分析、ユーザビリティテスト、アクセシビリティ対応など、ユーザー中心の設計アプローチで、使いやすさと満足度を追求します。',
  },
];

// 制作実績（プレースホルダー）
const projects = [
  {
    title: '伝統工芸品ECサイト',
    description: '全国の伝統工芸品を販売するECサイト。和紙の質感を再現したデザインと、商品の魅力を引き立てるビジュアル表現が特徴です。',
    imagePlaceholder: 'bg-gradient-to-br from-washi-300 to-kisui-400',
  },
  {
    title: '旅館ブランドサイト',
    description: '老舗旅館のブランドサイト。日本の四季と旅館の歴史を表現した、情緒豊かなデザインが特徴です。予約システムとの連携も実装しました。',
    imagePlaceholder: 'bg-gradient-to-br from-kisui-300 to-washi-400',
  },
  {
    title: '日本茶専門店',
    description: '日本茶専門店のECサイト。茶葉の色合いや質感を大切にした、上品で落ち着きのあるデザインです。茶葉の選び方ガイドなど、コンテンツも充実しています。',
    imagePlaceholder: 'bg-gradient-to-br from-washi-200 to-kisui-300',
  },
];

// プラン詳細
const plans = [
  {
    name: 'スタンダードプラン',
    price: '350,000円〜',
    description: 'ブランドサイトや小規模コーポレートサイトに最適なプランです。',
    features: [
      'レスポンシブデザイン',
      '5〜10ページ構成',
      'お問い合わせフォーム',
      'SEO基本対策',
      'SNS連携',
    ],
    recommended: false,
  },
  {
    name: 'プレミアムプラン',
    price: '650,000円〜',
    description: '中規模サイトやブランディングを重視したサイトに最適なプランです。',
    features: [
      'カスタムデザイン',
      '10〜20ページ構成',
      'CMS実装',
      '多言語対応（2言語）',
      'アクセス解析設定',
      'コンテンツ制作サポート',
    ],
    recommended: true,
  },
  {
    name: 'エンタープライズプラン',
    price: '1,200,000円〜',
    description: '大規模サイトやECサイト、特殊機能が必要なサイトに最適なプランです。',
    features: [
      'フルカスタム開発',
      '無制限ページ構成',
      'カスタムCMS/機能開発',
      '多言語対応（3言語以上）',
      'API連携',
      'パフォーマンス最適化',
      '保守・運用サポート',
    ],
    recommended: false,
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

export default function WebServiceClient() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* ヒーローセクション */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            日本の美意識を<span className="text-accent">現代のWeb</span>に
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            伝統と革新が調和した、唯一無二のWebサイトを制作します。
            和紙の質感、日本の色彩感覚を大切にしながら、最新のWeb技術で表現します。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href={ROUTES.CONTACT.path}>
              <Button size="lg">
                お問い合わせ <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#plans">
              <Button size="lg" variant="outline">料金プラン</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 特徴セクション */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">サービスの特徴</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            日本の伝統美と最新のWeb技術を融合させた、他にはないサービスを提供します。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-md border border-border"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 制作実績セクション */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">制作実績</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            これまでに手がけた、日本の美意識を大切にしたWebサイトの一部をご紹介します。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-lg overflow-hidden shadow-md border border-border"
            >
              <div className={`h-48 ${project.imagePlaceholder}`} />
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 料金プランセクション */}
      <section id="plans" className="mb-20 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">料金プラン</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            お客様のニーズに合わせた、柔軟な料金プランをご用意しています。
            すべてのプランにはデザイン、コーディング、レスポンシブ対応が含まれます。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-card rounded-lg p-6 shadow-md border ${
                plan.recommended ? 'border-accent ring-2 ring-accent' : 'border-border'
              } relative`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  おすすめ
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-accent mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={ROUTES.CONTACT.path}>
                <Button className="w-full">お問い合わせ</Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* お問い合わせセクション */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-lg shadow-lg p-8 border border-border text-center"
        >
          <h2 className="text-3xl font-bold mb-4">プロジェクトについてご相談ください</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            お客様のビジョンを実現するための最適な提案をいたします。
            まずはお気軽にお問い合わせください。
          </p>
          <Link href={ROUTES.CONTACT.path}>
            <Button size="lg">
              お問い合わせ <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
