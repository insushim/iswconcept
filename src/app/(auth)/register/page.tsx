'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signUp } from '@/lib/firebase/auth';
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

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: '비밀번호 불일치',
        description: '비밀번호와 비밀번호 확인이 일치하지 않습니다.',
        variant: 'destructive',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: '비밀번호 오류',
        description: '비밀번호는 6자 이상이어야 합니다.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      await signUp(email, password, fullName);

      toast({
        title: '회원가입 성공',
        description: '계정이 생성되었습니다. 로그인해주세요.',
        variant: 'success',
      });

      router.push('/login');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '회원가입 중 문제가 발생했습니다.';
      toast({
        title: '회원가입 실패',
        description: errorMessage.includes('email-already-in-use')
          ? '이미 사용 중인 이메일입니다.'
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
        <CardTitle className="text-2xl">회원가입</CardTitle>
        <CardDescription>
          CBI Lesson Designer 계정을 만드세요
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleRegister}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">이름</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="홍길동"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
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
              placeholder="6자 이상"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">비밀번호 확인</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="비밀번호 재입력"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
                가입 중...
              </>
            ) : (
              '회원가입'
            )}
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            이미 계정이 있으신가요?{' '}
            <Link
              href="/login"
              className="text-indigo-600 hover:underline font-medium"
            >
              로그인
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
