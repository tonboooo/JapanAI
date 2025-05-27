// ルーティング定義
export const ROUTES = {
  HOME: {
    path: '/',
    label: 'ホーム',
  },
  SERVICES: {
    path: '/services',
    label: 'サービス',
    children: {
      WEB: {
        path: '/services/web',
        label: 'Web制作',
      },
      AGENT: {
        path: '/services/agent',
        label: 'AIエージェント',
      },
      ACADEMY: {
        path: '/services/academy',
        label: 'アカデミー',
      },
    },
  },
  PHILOSOPHY: {
    path: '/philosophy',
    label: '私たちの哲学',
  },
  ABOUT: {
    path: '/about',
    label: '会社概要',
  },
  BLOG: {
    path: '/blog',
    label: 'ブログ',
  },
  FAQ: {
    path: '/faq',
    label: 'よくある質問',
  },
  CONTACT: {
    path: '/contact',
    label: 'お問い合わせ',
  },
};

// ナビゲーション用のルート配列
export const NAV_ROUTES = [
  ROUTES.HOME,
  ROUTES.SERVICES,
  ROUTES.PHILOSOPHY,
  ROUTES.ABOUT,
  ROUTES.BLOG,
  ROUTES.FAQ,
  ROUTES.CONTACT,
];

// パンくずリスト生成用ヘルパー関数
export function getBreadcrumbs(path: string) {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs = [{ ...ROUTES.HOME }];
  
  let currentPath = '';
  
  for (const segment of segments) {
    currentPath += `/${segment}`;
    
    // サービスページの特殊処理
    if (segment === 'services') {
      breadcrumbs.push({ ...ROUTES.SERVICES });
    } 
    // サービスの子ページ
    else if (currentPath.startsWith('/services/') && ROUTES.SERVICES.children) {
      const serviceKey = segment.toUpperCase() as keyof typeof ROUTES.SERVICES.children;
      const serviceChild = ROUTES.SERVICES.children[serviceKey];
      
      if (serviceChild) {
        breadcrumbs.push({ ...serviceChild });
      }
    }
    // その他の主要ページ
    else if (segment === 'philosophy') {
      breadcrumbs.push({ ...ROUTES.PHILOSOPHY });
    }
    else if (segment === 'about') {
      breadcrumbs.push({ ...ROUTES.ABOUT });
    }
    else if (segment === 'blog') {
      breadcrumbs.push({ ...ROUTES.BLOG });
    }
    else if (segment === 'faq') {
      breadcrumbs.push({ ...ROUTES.FAQ });
    }
    else if (segment === 'contact') {
      breadcrumbs.push({ ...ROUTES.CONTACT });
    }
    // ブログ記事ページなど動的ルート
    else if (currentPath.startsWith('/blog/') && segments.length > 1) {
      breadcrumbs.push({
        path: currentPath,
        label: `記事: ${segment}`,
      });
    }
  }
  
  return breadcrumbs;
}
