'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from '@/lib/firebase/auth';
import { Button } from '@/components/ui/button';
import {
  LogOut,
  User,
  Settings,
  Menu,
  Bell,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import type { User as FirebaseUser } from 'firebase/auth';
import { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  user?: FirebaseUser | null;
  onMenuClick?: () => void;
}

export function Header({ user, onMenuClick }: HeaderProps) {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: '로그아웃 완료',
        description: '다음에 또 만나요!',
      });
      // 강제로 페이지 이동 (인증 상태 완전 초기화)
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout error:', error);
      window.location.href = '/login';
    }
  };

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.charAt(0).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-6">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-3 hover:bg-secondary"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <svg
              className="w-5 h-5 text-white"
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
          <div className="hidden sm:block">
            <span className="font-bold text-lg tracking-tight">CBI Lesson</span>
            <span className="text-xs text-muted-foreground ml-2 font-medium">Designer</span>
          </div>
        </Link>

        <div className="flex-1" />

        {/* Action buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Quick create button */}
          <Link href="/lesson/new" className="hidden sm:block">
            <Button
              size="sm"
              className="gradient-primary text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              새 수업
            </Button>
          </Link>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-secondary"
          >
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
          </Button>

          {/* User menu */}
          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-secondary transition-colors"
              >
                <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-white font-semibold text-sm">
                  {getInitials(user.displayName)}
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium leading-none">
                    {user.displayName || '사용자'}
                  </p>
                  <p className="text-xs text-muted-foreground truncate max-w-[120px]">
                    {user.email}
                  </p>
                </div>
                <ChevronDown className={`h-4 w-4 text-muted-foreground hidden md:block transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-card rounded-xl border shadow-lg shadow-black/5 py-1 animate-fade-in">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-medium">{user.displayName || '사용자'}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                  </div>

                  <div className="py-1">
                    <Link
                      href="/settings"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                    >
                      <User className="h-4 w-4 text-muted-foreground" />
                      프로필
                    </Link>
                    <Link
                      href="/settings"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-secondary transition-colors"
                    >
                      <Settings className="h-4 w-4 text-muted-foreground" />
                      설정
                    </Link>
                  </div>

                  <div className="border-t py-1">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        handleLogout();
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-destructive hover:bg-destructive/10 w-full transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      로그아웃
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
