'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { PUBLISHERS, GRADES, getSubjectsForGrade, getUnitsForSubjectAndGrade, getPublishersForSubjectAndGrade } from '@/lib/constants/curriculum-data';
import { getPeriodsForUnitName } from '@/lib/constants/all-periods';
import { Loader2, Sparkles, CheckCircle, Circle, BookOpen, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { useLessonStore } from '@/stores/lesson-store';
import { auth } from '@/lib/firebase/config';
import { createLesson, createMaterial } from '@/lib/firebase/firestore';
import type { ConceptLens } from '@/lib/constants/concept-lens';
import { CONCEPT_LENSES, CONCEPT_LENS_CATEGORIES } from '@/lib/constants/concept-lens';
import { getGeneralizationsByLens, type GeneralizationTemplate } from '@/lib/constants/generalizations';
import {
  GRASPS_ROLES,
  GRASPS_AUDIENCES,
  GRASPS_PRODUCTS,
  getRolesBySubject,
  getProductsBySubject,
  type GRASPSRole,
  type GRASPSAudience,
  type GRASPSProduct,
} from '@/lib/constants/grasps-templates';

export function LessonForm() {
  const router = useRouter();
  const {
    isGenerating,
    setIsGenerating,
    generationProgress,
    updateProgress,
    setError,
  } = useLessonStore();

  const [formData, setFormData] = useState({
    publisher: '',
    grade: '',
    subject: '',
    unit: '',
    objectives: '',
    achievementStandards: '',
  });

  // 단원 정보 (총 차시 수 등)
  const [unitInfo, setUnitInfo] = useState<{
    totalPeriods: number;
    objectives: string[];
    achievementStandards: string[];
  } | null>(null);

  // 개념 렌즈 관련 상태
  const [recommendedLenses, setRecommendedLenses] = useState<ConceptLens[]>([]);
  const [selectedLens, setSelectedLens] = useState<ConceptLens | null>(null);
  const [isLoadingLenses, setIsLoadingLenses] = useState(false);
  const [showAllLenses, setShowAllLenses] = useState(false);

  // 일반화 문장 관련 상태
  const [availableGeneralizations, setAvailableGeneralizations] = useState<GeneralizationTemplate[]>([]);
  const [selectedGeneralizations, setSelectedGeneralizations] = useState<{id: string; template: string; customText?: string}[]>([]);
  const [customGeneralization, setCustomGeneralization] = useState('');

  // GRASPS 관련 상태
  const [selectedRole, setSelectedRole] = useState<GRASPSRole | null>(null);
  const [selectedAudience, setSelectedAudience] = useState<GRASPSAudience | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<GRASPSProduct | null>(null);
  const [graspsSituation, setGraspsSituation] = useState('');
  const [graspsGoal, setGraspsGoal] = useState('');
  const [showAllRoles, setShowAllRoles] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const subjects = formData.grade ? getSubjectsForGrade(parseInt(formData.grade)) : [];
  const units = formData.subject && formData.grade ? getUnitsForSubjectAndGrade(formData.subject, formData.grade) : [];
  // 과목과 학년에 따른 사용 가능한 출판사 목록
  const availablePublishers = formData.subject && formData.grade
    ? getPublishersForSubjectAndGrade(formData.subject, parseInt(formData.grade))
    : PUBLISHERS;

  // 과목/학년 변경 시 출판사 자동 선택 (국정교과서인 경우)
  useEffect(() => {
    if (formData.subject && formData.grade) {
      const publishers = getPublishersForSubjectAndGrade(formData.subject, parseInt(formData.grade));
      // 국정교과서만 있는 경우 자동 선택
      if (publishers.length === 1 && publishers[0].id === 'national') {
        setFormData(prev => ({ ...prev, publisher: 'national' }));
      } else if (formData.publisher === 'national' && !publishers.some(p => p.id === 'national')) {
        // 현재 선택된 출판사가 사용 불가능한 경우 초기화
        setFormData(prev => ({ ...prev, publisher: '' }));
      }
    }
  }, [formData.subject, formData.grade]);

  // 단원 선택 시 자동으로 차시 정보, 학습목표, 성취기준 가져오기
  useEffect(() => {
    if (formData.unit && formData.subject && formData.grade) {
      const periods = getPeriodsForUnitName(formData.unit, formData.subject, formData.grade);
      if (periods.length > 0) {
        // 모든 차시의 학습목표와 성취기준 통합
        const allObjectives = periods.flatMap(p => p.objectives);
        const allAchievements = periods.flatMap(p => p.achievementStandards);

        // 중복 제거
        const uniqueObjectives = [...new Set(allObjectives)];
        const uniqueAchievements = [...new Set(allAchievements)];

        setUnitInfo({
          totalPeriods: periods.length,
          objectives: uniqueObjectives,
          achievementStandards: uniqueAchievements,
        });

        // 폼에 자동 입력
        setFormData(prev => ({
          ...prev,
          objectives: uniqueObjectives.join('\n'),
          achievementStandards: uniqueAchievements.join('\n'),
        }));

        toast({
          title: '단원 정보 로드 완료',
          description: `${periods.length}차시 단원, 학습목표와 성취기준이 자동 입력되었습니다.`,
          variant: 'success',
        });
      }
    } else {
      setUnitInfo(null);
    }
  }, [formData.unit, formData.subject, formData.grade]);

  // 단원 선택 시 개념 렌즈 추천 가져오기
  useEffect(() => {
    const fetchRecommendedLenses = async () => {
      if (formData.unit && formData.subject) {
        setIsLoadingLenses(true);
        setSelectedLens(null);
        setSelectedGeneralizations([]);
        setAvailableGeneralizations([]);
        try {
          const response = await fetch('/api/lesson/suggest-concept-lens', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              subject: formData.subject,
              unitName: formData.unit,
              objectives: formData.objectives?.split('\n').filter((o: string) => o.trim()) || [],
            }),
          });
          const data = await response.json();
          if (data.success) {
            setRecommendedLenses(data.recommendedLenses);
          }
        } catch (error) {
          console.error('개념 렌즈 추천 가져오기 실패:', error);
        } finally {
          setIsLoadingLenses(false);
        }
      } else {
        setRecommendedLenses([]);
        setSelectedLens(null);
        setSelectedGeneralizations([]);
        setAvailableGeneralizations([]);
      }
    };

    fetchRecommendedLenses();
  }, [formData.unit, formData.subject]);

  // 개념 렌즈 선택 시 일반화 문장 템플릿 로드
  useEffect(() => {
    if (selectedLens) {
      const generalizations = getGeneralizationsByLens(selectedLens.id);
      setAvailableGeneralizations(generalizations);
      setSelectedGeneralizations([]);
    } else {
      setAvailableGeneralizations([]);
      setSelectedGeneralizations([]);
    }
  }, [selectedLens]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.publisher || !formData.grade || !formData.subject || !formData.objectives) {
      toast({
        title: '입력 오류',
        description: '필수 항목을 모두 입력해주세요.',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);
    setError(null);

    // 진행 상태 업데이트
    const steps: Array<{ id: string; name: string; status: 'pending' | 'in_progress' | 'completed' }> = [
      { id: 'analysis', name: '단원 설계', status: 'in_progress' },
      { id: 'lessonplan', name: '지도안', status: 'pending' },
      { id: 'script', name: '수업 대본', status: 'pending' },
      { id: 'ppt', name: 'PPT 자료', status: 'pending' },
      { id: 'worksheet', name: '학습지', status: 'pending' },
      { id: 'save', name: '저장', status: 'pending' },
    ];

    updateProgress({ steps, percentage: 5, currentStep: '교육과정 분석 중...' });

    try {
      // Firebase 인증 토큰 가져오기
      const user = auth.currentUser;
      if (!user) {
        toast({
          title: '로그인 필요',
          description: '수업을 생성하려면 로그인이 필요합니다.',
          variant: 'destructive',
        });
        router.push('/login');
        return;
      }

      const idToken = await user.getIdToken();

      // 단계별 진행 시뮬레이션
      const updateStep = (index: number, percentage: number, currentStep: string) => {
        const newSteps = [...steps];
        for (let i = 0; i < index; i++) {
          newSteps[i].status = 'completed';
        }
        newSteps[index].status = 'in_progress';
        updateProgress({ steps: newSteps, percentage, currentStep });
      };

      // 1단계: 단원 설계 생성
      const totalPeriods = unitInfo?.totalPeriods || 10;
      updateProgress({ steps, percentage: 5, currentStep: '단원 설계 중...' });

      const response = await fetch('/api/lesson/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          publisher: formData.publisher,
          grade: parseInt(formData.grade),
          subject: formData.subject,
          unit: formData.unit || '단원 미지정',
          totalPeriods,
          duration: 40,
          objectives: formData.objectives.split('\n').filter((o) => o.trim()),
          achievementStandards: formData.achievementStandards
            ? formData.achievementStandards.split('\n').filter((s) => s.trim())
            : undefined,
          // 선택된 개념 렌즈 전달
          conceptLens: selectedLens ? {
            id: selectedLens.id,
            name: selectedLens.name,
            nameEn: selectedLens.nameEn,
            description: selectedLens.description,
          } : undefined,
          // 선택된 일반화 문장 전달
          selectedGeneralizations: selectedGeneralizations.length > 0 ? selectedGeneralizations : undefined,
          // 선택된 GRASPS 요소 전달
          selectedGRASPS: (selectedRole || selectedAudience || selectedProduct || graspsSituation || graspsGoal) ? {
            role: selectedRole ? { id: selectedRole.id, name: selectedRole.name } : undefined,
            audience: selectedAudience ? { id: selectedAudience.id, name: selectedAudience.name } : undefined,
            product: selectedProduct ? { id: selectedProduct.id, name: selectedProduct.name } : undefined,
            situation: graspsSituation || undefined,
            goal: graspsGoal || undefined,
          } : undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || '수업 생성에 실패했습니다.');
      }

      const lessonDesign = data.lessonDesign;
      updateStep(0, 15, '단원 설계 완료!');

      // lessonData 구성
      const lessonData = {
        title: lessonDesign.unitOverview?.title || lessonDesign.lessonOverview?.title || `${formData.subject} ${formData.unit}`,
        publisher_id: formData.publisher,
        subject_id: formData.subject,
        unit_id: formData.unit,
        grade: parseInt(formData.grade),
        class_period: totalPeriods,
        duration: 40,
        learning_objectives: formData.objectives.split('\n').filter((o) => o.trim()),
        achievement_standards: formData.achievementStandards?.split('\n').filter((s) => s.trim()) || [],
        core_concepts: lessonDesign.unitOverview?.conceptLens ? [lessonDesign.unitOverview.conceptLens] : lessonDesign.lessonOverview?.coreConcepts || [],
        related_concepts: lessonDesign.unitOverview?.relatedConcepts || lessonDesign.lessonOverview?.relatedConcepts || [],
        big_ideas: lessonDesign.unitOverview?.unitKeyIdea ? [lessonDesign.unitOverview.unitKeyIdea] : lessonDesign.lessonOverview?.bigIdeas || [],
        factual_questions: lessonDesign.lessonOverview?.guidingQuestions?.factual || [],
        conceptual_questions: lessonDesign.lessonOverview?.guidingQuestions?.conceptual || [],
        debatable_questions: lessonDesign.lessonOverview?.guidingQuestions?.debatable || [],
        stage_engage: lessonDesign.stages?.engage || {},
        stage_focus: lessonDesign.stages?.focus || {},
        stage_investigate: lessonDesign.stages?.investigate || {},
        stage_organize: lessonDesign.stages?.organize || {},
        stage_generalize: lessonDesign.stages?.generalize || {},
        stage_transfer: lessonDesign.stages?.transfer || {},
        stage_reflect: lessonDesign.stages?.reflect || {},
        unit_overview: lessonDesign.unitOverview || null,
        unit_assessment: lessonDesign.unitAssessment || null,
        assessment_plan: lessonDesign.assessmentPlan || {},
        preparation: lessonDesign.preparation || [],
        safety_notes: lessonDesign.safetyNotes || [],
        differentiation: lessonDesign.differentiation || {},
        status: 'generated' as const,
        is_public: true,
        view_count: 0,
      };

      // 2단계: 지도안(도입-전개-정리) 생성
      updateStep(1, 25, '교수학습지도안 생성 중...');
      let lessonPlanDocxContent = null;
      try {
        const lessonPlanResponse = await fetch('/api/lesson/generate-materials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            lessonId: 'temp',
            type: 'lesson_plan_docx',
            lessonData,
          }),
        });
        if (lessonPlanResponse.ok) {
          const lessonPlanData = await lessonPlanResponse.json();
          lessonPlanDocxContent = lessonPlanData.content;
        }
      } catch (e) {
        console.error('지도안 생성 실패:', e);
      }

      // 3단계: 수업 대본 생성
      updateStep(2, 40, '수업 대본 생성 중...');
      let scriptContent = null;
      try {
        const scriptResponse = await fetch('/api/lesson/generate-materials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            lessonId: 'temp',
            type: 'teaching_script',
            lessonData,
          }),
        });
        if (scriptResponse.ok) {
          const scriptData = await scriptResponse.json();
          scriptContent = scriptData.content;
        }
      } catch (e) {
        console.error('수업 대본 생성 실패:', e);
      }

      // 4단계: PPT 자료 생성
      updateStep(3, 55, 'PPT 자료 생성 중...');
      let pptContent = null;
      try {
        const pptResponse = await fetch('/api/lesson/generate-materials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            lessonId: 'temp',
            type: 'pptx',
            lessonData,
          }),
        });
        if (pptResponse.ok) {
          const pptData = await pptResponse.json();
          pptContent = pptData.content;
        }
      } catch (e) {
        console.error('PPT 생성 실패:', e);
      }

      // 5단계: 학습지 생성
      updateStep(4, 70, '학습지 생성 중...');
      let worksheetContent = null;
      try {
        const worksheetResponse = await fetch('/api/lesson/generate-materials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            lessonId: 'temp',
            type: 'worksheet',
            lessonData,
          }),
        });
        if (worksheetResponse.ok) {
          const worksheetData = await worksheetResponse.json();
          worksheetContent = worksheetData.content;
        }
      } catch (e) {
        console.error('학습지 생성 실패:', e);
      }

      // 6단계: Firestore에 저장
      updateStep(5, 85, '저장 중...');
      let lessonId: string;

      try {
        const savePromise = createLesson(user.uid, lessonData);
        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => {
            reject(new Error('저장 타임아웃'));
          }, 15000);
        });

        lessonId = await Promise.race([savePromise, timeoutPromise]);

        // 자료들 저장 (병렬로)
        const savePromises = [
          createMaterial(lessonId, 'lesson_plan', '교수학습지도안', {
            lessonDesign,
            lessonPlanDocx: lessonPlanDocxContent,
          }),
        ];
        if (scriptContent) {
          savePromises.push(createMaterial(lessonId, 'teaching_script', '수업 대본', scriptContent));
        }
        if (pptContent) {
          savePromises.push(createMaterial(lessonId, 'pptx', 'PPT 자료', pptContent));
        }
        if (worksheetContent) {
          savePromises.push(createMaterial(lessonId, 'worksheet', '탐구 학습지', worksheetContent));
        }

        await Promise.all(savePromises);
      } catch (saveError) {
        console.error('저장 실패:', saveError);
        throw new Error('저장 실패: ' + (saveError instanceof Error ? saveError.message : '알 수 없는 오류'));
      }

      // 완료
      const completedSteps = steps.map((s) => ({ ...s, status: 'completed' as const }));
      updateProgress({ steps: completedSteps, percentage: 100, currentStep: '완료!' });

      toast({
        title: '수업 생성 완료!',
        description: '단원 설계, 지도안, 수업 대본, PPT, 학습지가 모두 생성되었습니다.',
        variant: 'success',
      });

      // 페이지 이동
      window.location.href = `/lesson/${lessonId}`;
    } catch (error) {
      console.error('Generation error:', error);
      setError(error instanceof Error ? error.message : '수업 생성 중 오류가 발생했습니다.');
      toast({
        title: '생성 실패',
        description: error instanceof Error ? error.message : '수업 생성 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 기본 정보 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-lg">기본 정보</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="publisher">출판사</Label>
              <Select
                value={formData.publisher}
                onValueChange={(value) => setFormData({ ...formData, publisher: value })}
                disabled={isGenerating || (availablePublishers.length === 1)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="출판사 선택" />
                </SelectTrigger>
                <SelectContent>
                  {availablePublishers.map((pub) => (
                    <SelectItem key={pub.id} value={pub.id}>
                      {pub.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {availablePublishers.length === 1 && availablePublishers[0].id === 'national' && (
                <p className="text-xs text-muted-foreground">이 과목은 국정교과서만 사용합니다.</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="grade">학년</Label>
              <Select
                value={formData.grade}
                onValueChange={(value) =>
                  setFormData({ ...formData, grade: value, subject: '', unit: '' })
                }
                disabled={isGenerating}
              >
                <SelectTrigger>
                  <SelectValue placeholder="학년 선택" />
                </SelectTrigger>
                <SelectContent>
                  {GRADES.map((grade) => (
                    <SelectItem key={grade} value={grade.toString()}>
                      {grade}학년
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">과목</Label>
              <Select
                value={formData.subject}
                onValueChange={(value) => setFormData({ ...formData, subject: value, unit: '' })}
                disabled={!formData.grade || isGenerating}
              >
                <SelectTrigger>
                  <SelectValue placeholder="과목 선택" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((sub) => (
                    <SelectItem key={sub.id} value={sub.id}>
                      {sub.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="unit">단원</Label>
              {units.length > 0 ? (
                <Select
                  value={formData.unit}
                  onValueChange={(value) => setFormData({ ...formData, unit: value })}
                  disabled={!formData.subject || isGenerating}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="단원 선택" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {units.map((unit) => (
                      <SelectItem key={unit.id} value={unit.name}>
                        {unit.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id="unit"
                  placeholder="단원명을 입력하세요"
                  value={formData.unit}
                  onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                  disabled={isGenerating}
                />
              )}
            </div>
          </div>

          {/* 단원 정보 표시 */}
          {unitInfo && (
            <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-4 w-4 text-indigo-600" />
                <h4 className="font-medium text-indigo-900">단원 정보</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
                  총 {unitInfo.totalPeriods}차시
                </Badge>
                <Badge variant="outline" className="text-indigo-600 border-indigo-300">
                  1차시 = 40분
                </Badge>
              </div>
              <p className="mt-2 text-xs text-indigo-600">
                단원 전체 {unitInfo.totalPeriods}차시를 7단계(관계맺기→집중하기→조사하기→조직및정리하기→일반화하기→전이하기→성찰하기)로 배분합니다.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 개념 렌즈 선택 */}
      {formData.unit && (
        <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="h-5 w-5 text-amber-600" />
              <span>개념 렌즈 선택</span>
              {selectedLens && (
                <Badge className="ml-2 bg-amber-500 text-white">
                  {selectedLens.name} 선택됨
                </Badge>
              )}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              개념 렌즈는 단원을 관통하는 핵심 추상 개념입니다. AI가 추천한 개념 렌즈 중 하나를 선택하거나, 다른 개념 렌즈를 직접 선택하세요.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 추천 개념 렌즈 */}
            {isLoadingLenses ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="h-5 w-5 animate-spin text-amber-600 mr-2" />
                <span className="text-sm text-amber-700">개념 렌즈 추천 중...</span>
              </div>
            ) : recommendedLenses.length > 0 ? (
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-amber-800 flex items-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  이 단원에 추천하는 개념 렌즈
                </h4>
                <div className="grid gap-3">
                  {recommendedLenses.map((lens, index) => (
                    <button
                      key={lens.id}
                      type="button"
                      onClick={() => setSelectedLens(lens)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        selectedLens?.id === lens.id
                          ? 'border-amber-500 bg-amber-100 shadow-md'
                          : 'border-amber-200 bg-white hover:border-amber-400 hover:bg-amber-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs bg-amber-100 text-amber-700 border-amber-300">
                              추천 {index + 1}
                            </Badge>
                            <span className="font-semibold text-amber-900">
                              {lens.name}
                            </span>
                            <span className="text-xs text-amber-600">
                              ({lens.nameEn})
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-600">
                            {lens.description}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {lens.examples.slice(0, 3).map((example, i) => (
                              <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                        {selectedLens?.id === lens.id && (
                          <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            {/* 다른 개념 렌즈 보기 토글 */}
            <button
              type="button"
              onClick={() => setShowAllLenses(!showAllLenses)}
              className="flex items-center gap-1 text-sm text-amber-700 hover:text-amber-900 transition-colors"
            >
              {showAllLenses ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  다른 개념 렌즈 접기
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  다른 개념 렌즈 더 보기
                </>
              )}
            </button>

            {/* 전체 개념 렌즈 목록 */}
            {showAllLenses && (
              <div className="space-y-4 pt-2 border-t border-amber-200">
                {CONCEPT_LENS_CATEGORIES.map((category) => (
                  <div key={category.id} className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-700">
                      {category.name}
                    </h5>
                    <p className="text-xs text-gray-500 mb-2">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {CONCEPT_LENSES
                        .filter((lens) => lens.category === category.id)
                        .map((lens) => (
                          <button
                            key={lens.id}
                            type="button"
                            onClick={() => {
                              setSelectedLens(lens);
                              setShowAllLenses(false);
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                              selectedLens?.id === lens.id
                                ? 'bg-amber-500 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-800'
                            }`}
                          >
                            {lens.name}
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 선택된 개념 렌즈 상세 정보 */}
            {selectedLens && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-amber-300">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-amber-600" />
                  <span className="font-medium text-amber-900">선택된 개념 렌즈</span>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-gray-900">
                    {selectedLens.name} ({selectedLens.nameEn})
                  </p>
                  <p className="text-sm text-gray-600">{selectedLens.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    적용 예시: {selectedLens.examples.join(', ')}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 일반화 문장 선택 */}
      {selectedLens && availableGeneralizations.length > 0 && (
        <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-purple-600" />
              <span>일반화 문장 선택</span>
              {selectedGeneralizations.length > 0 && (
                <Badge className="ml-2 bg-purple-500 text-white">
                  {selectedGeneralizations.length}개 선택됨
                </Badge>
              )}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              &quot;{selectedLens.name}&quot; 개념 렌즈와 관련된 일반화 문장입니다. 단원에 맞는 것을 선택하거나 직접 입력하세요.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* 추천 일반화 문장 목록 */}
            <div className="space-y-2">
              {availableGeneralizations.map((gen) => {
                const isSelected = selectedGeneralizations.some(s => s.id === gen.id);
                return (
                  <button
                    key={gen.id}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        setSelectedGeneralizations(prev => prev.filter(s => s.id !== gen.id));
                      } else {
                        setSelectedGeneralizations(prev => [...prev, { id: gen.id, template: gen.template }]);
                      }
                    }}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      isSelected
                        ? 'border-purple-500 bg-purple-100'
                        : 'border-purple-200 bg-white hover:border-purple-400 hover:bg-purple-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{gen.template}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {gen.examples.slice(0, 2).map((ex, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-purple-100 text-purple-700 rounded">
                              예: {ex}
                            </span>
                          ))}
                        </div>
                      </div>
                      {isSelected && (
                        <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0 ml-2" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* 직접 입력 */}
            <div className="space-y-2">
              <Label className="text-sm text-purple-800">또는 직접 입력하기</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="학생의 생활과 연결된 일반화 문장을 입력하세요"
                  value={customGeneralization}
                  onChange={(e) => setCustomGeneralization(e.target.value)}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    if (customGeneralization.trim()) {
                      const customId = `custom-${Date.now()}`;
                      setSelectedGeneralizations(prev => [...prev, {
                        id: customId,
                        template: customGeneralization.trim(),
                        customText: customGeneralization.trim()
                      }]);
                      setCustomGeneralization('');
                    }
                  }}
                  disabled={!customGeneralization.trim()}
                >
                  추가
                </Button>
              </div>
            </div>

            {/* 선택된 일반화 문장 표시 */}
            {selectedGeneralizations.length > 0 && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-purple-300">
                <p className="text-sm font-medium text-purple-800 mb-2">선택된 일반화 문장:</p>
                <ul className="space-y-1">
                  {selectedGeneralizations.map((gen, index) => (
                    <li key={gen.id} className="flex items-center justify-between text-sm">
                      <span>{index + 1}. {gen.customText || gen.template}</span>
                      <button
                        type="button"
                        onClick={() => setSelectedGeneralizations(prev => prev.filter(s => s.id !== gen.id))}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        삭제
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* GRASPS 수행과제 설정 */}
      {selectedLens && (
        <Card className="border-cyan-200 bg-gradient-to-r from-cyan-50 to-teal-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5 text-cyan-600" />
              <span>GRASPS 수행과제 설정</span>
              {(selectedRole || selectedAudience || selectedProduct) && (
                <Badge className="ml-2 bg-cyan-500 text-white">설정됨</Badge>
              )}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              수행과제의 역할, 청중, 산출물을 선택하세요. 선택하지 않으면 AI가 자동으로 설정합니다.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 역할 (Role) 선택 */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-cyan-800">🎭 역할 (Role) - 학생이 수행할 역할</Label>
              <div className="flex flex-wrap gap-2">
                {(showAllRoles ? GRASPS_ROLES : getRolesBySubject(formData.subject).slice(0, 8)).map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setSelectedRole(selectedRole?.id === role.id ? null : role)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedRole?.id === role.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white border border-cyan-300 text-gray-700 hover:bg-cyan-100'
                    }`}
                  >
                    {role.name}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowAllRoles(!showAllRoles)}
                className="text-xs text-cyan-600 hover:text-cyan-800"
              >
                {showAllRoles ? '접기' : '더 많은 역할 보기...'}
              </button>
              {selectedRole && (
                <p className="text-xs text-gray-600 bg-white p-2 rounded">{selectedRole.description}</p>
              )}
            </div>

            {/* 청중 (Audience) 선택 */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-cyan-800">👥 청중 (Audience) - 결과물을 보여줄 대상</Label>
              <div className="flex flex-wrap gap-2">
                {GRASPS_AUDIENCES.slice(0, 10).map((audience) => (
                  <button
                    key={audience.id}
                    type="button"
                    onClick={() => setSelectedAudience(selectedAudience?.id === audience.id ? null : audience)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedAudience?.id === audience.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white border border-cyan-300 text-gray-700 hover:bg-cyan-100'
                    }`}
                  >
                    {audience.name}
                  </button>
                ))}
              </div>
              {selectedAudience && (
                <p className="text-xs text-gray-600 bg-white p-2 rounded">{selectedAudience.description}</p>
              )}
            </div>

            {/* 산출물 (Product) 선택 */}
            <div className="space-y-3">
              <Label className="text-sm font-medium text-cyan-800">📦 산출물 (Product) - 학생이 만들어낼 결과물</Label>
              <div className="flex flex-wrap gap-2">
                {(showAllProducts ? GRASPS_PRODUCTS : getProductsBySubject(formData.subject).slice(0, 10)).map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setSelectedProduct(selectedProduct?.id === product.id ? null : product)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                      selectedProduct?.id === product.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white border border-cyan-300 text-gray-700 hover:bg-cyan-100'
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setShowAllProducts(!showAllProducts)}
                className="text-xs text-cyan-600 hover:text-cyan-800"
              >
                {showAllProducts ? '접기' : '더 많은 산출물 보기...'}
              </button>
              {selectedProduct && (
                <p className="text-xs text-gray-600 bg-white p-2 rounded">{selectedProduct.description}</p>
              )}
            </div>

            {/* 상황 및 목표 직접 입력 */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-cyan-800">📍 상황 (Situation) - 선택 사항</Label>
                <Input
                  placeholder="예: 우리 학교에서 환경 캠페인을 준비하고 있습니다."
                  value={graspsSituation}
                  onChange={(e) => setGraspsSituation(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium text-cyan-800">🎯 목표 (Goal) - 선택 사항</Label>
                <Input
                  placeholder="예: 환경 보호의 중요성을 알리고 실천 방법을 제안한다."
                  value={graspsGoal}
                  onChange={(e) => setGraspsGoal(e.target.value)}
                />
              </div>
            </div>

            {/* GRASPS 요약 */}
            {(selectedRole || selectedAudience || selectedProduct) && (
              <div className="p-4 bg-white rounded-lg border border-cyan-300">
                <p className="text-sm font-medium text-cyan-800 mb-2">수행과제 미리보기:</p>
                <p className="text-sm text-gray-700">
                  {selectedRole && `여러분은 "${selectedRole.name}"입니다. `}
                  {selectedAudience && `"${selectedAudience.name}"에게 `}
                  {graspsGoal && `${graspsGoal} `}
                  {selectedProduct && `"${selectedProduct.name}"을(를) 만들어야 합니다.`}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* 학습 목표 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-lg">
            <span>학습 목표</span>
            {unitInfo && (
              <Badge variant="outline" className="text-xs font-normal text-green-600 border-green-300">
                단원 데이터에서 자동 로드됨
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="objectives">학습 목표 (줄바꿈으로 구분) *</Label>
            <Textarea
              id="objectives"
              placeholder={`단원을 선택하면 자동으로 학습목표가 입력됩니다.\n\n또는 직접 입력:\n기후 변화가 생태계에 미치는 영향을 설명할 수 있다.\n생물 다양성의 중요성을 이해하고 보전 방안을 제안할 수 있다.`}
              className="min-h-[120px]"
              value={formData.objectives}
              onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
              disabled={isGenerating}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="achievementStandards">성취기준 (줄바꿈으로 구분)</Label>
            <Textarea
              id="achievementStandards"
              placeholder={`단원을 선택하면 자동으로 성취기준이 입력됩니다.\n\n또는 직접 입력:\n[6과03-01] 생물다양성의 의미를 설명할 수 있다.\n[6과03-02] 환경 변화가 생물에 미치는 영향을 탐구할 수 있다.`}
              className="min-h-[100px]"
              value={formData.achievementStandards}
              onChange={(e) => setFormData({ ...formData, achievementStandards: e.target.value })}
              disabled={isGenerating}
            />
          </div>
        </CardContent>
      </Card>

      {/* 생성 진행 상태 */}
      {isGenerating && (
        <Card className="border-indigo-200 bg-gradient-to-r from-indigo-50 to-purple-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-indigo-900">AI 수업 설계 진행 중</h3>
              <span className="text-sm font-medium text-indigo-600">
                {Math.round(generationProgress.percentage)}%
              </span>
            </div>

            <Progress value={generationProgress.percentage} className="h-2 mb-6" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {generationProgress.steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    step.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : step.status === 'in_progress'
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'bg-gray-50 text-gray-400'
                  }`}
                >
                  {step.status === 'completed' ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : step.status === 'in_progress' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Circle className="h-4 w-4" />
                  )}
                  <span className="text-xs font-medium">{step.name}</span>
                </div>
              ))}
            </div>

            {generationProgress.currentStep && (
              <p className="mt-4 text-sm text-indigo-600 text-center">
                현재: {generationProgress.currentStep}
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* 제출 버튼 */}
      <Button type="submit" size="lg" className="w-full" disabled={isGenerating}>
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            AI가 수업을 설계하고 있습니다...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            개념기반탐구 수업 자동 생성
          </>
        )}
      </Button>
    </form>
  );
}
