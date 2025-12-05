'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  BookOpen,
  Search,
  Clock,
  Eye,
  Copy,
  Loader2,
  Users,
  Filter,
  Sparkles,
  Heart,
  ChevronRight,
  GraduationCap,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { getPublicLessons, copyLesson } from '@/lib/firebase/firestore';
import { auth } from '@/lib/firebase/config';
import type { Lesson } from '@/types/lesson';

export default function LibraryPage() {
  const router = useRouter();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [filteredLessons, setFilteredLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [copying, setCopying] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const publicLessons = await getPublicLessons(30);
        setLessons(publicLessons);
        setFilteredLessons(publicLessons);
      } catch (error) {
        console.error('Error fetching public lessons:', error);
        toast({
          title: '오류',
          description: '공개 자료를 불러올 수 없습니다.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  useEffect(() => {
    let result = lessons;

    if (searchTerm) {
      result = result.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lesson.unit_id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lesson.core_concepts?.some(c => c.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (gradeFilter !== 'all') {
      result = result.filter((lesson) => lesson.grade === parseInt(gradeFilter));
    }

    if (subjectFilter !== 'all') {
      result = result.filter((lesson) => lesson.subject_id === subjectFilter);
    }

    setFilteredLessons(result);
  }, [lessons, searchTerm, gradeFilter, subjectFilter]);

  const handleCopy = async (lessonId: string) => {
    const user = auth.currentUser;
    if (!user) {
      toast({
        title: '로그인 필요',
        description: '자료를 복사하려면 로그인이 필요합니다.',
        variant: 'destructive',
      });
      router.push('/login');
      return;
    }

    setCopying(lessonId);
    try {
      const newLessonId = await copyLesson(lessonId, user.uid);
      toast({
        title: '복사 완료',
        description: '자료가 내 수업 목록에 복사되었습니다.',
        variant: 'success',
      });
      router.push(`/lesson/${newLessonId}`);
    } catch (error) {
      toast({
        title: '복사 실패',
        description: error instanceof Error ? error.message : '자료 복사 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    } finally {
      setCopying(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const uniqueSubjects = [...new Set(lessons.map((l) => l.subject_id).filter((s): s is string => !!s))];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

        <div className="relative flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm">
            <Users className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">공유 자료실</h1>
            <p className="text-white/70 mt-1">
              선생님들이 공유한 수업 자료를 검색하고 내 수업에 활용하세요
            </p>
          </div>
        </div>

        <div className="relative mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white">
            <BookOpen className="h-4 w-4" />
            <span className="font-medium">{lessons.length}</span>
            <span className="text-white/70">개의 공개 자료</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white">
            <Heart className="h-4 w-4" />
            <span className="text-white/70">무료로 복사 가능</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="수업 제목, 단원, 핵심 개념으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-3">
              <Select value={gradeFilter} onValueChange={setGradeFilter}>
                <SelectTrigger className="w-full md:w-36 h-11 bg-secondary/50 border-0">
                  <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="학년" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 학년</SelectItem>
                  {[1, 2, 3, 4, 5, 6].map((grade) => (
                    <SelectItem key={grade} value={grade.toString()}>
                      {grade}학년
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                <SelectTrigger className="w-full md:w-40 h-11 bg-secondary/50 border-0">
                  <SelectValue placeholder="과목" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체 과목</SelectItem>
                  {uniqueSubjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results count */}
      {!loading && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium">{filteredLessons.length}</span>개의 자료
          {(searchTerm || gradeFilter !== 'all' || subjectFilter !== 'all') && (
            <span className="text-xs">
              (전체 {lessons.length}개 중)
            </span>
          )}
        </div>
      )}

      {/* Lessons Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="h-5 w-2/3 skeleton" />
                  <div className="h-4 w-1/2 skeleton" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 skeleton rounded-full" />
                    <div className="h-6 w-16 skeleton rounded-full" />
                  </div>
                  <div className="h-3 w-1/3 skeleton" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredLessons.length === 0 ? (
        <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4">
              <Users className="h-10 w-10 text-muted-foreground/30" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {lessons.length === 0
                ? '아직 공유된 자료가 없습니다'
                : '검색 조건에 맞는 자료가 없습니다'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {lessons.length === 0
                ? '첫 번째로 자료를 공유해보세요!'
                : '다른 검색 조건을 시도해보세요.'}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredLessons.map((lesson) => (
            <Card key={lesson.id} className="border-0 shadow-sm bg-card/80 backdrop-blur-sm hover:shadow-md transition-all group">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <Link
                      href={`/lesson/${lesson.id}`}
                      className="text-lg font-semibold hover:text-primary transition-colors line-clamp-2"
                    >
                      {lesson.title}
                    </Link>
                    {lesson.unit_id && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                        {lesson.unit_id}
                      </p>
                    )}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {lesson.grade}학년
                    </Badge>
                    <Badge variant="outline" className="bg-secondary">
                      {lesson.subject_id}
                    </Badge>
                  </div>

                  {/* Core concepts */}
                  {lesson.core_concepts && lesson.core_concepts.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {lesson.core_concepts.slice(0, 3).map((concept, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-violet-500/10 text-violet-600 rounded-md"
                        >
                          {concept}
                        </span>
                      ))}
                      {lesson.core_concepts.length > 3 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{lesson.core_concepts.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {lesson.duration}분
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      {lesson.view_count || 0}
                    </span>
                    <span>{formatDate(lesson.created_at)}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2 border-t">
                    <Link href={`/lesson/${lesson.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        자세히 보기
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      className="gradient-primary text-white"
                      onClick={() => handleCopy(lesson.id)}
                      disabled={copying === lesson.id}
                    >
                      {copying === lesson.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-1" />
                          복사
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
