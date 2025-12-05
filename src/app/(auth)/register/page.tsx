'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signUp } from '@/lib/firebase/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Loader2, Mail, Lock, User, ArrowRight, Check } from 'lucide-react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const passwordRequirements = [
    { met: password.length >= 6, text: '6자 이상' },
    { met: /[a-zA-Z]/.test(password), text: '영문 포함' },
    { met: /[0-9]/.test(password), text: '숫자 포함' },
  ];

  const isPasswordValid = password.length >= 6;
  const doPasswordsMatch = password === confirmPassword && confirmPassword.length > 0;

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
    <div className="space-y-6 animate-fade-in-up">
      {/* Mobile Logo */}
      <div className="lg:hidden flex items-center justify-center gap-3 mb-6">
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
        <h1 className="text-3xl font-bold tracking-tight">회원가입</h1>
        <p className="text-muted-foreground">
          CBI Lesson Designer 계정을 만드세요
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleRegister} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-sm font-medium">
            이름
          </Label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="fullName"
              type="text"
              placeholder="홍길동"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={isLoading}
              className="pl-10 h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

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
          <Label htmlFor="password" className="text-sm font-medium">
            비밀번호
          </Label>
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
          {/* Password requirements */}
          {password.length > 0 && (
            <div className="flex gap-3 mt-2">
              {passwordRequirements.map((req, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-1 text-xs transition-colors ${
                    req.met ? 'text-green-600' : 'text-muted-foreground'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${
                      req.met ? 'bg-green-100' : 'bg-secondary'
                    }`}
                  >
                    {req.met && <Check className="w-3 h-3" />}
                  </div>
                  {req.text}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium">
            비밀번호 확인
          </Label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={isLoading}
              className={`pl-10 h-12 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20 transition-all ${
                confirmPassword.length > 0 && !doPasswordsMatch
                  ? 'ring-2 ring-destructive/50'
                  : ''
              }`}
            />
            {confirmPassword.length > 0 && doPasswordsMatch && (
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
              </div>
            )}
          </div>
          {confirmPassword.length > 0 && !doPasswordsMatch && (
            <p className="text-xs text-destructive">비밀번호가 일치하지 않습니다</p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full h-12 gradient-primary text-white font-medium text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 mt-2"
          disabled={isLoading || !isPasswordValid || !doPasswordsMatch}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              가입 중...
            </>
          ) : (
            <>
              회원가입
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

      {/* Login link */}
      <p className="text-center text-sm text-muted-foreground">
        이미 계정이 있으신가요?{' '}
        <Link
          href="/login"
          className="text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          로그인
        </Link>
      </p>
    </div>
  );
}
