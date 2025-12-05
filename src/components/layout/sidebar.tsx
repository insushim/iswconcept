'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import {
  LayoutDashboard,
  Plus,
  FileText,
  History,
  Settings,
  HelpCircle,
  Zap,
  X,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigation = [
  {
    name: '대시보드',
    href: '/dashboard',
    icon: LayoutDashboard,
    description: '홈으로 이동',
  },
  {
    name: '새 수업 만들기',
    href: '/lesson/new',
    icon: Plus,
    description: 'AI로 수업 생성',
    highlight: true,
  },
  {
    name: '내 수업 목록',
    href: '/materials',
    icon: FileText,
    description: '저장된 수업 관리',
  },
  {
    name: '공유 자료실',
    href: '/library',
    icon: Users,
    description: '선생님들의 공유 자료',
  },
  {
    name: '생성 히스토리',
    href: '/history',
    icon: History,
    description: 'AI 생성 기록',
  },
  {
    name: '설정',
    href: '/settings',
    icon: Settings,
    description: '계정 및 환경 설정',
  },
];

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn('flex flex-col h-full bg-card', className)}>
      {/* Mobile header */}
      <div className="flex items-center justify-between p-4 border-b md:hidden">
        <Link href="/dashboard" className="flex items-center gap-3" onClick={onNavigate}>
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
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
          <span className="font-bold text-lg">CBI Lesson</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={onNavigate} className="md:hidden">
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 md:p-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'group flex items-center gap-3 px-3 py-3 md:py-2.5 rounded-xl text-sm font-medium transition-all duration-200 active:scale-[0.98]',
                isActive
                  ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                item.highlight && !isActive && 'bg-primary/10 text-primary hover:bg-primary/20'
              )}
            >
              <div className={cn(
                'flex items-center justify-center w-9 h-9 md:w-8 md:h-8 rounded-lg transition-colors',
                isActive
                  ? 'bg-white/20'
                  : item.highlight
                    ? 'bg-primary/20'
                    : 'bg-secondary group-hover:bg-secondary'
              )}>
                <item.icon className={cn(
                  'h-5 w-5 md:h-4 md:w-4',
                  isActive ? 'text-white' : item.highlight ? 'text-primary' : ''
                )} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn(
                  'truncate',
                  isActive ? 'text-white' : ''
                )}>{item.name}</p>
                <p className={cn(
                  'text-xs transition-colors truncate hidden md:block',
                  isActive ? 'text-white/70' : 'text-muted-foreground'
                )}>{item.description}</p>
              </div>
              {item.highlight && !isActive && (
                <Zap className="h-4 w-4 text-primary flex-shrink-0" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-3 md:p-4 space-y-3 md:space-y-4">
        {/* Help card - hidden on mobile */}
        <Link
          href="#"
          className="hidden md:flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-secondary transition-colors"
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-secondary">
            <HelpCircle className="h-4 w-4" />
          </div>
          <span>도움말</span>
        </Link>

        {/* Info card - simplified on mobile */}
        <div className="relative overflow-hidden rounded-2xl p-3 md:p-4 gradient-primary">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex items-center gap-3 md:block">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center md:mb-3 flex-shrink-0">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm md:text-base md:mb-1">
                전북형 개념기반탐구
              </h4>
              <p className="text-xs text-white/70 leading-relaxed hidden md:block">
                AI가 7단계 수업을 자동으로 설계해드립니다
              </p>
            </div>
          </div>
        </div>

        {/* Version */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            CBI Lesson Designer v1.0
          </p>
        </div>
      </div>
    </div>
  );
}
