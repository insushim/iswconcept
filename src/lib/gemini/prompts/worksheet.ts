import type { GeneratedLesson } from '@/types/lesson';

export const generateWorksheetPrompt = (lesson: GeneratedLesson, grade: number, subject: string): string => {
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || lesson.lessonOverview.coreConcepts?.[0] || '핵심 개념';

  return `${grade}학년 ${subject} "${unitTitle}" 단원 학습지를 JSON으로 생성하세요.
개념 렌즈: ${conceptLens}

반드시 아래 JSON 형식을 정확히 따르세요. JSON만 출력하세요.

{
  "worksheet": {
    "title": "${unitTitle} 탐구 학습지",
    "grade": "${grade}학년",
    "subject": "${subject}",
    "conceptLens": "${conceptLens}",
    "stages": [
      {
        "stage": "engage",
        "name": "1단계: 관계맺기",
        "questions": [
          {"num": 1, "text": "질문1 내용"},
          {"num": 2, "text": "질문2 내용"}
        ]
      },
      {
        "stage": "focus",
        "name": "2단계: 집중하기",
        "questions": [
          {"num": 3, "text": "질문3 내용"},
          {"num": 4, "text": "질문4 내용"}
        ]
      },
      {
        "stage": "investigate",
        "name": "3단계: 조사하기",
        "questions": [
          {"num": 5, "text": "질문5 내용"},
          {"num": 6, "text": "질문6 내용"}
        ]
      },
      {
        "stage": "organize",
        "name": "4단계: 조직하기",
        "questions": [
          {"num": 7, "text": "질문7 내용"},
          {"num": 8, "text": "질문8 내용"}
        ]
      },
      {
        "stage": "generalize",
        "name": "5단계: 일반화하기",
        "questions": [
          {"num": 9, "text": "빅 아이디어 질문"},
          {"num": 10, "text": "전이 생각 질문"}
        ]
      },
      {
        "stage": "transfer",
        "name": "6단계: 전이하기",
        "questions": [
          {"num": 11, "text": "수행과제 계획 질문"},
          {"num": 12, "text": "적용 질문"}
        ]
      },
      {
        "stage": "reflect",
        "name": "7단계: 성찰하기",
        "questions": [
          {"num": 13, "text": "생각 변화 질문"},
          {"num": 14, "text": "배운 점 정리 질문"}
        ]
      }
    ]
  }
}

각 질문의 text를 "${unitTitle}" 단원과 "${conceptLens}" 개념에 맞게 구체적으로 작성하세요.
${grade}학년 수준에 맞는 쉬운 어휘를 사용하세요.
JSON만 출력하세요.`;
};
