'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
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
  Edit,
  Download,
  Loader2,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import type { Lesson } from '@/types/lesson';

export default function MaterialsPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [filteredLessons, setFilteredLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');

  useEffect(() => {
    const fetchLessons = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from('lessons')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: '오류',
          description: '수업 목록을 불러올 수 없습니다.',
          variant: 'destructive',
        });
      } else {
        setLessons(data || []);
        setFilteredLessons(data || []);
      }

      setLoading(false);
    };

    fetchLessons();
  }, []);

  useEffect(() => {
    let result = lessons;

    // 검색어 필터
    if (searchTerm) {
      result = result.filter(
        (lesson) =>
          lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          lesson.unit_id?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 학년 필터
    if (gradeFilter !== 'all') {
      result = result.filter((lesson) => lesson.grade === parseInt(gradeFilter));
    }

    // 과목 필터
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

  // 유니크한 과목 목록 추출 (undefined 제외)
  const uniqueSubjects = [...new Set(lessons.map((l) => l.subject_id).filter((s): s is string => !!s))];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">수업 자료</h1>
          <p className="text-muted-foreground">생성된 모든 수업 자료를 관리합니다.</p>
        </div>
        <Link href="/lesson/new">
          <Button>새 수업 만들기</Button>
        </Link>
      </div>

      {/* 필터 */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="수업 제목 또는 단원으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={gradeFilter} onValueChange={setGradeFilter}>
              <SelectTrigger className="w-full md:w-32">
                <SelectValue placeholder="학년" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체 학년</SelectItem>
                {[3, 4, 5, 6].map((grade) => (
                  <SelectItem key={grade} value={grade.toString()}>
                    {grade}학년
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={subjectFilter} onValueChange={setSubjectFilter}>
              <SelectTrigger className="w-full md:w-40">
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
        </CardContent>
      </Card>

      {/* 수업 목록 */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-indigo-600" />
        </div>
      ) : filteredLessons.length === 0 ? (
        <Card className="p-12 text-center">
          <FileText className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <p className="text-muted-foreground mb-4">
            {lessons.length === 0
              ? '아직 생성된 수업이 없습니다.'
              : '검색 조건에 맞는 수업이 없습니다.'}
          </p>
          {lessons.length === 0 && (
            <Link href="/lesson/new">
              <Button>첫 수업 만들기</Button>
            </Link>
          )}
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredLessons.map((lesson) => (
            <Card key={lesson.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 rounded-lg">
                      <BookOpen className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <Link
                        href={`/lesson/${lesson.id}`}
                        className="text-lg font-medium hover:text-indigo-600 transition-colors"
                      >
                        {lesson.title}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{lesson.grade}학년</Badge>
                        <Badge variant="outline">{lesson.subject_id}</Badge>
                        {lesson.unit_id && (
                          <span className="text-sm text-muted-foreground">
                            {lesson.unit_id}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {lesson.duration}분
                        </span>
                        <span>{formatDate(lesson.created_at)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      variant={lesson.status === 'completed' ? 'default' : 'secondary'}
                    >
                      {lesson.status === 'completed'
                        ? '완료'
                        : lesson.status === 'generated'
                        ? '생성됨'
                        : '초안'}
                    </Badge>
                    <div className="flex gap-2">
                      <Link href={`/lesson/${lesson.id}/edit`}>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Link href={`/lesson/${lesson.id}`}>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 자료 아이콘들 */}
                <div className="flex gap-2 mt-4 pt-4 border-t">
                  <div
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs"
                    title="교수학습지도안"
                  >
                    <FileText className="h-3 w-3" />
                    지도안
                  </div>
                  <div
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs"
                    title="수업 대본"
                  >
                    <BookOpen className="h-3 w-3" />
                    대본
                  </div>
                  <div
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs"
                    title="PPT"
                  >
                    <Presentation className="h-3 w-3" />
                    PPT
                  </div>
                  <div
                    className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs"
                    title="학습지"
                  >
                    <FileSpreadsheet className="h-3 w-3" />
                    학습지
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
