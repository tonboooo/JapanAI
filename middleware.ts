import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ミドルウェア関数
export function middleware(request: NextRequest) {
  // すべてのリクエストを通過させる（デバッグ用に一時的に無効化）
  return NextResponse.next();
}

// ミドルウェアの設定
export const config = {
  matcher: [
    // 静的ファイルやAPIルート以外のすべてのリクエストに適用
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
