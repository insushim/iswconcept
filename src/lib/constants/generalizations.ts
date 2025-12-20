// 일반화 문장 템플릿 - 개념 렌즈별, 과목별 일반화 문장 예시
// 교사가 선택하거나 참고하여 수정할 수 있음

export interface GeneralizationTemplate {
  id: string;
  conceptLens: string; // 개념 렌즈 ID
  subject?: string; // 특정 과목용 (없으면 범용)
  template: string; // 일반화 문장 템플릿
  examples: string[]; // 구체적 예시
  gradeRange?: [number, number]; // 적용 가능 학년 범위
}

// 개념 렌즈별 일반화 문장 템플릿
export const GENERALIZATION_TEMPLATES: GeneralizationTemplate[] = [
  // ========== 변화 (Change) ==========
  {
    id: 'change-1',
    conceptLens: 'change',
    template: '모든 것은 시간이 지나면 변화한다.',
    examples: [
      '계절이 바뀌면 우리 생활도 달라진다.',
      '나도 자라면서 생각과 행동이 변한다.',
      '우리 동네도 옛날과 지금이 다르다.',
    ],
  },
  {
    id: 'change-2',
    conceptLens: 'change',
    template: '변화는 원인이 있고, 그 결과로 새로운 상태가 된다.',
    examples: [
      '씨앗에 물을 주면 싹이 트고 자란다.',
      '열심히 연습하면 실력이 늘어난다.',
      '환경이 변하면 생물도 적응하거나 사라진다.',
    ],
  },
  {
    id: 'change-3',
    conceptLens: 'change',
    template: '변화를 이해하면 미래를 예측하고 준비할 수 있다.',
    examples: [
      '날씨 변화를 알면 옷차림을 준비할 수 있다.',
      '역사를 배우면 미래를 더 잘 준비할 수 있다.',
    ],
  },

  // ========== 순환 (Cycle) ==========
  {
    id: 'cycle-1',
    conceptLens: 'cycle',
    template: '자연과 생활 속에는 반복되는 순환이 있다.',
    examples: [
      '물은 증발하고 비가 되어 다시 내려온다.',
      '봄-여름-가을-겨울이 매년 반복된다.',
      '낮과 밤이 번갈아 찾아온다.',
    ],
  },
  {
    id: 'cycle-2',
    conceptLens: 'cycle',
    template: '순환은 균형을 유지하고 지속 가능하게 한다.',
    examples: [
      '음식물 쓰레기를 퇴비로 만들면 다시 식물을 키울 수 있다.',
      '재활용을 하면 자원을 계속 사용할 수 있다.',
    ],
  },

  // ========== 패턴 (Pattern) ==========
  {
    id: 'pattern-1',
    conceptLens: 'pattern',
    template: '규칙적인 패턴을 찾으면 다음을 예측할 수 있다.',
    examples: [
      '구구단에서 규칙을 찾으면 계산이 쉬워진다.',
      '음악에서 반복되는 리듬을 찾으면 노래를 더 잘 부를 수 있다.',
    ],
  },
  {
    id: 'pattern-2',
    conceptLens: 'pattern',
    template: '패턴은 복잡한 것을 단순하게 이해하도록 돕는다.',
    examples: [
      '글의 구조 패턴을 알면 읽기가 쉬워진다.',
      '수의 패턴을 이해하면 큰 수도 다룰 수 있다.',
    ],
  },

  // ========== 관계 (Relationship) ==========
  {
    id: 'relationship-1',
    conceptLens: 'relationship',
    template: '모든 것은 서로 연결되어 영향을 주고받는다.',
    examples: [
      '가족 구성원은 서로 도우며 살아간다.',
      '생태계에서 동물과 식물은 서로 의존한다.',
      '친구와 나는 서로에게 영향을 준다.',
    ],
  },
  {
    id: 'relationship-2',
    conceptLens: 'relationship',
    template: '좋은 관계를 유지하려면 서로 배려하고 소통해야 한다.',
    examples: [
      '친구와 사이좋게 지내려면 상대방 마음을 이해해야 한다.',
      '가족 간에 대화를 많이 하면 더 가까워진다.',
    ],
  },

  // ========== 상호작용 (Interaction) ==========
  {
    id: 'interaction-1',
    conceptLens: 'interaction',
    template: '상호작용을 통해 새로운 결과가 만들어진다.',
    examples: [
      '친구들과 함께하면 혼자보다 더 좋은 결과를 만들 수 있다.',
      '여러 재료가 만나면 새로운 음식이 된다.',
    ],
  },

  // ========== 인과관계 (Causality) ==========
  {
    id: 'causality-1',
    conceptLens: 'causality',
    template: '모든 결과에는 원인이 있다.',
    examples: [
      '환경을 오염시키면 동식물이 피해를 입는다.',
      '규칙적으로 운동하면 건강해진다.',
      '꾸준히 노력하면 목표를 이룰 수 있다.',
    ],
  },
  {
    id: 'causality-2',
    conceptLens: 'causality',
    template: '원인을 알면 문제를 해결하고 결과를 바꿀 수 있다.',
    examples: [
      '싸움의 원인을 알면 화해할 수 있다.',
      '실패의 원인을 찾으면 다음에 성공할 수 있다.',
    ],
  },

  // ========== 구조 (Structure) ==========
  {
    id: 'structure-1',
    conceptLens: 'structure',
    template: '구조를 알면 전체를 이해하고 활용할 수 있다.',
    examples: [
      '글의 구조를 알면 내용을 더 잘 이해할 수 있다.',
      '우리 몸의 구조를 알면 건강을 지킬 수 있다.',
    ],
  },
  {
    id: 'structure-2',
    conceptLens: 'structure',
    template: '부분이 모여 전체를 이루고, 각 부분은 역할이 있다.',
    examples: [
      '학급에서 각자의 역할이 모여 좋은 반을 만든다.',
      '악기마다 역할이 있어 아름다운 합주가 된다.',
    ],
  },

  // ========== 기능 (Function) ==========
  {
    id: 'function-1',
    conceptLens: 'function',
    template: '모든 것에는 목적과 기능이 있다.',
    examples: [
      '학교의 여러 시설은 각각 다른 역할을 한다.',
      '우리 몸의 각 기관은 중요한 일을 맡고 있다.',
    ],
  },

  // ========== 시스템 (System) ==========
  {
    id: 'system-1',
    conceptLens: 'system',
    template: '시스템 안에서 각 부분은 서로 연결되어 전체가 작동한다.',
    examples: [
      '우리 반도 하나의 시스템처럼 서로 협력해야 잘 운영된다.',
      '컴퓨터의 여러 부품이 함께 작동해야 프로그램이 실행된다.',
    ],
  },
  {
    id: 'system-2',
    conceptLens: 'system',
    template: '한 부분이 바뀌면 전체 시스템에 영향을 준다.',
    examples: [
      '한 명이 규칙을 어기면 모둠 전체가 어려워진다.',
      '생태계에서 한 생물이 사라지면 다른 생물도 영향받는다.',
    ],
  },

  // ========== 관점 (Perspective) ==========
  {
    id: 'perspective-1',
    conceptLens: 'perspective',
    template: '같은 것도 보는 관점에 따라 다르게 이해된다.',
    examples: [
      '같은 사건도 사람마다 다르게 기억할 수 있다.',
      '이야기 속 인물들은 각자 다른 생각을 가지고 있다.',
    ],
  },
  {
    id: 'perspective-2',
    conceptLens: 'perspective',
    template: '다양한 관점을 이해하면 더 넓게 생각할 수 있다.',
    examples: [
      '친구의 입장에서 생각하면 갈등을 해결할 수 있다.',
      '여러 나라 사람들의 생각을 알면 세상을 더 잘 이해할 수 있다.',
    ],
  },

  // ========== 갈등 (Conflict) ==========
  {
    id: 'conflict-1',
    conceptLens: 'conflict',
    template: '갈등은 서로 다른 생각이 부딪힐 때 생긴다.',
    examples: [
      '친구와 의견이 다르면 다툴 수 있다.',
      '나라와 나라 사이에도 이익이 다르면 갈등이 생긴다.',
    ],
  },
  {
    id: 'conflict-2',
    conceptLens: 'conflict',
    template: '갈등을 잘 해결하면 더 좋은 관계가 될 수 있다.',
    examples: [
      '대화로 오해를 풀면 친구와 더 가까워진다.',
      '서로 양보하면 모두가 만족하는 결과를 얻을 수 있다.',
    ],
  },

  // ========== 문화 (Culture) ==========
  {
    id: 'culture-1',
    conceptLens: 'culture',
    template: '문화는 사람들의 생활 방식과 가치를 담고 있다.',
    examples: [
      '명절 음식에는 조상들의 지혜가 담겨 있다.',
      '전통 놀이에는 옛 사람들의 생활이 담겨 있다.',
    ],
  },
  {
    id: 'culture-2',
    conceptLens: 'culture',
    template: '다양한 문화를 존중하면 함께 어울려 살 수 있다.',
    examples: [
      '다른 나라 친구의 문화를 이해하면 더 친해질 수 있다.',
      '서로 다른 문화가 만나 새로운 것이 탄생하기도 한다.',
    ],
  },

  // ========== 책임 (Responsibility) ==========
  {
    id: 'responsibility-1',
    conceptLens: 'responsibility',
    template: '공동체의 일원으로서 각자 책임을 다해야 한다.',
    examples: [
      '내 역할을 잘하면 우리 반이 더 좋아진다.',
      '약속을 지키면 친구들이 나를 믿는다.',
    ],
  },
  {
    id: 'responsibility-2',
    conceptLens: 'responsibility',
    template: '작은 실천이 모여 큰 변화를 만든다.',
    examples: [
      '한 사람씩 쓰레기를 줍으면 깨끗한 환경이 된다.',
      '매일 조금씩 공부하면 실력이 크게 는다.',
    ],
  },

  // ========== 균형 (Balance) ==========
  {
    id: 'balance-1',
    conceptLens: 'balance',
    template: '균형을 유지해야 건강하고 안정적이다.',
    examples: [
      '공부와 놀이의 균형이 필요하다.',
      '영양소를 골고루 먹어야 건강하다.',
    ],
  },
  {
    id: 'balance-2',
    conceptLens: 'balance',
    template: '균형이 깨지면 문제가 생기고, 다시 맞추려고 노력해야 한다.',
    examples: [
      '생태계 균형이 깨지면 동식물이 피해를 입는다.',
      '휴식 없이 일만 하면 건강이 나빠진다.',
    ],
  },

  // ========== 적응 (Adaptation) ==========
  {
    id: 'adaptation-1',
    conceptLens: 'adaptation',
    template: '환경에 적응하면 살아남고 성장할 수 있다.',
    examples: [
      '새 학년이 되면 새로운 환경에 적응해야 한다.',
      '동물들은 환경에 맞게 몸과 행동이 변한다.',
    ],
  },

  // ========== 질서 (Order) ==========
  {
    id: 'order-1',
    conceptLens: 'order',
    template: '규칙과 질서가 있어야 함께 살아갈 수 있다.',
    examples: [
      '교통 규칙을 지켜야 안전하게 다닐 수 있다.',
      '학급 규칙이 있어야 모두가 편하게 생활할 수 있다.',
    ],
  },

  // ========== 과정 (Process) ==========
  {
    id: 'process-1',
    conceptLens: 'process',
    template: '올바른 과정을 거쳐야 좋은 결과를 얻을 수 있다.',
    examples: [
      '요리 순서를 잘 따라야 맛있는 음식이 된다.',
      '문제를 차근차근 풀어야 정답을 찾을 수 있다.',
    ],
  },

  // ========== 형태 (Form) ==========
  {
    id: 'form-1',
    conceptLens: 'form',
    template: '형태와 특징을 관찰하면 분류하고 이해할 수 있다.',
    examples: [
      '도형의 모양을 보고 종류를 알 수 있다.',
      '생물의 생김새를 보고 어떤 종류인지 알 수 있다.',
    ],
  },

  // ========== 연결 (Connection) ==========
  {
    id: 'connection-1',
    conceptLens: 'connection',
    template: '세상은 보이지 않는 연결로 이어져 있다.',
    examples: [
      '인터넷으로 전 세계 사람들과 소통할 수 있다.',
      '내가 사용하는 물건은 여러 나라를 거쳐 온다.',
    ],
  },

  // ========== 힘/권력 (Power) ==========
  {
    id: 'power-1',
    conceptLens: 'power',
    template: '힘과 권한에는 책임이 따른다.',
    examples: [
      '반장은 권한이 있지만 책임도 크다.',
      '어른이 되면 할 수 있는 일이 많아지지만 책임도 커진다.',
    ],
  },
];

// 개념 렌즈 ID로 일반화 템플릿 가져오기
export function getGeneralizationsByLens(lensId: string): GeneralizationTemplate[] {
  return GENERALIZATION_TEMPLATES.filter(g => g.conceptLens === lensId);
}

// 과목과 개념 렌즈로 일반화 템플릿 가져오기
export function getGeneralizationsBySubjectAndLens(
  subject: string,
  lensId: string
): GeneralizationTemplate[] {
  return GENERALIZATION_TEMPLATES.filter(
    g => g.conceptLens === lensId && (!g.subject || g.subject === subject)
  );
}

// 모든 개념 렌즈 ID 목록
export function getAllConceptLensIds(): string[] {
  return [...new Set(GENERALIZATION_TEMPLATES.map(g => g.conceptLens))];
}
