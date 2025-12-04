'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/firebase/auth';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  LogOut,
  User,
  Settings,
  Menu,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import type { User as FirebaseUser } from 'firebase/auth';

interface HeaderProps {
  user?: FirebaseUser | null;
  onMenuClick?: () => void;
}

export function Header({ user, onMenuClick }: HeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    toast({
      title: '로그아웃 완료',
      description: '다음에 또 만나요!',
    });
    router.push('/login');
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/dashboard" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-lg hidden sm:inline-block">
            CBI Lesson Designer
          </span>
          <span className="font-bold text-lg sm:hidden">CBI</span>
        </Link>

        <div className="flex-1" />

        {user && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground hidden md:inline">
              {user.displayName || user.email}
            </span>

            <Link href="/settings">
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </Link>

            <Link href="/settings">
              <Button variant="ghost" size="icon">
                <User className="h-4 w-4" />
              </Button>
            </Link>

            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
