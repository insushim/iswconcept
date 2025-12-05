'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Edit,
  Download,
  FileText,
  Presentation,
  FileSpreadsheet,
  BookOpen,
  Clock,
  Target,
  Lightbulb,
  HelpCircle,
  Sparkles,
  Loader2,
  Calendar,
  Star,
  Users,
  CheckSquare,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { CBI_STAGES, type CBIStageId } from '@/lib/constants/cbi-stages';
import { getLesson, getMaterialsByLesson, createMaterial } from '@/lib/firebase/firestore';
import { auth } from '@/lib/firebase/config';
import type { Lesson } from '@/types/lesson';
import type { Material } from '@/types/material';

export default function LessonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const lessonId = params.id as string;

        // Firebase에서 직접 데이터 가져오기
        const lessonData = await getLesson(lessonId);
        if (!lessonData) {
          throw new Error('수업을 찾을 수 없습니다.');
        }

        const materialsData = await getMaterialsByLesson(lessonId);

        setLesson(lessonData);
        setMaterials(materialsData);
      } catch (error) {
        toast({
          title: '오류',
          description: error instanceof Error ? error.message : '수업을 불러올 수 없습니다.',
          variant: 'destructive',
        });
        router.push('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchLesson();
    }
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">수업 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return null;
  }

  const getStageData = (stageId: CBIStageId) => {
    const stageKey = `stage_${stageId}` as keyof Lesson;
    return lesson[stageKey] as Lesson['stage_engage'];
  };

  return (
    <div className="space-y-4 md:space-y-6">
      {/* 헤더 */}
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3 md:gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()} className="flex-shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="min-w-0">
            <h1 className="text-lg md:text-2xl font-bold truncate">{lesson.title}</h1>
            <div className="flex flex-wrap items-center gap-1 md:gap-2 mt-1 text-sm md:text-base text-muted-foreground">
              <span>{lesson.grade}학년</span>
              <span>·</span>
              <span>{lesson.subject_id}</span>
              <span>·</span>
              <span>총 {lesson.class_period}차시</span>
              <Badge variant={lesson.status === 'completed' ? 'default' : 'secondary'} className="text-xs">
                {lesson.status === 'completed' ? '완료' : lesson.status === 'generated' ? '생성됨' : '초안'}
              </Badge>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-12 md:ml-0">
          <Link href={`/lesson/${lesson.id}/edit`}>
            <Button variant="outline" size="sm" className="md:size-default">
              <Edit className="mr-1 md:mr-2 h-4 w-4" />
              <span className="hidden xs:inline">편집</span>
            </Button>
          </Link>
          <DownloadMenu lesson={lesson} materials={materials} />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-3 md:space-y-4">
        <TabsList className="grid grid-cols-4 w-full max-w-xl h-9 md:h-10">
          <TabsTrigger value="overview" className="text-xs md:text-sm">개요</TabsTrigger>
          <TabsTrigger value="stages" className="text-xs md:text-sm">7단계</TabsTrigger>
          <TabsTrigger value="materials" className="text-xs md:text-sm">자료</TabsTrigger>
          <TabsTrigger value="assessment" className="text-xs md:text-sm">평가</TabsTrigger>
        </TabsList>

        {/* 개요 탭 */}
        <TabsContent value="overview" className="space-y-3 md:space-y-4">
          {/* 단원 개요 (새로운 섹션) */}
          {lesson.unit_overview && (
            <Card className="border-indigo-200 bg-indigo-50/30">
              <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <Star className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
                  단원 개요
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0 space-y-4">
                {/* 개념 렌즈 & 핵심 아이디어 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-white rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">개념 렌즈</p>
                    <p className="font-medium text-sm md:text-base">{lesson.unit_overview.conceptLens}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">총 차시</p>
                    <p className="font-medium text-sm md:text-base">{lesson.unit_overview.totalPeriods}차시</p>
                  </div>
                </div>

                {/* 단원 핵심 아이디어 */}
                {lesson.unit_overview.unitKeyIdea && (
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <p className="text-xs text-purple-600 mb-1">단원 핵심 아이디어</p>
                    <p className="text-sm md:text-base">&ldquo;{lesson.unit_overview.unitKeyIdea}&rdquo;</p>
                  </div>
                )}

                {/* 설계 의도 */}
                {lesson.unit_overview.designIntent && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">단원 설계 의도</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{lesson.unit_overview.designIntent}</p>
                  </div>
                )}

                {/* 핵심 역량 */}
                {lesson.unit_overview.coreCompetencies && lesson.unit_overview.coreCompetencies.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">핵심 역량</p>
                    <div className="flex flex-wrap gap-2">
                      {lesson.unit_overview.coreCompetencies.map((comp, i) => (
                        <Badge key={i} className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                          {comp.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* 성취기준 */}
                {lesson.unit_overview.achievementStandards && lesson.unit_overview.achievementStandards.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">성취기준</p>
                    <ul className="space-y-1">
                      {lesson.unit_overview.achievementStandards.map((std, i) => (
                        <li key={i} className="text-xs md:text-sm p-2 bg-white rounded">{std}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 일반화와 탐구질문 */}
                {lesson.unit_overview.generalizations && lesson.unit_overview.generalizations.length > 0 && (
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">일반화와 탐구질문</p>
                    <div className="space-y-3">
                      {lesson.unit_overview.generalizations.map((gen, i) => (
                        <div key={i} className="p-3 bg-white rounded-lg border">
                          <p className="font-medium text-sm mb-2">{gen.generalization}</p>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                            <div className="p-2 bg-blue-50 rounded">
                              <span className="font-medium text-blue-700">(사)</span>
                              <span className="text-muted-foreground ml-1">
                                {gen.inquiryQuestions?.factual?.[0] || '-'}
                              </span>
                            </div>
                            <div className="p-2 bg-green-50 rounded">
                              <span className="font-medium text-green-700">(개)</span>
                              <span className="text-muted-foreground ml-1">
                                {gen.inquiryQuestions?.conceptual?.[0] || '-'}
                              </span>
                            </div>
                            <div className="p-2 bg-orange-50 rounded">
                              <span className="font-medium text-orange-700">(논)</span>
                              <span className="text-muted-foreground ml-1">
                                {gen.inquiryQuestions?.debatable?.[0] || '-'}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* 학습 목표 */}
          <Card>
            <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <Target className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
                학습 목표
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                {(lesson.learning_objectives || []).map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 개념 렌즈 & 빅 아이디어 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <Card>
              <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <Lightbulb className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                  개념 렌즈
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {(lesson.core_concepts || []).map((concept, i) => (
                    <Badge key={i} variant="secondary" className="text-xs md:text-sm">{concept}</Badge>
                  ))}
                </div>
                {(lesson.related_concepts || []).length > 0 && (
                  <div className="mt-3">
                    <p className="text-xs md:text-sm text-muted-foreground mb-2">관련 개념:</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {(lesson.related_concepts || []).map((concept, i) => (
                        <Badge key={i} variant="outline" className="text-xs md:text-sm">{concept}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-purple-500" />
                  핵심 아이디어 (일반화)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                <ul className="space-y-2">
                  {(lesson.big_ideas || []).map((idea, i) => (
                    <li key={i} className="p-2 md:p-3 bg-purple-50 rounded-lg text-xs md:text-sm">
                      &ldquo;{idea}&rdquo;
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 안내 질문 */}
          <Card>
            <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
              <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                <HelpCircle className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
                안내 질문
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0 md:pt-0 space-y-3 md:space-y-4">
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">(사) 사실적 질문</p>
                <ul className="list-disc list-inside space-y-1">
                  {(lesson.factual_questions || []).map((q, i) => (
                    <li key={i} className="text-xs md:text-sm">{q}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">(개) 개념적 질문</p>
                <ul className="list-disc list-inside space-y-1">
                  {(lesson.conceptual_questions || []).map((q, i) => (
                    <li key={i} className="text-xs md:text-sm">{q}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground mb-2">(논) 논쟁적 질문</p>
                <ul className="list-disc list-inside space-y-1">
                  {(lesson.debatable_questions || []).map((q, i) => (
                    <li key={i} className="text-xs md:text-sm">{q}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 7단계 탭 */}
        <TabsContent value="stages" className="space-y-3 md:space-y-4">
          {(Object.keys(CBI_STAGES) as CBIStageId[]).map((stageId) => {
            const stageInfo = CBI_STAGES[stageId];
            const stageData = getStageData(stageId);

            return (
              <Card key={stageId}>
                <CardHeader
                  className="cursor-pointer p-3 md:p-6"
                  style={{ borderLeftWidth: 4, borderLeftColor: stageInfo.color }}
                >
                  <CardTitle className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-2 text-sm md:text-base">
                      <span>{stageInfo.emoji}</span>
                      <span>{stageInfo.name}</span>
                      <span className="text-xs md:text-sm text-muted-foreground">({stageInfo.nameEn})</span>
                      <Badge
                        variant="outline"
                        className="text-xs ml-1"
                        style={{ borderColor: stageInfo.color, color: stageInfo.color }}
                      >
                        {stageInfo.phase}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground">
                      {stageData?.periods && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                          {stageData.periods}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 md:h-4 md:w-4" />
                        {stageData?.duration || stageInfo.defaultDuration}분/차시
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 md:p-6 pt-0 space-y-3 md:space-y-4">
                  {stageData && (
                    <>
                      {/* 일반화 & 탐구질문 */}
                      {(stageData.generalization || stageData.inquiryQuestion) && (
                        <div className="p-3 rounded-lg" style={{ backgroundColor: `${stageInfo.color}10` }}>
                          {stageData.generalization && (
                            <div className="mb-2">
                              <p className="text-xs font-medium" style={{ color: stageInfo.color }}>일반화</p>
                              <p className="text-xs md:text-sm">&ldquo;{stageData.generalization}&rdquo;</p>
                            </div>
                          )}
                          {stageData.inquiryQuestion && (
                            <div>
                              <p className="text-xs font-medium" style={{ color: stageInfo.color }}>탐구질문</p>
                              <p className="text-xs md:text-sm">{stageData.inquiryQuestion}</p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* 목표 */}
                      <div>
                        <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">단계 목표</p>
                        <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-muted-foreground">
                          {stageData.objectives?.map((obj: string, i: number) => (
                            <li key={i}>{obj}</li>
                          ))}
                        </ul>
                      </div>

                      {/* 활동 */}
                      {stageData.activities && stageData.activities.length > 0 && (
                        <div>
                          <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">활동</p>
                          {stageData.activities.map((activity: { title: string; description: string; duration: number; type: string }, i: number) => (
                            <div key={i} className="p-2 md:p-3 bg-gray-50 rounded-lg mb-2">
                              <p className="font-medium text-xs md:text-sm">{activity.title}</p>
                              <p className="text-xs md:text-sm text-muted-foreground">{activity.description}</p>
                              <div className="flex gap-1.5 md:gap-2 mt-2">
                                <Badge variant="outline" className="text-xs">{activity.duration}분</Badge>
                                <Badge variant="outline" className="text-xs">{activity.type}</Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* 교사/학생 행동 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <div>
                          <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">교사 행동</p>
                          <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-muted-foreground">
                            {stageData.teacherActions?.map((action: string, i: number) => (
                              <li key={i}>{action}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-medium mb-1 md:mb-2">학생 행동</p>
                          <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-muted-foreground">
                            {stageData.studentActions?.map((action: string, i: number) => (
                              <li key={i}>{action}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* 사고 루틴 */}
                      {stageData.thinkingRoutine && (
                        <div className="p-2 md:p-3 bg-indigo-50 rounded-lg">
                          <p className="text-xs md:text-sm font-medium text-indigo-900">
                            사고 루틴: {stageData.thinkingRoutine.name}
                          </p>
                          <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-indigo-700 mt-2">
                            {stageData.thinkingRoutine.steps?.map((step: string, i: number) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        {/* 자료 탭 */}
        <TabsContent value="materials" className="space-y-3 md:space-y-4">
          <MaterialsSection
            lesson={lesson}
            materials={materials}
            onMaterialCreated={(newMaterial) => setMaterials([...materials, newMaterial])}
          />
        </TabsContent>

        {/* 평가 탭 */}
        <TabsContent value="assessment" className="space-y-3 md:space-y-4">
          {/* GRASPS 수행과제 */}
          {lesson.unit_assessment?.graspsTask && (
            <Card className="border-cyan-200">
              <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <Target className="h-4 w-4 md:h-5 md:w-5 text-cyan-600" />
                  GRASPS 수행과제
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0 space-y-3">
                <div className="p-3 bg-cyan-50 rounded-lg">
                  <p className="font-medium text-sm md:text-base text-cyan-800">
                    {lesson.unit_assessment.graspsTask.taskName}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">🎯 목표 (Goal)</p>
                    <p className="text-xs md:text-sm">{lesson.unit_assessment.graspsTask.goal}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">🎭 역할 (Role)</p>
                    <p className="text-xs md:text-sm">{lesson.unit_assessment.graspsTask.role}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">👥 청중 (Audience)</p>
                    <p className="text-xs md:text-sm">{lesson.unit_assessment.graspsTask.audience}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">📍 상황 (Situation)</p>
                    <p className="text-xs md:text-sm">{lesson.unit_assessment.graspsTask.situation}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">📦 산출물 (Product)</p>
                    <p className="text-xs md:text-sm">{lesson.unit_assessment.graspsTask.product}</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">📋 기준 (Standards)</p>
                    <p className="text-xs md:text-sm">{lesson.unit_assessment.graspsTask.standards}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 3단계 루브릭 */}
          {lesson.unit_assessment?.rubric && lesson.unit_assessment.rubric.length > 0 && (
            <Card className="border-purple-200">
              <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-purple-600" />
                  평가 루브릭 (3단계)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs md:text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 px-2 md:px-3 font-medium">평가 요소</th>
                        <th className="text-left py-2 px-2 md:px-3 font-medium text-green-600">⭐⭐⭐ 잘함</th>
                        <th className="text-left py-2 px-2 md:px-3 font-medium text-yellow-600">⭐⭐ 보통</th>
                        <th className="text-left py-2 px-2 md:px-3 font-medium text-orange-600">⭐ 노력요함</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lesson.unit_assessment.rubric.map((item, i) => (
                        <tr key={i} className="border-b">
                          <td className="py-2 px-2 md:px-3">
                            <div className="font-medium">{item.criterion}</div>
                            <Badge variant="outline" className="text-xs mt-1">{item.categoryName}</Badge>
                          </td>
                          <td className="py-2 px-2 md:px-3 text-muted-foreground">{item.excellent}</td>
                          <td className="py-2 px-2 md:px-3 text-muted-foreground">{item.satisfactory}</td>
                          <td className="py-2 px-2 md:px-3 text-muted-foreground">{item.needsImprovement}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 기존 평가 계획 */}
          <Card>
            <CardHeader className="p-4 md:p-6 pb-2 md:pb-4">
              <CardTitle className="text-base md:text-lg">평가 계획</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-0 md:pt-0 space-y-3 md:space-y-4">
              {lesson.assessment_plan && (
                <>
                  {lesson.assessment_plan.formative && (
                    <div>
                      <p className="font-medium text-sm md:text-base mb-1 md:mb-2">형성 평가</p>
                      <div className="p-2 md:p-3 bg-gray-50 rounded-lg space-y-1 md:space-y-2">
                        <p className="text-xs md:text-sm">
                          <span className="font-medium">방법: </span>
                          {(lesson.assessment_plan.formative.methods || []).join(', ') || '없음'}
                        </p>
                        <p className="text-xs md:text-sm">
                          <span className="font-medium">기준: </span>
                          {(lesson.assessment_plan.formative.criteria || []).join(', ') || '없음'}
                        </p>
                      </div>
                    </div>
                  )}

                  {lesson.assessment_plan.summative && (
                    <div>
                      <p className="font-medium text-sm md:text-base mb-1 md:mb-2">총괄 평가</p>
                      <div className="p-2 md:p-3 bg-gray-50 rounded-lg space-y-1 md:space-y-2">
                        <p className="text-xs md:text-sm">
                          <span className="font-medium">방법: </span>
                          {(lesson.assessment_plan.summative.methods || []).join(', ') || '없음'}
                        </p>
                        <p className="text-xs md:text-sm">
                          <span className="font-medium">기준: </span>
                          {(lesson.assessment_plan.summative.criteria || []).join(', ') || '없음'}
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
              {!lesson.assessment_plan && !lesson.unit_assessment && (
                <p className="text-sm text-muted-foreground">평가 계획이 없습니다.</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// 다운로드 메뉴 컴포넌트
function DownloadMenu({
  lesson,
  materials,
}: {
  lesson: Lesson;
  materials: Material[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);

  const downloadFile = async (type: string) => {
    setDownloading(type);
    try {
      // 해당 타입의 자료 찾기
      const material = materials.find((m) => m.type === type);
      const materialContent = material?.content || null;

      const response = await fetch(`/api/download/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lesson,
          materialContent,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || '다운로드 실패');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;

      // 파일명 설정
      const extensions: Record<string, string> = {
        lesson_plan: '.docx',
        teaching_script: '.docx',
        pptx: '.pptx',
        worksheet: '.docx',
      };
      const names: Record<string, string> = {
        lesson_plan: '_교수학습지도안',
        teaching_script: '_수업대본',
        pptx: '_수업PPT',
        worksheet: '_학습지',
      };
      a.download = `${lesson.title}${names[type] || ''}${extensions[type] || '.docx'}`;

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: '다운로드 완료',
        description: '파일이 다운로드되었습니다.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: '다운로드 실패',
        description: error instanceof Error ? error.message : '다운로드 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    } finally {
      setDownloading(null);
      setIsOpen(false);
    }
  };

  const downloadOptions = [
    { type: 'lesson_plan', label: '교수학습 지도안', icon: FileText },
    { type: 'teaching_script', label: '수업 대본', icon: BookOpen },
    { type: 'pptx', label: 'PPT 자료', icon: Presentation },
    { type: 'worksheet', label: '학습지', icon: FileSpreadsheet },
  ];

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen(!isOpen)} size="sm" className="md:size-default">
        <Download className="mr-1 md:mr-2 h-4 w-4" />
        <span className="hidden xs:inline">다운로드</span>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 md:w-56 bg-white rounded-lg shadow-lg border z-50">
            <div className="p-1.5 md:p-2">
              <p className="text-xs md:text-sm text-muted-foreground px-2 py-1">자료 선택</p>
              {downloadOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.type}
                    onClick={() => downloadFile(option.type)}
                    disabled={downloading !== null}
                    className="w-full flex items-center gap-2 px-2 md:px-3 py-2 text-xs md:text-sm rounded-md hover:bg-gray-100 disabled:opacity-50 active:bg-gray-200"
                  >
                    {downloading === option.type ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600" />
                    ) : (
                      <Icon className="h-4 w-4" />
                    )}
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// 자료 섹션 컴포넌트
function MaterialsSection({
  lesson,
  materials,
  onMaterialCreated,
}: {
  lesson: Lesson;
  materials: Material[];
  onMaterialCreated: (material: Material) => void;
}) {
  const [generating, setGenerating] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  const materialTypes = [
    { type: 'lesson_plan', label: '교수학습 지도안', icon: FileText },
    { type: 'teaching_script', label: '수업 대본', icon: BookOpen },
    { type: 'pptx', label: 'PPT 자료', icon: Presentation },
    { type: 'worksheet', label: '탐구 학습지', icon: FileSpreadsheet },
  ];

  const hasMaterial = (type: string) => materials.some((m) => m.type === type);

  const generateMaterial = async (type: string) => {
    if (type === 'lesson_plan') {
      toast({
        title: '알림',
        description: '교수학습 지도안은 수업 생성 시 자동으로 생성됩니다.',
      });
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      toast({
        title: '로그인 필요',
        description: '자료를 생성하려면 로그인이 필요합니다.',
        variant: 'destructive',
      });
      return;
    }

    setGenerating(type);

    try {
      const idToken = await user.getIdToken();

      const response = await fetch('/api/lesson/generate-materials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          lessonId: lesson.id,
          type,
          lessonData: lesson,  // 클라이언트에서 수업 데이터 전달
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '자료 생성에 실패했습니다.');
      }

      // Firebase에 저장
      const titles: Record<string, string> = {
        teaching_script: '수업 진행 대본',
        pptx: '수업 프레젠테이션',
        worksheet: '탐구 학습지',
      };

      const materialId = await createMaterial(
        lesson.id,
        type as Material['type'],
        titles[type] || type,
        data.content
      );

      onMaterialCreated({
        id: materialId,
        lesson_id: lesson.id,
        type: type as Material['type'],
        title: titles[type] || type,
        content: data.content,
        version: 1,
        is_latest: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      toast({
        title: '생성 완료',
        description: `${titles[type]}이(가) 생성되었습니다.`,
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: '생성 실패',
        description: error instanceof Error ? error.message : '자료 생성 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    } finally {
      setGenerating(null);
    }
  };

  const downloadMaterial = async (type: string) => {
    setDownloading(type);
    try {
      const material = materials.find((m) => m.type === type);
      const materialContent = material?.content || null;

      const response = await fetch(`/api/download/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lesson,
          materialContent,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || '다운로드 실패');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;

      const extensions: Record<string, string> = {
        lesson_plan: '.docx',
        teaching_script: '.docx',
        pptx: '.pptx',
        worksheet: '.docx',
      };
      const names: Record<string, string> = {
        lesson_plan: '_교수학습지도안',
        teaching_script: '_수업대본',
        pptx: '_수업PPT',
        worksheet: '_학습지',
      };
      a.download = `${lesson.title}${names[type] || ''}${extensions[type] || '.docx'}`;

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: '다운로드 완료',
        description: '파일이 다운로드되었습니다.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: '다운로드 실패',
        description: error instanceof Error ? error.message : '다운로드 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="space-y-3 md:space-y-4">
      {/* 생성 버튼들 */}
      <Card className="border-dashed">
        <CardContent className="p-4 md:pt-6">
          <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
            아직 생성되지 않은 자료를 AI로 생성할 수 있습니다.
          </p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {materialTypes.map((item) => {
              const exists = hasMaterial(item.type);
              const isGenerating = generating === item.type;

              if (exists) return null;

              return (
                <Button
                  key={item.type}
                  variant="outline"
                  size="sm"
                  onClick={() => generateMaterial(item.type)}
                  disabled={generating !== null}
                  className="text-xs md:text-sm h-8 md:h-9"
                >
                  {isGenerating ? (
                    <Loader2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                  )}
                  <span className="hidden xs:inline">{item.label}</span>
                  <span className="xs:hidden">{item.label.split(' ')[0]}</span>
                </Button>
              );
            })}
            {materialTypes.every((item) => hasMaterial(item.type)) && (
              <p className="text-xs md:text-sm text-green-600">모든 자료가 생성되었습니다!</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 기존 자료 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        {materials.map((material) => {
          const icons: Record<string, typeof FileText> = {
            lesson_plan: FileText,
            teaching_script: BookOpen,
            pptx: Presentation,
            worksheet: FileSpreadsheet,
          };
          const Icon = icons[material.type] || FileText;
          const isDownloading = downloading === material.type;

          return (
            <Card key={material.id}>
              <CardContent className="p-3 md:pt-6 md:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3 min-w-0">
                    <div className="p-1.5 md:p-2 bg-indigo-100 rounded-lg flex-shrink-0">
                      <Icon className="h-4 w-4 md:h-5 md:w-5 text-indigo-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm md:text-base truncate">{material.title}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        버전 {material.version}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 md:gap-2 flex-shrink-0">
                    <Link href={`/lesson/${lesson.id}/edit?material=${material.type}`}>
                      <Button variant="outline" size="sm" className="h-8 w-8 p-0 md:h-9 md:w-9">
                        <Edit className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadMaterial(material.type)}
                      disabled={downloading !== null}
                      className="h-8 w-8 p-0 md:h-9 md:w-9"
                    >
                      {isDownloading ? (
                        <Loader2 className="h-3.5 w-3.5 md:h-4 md:w-4 animate-spin" />
                      ) : (
                        <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
