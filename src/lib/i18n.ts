// 言語設定
export type Language = 'ja' | 'en';

// 翻訳辞書
interface TranslationDictionary {
  [key: string]: {
    ja: string;
    en: string;
  };
}

// 翻訳辞書
export const dict: TranslationDictionary = {
  // ナビゲーション
  'nav.home': {
    ja: 'ホーム',
    en: 'Home',
  },
  'nav.services': {
    ja: 'サービス',
    en: 'Services',
  },
  'nav.about': {
    ja: '会社概要',
    en: 'About Us',
  },
  'nav.blog': {
    ja: 'ブログ',
    en: 'Blog',
  },
  'nav.faq': {
    ja: 'よくある質問',
    en: 'FAQ',
  },
  'nav.contact': {
    ja: 'お問い合わせ',
    en: 'Contact',
  },
  
  // サービス
  'services.web': {
    ja: 'Web制作',
    en: 'Web Development',
  },
  'services.agent': {
    ja: 'AIエージェント',
    en: 'AI Agents',
  },
  'services.academy': {
    ja: 'アカデミー',
    en: 'Academy',
  },
  
  // ヒーローセクション
  'hero.title': {
    ja: '常識を革新する',
    en: 'Innovating the Conventional',
  },
  'hero.subtitle': {
    ja: '遊び心と伝統の融合から生まれる新たな価値。私たちは本質を見極め、調和を創造しながら未来を切り拓きます。',
    en: 'New value born from the fusion of playfulness and tradition. We discern the essence, create harmony, and forge the future.',
  },
  'hero.cta': {
    ja: '私たちのサービス',
    en: 'Our Services',
  },
  
  // フッター
  'footer.copyright': {
    ja: '© 2025 株式会社JapanAI. All rights reserved.',
    en: '© 2025 JapanAI Inc. All rights reserved.',
  },
  'footer.privacy': {
    ja: 'プライバシーポリシー',
    en: 'Privacy Policy',
  },
  'footer.terms': {
    ja: '利用規約',
    en: 'Terms of Service',
  },
  
  // 共通
  'common.readMore': {
    ja: '詳しく見る',
    en: 'Read More',
  },
  'common.contactUs': {
    ja: 'お問い合わせ',
    en: 'Contact Us',
  },
  'common.loading': {
    ja: '読み込み中...',
    en: 'Loading...',
  },
  'common.error': {
    ja: 'エラーが発生しました',
    en: 'An error occurred',
  },
  'common.notFound': {
    ja: 'ページが見つかりません',
    en: 'Page not found',
  },
};

// 翻訳関数
export function t(key: string, lang: Language = 'ja'): string {
  if (!dict[key]) {
    console.error(`[MISSING] ${key}`);
    return `[MISSING] ${key}`;
  }
  return dict[key][lang];
}

// 言語検出
export function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return 'ja';
  
  const userLang = navigator.language.toLowerCase();
  return userLang.startsWith('ja') ? 'ja' : 'en';
}
