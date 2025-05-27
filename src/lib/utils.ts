import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * クラス名を結合するユーティリティ関数
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * テーマの切り替え
 */
export function toggleTheme() {
  if (typeof document === 'undefined') return;
  
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  return newTheme;
}

/**
 * テーマの初期化
 */
export function initTheme() {
  if (typeof document === 'undefined') return;
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
  
  return theme;
}

/**
 * スムーススクロール
 */
export function smoothScroll(id: string) {
  if (typeof document === 'undefined') return;
  
  const element = document.getElementById(id);
  if (element) {
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    
    if (supportsNativeSmoothScroll) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // フォールバック
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}

/**
 * CSSが読み込まれているかチェック
 */
export function checkCssLoaded() {
  if (typeof document === 'undefined') return true;
  
  const styleSheets = [...document.styleSheets];
  if (!styleSheets.length) {
    console.error('🟥 CSS not loaded');
    return false;
  }
  
  return true;
}

/**
 * リンク整合性チェック
 */
export function checkAllLinks() {
  if (typeof document === 'undefined') return true;
  
  const links = document.querySelectorAll('a[href]');
  const brokenLinks: string[] = [];
  
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href === '#' || href.startsWith('javascript:')) {
      brokenLinks.push(href || 'empty');
    }
  });
  
  if (brokenLinks.length > 0) {
    console.error('🟥 Broken links found:', brokenLinks);
    return false;
  }
  
  return true;
}

/**
 * 自己診断QA
 */
export function runDiagnostics() {
  if (typeof document === 'undefined') return {};
  
  const diagnostics = {
    css_loaded: checkCssLoaded() ? '✅' : '❌',
    all_links_ok: checkAllLinks() ? '✅' : '❌',
    theme_support: document.documentElement.hasAttribute('data-theme') ? '✅' : '❌',
    accessibility: document.querySelector('.skip-link') ? '✅' : '❌',
    responsive: window.matchMedia('(min-width: 768px)').media !== 'not all' ? '✅' : '❌',
  };
  
  console.log(JSON.stringify(diagnostics, null, 2));
  return diagnostics;
}
