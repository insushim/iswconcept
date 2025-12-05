'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  Calendar,
  Zap,
  TrendingUp,
  Activity,
  ChevronRight,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { getGenerationHistory } from '@/lib/firebase/firestore';
import { auth } from '@/lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

interface GenerationHistory {
  id: string;
  lesson_id: string;
  type: string;
  status: 'success' | 'error';
  tokens_used: number;
  created_at: string;
  lesson?: {
    title: string;
  } | null;
}

export default function HistoryPage() {
  const router = useRouter();
  const [history, setHistory] = useState<GenerationHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalGenerations: 0,
    successRate: 0,
    totalTokens: 0,
    thisMonth: 0,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        const data = await getGenerationHistory(user.uid, 50) as GenerationHistory[];
        setHistory(data);

        const total = data.length;
        const successful = data.filter((h) => h.status === 'success').length;
        const tokens = data.reduce((sum, h) => sum + (h.tokens_used || 0), 0);

        const thisMonth = new Date();
        thisMonth.setDate(1);
        thisMonth.setHours(0, 0, 0, 0);
        const monthlyCount = data.filter((h) => new Date(h.created_at) >= thisMonth).length;

        setStats({
          totalGenerations: total,
          successRate: total > 0 ? Math.round((successful / total) * 100) : 0,
          totalTokens: tokens,
          thisMonth: monthlyCount,
        });
      } catch (error) {
        console.error('Error fetching history:', error);
        toast({
          title: '오류',
          description: '생성 기록을 불러올 수 없습니다.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      lesson_design: '수업 설계',
      lesson_plan: '수업 설계',
      teaching_script: '수업 대본',
      pptx: 'PPT 생성',
      ppt: 'PPT 생성',
      worksheet: '학습지',
    };
    return labels[type] || type;
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      lesson_design: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
      lesson_plan: 'bg-violet-500/10 text-violet-600 border-violet-500/20',
      teaching_script: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      pptx: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
      ppt: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
      worksheet: 'bg-green-500/10 text-green-600 border-green-500/20',
    };
    return colors[type] || 'bg-gray-500/10 text-gray-600 border-gray-500/20';
  };

  const groupedHistory = history.reduce((acc, item) => {
    const date = new Date(item.created_at).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {} as Record<string, GenerationHistory[]>);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-2xl gradient-primary">
          <Activity className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">생성 기록</h1>
          <p className="text-muted-foreground">AI 수업 생성 기록을 확인합니다.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: '총 생성 횟수',
            value: stats.totalGenerations,
            icon: Sparkles,
            color: 'from-violet-500/20 to-purple-500/20',
            iconColor: 'text-violet-600',
          },
          {
            title: '성공률',
            value: `${stats.successRate}%`,
            icon: TrendingUp,
            color: 'from-green-500/20 to-emerald-500/20',
            iconColor: 'text-green-600',
          },
          {
            title: '사용 토큰',
            value: stats.totalTokens.toLocaleString(),
            icon: Zap,
            color: 'from-amber-500/20 to-orange-500/20',
            iconColor: 'text-amber-600',
          },
          {
            title: '이번 달',
            value: stats.thisMonth,
            icon: Calendar,
            color: 'from-blue-500/20 to-cyan-500/20',
            iconColor: 'text-blue-600',
          },
        ].map((stat, index) => (
          <Card key={index} className="border-0 shadow-sm bg-card/80 backdrop-blur-sm card-hover">
            <CardContent className="p-5">
              <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${stat.color} mb-3`}>
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* History List */}
      {loading ? (
        <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="p-4 rounded-2xl gradient-primary animate-pulse">
                <Loader2 className="h-8 w-8 text-white animate-spin" />
              </div>
              <p className="text-sm text-muted-foreground">기록을 불러오는 중...</p>
            </div>
          </CardContent>
        </Card>
      ) : history.length === 0 ? (
        <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4">
              <Sparkles className="h-10 w-10 text-muted-foreground/30" />
            </div>
            <h3 className="text-lg font-semibold mb-2">아직 생성 기록이 없습니다</h3>
            <p className="text-muted-foreground">수업을 생성하면 여기에 기록이 표시됩니다.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedHistory).map(([date, items]) => (
            <div key={date}>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 rounded-lg bg-secondary">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <h3 className="text-sm font-medium text-muted-foreground">{date}</h3>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="space-y-3">
                {items.map((item) => (
                  <Card key={item.id} className="border-0 shadow-sm bg-card/80 backdrop-blur-sm hover:shadow-md transition-all group">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        {/* Status icon */}
                        <div className={`flex-shrink-0 p-2.5 rounded-xl ${
                          item.status === 'success'
                            ? 'bg-green-500/10'
                            : 'bg-red-500/10'
                        }`}>
                          {item.status === 'success' ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <Badge variant="outline" className={`${getTypeColor(item.type)} border font-medium`}>
                              {getTypeLabel(item.type)}
                            </Badge>
                            {item.lesson && (
                              <Link
                                href={`/lesson/${item.lesson_id}`}
                                className="text-sm font-medium hover:text-primary transition-colors truncate"
                              >
                                {item.lesson.title}
                              </Link>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {formatTime(item.created_at)}
                            </span>
                            {item.tokens_used > 0 && (
                              <span className="flex items-center gap-1">
                                <Zap className="h-3 w-3" />
                                {item.tokens_used.toLocaleString()} 토큰
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Status badge */}
                        <div className="flex items-center gap-2">
                          <Badge
                            variant={item.status === 'success' ? 'default' : 'destructive'}
                            className={item.status === 'success' ? 'bg-green-600 hover:bg-green-700' : ''}
                          >
                            {item.status === 'success' ? '성공' : '실패'}
                          </Badge>
                          <ChevronRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors" />
                        </div>
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
