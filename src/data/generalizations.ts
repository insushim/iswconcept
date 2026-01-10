// 일반화(Generalizations) 데이터베이스
// 개념 간의 관계를 진술하는 전이 가능한 이해

import type { Generalization } from '../types/database';

export const GENERALIZATIONS: Generalization[] = [
  // ============================================
  // 범교과적 일반화 (Transdisciplinary)
  // ============================================
  {
    id: 'gen-change-systems',
    statement: '시스템 내 한 부분의 변화는 전체 시스템에 영향을 미친다.',
    statementEn: 'Change in one part of a system affects the entire system.',
    concepts: ['macro-system', 'pyp-change', 'pyp-connection'],
    subject: 'all',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'erickson',
    transferability: 'high'
  },
  {
    id: 'gen-patterns-predict',
    statement: '패턴을 인식하면 미래의 사건이나 결과를 예측할 수 있다.',
    statementEn: 'Recognizing patterns helps us predict future events or outcomes.',
    concepts: ['macro-pattern', 'ngss-patterns'],
    subject: 'all',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'erickson',
    transferability: 'high'
  },
  {
    id: 'gen-structure-function',
    statement: '사물의 구조는 그 기능을 결정하고, 기능은 구조를 형성하는 데 영향을 미친다.',
    statementEn: 'Structure determines function, and function influences the development of structure.',
    concepts: ['ngss-structure-function', 'pyp-form', 'pyp-function'],
    subject: 'all',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'erickson',
    transferability: 'high'
  },
  {
    id: 'gen-perspective-understanding',
    statement: '다양한 관점을 고려하면 더 깊은 이해와 공정한 판단에 도달할 수 있다.',
    statementEn: 'Considering multiple perspectives leads to deeper understanding and fair judgment.',
    concepts: ['pyp-perspective', 'myp-perspective'],
    subject: 'all',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'erickson',
    transferability: 'high'
  },
  {
    id: 'gen-cause-effect-chain',
    statement: '원인과 결과는 연쇄적으로 작용하여 복잡한 결과를 만들어낸다.',
    statementEn: 'Cause and effect operate in chains, creating complex outcomes.',
    concepts: ['pyp-causation', 'ngss-cause-effect', 'hist-cause-consequence'],
    subject: 'all',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'erickson',
    transferability: 'high'
  },
  {
    id: 'gen-interdependence-survival',
    statement: '생명체와 시스템은 생존과 번영을 위해 서로 의존한다.',
    statementEn: 'Living things and systems depend on each other for survival and prosperity.',
    concepts: ['macro-interdependence', 'pyp-connection'],
    subject: 'all',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'erickson',
    transferability: 'high'
  },
  {
    id: 'gen-balance-stability',
    statement: '균형은 시스템의 안정성을 유지하는 데 필수적이다.',
    statementEn: 'Balance is essential for maintaining stability in systems.',
    concepts: ['macro-balance', 'ngss-stability-change'],
    subject: 'all',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'erickson',
    transferability: 'high'
  },
  {
    id: 'gen-responsibility-action',
    statement: '우리의 행동에는 결과가 따르며, 이는 우리의 책임이다.',
    statementEn: 'Our actions have consequences, and we are responsible for them.',
    concepts: ['pyp-responsibility', 'hist-ethical'],
    subject: 'all',
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'ib_pyp',
    transferability: 'high'
  },

  // ============================================
  // 국어과 일반화
  // ============================================
  {
    id: 'gen-korean-audience',
    statement: '효과적인 의사소통은 청중과 목적에 맞게 언어를 조절하는 것을 필요로 한다.',
    statementEn: 'Effective communication requires adjusting language to suit the audience and purpose.',
    concepts: ['myp-communication', 'audience', 'purpose'],
    subject: 'korean',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-korean-perspective-text',
    statement: '텍스트는 저자의 관점과 목적을 반영하며, 독자는 이를 비판적으로 분석해야 한다.',
    statementEn: 'Texts reflect the author\'s perspective and purpose, and readers must analyze them critically.',
    concepts: ['myp-perspective', 'author', 'purpose'],
    subject: 'korean',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-korean-culture-language',
    statement: '언어는 문화를 반영하고 형성하며, 문화적 정체성의 핵심 요소이다.',
    statementEn: 'Language reflects and shapes culture, and is a key element of cultural identity.',
    concepts: ['myp-culture', 'myp-identity', 'myp-communication'],
    subject: 'korean',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-korean-structure-meaning',
    statement: '문학 작품의 구조와 형식은 의미를 전달하고 독자의 반응에 영향을 미친다.',
    statementEn: 'The structure and form of literary works convey meaning and influence reader response.',
    concepts: ['pyp-form', 'myp-form', 'structure'],
    subject: 'korean',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'medium'
  },

  // ============================================
  // 수학과 일반화
  // ============================================
  {
    id: 'gen-math-patterns-relationships',
    statement: '수학적 패턴은 수, 도형, 데이터 사이의 관계를 나타낸다.',
    statementEn: 'Mathematical patterns reveal relationships among numbers, shapes, and data.',
    concepts: ['macro-pattern', 'myp-relationships'],
    subject: 'math',
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-math-representation',
    statement: '수학적 아이디어는 다양한 방식(수, 그래프, 기호, 모델)으로 표현될 수 있으며, 각 표현은 서로 다른 통찰을 제공한다.',
    statementEn: 'Mathematical ideas can be represented in multiple ways (numbers, graphs, symbols, models), each providing different insights.',
    concepts: ['myp-communication', 'representation'],
    subject: 'math',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-math-structure-properties',
    statement: '수학적 구조는 일관된 속성과 규칙을 가지며, 이를 이해하면 새로운 문제를 해결할 수 있다.',
    statementEn: 'Mathematical structures have consistent properties and rules that, when understood, enable solving new problems.',
    concepts: ['macro-structure', 'myp-form'],
    subject: 'math',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-math-change-variables',
    statement: '변수 간의 관계를 이해하면 변화를 모델링하고 예측할 수 있다.',
    statementEn: 'Understanding relationships between variables allows us to model and predict change.',
    concepts: ['pyp-change', 'myp-relationships', 'variable'],
    subject: 'math',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },

  // ============================================
  // 과학과 일반화
  // ============================================
  {
    id: 'gen-science-energy-transformation',
    statement: '에너지는 형태를 변환하지만 전체 양은 보존된다.',
    statementEn: 'Energy transforms between forms but the total amount is conserved.',
    concepts: ['ngss-energy-matter', 'conservation'],
    subject: 'science',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'ngss',
    transferability: 'high'
  },
  {
    id: 'gen-science-adaptation',
    statement: '생물은 생존과 번식을 위해 환경에 적응한다.',
    statementEn: 'Living organisms adapt to their environment for survival and reproduction.',
    concepts: ['pyp-change', 'ngss-structure-function', 'adaptation'],
    subject: 'science',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'ngss',
    transferability: 'high'
  },
  {
    id: 'gen-science-matter-cycle',
    statement: '물질은 생태계 내에서 순환하며, 한 형태에서 다른 형태로 변환된다.',
    statementEn: 'Matter cycles through ecosystems, transforming from one form to another.',
    concepts: ['ngss-energy-matter', 'macro-system', 'cycle'],
    subject: 'science',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'ngss',
    transferability: 'high'
  },
  {
    id: 'gen-science-scale-observation',
    statement: '관찰 규모는 발견할 수 있는 패턴과 현상에 영향을 미친다.',
    statementEn: 'The scale of observation affects the patterns and phenomena we can discover.',
    concepts: ['ngss-scale-proportion', 'macro-pattern'],
    subject: 'science',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'ngss',
    transferability: 'medium'
  },
  {
    id: 'gen-science-model-limitation',
    statement: '모델은 시스템을 설명하고 예측하는 데 유용하지만 현실의 단순화된 표현이다.',
    statementEn: 'Models are useful for explaining and predicting systems but are simplified representations of reality.',
    concepts: ['ngss-systems', 'model', 'representation'],
    subject: 'science',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'ngss',
    transferability: 'high'
  },

  // ============================================
  // 사회과 일반화
  // ============================================
  {
    id: 'gen-social-geography-life',
    statement: '지리적 특성은 인간의 정착, 이동, 생활 방식에 영향을 미친다.',
    statementEn: 'Geographic features influence human settlement, migration, and ways of life.',
    concepts: ['myp-time-place-space', 'environment', 'adaptation'],
    subject: 'social_studies',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-social-power-governance',
    statement: '권력의 분배와 행사 방식은 사회 구조와 개인의 삶에 영향을 미친다.',
    statementEn: 'How power is distributed and exercised affects social structures and individual lives.',
    concepts: ['macro-power', 'governance', 'authority'],
    subject: 'social_studies',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-social-conflict-change',
    statement: '갈등은 사회 변화의 촉매제가 될 수 있으며, 새로운 구조와 관계를 만들어낸다.',
    statementEn: 'Conflict can be a catalyst for social change, creating new structures and relationships.',
    concepts: ['pyp-change', 'conflict', 'hist-cause-consequence'],
    subject: 'social_studies',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-social-economy-interdependence',
    statement: '경제 시스템은 생산, 분배, 소비의 상호의존적 관계에 기반한다.',
    statementEn: 'Economic systems are based on interdependent relationships of production, distribution, and consumption.',
    concepts: ['macro-interdependence', 'macro-system', 'economy'],
    subject: 'social_studies',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-social-culture-identity',
    statement: '문화는 집단의 정체성을 형성하고, 개인의 세계관과 가치관에 영향을 미친다.',
    statementEn: 'Culture shapes group identity and influences individual worldviews and values.',
    concepts: ['myp-culture', 'myp-identity', 'myp-perspective'],
    subject: 'social_studies',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-social-history-interpretation',
    statement: '역사적 사건은 다양한 관점에서 해석될 수 있으며, 해석은 시대와 맥락에 따라 변화한다.',
    statementEn: 'Historical events can be interpreted from multiple perspectives, and interpretations change with time and context.',
    concepts: ['hist-perspective', 'myp-perspective', 'hist-evidence'],
    subject: 'social_studies',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'historical_thinking',
    transferability: 'high'
  },

  // ============================================
  // 예술과 일반화
  // ============================================
  {
    id: 'gen-art-expression-communication',
    statement: '예술은 언어로 표현하기 어려운 아이디어와 감정을 전달하는 수단이다.',
    statementEn: 'Art is a means of communicating ideas and emotions that are difficult to express in words.',
    concepts: ['myp-creativity', 'myp-aesthetics', 'expression'],
    subject: 'art',
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'ib_myp',
    transferability: 'high'
  },
  {
    id: 'gen-art-culture-reflection',
    statement: '예술 작품은 그것이 창작된 시대와 문화를 반영한다.',
    statementEn: 'Art works reflect the time and culture in which they were created.',
    concepts: ['myp-culture', 'myp-time-place-space', 'context'],
    subject: 'art',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'ib_myp',
    transferability: 'high'
  },
  {
    id: 'gen-art-technique-meaning',
    statement: '예술가의 기법과 재료 선택은 작품의 의미와 감상자의 반응에 영향을 미친다.',
    statementEn: 'An artist\'s choice of technique and materials affects the meaning of the work and the viewer\'s response.',
    concepts: ['myp-form', 'myp-aesthetics', 'technique'],
    subject: 'art',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'ib_myp',
    transferability: 'medium'
  },

  // ============================================
  // 음악과 일반화
  // ============================================
  {
    id: 'gen-music-pattern-structure',
    statement: '음악은 패턴, 반복, 변형을 통해 구조를 만들고 의미를 전달한다.',
    statementEn: 'Music creates structure and conveys meaning through patterns, repetition, and variation.',
    concepts: ['macro-pattern', 'macro-structure', 'myp-form'],
    subject: 'music',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'ib_myp',
    transferability: 'high'
  },
  {
    id: 'gen-music-culture-expression',
    statement: '음악은 문화적 정체성을 표현하고 전승하는 수단이다.',
    statementEn: 'Music is a means of expressing and transmitting cultural identity.',
    concepts: ['myp-culture', 'myp-identity', 'expression'],
    subject: 'music',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'ib_myp',
    transferability: 'high'
  },

  // ============================================
  // 체육과 일반화
  // ============================================
  {
    id: 'gen-pe-body-function',
    statement: '신체 구조와 기능의 이해는 효과적인 움직임과 건강 관리의 기초가 된다.',
    statementEn: 'Understanding body structure and function is the foundation for effective movement and health management.',
    concepts: ['ngss-structure-function', 'pyp-form', 'health'],
    subject: 'physical_education',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-pe-practice-improvement',
    statement: '의도적인 연습과 피드백은 기술과 수행 능력의 향상을 가져온다.',
    statementEn: 'Deliberate practice and feedback lead to improvement in skills and performance.',
    concepts: ['myp-development', 'pyp-change', 'improvement'],
    subject: 'physical_education',
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },

  // ============================================
  // 도덕/윤리과 일반화
  // ============================================
  {
    id: 'gen-ethics-choice-consequence',
    statement: '윤리적 선택은 개인과 공동체에 결과를 가져오며, 책임 있는 결정을 요구한다.',
    statementEn: 'Ethical choices have consequences for individuals and communities, requiring responsible decision-making.',
    concepts: ['pyp-responsibility', 'hist-ethical', 'consequence'],
    subject: 'ethics',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  },
  {
    id: 'gen-ethics-values-conflict',
    statement: '가치 갈등 상황에서 다양한 관점을 고려하고 균형 잡힌 판단을 내려야 한다.',
    statementEn: 'In situations of value conflict, we must consider diverse perspectives and make balanced judgments.',
    concepts: ['myp-perspective', 'macro-balance', 'conflict'],
    subject: 'ethics',
    gradeLevel: ['middle_school', 'high_school'],
    source: 'korea_2022',
    transferability: 'high'
  }
];

export default GENERALIZATIONS;
