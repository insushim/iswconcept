// 추가 사고 루틴 라이브러리
// 기존 thinking-routines.ts를 보완하는 추가 루틴들

import { ThinkingRoutineTemplate } from './thinking-routines';

export const ADDITIONAL_THINKING_ROUTINES: ThinkingRoutineTemplate[] = [
  {
    id: 'word-phrase-sentence',
    name: '단어-구-문장',
    nameEn: 'Word-Phrase-Sentence',
    description: '텍스트에서 핵심을 추출하고 의미를 파악하는 루틴',
    suitableStages: ['focus', 'investigate'],
    steps: [
      '주목한 단어 선택하기 (Word)',
      '의미 있는 구 찾기 (Phrase)',
      '중요한 문장 선택하기 (Sentence)',
      '선택한 이유 설명하기'
    ],
    exampleQuestions: [
      '이 글에서 가장 눈에 띄는 단어는?',
      '어떤 구가 의미 있게 느껴졌나요?',
      '가장 중요한 문장은 무엇인가요?',
      '왜 그것을 선택했나요?'
    ],
    tips: [
      '개인 후 모둠 공유로 진행',
      '선택 이유에 대한 깊은 대화 유도',
      '읽기 자료 분석에 효과적'
    ]
  },
  {
    id: 'step-inside',
    name: '입장 바꿔 생각하기',
    nameEn: 'Step Inside',
    description: '다른 관점에서 상황을 이해하는 관점 수용 루틴',
    suitableStages: ['transfer', 'investigate'],
    steps: [
      '특정 관점/입장 선택하기',
      '그 입장에서 무엇이 보이나요?',
      '그 입장에서 무엇을 알거나 믿나요?',
      '그 입장에서 무엇에 관심이 있나요?'
    ],
    exampleQuestions: [
      '만약 당신이 ___라면 어떻게 느끼겠어요?',
      '그 사람의 눈으로 보면 무엇이 보일까요?',
      '그 입장에서는 무엇이 중요할까요?',
      '왜 그렇게 생각했을까요?'
    ],
    tips: [
      '역사적 인물, 문학 캐릭터 등 다양하게 활용',
      '감정이입 능력 개발에 효과적',
      '역할극과 병행 가능'
    ]
  },
  {
    id: 'what-if',
    name: '만약 ~라면?',
    nameEn: 'What If...?',
    description: '가정적 상황을 통해 창의적 사고를 촉진하는 루틴',
    suitableStages: ['transfer', 'generalize'],
    steps: [
      '가정적 상황 제시하기',
      '결과 상상하기',
      '이유 탐색하기',
      '가능성 평가하기'
    ],
    exampleQuestions: [
      '만약 ___가 없었다면 어떻게 되었을까요?',
      '만약 ___가 바뀌면 어떤 일이 일어날까요?',
      '만약 당신이 ___라면 어떻게 하겠어요?',
      '어떤 결과가 예상되나요?'
    ],
    tips: [
      '열린 질문으로 창의성 장려',
      '제한 없이 상상력 발휘하도록 유도',
      '실생활 연결로 의미 부여'
    ]
  },
  {
    id: 'the-4cs',
    name: '4Cs (연결-도전-개념-변화)',
    nameEn: 'The 4Cs',
    description: '텍스트나 아이디어에 대한 깊은 성찰을 위한 루틴',
    suitableStages: ['generalize', 'reflect'],
    steps: [
      '연결(Connections): 개인적 연결점 찾기',
      '도전(Challenge): 도전받거나 논쟁적인 부분 찾기',
      '개념(Concepts): 핵심 개념 식별하기',
      '변화(Changes): 사고의 변화 인식하기'
    ],
    exampleQuestions: [
      '이것이 당신의 경험과 어떻게 연결되나요?',
      '어떤 부분이 도전적이거나 불편했나요?',
      '핵심 개념이나 아이디어는 무엇인가요?',
      '어떤 생각이 바뀌었나요?'
    ],
    tips: [
      '읽기 후 활동에 효과적',
      '깊은 성찰을 위한 충분한 시간 제공',
      '개인 후 소그룹 공유'
    ]
  },
  {
    id: 'making-meaning',
    name: '의미 만들기',
    nameEn: 'Making Meaning',
    description: '학습 내용의 의미를 종합하고 성찰하는 루틴',
    suitableStages: ['generalize', 'reflect'],
    steps: [
      '새롭게 알게 된 것은 무엇인가요?',
      '아직 궁금한 것은 무엇인가요?',
      '이것이 왜 중요한가요?',
      '다음에 무엇을 탐구하고 싶나요?'
    ],
    exampleQuestions: [
      '오늘 학습의 핵심은 무엇인가요?',
      '더 알고 싶은 것은?',
      '이것이 왜 의미가 있나요?',
      '앞으로 무엇을 더 공부하고 싶나요?'
    ],
    tips: [
      '학습 마무리에 적합',
      '다음 학습과 연결',
      '학생 주도적 탐구 유도'
    ]
  },
  {
    id: 'creative-hunt',
    name: '창의적 탐색',
    nameEn: 'Creative Hunt',
    description: '창의적 적용 방법을 탐색하는 전이 루틴',
    suitableStages: ['transfer'],
    steps: [
      '배운 개념 확인하기',
      '새로운 상황 탐색하기',
      '창의적 적용 방법 찾기',
      '가장 혁신적인 아이디어 선정하기'
    ],
    exampleQuestions: [
      '배운 것을 어디에 적용할 수 있을까요?',
      '전혀 다른 분야에서는 어떻게 활용할 수 있을까요?',
      '가장 창의적인 방법은 무엇일까요?',
      '왜 그것이 혁신적인가요?'
    ],
    tips: [
      '모둠 브레인스토밍 활용',
      '엉뚱한 아이디어도 환영',
      '실현 가능성보다 창의성 강조'
    ]
  },
  {
    id: 'frayer-model',
    name: '프레이어 모델',
    nameEn: 'Frayer Model',
    description: '개념의 정의, 특징, 예, 비례를 탐색하는 구조화된 루틴',
    suitableStages: ['focus', 'organize'],
    steps: [
      '정의: 개념의 정의 쓰기',
      '특징: 핵심 특징 나열하기',
      '예: 개념의 예시 제시',
      '비례: 개념이 아닌 것 제시'
    ],
    exampleQuestions: [
      '이 개념을 어떻게 정의할 수 있나요?',
      '이 개념의 핵심 특징은 무엇인가요?',
      '이것의 좋은 예는 무엇인가요?',
      '이것이 아닌 것의 예는 무엇인가요?'
    ],
    tips: [
      '4분할 그래픽 조직자 사용',
      '개념 정의에 효과적',
      '어휘 학습에 활용'
    ]
  },
  {
    id: 'compass-points',
    name: '나침반',
    nameEn: 'Compass Points',
    description: '아이디어에 대해 다각도로 탐색하는 의사결정 루틴',
    suitableStages: ['investigate', 'organize'],
    steps: [
      'E(Excited): 흥미로운/신나는 점',
      'W(Worrisome): 걱정되는/우려스러운 점',
      'N(Need to Know): 더 알아야 할 점',
      'S(Stance): 현재 입장/생각'
    ],
    exampleQuestions: [
      '이 아이디어에서 흥미로운 점은?',
      '걱정되거나 우려스러운 점은?',
      '결정하기 전에 더 알아야 할 것은?',
      '현재 이 아이디어에 대한 입장은?'
    ],
    tips: [
      '의사결정 전 활용',
      '다양한 관점 균형있게 탐색',
      '개인 후 전체 공유'
    ]
  }
];

// 모든 사고 루틴을 합친 배열 (기존 + 추가)
export const getAllThinkingRoutines = async () => {
  const { THINKING_ROUTINES } = await import('./thinking-routines');
  return [...THINKING_ROUTINES, ...ADDITIONAL_THINKING_ROUTINES];
};

// 추가 루틴에서 ID로 찾기
export const getAdditionalRoutineById = (id: string) =>
  ADDITIONAL_THINKING_ROUTINES.find((routine) => routine.id === id);

// 추가 루틴에서 단계별 필터링
export const getAdditionalRoutinesForStage = (stageId: string) =>
  ADDITIONAL_THINKING_ROUTINES.filter((routine) => routine.suitableStages.includes(stageId));
