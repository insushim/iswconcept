// 수업 전략 및 그래픽 오거나이저 데이터베이스
// 개념기반 탐구수업을 위한 교수 전략

import type { TeachingStrategy, GraphicOrganizer } from '../types/database';

// ============================================
// 수업 전략 (Teaching Strategies)
// ============================================
export const TEACHING_STRATEGIES: TeachingStrategy[] = [
  {
    id: 'strat-concept-attainment',
    name: '개념 획득 전략',
    nameEn: 'Concept Attainment',
    category: 'inductive',
    description: '학생들이 예시와 비예시를 분석하여 개념의 속성을 발견하는 귀납적 전략입니다.',
    steps: [
      '교사가 긍정적 예시(개념에 해당하는 것)와 부정적 예시(해당하지 않는 것)를 제시',
      '학생들이 예시들을 관찰하고 공통 속성을 추론',
      '학생들이 가설을 세우고 새로운 예시로 검증',
      '개념의 정의와 핵심 속성을 명확히 하고 정리',
      '학생들이 스스로 새로운 예시를 생성'
    ],
    benefits: [
      '깊은 개념 이해 촉진',
      '비판적 사고력 개발',
      '학생 참여 증가',
      '장기 기억 강화'
    ],
    challenges: [
      '적절한 예시와 비예시 선정 필요',
      '시간이 더 소요될 수 있음',
      '일부 학생에게 스캐폴딩 필요'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'strat-inductive-learning',
    name: '귀납적 학습',
    nameEn: 'Inductive Learning',
    category: 'inductive',
    description: '구체적인 사례에서 시작하여 일반적인 원리나 개념을 도출하는 전략입니다.',
    steps: [
      '여러 구체적 사례나 데이터 제시',
      '학생들이 패턴과 공통점 관찰',
      '패턴에 기반한 가설 생성',
      '추가 사례로 가설 검증',
      '일반화된 원리나 규칙 도출'
    ],
    benefits: [
      '발견 학습 촉진',
      '비판적 사고력 개발',
      '개념의 깊은 이해',
      '전이 가능한 학습'
    ],
    challenges: [
      '시간 소요가 많음',
      '오개념 형성 가능성',
      '교사의 촉진 역할 중요'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'strat-deductive-learning',
    name: '연역적 학습',
    nameEn: 'Deductive Learning',
    category: 'deductive',
    description: '일반적인 원리나 개념에서 시작하여 구체적인 사례에 적용하는 전략입니다.',
    steps: [
      '일반적인 원리, 규칙, 또는 개념 제시',
      '원리의 의미와 논리 설명',
      '구체적인 예시 제시 및 분석',
      '학생들이 새로운 상황에 원리 적용',
      '적용 결과 검토 및 피드백'
    ],
    benefits: [
      '효율적인 정보 전달',
      '명확한 구조 제공',
      '오개념 예방',
      '체계적 학습'
    ],
    challenges: [
      '수동적 학습 위험',
      '깊은 이해보다 암기 가능성',
      '전이가 어려울 수 있음'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'strat-socratic-seminar',
    name: '소크라틱 세미나',
    nameEn: 'Socratic Seminar',
    category: 'discussion',
    description: '텍스트나 아이디어에 대한 깊은 토론을 통해 비판적 사고를 촉진하는 전략입니다.',
    steps: [
      '공동 텍스트나 자료 준비 및 사전 읽기',
      '원형으로 배치하여 대화 환경 조성',
      '개방형 질문으로 토론 시작',
      '학생들이 증거를 인용하며 대화',
      '토론 후 성찰 및 정리'
    ],
    benefits: [
      '깊은 텍스트 분석',
      '비판적 사고력 개발',
      '경청과 소통 기술 향상',
      '다양한 관점 탐구'
    ],
    challenges: [
      '사전 준비 필요',
      '모든 학생 참여 유도 어려움',
      '토론 관리 기술 필요'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['korean', 'social_studies', 'ethics', 'english']
  },
  {
    id: 'strat-jigsaw',
    name: '직소(퍼즐 조각)',
    nameEn: 'Jigsaw',
    category: 'collaborative',
    description: '각 학생이 전문가가 되어 다른 학생들에게 가르치는 협력 학습 전략입니다.',
    steps: [
      '학습 내용을 전문 영역으로 분할',
      '기초 그룹에서 각자 다른 전문 영역 할당',
      '같은 영역 학생들이 전문가 그룹에서 학습',
      '기초 그룹으로 돌아와 서로 가르침',
      '전체 내용에 대한 이해 확인'
    ],
    benefits: [
      '적극적 참여 촉진',
      '책임감과 상호의존성 개발',
      '의사소통 기술 향상',
      '다양한 관점 이해'
    ],
    challenges: [
      '그룹 구성과 관리',
      '개별 학생의 역할 수행 보장',
      '시간 조율'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'strat-pbl',
    name: '프로젝트 기반 학습',
    nameEn: 'Project-Based Learning (PBL)',
    category: 'project_based',
    description: '실제적인 프로젝트를 통해 학습하는 장기적이고 학생 중심적인 전략입니다.',
    steps: [
      '도전적 질문이나 문제 제시',
      '프로젝트 계획 수립',
      '탐구, 연구, 자료 수집',
      '산출물 제작 및 수정',
      '발표 및 성찰'
    ],
    benefits: [
      '깊은 학습과 전이',
      '21세기 역량 개발',
      '학생 동기 부여',
      '실제 세계 연결'
    ],
    challenges: [
      '시간과 자원 소요',
      '평가의 복잡성',
      '교육과정 연계'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'strat-inquiry-based',
    name: '탐구 기반 학습',
    nameEn: 'Inquiry-Based Learning',
    category: 'inquiry',
    description: '학생들이 질문을 생성하고 탐구를 통해 답을 찾는 학생 주도적 전략입니다.',
    steps: [
      '호기심 유발 및 질문 생성',
      '탐구 계획 수립',
      '정보 수집 및 실험',
      '데이터 분석 및 해석',
      '결론 도출 및 공유'
    ],
    benefits: [
      '호기심과 탐구심 개발',
      '과학적 사고력 향상',
      '자기 주도 학습 능력',
      '깊은 이해'
    ],
    challenges: [
      '시간 관리',
      '학생 준비도 차이',
      '적절한 스캐폴딩 제공'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'strat-think-aloud',
    name: '생각 말하기',
    nameEn: 'Think Aloud',
    category: 'deductive',
    description: '교사가 사고 과정을 소리 내어 말하며 시범을 보이는 전략입니다.',
    steps: [
      '과제나 문제 제시',
      '교사가 사고 과정을 소리 내어 설명하며 시범',
      '학생들이 관찰하고 메모',
      '학생들이 짝이나 소그룹에서 연습',
      '독립적 적용 및 피드백'
    ],
    benefits: [
      '명시적 사고 전략 교수',
      '메타인지 발달',
      '전문가 사고 모델링',
      '어려운 개념 접근성 향상'
    ],
    challenges: [
      '교사의 자연스러운 시범 필요',
      '다양한 사고 과정 보여주기'
    ],
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'strat-station-rotation',
    name: '스테이션 로테이션',
    nameEn: 'Station Rotation',
    category: 'collaborative',
    description: '학생들이 다양한 활동 스테이션을 순환하며 학습하는 전략입니다.',
    steps: [
      '다양한 학습 스테이션 설계 (직접 교수, 협력 활동, 독립 학습, 디지털 학습 등)',
      '학생 그룹 편성',
      '각 스테이션에서 정해진 시간 동안 활동',
      '신호에 따라 다음 스테이션으로 이동',
      '모든 스테이션 완료 후 종합 정리'
    ],
    benefits: [
      '차별화된 학습 기회',
      '학생 참여 증가',
      '소그룹 직접 교수 가능',
      '다양한 학습 양식 충족'
    ],
    challenges: [
      '준비와 조직 필요',
      '시간 관리',
      '독립 학습 스테이션 관리'
    ],
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school'],
    subjects: ['all']
  },
  {
    id: 'strat-flipped-classroom',
    name: '거꾸로 교실',
    nameEn: 'Flipped Classroom',
    category: 'inquiry',
    description: '사전에 내용을 학습하고 수업 시간에 심화 활동을 하는 전략입니다.',
    steps: [
      '영상이나 자료로 사전 학습 과제 제공',
      '학생들이 가정에서 기본 내용 학습',
      '수업 시간에 적용, 토론, 문제 해결 활동',
      '교사가 개별 지도 및 피드백 제공',
      '심화 또는 확장 활동'
    ],
    benefits: [
      '수업 시간 효율적 활용',
      '개별화된 학습 속도',
      '심화 활동 시간 확보',
      '학생 자기주도성'
    ],
    challenges: [
      '사전 학습 완료 보장',
      '양질의 사전 자료 제작',
      '디지털 접근성'
    ],
    suitableFor: ['middle_school', 'high_school'],
    subjects: ['all']
  }
];

// ============================================
// 그래픽 오거나이저 (Graphic Organizers)
// ============================================
export const GRAPHIC_ORGANIZERS: GraphicOrganizer[] = [
  {
    id: 'go-concept-map',
    name: 'Concept Map',
    nameKo: '개념 지도',
    type: 'concept_map',
    purpose: '개념들 간의 관계를 시각적으로 나타내어 이해를 깊게 하고 연결을 발견합니다.',
    useCase: [
      '단원 시작 시 사전 지식 활성화',
      '수업 중 개념 정리',
      '단원 마무리 시 종합 정리',
      '개념적 이해 평가'
    ],
    instructions: '중심 개념을 가운데 놓고, 관련 개념들을 연결선으로 연결합니다. 연결선 위에 관계를 설명하는 단어(예: ~이다, ~때문에, ~에 영향을 줌)를 적습니다.',
    subjects: ['all'],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-venn-diagram',
    name: 'Venn Diagram',
    nameKo: '벤 다이어그램',
    type: 'venn_diagram',
    purpose: '두 개 이상의 개념, 아이디어, 대상의 유사점과 차이점을 비교합니다.',
    useCase: [
      '개념 비교',
      '인물 비교',
      '시대나 문화 비교',
      '해결책이나 관점 비교'
    ],
    instructions: '겹치는 원을 그리고, 겹치는 부분에 공통점을, 겹치지 않는 부분에 각각의 고유한 특성을 적습니다.',
    subjects: ['all'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-kwl-chart',
    name: 'KWL Chart',
    nameKo: 'KWL 차트',
    type: 'kwl_chart',
    purpose: '학습 전, 중, 후의 지식을 추적하여 메타인지를 발달시킵니다.',
    useCase: [
      '새로운 주제 도입 시 사전 지식 활성화',
      '탐구 질문 생성',
      '학습 진행 모니터링',
      '학습 성찰'
    ],
    instructions: 'K(Know): 이미 알고 있는 것, W(Want to know): 알고 싶은 것, L(Learned): 배운 것을 각 열에 적습니다.',
    subjects: ['all'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-fishbone',
    name: 'Fishbone Diagram',
    nameKo: '생선뼈 다이어그램',
    type: 'fishbone',
    purpose: '결과의 원인들을 체계적으로 분석하고 분류합니다.',
    useCase: [
      '문제의 원인 분석',
      '역사적 사건의 원인 탐구',
      '과학 현상의 원인 분석',
      '문제 해결 계획'
    ],
    instructions: '머리 부분에 결과/문제를 적고, 큰 뼈대에 원인의 범주를, 작은 뼈대에 구체적인 원인을 적습니다.',
    subjects: ['science', 'social_studies', 'practical_arts'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-flowchart',
    name: 'Flowchart',
    nameKo: '순서도',
    type: 'flowchart',
    purpose: '과정, 절차, 또는 사건의 순서를 시각적으로 나타냅니다.',
    useCase: [
      '과정 설명',
      '알고리즘 표현',
      '역사적 사건 순서',
      '의사결정 과정'
    ],
    instructions: '시작점에서 출발하여 화살표로 단계들을 연결합니다. 결정 지점은 다이아몬드로, 과정은 사각형으로 나타냅니다.',
    subjects: ['math', 'science', 'practical_arts', 'social_studies'],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-t-chart',
    name: 'T-Chart',
    nameKo: 'T 차트',
    type: 'matrix',
    purpose: '두 가지 측면, 관점, 또는 범주를 비교합니다.',
    useCase: [
      '장단점 분석',
      '찬반 의견 정리',
      '사실과 의견 구분',
      '비교 대조'
    ],
    instructions: 'T 모양을 그리고 각 열에 비교할 두 범주의 항목들을 나열합니다.',
    subjects: ['all'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-web',
    name: 'Web Diagram',
    nameKo: '거미줄 다이어그램',
    type: 'web',
    purpose: '중심 주제와 관련된 아이디어들을 확장하여 브레인스토밍합니다.',
    useCase: [
      '브레인스토밍',
      '주제 탐색',
      '어휘 확장',
      '개념 탐구'
    ],
    instructions: '중심에 주제를 놓고, 관련 아이디어들을 방사형으로 연결합니다. 각 아이디어에서 다시 세부 아이디어를 확장할 수 있습니다.',
    subjects: ['all'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-sequence-chain',
    name: 'Sequence Chain',
    nameKo: '연속 사슬',
    type: 'sequence',
    purpose: '사건, 단계, 또는 과정의 순서를 나타냅니다.',
    useCase: [
      '이야기 순서',
      '역사적 사건 순서',
      '과정 설명',
      '인과관계 사슬'
    ],
    instructions: '상자들을 화살표로 연결하여 순서대로 사건이나 단계를 적습니다.',
    subjects: ['all'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-frayer-model',
    name: 'Frayer Model',
    nameKo: '프레이어 모델',
    type: 'matrix',
    purpose: '개념을 정의, 특성, 예시, 비예시로 분석하여 깊이 이해합니다.',
    useCase: [
      '어휘 학습',
      '개념 정의',
      '개념 분석',
      '오개념 교정'
    ],
    instructions: '4등분된 사각형 중앙에 개념을 놓고, 각 사분면에 정의, 특성, 예시, 비예시를 적습니다.',
    subjects: ['all'],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'go-pmiq',
    name: 'PMI Chart',
    nameKo: 'PMI 차트',
    type: 'matrix',
    purpose: '아이디어나 결정의 장점, 단점, 흥미로운 점을 분석합니다.',
    useCase: [
      '의사결정',
      '아이디어 평가',
      '비판적 분석',
      '토론 준비'
    ],
    instructions: 'P(Plus/긍정적), M(Minus/부정적), I(Interesting/흥미로운) 세 열에 해당 내용을 적습니다.',
    subjects: ['all'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school']
  }
];

export default {
  TEACHING_STRATEGIES,
  GRAPHIC_ORGANIZERS
};
