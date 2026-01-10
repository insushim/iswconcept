// 평가 도구 및 전략 데이터베이스
// 형성평가, 총괄평가, 루브릭 템플릿

import type { AssessmentStrategy, RubricTemplate } from '../types/database';

// ============================================
// 평가 전략 (Assessment Strategies)
// ============================================
export const ASSESSMENT_STRATEGIES: AssessmentStrategy[] = [
  // 형성평가 전략
  {
    id: 'assess-exit-ticket',
    name: '출구 티켓',
    nameEn: 'Exit Ticket',
    description: '수업 마무리 시 학생들이 짧은 응답을 작성하여 이해도를 확인하는 전략',
    type: 'formative',
    purpose: 'check_understanding',
    instructions: '수업 종료 5분 전, 학생들에게 오늘 배운 핵심 내용이나 남은 질문을 카드에 작성하게 합니다. 제출된 응답을 검토하여 다음 수업을 계획합니다.',
    examples: [
      '오늘 배운 가장 중요한 것은 무엇인가요?',
      '여전히 궁금한 점은 무엇인가요?',
      '오늘 배운 것을 한 문장으로 요약해 보세요.',
      '3-2-1: 3가지 배운 것, 2가지 질문, 1가지 적용 아이디어'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-think-pair-share',
    name: '생각-짝-공유',
    nameEn: 'Think-Pair-Share',
    description: '개별 사고 후 짝과 토론하고 전체와 공유하는 협력적 평가 전략',
    type: 'formative',
    purpose: 'check_understanding',
    instructions: '1) 질문을 제시하고 개별적으로 생각할 시간(1-2분) 제공, 2) 짝과 아이디어 공유(2-3분), 3) 전체 학급과 토론',
    examples: [
      '이 개념을 실생활에서 어디서 볼 수 있을까요?',
      '왜 이런 결과가 나왔을까요?',
      '이 문제를 다른 방법으로 풀 수 있을까요?'
    ],
    suitableFor: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-muddiest-point',
    name: '가장 혼란스러운 점',
    nameEn: 'Muddiest Point',
    description: '학생들이 가장 이해하기 어려웠던 부분을 파악하는 전략',
    type: 'formative',
    purpose: 'check_understanding',
    instructions: '수업 후 학생들에게 가장 혼란스럽거나 불분명했던 부분을 적게 합니다. 응답을 분류하여 다음 수업에서 해당 내용을 다시 다룹니다.',
    examples: [
      '오늘 수업에서 가장 이해하기 어려웠던 부분은 무엇인가요?',
      '더 설명이 필요한 부분은 어디인가요?',
      '아직 자신이 없는 개념은 무엇인가요?'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-concept-map',
    name: '개념 지도',
    nameEn: 'Concept Map',
    description: '개념들 간의 관계를 시각적으로 표현하여 이해를 보여주는 전략',
    type: 'formative',
    purpose: 'evaluate_thinking',
    instructions: '핵심 개념을 중앙에 놓고, 관련 개념들을 연결하며 관계를 설명하는 라벨을 추가합니다. 연결의 정확성과 깊이를 평가합니다.',
    examples: [
      '생태계 개념 지도 만들기',
      '역사적 사건들의 인과관계 지도',
      '수학 개념들의 연결 관계'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-four-corners',
    name: '네 모퉁이',
    nameEn: 'Four Corners',
    description: '교실 네 모퉁이에 다른 의견을 배치하고 학생들이 자신의 입장으로 이동하는 활동적 평가',
    type: 'formative',
    purpose: 'check_understanding',
    instructions: '논쟁적 질문에 대해 4가지 입장(강하게 동의, 동의, 반대, 강하게 반대)을 교실 모퉁이에 배치합니다. 학생들은 자신의 입장으로 이동하고 이유를 설명합니다.',
    examples: [
      '이 결정이 최선이었다고 생각하나요?',
      '이 과학적 발견은 사회에 긍정적인가요?',
      '이 정책은 공정한가요?'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-quick-write',
    name: '빠른 글쓰기',
    nameEn: 'Quick Write',
    description: '짧은 시간 동안 주제에 대해 자유롭게 쓰는 평가 전략',
    type: 'formative',
    purpose: 'check_understanding',
    instructions: '3-5분 동안 주어진 프롬프트에 대해 멈추지 않고 씁니다. 문법이나 철자보다 아이디어에 집중합니다.',
    examples: [
      '이 개념이 왜 중요한지 설명해 보세요',
      '오늘 배운 것과 이전에 알던 것의 연결',
      '이 개념을 비유로 설명해 보세요'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-self-assessment',
    name: '자기 평가',
    nameEn: 'Self-Assessment',
    description: '학생이 자신의 학습과 진도를 스스로 평가하는 전략',
    type: 'self_assessment',
    purpose: 'check_understanding',
    instructions: '명확한 기준(루브릭)을 제공하고, 학생들이 자신의 작업을 해당 기준에 비추어 평가하게 합니다. 증거와 함께 자기 평가를 정당화하도록 합니다.',
    examples: [
      '학습 목표 달성도 체크리스트',
      '신호등 자기 평가 (빨강-노랑-초록)',
      '반성적 저널 쓰기'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-peer-assessment',
    name: '동료 평가',
    nameEn: 'Peer Assessment',
    description: '학생들이 서로의 작업을 평가하고 피드백을 제공하는 전략',
    type: 'peer_assessment',
    purpose: 'check_understanding',
    instructions: '명확한 기준을 공유하고, 건설적인 피드백 제공 방법을 가르칩니다. 학생들이 동료의 작업을 기준에 따라 평가하고 구체적인 피드백을 제공합니다.',
    examples: [
      '발표 평가 시트',
      '글쓰기 피드백 카드',
      '갤러리 워크 피드백'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-portfolio',
    name: '포트폴리오',
    nameEn: 'Portfolio',
    description: '시간에 걸친 학생 작업을 수집하여 성장과 성취를 보여주는 평가',
    type: 'summative',
    purpose: 'measure_transfer',
    instructions: '학기 동안 학생 작업의 베스트 샘플이나 성장을 보여주는 작업을 수집합니다. 정기적인 성찰과 선택 이유 설명을 포함합니다.',
    examples: [
      '학습 성장 포트폴리오',
      '최고 작품 포트폴리오',
      '디지털 포트폴리오'
    ],
    suitableFor: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'assess-performance-task',
    name: '수행 과제',
    nameEn: 'Performance Task',
    description: '실제적인 맥락에서 지식과 기술의 적용을 요구하는 복잡한 과제',
    type: 'summative',
    purpose: 'measure_transfer',
    instructions: '실제 세계의 문제나 시나리오를 제시합니다. 학생들은 지식과 기술을 적용하여 산출물이나 수행을 만들어냅니다. 루브릭으로 평가합니다.',
    examples: [
      '과학 실험 설계 및 수행',
      '지역사회 문제 해결 프로젝트',
      '역사적 인물 모의 재판'
    ],
    suitableFor: ['elementary_upper', 'middle_school', 'high_school']
  }
];

// ============================================
// 루브릭 템플릿 (Rubric Templates)
// ============================================
export const RUBRIC_TEMPLATES: RubricTemplate[] = [
  {
    id: 'rubric-conceptual-understanding',
    title: '개념적 이해 평가 루브릭',
    type: 'analytic',
    criteria: [
      {
        name: '개념 파악',
        description: '핵심 개념을 정확하게 이해하고 설명하는 능력',
        weight: 25
      },
      {
        name: '관계 이해',
        description: '개념들 간의 관계와 연결을 이해하는 능력',
        weight: 25
      },
      {
        name: '일반화 도출',
        description: '개념적 이해를 바탕으로 일반화를 도출하는 능력',
        weight: 25
      },
      {
        name: '전이 적용',
        description: '이해를 새로운 맥락에 적용하는 능력',
        weight: 25
      }
    ],
    levels: [
      { level: 4, label: '탁월함', description: '깊고 정교한 이해를 보여주며, 독창적인 통찰을 제시함' },
      { level: 3, label: '능숙함', description: '명확한 이해를 보여주며, 적절한 예시와 설명을 제공함' },
      { level: 2, label: '발전 중', description: '기본적인 이해를 보여주나, 일부 오해나 불완전함이 있음' },
      { level: 1, label: '시작 단계', description: '제한적인 이해를 보여주며, 상당한 지원이 필요함' }
    ],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'rubric-inquiry-process',
    title: '탐구 과정 평가 루브릭',
    type: 'analytic',
    criteria: [
      {
        name: '질문 생성',
        description: '의미 있고 탐구 가능한 질문을 생성하는 능력',
        weight: 20
      },
      {
        name: '정보 수집',
        description: '다양한 출처에서 관련 정보를 수집하는 능력',
        weight: 20
      },
      {
        name: '분석 및 해석',
        description: '정보를 분석하고 의미를 해석하는 능력',
        weight: 20
      },
      {
        name: '결론 도출',
        description: '증거를 바탕으로 논리적인 결론을 도출하는 능력',
        weight: 20
      },
      {
        name: '소통 및 표현',
        description: '탐구 결과를 효과적으로 소통하는 능력',
        weight: 20
      }
    ],
    levels: [
      { level: 4, label: '탁월함', description: '독립적이고 창의적인 탐구를 수행함' },
      { level: 3, label: '능숙함', description: '체계적인 탐구를 수행하고 명확하게 소통함' },
      { level: 2, label: '발전 중', description: '탐구 과정을 따르나 일부 지원이 필요함' },
      { level: 1, label: '시작 단계', description: '탐구 과정에 상당한 안내와 지원이 필요함' }
    ],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'rubric-critical-thinking',
    title: '비판적 사고 평가 루브릭',
    type: 'analytic',
    criteria: [
      {
        name: '분석',
        description: '정보와 아이디어를 분석하고 분해하는 능력',
        weight: 25
      },
      {
        name: '증거 사용',
        description: '주장을 뒷받침하기 위해 증거를 사용하는 능력',
        weight: 25
      },
      {
        name: '관점 고려',
        description: '다양한 관점을 인식하고 고려하는 능력',
        weight: 25
      },
      {
        name: '평가 및 판단',
        description: '정보와 주장을 평가하고 합리적 판단을 내리는 능력',
        weight: 25
      }
    ],
    levels: [
      { level: 4, label: '탁월함', description: '정교하고 균형 잡힌 비판적 분석을 수행함' },
      { level: 3, label: '능숙함', description: '논리적이고 근거 있는 분석을 수행함' },
      { level: 2, label: '발전 중', description: '기본적인 분석을 하나 깊이가 부족함' },
      { level: 1, label: '시작 단계', description: '분석이 피상적이거나 불완전함' }
    ],
    gradeLevel: ['middle_school', 'high_school']
  },
  {
    id: 'rubric-collaboration',
    title: '협력 학습 평가 루브릭',
    type: 'analytic',
    criteria: [
      {
        name: '기여',
        description: '그룹 작업에 의미 있게 기여하는 능력',
        weight: 25
      },
      {
        name: '경청 및 존중',
        description: '다른 사람의 아이디어를 경청하고 존중하는 능력',
        weight: 25
      },
      {
        name: '문제 해결',
        description: '그룹 내 문제를 건설적으로 해결하는 능력',
        weight: 25
      },
      {
        name: '책임감',
        description: '맡은 역할에 대한 책임을 다하는 능력',
        weight: 25
      }
    ],
    levels: [
      { level: 4, label: '탁월함', description: '그룹을 이끌고 다른 사람들의 참여를 촉진함' },
      { level: 3, label: '능숙함', description: '적극적으로 참여하고 효과적으로 협력함' },
      { level: 2, label: '발전 중', description: '참여하나 더 적극적인 기여가 필요함' },
      { level: 1, label: '시작 단계', description: '협력에 어려움이 있으며 지원이 필요함' }
    ],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'rubric-single-point-understanding',
    title: '이해도 단일점 루브릭',
    type: 'single_point',
    criteria: [
      {
        name: '핵심 개념 이해',
        description: '수업의 핵심 개념을 정확하게 설명할 수 있다'
      },
      {
        name: '예시 제공',
        description: '개념을 설명하는 적절한 예시를 제공할 수 있다'
      },
      {
        name: '연결 만들기',
        description: '개념을 다른 아이디어나 경험과 연결할 수 있다'
      }
    ],
    levels: [
      { level: 0, label: '개선 필요', description: '기준에 아직 미치지 못함' },
      { level: 1, label: '기준 충족', description: '기대되는 수준을 충족함' },
      { level: 2, label: '기준 초과', description: '기대 수준을 넘어섬' }
    ],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school']
  },
  {
    id: 'rubric-presentation',
    title: '발표 평가 루브릭',
    type: 'analytic',
    criteria: [
      {
        name: '내용',
        description: '정보의 정확성, 깊이, 관련성',
        weight: 30
      },
      {
        name: '구성',
        description: '발표의 논리적 구성과 흐름',
        weight: 20
      },
      {
        name: '전달',
        description: '목소리, 눈 맞춤, 자세, 자신감',
        weight: 25
      },
      {
        name: '시각 자료',
        description: '시각 자료의 효과성과 적절성',
        weight: 15
      },
      {
        name: '청중 참여',
        description: '청중과의 상호작용 및 질문 처리',
        weight: 10
      }
    ],
    levels: [
      { level: 4, label: '탁월함', description: '매우 효과적이고 인상적인 발표' },
      { level: 3, label: '능숙함', description: '명확하고 효과적인 발표' },
      { level: 2, label: '발전 중', description: '기본 요건을 충족하나 개선 여지가 있음' },
      { level: 1, label: '시작 단계', description: '상당한 개선이 필요함' }
    ],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school']
  }
];

export default {
  ASSESSMENT_STRATEGIES,
  RUBRIC_TEMPLATES
};
