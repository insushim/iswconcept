'use client';

import { useEffect, useState } from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-[55%] relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-primary" />

        {/* Mesh overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-50" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 pattern-dots opacity-10" />

        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
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
            <span className="text-white font-bold text-2xl tracking-tight">CBI Lesson</span>
          </div>

          {/* Main content */}
          <div className={`space-y-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight">
                AI와 함께하는
                <br />
                <span className="text-white/90">개념기반탐구 수업설계</span>
              </h1>
              <p className="text-lg xl:text-xl text-white/70 max-w-lg leading-relaxed">
                전북형 7단계 개념기반탐구 수업을 AI가 자동으로 설계해드립니다.
                교수학습지도안, 수업 대본, PPT, 학습지까지 한 번에.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: '1', title: '기본 정보만 입력', desc: '학년, 과목, 단원, 학습목표' },
                { icon: '2', title: 'AI 자동 생성', desc: '7단계 수업 자동 설계' },
                { icon: '3', title: '자료 다운로드', desc: '지도안, 대본, PPT, 학습지' },
                { icon: '4', title: '선생님 공유 자료실', desc: '다른 선생님들이 공유한 수업자료 활용' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-white font-medium">{feature.title}</p>
                    <p className="text-white/60 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-white/50 text-sm">
            <p>전라북도교육청 연구과제</p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-background relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pattern-dots opacity-30" />

        {/* Gradient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="w-full max-w-[420px] relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
