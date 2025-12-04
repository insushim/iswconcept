// 사고 루틴 라이브러리

export interface ThinkingRoutineTemplate {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  suitableStages: string[];
  steps: string[];
  exampleQuestions: string[];
  tips: string[];
}

export const THINKING_ROUTINES: ThinkingRoutineTemplate[] = [
  {
    id: 'see-think-wonder',
    name: '보고-생각하고-궁금해하기',
    nameEn: 'See-Think-Wonder',
    description: '관찰을 통해 사고를 촉진하고 궁금증을 유발하는 루틴',
    suitableStages: ['engage', 'investigate'],
    steps: [
      '무엇이 보이나요? (See)',
      '무엇이 생각나나요? (Think)',
      '무엇이 궁금한가요? (Wonder)'
    ],
    exampleQuestions: [
      '이 그림/자료에서 어떤 것들이 눈에 띄나요?',
      '이것을 보고 어떤 생각이 드나요?',
      '더 알고 싶은 것은 무엇인가요?'
    ],
    tips: [
      '모든 관찰을 수용적으로 받아들이기',
      '판단하지 않고 다양한 생각 격려',
      '궁금한 점을 기록해두기'
    ]
  },
  {
    id: '3-2-1-bridge',
    name: '3-2-1 브리지',
    nameEn: '3-2-1 Bridge',
    description: '학습 전후의 사고 변화를 연결하는 루틴',
    suitableStages: ['engage', 'reflect'],
    steps: [
      '3개의 생각 (Three Thoughts)',
      '2개의 질문 (Two Questions)',
      '1개의 비유 (One Metaphor/Simile)'
    ],
    exampleQuestions: [
      '이 주제에 대해 떠오르는 3가지 생각은?',
      '알고 싶은 2가지 질문은?',
      '이것은 마치 ___와 같다'
    ],
    tips: [
      '학습 전후 비교를 통해 사고 변화 인식',
      '비유를 통한 개념 연결 장려',
      '시간을 두고 두 번 실시'
    ]
  },
  {
    id: 'chalk-talk',
    name: '분필 토크',
    nameEn: 'Chalk Talk',
    description: '침묵 속에서 글로 대화하는 루틴',
    suitableStages: ['engage', 'organize'],
    steps: [
      '중심 질문이나 주제 제시',
      '침묵 속에서 생각 쓰기',
      '다른 사람의 생각에 연결하여 쓰기',
      '패턴과 연결 찾기'
    ],
    exampleQuestions: [
      '이 주제에 대해 어떤 생각이 드나요?',
      '다른 친구의 생각에 어떻게 연결할 수 있나요?',
      '어떤 패턴이 보이나요?'
    ],
    tips: [
      '말하지 않고 글로만 소통',
      '모든 참여자가 동등하게 참여',
      '연결선 그리기 장려'
    ]
  },
  {
    id: 'connect-extend-challenge',
    name: '연결-확장-도전',
    nameEn: 'Connect-Extend-Challenge',
    description: '새로운 아이디어를 기존 지식과 연결하는 루틴',
    suitableStages: ['generalize', 'reflect'],
    steps: [
      '연결하기: 이미 알고 있던 것과 어떻게 연결되나요?',
      '확장하기: 어떤 새로운 아이디어가 생각을 확장시켰나요?',
      '도전하기: 여전히 어렵거나 혼란스러운 것은?'
    ],
    exampleQuestions: [
      '오늘 배운 내용과 이전에 알던 것은 어떻게 연결되나요?',
      '어떤 새로운 방향으로 생각이 확장되었나요?',
      '아직 이해하기 어려운 부분은?'
    ],
    tips: [
      '개인 후 모둠 공유',
      '도전 영역을 긍정적으로 다루기',
      '다음 학습과 연결'
    ]
  },
  {
    id: 'i-used-to-think-now-i-think',
    name: '예전에는-지금은',
    nameEn: 'I Used to Think... Now I Think...',
    description: '학습을 통한 사고 변화를 인식하는 성찰 루틴',
    suitableStages: ['reflect'],
    steps: [
      '예전에는 ___ 라고 생각했어요',
      '지금은 ___ 라고 생각해요',
      '내 생각이 바뀐 이유는...'
    ],
    exampleQuestions: [
      '이 수업 전에는 이 주제에 대해 어떻게 생각했나요?',
      '지금은 어떻게 다르게 생각하게 되었나요?',
      '왜 생각이 바뀌었나요?'
    ],
    tips: [
      '생각의 변화를 긍정적으로 인정',
      '충분한 성찰 시간 제공',
      '변화하지 않은 것도 괜찮음을 인정'
    ]
  },
  {
    id: 'think-pair-share',
    name: '생각-짝-나눔',
    nameEn: 'Think-Pair-Share',
    description: '개인 사고 후 짝과 공유하는 기본 협력 루틴',
    suitableStages: ['engage', 'focus', 'investigate'],
    steps: [
      '혼자 생각하기 (Think)',
      '짝과 나누기 (Pair)',
      '전체와 공유하기 (Share)'
    ],
    exampleQuestions: [
      '먼저 혼자 생각해 봅시다',
      '옆 친구와 생각을 나눠 봅시다',
      '전체에게 공유해 볼까요?'
    ],
    tips: [
      '충분한 개인 사고 시간 확보',
      '짝 활동 시간 명확히 안내',
      '다양한 의견 수용'
    ]
  },
  {
    id: 'generate-sort-connect-elaborate',
    name: '생성-분류-연결-정교화',
    nameEn: 'Generate-Sort-Connect-Elaborate',
    description: '개념 맵핑을 위한 구조화된 사고 루틴',
    suitableStages: ['organize', 'generalize'],
    steps: [
      '아이디어 생성하기 (Generate)',
      '관련 아이디어 분류하기 (Sort)',
      '아이디어 간 연결하기 (Connect)',
      '연결에 대해 정교화하기 (Elaborate)'
    ],
    exampleQuestions: [
      '이 주제와 관련된 모든 아이디어를 적어봅시다',
      '비슷한 것끼리 묶어 봅시다',
      '이것들이 어떻게 연결되나요?',
      '왜 이렇게 연결했나요?'
    ],
    tips: [
      '판단 없이 아이디어 생성',
      '분류 기준 스스로 정하게 하기',
      '연결의 이유 명시화'
    ]
  },
  {
    id: 'headlines',
    name: '헤드라인',
    nameEn: 'Headlines',
    description: '핵심 아이디어를 요약하는 루틴',
    suitableStages: ['generalize', 'reflect'],
    steps: [
      '학습 내용 중 가장 중요한 것 생각하기',
      '신문 헤드라인처럼 한 문장으로 요약하기',
      '왜 이것이 가장 중요한지 설명하기'
    ],
    exampleQuestions: [
      '오늘 배운 것 중 가장 핵심은?',
      '신문 기사 제목을 단다면?',
      '왜 이것을 선택했나요?'
    ],
    tips: [
      '간결하고 핵심적인 표현 장려',
      '창의적 표현 허용',
      '선택 이유 공유'
    ]
  },
  {
    id: 'circle-of-viewpoints',
    name: '관점의 원',
    nameEn: 'Circle of Viewpoints',
    description: '다양한 관점에서 주제를 탐구하는 루틴',
    suitableStages: ['investigate', 'generalize'],
    steps: [
      '다양한 관점 브레인스토밍',
      '하나의 관점 선택하기',
      '그 관점에서 생각하고 표현하기',
      '다른 관점들과 비교하기'
    ],
    exampleQuestions: [
      '누가 이 상황에 관련되어 있나요?',
      '그 입장에서는 어떻게 보일까요?',
      '다른 관점과 어떻게 다른가요?'
    ],
    tips: [
      '다양한 관점 존중',
      '역할극 활용 가능',
      '편견 인식하기'
    ]
  },
  {
    id: 'claim-support-question',
    name: '주장-근거-질문',
    nameEn: 'Claim-Support-Question',
    description: '근거 기반 사고를 촉진하는 루틴',
    suitableStages: ['investigate', 'generalize'],
    steps: [
      '주장하기: 이것에 대해 무엇이 참이라고 할 수 있나요?',
      '근거 대기: 무엇이 그 주장을 지지하나요?',
      '질문하기: 어떤 질문이 남아 있나요?'
    ],
    exampleQuestions: [
      '이 자료/사례에서 어떤 주장을 할 수 있나요?',
      '그 주장의 근거는 무엇인가요?',
      '아직 궁금한 점은?'
    ],
    tips: [
      '근거의 질 강조',
      '비판적 사고 장려',
      '열린 질문 가치 인정'
    ]
  }
];

export const getRoutineById = (id: string) =>
  THINKING_ROUTINES.find((routine) => routine.id === id);

export const getRoutinesForStage = (stageId: string) =>
  THINKING_ROUTINES.filter((routine) => routine.suitableStages.includes(stageId));
