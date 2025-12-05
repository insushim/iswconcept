import type { GeneratedLesson } from '@/types/lesson';

export const generateLessonPlanDocxPrompt = (lesson: GeneratedLesson, grade: number): string => {
  const totalPeriods = lesson.unitOverview?.totalPeriods || 10;
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || '';
  const unitKeyIdea = lesson.unitOverview?.unitKeyIdea || '';

  return `당신은 경력 20년의 우수 초등교사입니다.
주어진 **단원 설계**를 바탕으로 **차시별 교수학습지도안**을 작성합니다.

## 단원 설계 정보

**단원명**: ${unitTitle}
**총 차시**: ${totalPeriods}차시
**학년**: ${grade}학년
**개념 렌즈**: ${conceptLens}
**빅 아이디어**: ${unitKeyIdea}

### 단원 개요
${JSON.stringify(lesson.unitOverview || lesson.lessonOverview, null, 2)}

### 7단계 설계
${JSON.stringify(lesson.stages, null, 2)}

## 교수학습지도안 작성 요청

각 차시에 대해 **도입-전개-정리** 형식의 교수학습지도안을 작성하세요.
모든 차시(1차시~${totalPeriods}차시)에 대해 작성해야 합니다.

다음 JSON 형식으로 작성하세요. JSON 외의 다른 텍스트는 포함하지 마세요.

{
  "lessonPlans": [
    {
      "period": 1,
      "periodRange": "1차시",
      "stageName": "관계맺기",
      "stageNameEn": "Engage",
      "topic": "이 차시의 학습 주제",
      "learningObjectives": ["학습목표 1", "학습목표 2"],
      "introduction": {
        "duration": 5,
        "activities": [
          {
            "teacherActivity": "교사의 구체적인 활동 (동기유발, 전시학습 상기 등)",
            "studentActivity": "학생의 구체적인 활동",
            "materials": "활용 자료 및 유의점"
          }
        ]
      },
      "development": {
        "duration": 30,
        "activities": [
          {
            "activityName": "활동 1: 활동명",
            "teacherActivity": "교사의 구체적인 활동",
            "studentActivity": "학생의 구체적인 활동",
            "materials": "활용 자료 및 유의점"
          },
          {
            "activityName": "활동 2: 활동명",
            "teacherActivity": "교사의 구체적인 활동",
            "studentActivity": "학생의 구체적인 활동",
            "materials": "활용 자료 및 유의점"
          }
        ]
      },
      "conclusion": {
        "duration": 5,
        "activities": [
          {
            "teacherActivity": "정리, 형성평가, 차시예고 등",
            "studentActivity": "학생의 정리 활동",
            "materials": "활용 자료 및 유의점"
          }
        ]
      },
      "assessment": {
        "type": "형성평가/관찰평가 등",
        "criteria": ["평가 기준 1", "평가 기준 2"]
      }
    }
  ]
}

## 작성 원칙

1. **모든 차시 포함**: 1차시부터 ${totalPeriods}차시까지 모두 작성
2. **단계 연결**: 각 차시가 해당하는 CBI 7단계(관계맺기, 집중하기, 조사하기, 조직및정리하기, 일반화하기, 전이하기, 성찰하기)를 표시
3. **구체적인 활동**: 교사와 학생의 활동을 구체적으로 기술 (플레이스홀더 금지)
4. **시간 배분**: 도입(5분), 전개(30분), 정리(5분) 기본, 상황에 맞게 조정 가능
5. **학년 수준**: ${grade}학년 수준에 맞는 용어와 활동
6. **교과 연계**: "${unitTitle}" 단원의 실제 내용 반영

## 차시별 CBI 단계 배분 참고

7단계 설계의 periods 정보를 참고하여 각 차시가 어느 단계에 해당하는지 결정하세요.
예: engage.periods가 "1-2차시"이면 1, 2차시는 관계맺기 단계

반드시 유효한 JSON 형식으로만 응답하세요.`;
};
