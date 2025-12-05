'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthChange } from '@/lib/firebase/auth';
import { Header } from '@/components/layout/header';
import { Sidebar } from '@/components/layout/sidebar';
import { Toaster } from '@/components/ui/toaster';
import type { User } from 'firebase/auth';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthChange((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);

      if (!firebaseUser) {
        router.push('/login');
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          {/* Animated logo */}
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center animate-pulse shadow-lg shadow-primary/30">
              <svg
                className="w-8 h-8 text-white"
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
            {/* Glow effect */}
            <div className="absolute inset-0 w-16 h-16 rounded-2xl gradient-primary blur-xl opacity-50 animate-pulse" />
          </div>

          {/* Loading text */}
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">CBI Lesson Designer</p>
            <p className="text-xs text-muted-foreground mt-1">로딩 중...</p>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
            <div className="h-full gradient-primary rounded-full animate-shimmer" style={{ width: '60%' }} />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header user={user} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 md:pt-16 border-r bg-card/50 backdrop-blur-sm">
          <Sidebar />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-72 bg-card transform transition-transform duration-300 ease-out md:hidden shadow-2xl ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar onNavigate={() => setSidebarOpen(false)} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 md:ml-72">
          <div className="min-h-[calc(100vh-4rem)] py-6 px-4 md:px-8 max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>

      <Toaster />
    </div>
  );
}
