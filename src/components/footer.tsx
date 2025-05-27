import Link from 'next/link';
import { ROUTES } from '@/lib/routes';
import { t } from '@/lib/i18n';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ロゴ・会社情報 */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight">JapanAI</span>
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              遊び心と日本の伝統が融合した、新しい体験を提供する株式会社JapanAI。常識を革新するサービスを展開しています。
            </p>
          </div>

          {/* サービス */}
          <div>
            <h3 className="text-base font-semibold mb-4">サービス</h3>
            <ul className="space-y-2">
              {Object.values(ROUTES.SERVICES.children || {}).map((service) => (
                <li key={service.path}>
                  <Link
                    href={service.path}
                    className="text-sm text-foreground/70 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 会社情報 */}
          <div>
            <h3 className="text-base font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={ROUTES.ABOUT.path}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  {ROUTES.ABOUT.label}
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.BLOG.path}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  {ROUTES.BLOG.label}
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.FAQ.path}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  {ROUTES.FAQ.label}
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-base font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={ROUTES.CONTACT.path}
                  className="text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  {ROUTES.CONTACT.label}
                </Link>
              </li>
              <li className="text-sm text-foreground/70">
                【未定】<br />
                （2025年8月26日登記予定）
              </li>
              <li className="text-sm text-foreground/70">
                【未定】
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト・リンク */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-foreground/70">
            © {currentYear} 株式会社JapanAI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
