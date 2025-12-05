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
import { toast } from '@/hooks/use-toast';
import { PUBLISHERS, GRADES, getSubjectsForGrade, getUnitsForSubjectAndGrade, getPublishersForSubjectAndGrade } from '@/lib/constants/curriculum-data';
import { getPeriodsForUnitName, LessonPeriod } from '@/lib/constants/all-periods';
import { Loader2, Sparkles, CheckCircle, Circle, Wand2 } from 'lucide-react';
import { useLessonStore } from '@/stores/lesson-store';
import { auth } from '@/lib/firebase/config';
import { createLesson, createMaterial } from '@/lib/firebase/firestore';

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
    unitId: '',
    period: '',
    duration: '40',
    objectives: '',
    achievementStandards: '',
  });

  const [availablePeriods, setAvailablePeriods] = useState<LessonPeriod[]>([]);
  const [selectedPeriodInfo, setSelectedPeriodInfo] = useState<LessonPeriod | null>(null);

  const subjects = formData.grade ? getSubjectsForGrade(parseInt(formData.grade)) : [];
  const units = formData.subject && formData.grade ? getUnitsForSubjectAndGrade(formData.subject, formData.grade) : [];
  // 과목과 학년에 따른 사용 가능한 출판사 목록
  const availablePublishers = formData.subject && formData.grade
    ? getPublishersForSubjectAndGrade(formData.subject, parseInt(formData.grade))
    : PUBLISHERS;

  // 단원이 변경되면 차시 목록 업데이트
  useEffect(() => {
    if (formData.unit && formData.subject && formData.grade) {
      const periods = getPeriodsForUnitName(formData.unit, formData.subject, formData.grade);
      setAvailablePeriods(periods);
      // 단원 변경 시 차시 초기화
      setFormData(prev => ({ ...prev, period: '' }));
      setSelectedPeriodInfo(null);
    } else {
      setAvailablePeriods([]);
      setSelectedPeriodInfo(null);
    }
  }, [formData.unit, formData.subject, formData.grade]);

  // 차시가 변경되면 해당 차시 정보 업데이트 및 자동 입력
  useEffect(() => {
    if (formData.period && availablePeriods.length > 0) {
      const periodNum = parseInt(formData.period);
      const periodInfo = availablePeriods.find(p => p.period === periodNum);
      setSelectedPeriodInfo(periodInfo || null);

      // 차시 정보가 있고 학습목표가 있으면 자동 입력
      if (periodInfo && periodInfo.objectives.length > 0) {
        setFormData(prev => ({
          ...prev,
          objectives: periodInfo.objectives.join('\n'),
          achievementStandards: periodInfo.achievementStandards.join('\n'),
          duration: periodInfo.duration.toString(),
        }));
      }
    } else {
      setSelectedPeriodInfo(null);
    }
  }, [formData.period, availablePeriods]);

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

  // 차시 정보로 학습목표/성취기준 자동 채우기
  const fillFromPeriodInfo = () => {
    if (selectedPeriodInfo) {
      setFormData(prev => ({
        ...prev,
        objectives: selectedPeriodInfo.objectives.join('\n'),
        achievementStandards: selectedPeriodInfo.achievementStandards.join('\n'),
        duration: selectedPeriodInfo.duration.toString(),
      }));
      toast({
        title: '자동 입력 완료',
        description: `${selectedPeriodInfo.title}의 학습목표와 성취기준이 입력되었습니다.`,
        variant: 'success',
      });
    }
  };

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
      { id: 'analysis', name: '교육과정 분석', status: 'in_progress' },
      { id: 'concepts', name: '핵심 개념 도출', status: 'pending' },
      { id: 'design', name: '7단계 수업 설계', status: 'pending' },
      { id: 'save', name: '저장', status: 'pending' },
      { id: 'complete', name: '완료', status: 'pending' },
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

      // API 호출 (AI 생성)
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
          period: parseInt(formData.period) || 1,
          duration: parseInt(formData.duration),
          objectives: formData.objectives.split('\n').filter((o) => o.trim()),
          achievementStandards: formData.achievementStandards
            ? formData.achievementStandards.split('\n').filter((s) => s.trim())
            : undefined,
        }),
      });

      // 진행 상태 업데이트
      updateStep(1, 30, '핵심 개념 도출 중...');

      const data = await response.json();

      updateStep(2, 60, '7단계 수업 설계 중...');

      if (!response.ok) {
        throw new Error(data.error || '수업 생성에 실패했습니다.');
      }

      // Firestore에 수업 저장
      updateStep(3, 80, '저장 중...');
      const lessonDesign = data.lessonDesign;
      console.log('[lesson-form] AI 응답 받음, Firestore 저장 시작...');
      console.log('[lesson-form] lessonDesign:', lessonDesign ? '있음' : '없음');

      let lessonId: string;
      const lessonData = {
        title: lessonDesign.lessonOverview?.title || `${formData.subject} ${formData.unit} ${formData.period}차시`,
        publisher_id: formData.publisher,
        subject_id: formData.subject,
        unit_id: formData.unit,
        grade: parseInt(formData.grade),
        class_period: parseInt(formData.period) || 1,
        duration: parseInt(formData.duration),
        learning_objectives: formData.objectives.split('\n').filter((o) => o.trim()),
        achievement_standards: formData.achievementStandards?.split('\n').filter((s) => s.trim()) || [],
        core_concepts: lessonDesign.lessonOverview?.coreConcepts || [],
        related_concepts: lessonDesign.lessonOverview?.relatedConcepts || [],
        big_ideas: lessonDesign.lessonOverview?.bigIdeas || [],
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
        assessment_plan: lessonDesign.assessmentPlan || {},
        preparation: lessonDesign.preparation || [],
        safety_notes: lessonDesign.safetyNotes || [],
        differentiation: lessonDesign.differentiation || {},
        status: 'generated' as const,
        is_public: true,
        view_count: 0,
      };

      try {
        console.log('[lesson-form] createLesson 호출 시작...');

        // 15초 타임아웃 적용
        const savePromise = createLesson(user.uid, lessonData);
        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => {
            reject(new Error('저장 타임아웃 - 네트워크 연결을 확인해주세요'));
          }, 15000);
        });

        lessonId = await Promise.race([savePromise, timeoutPromise]);
        console.log('[lesson-form] createLesson 성공! ID:', lessonId);
      } catch (saveError) {
        console.error('[lesson-form] createLesson 실패:', saveError);
        const errorMsg = saveError instanceof Error ? saveError.message : '알 수 없는 오류';

        // 타임아웃 시 더 자세한 안내
        if (errorMsg.includes('타임아웃')) {
          throw new Error('Firestore 연결 실패: 네트워크 또는 Firebase 설정을 확인해주세요. (Firebase Console에서 Firestore가 활성화되어 있는지 확인)');
        }
        throw new Error('수업 저장 실패: ' + errorMsg);
      }

      // 완료
      console.log('[lesson-form] 완료 처리 중...');
      const completedSteps = steps.map((s) => ({ ...s, status: 'completed' as const }));
      updateProgress({ steps: completedSteps, percentage: 100, currentStep: '완료!' });

      toast({
        title: '수업 생성 완료!',
        description: '수업 설계가 성공적으로 완료되었습니다.',
        variant: 'success',
      });

      // 수업 설계 자료 저장 (백그라운드에서 처리 - 페이지 이동에 영향 없음)
      console.log('[lesson-form] Material 백그라운드 저장 시작...');
      createMaterial(lessonId, 'lesson_plan', '교수학습지도안', lessonDesign)
        .then(() => console.log('[lesson-form] Material 저장 완료'))
        .catch((err) => console.error('[lesson-form] Material 저장 실패:', err));

      console.log('[lesson-form] 페이지 이동:', `/lesson/${lessonId}`);

      // 즉시 페이지 이동
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
                  setFormData({ ...formData, grade: value, subject: '', unit: '', period: '' })
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
                onValueChange={(value) => setFormData({ ...formData, subject: value, unit: '', period: '' })}
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
                  onValueChange={(value) => setFormData({ ...formData, unit: value, period: '' })}
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

            <div className="space-y-2">
              <Label htmlFor="period">차시</Label>
              {availablePeriods.length > 0 ? (
                <Select
                  value={formData.period}
                  onValueChange={(value) => setFormData({ ...formData, period: value })}
                  disabled={!formData.unit || isGenerating}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="차시 선택" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {availablePeriods.map((period) => (
                      <SelectItem key={period.id} value={period.period.toString()}>
                        {period.period}차시 - {period.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id="period"
                  type="number"
                  min={1}
                  placeholder="차시 입력"
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  disabled={isGenerating}
                />
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">수업 시간 (분)</Label>
              <Select
                value={formData.duration}
                onValueChange={(value) => setFormData({ ...formData, duration: value })}
                disabled={isGenerating}
              >
                <SelectTrigger>
                  <SelectValue placeholder="수업 시간 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="40">40분 (1차시)</SelectItem>
                  <SelectItem value="80">80분 (2차시 블록)</SelectItem>
                  <SelectItem value="120">120분 (3차시 블록)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 선택된 차시 정보 미리보기 */}
          {selectedPeriodInfo && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-blue-900">
                  {selectedPeriodInfo.period}차시: {selectedPeriodInfo.title}
                </h4>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={fillFromPeriodInfo}
                  className="text-blue-600 border-blue-300 hover:bg-blue-100"
                >
                  <Wand2 className="h-4 w-4 mr-1" />
                  자동 입력
                </Button>
              </div>
              <div className="text-sm text-blue-700 space-y-1">
                <p><strong>학습목표:</strong> {selectedPeriodInfo.objectives.join(' / ')}</p>
                <p><strong>성취기준:</strong> {selectedPeriodInfo.achievementStandards.join(' / ')}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 학습 목표 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">학습 목표</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="objectives">학습 목표 (줄바꿈으로 구분) *</Label>
            <Textarea
              id="objectives"
              placeholder={`예시:\n기후 변화가 생태계에 미치는 영향을 설명할 수 있다.\n생물 다양성의 중요성을 이해하고 보전 방안을 제안할 수 있다.`}
              className="min-h-[120px]"
              value={formData.objectives}
              onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
              disabled={isGenerating}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="achievementStandards">성취기준 (선택, 줄바꿈으로 구분)</Label>
            <Textarea
              id="achievementStandards"
              placeholder={`예시:\n[6과03-01] 생물다양성의 의미를 설명할 수 있다.\n[6과03-02] 환경 변화가 생물에 미치는 영향을 탐구할 수 있다.`}
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
