import type { GeneratedLesson } from '@/types/lesson';

export const generatePPTXContentPrompt = (lesson: GeneratedLesson, grade: number): string => {
  return `수업 PPT 슬라이드 내용을 생성합니다.

## 수업 정보

${JSON.stringify(lesson.lessonOverview, null, 2)}

## 수업 단계 정보

${JSON.stringify(lesson.stages, null, 2)}

## 학년: ${grade}학년

## PPT 생성 요청

다음 JSON 형식으로 수업용 PPT 슬라이드 내용을 생성하세요.
JSON 외의 다른 텍스트는 포함하지 마세요.

### 중요한 슬라이드 구성 지침:
1. **총 15~20개의 슬라이드**를 생성하세요
2. **각 단계(engage, focus, investigate, organize, generalize, transfer, reflect)마다 최소 2개의 슬라이드** 포함
3. **imageDescription** 필드를 적극 활용하여 시각 자료 설명 포함
4. **layout 유형**을 다양하게 사용: "title", "content", "two_column", "image_text"
5. 학생들의 흥미를 끄는 시각적 요소 설명을 포함

{
  "slides": [
    {
      "id": "slide-1",
      "order": 1,
      "type": "title",
      "layout": "title",
      "title": "${lesson.lessonOverview.title}",
      "subtitle": "${grade}학년",
      "footer": "전북형 개념기반탐구 수업",
      "imageDescription": "수업 주제와 관련된 매력적인 메인 이미지 (예: 주제를 상징하는 일러스트, 학생들이 호기심을 가질 만한 사진)"
    },
    {
      "id": "slide-2",
      "order": 2,
      "type": "objectives",
      "layout": "content",
      "title": "📚 오늘의 학습 목표",
      "content": ["학습 목표 1", "학습 목표 2"],
      "notes": "학습 목표를 학생들과 함께 읽어봅니다.",
      "imageDescription": "목표 달성을 상징하는 아이콘 또는 체크리스트 이미지"
    },
    {
      "id": "slide-3",
      "order": 3,
      "type": "stage",
      "stage": "engage",
      "layout": "image_text",
      "title": "🔗 관계맺기 (Engage)",
      "content": ["동기유발 질문 또는 활동 안내", "무엇이 보이나요?", "무엇이 궁금한가요?"],
      "notes": "See-Think-Wonder 루틴 적용. 학생들의 사전 지식을 활성화합니다.",
      "imageDescription": "학생들의 호기심을 자극하는 실제 사진 또는 상황 이미지 (주제와 직접 연관된 시각 자료)"
    },
    {
      "id": "slide-4",
      "order": 4,
      "type": "activity",
      "stage": "engage",
      "layout": "two_column",
      "title": "💭 생각해 봅시다",
      "leftContent": ["무엇이 보이나요?", "무엇이 떠오르나요?"],
      "rightContent": ["무엇이 궁금한가요?", "어떤 경험이 생각나나요?"],
      "notes": "학생들의 다양한 반응을 수용합니다.",
      "imageDescription": "생각하는 학생들 또는 물음표/전구 아이콘"
    },
    {
      "id": "slide-5",
      "order": 5,
      "type": "stage",
      "stage": "focus",
      "layout": "image_text",
      "title": "🔍 집중하기 (Focus)",
      "content": ["오늘 탐구할 핵심 개념을 소개합니다"],
      "notes": "개념의 정의와 예시를 함께 설명합니다.",
      "imageDescription": "핵심 개념을 시각적으로 표현하는 다이어그램 또는 개념 이미지"
    },
    {
      "id": "slide-6",
      "order": 6,
      "type": "concepts",
      "stage": "focus",
      "layout": "content",
      "title": "💡 핵심 개념",
      "content": ["핵심 개념 1에 대한 설명", "핵심 개념 2에 대한 설명"],
      "notes": "각 개념의 정의와 예시를 함께 설명합니다.",
      "imageDescription": "개념들을 연결하는 개념도 또는 마인드맵 형태의 다이어그램"
    },
    {
      "id": "slide-7",
      "order": 7,
      "type": "question",
      "stage": "focus",
      "layout": "content",
      "title": "❓ 오늘의 탐구 질문",
      "content": ["개념적 질문 (왜? 어떻게?)"],
      "notes": "학생들이 스스로 생각할 시간을 줍니다.",
      "imageDescription": "큰 물음표 또는 탐정/돋보기 이미지"
    },
    {
      "id": "slide-8",
      "order": 8,
      "type": "stage",
      "stage": "investigate",
      "layout": "image_text",
      "title": "🔬 조사하기 (Investigate)",
      "content": ["탐구 활동을 시작합니다"],
      "notes": "모둠별로 순회하며 지도합니다.",
      "imageDescription": "조사/탐구 활동을 하는 학생들 또는 실험 도구 이미지"
    },
    {
      "id": "slide-9",
      "order": 9,
      "type": "activity",
      "stage": "investigate",
      "layout": "content",
      "title": "📋 활동 안내",
      "content": [
        "1. 첫 번째 단계",
        "2. 두 번째 단계",
        "3. 세 번째 단계",
        "4. 결과 정리하기"
      ],
      "notes": "각 단계를 명확히 안내하고, 시간을 알려줍니다.",
      "imageDescription": "단계별 과정을 보여주는 순서도 또는 번호가 있는 체크리스트"
    },
    {
      "id": "slide-10",
      "order": 10,
      "type": "stage",
      "stage": "organize",
      "layout": "image_text",
      "title": "📊 조직하기 (Organize)",
      "content": ["발견한 내용을 정리합니다"],
      "notes": "그래픽 조직자를 활용합니다.",
      "imageDescription": "벤다이어그램, 표, 마인드맵 등의 그래픽 조직자 예시"
    },
    {
      "id": "slide-11",
      "order": 11,
      "type": "activity",
      "stage": "organize",
      "layout": "two_column",
      "title": "✏️ 정리해 봅시다",
      "leftContent": ["발견한 사실들", "공통점과 차이점"],
      "rightContent": ["중요한 패턴", "핵심 아이디어"],
      "notes": "학생들이 발견한 내용을 구조화하도록 돕습니다.",
      "imageDescription": "정리/분류 활동을 하는 학생들 또는 표/차트 이미지"
    },
    {
      "id": "slide-12",
      "order": 12,
      "type": "stage",
      "stage": "generalize",
      "layout": "content",
      "title": "🌟 일반화하기 (Generalize)",
      "content": [
        "우리가 발견한 것:",
        "${lesson.lessonOverview.bigIdeas[0] || '일반화 진술문'}"
      ],
      "notes": "학생들이 직접 일반화를 도출하도록 합니다.",
      "imageDescription": "전구(아이디어) 아이콘 또는 퍼즐 조각이 맞춰지는 이미지"
    },
    {
      "id": "slide-13",
      "order": 13,
      "type": "content",
      "stage": "generalize",
      "layout": "content",
      "title": "💎 빅 아이디어",
      "content": ["일반화된 개념을 정리합니다", "이것은 다른 상황에서도 적용됩니다"],
      "notes": "일반화의 전이 가능성을 강조합니다.",
      "imageDescription": "핵심 아이디어를 강조하는 배너 또는 하이라이트 박스"
    },
    {
      "id": "slide-14",
      "order": 14,
      "type": "stage",
      "stage": "transfer",
      "layout": "image_text",
      "title": "🚀 전이하기 (Transfer)",
      "content": ["배운 것을 새로운 상황에 적용합니다"],
      "notes": "다른 상황에서의 적용을 생각해봅니다.",
      "imageDescription": "다양한 상황/맥락을 보여주는 이미지 콜라주"
    },
    {
      "id": "slide-15",
      "order": 15,
      "type": "activity",
      "stage": "transfer",
      "layout": "content",
      "title": "🎯 적용해 봅시다",
      "content": ["새로운 상황 제시", "어떻게 적용할 수 있을까요?"],
      "notes": "실생활 연계 또는 다른 교과와의 연결점을 찾습니다.",
      "imageDescription": "실생활 적용 예시를 보여주는 이미지"
    },
    {
      "id": "slide-16",
      "order": 16,
      "type": "stage",
      "stage": "reflect",
      "layout": "content",
      "title": "🪞 성찰하기 (Reflect)",
      "content": [
        "예전에는 _____ 라고 생각했어요.",
        "지금은 _____ 라고 생각해요.",
        "더 알고 싶은 것: _____"
      ],
      "notes": "학습 성찰 시간을 충분히 줍니다.",
      "imageDescription": "거울 또는 생각하는 사람 실루엣 이미지"
    },
    {
      "id": "slide-17",
      "order": 17,
      "type": "reflection",
      "stage": "reflect",
      "layout": "two_column",
      "title": "📝 나의 배움 일지",
      "leftContent": ["오늘 새롭게 알게 된 것", "가장 재미있었던 것"],
      "rightContent": ["더 궁금한 것", "실생활에서 활용할 점"],
      "notes": "학생 개인별 성찰 시간을 줍니다.",
      "imageDescription": "일기장/노트 이미지 또는 연필로 쓰는 손"
    },
    {
      "id": "slide-18",
      "order": 18,
      "type": "summary",
      "layout": "content",
      "title": "📌 오늘 배운 내용",
      "content": [
        "핵심 개념: ...",
        "일반화(빅 아이디어): ...",
        "다음 시간 예고: ..."
      ],
      "imageDescription": "체크마크가 있는 요약 박스 또는 핵심 내용을 담은 포스트잇"
    },
    {
      "id": "slide-19",
      "order": 19,
      "type": "content",
      "layout": "title",
      "title": "잘했어요! 👏",
      "content": ["오늘 열심히 탐구한 여러분, 수고했어요!"],
      "imageDescription": "박수치는 손 또는 축하 이미지, 밝고 긍정적인 분위기"
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

1. **시각적 풍부함**: 모든 슬라이드에 imageDescription을 포함하여 시각 자료 제안
2. **단계별 구분**: 각 탐구 단계를 이모지와 함께 명확히 표시 (🔗🔍🔬📊🌟🚀🪞)
3. **다양한 레이아웃**: title, content, two_column, image_text 레이아웃을 골고루 사용
4. **${grade}학년 수준**: 적절한 어휘와 글자 크기 사용, 친근한 톤
5. **상호작용 유도**: 질문, 활동 안내 슬라이드 포함
6. **노트 활용**: 교사용 발표자 노트 상세 작성
7. **충분한 슬라이드 수**: 15~20개의 슬라이드로 수업 전체를 커버

### imageDescription 작성 가이드:
- 수업 주제에 맞는 구체적인 이미지 설명
- 학생들의 흥미를 끌 수 있는 시각 자료
- 개념 이해를 돕는 다이어그램, 차트, 실사 이미지
- 이모지나 아이콘 활용 제안 포함

반드시 유효한 JSON 형식으로만 응답하세요.`;
};
