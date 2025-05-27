"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toggleTheme, initTheme } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // マウント時にテーマを初期化
  useEffect(() => {
    const initialTheme = initTheme() as 'light' | 'dark';
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // テーマ切り替え処理
  const handleToggle = () => {
    const newTheme = toggleTheme() as 'light' | 'dark';
    setTheme(newTheme);
  };

  // マウント前はレンダリングしない（SSRでのハイドレーションエラー防止）
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      aria-label={theme === 'dark' ? '明るいテーマに切り替え' : '暗いテーマに切り替え'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">
        {theme === 'dark' ? '明るいテーマに切り替え' : '暗いテーマに切り替え'}
      </span>
    </Button>
  );
}
