import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

import { ROUTES } from '@/lib/routes';
import { Button } from '@/components/ui/button';
import PhilosophySection from '@/components/philosophy-section';

// 一時的にインポートをコメントアウト
// const ManifestoSection = dynamic(() => import('@/components/manifesto-section'), { ssr: true });

export const metadata: Metadata = {
  title: '私たちの哲学 | JapanAI',
  description: '古来の知恵と現代の革新が交わる「間（ま）」に生まれる永遠の価値。一即多、一期一会、侯び寿、和の精神、守破離―日本の知恵を現代に活かすJapanAIの哲学をご紹介します。',
  openGraph: {
    title: '私たちの哲学 | JapanAI',
    description: '古来の知恵と現代の革新が交わる「間（ま）」に生まれる永遠の価値。一即多、一期一会、侯び寿、和の精神、守破離―日本の知恵を現代に活かすJapanAIの哲学をご紹介します。',
    url: 'https://www.japanai.jp/philosophy',
    siteName: 'JapanAI',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function PhilosophyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* ヘッダーセクション */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background to-secondary opacity-50"></div>
        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              私たちの哲学
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-8">
              古来の知恵と現代の活力が交わる「間（ま）」に生まれる、永遠の価値へ
            </p>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-12"></div>
          </div>
        </div>
      </section>

      {/* 哲学セクション */}
      <PhilosophySection />

      {/* マニフェストセクション（一時的に非表示） */}
      {/* <ManifestoSection /> */}
      <div className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">マニフェストセクションは現在メンテナンス中です</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">古来の日本の知恵を現代に生かす私たちの哲学をご紹介します</p>
        </div>
      </div>

      {/* 代表メッセージ */}
      <section className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-lg border border-border">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">代表からのメッセージ</h2>
              
              <div className="mb-8 text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gold-300 shadow-lg">
                  <Image 
                    src="/images/ceo.jpg" 
                    alt="代表取締役 大塚懸生" 
                    width={128} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold">大塚 懸生</h3>
                <p className="text-foreground/80">代表取締役</p>
              </div>
              
              <blockquote className="text-lg md:text-xl italic text-foreground/90 mb-8">
                <p className="mb-4">
                  「当たり前とされることに疑問を投げかけ続ける姿勢。それは単なる好奇心ではなく、より良い未来を創造するための根源的な力です。
                </p>
                <p className="mb-4">
                  私たちの平和な日常は、戦火を潜り抜け、苦難を乗り越えてきた先人たちの祈りと努力の上に成り立っています。この日々こそが、かけがえのない「ギフト」なのです。
                </p>
                <p className="mb-4">
                  この認識は深い感謝の念と同時に、大きな責任を伴います。先人から受け継いだ贈り物をさらに磨き上げ、次世代へと手渡していく—その架け橋となることが私たちの使命です。
                </p>
                <p className="mb-4">
                  目まぐるしく変化する現代社会では、立ち止まることは後退を意味します。私たちは学び続け、進化し続けなければなりません。しかし同時に、私たちのアイデンティティを形作る本質的な価値観—思いやり、敬意、調和—を決して見失ってはなりません。
                </p>
                <p className="mb-4">
                  問い続ける心と命への感謝。この二つの軸が交わるところに、私たちが創り出したい未来があります。技術革新と日本の精神性が融合する場所で、真に豊かな社会の礎を築くために。
                </p>
                <p>
                  それが私たちJapanAIの誓いです。」
                </p>
              </blockquote>
              
              <p className="text-right font-semibold" data-component-name="AboutSection">代表取締役 大塚懸生</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">私たちと共に、新しい価値を創造しませんか？</h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12">
            JapanAIの哲学に共感いただけましたら、ぜひお問い合わせください。
            伝統と革新の融合から生まれる可能性について、一緒に語り合いましょう。
          </p>
          <Link href={ROUTES.CONTACT.path}>
            <Button variant="gold" size="lg" className="group shadow-lg hover:shadow-xl">
              お問い合わせ
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
