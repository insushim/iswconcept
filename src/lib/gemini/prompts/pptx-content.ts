import type { GeneratedLesson } from '@/types/lesson';

export const generatePPTXContentPrompt = (lesson: GeneratedLesson, grade: number): string => {
  // 단원 전체 정보 추출
  const totalPeriods = lesson.unitOverview?.totalPeriods || 10;
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || lesson.lessonOverview.coreConcepts?.[0] || '핵심 개념';

  return `단원 전체(${totalPeriods}차시)에 대한 PPT 슬라이드 내용을 생성합니다.
각 7단계별로 해당 차시에 맞는 슬라이드를 생성합니다.

## 단원 정보

**단원명**: ${unitTitle}
**총 차시**: ${totalPeriods}차시
**학년**: ${grade}학년
**개념 렌즈**: ${conceptLens}

### 단원 개요
${JSON.stringify(lesson.unitOverview || lesson.lessonOverview, null, 2)}

### 7단계 설계
${JSON.stringify(lesson.stages, null, 2)}

### 단원 평가
${JSON.stringify(lesson.unitAssessment || {}, null, 2)}

## PPT 생성 요청

다음 JSON 형식으로 **단원 전체**의 수업용 PPT 슬라이드 내용을 생성하세요.
각 단계별로 해당 차시에 맞는 슬라이드를 포함합니다.
JSON 외의 다른 텍스트는 포함하지 마세요.

### 중요한 슬라이드 구성 지침:
1. **총 25~35개의 슬라이드**를 생성하세요 (${totalPeriods}차시 단원 전체 커버)
2. **각 단계(engage, focus, investigate, organize, generalize, transfer, reflect)마다 최소 3개의 슬라이드** 포함
3. **차시 정보를 명확히 표시**: 각 슬라이드에 해당 차시 표시
4. **imageDescription** 필드를 적극 활용하여 시각 자료 설명 포함
5. **layout 유형**을 다양하게 사용: "title", "content", "two_column", "image_text"
6. **단계별 색상** 적용: 각 단계의 고유 색상 사용
7. 학생들의 흥미를 끄는 시각적 요소 설명을 포함

### 단계별 색상 가이드:
- 관계맺기(engage): #F59E0B (주황)
- 집중하기(focus): #3B82F6 (파랑)
- 조사하기(investigate): #10B981 (초록)
- 조직하기(organize): #8B5CF6 (보라)
- 일반화하기(generalize): #EC4899 (분홍)
- 전이하기(transfer): #06B6D4 (청록)
- 성찰하기(reflect): #6366F1 (인디고)

{
  "slides": [
    {
      "id": "slide-1",
      "order": 1,
      "type": "title",
      "layout": "title",
      "title": "${unitTitle}",
      "subtitle": "${grade}학년 | ${totalPeriods}차시",
      "footer": "전북형 개념기반탐구(CBI) 단원",
      "stageColor": "#4F46E5",
      "imageDescription": "단원 주제와 관련된 매력적인 메인 이미지 (학생들의 호기심을 자극하는 사진 또는 일러스트)"
    },
    {
      "id": "slide-2",
      "order": 2,
      "type": "overview",
      "layout": "content",
      "title": "📚 단원 개요",
      "content": [
        "개념 렌즈: ${conceptLens}",
        "핵심 아이디어(빅 아이디어): ...",
        "총 ${totalPeriods}차시로 구성",
        "7단계 탐구 여정"
      ],
      "notes": "단원 첫 시간에 전체 학습 여정을 안내합니다.",
      "imageDescription": "7단계 탐구 과정을 보여주는 로드맵 또는 여정 다이어그램"
    },
    {
      "id": "slide-3",
      "order": 3,
      "type": "roadmap",
      "layout": "content",
      "title": "🗺️ 우리의 탐구 여정",
      "content": [
        "1️⃣ 개념인식: 관계맺기 → 집중하기",
        "2️⃣ 개념연결: 조사하기 → 조직하기",
        "3️⃣ 개념전이: 일반화하기 → 전이하기",
        "4️⃣ 개념성찰: 성찰하기"
      ],
      "notes": "7단계가 4개의 대단계(개념인식, 개념연결, 개념전이, 개념성찰)로 구성됨을 안내합니다.",
      "imageDescription": "7단계를 시각적으로 보여주는 순환 또는 단계 다이어그램 (각 단계별 색상 적용)"
    },
    {
      "id": "slide-4",
      "order": 4,
      "type": "questions",
      "layout": "content",
      "title": "❓ 단원 탐구 질문",
      "content": [
        "(사) 사실적 질문: ~은/는 무엇인가요?",
        "(개) 개념적 질문: 왜 ~할까요?",
        "(논) 논쟁적 질문: ~해야 할까요?"
      ],
      "notes": "단원 전체를 관통하는 핵심 탐구 질문을 소개합니다.",
      "imageDescription": "세 가지 유형의 질문을 구분하는 아이콘 또는 색상 코드 다이어그램"
    },
    {
      "id": "slide-5",
      "order": 5,
      "type": "stage_intro",
      "stage": "engage",
      "layout": "title",
      "title": "🔗 1단계: 관계맺기 (Engage)",
      "subtitle": "${lesson.stages?.engage?.periods || '1차시'} | 개념인식",
      "stageColor": "#F59E0B",
      "notes": "첫 번째 단계 시작을 안내합니다.",
      "imageDescription": "연결, 관계를 상징하는 이미지 (손을 잡는 모습, 연결된 고리 등)"
    },
    {
      "id": "slide-6",
      "order": 6,
      "type": "activity",
      "stage": "engage",
      "layout": "image_text",
      "title": "🔗 관계맺기: 무엇이 보이나요?",
      "content": ["자료를 관찰해 봅시다", "무엇이 보이나요?", "어떤 생각이 드나요?", "무엇이 궁금한가요?"],
      "stageColor": "#F59E0B",
      "notes": "See-Think-Wonder 사고루틴을 적용합니다. 학생들의 사전 지식과 경험을 이끌어냅니다.",
      "imageDescription": "단원 주제와 관련된 호기심을 자극하는 실제 사진 또는 상황 이미지"
    },
    {
      "id": "slide-7",
      "order": 7,
      "type": "thinking_routine",
      "stage": "engage",
      "layout": "two_column",
      "title": "💭 보고-생각하고-궁금해하기",
      "leftContent": ["👀 무엇이 보이나요?", "🤔 무엇이 생각나나요?"],
      "rightContent": ["❓ 무엇이 궁금한가요?", "💡 어떤 경험이 떠오르나요?"],
      "stageColor": "#F59E0B",
      "notes": "학생들의 다양한 반응을 수용적으로 받아들입니다.",
      "imageDescription": "생각하는 학생들 또는 See-Think-Wonder 루틴 다이어그램"
    },
    {
      "id": "slide-8",
      "order": 8,
      "type": "stage_intro",
      "stage": "focus",
      "layout": "title",
      "title": "🎯 2단계: 집중하기 (Focus)",
      "subtitle": "${lesson.stages?.focus?.periods || '2차시'} | 개념인식",
      "stageColor": "#3B82F6",
      "notes": "핵심 개념을 소개하는 단계입니다.",
      "imageDescription": "집중, 초점을 상징하는 이미지 (돋보기, 타겟 등)"
    },
    {
      "id": "slide-9",
      "order": 9,
      "type": "concept",
      "stage": "focus",
      "layout": "content",
      "title": "🎯 핵심 개념: ${conceptLens}",
      "content": ["${conceptLens}이란?", "정의:", "특징:", "예시:"],
      "stageColor": "#3B82F6",
      "notes": "핵심 개념을 명시적으로 소개하고 탐구 방향을 안내합니다.",
      "imageDescription": "핵심 개념을 시각적으로 표현하는 다이어그램 또는 개념 이미지"
    },
    {
      "id": "slide-10",
      "order": 10,
      "type": "thinking_routine",
      "stage": "focus",
      "layout": "two_column",
      "title": "📝 프레이어 모델",
      "leftContent": ["정의:", "특징:"],
      "rightContent": ["예시:", "비예시:"],
      "stageColor": "#3B82F6",
      "notes": "프레이어 모델을 활용하여 개념 정의를 형성합니다.",
      "imageDescription": "프레이어 모델 4분할 다이어그램"
    },
    {
      "id": "slide-11",
      "order": 11,
      "type": "question",
      "stage": "focus",
      "layout": "content",
      "title": "❓ 오늘의 탐구 질문",
      "content": ["이번 단원의 핵심 탐구 질문입니다", "(개) 왜 ~할까요?"],
      "stageColor": "#3B82F6",
      "notes": "학생들이 탐구할 핵심 질문을 제시합니다.",
      "imageDescription": "큰 물음표 또는 탐정/돋보기 이미지"
    },
    {
      "id": "slide-12",
      "order": 12,
      "type": "stage_intro",
      "stage": "investigate",
      "layout": "title",
      "title": "🔬 3단계: 조사하기 (Investigate)",
      "subtitle": "${lesson.stages?.investigate?.periods || '3-4차시'} | 개념연결",
      "stageColor": "#10B981",
      "notes": "탐구 활동을 시작하는 단계입니다.",
      "imageDescription": "조사, 탐구를 상징하는 이미지 (돋보기, 실험 도구, 책 등)"
    },
    {
      "id": "slide-13",
      "order": 13,
      "type": "activity",
      "stage": "investigate",
      "layout": "content",
      "title": "🔬 탐구 활동 안내",
      "content": [
        "1. 자료를 읽고 중요한 내용을 찾아요",
        "2. 모둠원과 발견한 것을 토의해요",
        "3. 발견한 것을 활동지에 기록해요",
        "4. 패턴과 공통점을 찾아봐요"
      ],
      "stageColor": "#10B981",
      "notes": "탐구 활동 순서를 명확히 안내합니다.",
      "imageDescription": "단계별 과정을 보여주는 순서도 또는 체크리스트"
    },
    {
      "id": "slide-14",
      "order": 14,
      "type": "materials",
      "stage": "investigate",
      "layout": "two_column",
      "title": "📋 모둠별 탐구 자료",
      "leftContent": ["1모둠: 사례 A", "2모둠: 사례 B"],
      "rightContent": ["3모둠: 사례 C", "4모둠: 사례 D"],
      "stageColor": "#10B981",
      "notes": "각 모둠에 다른 사례를 배분하여 직소 활동을 준비합니다.",
      "imageDescription": "다양한 사례 자료 이미지 또는 모둠 활동하는 학생들"
    },
    {
      "id": "slide-15",
      "order": 15,
      "type": "scaffolding",
      "stage": "investigate",
      "layout": "content",
      "title": "💡 탐구 도움 질문",
      "content": [
        "어떤 공통점이 보이나요?",
        "왜 그런 현상이 일어났을까요?",
        "다른 경우에도 적용될까요?",
        "이것은 우리가 배운 개념과 어떻게 연결되나요?"
      ],
      "stageColor": "#10B981",
      "notes": "스캐폴딩 질문으로 탐구를 촉진합니다.",
      "imageDescription": "물음표와 전구 아이콘이 함께 있는 이미지"
    },
    {
      "id": "slide-16",
      "order": 16,
      "type": "stage_intro",
      "stage": "organize",
      "layout": "title",
      "title": "📊 4단계: 조직 및 정리하기 (Organize)",
      "subtitle": "${lesson.stages?.organize?.periods || '5-6차시'} | 개념연결",
      "stageColor": "#8B5CF6",
      "notes": "발견한 내용을 정리하는 단계입니다.",
      "imageDescription": "정리, 분류를 상징하는 이미지 (폴더, 차트, 마인드맵 등)"
    },
    {
      "id": "slide-17",
      "order": 17,
      "type": "activity",
      "stage": "organize",
      "layout": "content",
      "title": "📊 발견한 내용 정리하기",
      "content": [
        "공통점은 무엇인가요?",
        "차이점은 무엇인가요?",
        "어떤 패턴이 보이나요?",
        "왜 그런 패턴이 나타났을까요?"
      ],
      "stageColor": "#8B5CF6",
      "notes": "그래픽 조직자를 활용하여 정보를 구조화합니다.",
      "imageDescription": "벤다이어그램, 표, 마인드맵 등의 그래픽 조직자 예시"
    },
    {
      "id": "slide-18",
      "order": 18,
      "type": "thinking_routine",
      "stage": "organize",
      "layout": "two_column",
      "title": "✏️ 교차비교차트",
      "leftContent": ["항목", "공통점", "차이점"],
      "rightContent": ["패턴", "의미", "연결"],
      "stageColor": "#8B5CF6",
      "notes": "Compare and Contrast 루틴을 적용합니다.",
      "imageDescription": "교차비교차트 템플릿 이미지"
    },
    {
      "id": "slide-19",
      "order": 19,
      "type": "sharing",
      "stage": "organize",
      "layout": "content",
      "title": "🎨 갤러리 워크",
      "content": [
        "모둠별로 정리한 내용을 전시해요",
        "다른 모둠의 내용을 살펴봐요",
        "좋은 점을 메모해요",
        "공통점을 찾아봐요"
      ],
      "stageColor": "#8B5CF6",
      "notes": "갤러리 워크를 통해 모둠 간 결과를 공유합니다.",
      "imageDescription": "갤러리 워크 활동하는 학생들 또는 전시된 포스터들"
    },
    {
      "id": "slide-20",
      "order": 20,
      "type": "stage_intro",
      "stage": "generalize",
      "layout": "title",
      "title": "💡 5단계: 일반화하기 (Generalize)",
      "subtitle": "${lesson.stages?.generalize?.periods || '7차시'} | 개념전이",
      "stageColor": "#EC4899",
      "notes": "빅 아이디어를 도출하는 핵심 단계입니다.",
      "imageDescription": "아이디어, 발견을 상징하는 이미지 (전구, 퍼즐 조각이 맞춰지는 모습)"
    },
    {
      "id": "slide-21",
      "order": 21,
      "type": "activity",
      "stage": "generalize",
      "layout": "content",
      "title": "💡 우리가 발견한 것",
      "content": [
        "여러 사례에서 공통으로 발견한 것은?",
        "이것이 다른 상황에서도 적용될까요?",
        "한 문장으로 정리하면?",
        "이것이 우리의 '빅 아이디어'입니다!"
      ],
      "stageColor": "#EC4899",
      "notes": "귀납적으로 일반화를 도출하도록 안내합니다.",
      "imageDescription": "여러 조각이 하나의 큰 그림을 만드는 퍼즐 이미지"
    },
    {
      "id": "slide-22",
      "order": 22,
      "type": "big_idea",
      "stage": "generalize",
      "layout": "content",
      "title": "⭐ 빅 아이디어 (일반화)",
      "content": ["우리가 발견한 빅 아이디어:", "\"~은/는 ~하기 때문에 ~하다\""],
      "stageColor": "#EC4899",
      "notes": "학생들이 도출한 일반화를 강조하여 기록합니다.",
      "imageDescription": "별 또는 보석 아이콘과 함께 강조된 텍스트 박스"
    },
    {
      "id": "slide-23",
      "order": 23,
      "type": "stage_intro",
      "stage": "transfer",
      "layout": "title",
      "title": "🚀 6단계: 전이하기 (Transfer)",
      "subtitle": "${lesson.stages?.transfer?.periods || '8-9차시'} | 개념전이",
      "stageColor": "#06B6D4",
      "notes": "배운 개념을 새로운 상황에 적용하는 단계입니다.",
      "imageDescription": "전이, 적용을 상징하는 이미지 (화살표, 연결, 확장)"
    },
    {
      "id": "slide-24",
      "order": 24,
      "type": "task",
      "stage": "transfer",
      "layout": "content",
      "title": "🚀 수행과제 안내",
      "content": [
        "🎯 목표(G): ...",
        "🎭 역할(R): ...",
        "👥 청중(A): ...",
        "📍 상황(S): ...",
        "📦 산출물(P): ...",
        "📋 기준(S): ..."
      ],
      "stageColor": "#06B6D4",
      "notes": "GRASPS 수행과제의 각 요소를 명확히 안내합니다.",
      "imageDescription": "미션 또는 과제를 상징하는 이미지"
    },
    {
      "id": "slide-25",
      "order": 25,
      "type": "rubric",
      "stage": "transfer",
      "layout": "content",
      "title": "📋 평가 기준 (루브릭)",
      "content": [
        "지식·이해: 잘함 / 보통 / 노력요함",
        "과정·기능: 잘함 / 보통 / 노력요함",
        "가치·태도: 잘함 / 보통 / 노력요함"
      ],
      "stageColor": "#06B6D4",
      "notes": "3단계 루브릭으로 평가 기준을 공유합니다.",
      "imageDescription": "체크리스트 또는 루브릭 표 이미지"
    },
    {
      "id": "slide-26",
      "order": 26,
      "type": "activity",
      "stage": "transfer",
      "layout": "content",
      "title": "✨ 수행과제 수행",
      "content": [
        "우리의 빅 아이디어를 적용해요",
        "창의적으로 문제를 해결해요",
        "산출물을 만들어요",
        "발표를 준비해요"
      ],
      "stageColor": "#06B6D4",
      "notes": "수행과제 수행 시 개념 적용을 강조합니다.",
      "imageDescription": "협력하여 프로젝트를 수행하는 학생들"
    },
    {
      "id": "slide-27",
      "order": 27,
      "type": "stage_intro",
      "stage": "reflect",
      "layout": "title",
      "title": "🪞 7단계: 성찰하기 (Reflect)",
      "subtitle": "${lesson.stages?.reflect?.periods || '10차시'} | 개념성찰",
      "stageColor": "#6366F1",
      "notes": "단원을 마무리하며 학습을 성찰하는 단계입니다.",
      "imageDescription": "거울, 성찰을 상징하는 이미지"
    },
    {
      "id": "slide-28",
      "order": 28,
      "type": "thinking_routine",
      "stage": "reflect",
      "layout": "content",
      "title": "🪞 예전에는-지금은",
      "content": [
        "예전에는 ___ 라고 생각했어요.",
        "지금은 ___ 라고 생각해요.",
        "내 생각이 바뀐 이유는 ___"
      ],
      "stageColor": "#6366F1",
      "notes": "I Used to Think... Now I Think... 루틴을 적용합니다.",
      "imageDescription": "before/after 또는 변화를 보여주는 이미지"
    },
    {
      "id": "slide-29",
      "order": 29,
      "type": "reflection",
      "stage": "reflect",
      "layout": "two_column",
      "title": "📝 나의 배움 일지",
      "leftContent": ["오늘 새롭게 알게 된 것", "가장 인상 깊었던 것"],
      "rightContent": ["더 궁금한 것", "실생활에서 활용할 점"],
      "stageColor": "#6366F1",
      "notes": "학생 개인별 성찰 시간을 줍니다.",
      "imageDescription": "일기장/노트 이미지 또는 연필로 쓰는 손"
    },
    {
      "id": "slide-30",
      "order": 30,
      "type": "self_assessment",
      "stage": "reflect",
      "layout": "content",
      "title": "⭐ 자기평가",
      "content": [
        "핵심 개념을 이해했나요? ⭐⭐⭐",
        "탐구 활동에 적극 참여했나요? ⭐⭐⭐",
        "빅 아이디어를 발견했나요? ⭐⭐⭐",
        "새로운 상황에 적용할 수 있나요? ⭐⭐⭐"
      ],
      "stageColor": "#6366F1",
      "notes": "자기평가 체크리스트를 작성합니다.",
      "imageDescription": "체크리스트와 별 아이콘"
    },
    {
      "id": "slide-31",
      "order": 31,
      "type": "summary",
      "layout": "content",
      "title": "📌 단원 정리",
      "content": [
        "핵심 개념: ${conceptLens}",
        "빅 아이디어(일반화): ...",
        "탐구 질문에 대한 우리의 답: ...",
        "다음 단원 예고: ..."
      ],
      "stageColor": "#4F46E5",
      "imageDescription": "체크마크가 있는 요약 박스 또는 핵심 내용을 담은 포스트잇"
    },
    {
      "id": "slide-32",
      "order": 32,
      "type": "closing",
      "layout": "title",
      "title": "잘했어요! 👏",
      "subtitle": "${totalPeriods}차시의 탐구 여정을 마쳤습니다!",
      "content": ["훌륭한 탐구자가 되어 빅 아이디어를 발견한 여러분, 수고했어요!"],
      "stageColor": "#4F46E5",
      "imageDescription": "박수치는 손 또는 축하 이미지, 밝고 긍정적인 분위기"
    }
  ],
  "designTheme": {
    "primaryColor": "#4F46E5",
    "stageColors": {
      "engage": "#F59E0B",
      "focus": "#3B82F6",
      "investigate": "#10B981",
      "organize": "#8B5CF6",
      "generalize": "#EC4899",
      "transfer": "#06B6D4",
      "reflect": "#6366F1"
    },
    "fontFamily": "맑은 고딕",
    "titleSize": 44,
    "contentSize": 24
  }
}

## ⚠️ 매우 중요: 빈 슬라이드 절대 금지!

**모든 슬라이드는 반드시 실제 내용을 포함해야 합니다!**

### 나쁜 예 (절대 하지 마세요):
- "정의:", "특징:", "예시:" ← 이렇게 항목만 있고 내용이 없으면 안됨
- "..." ← 이런 플레이스홀더 금지
- "~은/는 무엇인가요?" ← 이렇게 일반적인 질문만 있으면 안됨
- content 배열에 2-3개 항목만 있음 ← 부족함

### 좋은 예 (이렇게 작성하세요):
- "정의: ${conceptLens}이란 작품 속에서 작가가 만들어낸 상상의 세계입니다."
- "특징: 현실과 다를 수 있고, 작가의 의도가 담겨 있습니다."
- "예시: '마당을 나온 암탉'의 세계, '어린 왕자'의 소행성"
- content 배열에 4-6개의 구체적인 항목

## PPT 설계 원칙

1. **빈 슬라이드 금지**: 모든 슬라이드에 "${unitTitle}" 단원의 실제 내용 포함
2. **구체적 내용**: "..."이나 플레이스홀더 대신 실제 단원에 맞는 구체적인 문장
3. **풍부한 content**: 모든 content 배열에는 최소 4-6개의 구체적인 항목
4. **단계별 색상**: 7단계 각각의 고유 색상 사용
5. **${grade}학년 수준**: 적절한 어휘와 친근한 톤
6. **다양한 레이아웃**: title, content, two_column, image_text 골고루 사용

## 각 단계별 필수 슬라이드 내용

### 전이하기(transfer) - 최소 5개 슬라이드:
1. 수행과제 안내 슬라이드: GRASPS 요소를 **이 단원에 맞게 구체적으로** 작성
   - "🎯 목표: 우리 반 친구들에게 ${conceptLens}의 중요성을 알리는 포스터 만들기"
   - "🎭 역할: 문학 홍보 대사"
   - 등 모든 항목 구체적으로
2. 수행과제 진행 단계 슬라이드
3. 작품 제작 가이드 슬라이드
4. 발표 방법 슬라이드
5. 평가 기준(루브릭) 슬라이드 - 각 기준 구체적으로

### 성찰하기(reflect) - 최소 5개 슬라이드:
1. 예전에는-지금은 슬라이드: 구체적인 예시 포함
   - "예전에는 '${conceptLens}'을 단순히 이야기라고 생각했어요."
   - "지금은 '${conceptLens}'이 작가의 생각과 메시지를 담은 세계라는 것을 알게 되었어요."
2. 3-2-1 정리 슬라이드
3. 자기평가 슬라이드: 구체적인 평가 항목 4-5개
4. 동료평가 슬라이드
5. 단원 정리 및 빅 아이디어 확인 슬라이드

## 최종 체크리스트 (생성 전 확인)
- [ ] 모든 슬라이드에 실제 단원 내용이 포함되어 있는가?
- [ ] "..."이나 빈 플레이스홀더가 없는가?
- [ ] 모든 content 배열에 4개 이상의 항목이 있는가?
- [ ] 전이하기/성찰하기 단계에 각각 5개 이상 슬라이드가 있는가?
- [ ] ${grade}학년 수준에 맞는 어휘를 사용했는가?

반드시 유효한 JSON 형식으로만 응답하세요.
**위 템플릿의 모든 내용을 "${unitTitle}" 단원에 맞게 구체적으로 수정하여 생성하세요!**`;
};
