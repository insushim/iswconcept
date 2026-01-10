// 사고 루틴 데이터베이스
// Harvard Project Zero 기반 사고 루틴 모음

import type { ThinkingRoutine } from '../types/database';

export const THINKING_ROUTINES: ThinkingRoutine[] = [
  // ============================================
  // 도입 및 탐색 (Introducing & Exploring Ideas)
  // ============================================
  {
    id: 'tr-see-think-wonder',
    name: 'See-Think-Wonder',
    nameKo: '보기-생각하기-궁금하기',
    category: 'introducing_exploring',
    description: '이미지, 물체, 또는 주제에 대한 주의 깊은 관찰을 촉진하고 호기심을 자극하는 루틴입니다.',
    steps: [
      '무엇이 보이나요? (See)',
      '무엇을 생각하게 되나요? (Think)',
      '무엇이 궁금한가요? (Wonder)'
    ],
    purpose: [
      '주의 깊은 관찰 촉진',
      '해석적 사고 장려',
      '호기심과 탐구심 자극',
      '사전 지식 활성화'
    ],
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    duration: '10-15분',
    source: 'project_zero'
  },
  {
    id: 'tr-think-puzzle-explore',
    name: 'Think-Puzzle-Explore',
    nameKo: '생각하기-퍼즐-탐구하기',
    category: 'introducing_exploring',
    description: '새로운 주제를 소개할 때 사전 지식을 활성화하고 탐구 방향을 설정하는 루틴입니다.',
    steps: [
      '이 주제에 대해 이미 알고 있거나 생각하는 것은 무엇인가요? (Think)',
      '이 주제에 대해 궁금하거나 혼란스러운 것은 무엇인가요? (Puzzle)',
      '더 알아보기 위해 어떻게 탐구할 수 있나요? (Explore)'
    ],
    purpose: [
      '사전 지식 활성화',
      '호기심 자극',
      '탐구 계획 수립',
      '학습 목표 설정'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    duration: '15-20분',
    source: 'project_zero'
  },
  {
    id: 'tr-chalk-talk',
    name: 'Chalk Talk',
    nameKo: '침묵의 대화',
    category: 'introducing_exploring',
    description: '조용히 글로만 대화하며 아이디어를 공유하고 발전시키는 협력적 사고 루틴입니다.',
    steps: [
      '중심 질문이나 아이디어를 칠판/종이 중앙에 적는다',
      '참가자들이 조용히 돌아다니며 생각을 글로 적는다',
      '다른 사람의 의견에 선으로 연결하여 반응을 적는다',
      '패턴과 주제를 함께 분석한다'
    ],
    purpose: [
      '모든 학생의 참여 보장',
      '다양한 관점 수집',
      '연결과 패턴 발견',
      '조용한 성찰 시간 제공'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '20-30분',
    source: 'project_zero'
  },

  // ============================================
  // 종합 및 조직 (Synthesizing & Organizing Ideas)
  // ============================================
  {
    id: 'tr-connect-extend-challenge',
    name: 'Connect-Extend-Challenge',
    nameKo: '연결-확장-도전',
    category: 'synthesizing_organizing',
    description: '새로운 학습을 기존 지식과 연결하고 사고를 확장하는 루틴입니다.',
    steps: [
      '이전에 알던 것과 어떻게 연결되나요? (Connect)',
      '새롭게 알게 된 것이 생각을 어떻게 확장시켰나요? (Extend)',
      '여전히 어려운 점이나 도전적인 부분은 무엇인가요? (Challenge)'
    ],
    purpose: [
      '지식 통합',
      '전이 촉진',
      '메타인지 발달',
      '도전적 질문 생성'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '15-20분',
    source: 'project_zero'
  },
  {
    id: 'tr-headlines',
    name: 'Headlines',
    nameKo: '헤드라인 만들기',
    category: 'synthesizing_organizing',
    description: '학습 내용의 핵심을 신문 헤드라인처럼 간결하게 요약하는 루틴입니다.',
    steps: [
      '이 주제에 대해 배운 것을 생각한다',
      '핵심 아이디어를 파악한다',
      '신문 헤드라인처럼 간결한 문장으로 요약한다',
      '왜 그 헤드라인을 선택했는지 설명한다'
    ],
    purpose: [
      '핵심 아이디어 파악',
      '요약 능력 개발',
      '본질 추출',
      '간결한 표현력 향상'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    duration: '10-15분',
    source: 'project_zero'
  },
  {
    id: 'tr-csi',
    name: 'CSI: Color-Symbol-Image',
    nameKo: '색-기호-이미지',
    category: 'synthesizing_organizing',
    description: '핵심 아이디어를 색, 기호, 이미지로 표현하여 비언어적으로 이해를 보여주는 루틴입니다.',
    steps: [
      '핵심 아이디어를 나타내는 색을 선택하고 이유를 설명한다 (Color)',
      '핵심 아이디어를 상징하는 기호를 그리고 설명한다 (Symbol)',
      '핵심 아이디어를 표현하는 이미지를 그리고 설명한다 (Image)'
    ],
    purpose: [
      '비언어적 표현 개발',
      '은유적 사고 촉진',
      '개인적 연결 강화',
      '창의적 표현'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    duration: '20-25분',
    source: 'project_zero'
  },
  {
    id: 'tr-321-bridge',
    name: '3-2-1 Bridge',
    nameKo: '3-2-1 다리',
    category: 'synthesizing_organizing',
    description: '학습 전후의 사고 변화를 추적하고 연결하는 루틴입니다.',
    steps: [
      '학습 전: 3가지 단어/아이디어, 2가지 질문, 1가지 비유/은유 작성',
      '학습 활동 수행',
      '학습 후: 새로운 3가지 단어/아이디어, 2가지 질문, 1가지 비유/은유 작성',
      '학습 전후를 연결하는 "다리" 설명'
    ],
    purpose: [
      '사고 변화 추적',
      '메타인지 발달',
      '학습 성찰',
      '개념 발전 시각화'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '25-30분',
    source: 'project_zero'
  },

  // ============================================
  // 심화 탐구 (Digging Deeper into Ideas)
  // ============================================
  {
    id: 'tr-what-makes-you-say-that',
    name: 'What Makes You Say That?',
    nameKo: '왜 그렇게 생각하나요?',
    category: 'digging_deeper',
    description: '주장이나 해석에 대한 근거와 추론을 요청하는 간단하지만 강력한 루틴입니다.',
    steps: [
      '학생이 주장이나 해석을 말한다',
      '교사가 "왜 그렇게 생각하나요?"라고 묻는다',
      '학생이 증거와 추론을 설명한다',
      '필요시 추가 질문으로 더 깊이 탐구한다'
    ],
    purpose: [
      '증거 기반 사고 촉진',
      '추론 능력 개발',
      '주장 정당화 연습',
      '비판적 사고 강화'
    ],
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    duration: '5-10분 (수시로 사용)',
    source: 'project_zero'
  },
  {
    id: 'tr-circle-of-viewpoints',
    name: 'Circle of Viewpoints',
    nameKo: '관점의 원',
    category: 'digging_deeper',
    description: '다양한 관점에서 주제나 상황을 바라보는 연습을 하는 루틴입니다.',
    steps: [
      '주제와 관련된 다양한 관점/역할을 나열한다',
      '하나의 관점을 선택한다',
      '"나는 ___의 관점에서 생각하고 있습니다..."로 시작하여 그 관점에서 생각을 표현한다',
      '다른 관점으로 전환하여 반복한다',
      '관점들 사이의 유사점과 차이점을 토론한다'
    ],
    purpose: [
      '관점 수용 능력 개발',
      '공감 능력 향상',
      '복잡성 인식',
      '열린 마음 함양'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '25-35분',
    source: 'project_zero'
  },
  {
    id: 'tr-step-inside',
    name: 'Step Inside',
    nameKo: '안으로 들어가기',
    category: 'digging_deeper',
    description: '역할이나 인물의 관점 안으로 들어가 그들의 경험을 탐구하는 루틴입니다.',
    steps: [
      '인물/역할을 선택하고 그 안으로 들어간다',
      '무엇을 지각하거나 관찰할 수 있나요?',
      '무엇을 알거나 믿고 있나요?',
      '무엇에 관심을 가지나요?',
      '이 경험에서 무엇을 배웠나요?'
    ],
    purpose: [
      '깊은 관점 수용',
      '역사적 감정이입',
      '인물 분석',
      '상상력 발휘'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '20-30분',
    source: 'project_zero'
  },
  {
    id: 'tr-claim-support-question',
    name: 'Claim-Support-Question',
    nameKo: '주장-근거-질문',
    category: 'digging_deeper',
    description: '주장을 만들고 근거로 뒷받침하며 새로운 질문을 생성하는 루틴입니다.',
    steps: [
      '주제에 대한 주장(Claim)을 만든다',
      '주장을 뒷받침하는 근거(Support)를 제시한다',
      '추가 탐구를 위한 질문(Question)을 생성한다'
    ],
    purpose: [
      '논증 능력 개발',
      '증거 활용 연습',
      '비판적 사고',
      '탐구 확장'
    ],
    suitableFor: ['middle_school', 'high_school'],
    duration: '20-25분',
    source: 'project_zero'
  },

  // ============================================
  // 관점 이해 (Understanding Perspectives)
  // ============================================
  {
    id: 'tr-tug-of-war',
    name: 'Tug of War',
    nameKo: '줄다리기',
    category: 'understanding_perspectives',
    description: '딜레마나 복잡한 문제에서 대립하는 관점들의 힘을 탐구하는 루틴입니다.',
    steps: [
      '딜레마나 논쟁적 질문을 제시한다',
      '양쪽 입장을 나타내는 줄 양끝을 그린다',
      '각 입장을 지지하는 이유들("당기는 힘")을 나열한다',
      '어느 쪽이 더 강한지, 왜 그런지 토론한다',
      '중간 지점이나 타협점을 탐색한다'
    ],
    purpose: [
      '복잡성 인식',
      '균형 잡힌 사고',
      '논쟁적 문제 분석',
      '다양한 관점 고려'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '25-35분',
    source: 'project_zero'
  },
  {
    id: 'tr-sentence-phrase-word',
    name: 'Sentence-Phrase-Word',
    nameKo: '문장-구-단어',
    category: 'understanding_perspectives',
    description: '텍스트에서 핵심 요소를 선택하고 공유하며 의미를 탐구하는 루틴입니다.',
    steps: [
      '텍스트를 읽는다',
      '의미 있는 문장 하나를 선택한다',
      '인상적인 구 하나를 선택한다',
      '핵심 단어 하나를 선택한다',
      '선택 이유를 공유하고 토론한다'
    ],
    purpose: [
      '텍스트 분석',
      '개인적 해석 공유',
      '핵심 파악',
      '협력적 의미 구성'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '20-25분',
    source: 'project_zero'
  },

  // ============================================
  // 추론 및 증거 (Reasoning with Evidence)
  // ============================================
  {
    id: 'tr-i-used-to-think-now-i-think',
    name: 'I Used to Think... Now I Think...',
    nameKo: '예전에는...지금은...',
    category: 'reasoning_evidence',
    description: '학습으로 인한 사고의 변화를 성찰하는 루틴입니다.',
    steps: [
      '주제에 대해 예전에 어떻게 생각했는지 적는다',
      '학습 후 지금은 어떻게 생각하는지 적는다',
      '생각이 바뀐 이유나 증거를 설명한다',
      '사고 변화를 공유하고 토론한다'
    ],
    purpose: [
      '메타인지 발달',
      '학습 성찰',
      '개념 변화 인식',
      '오개념 교정'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    duration: '15-20분',
    source: 'project_zero'
  },
  {
    id: 'tr-compass-points',
    name: 'Compass Points',
    nameKo: '나침반 방향',
    category: 'reasoning_evidence',
    description: '제안이나 아이디어를 네 가지 측면에서 분석하는 루틴입니다.',
    steps: [
      'E (Excited): 흥미롭거나 기대되는 점은?',
      'W (Worrisome): 걱정되거나 우려되는 점은?',
      'N (Need to Know): 더 알아야 할 것은?',
      'S (Stance/Steps): 현재 입장 또는 다음 단계는?'
    ],
    purpose: [
      '다각도 분석',
      '의사결정 지원',
      '비판적 평가',
      '행동 계획'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '20-25분',
    source: 'project_zero'
  },
  {
    id: 'tr-true-for-who',
    name: 'True for Who?',
    nameKo: '누구에게 진실인가?',
    category: 'reasoning_evidence',
    description: '진술의 타당성을 다양한 관점에서 검토하는 루틴입니다.',
    steps: [
      '진술이나 주장을 제시한다',
      '이것이 진실인 사람/집단은 누구인가?',
      '이것이 진실이 아닌 사람/집단은 누구인가?',
      '왜 다른 관점이 존재하는가?',
      '더 보편적인 진실이 있는가?'
    ],
    purpose: [
      '관점의 상대성 이해',
      '보편성과 특수성 탐구',
      '비판적 분석',
      '편견 인식'
    ],
    suitableFor: ['middle_school', 'high_school'],
    duration: '20-25분',
    source: 'project_zero'
  },

  // ============================================
  // 핵심 포착 (Capturing the Core)
  // ============================================
  {
    id: 'tr-generate-sort-connect-elaborate',
    name: 'Generate-Sort-Connect-Elaborate',
    nameKo: '생성-분류-연결-정교화',
    category: 'capturing_core',
    description: '아이디어를 생성하고 조직하여 개념 지도를 만드는 루틴입니다.',
    steps: [
      '주제와 관련된 아이디어를 최대한 많이 생성한다 (Generate)',
      '아이디어를 중심/주변으로 분류한다 (Sort)',
      '아이디어들 사이의 연결을 그린다 (Connect)',
      '연결에 대해 설명하고 정교화한다 (Elaborate)'
    ],
    purpose: [
      '브레인스토밍',
      '개념 조직화',
      '관계 파악',
      '개념 지도 구성'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    duration: '30-40분',
    source: 'project_zero'
  },
  {
    id: 'tr-4cs',
    name: '4 C\'s',
    nameKo: '4C',
    category: 'capturing_core',
    description: '텍스트나 경험을 네 가지 측면에서 분석하는 루틴입니다.',
    steps: [
      'Connections (연결): 개인적 연결은 무엇인가?',
      'Challenge (도전): 도전적이거나 논쟁적인 점은?',
      'Concepts (개념): 핵심 개념은 무엇인가?',
      'Changes (변화): 무엇이 바뀌었는가? 어떤 변화를 원하는가?'
    ],
    purpose: [
      '개인적 연결',
      '비판적 분석',
      '핵심 파악',
      '적용 탐구'
    ],
    suitableFor: ['middle_school', 'high_school'],
    duration: '25-30분',
    source: 'project_zero'
  },
  {
    id: 'tr-micro-lab',
    name: 'Micro Lab',
    nameKo: '마이크로 랩',
    category: 'capturing_core',
    description: '구조화된 소그룹 대화를 통해 깊이 있는 성찰을 하는 루틴입니다.',
    steps: [
      '3-4명 그룹을 구성한다',
      '질문에 대해 각자 정해진 시간 동안 말한다 (다른 사람은 경청만)',
      '모든 사람이 말한 후 자유롭게 토론한다',
      '핵심 통찰을 정리한다'
    ],
    purpose: [
      '깊은 경청',
      '평등한 참여',
      '성찰적 대화',
      '집단 지성 활용'
    ],
    suitableFor: ['middle_school', 'high_school'],
    duration: '30-40분',
    source: 'project_zero'
  }
];

export default THINKING_ROUTINES;
