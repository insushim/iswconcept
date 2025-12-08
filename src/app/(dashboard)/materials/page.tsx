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
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Eye,
  Trash2,
  GraduationCap,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { getUserLessonsList, getLesson, deleteLesson, type UserLessonSummary } from '@/lib/firebase/firestore';
import { auth } from '@/lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import type { Lesson } from '@/types/lesson';

const ITEMS_PER_PAGE = 15;

export default function MaterialsPage() {
  const router = useRouter();
  const [lessons, setLessons] = useState<UserLessonSummary[]>([]);
  const [filteredLessons, setFilteredLessons] = useState<UserLessonSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // 상세 보기 관련 상태
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      try {
        // 제목만 가져오기 (DB 사용량 최소화)
        const userLessons = await getUserLessonsList(user.uid, 100);
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
          lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (gradeFilter !== 'all') {
      result = result.filter((lesson) => lesson.grade === parseInt(gradeFilter));
    }

    if (subjectFilter !== 'all') {
      result = result.filter((lesson) => lesson.subject_id === subjectFilter);
    }

    setFilteredLessons(result);
    setCurrentPage(1);
  }, [lessons, searchTerm, gradeFilter, subjectFilter]);

  // 상세 정보 로드 (클릭 시)
  const handleViewDetail = async (lessonId: string) => {
    setLoadingDetail(true);
    try {
      const lessonData = await getLesson(lessonId);
      if (lessonData) {
        setSelectedLesson(lessonData);
      }
    } catch (error) {
      console.error('Error fetching lesson detail:', error);
      toast({
        title: '오류',
        description: '수업 상세 정보를 불러올 수 없습니다.',
        variant: 'destructive',
      });
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleDelete = async (lessonId: string, lessonTitle: string) => {
    const confirmed = window.confirm(`"${lessonTitle}" 수업을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`);
    if (!confirmed) return;

    setDeleting(true);
    try {
      await deleteLesson(lessonId);

      // 목록에서 제거
      setLessons(lessons.filter(l => l.id !== lessonId));
      setFilteredLessons(filteredLessons.filter(l => l.id !== lessonId));

      // 상세 보기 닫기
      if (selectedLesson?.id === lessonId) {
        setSelectedLesson(null);
      }

      toast({
        title: '삭제 완료',
        description: '수업이 삭제되었습니다.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: '삭제 실패',
        description: error instanceof Error ? error.message : '삭제 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    } finally {
      setDeleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
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

  // 페이지네이션
  const totalPages = Math.ceil(filteredLessons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentLessons = filteredLessons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl gradient-primary">
            <FolderOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">내 수업 목록</h1>
            <p className="text-muted-foreground text-sm">
              내가 생성한 수업 자료 ({lessons.length}개)
            </p>
          </div>
        </div>
        <Link href="/lesson/new">
          <Button className="gradient-primary text-white shadow-lg shadow-primary/25">
            <Sparkles className="h-4 w-4 mr-2" />
            새 수업 만들기
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="수업 제목 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 h-10 bg-secondary/50 border-0"
              />
            </div>
            <div className="flex gap-2">
              <Select value={gradeFilter} onValueChange={setGradeFilter}>
                <SelectTrigger className="w-28 h-10 bg-secondary/50 border-0">
                  <GraduationCap className="h-4 w-4 mr-1 text-muted-foreground" />
                  <SelectValue placeholder="학년" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  {[1, 2, 3, 4, 5, 6].map((grade) => (
                    <SelectItem key={grade} value={grade.toString()}>
                      {grade}학년
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                <SelectTrigger className="w-28 h-10 bg-secondary/50 border-0">
                  <SelectValue placeholder="과목" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
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

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 게시판 목록 */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardContent className="p-0">
              {loading ? (
                <div className="p-8 text-center">
                  <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
                  <p className="text-sm text-muted-foreground mt-2">불러오는 중...</p>
                </div>
              ) : filteredLessons.length === 0 ? (
                <div className="p-12 text-center">
                  <FileText className="h-12 w-12 mx-auto text-muted-foreground/30 mb-3" />
                  <h3 className="font-semibold mb-2">
                    {lessons.length === 0 ? '아직 생성된 수업이 없습니다' : '검색 결과가 없습니다'}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {lessons.length === 0 ? 'AI와 함께 첫 번째 수업을 만들어보세요.' : '다른 검색 조건을 시도해보세요.'}
                  </p>
                  {lessons.length === 0 && (
                    <Link href="/lesson/new">
                      <Button className="gradient-primary text-white">
                        <Plus className="h-4 w-4 mr-2" />
                        첫 수업 만들기
                      </Button>
                    </Link>
                  )}
                </div>
              ) : (
                <>
                  {/* 테이블 헤더 */}
                  <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-secondary/50 text-sm font-medium text-muted-foreground border-b">
                    <div className="col-span-1 text-center">번호</div>
                    <div className="col-span-5">제목</div>
                    <div className="col-span-2 text-center">학년/과목</div>
                    <div className="col-span-2 text-center">상태</div>
                    <div className="col-span-2 text-center">등록일</div>
                  </div>

                  {/* 테이블 내용 */}
                  <div className="divide-y">
                    {currentLessons.map((lesson, index) => (
                      <div
                        key={lesson.id}
                        className={`grid grid-cols-12 gap-2 px-4 py-3 hover:bg-secondary/30 transition-colors cursor-pointer items-center ${
                          selectedLesson?.id === lesson.id ? 'bg-primary/5' : ''
                        }`}
                        onClick={() => handleViewDetail(lesson.id)}
                      >
                        <div className="col-span-1 text-center text-sm text-muted-foreground">
                          {filteredLessons.length - startIndex - index}
                        </div>
                        <div className="col-span-5">
                          <p className="text-sm font-medium truncate hover:text-primary">
                            {lesson.title}
                          </p>
                        </div>
                        <div className="col-span-2 text-center">
                          <Badge variant="outline" className="text-xs">
                            {lesson.grade}학년 {lesson.subject_id}
                          </Badge>
                        </div>
                        <div className="col-span-2 text-center">
                          <Badge variant="outline" className={`text-xs ${getStatusStyle(lesson.status)}`}>
                            {getStatusLabel(lesson.status)}
                          </Badge>
                        </div>
                        <div className="col-span-2 text-center text-xs text-muted-foreground">
                          {formatDate(lesson.created_at)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 페이지네이션 */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 p-4 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-muted-foreground px-2">
                        {currentPage} / {totalPages}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 상세 보기 패널 */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm sticky top-4">
            <CardContent className="p-4">
              {loadingDetail ? (
                <div className="py-12 text-center">
                  <Loader2 className="h-6 w-6 animate-spin mx-auto text-primary" />
                  <p className="text-sm text-muted-foreground mt-2">로딩 중...</p>
                </div>
              ) : selectedLesson ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedLesson.title}</h3>
                    {selectedLesson.unit_id && (
                      <p className="text-sm text-muted-foreground mt-1">{selectedLesson.unit_id}</p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {selectedLesson.grade}학년
                    </Badge>
                    <Badge variant="outline" className="bg-secondary">
                      {selectedLesson.subject_id}
                    </Badge>
                    <Badge variant="outline" className={getStatusStyle(selectedLesson.status)}>
                      {getStatusLabel(selectedLesson.status)}
                    </Badge>
                  </div>

                  {/* 수업 시간 */}
                  {selectedLesson.duration && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {selectedLesson.duration}분 ({selectedLesson.class_period || 1}차시)
                    </div>
                  )}

                  {/* 핵심 개념 */}
                  {selectedLesson.core_concepts && selectedLesson.core_concepts.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">핵심 개념</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedLesson.core_concepts.map((concept, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-violet-500/10 text-violet-600 rounded-md"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 학습 목표 */}
                  {selectedLesson.learning_objectives && selectedLesson.learning_objectives.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">학습 목표</p>
                      <ul className="text-sm space-y-1">
                        {selectedLesson.learning_objectives.slice(0, 2).map((obj, i) => (
                          <li key={i} className="text-muted-foreground text-xs">
                            • {obj}
                          </li>
                        ))}
                        {selectedLesson.learning_objectives.length > 2 && (
                          <li className="text-xs text-muted-foreground/70">
                            +{selectedLesson.learning_objectives.length - 2}개 더
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {/* 자료 현황 */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">생성 자료</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { icon: FileText, label: '지도안', color: 'text-violet-600 bg-violet-500/10' },
                        { icon: BookOpen, label: '대본', color: 'text-blue-600 bg-blue-500/10' },
                        { icon: Presentation, label: 'PPT', color: 'text-orange-600 bg-orange-500/10' },
                        { icon: FileSpreadsheet, label: '학습지', color: 'text-green-600 bg-green-500/10' },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${item.color}`}
                        >
                          <item.icon className="h-3 w-3" />
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 메타 정보 */}
                  <div className="text-xs text-muted-foreground pt-2 border-t">
                    생성일: {formatDate(selectedLesson.created_at)}
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex gap-2">
                      <Link href={`/lesson/${selectedLesson.id}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full">
                          <Download className="h-4 w-4 mr-1" />
                          상세보기
                        </Button>
                      </Link>
                      <Link href={`/lesson/${selectedLesson.id}/edit`} className="flex-1">
                        <Button size="sm" className="w-full gradient-primary text-white">
                          <Edit3 className="h-4 w-4 mr-1" />
                          편집
                        </Button>
                      </Link>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => handleDelete(selectedLesson.id, selectedLesson.title)}
                      disabled={deleting}
                    >
                      {deleting ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-1" />
                      ) : (
                        <Trash2 className="h-4 w-4 mr-1" />
                      )}
                      삭제
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center">
                  <Eye className="h-8 w-8 mx-auto text-muted-foreground/30 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    목록에서 수업을 선택하면<br />상세 정보가 표시됩니다
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
