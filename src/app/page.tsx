import type { Metadata } from 'next';
import HomeClient from '@/components/home-client';

export const metadata: Metadata = {
  title: '株式会社JapanAI - 遊び心×日本の伝統',
  description: '遊び心と日本の伝統が融合した、新しい体験を提供する株式会社JapanAI。常識を革新するサービスを展開しています。',
};

export default function Home() {
  return <HomeClient />;
}
