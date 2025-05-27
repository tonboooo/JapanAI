import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ミドルウェア関数
export function middleware(request: NextRequest) {
  // リクエストURLを取得
  const url = request.nextUrl.clone();
  
  // CSSやJavaScriptのリソースパスの修正
  if (url.pathname.startsWith('/_next/') || url.pathname.startsWith('/static/')) {
    return NextResponse.next();
  }
  
  // すべてのページに対して正しいルーティングを適用
  const validRoutes = ['/', '/about', '/services', '/philosophy', '/blog', '/faq', '/contact'];
  
  // 有効なルートかチェック
  const isValidRoute = validRoutes.some(route => url.pathname === route) || 
                     url.pathname.startsWith('/services/') ||
                     url.pathname.startsWith('/blog/');
  
  if (!isValidRoute && !url.pathname.includes('.')) {
    // 無効なルートの場合は404ページを表示
    url.pathname = '/not-found';
    return NextResponse.rewrite(url);
  }
  
  // 通常のレスポンスを返す
  return NextResponse.next();
}

// ミドルウェアの設定
export const config = {
  matcher: [
    // 静的ファイルやAPIルート以外のすべてのリクエストに適用
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
