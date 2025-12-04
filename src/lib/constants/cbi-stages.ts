// CBI 7단계 모형 상수 정의

export const CBI_STAGES = {
  engage: {
    id: 'engage',
    name: '관계맺기',
    nameEn: 'Engage',
    emoji: '🔍',
    color: '#F59E0B',
    description: '학생들의 사전 지식 활성화 및 학습 동기 부여',
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
    defaultDuration: 5
  },
  focus: {
    id: 'focus',
    name: '집중하기',
    nameEn: 'Focus',
    emoji: '🎯',
    color: '#3B82F6',
    description: '단원의 주요 핵심 개념 소개 및 탐구 방향 제시',
    objectives: [
      '핵심 개념 소개',
      '탐구 질문 제시',
      '학습 방향 안내',
      '개념 간 관계 파악'
    ],
    strategies: [
      '핵심 개념 명시적 소개',
      '탐구 질문 공유',
      '학습 목표와 연결'
    ],
    defaultDuration: 7
  },
  investigate: {
    id: 'investigate',
    name: '조사하기',
    nameEn: 'Investigate',
    emoji: '🔬',
    color: '#10B981',
    description: '다양한 사례와 정보를 탐구하고 수집',
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
      '자료 조사'
    ],
    defaultDuration: 12
  },
  organize: {
    id: 'organize',
    name: '조직 및 정리하기',
    nameEn: 'Organize',
    emoji: '📊',
    color: '#8B5CF6',
    description: '수집한 정보를 의미 있게 조직',
    objectives: [
      '그래픽 조직자 활용',
      '정보의 패턴 발견',
      '탐구 결과 공유',
      '개념적 이해를 위한 표상 만들기'
    ],
    strategies: [
      '인지 부하 감소를 위한 조직화',
      '시각적 표상 활용',
      '협력적 정리 활동'
    ],
    defaultDuration: 6
  },
  generalize: {
    id: 'generalize',
    name: '일반화하기',
    nameEn: 'Generalize',
    emoji: '💡',
    color: '#EC4899',
    description: '사실에서 개념적 이해(일반화)로 도약',
    objectives: [
      '패턴과 관계 발견',
      '일반화된 진술문 작성',
      '빅 아이디어 도출',
      '토론을 통한 일반화 정교화'
    ],
    strategies: [
      '귀납적 접근 방식',
      '스캐폴딩 질문',
      '일반화 기록 및 공유'
    ],
    defaultDuration: 5
  },
  transfer: {
    id: 'transfer',
    name: '전이하기',
    nameEn: 'Transfer',
    emoji: '🔄',
    color: '#06B6D4',
    description: '배운 개념을 새로운 상황에 적용',
    objectives: [
      '새로운 상황에 적용',
      '실생활 연결',
      '문제 해결 능력 발휘',
      '개념의 전이 확인'
    ],
    strategies: [
      '새로운 맥락 제시',
      '실생활 문제 해결',
      '창의적 적용 활동'
    ],
    defaultDuration: 3
  },
  reflect: {
    id: 'reflect',
    name: '성찰하기',
    nameEn: 'Reflect',
    emoji: '🪞',
    color: '#6366F1',
    description: '학습 과정과 결과에 대한 메타인지적 성찰',
    objectives: [
      '학습 과정 성찰',
      '메타인지 발달',
      '사고 변화 인식',
      '추가 탐구 방향 설정'
    ],
    strategies: [
      '성찰 질문 활용',
      '학습 일지 작성',
      '동료 피드백'
    ],
    defaultDuration: 2
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

export const getStageInfo = (stageId: CBIStageId) => CBI_STAGES[stageId];

export const getTotalDefaultDuration = () =>
  Object.values(CBI_STAGES).reduce((sum, stage) => sum + stage.defaultDuration, 0);
