// 교육 이론 및 프레임워크 종합 데이터베이스
// 전세계 주요 교육 이론, 학습 모델, 역량 프레임워크 모음

// ============================================
// 타입 정의
// ============================================

export interface EducationalTheory {
  id: string;
  name: string;
  nameEn: string;
  theorist: string;
  year: number;
  description: string;
  keyPrinciples: string[];
  components?: TheoryComponent[];
  educationalImplications: string[];
  source: string;
  category: 'learning_theory' | 'instructional_model' | 'assessment_framework' | 'competency_framework' | 'thinking_framework' | 'pedagogical_approach';
}

export interface TheoryComponent {
  name: string;
  nameEn: string;
  description: string;
  subComponents?: string[];
}

export interface ThinkingRoutine {
  id: string;
  name: string;
  nameEn: string;
  purpose: string;
  steps: string[];
  category: string;
  suitableFor: string[];
  source: string;
}

export interface CompetencyFramework {
  id: string;
  name: string;
  nameEn: string;
  organization: string;
  year: number;
  description: string;
  competencies: FrameworkCompetency[];
  source: string;
}

export interface FrameworkCompetency {
  name: string;
  nameEn: string;
  description: string;
  subSkills?: string[];
}

// ============================================
// 1. 학습 이론 (Learning Theories)
// ============================================

export const LEARNING_THEORIES: EducationalTheory[] = [
  // Kolb의 경험 학습 이론
  {
    id: 'kolb-experiential',
    name: '콜브의 경험 학습 이론',
    nameEn: "Kolb's Experiential Learning Theory",
    theorist: 'David A. Kolb',
    year: 1984,
    description: '학습은 경험을 통해 지식이 창출되는 과정이며, 네 단계의 순환적 과정을 거칩니다.',
    keyPrinciples: [
      '학습은 결과가 아닌 과정이다',
      '모든 학습은 재학습이다',
      '학습은 갈등 해결 과정을 필요로 한다',
      '학습은 세계와의 거래를 위한 전체론적 과정이다',
      '학습은 경험의 변환을 통해 지식을 창출한다'
    ],
    components: [
      {
        name: '구체적 경험',
        nameEn: 'Concrete Experience',
        description: '새로운 경험을 하거나 기존 경험을 재해석합니다.',
        subComponents: ['직접적 참여', '실제 상황 경험', '감각적 학습']
      },
      {
        name: '반성적 관찰',
        nameEn: 'Reflective Observation',
        description: '경험을 개인적 관점에서 성찰합니다.',
        subComponents: ['경험 되돌아보기', '다양한 관점 고려', '의미 찾기']
      },
      {
        name: '추상적 개념화',
        nameEn: 'Abstract Conceptualization',
        description: '성찰을 바탕으로 새로운 아이디어를 형성하거나 기존 아이디어를 수정합니다.',
        subComponents: ['이론 형성', '패턴 인식', '일반화']
      },
      {
        name: '능동적 실험',
        nameEn: 'Active Experimentation',
        description: '새로운 아이디어를 적용하여 변화를 확인합니다.',
        subComponents: ['가설 검증', '실천 적용', '새로운 경험 창출']
      }
    ],
    educationalImplications: [
      '다양한 학습 활동 제공',
      '성찰 시간 확보',
      '이론과 실제의 연결',
      '학습 스타일에 맞는 지원'
    ],
    source: 'Experiential Learning (1984)',
    category: 'learning_theory'
  },

  // Gardner의 다중지능 이론
  {
    id: 'gardner-mi',
    name: '가드너의 다중지능 이론',
    nameEn: "Gardner's Multiple Intelligences Theory",
    theorist: 'Howard Gardner',
    year: 1983,
    description: '지능은 단일한 능력이 아니라 여러 독립적인 유형의 지적 능력으로 구성됩니다.',
    keyPrinciples: [
      '모든 인간은 여러 가지 지능을 가지고 있다',
      '각 지능은 독립적으로 발달한다',
      '지능은 문화적 맥락에서 가치를 갖는다',
      '각 지능은 고유한 방식으로 표현된다',
      '교육은 다양한 지능을 개발해야 한다'
    ],
    components: [
      {
        name: '언어적 지능',
        nameEn: 'Linguistic Intelligence',
        description: '말과 글을 효과적으로 사용하는 능력',
        subComponents: ['읽기', '쓰기', '말하기', '듣기', '언어 학습']
      },
      {
        name: '논리-수학적 지능',
        nameEn: 'Logical-Mathematical Intelligence',
        description: '논리적으로 분석하고 수학적 연산을 수행하는 능력',
        subComponents: ['문제 해결', '패턴 인식', '추상적 사고', '과학적 탐구']
      },
      {
        name: '공간적 지능',
        nameEn: 'Spatial Intelligence',
        description: '3차원적으로 사고하고 시각적 이미지를 조작하는 능력',
        subComponents: ['시각화', '공간 추론', '이미지 조작', '예술적 표현']
      },
      {
        name: '음악적 지능',
        nameEn: 'Musical Intelligence',
        description: '리듬, 음높이, 음색을 인식하고 표현하는 능력',
        subComponents: ['작곡', '연주', '감상', '리듬 인식']
      },
      {
        name: '신체-운동적 지능',
        nameEn: 'Bodily-Kinesthetic Intelligence',
        description: '신체를 사용하여 문제를 해결하거나 창작하는 능력',
        subComponents: ['운동 기술', '손재주', '신체 표현', '도구 사용']
      },
      {
        name: '대인관계 지능',
        nameEn: 'Interpersonal Intelligence',
        description: '타인을 이해하고 효과적으로 상호작용하는 능력',
        subComponents: ['공감', '의사소통', '협력', '리더십', '갈등 해결']
      },
      {
        name: '자기이해 지능',
        nameEn: 'Intrapersonal Intelligence',
        description: '자신을 이해하고 자기 조절하는 능력',
        subComponents: ['자기 인식', '자기 조절', '성찰', '목표 설정']
      },
      {
        name: '자연주의적 지능',
        nameEn: 'Naturalistic Intelligence',
        description: '자연 환경을 인식하고 분류하는 능력',
        subComponents: ['관찰', '분류', '패턴 인식', '환경 인식']
      }
    ],
    educationalImplications: [
      '다양한 학습 경로 제공',
      '강점 기반 학습 지원',
      '다양한 평가 방법 활용',
      '개인화된 교육 제공'
    ],
    source: 'Frames of Mind (1983)',
    category: 'learning_theory'
  },

  // Dweck의 성장 마인드셋
  {
    id: 'dweck-mindset',
    name: '드웩의 마인드셋 이론',
    nameEn: "Dweck's Mindset Theory",
    theorist: 'Carol Dweck',
    year: 2006,
    description: '지능과 능력에 대한 신념이 학습과 성취에 영향을 미칩니다.',
    keyPrinciples: [
      '마인드셋은 학습에 대한 접근 방식을 결정한다',
      '성장 마인드셋은 개발될 수 있다',
      '노력과 전략이 중요하다',
      '실패는 학습의 기회이다',
      '피드백은 성장을 촉진한다'
    ],
    components: [
      {
        name: '고정 마인드셋',
        nameEn: 'Fixed Mindset',
        description: '지능과 능력이 고정되어 있다고 믿는 신념',
        subComponents: ['도전 회피', '쉽게 포기', '노력을 무의미하게 여김', '비판에 방어적', '타인의 성공에 위협 느낌']
      },
      {
        name: '성장 마인드셋',
        nameEn: 'Growth Mindset',
        description: '지능과 능력이 노력과 학습을 통해 발달할 수 있다고 믿는 신념',
        subComponents: ['도전 수용', '실패에서 학습', '노력을 숙달의 길로 여김', '비판에서 배움', '타인의 성공에서 영감']
      }
    ],
    educationalImplications: [
      '과정과 노력 칭찬하기',
      '실패를 학습 기회로 재구성',
      '도전적 과제 제공',
      '성장 지향적 피드백 제공',
      '"아직" 언어 사용'
    ],
    source: 'Mindset: The New Psychology of Success (2006)',
    category: 'learning_theory'
  },

  // Vygotsky의 사회문화적 이론
  {
    id: 'vygotsky-sociocultural',
    name: '비고츠키의 사회문화적 학습 이론',
    nameEn: "Vygotsky's Sociocultural Theory",
    theorist: 'Lev Vygotsky',
    year: 1978,
    description: '학습은 사회적 상호작용을 통해 일어나며, 문화가 인지 발달에 핵심적 역할을 합니다.',
    keyPrinciples: [
      '학습은 사회적 상호작용에서 시작된다',
      '언어는 사고 발달의 도구이다',
      '근접발달영역에서 학습이 촉진된다',
      '유능한 타인의 도움이 필요하다',
      '문화적 도구가 인지 발달을 매개한다'
    ],
    components: [
      {
        name: '근접발달영역 (ZPD)',
        nameEn: 'Zone of Proximal Development',
        description: '혼자서 할 수 있는 것과 도움을 받아 할 수 있는 것 사이의 영역',
        subComponents: ['현재 발달 수준', '잠재적 발달 수준', '유능한 타인의 지원']
      },
      {
        name: '스캐폴딩',
        nameEn: 'Scaffolding',
        description: '학습자의 ZPD 내에서 제공되는 일시적 지원',
        subComponents: ['모델링', '힌트 제공', '질문하기', '점진적 지원 철회']
      },
      {
        name: '내면화',
        nameEn: 'Internalization',
        description: '사회적으로 공유된 지식이 개인 내적 지식이 되는 과정',
        subComponents: ['관찰', '모방', '협력적 실천', '독립적 수행']
      }
    ],
    educationalImplications: [
      '협력 학습 활용',
      '적절한 스캐폴딩 제공',
      '사회적 상호작용 촉진',
      '언어 발달 지원',
      '문화적 맥락 고려'
    ],
    source: 'Mind in Society (1978)',
    category: 'learning_theory'
  },

  // Piaget의 인지발달 이론
  {
    id: 'piaget-cognitive',
    name: '피아제의 인지발달 이론',
    nameEn: "Piaget's Cognitive Development Theory",
    theorist: 'Jean Piaget',
    year: 1952,
    description: '아동은 환경과의 상호작용을 통해 지식을 능동적으로 구성하며, 발달 단계를 거칩니다.',
    keyPrinciples: [
      '아동은 능동적 학습자이다',
      '지식은 구성된다',
      '발달은 단계적으로 진행된다',
      '동화와 조절을 통해 학습한다',
      '평형화 과정이 발달을 촉진한다'
    ],
    components: [
      {
        name: '감각운동기 (0-2세)',
        nameEn: 'Sensorimotor Stage',
        description: '감각과 운동을 통해 세계를 경험',
        subComponents: ['대상 영속성', '목표 지향적 행동', '모방']
      },
      {
        name: '전조작기 (2-7세)',
        nameEn: 'Preoperational Stage',
        description: '상징적 사고 발달, 자기중심적 사고',
        subComponents: ['상징적 기능', '직관적 사고', '물활론', '인공론']
      },
      {
        name: '구체적 조작기 (7-11세)',
        nameEn: 'Concrete Operational Stage',
        description: '논리적 사고 발달, 구체적 대상에 적용',
        subComponents: ['보존 개념', '분류', '서열화', '가역성']
      },
      {
        name: '형식적 조작기 (11세 이후)',
        nameEn: 'Formal Operational Stage',
        description: '추상적, 가설적 사고 가능',
        subComponents: ['추상적 사고', '가설 연역적 추론', '체계적 문제 해결']
      }
    ],
    educationalImplications: [
      '발달 수준에 적합한 활동 제공',
      '구체적 경험에서 추상으로',
      '인지적 갈등 유발',
      '탐구와 발견 기회 제공',
      '또래 상호작용 촉진'
    ],
    source: 'The Origins of Intelligence in Children (1952)',
    category: 'learning_theory'
  },

  // Bandura의 사회학습이론
  {
    id: 'bandura-social',
    name: '반두라의 사회학습 이론',
    nameEn: "Bandura's Social Learning Theory",
    theorist: 'Albert Bandura',
    year: 1977,
    description: '학습은 다른 사람의 행동을 관찰하고 모방함으로써 일어납니다.',
    keyPrinciples: [
      '관찰을 통해 학습한다',
      '인지 과정이 중요하다',
      '자기효능감이 학습에 영향을 미친다',
      '환경, 행동, 인지의 상호작용',
      '대리 강화가 효과적이다'
    ],
    components: [
      {
        name: '주의 집중',
        nameEn: 'Attention',
        description: '모델의 행동에 주의를 기울이는 과정',
        subComponents: ['모델의 특성', '관찰자의 특성', '행동의 가시성']
      },
      {
        name: '파지/기억',
        nameEn: 'Retention',
        description: '관찰한 행동을 기억하는 과정',
        subComponents: ['심상 부호화', '언어적 부호화', '인지적 조직화']
      },
      {
        name: '재생/운동 재현',
        nameEn: 'Reproduction',
        description: '기억한 행동을 실제로 수행하는 과정',
        subComponents: ['신체적 능력', '자기 관찰', '피드백 활용']
      },
      {
        name: '동기/강화',
        nameEn: 'Motivation',
        description: '행동을 수행하려는 의지에 영향을 미치는 요인',
        subComponents: ['직접 강화', '대리 강화', '자기 강화']
      }
    ],
    educationalImplications: [
      '좋은 모델 제시',
      '시연과 모델링 활용',
      '자기효능감 향상',
      '긍정적 강화 제공',
      '또래 학습 활용'
    ],
    source: 'Social Learning Theory (1977)',
    category: 'learning_theory'
  },

  // Bruner의 발견 학습 이론
  {
    id: 'bruner-discovery',
    name: '브루너의 발견 학습 이론',
    nameEn: "Bruner's Discovery Learning Theory",
    theorist: 'Jerome Bruner',
    year: 1961,
    description: '학습자가 스스로 지식을 발견하고 구성하도록 하는 교수-학습 이론입니다.',
    keyPrinciples: [
      '학습자는 능동적 탐구자이다',
      '지식은 나선형으로 발달한다',
      '어떤 개념도 적절한 방식으로 가르칠 수 있다',
      '발견을 통한 학습이 가장 효과적이다',
      '직관적 사고가 중요하다'
    ],
    components: [
      {
        name: '작동적 표상',
        nameEn: 'Enactive Representation',
        description: '행동과 조작을 통한 지식 표현',
        subComponents: ['신체적 조작', '직접 경험', '활동 기반 학습']
      },
      {
        name: '영상적 표상',
        nameEn: 'Iconic Representation',
        description: '이미지와 그림을 통한 지식 표현',
        subComponents: ['시각적 모델', '그림', '다이어그램']
      },
      {
        name: '상징적 표상',
        nameEn: 'Symbolic Representation',
        description: '언어와 기호를 통한 추상적 지식 표현',
        subComponents: ['언어', '수학 기호', '논리적 명제']
      }
    ],
    educationalImplications: [
      '구체물에서 추상으로 진행',
      '나선형 교육과정 설계',
      '발견과 탐구 기회 제공',
      '다양한 표상 방식 활용'
    ],
    source: 'The Process of Education (1960)',
    category: 'learning_theory'
  },

  // Ausubel의 유의미 학습 이론
  {
    id: 'ausubel-meaningful',
    name: '오수벨의 유의미 학습 이론',
    nameEn: "Ausubel's Meaningful Learning Theory",
    theorist: 'David Ausubel',
    year: 1968,
    description: '새로운 정보를 기존의 인지 구조와 연결하여 의미 있게 학습하는 이론입니다.',
    keyPrinciples: [
      '학습자의 기존 지식이 가장 중요하다',
      '유의미 학습은 기계적 학습보다 효과적이다',
      '선행 조직자가 학습을 촉진한다',
      '개념은 위계적으로 조직된다',
      '포섭이 학습의 핵심 과정이다'
    ],
    components: [
      {
        name: '선행 조직자',
        nameEn: 'Advance Organizer',
        description: '새로운 학습 전에 제시되는 도입 자료',
        subComponents: ['설명적 조직자', '비교적 조직자', '개념 지도']
      },
      {
        name: '점진적 분화',
        nameEn: 'Progressive Differentiation',
        description: '일반적 개념에서 구체적 개념으로 진행',
        subComponents: ['위계적 조직', '상위 개념', '하위 개념']
      },
      {
        name: '통합적 조정',
        nameEn: 'Integrative Reconciliation',
        description: '새로운 개념과 기존 개념의 통합',
        subComponents: ['개념 연결', '모순 해결', '지식 통합']
      },
      {
        name: '포섭',
        nameEn: 'Subsumption',
        description: '새로운 정보가 기존 인지 구조에 통합되는 과정',
        subComponents: ['파생적 포섭', '상관적 포섭', '상위 포섭']
      }
    ],
    educationalImplications: [
      '선행 지식 확인과 활성화',
      '선행 조직자 활용',
      '위계적 교수 계열화',
      '기존 지식과의 연결 강조'
    ],
    source: 'Educational Psychology: A Cognitive View (1968)',
    category: 'learning_theory'
  },

  // Gagné의 교수 설계 이론
  {
    id: 'gagne-conditions',
    name: '가네의 학습 조건 이론',
    nameEn: "Gagné's Conditions of Learning",
    theorist: 'Robert Gagné',
    year: 1965,
    description: '학습 결과의 유형에 따라 다른 교수 조건이 필요하다는 교수 설계 이론입니다.',
    keyPrinciples: [
      '학습에는 다양한 유형이 있다',
      '각 학습 유형에는 다른 조건이 필요하다',
      '학습은 위계적으로 진행된다',
      '9가지 교수 사건이 학습을 촉진한다',
      '내적 조건과 외적 조건이 상호작용한다'
    ],
    components: [
      {
        name: '5가지 학습 결과',
        nameEn: 'Five Categories of Learning',
        description: '학습의 다섯 가지 결과 유형',
        subComponents: ['언어적 정보', '지적 기능', '인지 전략', '운동 기능', '태도']
      },
      {
        name: '9가지 교수 사건',
        nameEn: 'Nine Events of Instruction',
        description: '효과적인 수업을 위한 9단계',
        subComponents: [
          '주의 집중 획득',
          '학습 목표 제시',
          '선행 학습 상기',
          '자극 제시',
          '학습 안내 제공',
          '수행 유도',
          '피드백 제공',
          '수행 평가',
          '파지와 전이 촉진'
        ]
      }
    ],
    educationalImplications: [
      '학습 목표 유형에 따른 설계',
      '체계적 교수 설계',
      '9가지 교수 사건 적용',
      '학습 위계 분석'
    ],
    source: 'The Conditions of Learning (1965)',
    category: 'learning_theory'
  },

  // 인지 부하 이론
  {
    id: 'cognitive-load',
    name: '인지 부하 이론',
    nameEn: 'Cognitive Load Theory',
    theorist: 'John Sweller',
    year: 1988,
    description: '작업 기억의 제한된 용량을 고려한 교수 설계 이론입니다.',
    keyPrinciples: [
      '작업 기억은 용량이 제한되어 있다',
      '장기 기억은 거의 무제한이다',
      '스키마가 작업 기억 부하를 줄인다',
      '인지 부하의 세 가지 유형이 있다',
      '외재적 부하를 최소화해야 한다'
    ],
    components: [
      {
        name: '내재적 부하',
        nameEn: 'Intrinsic Load',
        description: '학습 내용 자체의 복잡성에서 오는 부하',
        subComponents: ['요소 상호작용성', '과제 복잡성', '선행 지식 수준']
      },
      {
        name: '외재적 부하',
        nameEn: 'Extraneous Load',
        description: '비효과적인 교수 설계로 인한 불필요한 부하',
        subComponents: ['분리된 주의', '중복 효과', '불필요한 정보']
      },
      {
        name: '본유적 부하',
        nameEn: 'Germane Load',
        description: '스키마 구축과 자동화에 사용되는 생산적 부하',
        subComponents: ['스키마 형성', '정교화', '자동화']
      }
    ],
    educationalImplications: [
      '외재적 부하 최소화',
      '복잡한 과제 분절화',
      '작업 예시 활용',
      '단계적 복잡성 증가',
      '멀티미디어 원리 적용'
    ],
    source: 'Cognitive Load During Problem Solving (1988)',
    category: 'learning_theory'
  },

  // 연결주의 (Connectivism)
  {
    id: 'siemens-connectivism',
    name: '연결주의 학습 이론',
    nameEn: 'Connectivism',
    theorist: 'George Siemens',
    year: 2005,
    description: '디지털 시대의 학습 이론으로, 지식은 네트워크 연결을 통해 존재합니다.',
    keyPrinciples: [
      '학습과 지식은 다양한 의견에 기반한다',
      '학습은 노드와 정보 소스를 연결하는 과정이다',
      '학습은 비인간 장치에도 존재할 수 있다',
      '알고자 하는 역량이 아는 것보다 중요하다',
      '연결 유지와 양성이 지속적 학습에 필수적이다',
      '최신 지식을 볼 수 있는 능력이 핵심이다',
      '의사결정 자체가 학습 과정이다'
    ],
    components: [
      {
        name: '노드',
        nameEn: 'Nodes',
        description: '지식 네트워크의 연결점',
        subComponents: ['사람', '조직', '도서관', '웹사이트', '데이터베이스']
      },
      {
        name: '연결',
        nameEn: 'Connections',
        description: '노드 간의 관계',
        subComponents: ['강한 연결', '약한 연결', '잠재적 연결']
      },
      {
        name: '네트워크',
        nameEn: 'Networks',
        description: '연결된 노드들의 집합',
        subComponents: ['개인 지식 네트워크', '사회적 네트워크', '기술적 네트워크']
      }
    ],
    educationalImplications: [
      '네트워크 형성 지원',
      '정보 큐레이션 기술',
      '협력 학습 환경',
      '디지털 리터러시 강조',
      'PLN 구축 지원'
    ],
    source: 'Connectivism: A Learning Theory for the Digital Age (2005)',
    category: 'learning_theory'
  },

  // 자기결정성 이론
  {
    id: 'sdt-deci-ryan',
    name: '자기결정성 이론',
    nameEn: 'Self-Determination Theory',
    theorist: 'Edward Deci & Richard Ryan',
    year: 1985,
    description: '내재적 동기와 자율적 외재적 동기의 발달을 설명하는 동기 이론입니다.',
    keyPrinciples: [
      '인간은 세 가지 기본 심리 욕구를 가진다',
      '자율성이 동기에 핵심이다',
      '내재적 동기가 가장 바람직하다',
      '외재적 동기도 내면화될 수 있다',
      '환경이 동기 유형에 영향을 미친다'
    ],
    components: [
      {
        name: '자율성',
        nameEn: 'Autonomy',
        description: '자신의 행동을 스스로 선택하고 통제하려는 욕구',
        subComponents: ['선택권', '의지', '자기주도성']
      },
      {
        name: '유능성',
        nameEn: 'Competence',
        description: '환경과 효과적으로 상호작용하려는 욕구',
        subComponents: ['숙달', '효능감', '성취']
      },
      {
        name: '관계성',
        nameEn: 'Relatedness',
        description: '타인과 연결되고 소속되려는 욕구',
        subComponents: ['소속감', '돌봄', '연결']
      }
    ],
    educationalImplications: [
      '학생 선택권 제공',
      '적절한 도전과 피드백',
      '따뜻한 학습 공동체',
      '외적 통제 최소화',
      '내재적 동기 지원'
    ],
    source: 'Intrinsic Motivation and Self-Determination in Human Behavior (1985)',
    category: 'learning_theory'
  },

  // 상황 학습 이론
  {
    id: 'situated-learning',
    name: '상황 학습 이론',
    nameEn: 'Situated Learning Theory',
    theorist: 'Jean Lave & Etienne Wenger',
    year: 1991,
    description: '학습은 실제 맥락과 실천 공동체 내에서 일어나는 사회적 과정입니다.',
    keyPrinciples: [
      '학습은 상황에 내재되어 있다',
      '지식은 사회적으로 구성된다',
      '학습은 실천 공동체 참여이다',
      '합법적 주변 참여에서 시작한다',
      '정체성 발달이 학습의 일부이다'
    ],
    components: [
      {
        name: '합법적 주변 참여',
        nameEn: 'Legitimate Peripheral Participation',
        description: '초보자가 공동체의 주변에서 점차 중심으로 이동',
        subComponents: ['관찰', '보조 역할', '점진적 참여', '완전한 참여']
      },
      {
        name: '실천 공동체',
        nameEn: 'Community of Practice',
        description: '공유된 관심사를 가진 집단',
        subComponents: ['영역', '공동체', '실천']
      },
      {
        name: '인지적 도제',
        nameEn: 'Cognitive Apprenticeship',
        description: '전문가의 사고 과정을 보여주는 교수법',
        subComponents: ['모델링', '코칭', '스캐폴딩', '명시화', '성찰', '탐구']
      }
    ],
    educationalImplications: [
      '실제적 학습 맥락 제공',
      '실천 공동체 참여',
      '전문가 사고 모델링',
      '협력 학습 강조',
      '정체성 발달 지원'
    ],
    source: 'Situated Learning: Legitimate Peripheral Participation (1991)',
    category: 'learning_theory'
  },

  // 정교화 이론
  {
    id: 'elaboration-theory',
    name: '정교화 이론',
    nameEn: 'Elaboration Theory',
    theorist: 'Charles Reigeluth',
    year: 1979,
    description: '복잡한 과제를 단순한 것에서 복잡한 것으로 계열화하는 교수 설계 이론입니다.',
    keyPrinciples: [
      '단순한 것에서 복잡한 것으로',
      '점점 넓어지는 나선형 진행',
      '학습자의 인지 구조 존중',
      '전체 그림 먼저 제시',
      '의미 있는 맥락 유지'
    ],
    components: [
      {
        name: '에피톰',
        nameEn: 'Epitome',
        description: '핵심 아이디어의 개요',
        subComponents: ['개념적 개요', '절차적 개요', '이론적 개요']
      },
      {
        name: '정교화 단계',
        nameEn: 'Elaboration Levels',
        description: '점진적으로 복잡해지는 내용 제시',
        subComponents: ['1차 정교화', '2차 정교화', 'n차 정교화']
      },
      {
        name: '요약자와 종합자',
        nameEn: 'Summarizers and Synthesizers',
        description: '학습 내용의 통합과 복습',
        subComponents: ['내부 요약자', '내부 종합자', '최종 종합자']
      }
    ],
    educationalImplications: [
      '전체-부분-전체 접근',
      '점진적 복잡성 증가',
      '정기적 요약과 종합',
      '맥락 유지',
      '학습자 통제 제공'
    ],
    source: 'Instructional Design Theories and Models (1979)',
    category: 'learning_theory'
  },

  // 변환 학습 이론
  {
    id: 'transformative-learning',
    name: '변환 학습 이론',
    nameEn: 'Transformative Learning Theory',
    theorist: 'Jack Mezirow',
    year: 1978,
    description: '성인 학습자가 의미 관점을 근본적으로 변화시키는 과정입니다.',
    keyPrinciples: [
      '학습은 의미 만들기 과정이다',
      '비판적 성찰이 핵심이다',
      '혼란스러운 딜레마가 변환을 촉발한다',
      '가정에 대한 검토가 필요하다',
      '합리적 담화를 통해 변환된다'
    ],
    components: [
      {
        name: '의미 관점',
        nameEn: 'Meaning Perspectives',
        description: '세상을 해석하는 전체적인 틀',
        subComponents: ['인식론적 관점', '사회언어적 관점', '심리적 관점']
      },
      {
        name: '의미 구조',
        nameEn: 'Meaning Schemes',
        description: '특정 신념, 태도, 감정적 반응',
        subComponents: ['구체적 신념', '가치관', '습관적 기대']
      },
      {
        name: '변환 과정',
        nameEn: 'Transformation Process',
        description: '10단계 변환 과정',
        subComponents: [
          '혼란스러운 딜레마',
          '자기 검토',
          '가정에 대한 비판적 평가',
          '타인과의 공유',
          '새로운 역할/관계 탐색',
          '행동 계획 수립',
          '새로운 지식/기술 습득',
          '새로운 역할 시도',
          '역량과 자신감 구축',
          '새로운 관점의 통합'
        ]
      }
    ],
    educationalImplications: [
      '비판적 성찰 촉진',
      '안전한 학습 환경',
      '다양한 관점 노출',
      '대화와 담화 중심',
      '경험 기반 학습'
    ],
    source: 'Transformative Dimensions of Adult Learning (1991)',
    category: 'learning_theory'
  }
];

// ============================================
// 2. 수업 모델 (Instructional Models)
// ============================================

export const INSTRUCTIONAL_MODELS: EducationalTheory[] = [
  // Teaching for Understanding (Perkins)
  {
    id: 'tfu-perkins',
    name: '이해를 위한 수업 (TfU)',
    nameEn: 'Teaching for Understanding',
    theorist: 'David Perkins & Martha Stone Wiske',
    year: 1998,
    description: '학생들이 지식을 다양한 상황에서 유연하게 적용할 수 있도록 이해를 심화시키는 프레임워크입니다.',
    keyPrinciples: [
      '이해는 수행으로 드러난다',
      '이해는 다양한 사고 행위를 포함한다',
      '본질적 질문이 학습을 안내한다',
      '지속적 평가가 이해를 심화시킨다'
    ],
    components: [
      {
        name: '생성적 주제',
        nameEn: 'Generative Topics',
        description: '깊은 탐구와 연결을 가능하게 하는 핵심 주제',
        subComponents: ['학문의 핵심', '학생 관심과 연결', '다양한 접근 가능', '교사 열정']
      },
      {
        name: '이해 목표',
        nameEn: 'Understanding Goals',
        description: '학생들이 발달시켜야 할 핵심 이해',
        subComponents: ['단원 이해 목표', '포괄적 이해 목표', '명시적 진술']
      },
      {
        name: '이해 수행',
        nameEn: 'Performances of Understanding',
        description: '학생들이 이해를 보여주는 활동',
        subComponents: ['탐색 활동', '안내된 탐구', '종합 프로젝트']
      },
      {
        name: '지속적 평가',
        nameEn: 'Ongoing Assessment',
        description: '이해 발달을 안내하는 지속적 피드백',
        subComponents: ['명확한 기준', '정기적 피드백', '자기 평가', '동료 평가']
      }
    ],
    educationalImplications: [
      '본질적 질문으로 수업 구조화',
      '다양한 이해 수행 기회 제공',
      '피드백 중심 평가 실시',
      '학습 공동체 형성'
    ],
    source: 'Teaching for Understanding: Linking Research with Practice (1998)',
    category: 'instructional_model'
  },

  // 5E Instructional Model
  {
    id: '5e-bscs',
    name: '5E 수업 모델',
    nameEn: '5E Instructional Model',
    theorist: 'Rodger Bybee (BSCS)',
    year: 1987,
    description: '과학 탐구 학습을 위한 5단계 순환적 수업 모델입니다.',
    keyPrinciples: [
      '학습은 순환적 과정이다',
      '사전 지식이 새로운 학습의 기반이 된다',
      '개념 구성에는 시간이 필요하다',
      '학습자 중심의 탐구가 효과적이다'
    ],
    components: [
      {
        name: '참여 (Engage)',
        nameEn: 'Engage',
        description: '사전 지식 활성화와 호기심 유발',
        subComponents: ['동기 유발', '사전 지식 확인', '질문 제기', '현상 관찰']
      },
      {
        name: '탐색 (Explore)',
        nameEn: 'Explore',
        description: '직접적인 탐구 활동을 통한 경험',
        subComponents: ['실험', '조사', '데이터 수집', '패턴 탐색']
      },
      {
        name: '설명 (Explain)',
        nameEn: 'Explain',
        description: '개념의 공식적 도입과 설명',
        subComponents: ['개념 정의', '용어 소개', '학생 설명', '교사 설명']
      },
      {
        name: '정교화 (Elaborate)',
        nameEn: 'Elaborate',
        description: '새로운 상황에 개념 적용',
        subComponents: ['전이', '심화 활동', '문제 해결', '연결 짓기']
      },
      {
        name: '평가 (Evaluate)',
        nameEn: 'Evaluate',
        description: '이해도 확인과 성찰',
        subComponents: ['형성 평가', '총괄 평가', '자기 평가', '반성적 저널']
      }
    ],
    educationalImplications: [
      '순환적 탐구 경험 제공',
      '학생 주도적 탐색 시간 확보',
      '개념적 이해 강조',
      '다양한 평가 전략 활용'
    ],
    source: 'BSCS 5E Instructional Model (1987)',
    category: 'instructional_model'
  },

  // Understanding by Design
  {
    id: 'ubd-wiggins',
    name: '백워드 설계 (UbD)',
    nameEn: 'Understanding by Design',
    theorist: 'Grant Wiggins & Jay McTighe',
    year: 1998,
    description: '학습 목표에서 시작하여 평가와 수업을 역순으로 설계하는 교육과정 설계 프레임워크입니다.',
    keyPrinciples: [
      '목표에서 시작한다',
      '평가를 먼저 설계한다',
      '이해는 전이 가능해야 한다',
      '본질적 질문이 탐구를 안내한다',
      '영속적 이해를 목표로 한다'
    ],
    components: [
      {
        name: '1단계: 바라는 결과 확인',
        nameEn: 'Stage 1: Identify Desired Results',
        description: '학생들이 무엇을 알고, 이해하고, 할 수 있어야 하는가?',
        subComponents: ['기준 분석', '영속적 이해', '본질적 질문', '핵심 지식과 기술']
      },
      {
        name: '2단계: 평가 증거 결정',
        nameEn: 'Stage 2: Determine Assessment Evidence',
        description: '학생들이 이해했다는 것을 어떻게 알 수 있는가?',
        subComponents: ['수행 과제', '이해의 6가지 측면', '기타 증거', '자기 평가']
      },
      {
        name: '3단계: 학습 경험 계획',
        nameEn: 'Stage 3: Plan Learning Experiences',
        description: '어떤 학습 경험이 목표 달성을 지원하는가?',
        subComponents: ['WHERETO 요소', '학습 활동 순서', '자원과 자료', '차별화']
      }
    ],
    educationalImplications: [
      '목표 명확화에서 시작',
      '진정성 있는 수행 평가 설계',
      '본질적 질문 활용',
      '전이 가능한 이해 강조'
    ],
    source: 'Understanding by Design (1998, 2005)',
    category: 'instructional_model'
  },

  // Design Thinking
  {
    id: 'design-thinking',
    name: '디자인 씽킹',
    nameEn: 'Design Thinking',
    theorist: 'Stanford d.school',
    year: 2005,
    description: '사용자 중심의 창의적 문제 해결을 위한 5단계 반복적 프로세스입니다.',
    keyPrinciples: [
      '인간 중심 설계',
      '공감에서 시작',
      '빠른 프로토타이핑',
      '실패에서 학습',
      '반복적 개선'
    ],
    components: [
      {
        name: '공감 (Empathize)',
        nameEn: 'Empathize',
        description: '사용자를 이해하고 그들의 필요를 파악',
        subComponents: ['관찰', '인터뷰', '몰입', '공감 지도']
      },
      {
        name: '정의 (Define)',
        nameEn: 'Define',
        description: '핵심 문제를 명확히 정의',
        subComponents: ['관점 진술', '어떻게 하면...질문', '통찰 종합']
      },
      {
        name: '아이디어 (Ideate)',
        nameEn: 'Ideate',
        description: '다양한 해결책 아이디어 생성',
        subComponents: ['브레인스토밍', '발산적 사고', '아이디어 선택', '수렴적 사고']
      },
      {
        name: '프로토타입 (Prototype)',
        nameEn: 'Prototype',
        description: '아이디어를 빠르게 구체화',
        subComponents: ['저충실도 프로토타입', '빠른 제작', '테스트 가능한 형태']
      },
      {
        name: '테스트 (Test)',
        nameEn: 'Test',
        description: '프로토타입을 사용자와 함께 검증',
        subComponents: ['피드백 수집', '반복 개선', '학습']
      }
    ],
    educationalImplications: [
      '실제 문제 중심 학습',
      '협력적 프로젝트',
      '실패 허용 문화',
      '창의적 문제 해결 강조'
    ],
    source: 'Stanford d.school',
    category: 'instructional_model'
  },

  // Marzano's Dimensions of Learning
  {
    id: 'marzano-dimensions',
    name: '마르자노의 학습 차원',
    nameEn: "Marzano's Dimensions of Learning",
    theorist: 'Robert Marzano',
    year: 1992,
    description: '효과적인 학습에 필수적인 다섯 가지 사고 유형을 제시하는 수업 프레임워크입니다.',
    keyPrinciples: [
      '다섯 가지 차원이 상호작용한다',
      '태도와 인식이 학습의 기반이다',
      '지식 습득, 확장, 활용의 과정',
      '생산적 사고 습관이 중요하다'
    ],
    components: [
      {
        name: '차원 1: 학습에 대한 긍정적 태도와 인식',
        nameEn: 'Dimension 1: Positive Attitudes and Perceptions',
        description: '교실 환경과 학습 과제에 대한 긍정적 태도',
        subComponents: ['소속감', '안전감', '학습 관련성 인식', '자기효능감']
      },
      {
        name: '차원 2: 지식의 습득과 통합',
        nameEn: 'Dimension 2: Acquiring and Integrating Knowledge',
        description: '새로운 지식을 기존 지식과 연결',
        subComponents: ['서술적 지식', '절차적 지식', '구성', '내면화']
      },
      {
        name: '차원 3: 지식의 확장과 정교화',
        nameEn: 'Dimension 3: Extending and Refining Knowledge',
        description: '지식을 분석하고 더 깊이 이해',
        subComponents: ['비교', '분류', '추상화', '귀납', '연역', '오류 분석', '관점 분석']
      },
      {
        name: '차원 4: 지식의 의미 있는 활용',
        nameEn: 'Dimension 4: Using Knowledge Meaningfully',
        description: '복잡한 과제에 지식을 적용',
        subComponents: ['의사결정', '문제 해결', '발명', '탐구', '조사', '실험']
      },
      {
        name: '차원 5: 생산적 사고 습관',
        nameEn: 'Dimension 5: Productive Habits of Mind',
        description: '효과적인 사고자의 특성',
        subComponents: ['비판적 사고', '창의적 사고', '자기조절적 사고']
      }
    ],
    educationalImplications: [
      '긍정적 학습 환경 조성',
      '다양한 사고 기회 제공',
      '심층적 지식 활용 과제',
      '사고 습관 명시적 지도'
    ],
    source: 'A Different Kind of Classroom (1992)',
    category: 'instructional_model'
  }
];

// ============================================
// 3. 평가 프레임워크 (Assessment Frameworks)
// ============================================

export const ASSESSMENT_FRAMEWORKS: EducationalTheory[] = [
  // SOLO Taxonomy
  {
    id: 'solo-biggs',
    name: 'SOLO 분류체계',
    nameEn: 'SOLO Taxonomy',
    theorist: 'John Biggs & Kevin Collis',
    year: 1982,
    description: '학습 결과의 복잡성을 평가하기 위한 5단계 분류체계입니다.',
    keyPrinciples: [
      '이해의 질적 수준을 평가한다',
      '표면에서 심층 학습으로의 발달',
      '관찰 가능한 학습 결과에 초점',
      '교육과정 설계에도 활용 가능'
    ],
    components: [
      {
        name: '전구조적 수준',
        nameEn: 'Pre-structural',
        description: '과제를 이해하지 못함, 관련 없는 반응',
        subComponents: ['무관한 정보', '과제 미이해', '빗나간 응답']
      },
      {
        name: '단일구조적 수준',
        nameEn: 'Uni-structural',
        description: '하나의 관련 측면에만 초점',
        subComponents: ['단일 개념', '단순 식별', '기본적 정의']
      },
      {
        name: '다구조적 수준',
        nameEn: 'Multi-structural',
        description: '여러 관련 측면을 다루지만 통합하지 못함',
        subComponents: ['여러 개념 나열', '연결 없음', '양적 증가']
      },
      {
        name: '관계적 수준',
        nameEn: 'Relational',
        description: '여러 측면을 통합하여 전체로 이해',
        subComponents: ['개념 간 연결', '통합적 이해', '비교와 대조', '설명']
      },
      {
        name: '확장추상적 수준',
        nameEn: 'Extended Abstract',
        description: '새로운 영역으로 일반화하고 전이',
        subComponents: ['일반화', '가설 수립', '새로운 맥락 적용', '이론화']
      }
    ],
    educationalImplications: [
      '학습 목표 수준 설정',
      '평가 루브릭 개발',
      '학습 진행 모니터링',
      '피드백 제공'
    ],
    source: 'Evaluating the Quality of Learning (1982)',
    category: 'assessment_framework'
  }
];

// ============================================
// 4. 21세기 역량 프레임워크 (21st Century Competency Frameworks)
// ============================================

export const COMPETENCY_FRAMEWORKS_21C: CompetencyFramework[] = [
  // P21 Framework
  {
    id: 'p21-framework',
    name: 'P21 21세기 학습 프레임워크',
    nameEn: 'P21 Framework for 21st Century Learning',
    organization: 'Partnership for 21st Century Learning',
    year: 2006,
    description: '21세기 학생들이 갖추어야 할 핵심 역량과 지원 시스템을 제시하는 프레임워크입니다.',
    competencies: [
      {
        name: '4C 역량',
        nameEn: '4Cs Skills',
        description: '학습과 혁신을 위한 핵심 역량',
        subSkills: ['비판적 사고 (Critical Thinking)', '창의성 (Creativity)', '협력 (Collaboration)', '의사소통 (Communication)']
      },
      {
        name: '정보, 미디어, 기술 역량',
        nameEn: 'Information, Media, and Technology Skills',
        description: '정보화 시대에 필요한 리터러시',
        subSkills: ['정보 리터러시', '미디어 리터러시', 'ICT 리터러시']
      },
      {
        name: '삶과 직업 역량',
        nameEn: 'Life and Career Skills',
        description: '직업 세계와 삶에서 성공하기 위한 역량',
        subSkills: ['유연성과 적응력', '주도성과 자기주도', '사회적 기술', '생산성과 책무성', '리더십과 책임']
      }
    ],
    source: 'Battelle for Kids'
  },

  // OECD Learning Compass 2030
  {
    id: 'oecd-2030',
    name: 'OECD 학습 나침반 2030',
    nameEn: 'OECD Learning Compass 2030',
    organization: 'OECD',
    year: 2019,
    description: '2030년을 위한 학습 프레임워크로, 학생 주체성과 변혁적 역량을 강조합니다.',
    competencies: [
      {
        name: '변혁적 역량',
        nameEn: 'Transformative Competencies',
        description: '세상에 기여하고 번영하기 위한 핵심 역량',
        subSkills: ['새로운 가치 창출 (Creating New Value)', '긴장과 딜레마 해결 (Reconciling Tensions and Dilemmas)', '책임지기 (Taking Responsibility)']
      },
      {
        name: '핵심 기초',
        nameEn: 'Core Foundations',
        description: '모든 학습의 토대가 되는 기초',
        subSkills: ['인지적 기초 (리터러시, 수리력)', '건강 기초', '사회정서적 기초', '디지털/데이터 리터러시']
      },
      {
        name: '지식',
        nameEn: 'Knowledge',
        description: '학문적, 간학문적, 인식론적, 절차적 지식',
        subSkills: ['학문적 지식', '간학문적 지식', '인식론적 지식', '절차적 지식']
      },
      {
        name: '기술',
        nameEn: 'Skills',
        description: '인지적, 메타인지적, 사회정서적, 신체적 기술',
        subSkills: ['인지적 기술', '메타인지적 기술', '사회정서적 기술', '실천적/신체적 기술']
      },
      {
        name: '태도와 가치',
        nameEn: 'Attitudes and Values',
        description: '행동을 안내하는 원칙과 신념',
        subSkills: ['개인적 가치', '사회적 가치', '인간적 가치']
      },
      {
        name: '학생 주체성',
        nameEn: 'Student Agency',
        description: '목표를 설정하고 성찰하며 행동하는 능력',
        subSkills: ['예견 (Anticipation)', '행동 (Action)', '성찰 (Reflection)']
      }
    ],
    source: 'OECD Future of Education and Skills 2030'
  },

  // UNESCO Four Pillars
  {
    id: 'unesco-pillars',
    name: 'UNESCO 학습의 네 기둥',
    nameEn: 'UNESCO Four Pillars of Learning',
    organization: 'UNESCO (Delors Commission)',
    year: 1996,
    description: '21세기 교육을 위한 네 가지 근본적인 학습 유형을 제시합니다.',
    competencies: [
      {
        name: '알기 위한 학습',
        nameEn: 'Learning to Know',
        description: '세계를 이해하기 위한 지식과 기술 습득',
        subSkills: ['리터러시', '수리력', '비판적 사고', '학습 방법 학습', '호기심']
      },
      {
        name: '행하기 위한 학습',
        nameEn: 'Learning to Do',
        description: '경제와 사회에 참여하기 위한 실용적 기술',
        subSkills: ['직업 기술', '기술적 역량', '문제 해결', '팀워크', '혁신']
      },
      {
        name: '함께 살기 위한 학습',
        nameEn: 'Learning to Live Together',
        description: '평화와 조화 속에서 타인과 함께 사는 능력',
        subSkills: ['타인 이해', '상호의존성 인식', '갈등 해결', '협력', '다양성 존중']
      },
      {
        name: '존재하기 위한 학습',
        nameEn: 'Learning to Be',
        description: '전인적 인간 발달을 위한 학습',
        subSkills: ['자기 발견', '자기 실현', '창의성', '비판적 사고', '미적 감각']
      }
    ],
    source: 'Learning: The Treasure Within (Delors Report, 1996)'
  }
];

// ============================================
// 5. 사고 습관 프레임워크 (Habits of Mind)
// ============================================

export const HABITS_OF_MIND: TheoryComponent[] = [
  {
    name: '끈기 있게 하기',
    nameEn: 'Persisting',
    description: '과제에 집중하고 어려움에도 끝까지 완수합니다.',
    subComponents: ['문제가 해결될 때까지 노력', '다양한 전략 시도', '포기하지 않음']
  },
  {
    name: '충동 조절하기',
    nameEn: 'Managing Impulsivity',
    description: '행동하기 전에 생각하고, 시간을 들여 숙고합니다.',
    subComponents: ['행동 전 계획', '대안 고려', '결과 예측']
  },
  {
    name: '이해와 공감으로 경청하기',
    nameEn: 'Listening with Understanding and Empathy',
    description: '다른 사람의 관점을 이해하려고 노력합니다.',
    subComponents: ['적극적 경청', '공감', '타인 관점 수용']
  },
  {
    name: '유연하게 사고하기',
    nameEn: 'Thinking Flexibly',
    description: '상황에 따라 관점을 바꾸고 대안을 고려합니다.',
    subComponents: ['관점 전환', '대안 탐색', '변화 적응']
  },
  {
    name: '자신의 사고에 대해 사고하기',
    nameEn: 'Thinking about Your Thinking (Metacognition)',
    description: '자신의 사고 과정을 인식하고 모니터링합니다.',
    subComponents: ['자기 인식', '전략 평가', '사고 과정 성찰']
  },
  {
    name: '정확성 추구하기',
    nameEn: 'Striving for Accuracy',
    description: '높은 기준을 설정하고 정확성을 추구합니다.',
    subComponents: ['오류 점검', '세부 주의', '품질 추구']
  },
  {
    name: '질문하고 문제 제기하기',
    nameEn: 'Questioning and Posing Problems',
    description: '호기심을 갖고 질문하며 문제를 발견합니다.',
    subComponents: ['호기심', '질문 생성', '문제 발견']
  },
  {
    name: '과거 지식을 새 상황에 적용하기',
    nameEn: 'Applying Past Knowledge to New Situations',
    description: '이전에 배운 것을 새로운 상황에 전이합니다.',
    subComponents: ['지식 전이', '패턴 인식', '유추']
  },
  {
    name: '명확하고 정확하게 사고하고 소통하기',
    nameEn: 'Thinking and Communicating with Clarity and Precision',
    description: '명확한 언어로 정확하게 표현합니다.',
    subComponents: ['정확한 언어 사용', '명료한 표현', '구체적 설명']
  },
  {
    name: '모든 감각을 통해 정보 수집하기',
    nameEn: 'Gathering Data Through All Senses',
    description: '다양한 감각을 활용하여 정보를 수집합니다.',
    subComponents: ['관찰', '감각 활용', '세심한 인식']
  },
  {
    name: '창조하고, 상상하고, 혁신하기',
    nameEn: 'Creating, Imagining, Innovating',
    description: '새로운 아이디어를 생성하고 독창성을 발휘합니다.',
    subComponents: ['창의적 사고', '상상력', '독창성']
  },
  {
    name: '경이로움과 경외감으로 반응하기',
    nameEn: 'Responding with Wonderment and Awe',
    description: '세상에 대한 호기심과 경이로움을 유지합니다.',
    subComponents: ['호기심', '열정', '학습 즐거움']
  },
  {
    name: '책임 있는 위험 감수하기',
    nameEn: 'Taking Responsible Risks',
    description: '안전 지대를 벗어나 도전하면서도 책임감을 유지합니다.',
    subComponents: ['도전 정신', '실험', '두려움 극복']
  },
  {
    name: '유머 찾기',
    nameEn: 'Finding Humor',
    description: '상황의 유머를 인식하고 웃을 줄 압니다.',
    subComponents: ['유머 감각', '긍정적 태도', '창의적 관점']
  },
  {
    name: '상호의존적으로 사고하기',
    nameEn: 'Thinking Interdependently',
    description: '타인과 협력하여 함께 사고하고 학습합니다.',
    subComponents: ['팀워크', '협력', '집단 지성']
  },
  {
    name: '지속적인 학습에 열린 자세 유지하기',
    nameEn: 'Remaining Open to Continuous Learning',
    description: '겸손함을 유지하고 계속 배우려는 자세를 갖습니다.',
    subComponents: ['평생 학습', '겸손', '성장 마인드셋']
  }
];

// ============================================
// 6. Building Learning Power (4Rs)
// ============================================

export const BUILDING_LEARNING_POWER: TheoryComponent[] = [
  {
    name: '회복탄력성 (Resilience)',
    nameEn: 'Resilience',
    description: '학습의 정서적, 주의적 측면',
    subComponents: ['끈기 (Perseverance)', '몰입 (Absorption)', '집중 (Concentration)', '세심한 인식 (Perceptiveness)']
  },
  {
    name: '자원활용력 (Resourcefulness)',
    nameEn: 'Resourcefulness',
    description: '학습의 인지적 측면',
    subComponents: ['질문하기 (Questioning)', '연결짓기 (Connecting)', '상상하기 (Imagining)', '추론하기 (Reasoning)', '자원 활용 (Capitalising)']
  },
  {
    name: '상호성 (Reciprocity)',
    nameEn: 'Reciprocity',
    description: '학습의 사회적 차원',
    subComponents: ['상호의존 (Interdependence)', '협력 (Collaboration)', '경청과 공감 (Listening and Empathy)', '모방 (Imitation)']
  },
  {
    name: '성찰력 (Reflectiveness)',
    nameEn: 'Reflectiveness',
    description: '학습의 전략적 관리와 자기인식',
    subComponents: ['계획 (Planning)', '자기 평가 (Self-evaluating)', '적용 (Distilling)', '메타학습 (Meta-learning)']
  }
];

// ============================================
// 7. 확장된 사고 루틴 (Extended Thinking Routines)
// ============================================

export const EXTENDED_THINKING_ROUTINES: ThinkingRoutine[] = [
  // ============================================
  // Harvard Project Zero 완전 사고 루틴 컬렉션 (100개+)
  // ============================================

  // === 탐색 및 도입 루틴 (Introducing & Exploring Ideas) ===
  {
    id: 'tr-see-think-wonder',
    name: '보기-생각하기-궁금하기',
    nameEn: 'See-Think-Wonder',
    purpose: '관찰력을 기르고 해석과 호기심을 자극합니다.',
    steps: [
      '무엇이 보이나요?',
      '무엇이라고 생각하나요?',
      '무엇이 궁금한가요?'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-think-puzzle-explore',
    name: '생각하기-퍼즐-탐구',
    nameEn: 'Think-Puzzle-Explore',
    purpose: '주제에 대한 사전 지식을 활성화하고 탐구 방향을 설정합니다.',
    steps: [
      '이 주제에 대해 무엇을 생각하나요?',
      '이 주제에 대해 무엇이 수수께끼인가요?',
      '이 주제를 어떻게 탐구할 수 있을까요?'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-chalk-talk',
    name: '초크 토크',
    nameEn: 'Chalk Talk',
    purpose: '조용한 대화를 통해 아이디어를 공유하고 발전시킵니다.',
    steps: [
      '질문이나 주제를 종이/보드 중앙에 씁니다',
      '침묵 속에서 반응, 질문, 연결을 씁니다',
      '다른 사람의 글에 반응하고 연결합니다',
      '패턴과 주제를 찾습니다'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-think-pair-share',
    name: '생각-짝-공유',
    nameEn: 'Think-Pair-Share',
    purpose: '개인 사고 후 협력적 대화를 촉진합니다.',
    steps: [
      '질문에 대해 개인적으로 생각합니다',
      '파트너와 아이디어를 공유합니다',
      '전체 그룹과 공유합니다'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-gallery-walk',
    name: '갤러리 워크',
    nameEn: 'Gallery Walk',
    purpose: '학생 작품을 공유하고 피드백을 수집합니다.',
    steps: [
      '작품을 교실 주변에 전시합니다',
      '조용히 작품을 관람하며 이동합니다',
      '각 작품에 피드백이나 질문을 남깁니다',
      '자신의 작품으로 돌아와 피드백을 검토합니다'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-creative-hunt',
    name: '창의적 사냥',
    nameEn: 'Creative Hunt',
    purpose: '일상에서 창의성의 예를 찾고 분석합니다.',
    steps: [
      '창의적인 것을 찾습니다',
      '왜 창의적인지 설명합니다',
      '무엇이 새롭거나 가치 있는지 분석합니다'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-parts-purposes-complexities',
    name: '부분-목적-복잡성',
    nameEn: 'Parts-Purposes-Complexities',
    purpose: '대상이나 시스템을 깊이 분석합니다.',
    steps: [
      '부분: 어떤 부분들로 구성되어 있나요?',
      '목적: 각 부분의 목적은 무엇인가요?',
      '복잡성: 어떤 복잡성이나 수수께끼가 있나요?'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },

  // === 종합 및 조직 루틴 (Synthesizing & Organizing Ideas) ===
  {
    id: 'tr-connect-extend-challenge',
    name: '연결-확장-도전',
    nameEn: 'Connect-Extend-Challenge',
    purpose: '새로운 아이디어를 기존 지식과 연결하고 확장합니다.',
    steps: [
      '연결: 이미 알고 있는 것과 어떻게 연결되나요?',
      '확장: 어떤 새로운 아이디어가 당신의 사고를 확장했나요?',
      '도전: 아직 도전적이거나 혼란스러운 것은 무엇인가요?'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-csi-color-symbol-image',
    name: 'CSI: 색-상징-이미지',
    nameEn: 'CSI: Color-Symbol-Image',
    purpose: '비언어적 방식으로 핵심 아이디어를 포착합니다.',
    steps: [
      '핵심 아이디어를 나타내는 색을 선택하고 이유를 설명합니다',
      '핵심 아이디어를 나타내는 상징을 그리고 이유를 설명합니다',
      '핵심 아이디어를 나타내는 이미지를 스케치하고 이유를 설명합니다'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-i-used-to-think-now-i-think',
    name: '예전에는...지금은...',
    nameEn: 'I Used to Think... Now I Think...',
    purpose: '학습을 통한 사고의 변화를 성찰합니다.',
    steps: [
      '이 주제에 대해 예전에는 무엇이라고 생각했나요?',
      '지금은 무엇이라고 생각하나요?',
      '사고가 어떻게, 왜 바뀌었나요?'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-the-4cs-text',
    name: '4C 텍스트 프로토콜',
    nameEn: 'The 4 Cs (Text Protocol)',
    purpose: '텍스트에 대한 깊은 이해와 토론을 촉진합니다.',
    steps: [
      'Connections: 개인적으로 어떤 연결을 만들 수 있나요?',
      'Challenge: 도전하거나 의문을 제기하고 싶은 것은?',
      'Concepts: 핵심 개념이나 아이디어는 무엇인가요?',
      'Changes: 이 텍스트가 나의 사고를 어떻게 바꾸었나요?'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-micro-lab',
    name: '마이크로 랩 프로토콜',
    nameEn: 'Micro Lab Protocol',
    purpose: '구조화된 깊은 경청과 공유를 촉진합니다.',
    steps: [
      '3-4명의 소그룹을 형성합니다',
      '각자 정해진 시간(1-2분) 동안 방해받지 않고 말합니다',
      '다른 사람들은 조용히 경청합니다',
      '모두가 공유한 후 자유 토론합니다'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-headlines',
    name: '헤드라인',
    nameEn: 'Headlines',
    purpose: '핵심 아이디어나 주제의 본질을 포착합니다.',
    steps: [
      '학습한 내용을 생각합니다',
      '핵심을 담은 헤드라인(신문 제목)을 작성합니다',
      '헤드라인이 왜 적절한지 설명합니다'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-making-meaning',
    name: '의미 만들기',
    nameEn: 'Making Meaning',
    purpose: '텍스트나 경험에서 깊은 의미를 도출합니다.',
    steps: [
      '무엇이 중요했나요?',
      '그것이 왜 중요할까요?',
      '어떤 의미를 도출할 수 있나요?'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },

  // === 깊이 탐구 루틴 (Digging Deeper into Ideas) ===
  {
    id: 'tr-what-makes-you-say-that',
    name: '왜 그렇게 말하나요?',
    nameEn: 'What Makes You Say That?',
    purpose: '해석과 정당화를 요청하여 추론을 심화합니다.',
    steps: [
      '무슨 일이 일어나고 있나요?',
      '무엇이 당신을 그렇게 말하게 하나요?',
      '어떤 증거가 있나요?'
    ],
    category: 'digging_deeper',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-stop-look-listen',
    name: '멈추기-보기-듣기',
    nameEn: 'Stop-Look-Listen',
    purpose: '예술작품이나 공연을 깊이 경험합니다.',
    steps: [
      '멈추기: 잠시 멈추고 집중합니다',
      '보기: 세부 사항을 주의 깊게 관찰합니다',
      '듣기: 소리와 침묵에 귀 기울입니다'
    ],
    category: 'digging_deeper',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-beginning-middle-end',
    name: '시작-중간-끝',
    nameEn: 'Beginning-Middle-End',
    purpose: '이야기나 과정의 구조를 분석합니다.',
    steps: [
      '시작: 어떻게 시작되었나요?',
      '중간: 중요한 전환점은 무엇인가요?',
      '끝: 어떻게 끝났나요? 결론은 무엇인가요?'
    ],
    category: 'digging_deeper',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-peel-the-fruit',
    name: '과일 껍질 벗기기',
    nameEn: 'Peel the Fruit',
    purpose: '표면에서 핵심까지 층을 탐색합니다.',
    steps: [
      '껍질(표면): 가장 먼저 눈에 띄는 것은?',
      '과육(깊이): 더 깊은 의미나 내용은?',
      '씨앗(핵심): 핵심 아이디어나 메시지는?'
    ],
    category: 'digging_deeper',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-layers',
    name: '층 분석',
    nameEn: 'Layers',
    purpose: '복잡한 주제의 다층적 의미를 탐구합니다.',
    steps: [
      '문자적 층: 표면적으로 무엇이 있나요?',
      '해석적 층: 더 깊은 의미는 무엇인가요?',
      '상징적 층: 상징이나 은유는 무엇인가요?',
      '주제적 층: 보편적 주제나 메시지는?'
    ],
    category: 'digging_deeper',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },

  // === 관점 탐색 루틴 (Exploring Perspectives) ===
  {
    id: 'tr-circle-of-viewpoints',
    name: '관점의 원',
    nameEn: 'Circle of Viewpoints',
    purpose: '다양한 관점에서 상황을 탐색합니다.',
    steps: [
      '가능한 관점들을 브레인스토밍합니다',
      '한 관점을 선택합니다',
      '"나는 ___의 관점에서 생각하고 있습니다..."로 시작합니다',
      '그 관점에서의 생각, 질문, 우려를 표현합니다'
    ],
    category: 'exploring_perspectives',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-step-inside',
    name: '안으로 들어가기',
    nameEn: 'Step Inside',
    purpose: '다른 사람이나 대상의 관점을 체험합니다.',
    steps: [
      '인물이나 대상을 선택합니다',
      '"나는 ___입니다"로 자신을 소개합니다',
      '무엇을 인식하고 알고 있나요?',
      '무엇을 걱정하나요?',
      '무엇을 느끼나요?'
    ],
    category: 'exploring_perspectives',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-reporter-notebook',
    name: '기자 노트북',
    nameEn: 'Reporter\'s Notebook',
    purpose: '다양한 관점에서 사건을 조사합니다.',
    steps: [
      '누가? (관련된 사람들)',
      '무엇을? (일어난 일)',
      '언제? (시간적 맥락)',
      '어디서? (장소)',
      '왜? (원인과 동기)',
      '어떻게? (방법과 과정)'
    ],
    category: 'exploring_perspectives',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-perspectives-taking',
    name: '관점 취하기',
    nameEn: 'Perspective Taking',
    purpose: '다양한 이해관계자의 관점을 이해합니다.',
    steps: [
      '이 상황에 관련된 사람들은 누구인가요?',
      '각자의 관심사와 목표는 무엇인가요?',
      '각 관점에서 상황이 어떻게 보일까요?',
      '관점들 사이의 공통점과 차이점은?'
    ],
    category: 'exploring_perspectives',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-true-for-who',
    name: '누구에게 사실인가?',
    nameEn: 'True for Who?',
    purpose: '진실의 상대성과 관점의 영향을 탐구합니다.',
    steps: [
      '이 주장은 누구에게 사실인가요?',
      '이 주장은 누구에게 사실이 아닐 수 있나요?',
      '어떤 맥락이 이 차이를 만드나요?'
    ],
    category: 'exploring_perspectives',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },

  // === 추론과 증거 루틴 (Reasoning with Evidence) ===
  {
    id: 'tr-claim-support-question',
    name: '주장-근거-질문',
    nameEn: 'Claim-Support-Question',
    purpose: '증거 기반 주장을 개발하고 평가합니다.',
    steps: [
      '주장: 이 주제에 대해 무엇을 주장할 수 있나요?',
      '근거: 어떤 증거가 이 주장을 지지하나요?',
      '질문: 이 주장에 대해 어떤 질문이 남아 있나요?'
    ],
    category: 'reasoning_evidence',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-tug-of-war',
    name: '줄다리기',
    nameEn: 'Tug of War',
    purpose: '복잡한 딜레마의 양면을 탐색합니다.',
    steps: [
      '딜레마나 논쟁적 질문을 제시합니다',
      '한쪽 입장의 이유(tugs)를 나열합니다',
      '반대쪽 입장의 이유(tugs)를 나열합니다',
      '각 이유의 강도를 평가합니다',
      '자신의 입장을 결정합니다'
    ],
    category: 'reasoning_evidence',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-tug-for-truth',
    name: '진실을 향한 줄다리기',
    nameEn: 'Tug for Truth',
    purpose: '증거의 신뢰성을 평가합니다.',
    steps: [
      '출처는 무엇인가요?',
      '증거는 얼마나 신뢰할 수 있나요?',
      '다른 출처는 무엇을 말하나요?',
      '무엇이 더 설득력 있나요?'
    ],
    category: 'reasoning_evidence',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-red-light-yellow-light',
    name: '빨간불-노란불',
    nameEn: 'Red Light-Yellow Light',
    purpose: '정보의 정확성을 평가합니다.',
    steps: [
      '빨간불: 이 정보가 사실인지 확인해야 합니다',
      '노란불: 이 정보는 의견이거나 편향될 수 있습니다',
      '왜 이 평가를 내렸나요?',
      '어떻게 확인할 수 있나요?'
    ],
    category: 'reasoning_evidence',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },

  // === 창의성 루틴 (Fostering Creativity) ===
  {
    id: 'tr-creative-questions',
    name: '창의적 질문',
    nameEn: 'Creative Questions',
    purpose: '창의적 탐구를 위한 질문을 생성합니다.',
    steps: [
      '주제에 대해 브레인스토밍합니다',
      '"만약에..."로 시작하는 질문을 만듭니다',
      '"왜..."로 시작하는 질문을 만듭니다',
      '"어떻게 하면..."로 시작하는 질문을 만듭니다',
      '가장 흥미로운 질문을 선택합니다'
    ],
    category: 'creativity',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-options-explosion',
    name: '옵션 폭발',
    nameEn: 'Options Explosion',
    purpose: '가능한 한 많은 아이디어를 생성합니다.',
    steps: [
      '문제나 질문을 명확히 합니다',
      '가능한 한 많은 아이디어를 빠르게 생성합니다',
      '비판 없이 모든 아이디어를 기록합니다',
      '아이디어들을 분류하고 평가합니다'
    ],
    category: 'creativity',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-imagine-if',
    name: '상상해보세요',
    nameEn: 'Imagine If...',
    purpose: '창의적 가능성을 탐색합니다.',
    steps: [
      '현재 상황을 확인합니다',
      '"만약 ___라면 어떨까?"를 상상합니다',
      '그 상상이 어떤 변화를 가져올지 탐구합니다',
      '새로운 가능성을 평가합니다'
    ],
    category: 'creativity',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-creative-comparisons',
    name: '창의적 비교',
    nameEn: 'Creative Comparisons',
    purpose: '은유와 유추를 통해 이해를 심화합니다.',
    steps: [
      '대상을 선택합니다',
      '전혀 다른 것과 비교합니다',
      '어떤 점이 비슷한가요?',
      '이 비교가 새로운 통찰을 주나요?'
    ],
    category: 'creativity',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },

  // === 에이전시(주체성) 루틴 (Agency by Design) ===
  {
    id: 'tr-parts-people-interactions',
    name: '부분-사람-상호작용',
    nameEn: 'Parts-People-Interactions',
    purpose: '시스템의 구성요소와 관계를 분석합니다.',
    steps: [
      '부분: 이 시스템의 부분들은 무엇인가요?',
      '사람: 어떤 사람들이 관여하나요?',
      '상호작용: 부분들과 사람들은 어떻게 상호작용하나요?'
    ],
    category: 'agency_design',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero - Agency by Design'
  },
  {
    id: 'tr-imagine-elaborate-enhance',
    name: '상상-정교화-강화',
    nameEn: 'Imagine-Elaborate-Enhance',
    purpose: '개선 아이디어를 개발합니다.',
    steps: [
      '상상: 이것이 어떻게 다를 수 있을까요?',
      '정교화: 그 아이디어를 더 자세히 설명하세요',
      '강화: 아이디어를 더 좋게 만들려면 어떻게 해야 할까요?'
    ],
    category: 'agency_design',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero - Agency by Design'
  },
  {
    id: 'tr-think-feel-care',
    name: '생각-느낌-관심',
    nameEn: 'Think-Feel-Care',
    purpose: '사용자 중심 디자인 사고를 개발합니다.',
    steps: [
      '생각: 사용자가 무엇을 생각할까요?',
      '느낌: 사용자가 무엇을 느낄까요?',
      '관심: 사용자가 무엇에 관심을 가질까요?'
    ],
    category: 'agency_design',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero - Agency by Design'
  },

  // === 글로벌 역량 루틴 (Global Competence) ===
  {
    id: 'tr-3ys',
    name: '3가지 왜',
    nameEn: 'The 3 Ys',
    purpose: '글로벌 문제의 중요성을 탐구합니다.',
    steps: [
      '왜 이것이 나에게 중요할까요?',
      '왜 이것이 우리 공동체에 중요할까요?',
      '왜 이것이 세계에 중요할까요?'
    ],
    category: 'global_competence',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-here-there',
    name: '여기-저기',
    nameEn: 'Here-There',
    purpose: '글로벌 연결을 탐색합니다.',
    steps: [
      '여기(지역)에서 이 문제가 어떻게 나타나나요?',
      '저기(다른 곳)에서는 어떻게 나타나나요?',
      '어떤 연결과 차이가 있나요?'
    ],
    category: 'global_competence',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-out-of-eden-walk',
    name: '에덴 밖으로 걷기',
    nameEn: 'Out of Eden Walk',
    purpose: '글로벌 관점과 공감을 개발합니다.',
    steps: [
      '느리게 관찰합니다',
      '깊이 경청합니다',
      '다양한 관점을 존중합니다',
      '연결을 찾습니다'
    ],
    category: 'global_competence',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },

  // === 피드백 루틴 (Feedback Routines) ===
  {
    id: 'tr-ladder-of-feedback',
    name: '피드백 사다리',
    nameEn: 'Ladder of Feedback',
    purpose: '건설적인 피드백을 구조화합니다.',
    steps: [
      '명료화: 이해를 위한 질문을 합니다',
      '가치: 강점과 긍정적 측면을 인정합니다',
      '우려: 걱정되는 점을 표현합니다',
      '제안: 개선 아이디어를 제시합니다'
    ],
    category: 'feedback',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-stars-and-wishes',
    name: '별과 소원',
    nameEn: 'Stars and Wishes',
    purpose: '어린 학습자를 위한 피드백을 구조화합니다.',
    steps: [
      '별: 잘한 것 2-3가지를 말합니다',
      '소원: 다음에 개선할 수 있는 것 1가지를 말합니다'
    ],
    category: 'feedback',
    suitableFor: ['elementary_lower', 'elementary_middle'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-two-stars-wish',
    name: '별 두개와 소원 하나',
    nameEn: 'Two Stars and a Wish',
    purpose: '균형 잡힌 피드백을 제공합니다.',
    steps: [
      '첫 번째 별: 잘한 점',
      '두 번째 별: 또 다른 잘한 점',
      '소원: 개선할 수 있는 점'
    ],
    category: 'feedback',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    source: 'Harvard Project Zero'
  },

  // 기존 루틴들 계속...
  {
    id: 'tr-3-2-1-bridge',
    name: '3-2-1 브릿지',
    nameEn: '3-2-1 Bridge',
    purpose: '초기 이해와 새로운 이해를 연결하여 사고의 변화를 추적합니다.',
    steps: [
      '주제에 대해 3가지 생각, 2가지 질문, 1가지 유추를 적습니다 (전)',
      '새로운 학습을 합니다',
      '다시 3가지 생각, 2가지 질문, 1가지 유추를 적습니다 (후)',
      '전후를 비교하여 브릿지를 만듭니다'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-circle-viewpoints',
    name: '관점의 원',
    nameEn: 'Circle of Viewpoints',
    purpose: '다양한 관점을 탐색하고 이해합니다.',
    steps: [
      '주제나 상황을 확인합니다',
      '가능한 관점들을 브레인스토밍합니다',
      '각 관점에서 상황을 바라봅니다',
      '"나는 ___의 관점에서 생각하고 있습니다"로 시작합니다',
      '그 관점에서의 생각, 질문, 우려를 표현합니다'
    ],
    category: 'understanding_perspectives',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-claim-support-question',
    name: '주장-근거-질문',
    nameEn: 'Claim-Support-Question',
    purpose: '증거에 기반한 주장을 개발하고 질문을 제기합니다.',
    steps: [
      '주제에 대한 주장을 합니다',
      '그 주장을 뒷받침하는 증거를 제시합니다',
      '그 주장에 대한 질문을 제기합니다'
    ],
    category: 'reasoning_evidence',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-color-symbol-image',
    name: '색-상징-이미지',
    nameEn: 'Color-Symbol-Image',
    purpose: '아이디어의 본질을 비언어적으로 포착합니다.',
    steps: [
      '핵심 아이디어를 나타내는 색을 선택합니다',
      '핵심 아이디어를 나타내는 상징을 그립니다',
      '핵심 아이디어를 나타내는 이미지를 스케치합니다',
      '각 선택의 이유를 공유합니다'
    ],
    category: 'capturing_core',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-compass-points',
    name: '나침반 방향',
    nameEn: 'Compass Points',
    purpose: '아이디어나 제안의 다양한 측면을 탐색합니다.',
    steps: [
      'E (Excites): 무엇이 흥미로운가?',
      'W (Worries): 무엇이 걱정되는가?',
      'N (Needs): 더 알아야 할 것은 무엇인가?',
      'S (Stance): 나의 입장은 무엇인가?'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-explanation-game',
    name: '설명 게임',
    nameEn: 'The Explanation Game',
    purpose: '관찰을 바탕으로 설명을 구성하고 검증합니다.',
    steps: [
      '주의 깊게 관찰합니다',
      '관찰한 것을 이름 붙이거나 설명합니다',
      '"왜 그런가?" 또는 "그것이 설명하는 것은?"을 묻습니다',
      '가능한 설명을 제시합니다',
      '설명을 뒷받침하는 증거를 찾습니다'
    ],
    category: 'reasoning_evidence',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-generate-sort-connect',
    name: '생성-분류-연결-정교화',
    nameEn: 'Generate-Sort-Connect-Elaborate',
    purpose: '개념 지도를 만들어 아이디어를 조직합니다.',
    steps: [
      '주제와 관련된 아이디어를 생성합니다',
      '아이디어를 중요도나 유사성에 따라 분류합니다',
      '아이디어들 사이의 연결을 만듭니다',
      '연결에 대해 정교화합니다'
    ],
    category: 'synthesizing_organizing',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-global-thinking',
    name: '글로벌 사고',
    nameEn: 'Global Thinking Routine',
    purpose: '글로벌 역량을 개발하고 글로벌 관점을 탐색합니다.',
    steps: [
      '이 문제/상황이 세계적으로 어떻게 연결되어 있는가?',
      '다른 곳에서는 이것을 어떻게 보는가?',
      '나는 어떤 영향을 미칠 수 있는가?',
      '더 알아야 할 것은 무엇인가?'
    ],
    category: 'understanding_perspectives',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-headlines',
    name: '헤드라인',
    nameEn: 'Headlines',
    purpose: '핵심 아이디어나 주제의 본질을 요약합니다.',
    steps: [
      '학습 내용을 생각합니다',
      '핵심을 담은 헤드라인을 작성합니다',
      '헤드라인이 왜 적절한지 설명합니다',
      '다른 사람의 헤드라인과 비교합니다'
    ],
    category: 'capturing_core',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-ladder-feedback',
    name: '피드백 사다리',
    nameEn: 'Ladder of Feedback',
    purpose: '건설적인 피드백을 주고받는 구조를 제공합니다.',
    steps: [
      '명료화: 이해하기 위한 질문을 합니다',
      '가치 인정: 강점과 긍정적 측면을 지적합니다',
      '우려 표현: 걱정이나 어려움을 "나는 ~가 걱정됩니다"로 표현합니다',
      '제안: 개선을 위한 아이디어를 제시합니다'
    ],
    category: 'understanding_perspectives',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-micro-lab',
    name: '마이크로 랩',
    nameEn: 'Micro Lab',
    purpose: '구조화된 대화를 통해 깊은 경청과 성찰을 촉진합니다.',
    steps: [
      '소그룹(3-4명)을 형성합니다',
      '한 사람이 정해진 시간 동안 말합니다',
      '다른 사람들은 조용히 경청합니다',
      '다음 사람이 말합니다',
      '모든 사람이 공유한 후 토론합니다'
    ],
    category: 'understanding_perspectives',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-peel-fruit',
    name: '과일 껍질 벗기기',
    nameEn: 'Peel the Fruit',
    purpose: '텍스트나 아이디어의 층을 탐색합니다.',
    steps: [
      '껍질(표면): 눈에 보이는 것, 명백한 것은 무엇인가?',
      '과육(의미): 더 깊은 의미는 무엇인가?',
      '씨앗(핵심): 핵심 아이디어나 교훈은 무엇인가?'
    ],
    category: 'digging_deeper',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-question-sorts',
    name: '질문 분류',
    nameEn: 'Question Sorts',
    purpose: '질문의 유형을 분류하고 좋은 질문을 개발합니다.',
    steps: [
      '주제에 대한 질문을 생성합니다',
      '질문을 유형별로 분류합니다 (사실적, 개념적, 논쟁적)',
      '각 유형의 가치를 논의합니다',
      '더 좋은 질문을 개발합니다'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-sentence-phrase-word',
    name: '문장-구-단어',
    nameEn: 'Sentence-Phrase-Word',
    purpose: '텍스트의 핵심을 포착하고 토론을 촉진합니다.',
    steps: [
      '텍스트를 읽습니다',
      '인상 깊은 문장 하나를 선택합니다',
      '의미 있는 구절 하나를 선택합니다',
      '강력한 단어 하나를 선택합니다',
      '선택 이유를 공유하고 토론합니다'
    ],
    category: 'capturing_core',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-step-inside',
    name: '안으로 들어가기',
    nameEn: 'Step Inside',
    purpose: '다른 사람이나 대상의 관점으로 들어갑니다.',
    steps: [
      '인물/대상을 선택합니다',
      '"나는 ___입니다"로 자신을 소개합니다',
      '그 관점에서 무엇을 인식하고 알고 있나요?',
      '무엇을 걱정하나요?',
      '무엇을 느끼나요?'
    ],
    category: 'understanding_perspectives',
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-the-4cs',
    name: '4C',
    nameEn: 'The 4 Cs',
    purpose: '텍스트에 대한 깊은 이해와 토론을 촉진합니다.',
    steps: [
      'Connections (연결): 개인적 연결은 무엇인가?',
      'Challenge (도전): 도전하거나 논쟁하고 싶은 것은?',
      'Concepts (개념): 핵심 개념은 무엇인가?',
      'Changes (변화): 내 사고가 어떻게 바뀌었는가?'
    ],
    category: 'digging_deeper',
    suitableFor: ['middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-tug-of-war',
    name: '줄다리기',
    nameEn: 'Tug of War',
    purpose: '복잡한 쟁점의 양면을 탐색합니다.',
    steps: [
      '딜레마나 논쟁적 질문을 제시합니다',
      '양쪽 입장의 이유(tugs)를 생성합니다',
      '각 이유의 강도를 표시합니다',
      '양쪽을 고려하여 자신의 입장을 정합니다'
    ],
    category: 'reasoning_evidence',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-what-makes-say-that',
    name: '왜 그렇게 말하나요?',
    nameEn: 'What Makes You Say That?',
    purpose: '주장에 대한 근거를 요청하여 추론을 심화합니다.',
    steps: [
      '관찰이나 해석을 말합니다',
      '"왜 그렇게 말하나요?"라고 묻습니다',
      '증거나 추론을 설명합니다',
      '추가 질문으로 더 깊이 탐구합니다'
    ],
    category: 'reasoning_evidence',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-word-phrase-sentence',
    name: '단어-구-문장',
    nameEn: 'Word-Phrase-Sentence',
    purpose: '텍스트의 본질을 포착하고 협력적으로 의미를 구성합니다.',
    steps: [
      '텍스트를 읽고 인상 깊은 단어, 구, 문장을 선택합니다',
      '소그룹에서 선택을 공유합니다',
      '왜 그것을 선택했는지 설명합니다',
      '공통점과 차이점을 토론합니다'
    ],
    category: 'capturing_core',
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'Harvard Project Zero'
  },
  {
    id: 'tr-zoom-in',
    name: '확대하기',
    nameEn: 'Zoom In',
    purpose: '점진적으로 정보를 공개하여 관찰과 추론을 발달시킵니다.',
    steps: [
      '이미지의 작은 부분만 보여줍니다',
      '무엇이 보이는지? 무엇일 수 있는지? 물어봅니다',
      '점차 더 많이 공개합니다',
      '각 단계에서 관찰과 가설을 수정합니다'
    ],
    category: 'introducing_exploring',
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school'],
    source: 'Harvard Project Zero'
  }
];

// ============================================
// 8. 교과별 프레임워크 (Subject-Specific Frameworks)
// ============================================

export const SUBJECT_SPECIFIC_FRAMEWORKS: EducationalTheory[] = [
  // C3 Framework (Social Studies)
  {
    id: 'c3-framework',
    name: 'C3 프레임워크',
    nameEn: 'C3 Framework for Social Studies',
    theorist: 'National Council for the Social Studies (NCSS)',
    year: 2013,
    description: '대학, 직업, 시민 생활을 위한 사회과 탐구 아크입니다.',
    keyPrinciples: [
      '질문이 탐구를 이끈다',
      '학문적 개념과 도구 적용',
      '증거 평가와 사용',
      '결론 소통과 행동'
    ],
    components: [
      {
        name: '차원 1: 질문 개발과 탐구 계획',
        nameEn: 'Dimension 1: Developing Questions and Planning Inquiries',
        description: '핵심 질문과 보조 질문 개발',
        subComponents: ['핵심 질문', '보조 질문', '탐구 계획']
      },
      {
        name: '차원 2: 학문적 개념과 도구 적용',
        nameEn: 'Dimension 2: Applying Disciplinary Concepts and Tools',
        description: '시민학, 경제, 지리, 역사의 개념과 도구',
        subComponents: ['시민학', '경제학', '지리학', '역사학']
      },
      {
        name: '차원 3: 자료 평가와 증거 사용',
        nameEn: 'Dimension 3: Evaluating Sources and Using Evidence',
        description: '자료의 신뢰성 평가와 증거 기반 논증',
        subComponents: ['자료 수집', '자료 평가', '증거 기반 주장']
      },
      {
        name: '차원 4: 결론 소통과 정보에 입각한 행동',
        nameEn: 'Dimension 4: Communicating Conclusions and Taking Informed Action',
        description: '연구 결과 소통과 시민적 참여',
        subComponents: ['결론 구성', '비평 제시', '행동 실행']
      }
    ],
    educationalImplications: [
      '탐구 중심 사회과 수업',
      '증거 기반 논증',
      '시민적 참여 강조',
      '학제간 연결'
    ],
    source: 'NCSS C3 Framework (2013)',
    category: 'instructional_model'
  },

  // NCTM Process Standards
  {
    id: 'nctm-process',
    name: 'NCTM 과정 기준',
    nameEn: 'NCTM Process Standards',
    theorist: 'National Council of Teachers of Mathematics',
    year: 2000,
    description: '수학 학습에서 발달시켜야 할 과정 기준입니다.',
    keyPrinciples: [
      '문제 해결이 수학의 핵심',
      '추론과 증명이 기본',
      '소통이 이해를 심화',
      '연결이 수학을 통합',
      '표현이 이해를 보여줌'
    ],
    components: [
      {
        name: '문제 해결',
        nameEn: 'Problem Solving',
        description: '수학적 문제 해결 전략 개발',
        subComponents: ['문제 이해', '전략 계획', '계획 실행', '해결 검토']
      },
      {
        name: '추론과 증명',
        nameEn: 'Reasoning and Proof',
        description: '논리적 추론과 수학적 논증',
        subComponents: ['추측', '논증 개발', '증명', '패턴 인식']
      },
      {
        name: '의사소통',
        nameEn: 'Communication',
        description: '수학적 아이디어의 소통',
        subComponents: ['수학적 표현', '설명', '정당화', '토론']
      },
      {
        name: '연결',
        nameEn: 'Connections',
        description: '수학적 개념과 실세계의 연결',
        subComponents: ['개념 간 연결', '교과 간 연결', '실생활 연결']
      },
      {
        name: '표현',
        nameEn: 'Representation',
        description: '수학적 아이디어의 다양한 표현',
        subComponents: ['시각적 표현', '기호적 표현', '언어적 표현', '표현 간 전환']
      }
    ],
    educationalImplications: [
      '문제 해결 중심 수업',
      '수학적 담화 촉진',
      '다양한 표현 사용',
      '실생활 맥락 제공'
    ],
    source: 'Principles and Standards for School Mathematics (2000)',
    category: 'instructional_model'
  },

  // NGSS Science and Engineering Practices
  {
    id: 'ngss-sep',
    name: 'NGSS 과학 및 공학 실천',
    nameEn: 'NGSS Science and Engineering Practices',
    theorist: 'NGSS Lead States',
    year: 2013,
    description: '과학자와 공학자가 세계를 탐구하고 시스템을 설계하는 방법을 반영한 8가지 실천입니다.',
    keyPrinciples: [
      '과학은 탐구와 실천의 과정이다',
      '공학은 설계와 최적화의 과정이다',
      '과학과 공학은 상호 연결되어 있다',
      '모든 학생은 과학적 실천에 참여해야 한다'
    ],
    components: [
      {
        name: '질문하기와 문제 정의하기',
        nameEn: 'Asking Questions and Defining Problems',
        description: '과학적 질문과 공학적 문제 형성',
        subComponents: ['관찰 기반 질문', '가설 형성', '제약 조건 정의']
      },
      {
        name: '모델 개발과 사용',
        nameEn: 'Developing and Using Models',
        description: '현상을 표현하고 예측하는 모델 활용',
        subComponents: ['다이어그램', '시뮬레이션', '수학적 모델', '물리적 모델']
      },
      {
        name: '조사 계획과 수행',
        nameEn: 'Planning and Carrying Out Investigations',
        description: '경험적 증거 수집을 위한 조사',
        subComponents: ['변인 통제', '데이터 수집', '실험 설계', '관찰']
      },
      {
        name: '데이터 분석과 해석',
        nameEn: 'Analyzing and Interpreting Data',
        description: '데이터에서 패턴과 의미 도출',
        subComponents: ['표와 그래프', '통계 분석', '패턴 인식', '오차 분석']
      },
      {
        name: '수학과 계산적 사고 사용',
        nameEn: 'Using Mathematics and Computational Thinking',
        description: '수학적 표현과 컴퓨터 활용',
        subComponents: ['수학적 모델링', '알고리즘', '시뮬레이션', '정량적 분석']
      },
      {
        name: '설명 구성과 해결책 설계',
        nameEn: 'Constructing Explanations and Designing Solutions',
        description: '현상 설명과 문제 해결책 개발',
        subComponents: ['과학적 설명', '공학적 설계', '최적화', '반복 설계']
      },
      {
        name: '증거 기반 논증 참여',
        nameEn: 'Engaging in Argument from Evidence',
        description: '증거를 사용한 주장과 반론',
        subComponents: ['주장-증거-추론', '반론', '동료 평가', '토론']
      },
      {
        name: '정보 획득, 평가, 소통',
        nameEn: 'Obtaining, Evaluating, and Communicating Information',
        description: '과학적 정보의 이해와 전달',
        subComponents: ['과학 글 읽기', '출처 평가', '글쓰기', '발표']
      }
    ],
    educationalImplications: [
      '탐구 기반 과학 수업',
      '공학적 설계 통합',
      '실천 중심의 평가',
      '교차 개념과의 통합'
    ],
    source: 'Next Generation Science Standards (2013)',
    category: 'instructional_model'
  },

  // NGSS Crosscutting Concepts (7가지)
  {
    id: 'ngss-ccc',
    name: 'NGSS 교차 개념',
    nameEn: 'NGSS Crosscutting Concepts',
    theorist: 'NGSS Lead States',
    year: 2013,
    description: '과학 분야를 연결하고 세계를 이해하는 렌즈 역할을 하는 7가지 개념입니다.',
    keyPrinciples: [
      '교차 개념은 학문 간 공통 주제이다',
      '과학적 사고의 도구 역할을 한다',
      '학년에 따라 점진적으로 심화된다',
      '모든 과학 분야에 적용된다'
    ],
    components: [
      {
        name: '패턴',
        nameEn: 'Patterns',
        description: '자연과 인간이 만든 세계에서 관찰되는 패턴',
        subComponents: ['관찰된 패턴', '반복', '예측', '분류']
      },
      {
        name: '원인과 결과',
        nameEn: 'Cause and Effect',
        description: '사건과 현상의 인과 관계',
        subComponents: ['메커니즘', '상관관계 vs 인과관계', '테스트 가능한 예측']
      },
      {
        name: '규모, 비율, 양',
        nameEn: 'Scale, Proportion, and Quantity',
        description: '규모와 측정의 중요성',
        subComponents: ['상대적 규모', '비례 관계', '양적 표현']
      },
      {
        name: '시스템과 시스템 모델',
        nameEn: 'Systems and System Models',
        description: '복잡한 현상을 시스템으로 이해',
        subComponents: ['경계 정의', '입력과 출력', '피드백', '상호작용']
      },
      {
        name: '에너지와 물질',
        nameEn: 'Energy and Matter',
        description: '에너지와 물질의 흐름, 순환, 보존',
        subComponents: ['에너지 전환', '물질 순환', '보존 법칙']
      },
      {
        name: '구조와 기능',
        nameEn: 'Structure and Function',
        description: '구조가 기능을 결정하는 방식',
        subComponents: ['형태-기능 관계', '설계', '적응']
      },
      {
        name: '안정성과 변화',
        nameEn: 'Stability and Change',
        description: '시스템의 안정 조건과 변화 요인',
        subComponents: ['평형', '변화율', '주기적 변화', '피드백 메커니즘']
      }
    ],
    educationalImplications: [
      '교과 간 연결 강조',
      '개념적 렌즈로 활용',
      '나선형 교육과정',
      '빅 아이디어 교수'
    ],
    source: 'Next Generation Science Standards (2013)',
    category: 'instructional_model'
  },

  // Mathematical Practices (CCSS)
  {
    id: 'ccss-mathematical-practices',
    name: 'CCSS 수학적 실천',
    nameEn: 'Common Core Mathematical Practices',
    theorist: 'Common Core State Standards Initiative',
    year: 2010,
    description: '수학적으로 숙련된 학생들이 발달시켜야 할 8가지 실천입니다.',
    keyPrinciples: [
      '수학적 실천은 내용과 함께 발달한다',
      '모든 학년에 걸쳐 적용된다',
      '수학적 사고와 습관을 기른다',
      '수학적 전문성의 핵심이다'
    ],
    components: [
      {
        name: 'MP1: 문제를 이해하고 끈기 있게 해결하기',
        nameEn: 'Make sense of problems and persevere in solving them',
        description: '문제를 분석하고 다양한 접근법을 시도',
        subComponents: ['문제 이해', '계획 수립', '전략 변경', '검증']
      },
      {
        name: 'MP2: 추상적, 양적으로 추론하기',
        nameEn: 'Reason abstractly and quantitatively',
        description: '상황을 수학화하고 다시 맥락화',
        subComponents: ['탈맥락화', '맥락화', '양적 관계 이해']
      },
      {
        name: 'MP3: 실행 가능한 논증 구성과 타인의 추론 비평',
        nameEn: 'Construct viable arguments and critique reasoning of others',
        description: '수학적 논증과 비판적 평가',
        subComponents: ['추측', '논증 구성', '증명', '비평']
      },
      {
        name: 'MP4: 수학으로 모델링',
        nameEn: 'Model with mathematics',
        description: '실제 상황을 수학으로 표현',
        subComponents: ['가정 설정', '수학적 표현', '해석', '검증']
      },
      {
        name: 'MP5: 적절한 도구를 전략적으로 사용',
        nameEn: 'Use appropriate tools strategically',
        description: '다양한 도구의 효과적 활용',
        subComponents: ['도구 선택', '기술 활용', '도구의 한계 인식']
      },
      {
        name: 'MP6: 정밀성 추구',
        nameEn: 'Attend to precision',
        description: '정확한 소통과 계산',
        subComponents: ['정확한 정의', '조심스러운 계산', '명확한 소통']
      },
      {
        name: 'MP7: 구조 찾고 활용하기',
        nameEn: 'Look for and make use of structure',
        description: '수학적 구조 인식과 활용',
        subComponents: ['패턴 인식', '구조 분해', '일반화']
      },
      {
        name: 'MP8: 반복된 추론에서 규칙성 표현',
        nameEn: 'Look for and express regularity in repeated reasoning',
        description: '반복에서 일반적 방법 도출',
        subComponents: ['규칙성 관찰', '일반화', '지름길 발견', '검증']
      }
    ],
    educationalImplications: [
      '문제 해결 중심 수업',
      '수학적 담화 촉진',
      '다양한 전략 권장',
      '연결 강조'
    ],
    source: 'Common Core State Standards for Mathematics (2010)',
    category: 'instructional_model'
  },

  // Historical Thinking Concepts
  {
    id: 'historical-thinking',
    name: '역사적 사고 개념',
    nameEn: 'Historical Thinking Concepts',
    theorist: 'Peter Seixas (The Big Six)',
    year: 2013,
    description: '역사를 역사적으로 생각하게 하는 6가지 핵심 개념입니다.',
    keyPrinciples: [
      '역사는 해석의 학문이다',
      '증거에 기반한 탐구가 필요하다',
      '관점의 다양성을 인정한다',
      '과거와 현재를 연결한다'
    ],
    components: [
      {
        name: '역사적 중요성',
        nameEn: 'Historical Significance',
        description: '무엇이 역사적으로 중요한가?',
        subComponents: ['중요성 기준', '맥락 의존성', '변화하는 중요성']
      },
      {
        name: '1차 사료 증거',
        nameEn: 'Primary Source Evidence',
        description: '역사적 증거를 어떻게 사용하는가?',
        subComponents: ['출처 분석', '맥락화', '확증', '편향 인식']
      },
      {
        name: '연속성과 변화',
        nameEn: 'Continuity and Change',
        description: '무엇이 변하고 무엇이 그대로인가?',
        subComponents: ['변화의 속도', '변화의 방향', '전환점', '진보/퇴보']
      },
      {
        name: '원인과 결과',
        nameEn: 'Cause and Consequence',
        description: '왜 사건이 일어났고 어떤 결과를 가져왔는가?',
        subComponents: ['다중 원인', '의도/비의도적 결과', '단기/장기 결과']
      },
      {
        name: '역사적 관점',
        nameEn: 'Historical Perspectives',
        description: '당시 사람들은 어떻게 생각했는가?',
        subComponents: ['맥락화', '공감', '현재주의 피하기', '다양한 관점']
      },
      {
        name: '윤리적 차원',
        nameEn: 'Ethical Dimensions',
        description: '과거를 어떻게 윤리적으로 판단하는가?',
        subComponents: ['역사적 기준', '현재의 책임', '기억과 추모']
      }
    ],
    educationalImplications: [
      '탐구 기반 역사 수업',
      '1차 사료 활용',
      '역사적 사고 평가',
      '다중 관점 탐구'
    ],
    source: 'The Big Six Historical Thinking Concepts (2013)',
    category: 'instructional_model'
  }
];

// ============================================
// 9. 교육적 접근법 (Pedagogical Approaches)
// ============================================

export const PEDAGOGICAL_APPROACHES: EducationalTheory[] = [
  // Reggio Emilia
  {
    id: 'reggio-emilia',
    name: '레지오 에밀리아 접근법',
    nameEn: 'Reggio Emilia Approach',
    theorist: 'Loris Malaguzzi',
    year: 1963,
    description: '아동 중심의 구성주의적 유아교육 접근법으로, 아동의 100가지 언어를 강조합니다.',
    keyPrinciples: [
      '아동은 유능한 존재이다',
      '100가지 언어로 표현한다',
      '환경은 제3의 교사이다',
      '문서화가 학습을 가시화한다',
      '관계가 학습의 중심이다'
    ],
    components: [
      {
        name: '100가지 언어',
        nameEn: 'The Hundred Languages',
        description: '아동은 다양한 방식으로 이해하고 표현한다',
        subComponents: ['미술', '음악', '드라마', '움직임', '건축', '그림자 놀이', '콜라주', '조각']
      },
      {
        name: '환경',
        nameEn: 'Environment as Third Teacher',
        description: '물리적 환경이 학습을 지원하고 촉진한다',
        subComponents: ['자연광', '개방적 공간', '아틀리에', '문서화 전시', '자연 재료']
      },
      {
        name: '문서화',
        nameEn: 'Documentation',
        description: '학습 과정을 기록하고 공유한다',
        subComponents: ['사진', '비디오', '녹음', '아동 작품', '교사 노트']
      },
      {
        name: '프로젝트',
        nameEn: 'Projects/Progettazione',
        description: '아동 주도의 깊은 탐구',
        subComponents: ['아동 관심 기반', '장기 탐구', '협력적 학습', '창발적 교육과정']
      }
    ],
    educationalImplications: [
      '아동의 관심에서 시작',
      '다양한 표현 기회 제공',
      '환경 설계 중시',
      '학습 과정 문서화',
      '협력적 탐구'
    ],
    source: 'The Hundred Languages of Children',
    category: 'pedagogical_approach'
  },

  // Project-Based Learning
  {
    id: 'pbl-framework',
    name: '프로젝트 기반 학습',
    nameEn: 'Project-Based Learning (PBL)',
    theorist: 'Buck Institute for Education',
    year: 2000,
    description: '실제적인 프로젝트를 통해 깊은 학습을 촉진하는 교수법입니다.',
    keyPrinciples: [
      '진정성 있는 문제/질문으로 시작',
      '지속적인 탐구 과정',
      '학생 주도적 학습',
      '성찰과 수정',
      '공개 발표'
    ],
    components: [
      {
        name: '도전적 문제 또는 질문',
        nameEn: 'Challenging Problem or Question',
        description: '학습을 이끄는 실제적인 문제나 질문',
        subComponents: ['진정성', '도전성', '개방성', '학습 목표 연결']
      },
      {
        name: '지속적 탐구',
        nameEn: 'Sustained Inquiry',
        description: '깊고 지속적인 탐구 과정',
        subComponents: ['질문 생성', '자료 수집', '분석', '해결책 개발']
      },
      {
        name: '진정성',
        nameEn: 'Authenticity',
        description: '실제 세계와의 연결',
        subComponents: ['실제 맥락', '실제 청중', '실제 도구', '실제 영향']
      },
      {
        name: '학생 목소리와 선택',
        nameEn: 'Student Voice and Choice',
        description: '학생의 자기주도성과 선택권',
        subComponents: ['주제 선택', '방법 선택', '역할 선택', '발표 형식 선택']
      },
      {
        name: '성찰',
        nameEn: 'Reflection',
        description: '학습 과정과 결과에 대한 성찰',
        subComponents: ['과정 성찰', '제품 성찰', '협력 성찰', '자기 평가']
      },
      {
        name: '비평과 수정',
        nameEn: 'Critique and Revision',
        description: '피드백을 통한 개선',
        subComponents: ['형성 평가', '동료 피드백', '교사 피드백', '반복 수정']
      },
      {
        name: '공개 발표',
        nameEn: 'Public Product',
        description: '진정한 청중에게 결과물 공유',
        subComponents: ['발표', '전시', '출판', '실제 적용']
      }
    ],
    educationalImplications: [
      '실제적 문제 중심 학습',
      '학생 주도성 강조',
      '협력 학습 촉진',
      '통합 교과 접근',
      '진정한 평가'
    ],
    source: 'PBLWorks (Buck Institute for Education)',
    category: 'pedagogical_approach'
  }
];

// ============================================
// IB Diploma Programme TOK
// ============================================

export const IB_TOK_FRAMEWORK = {
  id: 'ib-tok',
  name: '지식론 (TOK)',
  nameEn: 'Theory of Knowledge',
  description: 'IB 디플로마 프로그램의 핵심 요소로, 지식의 본질에 대해 탐구합니다.',
  coreTheme: {
    name: '앎의 주체와 지식',
    nameEn: 'Knowledge and the Knower',
    description: '지식을 형성하는 앎의 주체의 역할과 책임'
  },
  optionalThemes: [
    {
      name: '지식과 기술',
      nameEn: 'Knowledge and Technology',
      description: '기술이 지식의 생산과 공유에 미치는 영향'
    },
    {
      name: '지식과 언어',
      nameEn: 'Knowledge and Language',
      description: '언어가 지식 형성에 미치는 역할'
    },
    {
      name: '지식과 정치',
      nameEn: 'Knowledge and Politics',
      description: '권력과 정치가 지식에 미치는 영향'
    },
    {
      name: '지식과 종교',
      nameEn: 'Knowledge and Religion',
      description: '종교적 지식의 본질과 역할'
    },
    {
      name: '지식과 원주민 사회',
      nameEn: 'Knowledge and Indigenous Societies',
      description: '원주민 지식 체계의 특성'
    }
  ],
  areasOfKnowledge: [
    {
      name: '역사',
      nameEn: 'History',
      description: '과거에 대한 지식은 어떻게 구성되는가?'
    },
    {
      name: '인문과학',
      nameEn: 'Human Sciences',
      description: '인간 행동에 대한 과학적 지식의 특성'
    },
    {
      name: '자연과학',
      nameEn: 'Natural Sciences',
      description: '자연 세계에 대한 과학적 지식의 본질'
    },
    {
      name: '수학',
      nameEn: 'Mathematics',
      description: '수학적 지식의 확실성과 본질'
    },
    {
      name: '예술',
      nameEn: 'The Arts',
      description: '예술을 통해 무엇을 알 수 있는가?'
    }
  ],
  waysOfKnowing: [
    { name: '감각 지각', nameEn: 'Sense Perception', description: '감각을 통한 앎' },
    { name: '이성', nameEn: 'Reason', description: '논리적 추론을 통한 앎' },
    { name: '감정', nameEn: 'Emotion', description: '감정을 통한 앎' },
    { name: '언어', nameEn: 'Language', description: '언어를 통한 앎' },
    { name: '직관', nameEn: 'Intuition', description: '직관을 통한 앎' },
    { name: '상상', nameEn: 'Imagination', description: '상상을 통한 앎' },
    { name: '신앙', nameEn: 'Faith', description: '신앙을 통한 앎' },
    { name: '기억', nameEn: 'Memory', description: '기억을 통한 앎' }
  ]
};

// ============================================
// 10. UDL 보편적 학습 설계
// ============================================

export const UDL_FRAMEWORK = {
  id: 'udl',
  name: '보편적 학습 설계 (UDL)',
  nameEn: 'Universal Design for Learning',
  organization: 'CAST',
  year: 2018,
  description: '모든 학습자의 다양성을 존중하며 유연한 학습 경험을 설계하는 프레임워크입니다.',
  principles: [
    {
      name: '참여의 다양한 수단 제공',
      nameEn: 'Multiple Means of Engagement',
      description: '학습의 "왜"에 해당하며, 동기와 정서를 다룹니다.',
      guidelines: [
        {
          name: '흥미 유발 옵션 제공',
          nameEn: 'Provide options for recruiting interest',
          checkpoints: [
            '개인의 선택과 자율성 최적화',
            '관련성, 가치, 진정성 최적화',
            '위협과 방해 요소 최소화'
          ]
        },
        {
          name: '노력과 지속성 유지 옵션 제공',
          nameEn: 'Provide options for sustaining effort and persistence',
          checkpoints: [
            '목표와 목적의 두드러짐 강화',
            '도전의 수준 다양화',
            '협력과 공동체 촉진',
            '숙달 지향 피드백 증가'
          ]
        },
        {
          name: '자기조절 옵션 제공',
          nameEn: 'Provide options for self-regulation',
          checkpoints: [
            '동기 촉진 기대와 신념',
            '대처 기술과 전략 촉진',
            '자기평가와 성찰 개발'
          ]
        }
      ]
    },
    {
      name: '표상의 다양한 수단 제공',
      nameEn: 'Multiple Means of Representation',
      description: '학습의 "무엇"에 해당하며, 정보 인식과 이해를 다룹니다.',
      guidelines: [
        {
          name: '인식 옵션 제공',
          nameEn: 'Provide options for perception',
          checkpoints: [
            '정보 표시 방식 맞춤화',
            '청각 정보 대안 제공',
            '시각 정보 대안 제공'
          ]
        },
        {
          name: '언어와 기호 옵션 제공',
          nameEn: 'Provide options for language and symbols',
          checkpoints: [
            '어휘와 기호 명료화',
            '구문과 구조 명료화',
            '텍스트, 수학적 표기, 기호 해독 지원',
            '언어 간 이해 촉진',
            '다양한 미디어를 통한 설명'
          ]
        },
        {
          name: '이해 옵션 제공',
          nameEn: 'Provide options for comprehension',
          checkpoints: [
            '배경 지식 활성화 또는 제공',
            '패턴, 핵심 특징, 빅 아이디어, 관계 강조',
            '정보 처리와 시각화 안내',
            '전이와 일반화 극대화'
          ]
        }
      ]
    },
    {
      name: '행동과 표현의 다양한 수단 제공',
      nameEn: 'Multiple Means of Action and Expression',
      description: '학습의 "어떻게"에 해당하며, 학습의 전략과 표현을 다룹니다.',
      guidelines: [
        {
          name: '신체적 행동 옵션 제공',
          nameEn: 'Provide options for physical action',
          checkpoints: [
            '반응 방법 다양화',
            '도구와 보조 기술 접근 최적화'
          ]
        },
        {
          name: '표현과 의사소통 옵션 제공',
          nameEn: 'Provide options for expression and communication',
          checkpoints: [
            '의사소통 다양한 매체 사용',
            '구성과 창작을 위한 다양한 도구 사용',
            '연습과 수행을 위한 지원 수준 차별화'
          ]
        },
        {
          name: '실행 기능 옵션 제공',
          nameEn: 'Provide options for executive functions',
          checkpoints: [
            '적절한 목표 설정 안내',
            '계획과 전략 개발 지원',
            '정보와 자원 관리 촉진',
            '진행 상황 모니터링 역량 강화'
          ]
        }
      ]
    }
  ],
  source: 'CAST Universal Design for Learning Guidelines (2018)'
};

// ============================================
// 11. 차별화 수업 (Differentiated Instruction)
// ============================================

export const DIFFERENTIATED_INSTRUCTION = {
  id: 'di-tomlinson',
  name: '차별화 수업',
  nameEn: 'Differentiated Instruction',
  theorist: 'Carol Ann Tomlinson',
  year: 1999,
  description: '학습자의 준비도, 흥미, 학습 프로파일에 따라 수업을 조정하는 교수 접근법입니다.',
  differentiationElements: [
    {
      name: '내용',
      nameEn: 'Content',
      description: '학생이 배우는 것',
      strategies: [
        '읽기 자료의 다양한 수준 제공',
        '개념적 복잡성 조절',
        '압축과 확장 활동',
        '학습 계약',
        '다양한 자료와 매체'
      ]
    },
    {
      name: '과정',
      nameEn: 'Process',
      description: '학생이 내용을 이해하는 방법',
      strategies: [
        '유연한 그룹 편성',
        '다양한 활동 선택',
        '사고 수준 차별화',
        '스캐폴딩 수준 조절',
        '학습 센터/스테이션'
      ]
    },
    {
      name: '산출물',
      nameEn: 'Product',
      description: '학생이 학습을 보여주는 방법',
      strategies: [
        '다양한 표현 방식 허용',
        '다양한 복잡성 수준',
        '학생 선택권',
        '실제적 청중',
        '다양한 평가 방법'
      ]
    },
    {
      name: '학습 환경',
      nameEn: 'Learning Environment',
      description: '학습이 일어나는 분위기와 공간',
      strategies: [
        '유연한 좌석 배치',
        '조용한/활동적 공간',
        '개인/협력 선택',
        '자료 접근성',
        '안전하고 지지적인 분위기'
      ]
    }
  ],
  studentCharacteristics: [
    {
      name: '준비도',
      nameEn: 'Readiness',
      description: '학습을 위한 현재 지식, 이해, 기술 수준',
      assessmentStrategies: ['사전 평가', '형성 평가', '관찰', '학생 자기평가']
    },
    {
      name: '흥미',
      nameEn: 'Interest',
      description: '학생이 끌리는 주제, 아이디어, 기술',
      assessmentStrategies: ['흥미 조사', '학습 프로파일', '대화', '관찰']
    },
    {
      name: '학습 프로파일',
      nameEn: 'Learning Profile',
      description: '선호하는 학습 방식',
      assessmentStrategies: ['학습 스타일 조사', '다중지능 평가', '관찰', '시행착오']
    }
  ],
  keyPrinciples: [
    '모든 학생은 존엄하게 대우받는다',
    '모든 학생에게 도전과 지원 제공',
    '다양한 경로로 핵심 학습에 접근',
    '교사는 촉진자로서 역할',
    '유연한 그룹 편성',
    '지속적인 평가와 조정'
  ],
  source: 'The Differentiated Classroom (1999)'
};

// ============================================
// 12. CASEL SEL 프레임워크
// ============================================

export const CASEL_SEL_FRAMEWORK = {
  id: 'casel-sel',
  name: 'CASEL 사회정서학습 프레임워크',
  nameEn: 'CASEL Social and Emotional Learning Framework',
  organization: 'Collaborative for Academic, Social, and Emotional Learning',
  year: 2020,
  description: '학생들이 자기 인식, 사회적 인식, 책임 있는 의사결정을 발달시키도록 돕는 프레임워크입니다.',
  coreCompetencies: [
    {
      name: '자기 인식',
      nameEn: 'Self-Awareness',
      description: '자신의 감정, 생각, 가치를 인식하고 이해하는 능력',
      subSkills: [
        '감정 인식',
        '정확한 자기 인식',
        '자기 효능감',
        '성장 마인드셋',
        '목적 의식',
        '개인적, 문화적 정체성 인식'
      ]
    },
    {
      name: '자기 관리',
      nameEn: 'Self-Management',
      description: '다양한 상황에서 감정, 생각, 행동을 조절하는 능력',
      subSkills: [
        '충동 조절',
        '스트레스 관리',
        '자기 동기화',
        '자기 훈련',
        '목표 설정',
        '조직 기술'
      ]
    },
    {
      name: '사회적 인식',
      nameEn: 'Social Awareness',
      description: '다양한 배경의 타인을 이해하고 공감하는 능력',
      subSkills: [
        '관점 취하기',
        '공감',
        '다양성 감상',
        '타인 존중',
        '사회적 규범 이해',
        '가족, 학교, 지역사회 자원 인식'
      ]
    },
    {
      name: '관계 기술',
      nameEn: 'Relationship Skills',
      description: '건강하고 지지적인 관계를 형성하고 유지하는 능력',
      subSkills: [
        '효과적 의사소통',
        '사회적 참여',
        '관계 구축',
        '팀워크',
        '건설적 갈등 해결',
        '도움 요청과 제공'
      ]
    },
    {
      name: '책임 있는 의사결정',
      nameEn: 'Responsible Decision-Making',
      description: '윤리적이고 건설적인 선택을 하는 능력',
      subSkills: [
        '호기심과 열린 마음',
        '문제 상황 식별',
        '해결책 분석',
        '결과 예측',
        '윤리적 책임 인식',
        '비판적 사고'
      ]
    }
  ],
  settingsForSEL: [
    {
      name: '교실',
      nameEn: 'Classrooms',
      practices: ['SEL 교육과정', '학급 분위기', '교사-학생 관계', '교수 실천']
    },
    {
      name: '학교',
      nameEn: 'Schools',
      practices: ['학교 문화', '성인 SEL', '지원 서비스 통합', '규율 정책']
    },
    {
      name: '가정',
      nameEn: 'Families',
      practices: ['가족 파트너십', '가정에서의 SEL', '학교-가정 연계']
    },
    {
      name: '지역사회',
      nameEn: 'Communities',
      practices: ['지역사회 파트너십', '방과후 프로그램', '멘토링']
    }
  ],
  source: 'CASEL.org (2020)'
};

// ============================================
// 13. SAMR 모델
// ============================================

export const SAMR_MODEL = {
  id: 'samr',
  name: 'SAMR 모델',
  nameEn: 'SAMR Model',
  theorist: 'Ruben Puentedura',
  year: 2006,
  description: '기술 통합의 수준을 설명하는 프레임워크입니다.',
  levels: [
    {
      name: '대체 (Substitution)',
      nameEn: 'Substitution',
      description: '기술이 기능적 변화 없이 기존 도구를 대체',
      examples: [
        '종이 워크시트 대신 디지털 워크시트',
        '칠판 대신 프레젠테이션',
        '종이 책 대신 e-book'
      ],
      level: 'Enhancement'
    },
    {
      name: '증강 (Augmentation)',
      nameEn: 'Augmentation',
      description: '기술이 기능적 개선을 가져다주는 도구 대체',
      examples: [
        '맞춤법 검사, 자동 저장 기능',
        '하이퍼링크가 있는 디지털 문서',
        '검색 가능한 e-book'
      ],
      level: 'Enhancement'
    },
    {
      name: '변형 (Modification)',
      nameEn: 'Modification',
      description: '기술이 과제의 중요한 재설계를 가능하게 함',
      examples: [
        '협력적 문서 작성',
        '멀티미디어 프레젠테이션 제작',
        '온라인 토론과 피드백'
      ],
      level: 'Transformation'
    },
    {
      name: '재정의 (Redefinition)',
      nameEn: 'Redefinition',
      description: '기술이 이전에 불가능했던 새로운 과제 창출',
      examples: [
        '글로벌 협력 프로젝트',
        '학생 제작 팟캐스트/영상 공유',
        '가상 현실 체험 학습',
        '시민 과학 프로젝트 참여'
      ],
      level: 'Transformation'
    }
  ],
  source: 'Hippasus.com'
};

// ============================================
// 14. TPACK 프레임워크
// ============================================

export const TPACK_FRAMEWORK = {
  id: 'tpack',
  name: 'TPACK 프레임워크',
  nameEn: 'Technological Pedagogical Content Knowledge',
  theorist: 'Punya Mishra & Matthew Koehler',
  year: 2006,
  description: '효과적인 기술 통합 교수에 필요한 교사 지식의 프레임워크입니다.',
  knowledgeDomains: [
    {
      name: '내용 지식 (CK)',
      nameEn: 'Content Knowledge',
      description: '가르칠 교과 내용에 대한 지식',
      examples: ['수학 개념', '역사적 사실', '과학 법칙', '문학 작품']
    },
    {
      name: '교수 지식 (PK)',
      nameEn: 'Pedagogical Knowledge',
      description: '교수학습 과정에 대한 일반적 지식',
      examples: ['학습 이론', '수업 전략', '평가 방법', '학급 경영']
    },
    {
      name: '기술 지식 (TK)',
      nameEn: 'Technological Knowledge',
      description: '다양한 기술을 사용하는 방법에 대한 지식',
      examples: ['소프트웨어 사용', '디지털 도구', '온라인 플랫폼', '멀티미디어']
    }
  ],
  intersections: [
    {
      name: '교수적 내용 지식 (PCK)',
      nameEn: 'Pedagogical Content Knowledge',
      description: '특정 내용을 가르치는 방법에 대한 지식',
      examples: ['분수 개념 가르치기', '역사적 사건 분석 가르치기']
    },
    {
      name: '기술적 내용 지식 (TCK)',
      nameEn: 'Technological Content Knowledge',
      description: '기술과 내용이 상호 영향을 미치는 방식에 대한 지식',
      examples: ['시뮬레이션으로 과학 개념 표현', 'GIS로 지리 데이터 분석']
    },
    {
      name: '기술적 교수 지식 (TPK)',
      nameEn: 'Technological Pedagogical Knowledge',
      description: '기술이 교수학습에 어떻게 사용될 수 있는지에 대한 지식',
      examples: ['온라인 협력 도구', '형성 평가 앱', '학습 관리 시스템']
    },
    {
      name: 'TPACK (통합)',
      nameEn: 'Technological Pedagogical Content Knowledge',
      description: '세 영역의 통합적 지식',
      examples: ['특정 내용을 기술로 효과적으로 가르치기', '기술 강화 탐구 학습']
    }
  ],
  source: 'tpack.org'
};

// ============================================
// 15. 질문 형성 기법 (QFT)
// ============================================

export const QUESTION_FORMULATION_TECHNIQUE = {
  id: 'qft',
  name: '질문 형성 기법 (QFT)',
  nameEn: 'Question Formulation Technique',
  organization: 'Right Question Institute',
  year: 2011,
  description: '학생들이 스스로 질문을 생성하고, 개선하고, 우선순위를 정하도록 돕는 구조화된 프로세스입니다.',
  steps: [
    {
      step: 1,
      name: '질문 초점 설계',
      nameEn: 'Design a Question Focus (QFocus)',
      description: '질문 생성을 자극하는 자극 또는 초점 제공',
      guidelines: [
        '질문이 아니어야 함',
        '학습 목표와 연결',
        '다양한 질문을 유발',
        '간결하고 자극적'
      ]
    },
    {
      step: 2,
      name: '질문 생성',
      nameEn: 'Produce Questions',
      description: '가능한 많은 질문을 생성',
      rules: [
        '가능한 많은 질문을 합니다',
        '토론하지 말고, 판단하지 말고, 답하지 않습니다',
        '그대로 진술을 질문으로 적습니다',
        '진술은 질문으로 바꿉니다'
      ]
    },
    {
      step: 3,
      name: '질문 개선',
      nameEn: 'Improve Questions',
      description: '열린 질문과 닫힌 질문 분류 및 변환',
      activities: [
        '열린 질문(O)과 닫힌 질문(C) 분류',
        '각 유형의 장단점 논의',
        '질문 유형 간 변환 연습'
      ]
    },
    {
      step: 4,
      name: '질문 우선순위 정하기',
      nameEn: 'Prioritize Questions',
      description: '가장 중요한 질문 선택',
      criteria: [
        '학습 목표 관련성',
        '탐구 가능성',
        '깊은 사고 촉진',
        '흥미와 동기'
      ]
    },
    {
      step: 5,
      name: '다음 단계 계획',
      nameEn: 'Plan Next Steps',
      description: '우선순위 질문으로 무엇을 할지 결정'
    },
    {
      step: 6,
      name: '성찰',
      nameEn: 'Reflect',
      description: '배운 것과 질문 기술에 대한 성찰'
    }
  ],
  benefits: [
    '학생 주도적 탐구',
    '비판적 사고 발달',
    '민주적 참여 기술',
    '호기심 촉진',
    '메타인지 발달'
  ],
  source: 'Make Just One Change (2011)'
};

// ============================================
// 16. 소크라테스 세미나
// ============================================

export const SOCRATIC_SEMINAR = {
  id: 'socratic-seminar',
  name: '소크라테스 세미나',
  nameEn: 'Socratic Seminar',
  origin: 'Socratic Method',
  description: '텍스트에 기반한 질문과 대화를 통해 깊은 이해를 촉진하는 협력적 토론 방법입니다.',
  elements: [
    {
      name: '텍스트',
      nameEn: 'Text',
      description: '토론의 기반이 되는 공유 자료',
      types: ['인쇄 텍스트', '예술 작품', '음악', '그래프/차트', '영상']
    },
    {
      name: '질문',
      nameEn: 'Questions',
      description: '탐구를 이끄는 열린 질문',
      types: [
        '시작 질문: 텍스트의 핵심 주제 탐색',
        '핵심 질문: 깊은 분석과 논의',
        '마무리 질문: 개인적 의미와 연결'
      ]
    },
    {
      name: '대화',
      nameEn: 'Dialogue',
      description: '아이디어의 협력적 탐구',
      norms: [
        '텍스트 증거 사용',
        '서로의 아이디어 경청',
        '다양한 관점 존중',
        '질문을 통해 탐구',
        '논쟁이 아닌 대화'
      ]
    },
    {
      name: '참여자',
      nameEn: 'Participants',
      description: '모든 참여자가 동등하게 기여',
      roles: ['진행자', '내부 원', '외부 원 (관찰자)', '기록자']
    }
  ],
  formats: [
    {
      name: '피시볼 (Fishbowl)',
      description: '내부 원이 토론하고 외부 원이 관찰'
    },
    {
      name: '동시 세미나',
      description: '여러 소그룹이 동시에 진행'
    },
    {
      name: '온라인 세미나',
      description: '비동기 또는 동기 온라인 토론'
    }
  ],
  teacherRole: [
    '질문 준비',
    '진행자 (facilitator) 역할',
    '직접 답 제공 자제',
    '모든 학생 참여 촉진',
    '대화 규범 유지'
  ],
  source: 'Socratic Method Tradition'
};

// ============================================
// 17. Visible Learning (Hattie)
// ============================================

export const VISIBLE_LEARNING = {
  id: 'visible-learning',
  name: '가시적 학습 (Visible Learning)',
  nameEn: 'Visible Learning',
  theorist: 'John Hattie',
  year: 2009,
  description: '교육 연구의 메타분석을 통해 학업 성취에 가장 효과적인 요인을 밝힌 연구입니다.',
  keyFindings: {
    averageEffectSize: 0.4,
    description: '0.4 이상의 효과 크기가 성장 영역 (Zone of Desired Effects)에 해당'
  },
  highImpactStrategies: [
    {
      name: '집단 성취 기대',
      nameEn: 'Collective Teacher Efficacy',
      effectSize: 1.57,
      description: '교사들이 학생에게 긍정적 영향을 줄 수 있다는 공유된 믿음'
    },
    {
      name: '자기 보고 성적',
      nameEn: 'Self-Reported Grades',
      effectSize: 1.33,
      description: '학생들이 자신의 수행을 예측하는 능력'
    },
    {
      name: '피아제 프로그램',
      nameEn: 'Piagetian Programs',
      effectSize: 1.28,
      description: '인지 발달에 맞춘 프로그램'
    },
    {
      name: '형성 평가',
      nameEn: 'Formative Evaluation',
      effectSize: 0.90,
      description: '학습 중 피드백을 제공하는 평가'
    },
    {
      name: '피드백',
      nameEn: 'Feedback',
      effectSize: 0.73,
      description: '학습에 대한 구체적이고 시의적절한 피드백'
    },
    {
      name: '교사-학생 관계',
      nameEn: 'Teacher-Student Relationships',
      effectSize: 0.72,
      description: '신뢰와 존중에 기반한 관계'
    },
    {
      name: '메타인지 전략',
      nameEn: 'Metacognitive Strategies',
      effectSize: 0.69,
      description: '자신의 학습에 대해 생각하는 전략'
    },
    {
      name: '직접 교수',
      nameEn: 'Direct Instruction',
      effectSize: 0.60,
      description: '명확하고 체계적인 교수'
    },
    {
      name: '협동 학습',
      nameEn: 'Cooperative Learning',
      effectSize: 0.40,
      description: '소그룹 협력 학습'
    }
  ],
  mindframes: [
    '나는 학생들의 학습과 성취에 대한 평가자이자 활성화자이다',
    '나는 노력, 명확성, 도전의 가치를 믿고 전달한다',
    '나는 가능한 한 학생의 눈으로 학습을 보려고 한다',
    '나는 명시적인 성공 기준에 대해 수업의 영향을 알고 있다',
    '나는 대화에서 듣기와 말하기의 균형을 맞춘다',
    '나는 도전을 즐기고 실수에서 배운다'
  ],
  source: 'Visible Learning (2009)'
};

// ============================================
// 18. Thinking Maps (8가지)
// ============================================

export const THINKING_MAPS = {
  id: 'thinking-maps',
  name: '사고 지도 (Thinking Maps)',
  nameEn: 'Thinking Maps',
  theorist: 'David Hyerle',
  year: 1988,
  description: '8가지 기본 사고 과정을 시각적으로 표현하는 도구입니다.',
  maps: [
    {
      name: '원 지도 (Circle Map)',
      nameEn: 'Circle Map',
      thinkingProcess: '정의하기 / 맥락 속에서 정의하기',
      purpose: '아이디어 정의, 브레인스토밍, 배경 지식 활성화',
      structure: '중심에 주제, 바깥 원에 관련 정보',
      questions: ['이것은 무엇인가?', '이것에 대해 무엇을 알고 있는가?']
    },
    {
      name: '버블 지도 (Bubble Map)',
      nameEn: 'Bubble Map',
      thinkingProcess: '묘사하기',
      purpose: '형용사나 형용구로 특성 묘사',
      structure: '중심에 주제, 주변 버블에 묘사어',
      questions: ['이것을 어떻게 묘사할 수 있는가?', '어떤 특성이 있는가?']
    },
    {
      name: '이중 버블 지도 (Double Bubble Map)',
      nameEn: 'Double Bubble Map',
      thinkingProcess: '비교와 대조',
      purpose: '두 가지 대상의 유사점과 차이점 분석',
      structure: '두 주제를 양쪽에, 가운데에 공통점, 바깥쪽에 차이점',
      questions: ['무엇이 비슷한가?', '무엇이 다른가?']
    },
    {
      name: '나무 지도 (Tree Map)',
      nameEn: 'Tree Map',
      thinkingProcess: '분류하기 / 그룹화하기',
      purpose: '아이디어나 정보를 범주로 분류',
      structure: '위에 주제, 아래로 범주와 세부 사항',
      questions: ['어떻게 분류할 수 있는가?', '주요 범주는 무엇인가?']
    },
    {
      name: '중괄호 지도 (Brace Map)',
      nameEn: 'Brace Map',
      thinkingProcess: '부분과 전체 관계 분석',
      purpose: '물리적 구조의 부분 분석',
      structure: '왼쪽에 전체, 오른쪽으로 부분과 하위 부분',
      questions: ['이것의 부분은 무엇인가?', '어떤 구성 요소가 있는가?']
    },
    {
      name: '흐름 지도 (Flow Map)',
      nameEn: 'Flow Map',
      thinkingProcess: '순서화하기 / 연속',
      purpose: '단계, 과정, 사건의 순서 표현',
      structure: '사각형들이 화살표로 연결된 순서도',
      questions: ['무엇이 먼저 일어났는가?', '다음 단계는 무엇인가?']
    },
    {
      name: '다중 흐름 지도 (Multi-Flow Map)',
      nameEn: 'Multi-Flow Map',
      thinkingProcess: '원인과 결과 분석',
      purpose: '사건의 원인과 결과 분석',
      structure: '중앙에 사건, 왼쪽에 원인, 오른쪽에 결과',
      questions: ['왜 이것이 일어났는가?', '어떤 결과가 있는가?']
    },
    {
      name: '브릿지 지도 (Bridge Map)',
      nameEn: 'Bridge Map',
      thinkingProcess: '유추하기',
      purpose: '관계 파악과 유추',
      structure: '관계를 보여주는 쌍들이 다리 구조로 연결',
      questions: ['A와 B의 관계가 C와 D의 관계와 어떻게 같은가?']
    }
  ],
  frameOfReference: {
    name: '참조 틀',
    nameEn: 'Frame of Reference',
    description: '각 지도를 둘러싸는 사각형으로, 영향을 미치는 요인(관점, 맥락, 출처 등)을 표시'
  },
  source: 'Thinking Maps, Inc. (1988)'
};

// ============================================
// 19. 추가 평가 프레임워크
// ============================================

export const ADDITIONAL_ASSESSMENT_FRAMEWORKS = [
  {
    id: 'formative-assessment-wiliam',
    name: '형성 평가 전략',
    nameEn: 'Formative Assessment Strategies',
    theorist: 'Dylan Wiliam',
    year: 2011,
    description: '학습을 위한 평가로, 학습 중에 피드백을 제공하여 학습을 개선합니다.',
    keyStrategies: [
      {
        name: '학습 의도와 성공 기준 명료화',
        nameEn: 'Clarifying Learning Intentions and Success Criteria',
        techniques: ['학습 목표 공유', '루브릭 공동 개발', '모범 사례 분석']
      },
      {
        name: '학습의 증거 이끌어내기',
        nameEn: 'Eliciting Evidence of Learning',
        techniques: ['질문', '퀴즈', '관찰', 'Exit Ticket', '화이트보드 응답']
      },
      {
        name: '학습을 발전시키는 피드백',
        nameEn: 'Providing Feedback that Moves Learning Forward',
        techniques: ['구체적 피드백', '시의적절한 피드백', '실행 가능한 피드백']
      },
      {
        name: '학습 자원으로서 동료 활용',
        nameEn: 'Activating Students as Learning Resources for One Another',
        techniques: ['동료 피드백', '동료 튜터링', '협력 학습']
      },
      {
        name: '자기 학습의 주인',
        nameEn: 'Activating Students as Owners of Their Own Learning',
        techniques: ['자기 평가', '목표 설정', '학습 일지', '포트폴리오']
      }
    ],
    source: 'Embedded Formative Assessment (2011)'
  },
  {
    id: 'standards-based-grading',
    name: '표준 기반 평가',
    nameEn: 'Standards-Based Grading',
    year: 2000,
    description: '학습 표준 달성도에 기반하여 학생 성취를 보고하는 평가 접근법입니다.',
    principles: [
      '학업 성취와 행동 분리',
      '명확한 학습 목표에 기반',
      '가장 최근의 증거 반영',
      '성장과 숙달 강조',
      '구체적인 피드백 제공',
      '평균이 아닌 수준 보고'
    ],
    levels: [
      { level: 4, description: '기대 이상의 숙달' },
      { level: 3, description: '기준 충족' },
      { level: 2, description: '기준에 접근 중' },
      { level: 1, description: '시작 단계' }
    ],
    source: 'Educational Assessment Literature'
  },
  {
    id: 'authentic-assessment',
    name: '수행 기반 평가',
    nameEn: 'Performance-Based / Authentic Assessment',
    year: 1990,
    description: '실제 맥락에서 복잡한 과제를 수행하도록 요구하는 평가입니다.',
    characteristics: [
      '실제적 맥락',
      '복잡한 사고 요구',
      '학생 선택권',
      '명확한 기준과 루브릭',
      '공개 발표',
      '자기 평가 포함'
    ],
    types: [
      { name: '포트폴리오', description: '시간에 걸친 작업 모음' },
      { name: '프로젝트', description: '확장된 탐구 결과물' },
      { name: '발표', description: '구두 또는 시각적 프레젠테이션' },
      { name: '전시', description: '작품 전시회' },
      { name: '시연', description: '기술이나 절차 시연' }
    ],
    source: 'Assessment Traditions'
  }
];

// ============================================
// 20. 추가 교육적 접근법
// ============================================

export const ADDITIONAL_PEDAGOGICAL_APPROACHES = [
  {
    id: 'montessori',
    name: '몬테소리 교육',
    nameEn: 'Montessori Education',
    theorist: 'Maria Montessori',
    year: 1907,
    description: '아동 주도적이고 자기 조절적인 학습 환경을 제공하는 교육 접근법입니다.',
    keyPrinciples: [
      '아동의 자연스러운 발달 존중',
      '준비된 환경',
      '자기 조절 학습',
      '민감기 (Sensitive Periods)',
      '관찰 기반 교수',
      '혼합 연령 학급'
    ],
    developmentalPlanes: [
      { age: '0-6', name: '흡수하는 마음', focus: '감각 경험, 언어, 독립성' },
      { age: '6-12', name: '추론하는 마음', focus: '추상적 사고, 상상력, 도덕 발달' },
      { age: '12-18', name: '사회적 마음', focus: '정체성, 사회적 정의, 직업 탐색' },
      { age: '18-24', name: '전문적 마음', focus: '고등 교육, 전문성 개발' }
    ],
    preparedEnvironment: [
      '질서와 구조',
      '자유로운 이동',
      '아동 크기 가구와 도구',
      '자기 수정 자료',
      '실제 세계와의 연결'
    ],
    source: 'The Montessori Method (1912)'
  },
  {
    id: 'waldorf',
    name: '발도르프 교육 (슈타이너)',
    nameEn: 'Waldorf/Steiner Education',
    theorist: 'Rudolf Steiner',
    year: 1919,
    description: '예술과 상상력을 강조하며 아동의 전인적 발달을 추구하는 교육 접근법입니다.',
    keyPrinciples: [
      '머리-가슴-손의 균형',
      '발달 단계에 맞는 교육',
      '리듬과 반복',
      '예술 통합',
      '상상력과 창의성',
      '자연과의 연결'
    ],
    developmentalStages: [
      { age: '0-7', focus: '의지(doing)', description: '모방과 놀이를 통한 학습' },
      { age: '7-14', focus: '감정(feeling)', description: '예술과 상상력을 통한 학습' },
      { age: '14-21', focus: '사고(thinking)', description: '비판적 사고와 추상적 학습' }
    ],
    characteristics: [
      '늦은 학문적 교육 시작',
      '테크놀로지 제한',
      '동일 담임교사 유지',
      '유리드미 (움직임 예술)',
      '습식 수채화',
      '수공예 (뜨개질, 목공)'
    ],
    source: 'Waldorf School Movement (1919)'
  },
  {
    id: 'inquiry-based-learning',
    name: '탐구 기반 학습',
    nameEn: 'Inquiry-Based Learning',
    year: 1960,
    description: '질문, 탐구, 발견을 통해 학습하는 학생 중심 접근법입니다.',
    types: [
      {
        name: '확인 탐구',
        nameEn: 'Confirmation Inquiry',
        description: '알려진 결과를 확인하기 위한 탐구',
        teacherRole: '높음'
      },
      {
        name: '구조화된 탐구',
        nameEn: 'Structured Inquiry',
        description: '교사가 질문과 절차를 제공',
        teacherRole: '중간-높음'
      },
      {
        name: '안내된 탐구',
        nameEn: 'Guided Inquiry',
        description: '교사가 질문 제공, 학생이 절차 설계',
        teacherRole: '중간'
      },
      {
        name: '열린 탐구',
        nameEn: 'Open Inquiry',
        description: '학생이 질문과 절차 모두 설계',
        teacherRole: '낮음'
      }
    ],
    inquiryCycle: [
      '의문 제기 (Ask)',
      '조사 (Investigate)',
      '창조 (Create)',
      '토론 (Discuss)',
      '성찰 (Reflect)'
    ],
    source: 'Science Education Traditions'
  },
  {
    id: 'challenge-based-learning',
    name: '도전 기반 학습',
    nameEn: 'Challenge-Based Learning (CBL)',
    theorist: 'Apple Education',
    year: 2008,
    description: '실제 세계의 도전 과제를 해결하며 학습하는 프레임워크입니다.',
    phases: [
      {
        name: '참여 (Engage)',
        components: ['빅 아이디어', '본질적 질문', '도전']
      },
      {
        name: '조사 (Investigate)',
        components: ['안내 질문', '활동', '자료']
      },
      {
        name: '행동 (Act)',
        components: ['해결책', '실행', '평가']
      }
    ],
    characteristics: [
      '실제적 도전',
      '학생 주도',
      '기술 통합',
      '지역사회 참여',
      '실질적 결과'
    ],
    source: 'Apple Education (2008)'
  }
];

// ============================================
// De Bono's Six Thinking Hats (v3.5)
// ============================================

export const SIX_THINKING_HATS = {
  id: 'six-thinking-hats',
  name: '여섯 색깔 사고 모자',
  nameEn: 'Six Thinking Hats',
  developer: 'Edward de Bono',
  year: 1985,
  description: '다양한 관점에서 문제를 분석하는 병렬적 사고 기법입니다.',
  hats: [
    {
      color: 'white',
      name: '하얀 모자',
      nameEn: 'White Hat',
      focus: '정보',
      description: '사실, 데이터, 정보에 집중',
      questions: ['어떤 정보가 있나요?', '어떤 정보가 필요한가요?', '어떻게 정보를 얻을 수 있나요?']
    },
    {
      color: 'red',
      name: '빨간 모자',
      nameEn: 'Red Hat',
      focus: '감정',
      description: '느낌, 직관, 감정에 집중',
      questions: ['어떤 느낌이 드나요?', '직관적으로 어떻게 생각하나요?', '감정적 반응은 어떤가요?']
    },
    {
      color: 'black',
      name: '검은 모자',
      nameEn: 'Black Hat',
      focus: '비판',
      description: '위험, 문제점, 비판적 판단에 집중',
      questions: ['무엇이 잘못될 수 있나요?', '어떤 위험이 있나요?', '왜 효과가 없을까요?']
    },
    {
      color: 'yellow',
      name: '노란 모자',
      nameEn: 'Yellow Hat',
      focus: '낙관',
      description: '긍정적 측면, 가치, 이점에 집중',
      questions: ['어떤 이점이 있나요?', '왜 효과가 있을까요?', '긍정적인 면은 무엇인가요?']
    },
    {
      color: 'green',
      name: '초록 모자',
      nameEn: 'Green Hat',
      focus: '창의성',
      description: '새로운 아이디어, 대안, 가능성에 집중',
      questions: ['다른 방법은 없을까요?', '새로운 아이디어는 무엇인가요?', '창의적 대안은?']
    },
    {
      color: 'blue',
      name: '파란 모자',
      nameEn: 'Blue Hat',
      focus: '과정 관리',
      description: '사고 과정 자체를 관리하고 조직',
      questions: ['지금 어떤 사고를 해야 하나요?', '다음 단계는 무엇인가요?', '결론은 무엇인가요?']
    }
  ],
  applications: ['회의 진행', '문제 해결', '의사 결정', '갈등 해결', '창의적 사고'],
  source: 'De Bono, E. (1985). Six Thinking Hats'
};

// ============================================
// Kagan Cooperative Learning Structures (v3.5)
// ============================================

export const KAGAN_STRUCTURES = {
  id: 'kagan-structures',
  name: '카간 협동학습 구조',
  nameEn: 'Kagan Cooperative Learning Structures',
  developer: 'Spencer Kagan',
  year: 1994,
  description: '구조화된 협동학습을 통해 학생 참여와 학습 효과를 높이는 교수 전략입니다.',
  principles: {
    name: 'PIES 원리',
    elements: [
      { name: 'Positive Interdependence', nameKr: '긍정적 상호의존', description: '모두가 기여해야 성공' },
      { name: 'Individual Accountability', nameKr: '개인적 책무성', description: '각자의 책임' },
      { name: 'Equal Participation', nameKr: '동등한 참여', description: '모든 학생의 참여' },
      { name: 'Simultaneous Interaction', nameKr: '동시적 상호작용', description: '동시에 많은 학생이 활동' }
    ]
  },
  structures: [
    { name: 'Think-Pair-Share', nameKr: '생각-짝-나눔', purpose: '모든 학생 참여', steps: ['개인 생각', '짝과 공유', '전체 공유'] },
    { name: 'Round Robin', nameKr: '돌아가며 말하기', purpose: '동등한 발언', steps: ['순서대로', '돌아가며', '아이디어 공유'] },
    { name: 'Jigsaw', nameKr: '직소', purpose: '전문가 학습', steps: ['전문가 그룹', '원래 그룹', '가르치기'] },
    { name: 'Numbered Heads Together', nameKr: '번호 머리 모으기', purpose: '팀 책무성', steps: ['질문', '머리 모으기', '번호 호명'] },
    { name: 'Rally Robin', nameKr: '랠리 로빈', purpose: '짝 교대', steps: ['짝끼리', '교대로', '아이디어 나눔'] },
    { name: 'Stand Up-Hand Up-Pair Up', nameKr: '일어서기-손들기-짝짓기', purpose: '무작위 짝', steps: ['일어서기', '손들고 찾기', '짝 대화'] },
    { name: 'Quiz-Quiz-Trade', nameKr: '퀴즈-퀴즈-교환', purpose: '복습', steps: ['카드 퀴즈', '답 확인', '카드 교환'] },
    { name: 'Showdown', nameKr: '쇼다운', purpose: '연습 확인', steps: ['문제 풀기', '쇼다운', '답 확인'] },
    { name: 'Fan-N-Pick', nameKr: '팬앤픽', purpose: '역할 분담', steps: ['카드 펼치기', '선택', '읽기', '답하기'] },
    { name: 'Sage-N-Scribe', nameKr: '현자와 서기', purpose: '짝 협력', steps: ['현자 설명', '서기 기록', '역할 교대'] }
  ],
  source: 'Kagan, S. (1994). Cooperative Learning Structures'
};

// ============================================
// Reggio Emilia Approach (v3.5)
// ============================================

export const REGGIO_EMILIA_APPROACH = {
  id: 'reggio-emilia',
  name: '레지오 에밀리아 접근법',
  nameEn: 'Reggio Emilia Approach',
  developer: 'Loris Malaguzzi',
  origin: 'Reggio Emilia, Italy',
  year: 1945,
  description: '아동의 100가지 언어를 존중하고 환경을 제3의 교사로 보는 영유아 교육 철학입니다.',
  principles: [
    {
      name: '아동의 이미지',
      nameEn: 'Image of the Child',
      description: '아동은 강하고, 유능하며, 회복력 있는 존재'
    },
    {
      name: '환경이 제3의 교사',
      nameEn: 'Environment as Third Teacher',
      description: '학습 환경이 아동의 탐구와 발견을 지원'
    },
    {
      name: '100가지 언어',
      nameEn: 'Hundred Languages of Children',
      description: '아동은 다양한 방식으로 자신을 표현'
    },
    {
      name: '기록화 (Documentation)',
      nameEn: 'Documentation',
      description: '학습 과정을 가시화하고 기록'
    },
    {
      name: '프로젝트 접근법',
      nameEn: 'Project Approach',
      description: '장기적이고 심층적인 프로젝트 탐구'
    },
    {
      name: '관계 중심',
      nameEn: 'Relationships',
      description: '아동-교사-부모-지역사회의 협력적 관계'
    }
  ],
  roles: {
    child: '연구자, 탐구자, 표현자',
    teacher: '공동 학습자, 연구자, 기록자',
    parent: '파트너, 참여자',
    environment: '제3의 교사, 탐구 촉진자'
  },
  source: 'Edwards, C., Gandini, L., & Forman, G. (1998). The Hundred Languages of Children'
};

// ============================================
// Responsive Classroom (v3.5)
// ============================================

export const RESPONSIVE_CLASSROOM = {
  id: 'responsive-classroom',
  name: '반응적 교실',
  nameEn: 'Responsive Classroom',
  developer: 'Northeast Foundation for Children',
  year: 1981,
  description: '학문적 성취와 사회정서적 발달을 통합하는 학생 중심 교육 접근법입니다.',
  principles: [
    '학문적 성장과 사회정서적 성장은 동등하게 중요하다',
    '아동이 학습하는 방식과 내용은 동등하게 중요하다',
    '인지적 성장은 사회적 상호작용을 통해 이루어진다',
    '협력, 자기 주장, 책임감, 공감, 자기 통제가 핵심이다',
    '학습 환경은 안전하고 즐거워야 한다',
    '가정과 학교의 파트너십이 필수적이다'
  ],
  practices: [
    {
      name: 'Morning Meeting',
      nameKr: '아침 모임',
      components: ['인사', '나눔', '활동', '메시지']
    },
    {
      name: 'Rule Creation',
      nameKr: '규칙 만들기',
      description: '학생들이 함께 학급 규칙 수립'
    },
    {
      name: 'Interactive Modeling',
      nameKr: '상호작용적 모델링',
      description: '기대되는 행동을 명시적으로 가르치기'
    },
    {
      name: 'Positive Teacher Language',
      nameKr: '긍정적 교사 언어',
      description: '격려, 강화, 안내하는 언어 사용'
    },
    {
      name: 'Logical Consequences',
      nameKr: '논리적 결과',
      description: '행동과 관련된 자연스러운 결과'
    },
    {
      name: 'Guided Discovery',
      nameKr: '안내된 발견',
      description: '교구와 공간을 탐색하도록 안내'
    }
  ],
  source: 'Center for Responsive Schools'
};

// ============================================
// Restorative Practices (v3.5)
// ============================================

export const RESTORATIVE_PRACTICES = {
  id: 'restorative-practices',
  name: '회복적 실천',
  nameEn: 'Restorative Practices',
  description: '관계 구축과 갈등 해결을 통해 학교 공동체를 강화하는 접근법입니다.',
  origin: '원주민 정의 전통, 회복적 정의',
  principles: [
    '관계 중심',
    '해를 회복하는 데 초점',
    '당사자 모두의 참여',
    '공동체 책임',
    '처벌보다 학습'
  ],
  continuum: [
    {
      level: 1,
      name: '비공식적 실천',
      nameEn: 'Informal Practices',
      examples: ['긍정적 진술', '회복적 질문', '작은 즉흥 회의']
    },
    {
      level: 2,
      name: '서클',
      nameEn: 'Circles',
      examples: ['커뮤니티 서클', '학급 서클', '주제별 서클']
    },
    {
      level: 3,
      name: '공식적 회의',
      nameEn: 'Formal Conferences',
      examples: ['회복적 회의', '가족 그룹 회의', '공동체 회의']
    }
  ],
  questions: {
    forHarmDoer: [
      '무슨 일이 있었나요?',
      '그때 무슨 생각을 했나요?',
      '그 이후로 어떤 생각을 했나요?',
      '누가 영향을 받았나요?',
      '어떻게 바로잡을 수 있을까요?'
    ],
    forHarmed: [
      '그 일이 일어났을 때 어떻게 느꼈나요?',
      '가장 힘들었던 점은 무엇인가요?',
      '상황을 바로잡으려면 무엇이 필요할까요?'
    ]
  },
  source: 'International Institute for Restorative Practices (IIRP)'
};

// ============================================
// Rosenshine's Principles of Instruction (v3.5)
// ============================================

export const ROSENSHINE_PRINCIPLES = {
  id: 'rosenshine-principles',
  name: '로젠샤인의 교수 원리',
  nameEn: "Rosenshine's Principles of Instruction",
  developer: 'Barak Rosenshine',
  year: 2012,
  description: '인지과학 연구에 기반한 효과적인 교수법의 10가지 원리입니다.',
  principles: [
    {
      id: 1,
      name: '매일 복습으로 시작',
      nameEn: 'Begin lesson with review',
      description: '이전 학습 내용을 매일 복습하여 장기 기억 강화',
      strategies: ['퀴즈', '질문', '개념 정리', '핵심 요약']
    },
    {
      id: 2,
      name: '작은 단계로 새 자료 제시',
      nameEn: 'Present new material in small steps',
      description: '인지 부하를 고려하여 작은 단위로 가르치기',
      strategies: ['청킹', '점진적 진행', '명확한 설명']
    },
    {
      id: 3,
      name: '많은 질문하기',
      nameEn: 'Ask many questions',
      description: '이해를 확인하고 적극적 처리를 촉진',
      strategies: ['다양한 질문', '전체 참여', '대기 시간']
    },
    {
      id: 4,
      name: '모델과 예시 제공',
      nameEn: 'Provide models and worked examples',
      description: '문제 해결 과정을 명시적으로 시연',
      strategies: ['시연', '사고 과정 말하기', '단계별 안내']
    },
    {
      id: 5,
      name: '학생 연습 안내',
      nameEn: 'Guide student practice',
      description: '안내된 연습으로 기술 습득 지원',
      strategies: ['함께 풀기', '스캐폴딩', '즉각 피드백']
    },
    {
      id: 6,
      name: '이해 확인',
      nameEn: 'Check for understanding',
      description: '자주 이해도를 확인하고 오개념 수정',
      strategies: ['형성평가', '손들기', '화이트보드']
    },
    {
      id: 7,
      name: '높은 성공률 확보',
      nameEn: 'Obtain high success rate',
      description: '80% 이상의 정확도로 학습 진행',
      strategies: ['적절한 난이도', '충분한 연습', '지원']
    },
    {
      id: 8,
      name: '독립 연습을 위한 스캐폴딩',
      nameEn: 'Provide scaffolds for difficult tasks',
      description: '복잡한 과제에 지원 제공',
      strategies: ['체크리스트', '템플릿', '힌트']
    },
    {
      id: 9,
      name: '독립 연습',
      nameEn: 'Independent practice',
      description: '자동화를 위한 충분한 반복 연습',
      strategies: ['과잉 학습', '분산 연습', '자기 점검']
    },
    {
      id: 10,
      name: '주간/월간 복습',
      nameEn: 'Weekly and monthly review',
      description: '정기적 복습으로 장기 기억 공고화',
      strategies: ['누적 복습', '인출 연습', '간격 효과']
    }
  ],
  source: 'Rosenshine, B. (2012). Principles of Instruction'
};

// ============================================
// Dylan Wiliam's Formative Assessment (v3.5)
// ============================================

export const WILIAM_FORMATIVE_ASSESSMENT = {
  id: 'wiliam-formative-assessment',
  name: '윌리엄의 형성평가 전략',
  nameEn: "Dylan Wiliam's Formative Assessment Strategies",
  developer: 'Dylan Wiliam',
  year: 2011,
  description: '학습을 위한 평가(AfL)를 실현하는 실천적 전략입니다.',
  bigIdea: '학습이 일어나는 순간에 증거를 수집하고 즉시 대응하는 것',
  keyProcesses: [
    { name: '학습자가 어디로 가는지', nameEn: 'Where the learner is going' },
    { name: '학습자가 지금 어디에 있는지', nameEn: 'Where the learner is right now' },
    { name: '어떻게 그곳에 도달할 것인지', nameEn: 'How to get there' }
  ],
  fiveKeyStrategies: [
    {
      id: 1,
      name: '학습 의도와 성공 기준 공유',
      nameEn: 'Clarifying and sharing learning intentions and success criteria',
      techniques: ['학습 목표 공유', '루브릭', '성공 기준', '예시 제공']
    },
    {
      id: 2,
      name: '학습의 증거 도출',
      nameEn: 'Eliciting evidence of learning',
      techniques: ['효과적 질문', '모든 학생 응답', '진단 항목', '관찰']
    },
    {
      id: 3,
      name: '학습을 전진시키는 피드백',
      nameEn: 'Providing feedback that moves learning forward',
      techniques: ['즉각 피드백', '다음 단계 제시', '구체적 피드백', '성장 지향']
    },
    {
      id: 4,
      name: '학생들을 서로의 교수 자원으로 활용',
      nameEn: 'Activating students as instructional resources for one another',
      techniques: ['동료 평가', '동료 교수', '협력 학습', '짝 활동']
    },
    {
      id: 5,
      name: '학생을 자신 학습의 주인으로',
      nameEn: 'Activating students as owners of their own learning',
      techniques: ['자기 평가', '목표 설정', '반성적 저널', '메타인지']
    }
  ],
  techniques: [
    { name: 'No Hands Up', nameKr: '손들기 금지', description: '무작위 호명으로 모든 학생 참여' },
    { name: 'Mini Whiteboards', nameKr: '미니 화이트보드', description: '모든 학생의 응답 동시 확인' },
    { name: 'Exit Tickets', nameKr: '퇴장 티켓', description: '수업 끝 이해도 확인' },
    { name: 'Traffic Lights', nameKr: '신호등', description: '이해 수준 자기 평가' },
    { name: 'Think-Pair-Share', nameKr: '생각-짝-나눔', description: '구조화된 토론' },
    { name: 'Hinge Questions', nameKr: '경첩 질문', description: '핵심 오개념 진단 질문' },
    { name: 'ABCD Cards', nameKr: 'ABCD 카드', description: '선택형 응답 카드' },
    { name: 'Two Stars and a Wish', nameKr: '별 두 개와 소원', description: '동료 피드백 구조' }
  ],
  source: 'Wiliam, D. (2011). Embedded Formative Assessment'
};

// ============================================
// C3 Framework for Social Studies (v3.5)
// ============================================

export const C3_FRAMEWORK = {
  id: 'c3-framework',
  name: 'C3 사회과 탐구 프레임워크',
  nameEn: 'C3 Framework for Social Studies',
  fullName: 'College, Career, and Civic Life Framework',
  developer: 'National Council for the Social Studies (NCSS)',
  year: 2013,
  description: '탐구 기반의 사회과 교육을 위한 프레임워크입니다.',
  dimensions: [
    {
      id: 1,
      name: '질문 개발과 탐구 계획',
      nameEn: 'Developing Questions and Planning Inquiries',
      skills: [
        '설득력 있는 질문 구성',
        '지원 질문 개발',
        '탐구 계획 수립',
        '필요한 출처 파악'
      ]
    },
    {
      id: 2,
      name: '개념과 도구 적용',
      nameEn: 'Applying Disciplinary Concepts and Tools',
      disciplines: [
        {
          name: '시민학',
          nameEn: 'Civics',
          concepts: ['시민 생활', '정치', '정부']
        },
        {
          name: '경제학',
          nameEn: 'Economics',
          concepts: ['경제적 의사결정', '교환과 시장', '국가 경제']
        },
        {
          name: '지리학',
          nameEn: 'Geography',
          concepts: ['지리적 표현', '인간-환경 상호작용', '인간 인구']
        },
        {
          name: '역사학',
          nameEn: 'History',
          concepts: ['변화와 연속성', '관점', '역사적 출처']
        }
      ]
    },
    {
      id: 3,
      name: '출처 평가와 증거 사용',
      nameEn: 'Evaluating Sources and Using Evidence',
      skills: [
        '출처 수집',
        '출처 평가',
        '증거 개발',
        '주장과 반론 구성'
      ]
    },
    {
      id: 4,
      name: '결론 도출과 정보에 기반한 행동',
      nameEn: 'Communicating Conclusions and Taking Informed Action',
      skills: [
        '결론 구성',
        '비평과 반론',
        '정보에 기반한 행동',
        '시민 참여'
      ]
    }
  ],
  inquiryArc: ['질문', '적용', '평가', '소통과 행동'],
  source: 'NCSS (2013). C3 Framework for Social Studies State Standards'
};

// ============================================
// Balanced Literacy Framework (v3.5)
// ============================================

export const BALANCED_LITERACY = {
  id: 'balanced-literacy',
  name: '균형 잡힌 문해력 프레임워크',
  nameEn: 'Balanced Literacy Framework',
  description: '다양한 문해력 교수법을 균형 있게 통합한 접근법입니다.',
  components: [
    {
      name: '읽기 소리내어 읽어주기',
      nameEn: 'Read Aloud',
      description: '교사가 소리 내어 읽어주며 유창성과 이해 모델링',
      teacherRole: '모델링',
      studentRole: '적극적 청취'
    },
    {
      name: '공유 읽기',
      nameEn: 'Shared Reading',
      description: '교사와 학생이 함께 텍스트 읽기',
      teacherRole: '안내',
      studentRole: '참여 읽기'
    },
    {
      name: '안내된 읽기',
      nameEn: 'Guided Reading',
      description: '소그룹에서 수준에 맞는 텍스트로 전략 지도',
      teacherRole: '촉진',
      studentRole: '전략 적용'
    },
    {
      name: '독립 읽기',
      nameEn: 'Independent Reading',
      description: '학생이 스스로 선택한 책 읽기',
      teacherRole: '모니터링',
      studentRole: '자기 주도 읽기'
    },
    {
      name: '쓰기 모델링',
      nameEn: 'Modeled Writing',
      description: '교사가 쓰기 과정을 시연',
      teacherRole: '시연',
      studentRole: '관찰 학습'
    },
    {
      name: '공유 쓰기',
      nameEn: 'Shared Writing',
      description: '교사와 학생이 함께 텍스트 구성',
      teacherRole: '서기',
      studentRole: '아이디어 기여'
    },
    {
      name: '안내된 쓰기',
      nameEn: 'Guided Writing',
      description: '소그룹에서 쓰기 전략 지도',
      teacherRole: '안내',
      studentRole: '적용 연습'
    },
    {
      name: '독립 쓰기',
      nameEn: 'Independent Writing',
      description: '학생이 스스로 글쓰기',
      teacherRole: '회의',
      studentRole: '자기 표현'
    },
    {
      name: '단어 학습',
      nameEn: 'Word Study',
      description: '파닉스, 어휘, 철자 학습',
      teacherRole: '직접 교수',
      studentRole: '탐구와 연습'
    }
  ],
  gradualRelease: ['나 해요 (I Do)', '우리 해요 (We Do)', '너 해요 (You Do)'],
  source: 'Fountas & Pinnell (1996). Guided Reading'
};

// ============================================
// Workshop Model (Reading/Writing) (v3.5)
// ============================================

export const WORKSHOP_MODEL = {
  id: 'workshop-model',
  name: '워크숍 모델',
  nameEn: 'Workshop Model (Reading/Writing)',
  developers: ['Lucy Calkins', 'Nancie Atwell', 'Donald Graves'],
  description: '미니레슨, 독립 작업, 공유 시간으로 구성된 읽기/쓰기 교수 모델입니다.',
  structure: [
    {
      phase: 'Mini-Lesson',
      nameKr: '미니레슨',
      duration: '10-15분',
      components: ['연결', '가르치기', '능동적 참여', '연결하기'],
      description: '전체 학급에 하나의 전략이나 기술 가르치기'
    },
    {
      phase: 'Independent Work Time',
      nameKr: '독립 작업 시간',
      duration: '30-40분',
      components: ['읽기/쓰기', '교사 회의', '소그룹 지도'],
      description: '학생들이 자신의 텍스트로 연습'
    },
    {
      phase: 'Share Time',
      nameKr: '공유 시간',
      duration: '5-10분',
      components: ['학생 공유', '반성', '축하'],
      description: '학습과 성과를 공동체와 나눔'
    }
  ],
  miniLessonArchitecture: {
    connection: '이전 학습과 연결',
    teachingPoint: '오늘의 학습 목표',
    activeEngagement: '학생들이 시도해 봄',
    link: '독립 작업과 연결'
  },
  conferenceTypes: [
    { name: 'Research', nameKr: '연구 회의', purpose: '학생 이해' },
    { name: 'Compliment', nameKr: '칭찬 회의', purpose: '강점 인정' },
    { name: 'Teach', nameKr: '교수 회의', purpose: '전략 지도' },
    { name: 'Link', nameKr: '연결 회의', purpose: '적용 안내' }
  ],
  source: 'Calkins, L. (2001). The Art of Teaching Reading'
};

// ============================================
// Singapore Math (v3.5)
// ============================================

export const SINGAPORE_MATH = {
  id: 'singapore-math',
  name: '싱가포르 수학',
  nameEn: 'Singapore Math',
  country: 'Singapore',
  description: 'CPA(구체-그림-추상) 접근법을 사용하는 수학 교수법입니다.',
  philosophy: '더 적게, 더 깊이 (Teach Less, Learn More)',
  cpaApproach: {
    name: 'CPA 접근법',
    nameEn: 'Concrete-Pictorial-Abstract',
    stages: [
      {
        name: 'Concrete',
        nameKr: '구체적',
        description: '실제 조작물 사용',
        examples: ['블록', '카운터', '분수 타일']
      },
      {
        name: 'Pictorial',
        nameKr: '그림적',
        description: '시각적 표현 사용',
        examples: ['막대 모델', '수직선', '그림']
      },
      {
        name: 'Abstract',
        nameKr: '추상적',
        description: '기호와 숫자 사용',
        examples: ['방정식', '공식', '알고리즘']
      }
    ]
  },
  barModeling: {
    name: '막대 모델',
    nameEn: 'Bar Modeling',
    types: [
      { name: 'Part-Whole', nameKr: '부분-전체', use: '덧셈, 뺄셈' },
      { name: 'Comparison', nameKr: '비교', use: '차이, 배수' },
      { name: 'Before-After', nameKr: '전-후', use: '변화 문제' }
    ]
  },
  numberBonds: {
    name: '수 결합',
    nameEn: 'Number Bonds',
    description: '수의 부분-전체 관계를 시각화'
  },
  principles: [
    '개념적 이해 우선',
    '나선형 교육과정',
    '문제 해결 중심',
    '메타인지 강조',
    '수학적 사고 개발'
  ],
  source: 'Ministry of Education, Singapore'
};

// ============================================
// Number Talks (v3.5)
// ============================================

export const NUMBER_TALKS = {
  id: 'number-talks',
  name: '수학 대화 (넘버 토크)',
  nameEn: 'Number Talks',
  developer: 'Sherry Parrish',
  year: 2010,
  description: '수 감각과 계산 유창성을 기르는 짧은 일상적 수학 대화입니다.',
  duration: '10-15분',
  structure: [
    {
      step: 1,
      name: '문제 제시',
      description: '칠판에 문제 하나 제시'
    },
    {
      step: 2,
      name: '개인 생각 시간',
      description: '조용히 암산으로 해결'
    },
    {
      step: 3,
      name: '준비 신호',
      description: '엄지를 가슴에 대어 준비 표시'
    },
    {
      step: 4,
      name: '답 수집',
      description: '다양한 답을 칠판에 기록'
    },
    {
      step: 5,
      name: '전략 공유',
      description: '학생들이 자신의 전략 설명'
    },
    {
      step: 6,
      name: '전략 기록',
      description: '교사가 학생 전략을 시각화'
    }
  ],
  keyPractices: [
    '손가락으로 준비 신호',
    '암산만 사용',
    '다양한 전략 존중',
    '오류도 학습 기회',
    '학생 전략 기록'
  ],
  mentalMathStrategies: [
    'Making Tens (10 만들기)',
    'Compensation (보상)',
    'Doubles (두 배)',
    'Breaking Apart (분해)',
    'Adding Up (더하기)',
    'Removing (빼기)',
    'Place Value (자릿값)'
  ],
  source: 'Parrish, S. (2010). Number Talks'
};

// ============================================
// Cognitively Guided Instruction (CGI) (v3.5)
// ============================================

export const CGI_MATH = {
  id: 'cgi-math',
  name: '인지적으로 안내된 교수 (CGI)',
  nameEn: 'Cognitively Guided Instruction',
  developers: ['Thomas Carpenter', 'Elizabeth Fennema', 'Megan Franke'],
  year: 1989,
  description: '아동의 수학적 사고 발달에 대한 연구 기반 교수법입니다.',
  philosophy: '아동은 형식적 교수 전에 수학적 문제를 해결할 수 있다',
  problemTypes: {
    addition: [
      { name: 'Join Result Unknown', nameKr: '합류-결과 미지', example: '3 + 5 = ?' },
      { name: 'Join Change Unknown', nameKr: '합류-변화 미지', example: '3 + ? = 8' },
      { name: 'Join Start Unknown', nameKr: '합류-시작 미지', example: '? + 5 = 8' }
    ],
    subtraction: [
      { name: 'Separate Result Unknown', nameKr: '분리-결과 미지', example: '8 - 3 = ?' },
      { name: 'Separate Change Unknown', nameKr: '분리-변화 미지', example: '8 - ? = 5' },
      { name: 'Separate Start Unknown', nameKr: '분리-시작 미지', example: '? - 3 = 5' }
    ],
    comparison: [
      { name: 'Compare Difference Unknown', nameKr: '비교-차이 미지', example: '누가 몇 개 더 많은가?' },
      { name: 'Compare Quantity Unknown', nameKr: '비교-수량 미지', example: '더 많으면 얼마인가?' }
    ],
    multiplication: [
      { name: 'Equal Groups', nameKr: '같은 그룹', example: '4묶음 × 3개' },
      { name: 'Multiplicative Comparison', nameKr: '곱셈 비교', example: '3배 더 많다' }
    ],
    division: [
      { name: 'Measurement Division', nameKr: '측정 나눗셈', example: '12개를 3개씩 나누면?' },
      { name: 'Partitive Division', nameKr: '등분 나눗셈', example: '12개를 3명에게 나누면?' }
    ]
  },
  studentStrategies: [
    { name: 'Direct Modeling', nameKr: '직접 모델링', description: '물체로 상황 재현' },
    { name: 'Counting Strategies', nameKr: '수세기 전략', description: '수세기로 해결' },
    { name: 'Derived Facts', nameKr: '유도된 사실', description: '알고 있는 사실 활용' },
    { name: 'Number Facts', nameKr: '수 사실', description: '자동적 인출' }
  ],
  teacherRole: [
    '학생 사고 관찰',
    '질문하기',
    '전략 공유 촉진',
    '수학적 아이디어 연결'
  ],
  source: 'Carpenter, T.P., Fennema, E., et al. (1999). Children\'s Mathematics: CGI'
};

// ============================================
// STEAM/Maker Education (v3.5)
// ============================================

export const STEAM_MAKER_EDUCATION = {
  id: 'steam-maker',
  name: 'STEAM 및 메이커 교육',
  nameEn: 'STEAM and Maker Education',
  description: '과학, 기술, 공학, 예술, 수학의 통합과 만들기를 통한 학습입니다.',
  steam: {
    name: 'STEAM',
    fullName: 'Science, Technology, Engineering, Arts, Mathematics',
    components: [
      { letter: 'S', name: 'Science', nameKr: '과학', focus: '탐구와 발견' },
      { letter: 'T', name: 'Technology', nameKr: '기술', focus: '도구 활용' },
      { letter: 'E', name: 'Engineering', nameKr: '공학', focus: '설계와 문제 해결' },
      { letter: 'A', name: 'Arts', nameKr: '예술', focus: '창의성과 표현' },
      { letter: 'M', name: 'Mathematics', nameKr: '수학', focus: '논리와 패턴' }
    ],
    approach: '통합적, 프로젝트 기반, 실제 문제 중심'
  },
  makerEducation: {
    name: '메이커 교육',
    nameEn: 'Maker Education',
    motto: '만들면서 배운다 (Learning by Making)',
    principles: [
      '만들기를 통한 학습',
      '실패를 통한 학습',
      '공유와 협력',
      '열정 프로젝트',
      '다양한 도구와 재료'
    ],
    spaces: {
      name: '메이커스페이스',
      elements: ['도구', '재료', '기술', '공동체', '멘토']
    },
    activities: [
      '코딩과 로봇',
      '3D 프린팅',
      '전자 공작',
      '목공',
      '섬유/의류',
      '디지털 미디어'
    ]
  },
  designProcess: {
    name: '공학적 설계 과정',
    nameEn: 'Engineering Design Process',
    steps: [
      { name: 'Ask', nameKr: '질문하기', description: '문제 정의' },
      { name: 'Imagine', nameKr: '상상하기', description: '아이디어 생성' },
      { name: 'Plan', nameKr: '계획하기', description: '설계 계획' },
      { name: 'Create', nameKr: '만들기', description: '프로토타입 제작' },
      { name: 'Experiment', nameKr: '실험하기', description: '테스트' },
      { name: 'Improve', nameKr: '개선하기', description: '반복 개선' }
    ]
  },
  source: 'Maker Education Initiative, STEAM Education Coalition'
};

// ============================================
// Curriculum Design Models (v3.5)
// ============================================

export const CURRICULUM_DESIGN_MODELS = [
  {
    id: 'tyler-rationale',
    name: '타일러 교육과정 모형',
    nameEn: "Tyler's Rationale",
    developer: 'Ralph Tyler',
    year: 1949,
    description: '교육과정 개발의 고전적 모형으로, 목표 중심 접근법입니다.',
    questions: [
      { id: 1, question: '학교가 달성하려는 교육 목적은 무엇인가?', area: '목표' },
      { id: 2, question: '이 목적을 달성하기 위해 어떤 교육 경험을 제공할 수 있는가?', area: '경험' },
      { id: 3, question: '이 교육 경험을 어떻게 효과적으로 조직할 수 있는가?', area: '조직' },
      { id: 4, question: '이 목적이 달성되었는지 어떻게 결정할 수 있는가?', area: '평가' }
    ],
    principles: {
      continuity: '연속성 - 중요한 요소의 반복',
      sequence: '계열성 - 점진적 심화',
      integration: '통합성 - 수평적 연결'
    },
    source: 'Tyler, R. (1949). Basic Principles of Curriculum and Instruction'
  },
  {
    id: 'taba-model',
    name: '타바 교육과정 모형',
    nameEn: "Taba's Grassroots Model",
    developer: 'Hilda Taba',
    year: 1962,
    description: '교사 주도의 상향식 교육과정 개발 모형입니다.',
    steps: [
      { id: 1, name: '요구 진단', description: '학습자 요구 파악' },
      { id: 2, name: '목표 설정', description: '교육 목표 수립' },
      { id: 3, name: '내용 선정', description: '학습 내용 선택' },
      { id: 4, name: '내용 조직', description: '학습 내용 배열' },
      { id: 5, name: '학습 경험 선정', description: '활동 선택' },
      { id: 6, name: '학습 경험 조직', description: '활동 배열' },
      { id: 7, name: '평가 결정', description: '평가 방법 결정' }
    ],
    characteristic: '귀납적, 교사 중심, 현장 기반',
    source: 'Taba, H. (1962). Curriculum Development: Theory and Practice'
  },
  {
    id: 'stenhouse-process',
    name: '스텐하우스 과정 모형',
    nameEn: "Stenhouse's Process Model",
    developer: 'Lawrence Stenhouse',
    year: 1975,
    description: '교육의 과정 자체를 중시하는 교육과정 모형입니다.',
    principles: [
      '교육은 전달이 아닌 입문',
      '교사는 연구자',
      '지식은 추측적',
      '과정이 결과만큼 중요'
    ],
    keyIdeas: [
      '교사 연구자 (Teacher as Researcher)',
      '과정 중심 교육과정',
      '비판적 탐구',
      '반성적 실천'
    ],
    humanitiesCurriculumProject: {
      topics: ['전쟁', '교육', '가족', '빈곤', '법'],
      principles: [
        '논쟁적 문제 다루기',
        '교사 중립성',
        '토론 중심',
        '증거 기반 탐구'
      ]
    },
    source: 'Stenhouse, L. (1975). An Introduction to Curriculum Research and Development'
  },
  {
    id: 'wheeler-model',
    name: '휠러 순환 모형',
    nameEn: "Wheeler's Cyclical Model",
    developer: 'D.K. Wheeler',
    year: 1967,
    description: '교육과정 개발의 순환적 과정을 강조하는 모형입니다.',
    phases: [
      { id: 1, name: '목적, 목표 선정', description: '교육 목적 결정' },
      { id: 2, name: '학습 경험 선정', description: '목표 달성을 위한 경험 선택' },
      { id: 3, name: '내용 선정', description: '학습 내용 결정' },
      { id: 4, name: '내용 조직', description: '내용 구조화' },
      { id: 5, name: '평가', description: '성취도 평가' }
    ],
    characteristic: '순환적, 연속적, 피드백 기반',
    improvement: 'Tyler 모형을 순환적으로 발전',
    source: 'Wheeler, D.K. (1967). Curriculum Process'
  }
];

// ============================================
// Flipped Learning (v3.5)
// ============================================

export const FLIPPED_LEARNING = {
  id: 'flipped-learning',
  name: '거꾸로 학습 (플립러닝)',
  nameEn: 'Flipped Learning',
  developers: ['Jonathan Bergmann', 'Aaron Sams'],
  year: 2007,
  description: '전통적 수업과 과제의 순서를 뒤집어 학습 효과를 높이는 교수법입니다.',
  pillars: {
    name: 'F-L-I-P',
    elements: [
      { letter: 'F', name: 'Flexible Environment', nameKr: '유연한 환경', description: '다양한 학습 모드 허용' },
      { letter: 'L', name: 'Learning Culture', nameKr: '학습 문화', description: '학생 중심 활동적 학습' },
      { letter: 'I', name: 'Intentional Content', nameKr: '의도적 콘텐츠', description: '직접 교수와 독립 학습 구분' },
      { letter: 'P', name: 'Professional Educator', nameKr: '전문적 교육자', description: '관찰, 피드백, 평가' }
    ]
  },
  structure: {
    beforeClass: {
      name: '수업 전',
      activities: ['영상 시청', '읽기 자료', '퀴즈', '질문 준비']
    },
    duringClass: {
      name: '수업 중',
      activities: ['토론', '문제 해결', '프로젝트', '개별 지도', '협력 학습']
    },
    afterClass: {
      name: '수업 후',
      activities: ['심화 학습', '확장 활동', '반성']
    }
  },
  benefits: [
    '학생 속도에 맞춘 학습',
    '수업 시간 활용 극대화',
    '개별화된 지원',
    '능동적 학습',
    '반복 학습 가능'
  ],
  challenges: ['기술 접근성', '학생 참여', '영상 제작', '초기 저항'],
  source: 'Bergmann, J. & Sams, A. (2012). Flip Your Classroom'
};

// ============================================
// Blended Learning Models (v3.5)
// ============================================

export const BLENDED_LEARNING_MODELS = {
  id: 'blended-learning',
  name: '블렌디드 러닝 모델',
  nameEn: 'Blended Learning Models',
  description: '온라인과 대면 학습을 결합한 다양한 모델입니다.',
  models: [
    {
      name: 'Rotation Model',
      nameKr: '순환 모델',
      description: '학생들이 정해진 일정에 따라 학습 양식을 순환',
      subtypes: [
        { name: 'Station Rotation', nameKr: '스테이션 순환', description: '교실 내 스테이션 순환' },
        { name: 'Lab Rotation', nameKr: '랩 순환', description: '컴퓨터실과 교실 순환' },
        { name: 'Flipped Classroom', nameKr: '거꾸로 교실', description: '가정-학교 순환' },
        { name: 'Individual Rotation', nameKr: '개별 순환', description: '맞춤형 순환' }
      ]
    },
    {
      name: 'Flex Model',
      nameKr: '플렉스 모델',
      description: '온라인 학습이 중심, 교사는 필요시 지원',
      characteristics: ['자기 주도', '유연한 일정', '개인화']
    },
    {
      name: 'A La Carte Model',
      nameKr: '알라카르트 모델',
      description: '전통 교실 외에 온라인 강좌 추가 수강',
      characteristics: ['보충', '심화', '선택']
    },
    {
      name: 'Enriched Virtual Model',
      nameKr: '강화된 가상 모델',
      description: '주로 온라인, 필수 대면 세션 포함',
      characteristics: ['원격 학습', '정기 대면', '프로젝트']
    }
  ],
  successFactors: [
    '명확한 학습 목표',
    '기술 인프라',
    '교사 전문성',
    '학생 자기조절',
    '데이터 기반 의사결정'
  ],
  source: 'Clayton Christensen Institute. Blended Learning Models'
};

// ============================================
// Gamification in Education (v3.5)
// ============================================

export const GAMIFICATION_EDUCATION = {
  id: 'gamification',
  name: '게이미피케이션',
  nameEn: 'Gamification in Education',
  description: '게임 요소와 게임 디자인 기법을 교육에 적용하는 것입니다.',
  gameElements: [
    { name: 'Points', nameKr: '포인트', purpose: '진행 추적' },
    { name: 'Badges', nameKr: '배지', purpose: '성취 인정' },
    { name: 'Leaderboards', nameKr: '리더보드', purpose: '경쟁 유도' },
    { name: 'Levels', nameKr: '레벨', purpose: '진행 단계' },
    { name: 'Challenges', nameKr: '도전', purpose: '목표 제공' },
    { name: 'Quests', nameKr: '퀘스트', purpose: '미션 부여' },
    { name: 'Avatars', nameKr: '아바타', purpose: '정체성 표현' },
    { name: 'Progress Bars', nameKr: '진행 바', purpose: '시각적 피드백' },
    { name: 'Rewards', nameKr: '보상', purpose: '동기 유발' },
    { name: 'Teams', nameKr: '팀', purpose: '협력 촉진' }
  ],
  frameworks: [
    {
      name: 'Octalysis',
      developer: 'Yu-kai Chou',
      coreDrivers: [
        'Epic Meaning & Calling (서사와 소명)',
        'Development & Accomplishment (발전과 성취)',
        'Empowerment of Creativity (창의성 권한)',
        'Ownership & Possession (소유와 점유)',
        'Social Influence (사회적 영향)',
        'Scarcity & Impatience (희소성과 조급함)',
        'Unpredictability & Curiosity (예측불가와 호기심)',
        'Loss & Avoidance (손실과 회피)'
      ]
    }
  ],
  benefits: ['동기 증가', '참여 향상', '즉각 피드백', '안전한 실패', '진행 시각화'],
  cautions: ['외재적 동기 의존', '경쟁 과열', '포인트 중독', '게임 vs 학습 균형'],
  examples: ['Kahoot!', 'Classcraft', 'Duolingo', 'Minecraft: Education Edition'],
  source: 'Kapp, K.M. (2012). The Gamification of Learning and Instruction'
};

// ============================================
// Game-Based Learning (v3.5)
// ============================================

export const GAME_BASED_LEARNING = {
  id: 'game-based-learning',
  name: '게임 기반 학습',
  nameEn: 'Game-Based Learning (GBL)',
  description: '교육용으로 설계된 게임을 통한 학습입니다.',
  differenceFromGamification: '게이미피케이션은 게임 요소를 교육에 적용, GBL은 게임 자체가 학습 도구',
  gameTypes: [
    { name: 'Simulation Games', nameKr: '시뮬레이션 게임', examples: ['SimCity', 'Civilization'] },
    { name: 'Serious Games', nameKr: '기능성 게임', examples: ['DragonBox', 'CodeCombat'] },
    { name: 'Educational Games', nameKr: '교육용 게임', examples: ['Math Blaster', 'Oregon Trail'] },
    { name: 'Sandbox Games', nameKr: '샌드박스 게임', examples: ['Minecraft', 'Kerbal Space Program'] },
    { name: 'Role-Playing Games', nameKr: '역할 수행 게임', examples: ['Classcraft', 'Quest to Learn'] }
  ],
  learningPrinciples: [
    '즉각적 피드백',
    '안전한 실패',
    '적응적 난이도',
    '내러티브 몰입',
    '문제 해결 중심',
    '능동적 학습'
  ],
  designPrinciples: [
    { name: 'Clear Goals', nameKr: '명확한 목표', description: '학습 목표와 게임 목표 정렬' },
    { name: 'Rules', nameKr: '규칙', description: '명확하고 일관된 규칙' },
    { name: 'Feedback', nameKr: '피드백', description: '즉각적이고 구체적인 피드백' },
    { name: 'Voluntary Participation', nameKr: '자발적 참여', description: '내재적 동기' },
    { name: 'Flow', nameKr: '몰입', description: '도전과 능력의 균형' }
  ],
  source: 'Gee, J.P. (2003). What Video Games Have to Teach Us About Learning and Literacy'
};

// ============================================
// 통계 및 내보내기
// ============================================

export const EDUCATIONAL_THEORIES_STATS = {
  learningTheories: LEARNING_THEORIES.length,
  instructionalModels: INSTRUCTIONAL_MODELS.length,
  assessmentFrameworks: ASSESSMENT_FRAMEWORKS.length,
  additionalAssessmentFrameworks: ADDITIONAL_ASSESSMENT_FRAMEWORKS.length,
  competencyFrameworks: COMPETENCY_FRAMEWORKS_21C.length,
  habitsOfMind: HABITS_OF_MIND.length,
  buildingLearningPower: BUILDING_LEARNING_POWER.length,
  extendedThinkingRoutines: EXTENDED_THINKING_ROUTINES.length,
  subjectSpecificFrameworks: SUBJECT_SPECIFIC_FRAMEWORKS.length,
  pedagogicalApproaches: PEDAGOGICAL_APPROACHES.length,
  additionalPedagogicalApproaches: ADDITIONAL_PEDAGOGICAL_APPROACHES.length,
  // 추가 프레임워크
  udlGuidelines: 3, // 3가지 원리
  caselCompetencies: 5, // 5가지 SEL 역량
  thinkingMaps: 8, // 8가지 사고 지도
  samrLevels: 4, // 4단계
  tpackDomains: 7, // 3개 영역 + 4개 교차점
  qftSteps: 6, // 6단계
  visibleLearningStrategies: 9, // 고효과 전략
  get total() {
    return (
      this.learningTheories +
      this.instructionalModels +
      this.assessmentFrameworks +
      this.additionalAssessmentFrameworks +
      this.competencyFrameworks +
      this.habitsOfMind +
      this.buildingLearningPower +
      this.extendedThinkingRoutines +
      this.subjectSpecificFrameworks +
      this.pedagogicalApproaches +
      this.additionalPedagogicalApproaches +
      this.udlGuidelines +
      this.caselCompetencies +
      this.thinkingMaps +
      this.samrLevels +
      this.tpackDomains +
      this.qftSteps +
      this.visibleLearningStrategies
    );
  }
};

console.log(`
╔═══════════════════════════════════════════════════════════════════════════╗
║          교육 이론 및 프레임워크 데이터베이스 로드 완료 (v3.0)              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  [핵심 학습 이론]                                                          ║
║  📚 학습 이론: ${String(EDUCATIONAL_THEORIES_STATS.learningTheories).padStart(2)}개 (Kolb, Gardner, Dweck, Vygotsky, Bruner, Ausubel...)       ║
║  🎯 수업 모델: ${String(EDUCATIONAL_THEORIES_STATS.instructionalModels).padStart(2)}개 (TfU, 5E, UbD, Design Thinking, Marzano...)          ║
║  📊 평가 프레임워크: ${String(EDUCATIONAL_THEORIES_STATS.assessmentFrameworks + EDUCATIONAL_THEORIES_STATS.additionalAssessmentFrameworks).padStart(2)}개 (SOLO, 형성평가, 수행평가...)                   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  [역량 및 사고 프레임워크]                                                  ║
║  🌐 21세기 역량: ${String(EDUCATIONAL_THEORIES_STATS.competencyFrameworks).padStart(2)}개 (P21, OECD 2030, UNESCO)                        ║
║  🧠 사고 습관: ${String(EDUCATIONAL_THEORIES_STATS.habitsOfMind).padStart(2)}개 (Costa & Kallick)                                 ║
║  💪 학습력 구축: ${String(EDUCATIONAL_THEORIES_STATS.buildingLearningPower).padStart(2)}개 (4Rs - Claxton)                                  ║
║  🔄 사고 루틴: ${String(EDUCATIONAL_THEORIES_STATS.extendedThinkingRoutines).padStart(2)}개 (Harvard Project Zero 전체)                      ║
║  🗺️ 사고 지도: ${String(EDUCATIONAL_THEORIES_STATS.thinkingMaps).padStart(2)}개 (Thinking Maps - Hyerle)                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  [교육 설계 프레임워크]                                                     ║
║  ♿ UDL 원리: ${String(EDUCATIONAL_THEORIES_STATS.udlGuidelines).padStart(2)}개 (보편적 학습 설계)                                   ║
║  💚 CASEL SEL: ${String(EDUCATIONAL_THEORIES_STATS.caselCompetencies).padStart(2)}개 (사회정서학습 역량)                                  ║
║  💻 기술 통합: ${String(EDUCATIONAL_THEORIES_STATS.samrLevels + EDUCATIONAL_THEORIES_STATS.tpackDomains).padStart(2)}개 (SAMR + TPACK)                                       ║
║  ❓ 질문 형성: ${String(EDUCATIONAL_THEORIES_STATS.qftSteps).padStart(2)}개 (QFT, 소크라테스 세미나)                              ║
║  👁️ Visible Learning: ${String(EDUCATIONAL_THEORIES_STATS.visibleLearningStrategies).padStart(2)}개 (Hattie 효과 크기 연구)                        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  [교육적 접근법]                                                            ║
║  📖 교과별 프레임워크: ${String(EDUCATIONAL_THEORIES_STATS.subjectSpecificFrameworks).padStart(2)}개 (C3, NCTM, NGSS)                              ║
║  🎨 교육적 접근법: ${String(EDUCATIONAL_THEORIES_STATS.pedagogicalApproaches + EDUCATIONAL_THEORIES_STATS.additionalPedagogicalApproaches).padStart(2)}개 (Reggio, Montessori, Waldorf, PBL...)             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  📦 총 ${String(EDUCATIONAL_THEORIES_STATS.total).padStart(3)}개 항목 로드됨 - 세계에서 가장 포괄적인 교육 이론 DB                 ║
╚═══════════════════════════════════════════════════════════════════════════╝
`);

export default {
  // 학습 이론
  LEARNING_THEORIES,
  INSTRUCTIONAL_MODELS,
  ASSESSMENT_FRAMEWORKS,
  ADDITIONAL_ASSESSMENT_FRAMEWORKS,
  // 역량 프레임워크
  COMPETENCY_FRAMEWORKS_21C,
  HABITS_OF_MIND,
  BUILDING_LEARNING_POWER,
  EXTENDED_THINKING_ROUTINES,
  // 교육 설계 프레임워크
  UDL_FRAMEWORK,
  DIFFERENTIATED_INSTRUCTION,
  CASEL_SEL_FRAMEWORK,
  SAMR_MODEL,
  TPACK_FRAMEWORK,
  QUESTION_FORMULATION_TECHNIQUE,
  SOCRATIC_SEMINAR,
  VISIBLE_LEARNING,
  THINKING_MAPS,
  // 교육적 접근법
  SUBJECT_SPECIFIC_FRAMEWORKS,
  PEDAGOGICAL_APPROACHES,
  ADDITIONAL_PEDAGOGICAL_APPROACHES,
  // 기타
  IB_TOK_FRAMEWORK,
  EDUCATIONAL_THEORIES_STATS
};
