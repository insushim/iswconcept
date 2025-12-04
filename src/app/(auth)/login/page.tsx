'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { signIn } from '@/lib/firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Loader2, BookOpen } from 'lucide-react';

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
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-indigo-100 rounded-full">
            <BookOpen className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        <CardTitle className="text-2xl">CBI Lesson Designer</CardTitle>
        <CardDescription>
          전북형 개념기반탐구 AI 수업설계 시스템
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleLogin}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@school.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                로그인 중...
              </>
            ) : (
              '로그인'
            )}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            계정이 없으신가요?{' '}
            <Link
              href="/register"
              className="text-indigo-600 hover:underline font-medium"
            >
              회원가입
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <Card className="shadow-lg">
        <CardContent className="py-12 text-center">
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-indigo-600" />
        </CardContent>
      </Card>
    }>
      <LoginForm />
    </Suspense>
  );
}
