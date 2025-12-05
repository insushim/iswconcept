'use client';

import { useEffect, useState, Suspense } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import {
  ArrowLeft,
  Save,
  FileText,
  Presentation,
  FileSpreadsheet,
  BookOpen,
  Plus,
  Trash2,
  GripVertical,
  ChevronDown,
  ChevronUp,
  Loader2,
  Globe,
  Lock,
} from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { CBI_STAGES, type CBIStageId } from '@/lib/constants/cbi-stages';
import { getLesson, getMaterialsByLesson, updateLesson, updateMaterialContent, toggleLessonPublic } from '@/lib/firebase/firestore';
import type { Lesson } from '@/types/lesson';
import type { Material } from '@/types/material';

function EditPageContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('material') || 'lesson';

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState(initialTab);

  // 수정된 데이터 상태
  const [editedLesson, setEditedLesson] = useState<Partial<Lesson>>({});
  const [editedMaterials, setEditedMaterials] = useState<Record<string, unknown>>({});

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
        setEditedLesson(lessonData);

        // 자료 내용 초기화
        const materialContents: Record<string, unknown> = {};
        for (const material of materialsData) {
          materialContents[material.type] = material.content;
        }
        setEditedMaterials(materialContents);
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

  const handleSave = async () => {
    if (!lesson) return;

    setSaving(true);
    try {
      // 수업 정보 저장 (Firebase)
      await updateLesson(lesson.id, editedLesson);

      // 자료 저장 (Firebase)
      for (const [type, content] of Object.entries(editedMaterials)) {
        const material = materials.find((m) => m.type === type);
        if (material && content) {
          await updateMaterialContent(material.id, content);
        }
      }

      toast({
        title: '저장 완료',
        description: '모든 변경사항이 저장되었습니다.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: '저장 실패',
        description: error instanceof Error ? error.message : '저장 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleTogglePublic = async () => {
    if (!lesson) return;

    try {
      const newPublicState = !editedLesson.is_public;
      await toggleLessonPublic(lesson.id, newPublicState);
      setEditedLesson({ ...editedLesson, is_public: newPublicState });

      toast({
        title: newPublicState ? '공개 설정됨' : '비공개 설정됨',
        description: newPublicState
          ? '이제 다른 선생님들이 이 자료를 볼 수 있습니다.'
          : '이 자료는 본인만 볼 수 있습니다.',
        variant: 'success',
      });
    } catch (error) {
      toast({
        title: '설정 실패',
        description: '공개 설정 변경 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="p-4 rounded-2xl gradient-primary animate-pulse">
            <Loader2 className="h-8 w-8 text-white animate-spin" />
          </div>
          <p className="text-sm text-muted-foreground">수업 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return null;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* 헤더 */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.back()}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">수업 편집</h1>
            <p className="text-muted-foreground">{lesson.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* 공개/비공개 토글 */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50">
            {editedLesson.is_public ? (
              <Globe className="h-4 w-4 text-green-600" />
            ) : (
              <Lock className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-sm">{editedLesson.is_public ? '공개' : '비공개'}</span>
            <Switch
              checked={editedLesson.is_public || false}
              onCheckedChange={handleTogglePublic}
            />
          </div>

          <Link href={`/lesson/${lesson.id}`}>
            <Button variant="outline">취소</Button>
          </Link>
          <Button
            onClick={handleSave}
            disabled={saving}
            className="gradient-primary text-white"
          >
            {saving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                저장 중...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                저장
              </>
            )}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full max-w-2xl">
          <TabsTrigger value="lesson" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">기본정보</span>
          </TabsTrigger>
          <TabsTrigger value="stages" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">7단계</span>
          </TabsTrigger>
          <TabsTrigger value="lesson_plan" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">지도안</span>
          </TabsTrigger>
          <TabsTrigger value="pptx" className="flex items-center gap-1">
            <Presentation className="h-4 w-4" />
            <span className="hidden sm:inline">PPT</span>
          </TabsTrigger>
          <TabsTrigger value="worksheet" className="flex items-center gap-1">
            <FileSpreadsheet className="h-4 w-4" />
            <span className="hidden sm:inline">학습지</span>
          </TabsTrigger>
        </TabsList>

        {/* 기본정보 탭 */}
        <TabsContent value="lesson" className="space-y-4">
          <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>기본 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">수업 제목</Label>
                  <Input
                    id="title"
                    value={editedLesson.title || ''}
                    onChange={(e) =>
                      setEditedLesson({ ...editedLesson, title: e.target.value })
                    }
                    className="h-11 bg-secondary/50 border-0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">수업 시간 (분)</Label>
                  <Input
                    id="duration"
                    type="number"
                    value={editedLesson.duration || 40}
                    onChange={(e) =>
                      setEditedLesson({
                        ...editedLesson,
                        duration: parseInt(e.target.value),
                      })
                    }
                    className="h-11 bg-secondary/50 border-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>학습 목표</Label>
                {editedLesson.learning_objectives?.map((obj, i) => (
                  <div key={i} className="flex gap-2">
                    <Input
                      value={obj}
                      onChange={(e) => {
                        const newObjectives = [...(editedLesson.learning_objectives || [])];
                        newObjectives[i] = e.target.value;
                        setEditedLesson({ ...editedLesson, learning_objectives: newObjectives });
                      }}
                      className="bg-secondary/50 border-0"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const newObjectives = editedLesson.learning_objectives?.filter(
                          (_, idx) => idx !== i
                        );
                        setEditedLesson({ ...editedLesson, learning_objectives: newObjectives });
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditedLesson({
                      ...editedLesson,
                      learning_objectives: [...(editedLesson.learning_objectives || []), ''],
                    });
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  목표 추가
                </Button>
              </div>

              <div className="space-y-2">
                <Label>핵심 개념</Label>
                <div className="flex flex-wrap gap-2">
                  {editedLesson.core_concepts?.map((concept, i) => (
                    <Badge key={i} variant="secondary" className="flex items-center gap-1">
                      {concept}
                      <button
                        onClick={() => {
                          const newConcepts = editedLesson.core_concepts?.filter(
                            (_, idx) => idx !== i
                          );
                          setEditedLesson({ ...editedLesson, core_concepts: newConcepts });
                        }}
                        className="ml-1 hover:text-destructive"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                  <Input
                    placeholder="새 개념 입력 후 Enter"
                    className="w-40 h-8 bg-secondary/50 border-0"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        const value = e.currentTarget.value.trim();
                        if (value) {
                          setEditedLesson({
                            ...editedLesson,
                            core_concepts: [...(editedLesson.core_concepts || []), value],
                          });
                          e.currentTarget.value = '';
                        }
                      }
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>핵심 아이디어 (일반화)</Label>
                {editedLesson.big_ideas?.map((idea, i) => (
                  <div key={i} className="flex gap-2">
                    <Textarea
                      value={idea}
                      onChange={(e) => {
                        const newIdeas = [...(editedLesson.big_ideas || [])];
                        newIdeas[i] = e.target.value;
                        setEditedLesson({ ...editedLesson, big_ideas: newIdeas });
                      }}
                      className="min-h-[60px] bg-secondary/50 border-0"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const newIdeas = editedLesson.big_ideas?.filter((_, idx) => idx !== i);
                        setEditedLesson({ ...editedLesson, big_ideas: newIdeas });
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setEditedLesson({
                      ...editedLesson,
                      big_ideas: [...(editedLesson.big_ideas || []), ''],
                    });
                  }}
                >
                  <Plus className="mr-2 h-4 w-4" />
                  아이디어 추가
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 안내 질문 편집 */}
          <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>안내 질문</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <QuestionsEditor
                title="사실적 질문"
                questions={editedLesson.factual_questions || []}
                onChange={(questions) =>
                  setEditedLesson({ ...editedLesson, factual_questions: questions })
                }
              />
              <QuestionsEditor
                title="개념적 질문"
                questions={editedLesson.conceptual_questions || []}
                onChange={(questions) =>
                  setEditedLesson({ ...editedLesson, conceptual_questions: questions })
                }
              />
              <QuestionsEditor
                title="논쟁적 질문"
                questions={editedLesson.debatable_questions || []}
                onChange={(questions) =>
                  setEditedLesson({ ...editedLesson, debatable_questions: questions })
                }
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* 7단계 탭 */}
        <TabsContent value="stages" className="space-y-4">
          {(Object.keys(CBI_STAGES) as CBIStageId[]).map((stageId) => (
            <StageEditor
              key={stageId}
              stageId={stageId}
              lesson={editedLesson as Lesson}
              onChange={(stageData) => {
                const stageKey = `stage_${stageId}` as keyof Lesson;
                setEditedLesson({ ...editedLesson, [stageKey]: stageData });
              }}
            />
          ))}
        </TabsContent>

        {/* 지도안 탭 */}
        <TabsContent value="lesson_plan" className="space-y-4">
          <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>교수학습 지도안 편집</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                지도안은 수업 기본정보와 7단계 내용을 기반으로 자동 생성됩니다.
                위의 탭에서 내용을 수정하면 지도안에 반영됩니다.
              </p>
              <Button variant="outline" disabled>
                지도안 미리보기
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PPT 탭 */}
        <TabsContent value="pptx" className="space-y-4">
          <PPTEditor
            content={editedMaterials.pptx as { slides: PPTSlide[] } | undefined}
            onChange={(content) => setEditedMaterials({ ...editedMaterials, pptx: content })}
          />
        </TabsContent>

        {/* 학습지 탭 */}
        <TabsContent value="worksheet" className="space-y-4">
          <WorksheetEditor
            content={editedMaterials.worksheet as WorksheetContent | undefined}
            onChange={(content) =>
              setEditedMaterials({ ...editedMaterials, worksheet: content })
            }
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default function LessonEditPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-2xl gradient-primary animate-pulse">
              <Loader2 className="h-8 w-8 text-white animate-spin" />
            </div>
            <p className="text-sm text-muted-foreground">로딩 중...</p>
          </div>
        </div>
      }
    >
      <EditPageContent />
    </Suspense>
  );
}

// 질문 편집 컴포넌트
function QuestionsEditor({
  title,
  questions,
  onChange,
}: {
  title: string;
  questions: string[];
  onChange: (questions: string[]) => void;
}) {
  return (
    <div className="space-y-2">
      <Label>{title}</Label>
      {questions.map((q, i) => (
        <div key={i} className="flex gap-2">
          <Input
            value={q}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[i] = e.target.value;
              onChange(newQuestions);
            }}
            className="bg-secondary/50 border-0"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onChange(questions.filter((_, idx) => idx !== i))}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={() => onChange([...questions, ''])}>
        <Plus className="mr-2 h-4 w-4" />
        질문 추가
      </Button>
    </div>
  );
}

// 단계 편집 컴포넌트
function StageEditor({
  stageId,
  lesson,
  onChange,
}: {
  stageId: CBIStageId;
  lesson: Lesson;
  onChange: (stageData: Lesson['stage_engage']) => void;
}) {
  const stageInfo = CBI_STAGES[stageId];
  const stageKey = `stage_${stageId}` as keyof Lesson;
  const stageData = lesson[stageKey] as Lesson['stage_engage'];
  const [isExpanded, setIsExpanded] = useState(false);

  if (!stageData) return null;

  return (
    <Card className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
      <CardHeader
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ borderLeftWidth: 4, borderLeftColor: stageInfo.color }}
      >
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>{stageInfo.emoji}</span>
            <span>{stageInfo.name}</span>
            <span className="text-sm text-muted-foreground">({stageInfo.nameEn})</span>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </CardTitle>
      </CardHeader>

      {isExpanded && (
        <CardContent className="space-y-4">
          {/* 시간 */}
          <div className="space-y-2">
            <Label>소요 시간 (분)</Label>
            <Input
              type="number"
              value={stageData.duration || stageInfo.defaultDuration}
              onChange={(e) =>
                onChange({ ...stageData, duration: parseInt(e.target.value) })
              }
              className="w-24 bg-secondary/50 border-0"
            />
          </div>

          {/* 목표 */}
          <div className="space-y-2">
            <Label>단계 목표</Label>
            {stageData.objectives?.map((obj, i) => (
              <div key={i} className="flex gap-2">
                <Input
                  value={obj}
                  onChange={(e) => {
                    const newObjectives = [...(stageData.objectives || [])];
                    newObjectives[i] = e.target.value;
                    onChange({ ...stageData, objectives: newObjectives });
                  }}
                  className="bg-secondary/50 border-0"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    const newObjectives = stageData.objectives?.filter((_, idx) => idx !== i);
                    onChange({ ...stageData, objectives: newObjectives });
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onChange({
                  ...stageData,
                  objectives: [...(stageData.objectives || []), ''],
                })
              }
            >
              <Plus className="mr-2 h-4 w-4" />
              목표 추가
            </Button>
          </div>

          {/* 활동 */}
          <div className="space-y-2">
            <Label>활동</Label>
            {stageData.activities?.map((activity, i) => (
              <Card key={i} className="p-3 bg-secondary/30">
                <div className="flex items-start gap-2">
                  <GripVertical className="h-5 w-5 text-muted-foreground mt-2" />
                  <div className="flex-1 space-y-2">
                    <Input
                      placeholder="활동 제목"
                      value={activity.title}
                      onChange={(e) => {
                        const newActivities = [...(stageData.activities || [])];
                        newActivities[i] = { ...activity, title: e.target.value };
                        onChange({ ...stageData, activities: newActivities });
                      }}
                      className="bg-background/50 border-0"
                    />
                    <Textarea
                      placeholder="활동 설명"
                      value={activity.description}
                      onChange={(e) => {
                        const newActivities = [...(stageData.activities || [])];
                        newActivities[i] = { ...activity, description: e.target.value };
                        onChange({ ...stageData, activities: newActivities });
                      }}
                      className="bg-background/50 border-0"
                    />
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="시간(분)"
                        value={activity.duration}
                        onChange={(e) => {
                          const newActivities = [...(stageData.activities || [])];
                          newActivities[i] = {
                            ...activity,
                            duration: parseInt(e.target.value),
                          };
                          onChange({ ...stageData, activities: newActivities });
                        }}
                        className="w-24 bg-background/50 border-0"
                      />
                      <Input
                        placeholder="활동 유형 (개별/모둠/전체)"
                        value={activity.type}
                        onChange={(e) => {
                          const newActivities = [...(stageData.activities || [])];
                          newActivities[i] = { ...activity, type: e.target.value as 'individual' | 'pair' | 'group' | 'whole_class' };
                          onChange({ ...stageData, activities: newActivities });
                        }}
                        className="bg-background/50 border-0"
                      />
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const newActivities = stageData.activities?.filter((_, idx) => idx !== i);
                      onChange({ ...stageData, activities: newActivities });
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                onChange({
                  ...stageData,
                  activities: [
                    ...(stageData.activities || []),
                    { title: '', description: '', duration: 5, type: 'individual' as const, order: (stageData.activities?.length || 0) + 1, instructions: [] },
                  ],
                })
              }
            >
              <Plus className="mr-2 h-4 w-4" />
              활동 추가
            </Button>
          </div>

          {/* 교사/학생 행동 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>교사 행동</Label>
              {stageData.teacherActions?.map((action, i) => (
                <div key={i} className="flex gap-2">
                  <Input
                    value={action}
                    onChange={(e) => {
                      const newActions = [...(stageData.teacherActions || [])];
                      newActions[i] = e.target.value;
                      onChange({ ...stageData, teacherActions: newActions });
                    }}
                    className="bg-secondary/50 border-0"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const newActions = stageData.teacherActions?.filter((_, idx) => idx !== i);
                      onChange({ ...stageData, teacherActions: newActions });
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  onChange({
                    ...stageData,
                    teacherActions: [...(stageData.teacherActions || []), ''],
                  })
                }
              >
                <Plus className="mr-2 h-4 w-4" />
                추가
              </Button>
            </div>

            <div className="space-y-2">
              <Label>학생 행동</Label>
              {stageData.studentActions?.map((action, i) => (
                <div key={i} className="flex gap-2">
                  <Input
                    value={action}
                    onChange={(e) => {
                      const newActions = [...(stageData.studentActions || [])];
                      newActions[i] = e.target.value;
                      onChange({ ...stageData, studentActions: newActions });
                    }}
                    className="bg-secondary/50 border-0"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const newActions = stageData.studentActions?.filter((_, idx) => idx !== i);
                      onChange({ ...stageData, studentActions: newActions });
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  onChange({
                    ...stageData,
                    studentActions: [...(stageData.studentActions || []), ''],
                  })
                }
              >
                <Plus className="mr-2 h-4 w-4" />
                추가
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

// PPT 슬라이드 타입
interface PPTSlide {
  id: string;
  type: string;
  title: string;
  content: string[];
  order: number;
  stageId?: string;
  notes?: string;
}

// PPT 편집 컴포넌트
function PPTEditor({
  content,
  onChange,
}: {
  content?: { slides: PPTSlide[] };
  onChange: (content: { slides: PPTSlide[] }) => void;
}) {
  const slides = content?.slides || [];

  const addSlide = () => {
    const newSlide: PPTSlide = {
      id: `slide-${Date.now()}`,
      type: 'content',
      title: '새 슬라이드',
      content: [],
      order: slides.length + 1,
    };
    onChange({ slides: [...slides, newSlide] });
  };

  const updateSlide = (index: number, updates: Partial<PPTSlide>) => {
    const newSlides = [...slides];
    newSlides[index] = { ...newSlides[index], ...updates };
    onChange({ slides: newSlides });
  };

  const deleteSlide = (index: number) => {
    const newSlides = slides.filter((_, i) => i !== index);
    onChange({ slides: newSlides });
  };

  const moveSlide = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= slides.length) return;

    const newSlides = [...slides];
    [newSlides[index], newSlides[newIndex]] = [newSlides[newIndex], newSlides[index]];
    onChange({ slides: newSlides });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">PPT 슬라이드 편집</h3>
        <Button onClick={addSlide} className="gradient-primary text-white">
          <Plus className="mr-2 h-4 w-4" />
          슬라이드 추가
        </Button>
      </div>

      {slides.map((slide, index) => (
        <Card key={slide.id} className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base flex items-center gap-2">
                <span className="text-muted-foreground">#{index + 1}</span>
                <Badge variant="outline">{slide.type}</Badge>
              </CardTitle>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => moveSlide(index, 'up')}
                  disabled={index === 0}
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => moveSlide(index, 'down')}
                  disabled={index === slides.length - 1}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => deleteSlide(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label>슬라이드 제목</Label>
              <Input
                value={slide.title}
                onChange={(e) => updateSlide(index, { title: e.target.value })}
                className="bg-secondary/50 border-0"
              />
            </div>
            <div className="space-y-2">
              <Label>내용 (줄바꿈으로 구분)</Label>
              <Textarea
                value={slide.content.join('\n')}
                onChange={(e) =>
                  updateSlide(index, {
                    content: e.target.value.split('\n').filter((line) => line.trim()),
                  })
                }
                className="min-h-[100px] bg-secondary/50 border-0"
              />
            </div>
            <div className="space-y-2">
              <Label>발표자 노트</Label>
              <Textarea
                value={slide.notes || ''}
                onChange={(e) => updateSlide(index, { notes: e.target.value })}
                placeholder="이 슬라이드에 대한 메모..."
                className="min-h-[60px] bg-secondary/50 border-0"
              />
            </div>
          </CardContent>
        </Card>
      ))}

      {slides.length === 0 && (
        <Card className="p-8 text-center border-0 shadow-sm bg-card/80 backdrop-blur-sm">
          <p className="text-muted-foreground mb-4">아직 슬라이드가 없습니다.</p>
          <Button onClick={addSlide} className="gradient-primary text-white">
            <Plus className="mr-2 h-4 w-4" />
            첫 슬라이드 만들기
          </Button>
        </Card>
      )}
    </div>
  );
}

// 학습지 타입
interface WorksheetItem {
  id: string;
  type: 'question' | 'multiple_choice' | 'fill_blank' | 'diagram';
  number: number;
  content: string;
  options?: string[];
  answerSpace?: boolean;
  answerLines?: number;
}

interface WorksheetSection {
  id: string;
  title: string;
  instructions?: string;
  items: WorksheetItem[];
}

interface WorksheetContent {
  title: string;
  sections: WorksheetSection[];
}

// 학습지 편집 컴포넌트
function WorksheetEditor({
  content,
  onChange,
}: {
  content?: WorksheetContent;
  onChange: (content: WorksheetContent) => void;
}) {
  const sections = content?.sections || [];
  const title = content?.title || '학습지';

  const addSection = () => {
    const newSection: WorksheetSection = {
      id: `section-${Date.now()}`,
      title: '새 섹션',
      instructions: '',
      items: [],
    };
    onChange({ title, sections: [...sections, newSection] });
  };

  const updateSection = (index: number, updates: Partial<WorksheetSection>) => {
    const newSections = [...sections];
    newSections[index] = { ...newSections[index], ...updates };
    onChange({ title, sections: newSections });
  };

  const deleteSection = (index: number) => {
    onChange({ title, sections: sections.filter((_, i) => i !== index) });
  };

  const addItem = (sectionIndex: number, type: WorksheetItem['type']) => {
    const section = sections[sectionIndex];
    const newItem: WorksheetItem = {
      id: `item-${Date.now()}`,
      type,
      number: section.items.length + 1,
      content: '',
      answerSpace: true,
      answerLines: 3,
    };

    if (type === 'multiple_choice') {
      newItem.options = ['① ', '② ', '③ ', '④ '];
    }

    const newSections = [...sections];
    newSections[sectionIndex] = {
      ...section,
      items: [...section.items, newItem],
    };
    onChange({ title, sections: newSections });
  };

  const updateItem = (sectionIndex: number, itemIndex: number, updates: Partial<WorksheetItem>) => {
    const newSections = [...sections];
    const items = [...newSections[sectionIndex].items];
    items[itemIndex] = { ...items[itemIndex], ...updates };
    newSections[sectionIndex] = { ...newSections[sectionIndex], items };
    onChange({ title, sections: newSections });
  };

  const deleteItem = (sectionIndex: number, itemIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex] = {
      ...newSections[sectionIndex],
      items: newSections[sectionIndex].items.filter((_, i) => i !== itemIndex),
    };
    onChange({ title, sections: newSections });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="space-y-2 flex-1 mr-4">
          <Label>학습지 제목</Label>
          <Input
            value={title}
            onChange={(e) => onChange({ title: e.target.value, sections })}
            className="bg-secondary/50 border-0"
          />
        </div>
        <Button onClick={addSection} className="mt-6 gradient-primary text-white">
          <Plus className="mr-2 h-4 w-4" />
          섹션 추가
        </Button>
      </div>

      {sections.map((section, sectionIndex) => (
        <Card key={section.id} className="border-0 shadow-sm bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Input
                value={section.title}
                onChange={(e) => updateSection(sectionIndex, { title: e.target.value })}
                className="font-medium text-lg border-0 p-0 focus-visible:ring-0 bg-transparent"
              />
              <Button variant="ghost" size="icon" onClick={() => deleteSection(sectionIndex)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <Textarea
              value={section.instructions || ''}
              onChange={(e) => updateSection(sectionIndex, { instructions: e.target.value })}
              placeholder="섹션 안내문..."
              className="text-sm text-muted-foreground bg-secondary/50 border-0"
            />
          </CardHeader>
          <CardContent className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <div key={item.id} className="flex gap-2 p-3 bg-secondary/30 rounded-lg">
                <span className="font-medium">{item.number}.</span>
                <div className="flex-1 space-y-2">
                  <Textarea
                    value={item.content}
                    onChange={(e) =>
                      updateItem(sectionIndex, itemIndex, { content: e.target.value })
                    }
                    placeholder="문제 내용..."
                    className="min-h-[60px] bg-background/50 border-0"
                  />

                  {item.type === 'multiple_choice' && (
                    <div className="space-y-1">
                      {item.options?.map((opt, optIndex) => (
                        <Input
                          key={optIndex}
                          value={opt}
                          onChange={(e) => {
                            const newOptions = [...(item.options || [])];
                            newOptions[optIndex] = e.target.value;
                            updateItem(sectionIndex, itemIndex, { options: newOptions });
                          }}
                          className="text-sm bg-background/50 border-0"
                        />
                      ))}
                    </div>
                  )}

                  <Badge variant="outline">{item.type}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteItem(sectionIndex, itemIndex)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}

            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => addItem(sectionIndex, 'question')}>
                <Plus className="mr-1 h-3 w-3" />
                서술형
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addItem(sectionIndex, 'multiple_choice')}
              >
                <Plus className="mr-1 h-3 w-3" />
                선다형
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => addItem(sectionIndex, 'fill_blank')}
              >
                <Plus className="mr-1 h-3 w-3" />
                빈칸
              </Button>
              <Button variant="outline" size="sm" onClick={() => addItem(sectionIndex, 'diagram')}>
                <Plus className="mr-1 h-3 w-3" />
                그림
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {sections.length === 0 && (
        <Card className="p-8 text-center border-0 shadow-sm bg-card/80 backdrop-blur-sm">
          <p className="text-muted-foreground mb-4">아직 섹션이 없습니다.</p>
          <Button onClick={addSection} className="gradient-primary text-white">
            <Plus className="mr-2 h-4 w-4" />
            첫 섹션 만들기
          </Button>
        </Card>
      )}
    </div>
  );
}
