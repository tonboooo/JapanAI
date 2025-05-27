import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'ページが見つかりません - 株式会社JapanAI',
  description: 'お探しのページは見つかりませんでした。',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-accent">404</h1>
        
        <h2 className="text-3xl font-bold mt-6 mb-3">ページが見つかりません</h2>
        
        <p className="text-foreground/70 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
          URLを確認するか、以下のリンクからホームページにお戻りください。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={ROUTES.HOME.path}>
            <Button variant="accent" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              ホームに戻る
            </Button>
          </Link>
          
          <Link href={ROUTES.CONTACT.path}>
            <Button variant="outline">
              お問い合わせ
            </Button>
          </Link>
        </div>
        
        {/* 和風装飾 */}
        <div className="mt-16 flex justify-center">
          <div className="w-16 h-1 bg-accent rounded-full" />
          <div className="w-1 h-16 bg-accent rounded-full mx-8" />
          <div className="w-16 h-1 bg-accent rounded-full" />
        </div>
      </div>
    </div>
  );
}
