// 탐구 질문 데이터베이스
// 사실적, 개념적, 논쟁적 질문 모음

import type { InquiryQuestion } from '../types/database';

export const INQUIRY_QUESTIONS: InquiryQuestion[] = [
  // ============================================
  // 범교과 탐구 질문
  // ============================================
  // 사실적 질문 (Factual)
  {
    id: 'q-trans-fact-1',
    question: '시스템의 구성 요소는 무엇인가요?',
    questionEn: 'What are the components of a system?',
    type: 'factual',
    subject: 'all',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school'],
    relatedConcepts: ['macro-system'],
    thinkingLevel: 'remember'
  },
  {
    id: 'q-trans-fact-2',
    question: '어떤 패턴을 관찰할 수 있나요?',
    questionEn: 'What patterns can you observe?',
    type: 'factual',
    subject: 'all',
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['macro-pattern', 'ngss-patterns'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-trans-fact-3',
    question: '어떤 변화가 일어났나요?',
    questionEn: 'What changes have occurred?',
    type: 'factual',
    subject: 'all',
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['pyp-change', 'myp-change'],
    thinkingLevel: 'understand'
  },

  // 개념적 질문 (Conceptual)
  {
    id: 'q-trans-conc-1',
    question: '시스템의 한 부분이 변하면 전체에 어떤 영향을 미치나요?',
    questionEn: 'How does a change in one part of a system affect the whole?',
    type: 'conceptual',
    subject: 'all',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['macro-system', 'pyp-change', 'pyp-connection'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-trans-conc-2',
    question: '패턴은 예측에 어떻게 도움이 되나요?',
    questionEn: 'How do patterns help us make predictions?',
    type: 'conceptual',
    subject: 'all',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['macro-pattern', 'prediction'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-trans-conc-3',
    question: '구조는 기능에 어떤 영향을 미치나요?',
    questionEn: 'How does structure influence function?',
    type: 'conceptual',
    subject: 'all',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['ngss-structure-function', 'pyp-form', 'pyp-function'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-trans-conc-4',
    question: '다양한 관점은 우리의 이해를 어떻게 풍부하게 하나요?',
    questionEn: 'How do diverse perspectives enrich our understanding?',
    type: 'conceptual',
    subject: 'all',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['pyp-perspective', 'myp-perspective'],
    thinkingLevel: 'evaluate'
  },

  // 논쟁적 질문 (Debatable)
  {
    id: 'q-trans-deb-1',
    question: '변화는 항상 진보를 의미하나요?',
    questionEn: 'Does change always mean progress?',
    type: 'debatable',
    subject: 'all',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['pyp-change', 'myp-development', 'progress'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-trans-deb-2',
    question: '객관적인 관점이 존재할 수 있나요?',
    questionEn: 'Can an objective perspective exist?',
    type: 'debatable',
    subject: 'all',
    gradeLevel: ['high_school'],
    relatedConcepts: ['myp-perspective', 'objectivity'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-trans-deb-3',
    question: '개인의 책임과 공동체의 책임 중 무엇이 더 중요한가요?',
    questionEn: 'Which is more important: individual responsibility or community responsibility?',
    type: 'debatable',
    subject: 'all',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['pyp-responsibility', 'myp-communities'],
    thinkingLevel: 'evaluate'
  },

  // ============================================
  // 국어과 탐구 질문
  // ============================================
  {
    id: 'q-korean-fact-1',
    question: '이 글의 주제와 핵심 내용은 무엇인가요?',
    type: 'factual',
    subject: 'korean',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school'],
    relatedConcepts: ['main-idea', 'content'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-korean-fact-2',
    question: '저자는 어떤 표현 기법을 사용했나요?',
    type: 'factual',
    subject: 'korean',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['technique', 'style'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-korean-conc-1',
    question: '저자의 표현 방식은 독자에게 어떤 영향을 미치나요?',
    type: 'conceptual',
    subject: 'korean',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-communication', 'audience', 'effect'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-korean-conc-2',
    question: '문학은 우리가 다른 사람을 이해하는 데 어떻게 도움이 되나요?',
    type: 'conceptual',
    subject: 'korean',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-perspective', 'empathy'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-korean-conc-3',
    question: '언어는 문화와 정체성을 어떻게 반영하나요?',
    type: 'conceptual',
    subject: 'korean',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-culture', 'myp-identity', 'language'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-korean-deb-1',
    question: '좋은 글쓰기에 보편적인 기준이 있나요?',
    type: 'debatable',
    subject: 'korean',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-aesthetics', 'standards'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-korean-deb-2',
    question: '언어의 변화는 언어를 발전시키나요, 아니면 훼손하나요?',
    type: 'debatable',
    subject: 'korean',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['pyp-change', 'language'],
    thinkingLevel: 'evaluate'
  },

  // ============================================
  // 수학과 탐구 질문
  // ============================================
  {
    id: 'q-math-fact-1',
    question: '이 문제에서 어떤 수학적 관계를 발견할 수 있나요?',
    type: 'factual',
    subject: 'math',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['myp-relationships', 'pattern'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-math-fact-2',
    question: '어떤 패턴이 나타나나요?',
    type: 'factual',
    subject: 'math',
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['macro-pattern'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-math-conc-1',
    question: '수학적 모델은 현실 세계의 상황을 어떻게 표현하나요?',
    type: 'conceptual',
    subject: 'math',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['model', 'representation'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-math-conc-2',
    question: '변수 간의 관계는 결과에 어떤 영향을 미치나요?',
    type: 'conceptual',
    subject: 'math',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['myp-relationships', 'variable'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-math-conc-3',
    question: '수학적 구조의 속성은 문제 해결에 어떻게 도움이 되나요?',
    type: 'conceptual',
    subject: 'math',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['macro-structure', 'properties'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-math-deb-1',
    question: '수학은 발견되는 것인가요, 발명되는 것인가요?',
    type: 'debatable',
    subject: 'math',
    gradeLevel: ['high_school'],
    relatedConcepts: ['knowledge', 'creation'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-math-deb-2',
    question: '수학적 아름다움은 존재하나요?',
    type: 'debatable',
    subject: 'math',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-aesthetics', 'elegance'],
    thinkingLevel: 'evaluate'
  },

  // ============================================
  // 과학과 탐구 질문
  // ============================================
  {
    id: 'q-science-fact-1',
    question: '이 현상의 원인은 무엇인가요?',
    type: 'factual',
    subject: 'science',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['ngss-cause-effect', 'pyp-causation'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-science-fact-2',
    question: '이 시스템은 어떤 구성 요소로 이루어져 있나요?',
    type: 'factual',
    subject: 'science',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['ngss-systems', 'macro-system'],
    thinkingLevel: 'remember'
  },
  {
    id: 'q-science-conc-1',
    question: '에너지 전환은 시스템의 행동에 어떤 영향을 미치나요?',
    type: 'conceptual',
    subject: 'science',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['ngss-energy-matter', 'transformation'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-science-conc-2',
    question: '생물의 구조는 생존에 어떻게 기여하나요?',
    type: 'conceptual',
    subject: 'science',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['ngss-structure-function', 'adaptation'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-science-conc-3',
    question: '규모는 우리가 관찰하고 이해할 수 있는 것에 어떤 영향을 미치나요?',
    type: 'conceptual',
    subject: 'science',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['ngss-scale-proportion', 'observation'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-science-conc-4',
    question: '시스템은 어떻게 안정성을 유지하나요?',
    type: 'conceptual',
    subject: 'science',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['ngss-stability-change', 'macro-balance'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-science-deb-1',
    question: '과학적 진보는 항상 인류에게 이로운가요?',
    type: 'debatable',
    subject: 'science',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-development', 'ethics'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-science-deb-2',
    question: '과학자들은 발견의 사용에 책임이 있나요?',
    type: 'debatable',
    subject: 'science',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['pyp-responsibility', 'ethics'],
    thinkingLevel: 'evaluate'
  },

  // ============================================
  // 사회과 탐구 질문
  // ============================================
  {
    id: 'q-social-fact-1',
    question: '이 역사적 사건은 언제, 어디서 일어났나요?',
    type: 'factual',
    subject: 'social_studies',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['myp-time-place-space', 'context'],
    thinkingLevel: 'remember'
  },
  {
    id: 'q-social-fact-2',
    question: '이 사회의 주요 특징은 무엇인가요?',
    type: 'factual',
    subject: 'social_studies',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['myp-culture', 'characteristics'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-social-conc-1',
    question: '지리적 환경은 사람들의 생활 방식에 어떤 영향을 미치나요?',
    type: 'conceptual',
    subject: 'social_studies',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['myp-time-place-space', 'environment', 'adaptation'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-social-conc-2',
    question: '권력은 어떻게 사회 구조를 형성하나요?',
    type: 'conceptual',
    subject: 'social_studies',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['macro-power', 'governance'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-social-conc-3',
    question: '과거의 사건은 현재에 어떤 영향을 미치나요?',
    type: 'conceptual',
    subject: 'social_studies',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['hist-cause-consequence', 'hist-continuity-change'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-social-conc-4',
    question: '문화적 차이는 갈등과 협력에 어떤 영향을 미치나요?',
    type: 'conceptual',
    subject: 'social_studies',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-culture', 'conflict', 'cooperation'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-social-deb-1',
    question: '역사적 인물을 오늘날의 가치관으로 판단해도 되나요?',
    type: 'debatable',
    subject: 'social_studies',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['hist-ethical', 'hist-perspective'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-social-deb-2',
    question: '세계화는 문화 다양성을 증진시키나요, 위협하나요?',
    type: 'debatable',
    subject: 'social_studies',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-global-interactions', 'myp-culture'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-social-deb-3',
    question: '경제적 성장과 환경 보호 중 무엇이 우선되어야 하나요?',
    type: 'debatable',
    subject: 'social_studies',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['development', 'sustainability'],
    thinkingLevel: 'evaluate'
  },

  // ============================================
  // 예술과 탐구 질문
  // ============================================
  {
    id: 'q-art-fact-1',
    question: '이 작품에서 어떤 요소들을 발견할 수 있나요?',
    type: 'factual',
    subject: 'art',
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['pyp-form', 'elements'],
    thinkingLevel: 'remember'
  },
  {
    id: 'q-art-fact-2',
    question: '예술가는 어떤 재료와 기법을 사용했나요?',
    type: 'factual',
    subject: 'art',
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['technique', 'materials'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-art-conc-1',
    question: '예술은 감정과 아이디어를 어떻게 전달하나요?',
    type: 'conceptual',
    subject: 'art',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['myp-communication', 'expression'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-art-conc-2',
    question: '예술은 문화와 시대를 어떻게 반영하나요?',
    type: 'conceptual',
    subject: 'art',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-culture', 'myp-time-place-space'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-art-deb-1',
    question: '무엇이 예술을 예술로 만드나요?',
    type: 'debatable',
    subject: 'art',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-aesthetics', 'definition'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-art-deb-2',
    question: '아름다움은 보편적인가요, 문화적인가요?',
    type: 'debatable',
    subject: 'art',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['myp-aesthetics', 'myp-culture', 'myp-perspective'],
    thinkingLevel: 'evaluate'
  },

  // ============================================
  // 도덕/윤리과 탐구 질문
  // ============================================
  {
    id: 'q-ethics-fact-1',
    question: '이 상황에서 어떤 가치들이 충돌하고 있나요?',
    type: 'factual',
    subject: 'ethics',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['values', 'conflict'],
    thinkingLevel: 'understand'
  },
  {
    id: 'q-ethics-conc-1',
    question: '개인의 권리와 공동체의 이익은 어떻게 균형을 이룰 수 있나요?',
    type: 'conceptual',
    subject: 'ethics',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['macro-balance', 'rights', 'community'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-ethics-conc-2',
    question: '책임감 있는 결정을 내리려면 무엇을 고려해야 하나요?',
    type: 'conceptual',
    subject: 'ethics',
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    relatedConcepts: ['pyp-responsibility', 'decision-making'],
    thinkingLevel: 'analyze'
  },
  {
    id: 'q-ethics-deb-1',
    question: '좋은 의도는 결과와 상관없이 행동을 정당화하나요?',
    type: 'debatable',
    subject: 'ethics',
    gradeLevel: ['middle_school', 'high_school'],
    relatedConcepts: ['intention', 'consequence'],
    thinkingLevel: 'evaluate'
  },
  {
    id: 'q-ethics-deb-2',
    question: '보편적인 도덕 원칙이 존재하나요?',
    type: 'debatable',
    subject: 'ethics',
    gradeLevel: ['high_school'],
    relatedConcepts: ['universality', 'relativism'],
    thinkingLevel: 'evaluate'
  }
];

export default INQUIRY_QUESTIONS;
