// 개념기반 탐구수업 - 개념 분류 및 일반화 관련 상수

// ===== 거시개념 (Macro Concepts) - 범교과적 =====
export const MACRO_CONCEPTS = {
  relationship: {
    id: 'relationship',
    name: '관계',
    nameEn: 'Relationship',
    category: '관계',
    description: '사물이나 현상 간의 연결과 상호작용'
  },
  interdependence: {
    id: 'interdependence',
    name: '상호의존',
    nameEn: 'Interdependence',
    category: '관계',
    description: '서로 의존하며 영향을 주고받는 관계'
  },
  connection: {
    id: 'connection',
    name: '연결',
    nameEn: 'Connection',
    category: '관계',
    description: '서로 이어지고 맺어지는 것'
  },
  interaction: {
    id: 'interaction',
    name: '상호작용',
    nameEn: 'Interaction',
    category: '관계',
    description: '서로 영향을 주고받는 과정'
  },
  change: {
    id: 'change',
    name: '변화',
    nameEn: 'Change',
    category: '변화',
    description: '시간에 따라 달라지는 것'
  },
  continuity: {
    id: 'continuity',
    name: '연속성',
    nameEn: 'Continuity',
    category: '변화',
    description: '시간이 지나도 유지되는 것'
  },
  development: {
    id: 'development',
    name: '발전',
    nameEn: 'Development',
    category: '변화',
    description: '더 나은 상태로 나아가는 것'
  },
  transformation: {
    id: 'transformation',
    name: '전환',
    nameEn: 'Transformation',
    category: '변화',
    description: '근본적으로 다른 형태로 바뀌는 것'
  },
  system: {
    id: 'system',
    name: '체계',
    nameEn: 'System',
    category: '체계',
    description: '부분들이 모여 하나의 전체를 이루는 것'
  },
  structure: {
    id: 'structure',
    name: '구조',
    nameEn: 'Structure',
    category: '체계',
    description: '부분들이 배열되고 조직되는 방식'
  },
  function: {
    id: 'function',
    name: '기능',
    nameEn: 'Function',
    category: '체계',
    description: '어떤 것이 수행하는 역할이나 작용'
  },
  partsAndWhole: {
    id: 'parts-and-whole',
    name: '부분과 전체',
    nameEn: 'Parts and Whole',
    category: '체계',
    description: '개별 요소와 그것이 이루는 전체의 관계'
  },
  causeAndEffect: {
    id: 'cause-and-effect',
    name: '원인과 결과',
    nameEn: 'Cause and Effect',
    category: '원인',
    description: '어떤 일이 다른 일을 일으키는 관계'
  },
  impact: {
    id: 'impact',
    name: '영향',
    nameEn: 'Impact',
    category: '원인',
    description: '어떤 것이 다른 것에 미치는 효과'
  },
  consequence: {
    id: 'consequence',
    name: '결과',
    nameEn: 'Consequence',
    category: '원인',
    description: '어떤 행동이나 사건으로 인해 생기는 것'
  },
  similarity: {
    id: 'similarity',
    name: '유사성',
    nameEn: 'Similarity',
    category: '비교',
    description: '서로 비슷한 점'
  },
  difference: {
    id: 'difference',
    name: '차이점',
    nameEn: 'Difference',
    category: '비교',
    description: '서로 다른 점'
  },
  pattern: {
    id: 'pattern',
    name: '패턴',
    nameEn: 'Pattern',
    category: '비교',
    description: '반복되는 규칙이나 형태'
  },
  classification: {
    id: 'classification',
    name: '분류',
    nameEn: 'Classification',
    category: '비교',
    description: '기준에 따라 나누는 것'
  },
  perspective: {
    id: 'perspective',
    name: '관점',
    nameEn: 'Perspective',
    category: '관점',
    description: '사물을 바라보는 시각이나 입장'
  },
  interpretation: {
    id: 'interpretation',
    name: '해석',
    nameEn: 'Interpretation',
    category: '관점',
    description: '의미를 이해하고 설명하는 것'
  },
  context: {
    id: 'context',
    name: '맥락',
    nameEn: 'Context',
    category: '관점',
    description: '사건이나 상황을 둘러싼 배경'
  },
  bias: {
    id: 'bias',
    name: '편견',
    nameEn: 'Bias',
    category: '관점',
    description: '한쪽으로 치우친 생각이나 판단'
  },
  identity: {
    id: 'identity',
    name: '정체성',
    nameEn: 'Identity',
    category: '기타',
    description: '나 또는 집단이 누구인지를 나타내는 것'
  },
  culture: {
    id: 'culture',
    name: '문화',
    nameEn: 'Culture',
    category: '기타',
    description: '집단의 생활 방식, 가치, 전통'
  },
  power: {
    id: 'power',
    name: '권력',
    nameEn: 'Power',
    category: '기타',
    description: '다른 사람이나 상황에 영향을 미치는 힘'
  },
  equality: {
    id: 'equality',
    name: '평등',
    nameEn: 'Equality',
    category: '기타',
    description: '모든 사람이 동등하게 대우받는 것'
  },
  conflict: {
    id: 'conflict',
    name: '갈등',
    nameEn: 'Conflict',
    category: '기타',
    description: '의견, 이해관계, 가치가 충돌하는 것'
  },
  cooperation: {
    id: 'cooperation',
    name: '협력',
    nameEn: 'Cooperation',
    category: '기타',
    description: '함께 힘을 합쳐 일하는 것'
  }
} as const;

// 거시개념 목록
export const MACRO_CONCEPT_LIST = Object.values(MACRO_CONCEPTS);

// 카테고리별 거시개념
export const MACRO_CONCEPTS_BY_CATEGORY = {
  '관계': ['relationship', 'interdependence', 'connection', 'interaction'],
  '변화': ['change', 'continuity', 'development', 'transformation'],
  '체계': ['system', 'structure', 'function', 'partsAndWhole'],
  '원인': ['causeAndEffect', 'impact', 'consequence'],
  '비교': ['similarity', 'difference', 'pattern', 'classification'],
  '관점': ['perspective', 'interpretation', 'context', 'bias'],
  '기타': ['identity', 'culture', 'power', 'equality', 'conflict', 'cooperation']
} as const;

// ===== 조직하기 도구 (Graphic Organizers) =====
export const GRAPHIC_ORGANIZERS = {
  vennDiagram: {
    id: 'venn-diagram',
    name: '벤 다이어그램',
    nameEn: 'Venn Diagram',
    purpose: '유사점과 차이점 비교',
    description: '두 가지 이상의 대상을 비교하여 공통점과 차이점을 시각화',
    suitableFor: ['비교 분석', '개념 관계 파악', '분류']
  },
  tChart: {
    id: 't-chart',
    name: 'T-차트',
    nameEn: 'T-Chart',
    purpose: '두 가지 관점 대조',
    description: '두 가지 측면(예: 장단점, 찬반)을 나란히 비교',
    suitableFor: ['관점 비교', '장단점 분석', '의사결정']
  },
  conceptMap: {
    id: 'concept-map',
    name: '개념 지도',
    nameEn: 'Concept Map',
    purpose: '개념 간 관계 시각화',
    description: '핵심 개념과 관련 개념들의 연결 관계를 표현',
    suitableFor: ['개념 정리', '관계 파악', '사전 지식 활성화']
  },
  flowchart: {
    id: 'flowchart',
    name: '순서도',
    nameEn: 'Flowchart',
    purpose: '과정이나 인과관계 정리',
    description: '단계별 과정이나 순서를 시각적으로 표현',
    suitableFor: ['과정 설명', '의사결정 과정', '알고리즘']
  },
  matrix: {
    id: 'matrix',
    name: '표/매트릭스',
    nameEn: 'Matrix',
    purpose: '다양한 사례 비교 분석',
    description: '여러 기준에 따라 여러 대상을 체계적으로 비교',
    suitableFor: ['다중 비교', '분류 정리', '평가']
  },
  timeline: {
    id: 'timeline',
    name: '타임라인',
    nameEn: 'Timeline',
    purpose: '시간순 정리',
    description: '사건이나 과정을 시간 순서대로 배열',
    suitableFor: ['역사적 사건', '과정 변화', '발달 단계']
  },
  yChart: {
    id: 'y-chart',
    name: 'Y-차트',
    nameEn: 'Y-Chart',
    purpose: '감각적 탐구 (보이는 것, 들리는 것, 느껴지는 것)',
    description: '세 가지 관점에서 대상을 탐구',
    suitableFor: ['감각 탐구', '관찰 정리', '경험 분석']
  },
  fishbone: {
    id: 'fishbone',
    name: '생선뼈 다이어그램',
    nameEn: 'Fishbone Diagram',
    purpose: '원인 분석',
    description: '문제의 원인을 여러 범주로 분류하여 분석',
    suitableFor: ['원인 분석', '문제 해결', '요인 파악']
  },
  kwl: {
    id: 'kwl',
    name: 'KWL 차트',
    nameEn: 'KWL Chart',
    purpose: '학습 전-중-후 정리',
    description: 'Know(아는 것)-Want(알고 싶은 것)-Learned(배운 것) 정리',
    suitableFor: ['사전 지식 활성화', '학습 목표 설정', '학습 정리']
  }
} as const;

export const GRAPHIC_ORGANIZER_LIST = Object.values(GRAPHIC_ORGANIZERS);

// ===== 일반화 수준 (Generalization Levels) =====
export const GENERALIZATION_LEVELS = {
  level1: {
    level: 1,
    name: '수준 1: 단순 관계',
    description: '두 개념의 단순한 관계 진술',
    example: '체계는 부분들로 구성된다',
    characteristics: ['두 개념 포함', '기본적 관계 표현', '직접적 연결']
  },
  level2: {
    level: 2,
    name: '수준 2: 조건 포함',
    description: '조건이나 맥락을 포함한 관계 진술',
    example: '체계의 한 부분 변화는 다른 부분에 영향을 미친다',
    characteristics: ['조건 포함', '인과 관계 표현', '맥락 고려']
  },
  level3: {
    level: 3,
    name: '수준 3: 복잡한 관계',
    description: '복잡한 관계, 조건, 결과를 포함한 진술',
    example: '복잡한 체계에서 작은 변화가 예측하지 못한 대규모 결과를 초래할 수 있다',
    characteristics: ['복잡한 관계', '다중 조건', '예외/가능성 인정']
  }
} as const;

// ===== 일반화 작성 체크리스트 =====
export const GENERALIZATION_CHECKLIST = [
  { id: 'concepts', question: '두 개 이상의 개념을 포함하는가?', required: true },
  { id: 'universal', question: '시간, 장소, 상황을 초월하여 적용 가능한가?', required: true },
  { id: 'noSpecifics', question: '구체적인 인명, 지명, 사건명이 없는가?', required: true },
  { id: 'activeVerb', question: '능동적이고 현재형 동사를 사용하는가?', required: true },
  { id: 'noAbsolute', question: '"항상", "절대로" 같은 절대적 표현이 없는가?', required: true },
  { id: 'discoverable', question: '학생들이 사례를 통해 발견할 수 있는가?', required: true },
  { id: 'transferable', question: '전이 가능한 이해를 담고 있는가?', required: true }
] as const;

// ===== 전이 유형 (Transfer Types) =====
export const TRANSFER_TYPES = {
  near: {
    id: 'near',
    name: '근전이',
    nameEn: 'Near Transfer',
    description: '유사한 맥락에 적용',
    examples: ['같은 교과 내 다른 단원', '비슷한 유형의 문제'],
    difficulty: '쉬움'
  },
  far: {
    id: 'far',
    name: '원전이',
    nameEn: 'Far Transfer',
    description: '다른 맥락에 적용',
    examples: ['다른 교과', '실생활 상황', '새로운 영역'],
    difficulty: '보통'
  },
  creative: {
    id: 'creative',
    name: '창조적 전이',
    nameEn: 'Creative Transfer',
    description: '새로운 상황에서 창의적 적용',
    examples: ['새로운 문제 해결', '독창적 아이디어 생성', '혁신적 적용'],
    difficulty: '어려움'
  }
} as const;

export const TRANSFER_TYPE_LIST = Object.values(TRANSFER_TYPES);

// ===== 교과별 일반화 예시 =====
export const SUBJECT_GENERALIZATIONS = {
  society: [
    '권력의 분배는 사회의 구조와 기능에 영향을 미친다',
    '지리적 특성은 인간의 정착 패턴과 경제 활동에 영향을 준다',
    '문화는 시간에 따라 변화하며, 문화 간 상호작용을 통해 변화가 가속화된다',
    '사회 구성원 간의 갈등은 변화와 발전의 계기가 될 수 있다'
  ],
  science: [
    '에너지는 형태를 변환하며, 이 과정에서 일부가 열로 손실된다',
    '생물은 환경에 적응하거나 환경을 변화시키며 생존한다',
    '물질의 구조는 그 성질을 결정한다',
    '자연계의 순환은 생태계의 균형을 유지하는 데 필수적이다'
  ],
  math: [
    '패턴의 인식은 예측과 일반화를 가능하게 한다',
    '수학적 표현의 다양한 형태는 서로 연결되어 있으며, 상황에 따라 유용성이 다르다',
    '비율과 비례 관계는 실세계의 다양한 현상을 모델링하는 데 사용된다',
    '수학적 관계는 다양한 방식으로 표현될 수 있다'
  ],
  korean: [
    '효과적인 의사소통은 목적, 독자, 맥락을 고려하여 조절된다',
    '텍스트는 작가의 관점과 문화적 맥락을 반영한다',
    '언어는 정체성과 공동체를 형성하는 데 중요한 역할을 한다',
    '다양한 텍스트는 서로 다른 방식으로 의미를 전달한다'
  ],
  moral: [
    '도덕적 판단은 상황과 맥락에 따라 달라질 수 있다',
    '공동체의 규칙은 구성원들의 합의와 존중을 통해 유지된다',
    '자기 성찰은 도덕적 성장의 기초가 된다',
    '책임감 있는 시민은 공동체의 발전에 기여한다'
  ]
} as const;

export type MacroConcept = keyof typeof MACRO_CONCEPTS;
export type GraphicOrganizer = keyof typeof GRAPHIC_ORGANIZERS;
export type TransferType = keyof typeof TRANSFER_TYPES;
