'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { onAuthChange } from '@/lib/firebase/auth';
import { getUserLessons } from '@/lib/firebase/firestore';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Plus,
  FileText,
  Clock,
  TrendingUp,
  BookOpen,
  Sparkles,
  ArrowRight,
  Zap,
  Target,
  Download,
  ChevronRight,
} from 'lucide-react';
import type { Lesson } from '@/types/lesson';

export default function DashboardPage() {
  const [recentLessons, setRecentLessons] = useState<Lesson[]>([]);
  const [stats, setStats] = useState({
    totalLessons: 0,
    thisMonth: 0,
    generated: 0,
  });
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const unsubscribe = onAuthChange(async (user) => {
      if (user) {
        setUserName(user.displayName || '');
        try {
          // 한 번의 쿼리로 모든 데이터를 가져옴 (최적화)
          const allLessons = await getUserLessons(user.uid, 100);
          setRecentLessons(allLessons.slice(0, 5));

          const thisMonth = new Date();
          thisMonth.setDate(1);
          thisMonth.setHours(0, 0, 0, 0);

          const thisMonthLessons = allLessons.filter(
            (l) => new Date(l.created_at) >= thisMonth
          ).length;

          const generatedLessons = allLessons.filter(
            (l) => l.status === 'generated' || l.status === 'completed'
          ).length;

          setStats({
            totalLessons: allLessons.length,
            thisMonth: thisMonthLessons,
            generated: generatedLessons,
          });
        } catch (error) {
          console.error('Error fetching lessons:', error);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      month: 'short',
      day: 'numeric',
    });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '좋은 아침이에요';
    if (hour < 18) return '좋은 오후예요';
    return '좋은 저녁이에요';
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl gradient-primary p-5 md:p-10">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="space-y-3 md:space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-xs md:text-sm">
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>AI 기반 수업 설계</span>
            </div>
            <div>
              <p className="text-white/70 text-sm md:text-base mb-1">{getGreeting()}, {userName || '선생님'}!</p>
              <h1 className="text-xl md:text-3xl font-bold text-white leading-tight">
                전북형 개념기반탐구
                <br className="md:hidden" />
                <span className="md:ml-2">AI 수업설계</span>
              </h1>
            </div>
            <p className="text-white/70 text-sm md:text-base max-w-lg leading-relaxed hidden md:block">
              AI와 함께 7단계 개념기반탐구 수업을 손쉽게 설계하세요.
              교수학습지도안, 수업 대본, PPT, 학습지가 자동으로 생성됩니다.
            </p>
          </div>
          <div className="flex">
            <Link href="/lesson/new" className="w-full md:w-auto">
              <Button size="lg" className="w-full md:w-auto bg-white text-primary hover:bg-white/90 shadow-lg shadow-black/10 font-medium h-11 md:h-12">
                <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                새 수업 만들기
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {[
          {
            title: '전체 수업',
            value: stats.totalLessons,
            description: '총 생성된 수업',
            icon: FileText,
            color: 'bg-blue-500/10 text-blue-600',
            iconBg: 'bg-blue-500/20',
          },
          {
            title: '이번 달',
            value: stats.thisMonth,
            description: '이번 달 생성',
            icon: TrendingUp,
            color: 'bg-green-500/10 text-green-600',
            iconBg: 'bg-green-500/20',
          },
          {
            title: '완료된 수업',
            value: stats.generated,
            description: 'AI 생성 완료',
            icon: BookOpen,
            color: 'bg-purple-500/10 text-purple-600',
            iconBg: 'bg-purple-500/20',
          },
        ].map((stat, index) => (
          <Card key={index} className="card-hover border-0 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardContent className="p-3 md:p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="space-y-0.5 md:space-y-1">
                  <p className="text-xs md:text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl md:text-3xl font-bold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground hidden md:block">{stat.description}</p>
                </div>
                <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${stat.iconBg} self-start`}>
                  <stat.icon className={`h-4 w-4 md:h-5 md:w-5 ${stat.color.split(' ')[1]}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Start Guide */}
      <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm overflow-hidden">
        <CardHeader className="pb-3 md:pb-4 px-4 md:px-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-primary/10">
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-base md:text-lg">빠른 시작 가이드</CardTitle>
              <CardDescription className="text-xs md:text-sm">3단계로 개념기반탐구 수업 설계</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                step: '1',
                title: '기본 정보 입력',
                description: '학년, 과목, 단원, 학습목표를 입력합니다',
                gradient: 'from-violet-500/20 to-purple-500/20',
                iconColor: 'text-violet-600',
                bgColor: 'bg-violet-600',
              },
              {
                step: '2',
                title: 'AI 자동 생성',
                description: 'AI가 7단계 수업을 자동으로 설계합니다',
                gradient: 'from-purple-500/20 to-pink-500/20',
                iconColor: 'text-purple-600',
                bgColor: 'bg-purple-600',
              },
              {
                step: '3',
                title: '편집 및 다운로드',
                description: '필요시 수정하고 자료를 다운로드합니다',
                gradient: 'from-pink-500/20 to-rose-500/20',
                iconColor: 'text-pink-600',
                bgColor: 'bg-pink-600',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative group p-3 md:p-5 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} hover:scale-[1.02] transition-all duration-300`}
              >
                <div className="flex items-center md:items-start gap-3 md:gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl ${item.bgColor} flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg`}>
                    {item.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm md:text-base md:mb-1">{item.title}</h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.description}</p>
                  </div>
                </div>
                {index < 2 && (
                  <ChevronRight className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 text-muted-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Lessons */}
      <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">최근 수업</CardTitle>
                <CardDescription>최근 생성한 수업 목록입니다</CardDescription>
              </div>
            </div>
            <Link href="/materials">
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                전체 보기
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50">
                  <div className="w-12 h-12 rounded-xl skeleton" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-1/3 skeleton" />
                    <div className="h-3 w-1/4 skeleton" />
                  </div>
                </div>
              ))}
            </div>
          ) : recentLessons.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-muted-foreground/50" />
              </div>
              <p className="text-muted-foreground mb-4">아직 생성된 수업이 없습니다</p>
              <Link href="/lesson/new">
                <Button className="gradient-primary text-white shadow-lg shadow-primary/25">
                  <Plus className="mr-2 h-4 w-4" />
                  첫 수업 만들기
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {recentLessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  href={`/lesson/${lesson.id}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/80 transition-all duration-200 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary-soft flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate group-hover:text-primary transition-colors">
                      {lesson.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {lesson.grade}학년 · {lesson.subject_id}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-muted-foreground">{formatDate(lesson.created_at)}</p>
                      <p className={`text-xs font-medium ${
                        lesson.status === 'completed' ? 'text-green-600' :
                        lesson.status === 'generated' ? 'text-blue-600' : 'text-muted-foreground'
                      }`}>
                        {lesson.status === 'completed' ? '완료' :
                         lesson.status === 'generated' ? '생성됨' : '초안'}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="card-hover border-0 shadow-sm bg-card/80 backdrop-blur-sm group">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">7단계 개념기반탐구</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  전북형 개념기반탐구 7단계에 맞춘 체계적인 수업 설계가 가능합니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="card-hover border-0 shadow-sm bg-card/80 backdrop-blur-sm group">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <Download className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">다양한 자료 제공</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  교수학습지도안, 수업 대본, PPT, 학습지를 자동으로 생성하고 다운로드할 수 있습니다.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
