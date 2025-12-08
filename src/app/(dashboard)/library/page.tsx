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
  Copy,
  Loader2,
  Users,
  GraduationCap,
  Trash2,
  Shield,
  ChevronLeft,
  ChevronRight,
  Eye,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { getPublicLessonsList, copyLesson, getLesson, type PublicLessonSummary } from '@/lib/firebase/firestore';
import { auth, db } from '@/lib/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import type { Lesson } from '@/types/lesson';

const ITEMS_PER_PAGE = 15;

export default function LibraryPage() {
  const router = useRouter();
  const [lessons, setLessons] = useState<PublicLessonSummary[]>([]);
  const [filteredLessons, setFilteredLessons] = useState<PublicLessonSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [copying, setCopying] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [gradeFilter, setGradeFilter] = useState<string>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // 상세 보기 관련 상태
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        // 제목만 가져오기 (DB 사용량 최소화)
        const publicLessons = await getPublicLessonsList(100);
        setLessons(publicLessons);
        setFilteredLessons(publicLessons);

        // 현재 사용자 권한 확인
        const user = auth.currentUser;
        if (user) {
          setCurrentUserId(user.uid);
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setIsAdmin(userData.role === 'admin' || userData.role === 'super_admin');
          }
        }
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
    setCurrentPage(1); // 필터 변경 시 첫 페이지로
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

  // 삭제 권한: 슈퍼 관리자 OR 수업 생성자
  const canDelete = (lessonUserId: string) => {
    return isAdmin || currentUserId === lessonUserId;
  };

  const handleDelete = async (lessonId: string, lessonTitle: string, lessonUserId: string) => {
    const user = auth.currentUser;
    if (!user || !canDelete(lessonUserId)) {
      toast({
        title: '권한 없음',
        description: '삭제 권한이 없습니다.',
        variant: 'destructive',
      });
      return;
    }

    const confirmed = window.confirm(`"${lessonTitle}" 수업을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.`);
    if (!confirmed) return;

    setDeleting(lessonId);
    try {
      const response = await fetch(`/api/lesson/${lessonId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.uid }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '삭제에 실패했습니다.');
      }

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
      setDeleting(null);
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

  // 페이지네이션
  const totalPages = Math.ceil(filteredLessons.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentLessons = filteredLessons.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-6">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-sm">
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">공유 자료실</h1>
            <p className="text-white/70 text-sm mt-1">
              선생님들이 공유한 수업 자료 ({lessons.length}개)
            </p>
          </div>
          {isAdmin && (
            <Badge className="ml-auto bg-yellow-400/30 text-white border-0">
              <Shield className="h-3 w-3 mr-1" />
              관리자
            </Badge>
          )}
        </div>
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
                  <BookOpen className="h-12 w-12 mx-auto text-muted-foreground/30 mb-3" />
                  <p className="text-muted-foreground">
                    {lessons.length === 0 ? '공유된 자료가 없습니다' : '검색 결과가 없습니다'}
                  </p>
                </div>
              ) : (
                <>
                  {/* 테이블 헤더 */}
                  <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-secondary/50 text-sm font-medium text-muted-foreground border-b">
                    <div className="col-span-1 text-center">번호</div>
                    <div className="col-span-6">제목</div>
                    <div className="col-span-2 text-center">학년/과목</div>
                    <div className="col-span-2 text-center">등록일</div>
                    <div className="col-span-1 text-center">관리</div>
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
                        <div className="col-span-6">
                          <p className="text-sm font-medium truncate hover:text-primary">
                            {lesson.title}
                          </p>
                        </div>
                        <div className="col-span-2 text-center">
                          <Badge variant="outline" className="text-xs">
                            {lesson.grade}학년 {lesson.subject_id}
                          </Badge>
                        </div>
                        <div className="col-span-2 text-center text-xs text-muted-foreground">
                          {formatDate(lesson.created_at)}
                        </div>
                        <div className="col-span-1 text-center" onClick={(e) => e.stopPropagation()}>
                          {canDelete(lesson.user_id) && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-7 w-7 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                              onClick={() => handleDelete(lesson.id, lesson.title, lesson.user_id)}
                              disabled={deleting === lesson.id}
                            >
                              {deleting === lesson.id ? (
                                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                              ) : (
                                <Trash2 className="h-3.5 w-3.5" />
                              )}
                            </Button>
                          )}
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
                    {selectedLesson.class_period && (
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 mr-1" />
                        {selectedLesson.class_period}차시
                      </Badge>
                    )}
                  </div>

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
                        {selectedLesson.learning_objectives.map((obj, i) => (
                          <li key={i} className="text-muted-foreground">
                            • {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* 메타 정보 */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {selectedLesson.view_count || 0}
                    </span>
                    <span>{formatDate(selectedLesson.created_at)}</span>
                  </div>

                  {/* 액션 버튼 */}
                  <div className="flex gap-2 pt-2">
                    <Link href={`/lesson/${selectedLesson.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        자세히 보기
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      className="flex-1 gradient-primary text-white"
                      onClick={() => handleCopy(selectedLesson.id)}
                      disabled={copying === selectedLesson.id}
                    >
                      {copying === selectedLesson.id ? (
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
