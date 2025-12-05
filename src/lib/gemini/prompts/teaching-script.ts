import type { GeneratedLesson } from '@/types/lesson';

export const generateTeachingScriptPrompt = (lesson: GeneratedLesson, grade: number): string => {
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || '';

  return `${grade}학년 "${unitTitle}" 단원의 수업 대본을 JSON으로 생성하세요.
개념 렌즈: ${conceptLens}

반드시 아래 JSON 형식을 정확히 따르세요. JSON만 출력하세요.

{
  "lessonScript": {
    "stages": [
      {
        "stageName": "1단계: 관계맺기 (Engage)",
        "activities": [
          {
            "title": "동기유발",
            "teacherScript": "교사가 말하는 구체적인 대사 (3-5문장)",
            "expectedResponse": "예상되는 학생 반응"
          },
          {
            "title": "경험 연결하기",
            "teacherScript": "교사 대사",
            "expectedResponse": "학생 반응"
          }
        ]
      },
      {
        "stageName": "2단계: 집중하기 (Focus)",
        "activities": [
          {
            "title": "핵심 개념 탐색",
            "teacherScript": "교사 대사",
            "expectedResponse": "학생 반응"
          }
        ]
      },
      {
        "stageName": "3단계: 조사하기 (Investigate)",
        "activities": [
          {
            "title": "탐구 활동",
            "teacherScript": "교사 대사",
            "expectedResponse": "학생 반응"
          }
        ]
      },
      {
        "stageName": "4단계: 조직하기 (Organize)",
        "activities": [
          {
            "title": "정보 정리",
            "teacherScript": "교사 대사",
            "expectedResponse": "학생 반응"
          }
        ]
      },
      {
        "stageName": "5단계: 일반화하기 (Generalize)",
        "activities": [
          {
            "title": "빅 아이디어 도출",
            "teacherScript": "교사 대사",
            "expectedResponse": "학생 반응"
          }
        ]
      },
      {
        "stageName": "6단계: 전이하기 (Transfer)",
        "activities": [
          {
            "title": "수행과제",
            "teacherScript": "교사 대사",
            "expectedResponse": "학생 반응"
          }
        ]
      },
      {
        "stageName": "7단계: 성찰하기 (Reflect)",
        "activities": [
          {
            "title": "배움 성찰",
            "teacherScript": "교사 대사",
            "expectedResponse": "학생 반응"
          }
        ]
      }
    ]
  }
}

각 활동의 teacherScript와 expectedResponse를 "${unitTitle}" 단원 내용에 맞게 구체적으로 작성하세요.
teacherScript는 교사가 실제로 말하는 대사를 3-5문장으로 작성하세요.
${grade}학년 수준에 맞는 자연스러운 말투를 사용하세요.
JSON만 출력하세요.`;
};
