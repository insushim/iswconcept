import type { GeneratedLesson } from '@/types/lesson';

export const generateLessonPlanDocxPrompt = (lesson: GeneratedLesson, grade: number): string => {
  const totalPeriods = lesson.unitOverview?.totalPeriods || 10;
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || '';

  return `${grade}학년 "${unitTitle}" 단원의 교수학습지도안을 JSON으로 생성하세요.
개념 렌즈: ${conceptLens}
총 차시: ${totalPeriods}차시

반드시 아래 JSON 형식을 정확히 따르세요. JSON만 출력하세요.

{
  "lessonPlans": [
    {
      "period": 1,
      "periodRange": "1차시",
      "stageName": "관계맺기",
      "stageNameEn": "Engage",
      "topic": "이 차시의 학습 주제",
      "learningObjectives": ["학습목표1", "학습목표2"],
      "intro": "도입 활동 설명 (5분)",
      "main": "전개 활동 설명 (30분)",
      "closing": "정리 활동 설명 (5분)"
    }
  ]
}

lessonPlans 배열에 1차시부터 ${totalPeriods}차시까지 모두 작성하세요.

CBI 7단계 배분:
- 1-2차시: 관계맺기(Engage)
- 3차시: 집중하기(Focus)
- 4-5차시: 조사하기(Investigate)
- 6차시: 조직하기(Organize)
- 7차시: 일반화하기(Generalize)
- 8-9차시: 전이하기(Transfer)
- 10차시: 성찰하기(Reflect)

각 차시의 topic, learningObjectives, intro, main, closing을 "${unitTitle}" 단원 내용에 맞게 구체적으로 작성하세요.
${grade}학년 수준에 맞는 활동을 설계하세요.
JSON만 출력하세요.`;
};
