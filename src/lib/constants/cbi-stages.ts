// 전북형 CBI 7단계 모형 상수 정의 (단원 기반)

export const CBI_STAGES = {
  engage: {
    id: 'engage',
    name: '관계맺기',
    nameEn: 'Engage',
    phase: '개념인식',
    emoji: '🔍',
    color: '#F59E0B',
    description: '학생들의 사전 지식 활성화 및 학습 동기 부여, 경험과 개념 연결',
    objectives: [
      '학습 주제에 대한 관심 유발',
      '학생들의 사전 지식 이끌어내기 및 평가',
      '초기 질문 수집 및 유도',
      '학습의 목적과 범위 설정'
    ],
    strategies: [
      '의견 기반 전략 (토론, 찬반 토론)',
      '경험 기반 전략 (실물, 영상, 시뮬레이션)',
      '토론 기반 전략 (질문하기, 브레인스토밍)'
    ],
    thinkingRoutines: [
      'See-Think-Wonder (보고-생각하고-궁금해하기)',
      'Think-Pair-Share (생각-짝-공유)',
      '3-2-1 브릿지'
    ],
    defaultDuration: 40, // 1차시 기준
    defaultPeriodRatio: 0.1 // 10%
  },
  focus: {
    id: 'focus',
    name: '집중하기',
    nameEn: 'Focus',
    phase: '개념인식',
    emoji: '🎯',
    color: '#3B82F6',
    description: '핵심 개념 의미 탐색, 개념 정의 형성, 탐구 방향 제시',
    objectives: [
      '핵심 개념 소개',
      '개념의 의미 탐색',
      '개념 정의 형성',
      '탐구 질문 제시',
      '학습 방향 안내'
    ],
    strategies: [
      '핵심 개념 명시적 소개',
      '탐구 질문 공유',
      '학습 목표와 연결',
      '프레이어 모델 활용'
    ],
    thinkingRoutines: [
      'Frayer Model (프레이어 모델)',
      'Chalk Talk',
      'Word-Phrase-Sentence'
    ],
    defaultDuration: 40,
    defaultPeriodRatio: 0.1
  },
  investigate: {
    id: 'investigate',
    name: '조사하기',
    nameEn: 'Investigate',
    phase: '개념연결',
    emoji: '🔬',
    color: '#10B981',
    description: '다양한 자료를 통한 개념 탐구, 정보 수집 및 분석',
    objectives: [
      '사례 분석을 통한 이해 심화',
      '탐구 기능 함양',
      '정보 수집 및 분석',
      '협력적 탐구 활동'
    ],
    strategies: [
      '모둠별 조사 활동',
      '사례 분석',
      '실험 및 관찰',
      '자료 조사',
      '인터뷰 및 설문'
    ],
    thinkingRoutines: [
      'Think-Pair-Share',
      'Jigsaw (직소)',
      'Gallery Walk (갤러리 워크)'
    ],
    defaultDuration: 80, // 2차시 기준
    defaultPeriodRatio: 0.25
  },
  organize: {
    id: 'organize',
    name: '조직 및 정리하기',
    nameEn: 'Organize',
    phase: '개념연결',
    emoji: '📊',
    color: '#8B5CF6',
    description: '수집한 정보를 분류하고 패턴을 발견하여 의미 있게 조직',
    objectives: [
      '그래픽 조직자 활용',
      '정보의 패턴 발견',
      '탐구 결과 공유',
      '개념적 이해를 위한 표상 만들기'
    ],
    strategies: [
      '인지 부하 감소를 위한 조직화',
      '시각적 표상 활용',
      '협력적 정리 활동',
      '교차비교차트'
    ],
    thinkingRoutines: [
      'Compare and Contrast (교차비교차트)',
      'Y차트',
      'Concept Map (개념 맵)'
    ],
    defaultDuration: 80,
    defaultPeriodRatio: 0.18
  },
  generalize: {
    id: 'generalize',
    name: '일반화하기',
    nameEn: 'Generalize',
    phase: '개념전이',
    emoji: '💡',
    color: '#EC4899',
    description: '사실에서 개념적 이해(일반화)로 도약, 빅 아이디어 도출',
    objectives: [
      '패턴과 관계 발견',
      '일반화된 진술문 작성',
      '빅 아이디어 도출',
      '토론을 통한 일반화 정교화'
    ],
    strategies: [
      '귀납적 접근 방식',
      '스캐폴딩 질문',
      '일반화 기록 및 공유',
      '토론을 통한 합의'
    ],
    thinkingRoutines: [
      'Headlines (헤드라인)',
      'The 4Cs (연결-도전-개념-변화)',
      'Making Meaning'
    ],
    defaultDuration: 40,
    defaultPeriodRatio: 0.12
  },
  transfer: {
    id: 'transfer',
    name: '전이하기',
    nameEn: 'Transfer',
    phase: '개념전이',
    emoji: '🔄',
    color: '#06B6D4',
    description: '배운 개념을 새로운 상황에 적용, 수행과제 수행',
    objectives: [
      '새로운 상황에 적용',
      '실생활 연결',
      '문제 해결 능력 발휘',
      '개념의 전이 확인'
    ],
    strategies: [
      '새로운 맥락 제시',
      '실생활 문제 해결',
      '창의적 적용 활동',
      'GRASPS 수행과제'
    ],
    thinkingRoutines: [
      'Step Inside (입장 바꿔 생각하기)',
      'What If...? (만약...이라면?)',
      'Creative Hunt'
    ],
    defaultDuration: 80,
    defaultPeriodRatio: 0.17
  },
  reflect: {
    id: 'reflect',
    name: '성찰하기',
    nameEn: 'Reflect',
    phase: '개념성찰',
    emoji: '🪞',
    color: '#6366F1',
    description: '학습 과정과 결과에 대한 메타인지적 성찰, 사고 변화 인식',
    objectives: [
      '학습 과정 성찰',
      '메타인지 발달',
      '사고 변화 인식',
      '추가 탐구 방향 설정'
    ],
    strategies: [
      '성찰 질문 활용',
      '학습 일지 작성',
      '동료 피드백',
      '자기평가 및 상호평가'
    ],
    thinkingRoutines: [
      'I Used to Think... Now I Think... (예전에는-지금은)',
      '3-2-1 브릿지 (마무리)',
      'Connect-Extend-Challenge'
    ],
    defaultDuration: 40,
    defaultPeriodRatio: 0.1
  }
} as const;

export type CBIStageId = keyof typeof CBI_STAGES;

export const STAGE_ORDER: CBIStageId[] = [
  'engage',
  'focus',
  'investigate',
  'organize',
  'generalize',
  'transfer',
  'reflect'
];

// 단계별 단계 그룹 정보
export const STAGE_PHASES = {
  '개념인식': ['engage', 'focus'],
  '개념연결': ['investigate', 'organize'],
  '개념전이': ['generalize', 'transfer'],
  '개념성찰': ['reflect']
} as const;

export const getStageInfo = (stageId: CBIStageId) => CBI_STAGES[stageId];

export const getStagePhase = (stageId: CBIStageId): string => {
  return CBI_STAGES[stageId].phase;
};

export const getTotalDefaultDuration = () =>
  Object.values(CBI_STAGES).reduce((sum, stage) => sum + stage.defaultDuration, 0);

// 총 차시에 따른 단계별 차시 배분 계산
export const calculatePeriodDistribution = (totalPeriods: number): Record<CBIStageId, number> => {
  if (totalPeriods <= 4) {
    return {
      engage: 1, focus: 1, investigate: 1, organize: 1,
      generalize: 0, transfer: 0, reflect: 0
    };
  }

  if (totalPeriods <= 6) {
    return {
      engage: 1, focus: 1, investigate: 1, organize: 1,
      generalize: 1, transfer: 1, reflect: 0
    };
  }

  if (totalPeriods <= 8) {
    return {
      engage: 1, focus: 1, investigate: 2, organize: 1,
      generalize: 1, transfer: 1, reflect: 1
    };
  }

  if (totalPeriods <= 10) {
    return {
      engage: 1, focus: 1, investigate: 2, organize: 2,
      generalize: 1, transfer: 2, reflect: 1
    };
  }

  if (totalPeriods <= 12) {
    return {
      engage: 1, focus: 2, investigate: 3, organize: 2,
      generalize: 1, transfer: 2, reflect: 1
    };
  }

  // 13차시 이상
  const engage = Math.max(1, Math.round(totalPeriods * 0.08));
  const focus = Math.max(1, Math.round(totalPeriods * 0.1));
  const investigate = Math.max(2, Math.round(totalPeriods * 0.25));
  const organize = Math.max(2, Math.round(totalPeriods * 0.18));
  const generalize = Math.max(1, Math.round(totalPeriods * 0.12));
  const transfer = Math.max(2, Math.round(totalPeriods * 0.17));
  const reflect = Math.max(1, Math.round(totalPeriods * 0.1));

  let sum = engage + focus + investigate + organize + generalize + transfer + reflect;
  const difference = totalPeriods - sum;

  return {
    engage,
    focus,
    investigate: investigate + difference,
    organize,
    generalize,
    transfer,
    reflect
  };
};
