import type { GeneratedLesson } from '@/types/lesson';

export const generatePPTXContentPrompt = (lesson: GeneratedLesson, grade: number): string => {
  return `수업 PPT 슬라이드 내용을 생성합니다.

## 수업 정보

${JSON.stringify(lesson.lessonOverview, null, 2)}

## 학년: ${grade}학년

## PPT 생성 요청

다음 JSON 형식으로 수업용 PPT 슬라이드 내용을 생성하세요.
JSON 외의 다른 텍스트는 포함하지 마세요.

{
  "slides": [
    {
      "id": "slide-1",
      "order": 1,
      "type": "title",
      "layout": "title",
      "title": "${lesson.lessonOverview.title}",
      "subtitle": "${grade}학년",
      "footer": "전북형 개념기반탐구 수업"
    },
    {
      "id": "slide-2",
      "order": 2,
      "type": "objective",
      "layout": "content",
      "title": "오늘의 학습 목표",
      "content": ["학습 목표 1", "학습 목표 2"],
      "notes": "학습 목표를 학생들과 함께 읽어봅니다."
    },
    {
      "id": "slide-3",
      "order": 3,
      "type": "content",
      "stage": "engage",
      "layout": "content",
      "title": "관계맺기: 무엇이 보이나요?",
      "content": ["동기유발 질문 또는 활동 안내"],
      "notes": "See-Think-Wonder 루틴 적용"
    },
    {
      "id": "slide-4",
      "order": 4,
      "type": "activity",
      "stage": "engage",
      "layout": "content",
      "title": "생각해 봅시다",
      "content": [
        "무엇이 보이나요?",
        "무엇이 떠오르나요?",
        "무엇이 궁금한가요?"
      ],
      "notes": "학생들의 다양한 반응을 수용합니다."
    },
    {
      "id": "slide-5",
      "order": 5,
      "type": "content",
      "stage": "focus",
      "layout": "content",
      "title": "집중하기: 핵심 개념",
      "content": ["핵심 개념 설명"],
      "notes": "개념의 정의와 예시를 함께 설명합니다."
    },
    {
      "id": "slide-6",
      "order": 6,
      "type": "question",
      "stage": "focus",
      "layout": "content",
      "title": "오늘의 탐구 질문",
      "content": ["개념적 질문"],
      "notes": "학생들이 스스로 생각할 시간을 줍니다."
    },
    {
      "id": "slide-7",
      "order": 7,
      "type": "activity",
      "stage": "investigate",
      "layout": "content",
      "title": "조사하기: 탐구 활동",
      "content": [
        "활동 안내:",
        "1. 첫 번째 단계",
        "2. 두 번째 단계",
        "3. 세 번째 단계"
      ],
      "notes": "모둠별로 순회하며 지도합니다."
    },
    {
      "id": "slide-8",
      "order": 8,
      "type": "content",
      "stage": "organize",
      "layout": "content",
      "title": "조직 및 정리하기",
      "content": ["정리 활동 안내"],
      "notes": "그래픽 조직자를 활용합니다."
    },
    {
      "id": "slide-9",
      "order": 9,
      "type": "content",
      "stage": "generalize",
      "layout": "content",
      "title": "일반화하기: 우리가 발견한 것",
      "content": [
        "빅 아이디어:",
        "${lesson.lessonOverview.bigIdeas[0] || '일반화 진술문'}"
      ],
      "notes": "학생들이 직접 일반화를 도출하도록 합니다."
    },
    {
      "id": "slide-10",
      "order": 10,
      "type": "activity",
      "stage": "transfer",
      "layout": "content",
      "title": "전이하기: 새로운 상황에 적용",
      "content": ["적용 활동 안내"],
      "notes": "다른 상황에서의 적용을 생각해봅니다."
    },
    {
      "id": "slide-11",
      "order": 11,
      "type": "reflection",
      "stage": "reflect",
      "layout": "content",
      "title": "성찰하기",
      "content": [
        "예전에는 _____ 라고 생각했어요.",
        "지금은 _____ 라고 생각해요.",
        "더 알고 싶은 것: _____"
      ],
      "notes": "학습 성찰 시간을 충분히 줍니다."
    },
    {
      "id": "slide-12",
      "order": 12,
      "type": "summary",
      "layout": "content",
      "title": "오늘 배운 내용",
      "content": [
        "핵심 개념: ...",
        "일반화: ...",
        "다음 시간 예고: ..."
      ]
    }
  ],
  "designTheme": {
    "primaryColor": "#4F46E5",
    "secondaryColor": "#10B981",
    "fontFamily": "맑은 고딕",
    "titleSize": 44,
    "contentSize": 24
  }
}

## PPT 설계 원칙

1. **시각적 명료성**: 한 슬라이드에 핵심 내용만 포함
2. **단계별 구분**: 각 탐구 단계를 명확히 표시
3. **${grade}학년 수준**: 적절한 어휘와 글자 크기 사용
4. **상호작용 유도**: 질문, 활동 안내 슬라이드 포함
5. **노트 활용**: 교사용 발표자 노트 상세 작성

반드시 유효한 JSON 형식으로만 응답하세요.`;
};
