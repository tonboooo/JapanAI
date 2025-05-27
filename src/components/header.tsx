"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { ROUTES } from '@/lib/routes';
import { t } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // モバイルメニュー閉じる
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      {/* スキップリンク（アクセシビリティ対応） */}
      <a href="#main-content" className="skip-link">
        メインコンテンツにスキップ
      </a>

      <div className="container mx-auto px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl md:text-2xl font-bold tracking-tight">
            JapanAI
          </span>
        </Link>

        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-8">
          {Object.values(ROUTES).map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                pathname === route.path
                  ? 'text-accent'
                  : 'text-foreground/70'
              )}
            >
              {route.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* モバイルメニューボタン */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* モバイルナビゲーション */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background border-t"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {Object.values(ROUTES).map((route) => (
              <Link
                key={route.path}
                href={route.path}
                onClick={closeMobileMenu}
                className={cn(
                  'py-2 text-base font-medium transition-colors hover:text-accent',
                  pathname === route.path
                    ? 'text-accent'
                    : 'text-foreground/70'
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
