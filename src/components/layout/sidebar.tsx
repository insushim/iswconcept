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
  BookOpen,
} from 'lucide-react';

const navigation = [
  {
    name: '대시보드',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: '새 수업 만들기',
    href: '/lesson/new',
    icon: Plus,
  },
  {
    name: '내 수업 목록',
    href: '/materials',
    icon: FileText,
  },
  {
    name: '생성 히스토리',
    href: '/history',
    icon: History,
  },
  {
    name: '설정',
    href: '/settings',
    icon: Settings,
  },
];

interface SidebarProps {
  className?: string;
  onNavigate?: () => void;
}

export function Sidebar({ className, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn('flex flex-col h-full', className)}>
      <div className="p-4 border-b md:hidden">
        <Link href="/dashboard" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-bold">CBI Lesson Designer</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-700 hover:bg-gray-100'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
          <h4 className="font-medium text-sm text-indigo-900">
            전북형 개념기반탐구
          </h4>
          <p className="text-xs text-indigo-700 mt-1">
            AI와 함께 7단계 수업을 설계하세요
          </p>
        </div>
      </div>
    </div>
  );
}
