// 개념기반 수업을 위한 개념 렌즈 데이터
// 교사가 단원에 맞는 개념 렌즈를 선택할 수 있도록 카테고리별로 정리

export interface ConceptLens {
  id: string;
  name: string;
  nameEn: string;
  description: string; // 초등학생용 설명
  examples: string[]; // 적용 가능한 수업 예시
  category: ConceptLensCategory;
  keywords: string[]; // 관련 키워드 (추천 알고리즘용)
}

export type ConceptLensCategory =
  | 'change_movement'      // 변화와 움직임
  | 'relationship'         // 관계와 연결
  | 'structure_function'   // 구조와 기능
  | 'society_human'        // 사회와 인간
  | 'harmony_maintenance'; // 조화와 유지

export interface ConceptLensCategory_Info {
  id: ConceptLensCategory;
  name: string;
  description: string;
}

export const CONCEPT_LENS_CATEGORIES: ConceptLensCategory_Info[] = [
  {
    id: 'change_movement',
    name: '변화와 움직임',
    description: '아이들이 시간의 흐름이나 현상의 진행을 이해할 때 사용합니다. 가장 많이 쓰이는 카테고리입니다.'
  },
  {
    id: 'relationship',
    name: '관계와 연결',
    description: '나 혼자가 아니라 주변과 어떻게 얽혀있는지 파악할 때 사용합니다.'
  },
  {
    id: 'structure_function',
    name: '구조와 기능 (시스템적 사고)',
    description: '대상이 어떻게 생겼고 무슨 일을 하는지 뜯어볼 때 사용합니다.'
  },
  {
    id: 'society_human',
    name: '사회와 인간 (인문/사회적 사고)',
    description: '사람들의 생각, 갈등, 삶의 방식을 이해할 때 사용합니다.'
  },
  {
    id: 'harmony_maintenance',
    name: '조화와 유지',
    description: '어떤 상태가 유지되거나 생존하는 원리를 배울 때 사용합니다.'
  }
];

export const CONCEPT_LENSES: ConceptLens[] = [
  // ========== 1. 변화와 움직임 (가장 많이 쓰임) ==========
  {
    id: 'change',
    name: '변화',
    nameEn: 'Change',
    description: '시간이 지나면서 달라지는 것',
    examples: ['계절의 변화', '올챙이의 성장', '우리 고장의 옛날과 오늘'],
    category: 'change_movement',
    keywords: ['성장', '발달', '진화', '변천', '시간', '역사', '과거', '현재', '미래', '발전', '퇴화', '생장', '노화']
  },
  {
    id: 'cycle',
    name: '순환',
    nameEn: 'Cycle',
    description: '돌고 도는 과정, 반복되는 것',
    examples: ['물의 여행', '식물의 한살이', '시계와 달력'],
    category: 'change_movement',
    keywords: ['반복', '주기', '물의 순환', '생태계', '계절', '일년', '하루', '생애주기', '재활용', '순서']
  },
  {
    id: 'pattern',
    name: '패턴',
    nameEn: 'Pattern',
    description: '규칙적으로 반복되는 모양이나 성질',
    examples: ['구구단', '시의 운율', '타일 무늬', '계절의 반복'],
    category: 'change_movement',
    keywords: ['규칙', '반복', '대칭', '무늬', '리듬', '운율', '규칙성', '수열', '배열', '질서']
  },
  {
    id: 'process',
    name: '과정',
    nameEn: 'Process',
    description: '어떤 일이 일어나는 순서나 단계',
    examples: ['요리 순서', '법이 만들어지는 과정', '문제 해결 단계'],
    category: 'change_movement',
    keywords: ['순서', '단계', '절차', '방법', '만들기', '제작', '실험', '조사', '탐구', '절차']
  },

  // ========== 2. 관계와 연결 ==========
  {
    id: 'relationship',
    name: '관계',
    nameEn: 'Relationship',
    description: '둘 이상이 서로 맺고 있는 관련',
    examples: ['가족 관계', '수의 크기 비교', '낱말 사이의 관계'],
    category: 'relationship',
    keywords: ['가족', '친구', '연결', '비교', '관련', '유사', '차이', '대조', '상관', '의존']
  },
  {
    id: 'interaction',
    name: '상호작용',
    nameEn: 'Interaction',
    description: '서로 영향을 주고받는 것',
    examples: ['자석의 밀고 당기기', '친구와의 대화', '무역(수출입)'],
    category: 'relationship',
    keywords: ['영향', '소통', '교류', '협력', '대화', '무역', '교환', '힘', '작용', '반작용']
  },
  {
    id: 'causality',
    name: '인과관계',
    nameEn: 'Causality',
    description: '원인과 결과',
    examples: ['환경 오염과 기후 위기', '역사적 사건의 원인과 결과'],
    category: 'relationship',
    keywords: ['원인', '결과', '이유', '때문에', '영향', '효과', '결론', '근거', '증거', '추론']
  },
  {
    id: 'connection',
    name: '연결',
    nameEn: 'Connection',
    description: '서로 이어져 있는 것',
    examples: ['지구촌 사회', '인터넷 통신망', '교통 수단'],
    category: 'relationship',
    keywords: ['네트워크', '통신', '교통', '세계화', '연합', '통합', '다리', '매개', '링크', '고리']
  },

  // ========== 3. 구조와 기능 (시스템적 사고) ==========
  {
    id: 'structure',
    name: '구조',
    nameEn: 'Structure',
    description: '무엇으로 이루어져 있는지(짜임)',
    examples: ['문단의 짜임', '식물의 구조(뿌리/줄기/잎)', '건축물'],
    category: 'structure_function',
    keywords: ['구성', '짜임', '조직', '부분', '전체', '골격', '틀', '체계', '배치', '형성']
  },
  {
    id: 'function',
    name: '기능',
    nameEn: 'Function',
    description: '어떤 일을 하는지(역할)',
    examples: ['우리 몸 기관이 하는 일', '국회/정부가 하는 일'],
    category: 'structure_function',
    keywords: ['역할', '기능', '용도', '쓰임', '목적', '작용', '임무', '일', '하는 일', '효용']
  },
  {
    id: 'system',
    name: '시스템',
    nameEn: 'System',
    description: '부분들이 모여 전체로 작동하는 것',
    examples: ['태양계', '소화 기관', '학급 규칙 시스템'],
    category: 'structure_function',
    keywords: ['체계', '전체', '통합', '연동', '협력', '조직', '기관', '제도', '네트워크', '복합']
  },
  {
    id: 'form',
    name: '형태',
    nameEn: 'Form',
    description: '겉으로 드러난 모양이나 특징',
    examples: ['도형의 성질', '지형의 생김새', '물질의 상태(고/액/기)'],
    category: 'structure_function',
    keywords: ['모양', '형태', '외형', '생김새', '특징', '성질', '속성', '상태', '도형', '입체']
  },

  // ========== 4. 사회와 인간 (인문/사회적 사고) ==========
  {
    id: 'perspective',
    name: '관점',
    nameEn: 'Perspective',
    description: '보는 위치나 생각에 따라 다른 것',
    examples: ['이야기 속 인물의 마음', '기행문(견문/감상)', '역사 해석'],
    category: 'society_human',
    keywords: ['시각', '입장', '견해', '생각', '해석', '의견', '판단', '평가', '다양성', '차이']
  },
  {
    id: 'conflict',
    name: '갈등',
    nameEn: 'Conflict',
    description: '서로 생각이 다르거나 부딪히는 것',
    examples: ['친구와의 다툼 해결', '임진왜란', '층간 소음 문제'],
    category: 'society_human',
    keywords: ['다툼', '분쟁', '대립', '전쟁', '문제', '해결', '협상', '타협', '갈등', '충돌']
  },
  {
    id: 'culture',
    name: '문화',
    nameEn: 'Culture',
    description: '사람들이 함께 살아가는 방식',
    examples: ['세계 여러 나라의 축제', '의식주 생활', '세시풍속'],
    category: 'society_human',
    keywords: ['전통', '풍습', '관습', '생활', '축제', '음식', '옷', '집', '예술', '다문화']
  },
  {
    id: 'responsibility',
    name: '책임',
    nameEn: 'Responsibility',
    description: '내가 맡은 일이나 의무',
    examples: ['학급 1인 1역', '환경 보호 실천', '시민의 의무'],
    category: 'society_human',
    keywords: ['의무', '역할', '권리', '시민', '참여', '봉사', '실천', '약속', '규칙', '도덕']
  },
  {
    id: 'power',
    name: '권력/힘',
    nameEn: 'Power',
    description: '남에게 영향을 미치는 힘',
    examples: ['선거와 투표', '에너지(과학적 힘)', '왕권의 강화'],
    category: 'society_human',
    keywords: ['영향력', '권한', '힘', '에너지', '통치', '지배', '민주주의', '선거', '리더십', '권위']
  },

  // ========== 5. 조화와 유지 ==========
  {
    id: 'balance',
    name: '균형',
    nameEn: 'Balance',
    description: '어느 한쪽으로 치우치지 않는 것',
    examples: ['식단(영양소)', '시소 타기', '생태계 평형', '권력 분립'],
    category: 'harmony_maintenance',
    keywords: ['평형', '균등', '공평', '조화', '영양', '건강', '안정', '중용', '배분', '비율']
  },
  {
    id: 'adaptation',
    name: '적응',
    nameEn: 'Adaptation',
    description: '환경에 맞추어 변하거나 익숙해지는 것',
    examples: ['동물의 겨울잠', '선인장의 가시', '촌락의 생활 모습'],
    category: 'harmony_maintenance',
    keywords: ['환경', '생존', '진화', '변화', '맞춤', '극복', '대응', '조절', '습관', '적합']
  },
  {
    id: 'order',
    name: '질서',
    nameEn: 'Order',
    description: '정해진 순서나 규칙이 있는 상태',
    examples: ['공공장소 예절', '법과 규칙', '차례 지키기'],
    category: 'harmony_maintenance',
    keywords: ['규칙', '법', '예절', '순서', '차례', '약속', '제도', '체계', '정리', '조직']
  }
];

// 과목별 추천 개념 렌즈 매핑 (우선순위대로)
export const SUBJECT_CONCEPT_LENS_MAP: Record<string, string[]> = {
  // 국어
  'korean': ['perspective', 'structure', 'pattern', 'culture', 'relationship'],

  // 수학
  'math': ['pattern', 'structure', 'relationship', 'process', 'form'],

  // 사회
  'social': ['change', 'relationship', 'culture', 'conflict', 'responsibility', 'power', 'perspective'],

  // 과학
  'science': ['change', 'cycle', 'system', 'structure', 'function', 'causality', 'adaptation', 'interaction'],

  // 도덕
  'moral': ['responsibility', 'relationship', 'conflict', 'balance', 'order', 'culture'],

  // 음악
  'music': ['pattern', 'culture', 'form', 'structure', 'perspective'],

  // 미술
  'art': ['form', 'perspective', 'culture', 'pattern', 'structure'],

  // 체육
  'pe': ['balance', 'process', 'interaction', 'adaptation', 'system'],

  // 실과
  'practical': ['process', 'system', 'function', 'responsibility', 'adaptation'],

  // 영어
  'english': ['culture', 'pattern', 'structure', 'relationship', 'connection'],
};

// 키워드 기반 개념 렌즈 추천 함수
export function recommendConceptLenses(
  subject: string,
  unitName: string,
  objectives: string[],
  count: number = 3
): ConceptLens[] {
  // 1. 과목 기반 기본 추천 렌즈 가져오기
  const subjectLenses = SUBJECT_CONCEPT_LENS_MAP[subject] || [];

  // 2. 단원명과 학습목표에서 키워드 추출
  const textToAnalyze = [unitName, ...objectives].join(' ').toLowerCase();

  // 3. 각 개념 렌즈의 점수 계산
  const lensScores: { lens: ConceptLens; score: number }[] = CONCEPT_LENSES.map(lens => {
    let score = 0;

    // 과목 기반 기본 점수 (순위에 따라)
    const subjectIndex = subjectLenses.indexOf(lens.id);
    if (subjectIndex !== -1) {
      score += (10 - subjectIndex); // 첫 번째 추천은 10점, 두 번째는 9점...
    }

    // 키워드 매칭 점수
    lens.keywords.forEach(keyword => {
      if (textToAnalyze.includes(keyword)) {
        score += 3;
      }
    });

    // 예시 매칭 점수
    lens.examples.forEach(example => {
      if (textToAnalyze.includes(example) || example.includes(unitName)) {
        score += 5;
      }
    });

    // 개념 렌즈 이름 매칭
    if (textToAnalyze.includes(lens.name)) {
      score += 10;
    }

    return { lens, score };
  });

  // 4. 점수 순으로 정렬하고 상위 N개 반환
  return lensScores
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(item => item.lens);
}

// ID로 개념 렌즈 찾기
export function getConceptLensById(id: string): ConceptLens | undefined {
  return CONCEPT_LENSES.find(lens => lens.id === id);
}

// 카테고리로 개념 렌즈 필터링
export function getConceptLensesByCategory(category: ConceptLensCategory): ConceptLens[] {
  return CONCEPT_LENSES.filter(lens => lens.category === category);
}
