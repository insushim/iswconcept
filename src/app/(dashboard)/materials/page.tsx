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
  FileText,
  Presentation,
  FileSpreadsheet,
  Search,
  Clock,
  Edit3,
  Download,
  Loader2,
  Plus,
  FolderOpen,
  ChevronRight,
  Sparkles,
  Filter,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { getUserLessons } from '@/lib/firebase/firestore';
import { auth } from '@/lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import type { Lesson } from '@/types/lesson';

export default function MaterialsPage() {
  const router = useRouter();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [filteredLessons, setFilteredLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        const userLessons = await getUserLessons(user.uid, 100);
        setLessons(userLessons);
        setFilteredLessons(userLessons);
      } catch (error) {
        console.error('Error fetching lessons:', error);
        toast({
          title: '오류',
          description: '수업 목록을 불러올 수 없습니다.',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    let result = lessons;

    if (searchTerm) {
      result = result.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lesson.unit_id?.toLowerCase().includes(searchTerm.toLowerCase())
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const uniqueSubjects = [...new Set(lessons.map((l) => l.subject_id).filter((s): s is string => !!s))];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-600 border-green-500/20';
      case 'generated':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-600 border-gray-500/20';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return '완료';
      case 'generated':
        return '생성됨';
      default:
        return '초안';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl gradient-primary">
            <FolderOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">내 수업 목록</h1>
            <p className="text-muted-foreground">내가 생성한 모든 수업 자료를 관리합니다.</p>
          </div>
        </div>
        <Link href="/lesson/new">
          <Button className="gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all">
            <Sparkles className="h-4 w-4 mr-2" />
            새 수업 만들기
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="수업 제목 또는 단원으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 bg-secondary/50 border-0 focus:bg-background focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-3">
              <Select value={gradeFilter} onValueChange={setGradeFilter}>
                <SelectTrigger className="w-full md:w-36 h-11 bg-secondary/50 border-0">
                  <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
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
          <span className="font-medium">{filteredLessons.length}</span>개의 수업
          {(searchTerm || gradeFilter !== 'all' || subjectFilter !== 'all') && (
            <span className="text-xs">
              (전체 {lessons.length}개 중)
            </span>
          )}
        </div>
      )}

      {/* Lessons List */}
      {loading ? (
        <div className="grid gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl skeleton" />
                  <div className="flex-1 space-y-3">
                    <div className="h-5 w-1/3 skeleton" />
                    <div className="h-4 w-1/4 skeleton" />
                    <div className="h-3 w-1/5 skeleton" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredLessons.length === 0 ? (
        <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4">
              <FileText className="h-10 w-10 text-muted-foreground/30" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {lessons.length === 0
                ? '아직 생성된 수업이 없습니다'
                : '검색 조건에 맞는 수업이 없습니다'}
            </h3>
            <p className="text-muted-foreground mb-6">
              {lessons.length === 0
                ? 'AI와 함께 첫 번째 수업을 만들어보세요.'
                : '다른 검색 조건을 시도해보세요.'}
            </p>
            {lessons.length === 0 && (
              <Link href="/lesson/new">
                <Button className="gradient-primary text-white shadow-lg shadow-primary/25">
                  <Plus className="h-4 w-4 mr-2" />
                  첫 수업 만들기
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredLessons.map((lesson) => (
            <Card key={lesson.id} className="border-0 shadow-sm bg-card/80 backdrop-blur-sm hover:shadow-md transition-all group">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl gradient-primary-soft flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/lesson/${lesson.id}`}
                      className="text-lg font-semibold hover:text-primary transition-colors line-clamp-1"
                    >
                      {lesson.title}
                    </Link>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 font-medium">
                        {lesson.grade}학년
                      </Badge>
                      <Badge variant="outline" className="bg-secondary text-secondary-foreground">
                        {lesson.subject_id}
                      </Badge>
                      {lesson.unit_id && (
                        <span className="text-sm text-muted-foreground truncate max-w-[200px]">
                          {lesson.unit_id}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {lesson.duration}분
                      </span>
                      <span>{formatDate(lesson.created_at)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 md:flex-col md:items-end">
                    <Badge variant="outline" className={`${getStatusStyle(lesson.status)} border font-medium`}>
                      {getStatusLabel(lesson.status)}
                    </Badge>
                    <div className="flex gap-2">
                      <Link href={`/lesson/${lesson.id}/edit`}>
                        <Button variant="outline" size="sm" className="h-9 px-3">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/lesson/${lesson.id}`}>
                        <Button variant="outline" size="sm" className="h-9 px-3">
                          <Download className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Materials */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                  {[
                    { icon: FileText, label: '지도안', color: 'text-violet-600 bg-violet-500/10' },
                    { icon: BookOpen, label: '대본', color: 'text-blue-600 bg-blue-500/10' },
                    { icon: Presentation, label: 'PPT', color: 'text-orange-600 bg-orange-500/10' },
                    { icon: FileSpreadsheet, label: '학습지', color: 'text-green-600 bg-green-500/10' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${item.color}`}
                    >
                      <item.icon className="h-3.5 w-3.5" />
                      {item.label}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
