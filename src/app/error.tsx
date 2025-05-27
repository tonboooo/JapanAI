'use client';

import { Button } from '@/components/ui/button';

export default function Error({ 
  error, 
  reset 
}: { 
  error: Error; 
  reset: () => void 
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-accent mb-4">エラーが発生しました</h1>
        
        <p className="text-foreground/70 mb-8">
          申し訳ありませんが、ページの読み込み中にエラーが発生しました。
          {process.env.NODE_ENV === 'development' && (
            <code className="block mt-4 p-4 bg-card rounded text-left text-sm overflow-auto">
              {error.message}
            </code>
          )}
        </p>
        
        <Button 
          variant="gold" 
          onClick={() => reset()}
          className="mx-auto"
        >
          再読み込み
        </Button>
        
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
