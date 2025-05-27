'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Calendar, Users, Mail } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';

// 会社情報
const companyInfo = [
  { label: '会社名', value: '株式会社JapanAI' },
  { label: '設立', value: '【未定】（2025年8月26日登記予定）' },
  { label: '代表取締役', value: '大塚懸生' },
  { label: '資本金', value: '【未定】' },
  { label: '所在地', value: '【未定】' },
  { label: '事業内容', value: 'Web制作、AIエージェント開発、教育事業' },
  { label: '従業員数', value: '【未定】' },
  { label: '取引銀行', value: '【未定】' },
];

// 企業沿革
const history = [
  { year: '【予定】', event: '株式会社JapanAI設立（2025年8月26日登記予定）' },
];

// アニメーション設定
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutClient() {
  return (
    <div className="container mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      {/* ヒーローセクション */}
      <section className="mb-20 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-foreground" data-component-name="AboutClient">
            私たちについて
          </h1>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-12"></div>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-muted-foreground">
            遊び心と日本の伝統が融合した、新しい体験を提供する企業です。
          </p>
        </motion.div>
      </section>

      {/* 代表メッセージセクション */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">代表メッセージ</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                私たちJapanAIは、日本の伝統美と最新のテクノロジーを融合させることで、
                新しい価値を創造することを目指しています。
              </p>
              <p>
                古来より受け継がれてきた日本の美意識や技術は、現代のデジタル社会においても
                大きな可能性を秘めています。和紙の繊細な質感、藍染めの深い色合い、
                障子に映る光と影の対比など、日本の伝統的な美の要素は、
                デジタルデザインやユーザー体験に新たな息吹を吹き込むことができると信じています。
              </p>
              <p>
                私たちは、テクノロジーの力で日本の伝統を未来に繋ぎ、
                世界中の人々に新しい体験を提供していきます。
              </p>
              <div className="mt-6">
                <p className="font-semibold">大塚懸生</p>
                <p className="text-sm text-muted-foreground">代表取締役</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-washi-300 to-kisui-400 flex items-center justify-center">
              <span className="text-white/70 text-sm">代表取締役の写真</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 会社情報セクション */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">会社情報</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            株式会社JapanAIの基本情報です。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-card rounded-lg shadow-md border border-border p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-border"
              >
                <div className="w-full sm:w-1/3 font-medium text-foreground">{item.label}</div>
                <div className="w-full sm:w-2/3 text-muted-foreground">{item.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              <span>東京都千代田区千代田1-1 JapanAIビル</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Mail className="h-5 w-5 mr-2" />
              <span>info@japanai.co.jp</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 企業沿革セクション */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">企業沿革</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            設立からの歩みをご紹介します。
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-accent pl-8 ml-4 space-y-8">
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-10 mt-1.5 h-4 w-4 rounded-full bg-accent"></div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <div className="text-accent font-medium mb-1 sm:mb-0 sm:w-1/4">{item.year}</div>
                  <div className="sm:w-3/4">{item.event}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
          <h2 className="text-3xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            当社へのお問い合わせやご質問は、下記のフォームからお気軽にどうぞ。
          </p>
          <Link href={ROUTES.CONTACT.path}>
            <Button size="lg">
              お問い合わせフォーム <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
