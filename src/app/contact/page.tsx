import { Metadata } from 'next';
import ContactClient from '@/components/contact-client';

export const metadata: Metadata = {
  title: 'お問い合わせ - 株式会社JapanAI',
  description: 'プロジェクトのご相談やサービスに関するお問い合わせは、お気軽にご連絡ください。株式会社JapanAIは、遊び心と日本の伝統が融合した、新しい体験を提供します。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <ContactClient />
    </div>
  );
}
