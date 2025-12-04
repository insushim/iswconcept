'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
  Calendar,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface GenerationHistory {
  id: string;
  lesson_id: string;
  type: string;
  status: 'success' | 'error';
  tokens_used: number;
  created_at: string;
  lesson?: {
    title: string;
  };
}

export default function HistoryPage() {
  const [history, setHistory] = useState<GenerationHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalGenerations: 0,
    successRate: 0,
    totalTokens: 0,
    thisMonth: 0,
  });

  useEffect(() => {
    const fetchHistory = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('generation_history')
        .select(
          `
          *,
          lesson:lessons(title)
        `
        )
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        toast({
          title: '오류',
          description: '생성 기록을 불러올 수 없습니다.',
          variant: 'destructive',
        });
      } else {
        setHistory(data || []);

        // 통계 계산
        const total = data?.length || 0;
        const successful = data?.filter((h) => h.status === 'success').length || 0;
        const tokens = data?.reduce((sum, h) => sum + (h.tokens_used || 0), 0) || 0;

        const thisMonth = new Date();
        thisMonth.setDate(1);
        thisMonth.setHours(0, 0, 0, 0);
        const monthlyCount =
          data?.filter((h) => new Date(h.created_at) >= thisMonth).length || 0;

        setStats({
          totalGenerations: total,
          successRate: total > 0 ? Math.round((successful / total) * 100) : 0,
          totalTokens: tokens,
          thisMonth: monthlyCount,
        });
      }

      setLoading(false);
    };

    fetchHistory();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      lesson_design: '수업 설계',
      teaching_script: '수업 대본',
      pptx: 'PPT 생성',
      worksheet: '학습지',
    };
    return labels[type] || type;
  };

  // 날짜별로 그룹화
  const groupedHistory = history.reduce((acc, item) => {
    const date = new Date(item.created_at).toLocaleDateString('ko-KR');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {} as Record<string, GenerationHistory[]>);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">생성 기록</h1>
        <p className="text-muted-foreground">AI 수업 생성 기록을 확인합니다.</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              총 생성 횟수
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalGenerations}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              성공률
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {stats.successRate}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              사용 토큰
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.totalTokens.toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              이번 달 생성
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.thisMonth}</div>
          </CardContent>
        </Card>
      </div>

      {/* 기록 목록 */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        </div>
      ) : history.length === 0 ? (
        <Card className="p-12 text-center">
          <Sparkles className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <p className="text-muted-foreground">아직 생성 기록이 없습니다.</p>
        </Card>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedHistory).map(([date, items]) => (
            <div key={date}>
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <h3 className="text-sm font-medium text-muted-foreground">{date}</h3>
              </div>

              <div className="space-y-2">
                {items.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="py-3 px-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {item.status === 'success' ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                          <div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">
                                {getTypeLabel(item.type)}
                              </Badge>
                              {item.lesson && (
                                <Link
                                  href={`/lesson/${item.lesson_id}`}
                                  className="text-sm font-medium hover:text-indigo-600"
                                >
                                  {item.lesson.title}
                                </Link>
                              )}
                            </div>
                            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {formatDate(item.created_at)}
                              </span>
                              {item.tokens_used > 0 && (
                                <span>{item.tokens_used.toLocaleString()} 토큰</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <Badge
                          variant={item.status === 'success' ? 'default' : 'destructive'}
                        >
                          {item.status === 'success' ? '성공' : '실패'}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
