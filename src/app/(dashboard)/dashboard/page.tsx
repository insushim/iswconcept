'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCurrentUser, onAuthChange } from '@/lib/firebase/auth';
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

  useEffect(() => {
    const unsubscribe = onAuthChange(async (user) => {
      if (user) {
        try {
          const lessons = await getUserLessons(user.uid, 5);
          setRecentLessons(lessons);

          // 통계 계산
          const allLessons = await getUserLessons(user.uid, 100);
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

  return (
    <div className="space-y-6">
      {/* 환영 메시지 */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          전북형 개념기반탐구 AI 수업설계 시스템
        </h1>
        <p className="text-indigo-100 mb-4">
          AI와 함께 7단계 개념기반탐구 수업을 손쉽게 설계하세요.
          교수학습지도안, 수업 대본, PPT, 학습지가 자동으로 생성됩니다.
        </p>
        <Link href="/lesson/new">
          <Button className="bg-white text-indigo-600 hover:bg-indigo-50">
            <Sparkles className="mr-2 h-4 w-4" />
            새 수업 만들기
          </Button>
        </Link>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">전체 수업</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalLessons}</div>
            <p className="text-xs text-muted-foreground">총 생성된 수업</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">이번 달</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.thisMonth}</div>
            <p className="text-xs text-muted-foreground">이번 달 생성</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">완료된 수업</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.generated}</div>
            <p className="text-xs text-muted-foreground">AI 생성 완료</p>
          </CardContent>
        </Card>
      </div>

      {/* 빠른 시작 가이드 */}
      <Card>
        <CardHeader>
          <CardTitle>빠른 시작 가이드</CardTitle>
          <CardDescription>
            3단계로 완벽한 개념기반탐구 수업을 설계하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-indigo-50">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="font-medium">기본 정보 입력</h4>
                <p className="text-sm text-muted-foreground">
                  학년, 과목, 단원, 학습목표를 입력합니다
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-50">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="font-medium">AI 자동 생성</h4>
                <p className="text-sm text-muted-foreground">
                  AI가 7단계 수업을 자동으로 설계합니다
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="font-medium">편집 및 다운로드</h4>
                <p className="text-sm text-muted-foreground">
                  필요시 수정하고 자료를 다운로드합니다
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 최근 수업 */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>최근 수업</CardTitle>
            <CardDescription>최근 생성한 수업 목록입니다</CardDescription>
          </div>
          <Link href="/materials">
            <Button variant="outline" size="sm">
              전체 보기
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8 text-muted-foreground">
              로딩 중...
            </div>
          ) : recentLessons.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
              <p className="text-muted-foreground mb-4">
                아직 생성된 수업이 없습니다
              </p>
              <Link href="/lesson/new">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  첫 수업 만들기
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {recentLessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/lesson/${lesson.id}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <BookOpen className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium">{lesson.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {lesson.grade}학년 · {lesson.subject_id}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {formatDate(lesson.created_at)}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
