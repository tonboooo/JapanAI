"use client";

import { useEffect } from 'react';
import HeroSection from '@/components/hero-section';
import PhilosophySection from '@/components/philosophy-section';
import ManifestoSection from '@/components/manifesto-section';
import CeoTabsSection from '@/components/ceo-tabs-section';
import ServicesSection from '@/components/services-section';
import BlogSection from '@/components/blog-section';
import FaqSection from '@/components/faq-section';
import ContactCtaSection from '@/components/contact-cta-section';
import { initTheme, checkCssLoaded, checkAllLinks, runDiagnostics } from '@/lib/utils';

export default function HomeClient() {
  // クライアントサイドのみで実行される処理
  useEffect(() => {
    // テーマの初期化
    initTheme();
    
    // CSS読み込みチェック
    checkCssLoaded();
    
    // リンク整合性チェック
    checkAllLinks();
    
    // 自己診断QA
    runDiagnostics();
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <PhilosophySection />
      <ManifestoSection />
      <CeoTabsSection />
      <ServicesSection />
      <BlogSection />
      <FaqSection />
      <ContactCtaSection />
    </main>
  );
}
