'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn } from '@/lib/firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Loader2, Mail, Lock, ArrowRight } from 'lucide-react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') || '/dashboard';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signIn(email, password);

      toast({
        title: '로그인 성공',
        description: '환영합니다!',
        variant: 'success',
      });

      router.push(redirectTo);
      router.refresh();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '로그인 중 문제가 발생했습니다.';
      toast({
        title: '로그인 실패',
        description: errorMessage.includes('invalid-credential')
          ? '이메일 또는 비밀번호가 올바르지 않습니다.'
          : errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center">
          <svg
            className="w-7 h-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
        </div>
        <span className="font-bold text-2xl text-gradient">CBI Lesson</span>
      </div>

      {/* Header */}
      <div className="space-y-2 text-center lg:text-left">
        <h1 className="text-3xl font-bold tracking-tight">로그인</h1>
        <p className="text-muted-foreground">
          CBI Lesson Designer에 오신 것을 환영합니다
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            이메일
          </Label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="name@school.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              className="pl-10 h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium">
              비밀번호
            </Label>
            <button
              type="button"
              className="text-xs text-primary hover:underline font-medium"
            >
              비밀번호 찾기
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
              className="pl-10 h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full h-12 gradient-primary text-white font-medium text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              로그인 중...
            </>
          ) : (
            <>
              로그인
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-3 text-muted-foreground">
            또는
          </span>
        </div>
      </div>

      {/* Register link */}
      <p className="text-center text-sm text-muted-foreground">
        계정이 없으신가요?{' '}
        <Link
          href="/register"
          className="text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          회원가입
        </Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center animate-pulse">
              <Loader2 className="h-6 w-6 text-white animate-spin" />
            </div>
            <p className="text-sm text-muted-foreground">로딩 중...</p>
          </div>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
