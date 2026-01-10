// 핵심 개념 데이터베이스
// 개념기반 탐구수업을 위한 핵심 개념 모음

import type { KeyConcept } from '../types/database';

export const KEY_CONCEPTS: KeyConcept[] = [
  // ============================================
  // IB PYP 7가지 지정 개념 (Specified Concepts)
  // ============================================
  {
    id: 'pyp-form',
    name: '형태',
    nameEn: 'Form',
    definition: '모든 것은 관찰, 식별, 설명, 분류할 수 있는 특성을 가진 형태를 지닙니다.',
    definitionEn: 'Everything has a form with recognizable features that can be observed, identified, described, and categorized.',
    category: 'transdisciplinary',
    source: 'ib_pyp',
    guidingQuestions: [
      '이것은 어떻게 생겼나요?',
      '이것의 특징은 무엇인가요?',
      '어떤 부분으로 구성되어 있나요?',
      '이것을 어떻게 설명할 수 있나요?'
    ],
    examples: [
      '생물의 신체 구조 관찰',
      '도형의 속성 탐구',
      '문학 작품의 구성 요소 분석',
      '음악의 형식 구조 이해'
    ],
    relatedConcepts: ['pyp-function', 'structure', 'pattern'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    subjects: ['all']
  },
  {
    id: 'pyp-function',
    name: '기능',
    nameEn: 'Function',
    definition: '모든 것은 역할, 목적, 그리고 행동하는 방식이 있습니다.',
    definitionEn: 'Everything has a purpose, a role, and a way of behaving that can be investigated.',
    category: 'transdisciplinary',
    source: 'ib_pyp',
    guidingQuestions: [
      '이것은 어떻게 작동하나요?',
      '이것의 목적은 무엇인가요?',
      '왜 이렇게 행동하나요?',
      '이것은 어떤 역할을 하나요?'
    ],
    examples: [
      '기계의 작동 원리 탐구',
      '생태계에서 생물의 역할',
      '사회 제도의 기능 이해',
      '수학적 연산의 목적'
    ],
    relatedConcepts: ['pyp-form', 'pyp-causation', 'purpose', 'role'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    subjects: ['all']
  },
  {
    id: 'pyp-causation',
    name: '인과관계',
    nameEn: 'Causation',
    definition: '아무것도 이유 없이 일어나지 않습니다. 인과관계가 작용하고, 행동에는 결과가 따릅니다.',
    definitionEn: 'Nothing happens without a reason. Causal relationships are at work, and actions have consequences.',
    category: 'transdisciplinary',
    source: 'ib_pyp',
    guidingQuestions: [
      '왜 이런 일이 일어났나요?',
      '원인은 무엇인가요?',
      '어떤 결과를 가져올까요?',
      '무엇이 이것을 야기했나요?'
    ],
    examples: [
      '역사적 사건의 원인과 결과',
      '과학 실험에서의 변인 관계',
      '환경 문제의 원인 분석',
      '문학에서 인물의 행동과 결과'
    ],
    relatedConcepts: ['pyp-change', 'pyp-connection', 'consequence', 'effect'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    subjects: ['all']
  },
  {
    id: 'pyp-change',
    name: '변화',
    nameEn: 'Change',
    definition: '변화는 한 상태에서 다른 상태로의 움직임으로, 보편적이고 불가피한 과정입니다.',
    definitionEn: 'Change is the process of movement from one state to another. It is universal and inevitable.',
    category: 'transdisciplinary',
    source: 'ib_pyp',
    guidingQuestions: [
      '어떻게 변화하고 있나요?',
      '과거와 어떻게 달라졌나요?',
      '앞으로 어떻게 변할까요?',
      '변화의 증거는 무엇인가요?'
    ],
    examples: [
      '생물의 성장과 발달',
      '역사적 시대의 변천',
      '물질의 상태 변화',
      '사회 변화와 발전'
    ],
    relatedConcepts: ['pyp-causation', 'transformation', 'growth', 'development'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    subjects: ['all']
  },
  {
    id: 'pyp-connection',
    name: '연결',
    nameEn: 'Connection',
    definition: '우리는 상호작용하는 시스템 세계에서 살고 있으며, 한 요소의 행동이 다른 요소에 영향을 미칩니다.',
    definitionEn: 'We live in a world of interacting systems in which the actions of any individual element affect others.',
    category: 'transdisciplinary',
    source: 'ib_pyp',
    guidingQuestions: [
      '이것은 다른 것과 어떻게 연결되어 있나요?',
      '어떤 관계가 있나요?',
      '상호작용은 어떻게 이루어지나요?',
      '이것이 다른 것에 어떤 영향을 미치나요?'
    ],
    examples: [
      '생태계 내 먹이 그물',
      '글로벌 경제의 상호의존성',
      '수학적 개념 간의 연결',
      '역사적 사건들의 연관성'
    ],
    relatedConcepts: ['pyp-causation', 'relationship', 'interdependence', 'system'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    subjects: ['all']
  },
  {
    id: 'pyp-perspective',
    name: '관점',
    nameEn: 'Perspective',
    definition: '지식은 다양한 관점에서 해석됩니다. 관점은 문화적, 집단적, 개인적, 학문적일 수 있습니다.',
    definitionEn: 'Knowledge is moderated by perspectives, which may be cultural, group, individual, or disciplinary.',
    category: 'transdisciplinary',
    source: 'ib_pyp',
    guidingQuestions: [
      '다양한 관점은 무엇인가요?',
      '다른 사람들은 어떻게 생각할까요?',
      '왜 사람들은 다르게 생각하나요?',
      '내 관점과 다른 관점의 차이는 무엇인가요?'
    ],
    examples: [
      '역사적 사건에 대한 다양한 해석',
      '문화에 따른 가치관의 차이',
      '과학적 논쟁과 다양한 이론',
      '예술 작품의 다양한 해석'
    ],
    relatedConcepts: ['pyp-responsibility', 'viewpoint', 'interpretation', 'bias'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    subjects: ['all']
  },
  {
    id: 'pyp-responsibility',
    name: '책임',
    nameEn: 'Responsibility',
    definition: '개인은 자신의 이해와 행동을 바탕으로 선택을 하고, 그 행동의 결과로 변화를 만들어냅니다.',
    definitionEn: 'People make choices based on their understandings, and their actions lead to a difference being made.',
    category: 'transdisciplinary',
    source: 'ib_pyp',
    guidingQuestions: [
      '우리의 책임은 무엇인가요?',
      '우리는 무엇을 해야 하나요?',
      '어떻게 행동해야 할까요?',
      '우리의 선택이 어떤 영향을 미칠까요?'
    ],
    examples: [
      '환경 보호에 대한 개인의 역할',
      '시민으로서의 책임',
      '과학 기술의 윤리적 사용',
      '공동체에 대한 기여'
    ],
    relatedConcepts: ['pyp-perspective', 'ethics', 'choice', 'action'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper'],
    subjects: ['all']
  },

  // ============================================
  // IB MYP 16가지 핵심 개념 (Key Concepts)
  // ============================================
  {
    id: 'myp-aesthetics',
    name: '미학',
    nameEn: 'Aesthetics',
    definition: '미와 맛에 대한 탐구이며, 감각적 또는 감성적 가치에 대한 판단을 다룹니다.',
    definitionEn: 'Deals with the characteristics, creation, meaning and perception of beauty and taste.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '무엇이 아름다운가요?',
      '미의 기준은 어떻게 정해지나요?',
      '예술은 어떻게 감정에 영향을 미치나요?'
    ],
    examples: [
      '예술 작품 감상',
      '디자인 원리',
      '문학의 아름다움'
    ],
    relatedConcepts: ['creativity', 'expression', 'culture'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['art', 'music', 'korean', 'english']
  },
  {
    id: 'myp-change',
    name: '변화',
    nameEn: 'Change',
    definition: '상태의 전환으로, 개념과 과정에 대한 이해를 심화시키는 탐구입니다.',
    definitionEn: 'A conversion, transformation, or movement from one form, state, or value to another.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '어떤 변화가 일어났나요?',
      '변화의 원인은 무엇인가요?',
      '변화는 어떤 결과를 가져왔나요?'
    ],
    examples: [
      '역사적 전환점',
      '화학 반응',
      '사회 변동'
    ],
    relatedConcepts: ['causation', 'transformation', 'development'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'myp-communication',
    name: '소통',
    nameEn: 'Communication',
    definition: '메시지의 교환으로, 의미와 메시지가 전달되는 과정과 방법을 탐구합니다.',
    definitionEn: 'The exchange or transfer of signals, facts, ideas, symbols, and feelings.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '어떻게 효과적으로 소통할 수 있나요?',
      '다양한 소통 방식은 무엇인가요?',
      '소통은 어떻게 관계에 영향을 미치나요?'
    ],
    examples: [
      '언어와 비언어적 소통',
      '미디어 리터러시',
      '수학적 표현'
    ],
    relatedConcepts: ['expression', 'language', 'audience'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'myp-communities',
    name: '공동체',
    nameEn: 'Communities',
    definition: '공통된 가치, 신념, 또는 관심을 공유하는 집단과 그들의 상호작용을 탐구합니다.',
    definitionEn: 'Groups that exist in proximity defined by space, time, or relationship.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '공동체는 어떻게 형성되나요?',
      '공동체 내에서 개인의 역할은 무엇인가요?',
      '공동체는 어떻게 변화하나요?'
    ],
    examples: [
      '지역사회',
      '온라인 커뮤니티',
      '생태계 공동체'
    ],
    relatedConcepts: ['relationships', 'culture', 'identity'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['social_studies', 'ethics', 'science']
  },
  {
    id: 'myp-connections',
    name: '연결',
    nameEn: 'Connections',
    definition: '아이디어, 사물, 사람, 시스템 사이의 관계와 상호의존성을 탐구합니다.',
    definitionEn: 'The links, bonds, and relationships among things, systems, or ideas.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '어떤 연결이 존재하나요?',
      '연결은 어떻게 형성되나요?',
      '연결이 끊어지면 어떻게 되나요?'
    ],
    examples: [
      '생태계의 상호의존',
      '역사적 사건의 연결',
      '수학적 개념의 관계'
    ],
    relatedConcepts: ['relationships', 'systems', 'interdependence'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'myp-creativity',
    name: '창의성',
    nameEn: 'Creativity',
    definition: '새로운 아이디어, 해결책, 또는 제품을 생성하는 과정을 탐구합니다.',
    definitionEn: 'The process of generating novel ideas and considering existing ideas from new perspectives.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '창의성은 어디서 오나요?',
      '창의적 사고를 어떻게 개발할 수 있나요?',
      '창의성은 문제 해결에 어떻게 기여하나요?'
    ],
    examples: [
      '예술 창작',
      '과학적 발명',
      '새로운 해결책 제시'
    ],
    relatedConcepts: ['innovation', 'imagination', 'expression'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'myp-culture',
    name: '문화',
    nameEn: 'Culture',
    definition: '집단의 신념, 가치, 관습, 표현 양식을 포함하는 공유된 삶의 방식을 탐구합니다.',
    definitionEn: 'A range of learned and shared beliefs, values, interests, attitudes, products, ways of knowing and patterns of behavior.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '문화는 어떻게 형성되나요?',
      '문화가 개인에게 미치는 영향은 무엇인가요?',
      '문화 간 차이와 공통점은 무엇인가요?'
    ],
    examples: [
      '전통과 관습',
      '예술과 문학',
      '음식 문화'
    ],
    relatedConcepts: ['identity', 'perspective', 'tradition'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['social_studies', 'korean', 'english', 'art', 'music']
  },
  {
    id: 'myp-development',
    name: '발달/발전',
    nameEn: 'Development',
    definition: '성장, 진보, 진화의 과정과 단계를 탐구합니다.',
    definitionEn: 'The process and act of growing, progressing, or becoming more advanced.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '발달은 어떻게 일어나나요?',
      '발달의 단계는 무엇인가요?',
      '발달에 영향을 미치는 요인은 무엇인가요?'
    ],
    examples: [
      '인간 발달',
      '경제 발전',
      '기술 진보'
    ],
    relatedConcepts: ['change', 'growth', 'progress'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['science', 'social_studies', 'physical_education']
  },
  {
    id: 'myp-form',
    name: '형태',
    nameEn: 'Form',
    definition: '사물의 모양, 외양, 배열을 탐구합니다.',
    definitionEn: 'The shape and underlying structure of something.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '이것의 형태는 어떠한가요?',
      '형태는 기능에 어떤 영향을 미치나요?',
      '형태는 어떻게 의미를 전달하나요?'
    ],
    examples: [
      '기하학적 형태',
      '문학 형식',
      '생물의 구조'
    ],
    relatedConcepts: ['structure', 'function', 'pattern'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'myp-global-interactions',
    name: '글로벌 상호작용',
    nameEn: 'Global Interactions',
    definition: '인간 집단과 환경 사이의 세계적 수준의 상호연결을 탐구합니다.',
    definitionEn: 'The interconnectedness of human-made systems and communities.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '세계화는 어떤 영향을 미치나요?',
      '국가 간 어떤 상호작용이 있나요?',
      '글로벌 문제에 어떻게 대응해야 하나요?'
    ],
    examples: [
      '국제 무역',
      '환경 문제',
      '문화 교류'
    ],
    relatedConcepts: ['connections', 'systems', 'interdependence'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['social_studies', 'science', 'english']
  },
  {
    id: 'myp-identity',
    name: '정체성',
    nameEn: 'Identity',
    definition: '자아와 집단의 본질, 특성, 가치에 대한 이해를 탐구합니다.',
    definitionEn: 'The characteristics, feelings, beliefs, and values that define who or what a person or group is.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '나는 누구인가요?',
      '정체성은 어떻게 형성되나요?',
      '정체성은 행동에 어떤 영향을 미치나요?'
    ],
    examples: [
      '개인 정체성',
      '문화적 정체성',
      '국가 정체성'
    ],
    relatedConcepts: ['culture', 'perspective', 'self'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['social_studies', 'korean', 'ethics']
  },
  {
    id: 'myp-logic',
    name: '논리',
    nameEn: 'Logic',
    definition: '추론과 논증의 원리를 탐구합니다.',
    definitionEn: 'A method of reasoning and a system of principles used to build arguments and reach conclusions.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '논리적으로 타당한가요?',
      '어떤 증거가 결론을 지지하나요?',
      '추론 과정에 오류가 있나요?'
    ],
    examples: [
      '수학적 증명',
      '과학적 논증',
      '토론과 논쟁'
    ],
    relatedConcepts: ['reasoning', 'evidence', 'argument'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['math', 'science', 'korean', 'ethics']
  },
  {
    id: 'myp-perspective',
    name: '관점',
    nameEn: 'Perspective',
    definition: '사건, 아이디어, 경험을 바라보는 다양한 시각과 해석을 탐구합니다.',
    definitionEn: 'The position from which things are perceived, creating a point of view.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '다른 관점은 무엇인가요?',
      '관점은 어떻게 형성되나요?',
      '왜 다른 관점이 존재하나요?'
    ],
    examples: [
      '역사적 해석',
      '예술 비평',
      '과학적 패러다임'
    ],
    relatedConcepts: ['culture', 'identity', 'bias'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'myp-relationships',
    name: '관계',
    nameEn: 'Relationships',
    definition: '사람, 아이디어, 사물 사이의 연결과 상호작용을 탐구합니다.',
    definitionEn: 'The connections and associations between properties, objects, people and ideas.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '어떤 관계가 있나요?',
      '관계는 어떻게 변화하나요?',
      '관계의 유형은 무엇인가요?'
    ],
    examples: [
      '사회적 관계',
      '수학적 관계',
      '생태적 관계'
    ],
    relatedConcepts: ['connections', 'patterns', 'systems'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'myp-systems',
    name: '시스템',
    nameEn: 'Systems',
    definition: '상호 연결된 부분들이 함께 작동하는 전체를 탐구합니다.',
    definitionEn: 'Sets of interacting or interdependent components.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '시스템의 구성 요소는 무엇인가요?',
      '구성 요소는 어떻게 상호작용하나요?',
      '시스템은 어떻게 유지되나요?'
    ],
    examples: [
      '생태계',
      '정치 시스템',
      '수학적 체계'
    ],
    relatedConcepts: ['connections', 'relationships', 'structure'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'myp-time-place-space',
    name: '시간, 장소, 공간',
    nameEn: 'Time, Place and Space',
    definition: '위치, 맥락, 그리고 시간과 공간의 관계를 탐구합니다.',
    definitionEn: 'The absolute or relative position of people, objects and ideas.',
    category: 'interdisciplinary',
    source: 'ib_myp',
    guidingQuestions: [
      '장소는 어떤 영향을 미치나요?',
      '시간에 따라 어떻게 변화했나요?',
      '공간은 어떻게 조직되나요?'
    ],
    examples: [
      '역사적 시대',
      '지리적 환경',
      '문화적 맥락'
    ],
    relatedConcepts: ['context', 'change', 'environment'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['social_studies', 'science', 'art']
  },

  // ============================================
  // 거시 개념 (Macro Concepts) - Erickson
  // ============================================
  {
    id: 'macro-system',
    name: '시스템',
    nameEn: 'System',
    definition: '상호 연결되고 상호의존적인 요소들이 공통된 목적을 위해 함께 작동하는 집합체입니다.',
    definitionEn: 'A set of interconnected and interdependent parts working together for a common purpose.',
    category: 'macro',
    source: 'erickson',
    guidingQuestions: [
      '이 시스템의 구성 요소는 무엇인가요?',
      '구성 요소들은 어떻게 상호작용하나요?',
      '시스템이 작동하려면 무엇이 필요한가요?',
      '한 부분이 변하면 전체에 어떤 영향을 미치나요?'
    ],
    examples: [
      '인체 시스템 (순환계, 호흡계)',
      '생태계',
      '경제 시스템',
      '태양계',
      '교통 시스템'
    ],
    relatedConcepts: ['myp-connections', 'interdependence', 'structure', 'function'],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'macro-pattern',
    name: '패턴',
    nameEn: 'Pattern',
    definition: '반복되거나 예측 가능한 요소들의 배열 또는 순서입니다.',
    definitionEn: 'A repeated or predictable arrangement of elements.',
    category: 'macro',
    source: 'erickson',
    guidingQuestions: [
      '어떤 패턴이 보이나요?',
      '패턴이 반복되는 이유는 무엇인가요?',
      '패턴을 통해 무엇을 예측할 수 있나요?'
    ],
    examples: [
      '수학적 수열',
      '계절의 변화',
      '음악의 리듬',
      '역사적 사건의 반복'
    ],
    relatedConcepts: ['structure', 'order', 'prediction'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'macro-structure',
    name: '구조',
    nameEn: 'Structure',
    definition: '전체를 구성하는 부분들의 배열과 관계입니다.',
    definitionEn: 'The arrangement of and relationships between parts that form a whole.',
    category: 'macro',
    source: 'erickson',
    guidingQuestions: [
      '이것은 어떻게 구성되어 있나요?',
      '구조가 기능에 어떤 영향을 미치나요?',
      '다른 구조와 어떻게 다른가요?'
    ],
    examples: [
      '원자 구조',
      '문장 구조',
      '조직 구조',
      '건축 구조'
    ],
    relatedConcepts: ['form', 'function', 'organization'],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'macro-interdependence',
    name: '상호의존',
    nameEn: 'Interdependence',
    definition: '두 개 이상의 요소가 서로에게 의존하는 관계입니다.',
    definitionEn: 'A relationship in which two or more things depend on each other.',
    category: 'macro',
    source: 'erickson',
    guidingQuestions: [
      '무엇이 서로 의존하고 있나요?',
      '하나가 없으면 다른 것은 어떻게 되나요?',
      '상호의존이 어떤 영향을 미치나요?'
    ],
    examples: [
      '식물과 동물의 관계',
      '국가 간 무역',
      '팀워크',
      '먹이 사슬'
    ],
    relatedConcepts: ['system', 'connection', 'relationship'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['science', 'social_studies', 'ethics']
  },
  {
    id: 'macro-balance',
    name: '균형',
    nameEn: 'Balance',
    definition: '안정적이거나 조화로운 상태로, 대립하는 힘이나 요소들이 동등하게 유지되는 상태입니다.',
    definitionEn: 'A state of equilibrium where opposing forces or elements are equal.',
    category: 'macro',
    source: 'erickson',
    guidingQuestions: [
      '무엇이 균형을 유지하게 하나요?',
      '균형이 깨지면 어떻게 되나요?',
      '균형을 회복하려면 무엇이 필요한가요?'
    ],
    examples: [
      '생태계 균형',
      '예술에서의 균형',
      '건강과 삶의 균형',
      '경제적 균형'
    ],
    relatedConcepts: ['stability', 'harmony', 'equilibrium'],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['all']
  },
  {
    id: 'macro-power',
    name: '권력/힘',
    nameEn: 'Power',
    definition: '영향력을 행사하거나 통제하는 능력 또는 힘입니다.',
    definitionEn: 'The ability or capacity to influence, control, or direct.',
    category: 'macro',
    source: 'erickson',
    guidingQuestions: [
      '누가 권력을 가지고 있나요?',
      '권력은 어떻게 획득되고 유지되나요?',
      '권력은 어떻게 사용되나요?'
    ],
    examples: [
      '정치적 권력',
      '경제적 힘',
      '지식의 힘',
      '자연의 힘'
    ],
    relatedConcepts: ['authority', 'influence', 'control'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['social_studies', 'science', 'korean', 'ethics']
  },

  // ============================================
  // NGSS 교차 개념 (Crosscutting Concepts)
  // ============================================
  {
    id: 'ngss-patterns',
    name: '패턴',
    nameEn: 'Patterns',
    definition: '자연 및 인공 시스템에서 관찰되는 패턴은 조직과 분류를 안내하고 관계와 원인에 대한 질문을 유발합니다.',
    definitionEn: 'Observed patterns in nature guide organization and classification and prompt questions about relationships and causes.',
    category: 'interdisciplinary',
    source: 'ngss',
    guidingQuestions: [
      '어떤 패턴을 관찰할 수 있나요?',
      '패턴은 무엇을 나타내나요?',
      '패턴을 사용하여 무엇을 예측할 수 있나요?'
    ],
    examples: [
      '원소의 주기율표',
      '날씨 패턴',
      '생물의 생활사',
      'DNA 구조'
    ],
    relatedConcepts: ['cause-effect', 'structure', 'prediction'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['science', 'math']
  },
  {
    id: 'ngss-cause-effect',
    name: '원인과 결과',
    nameEn: 'Cause and Effect',
    definition: '사건에는 원인이 있으며, 인과 관계를 파악하는 것은 과학과 공학의 주요 활동입니다.',
    definitionEn: 'Events have causes. Deciphering causal relationships is a major activity of science and engineering.',
    category: 'interdisciplinary',
    source: 'ngss',
    guidingQuestions: [
      '무엇이 이것을 일으켰나요?',
      '어떤 결과가 나타났나요?',
      '원인과 결과 사이의 관계는 무엇인가요?'
    ],
    examples: [
      '기후 변화의 원인과 영향',
      '질병의 원인과 예방',
      '화학 반응'
    ],
    relatedConcepts: ['patterns', 'mechanism', 'prediction'],
    gradeLevel: ['elementary_lower', 'elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['science', 'social_studies']
  },
  {
    id: 'ngss-scale-proportion',
    name: '규모, 비율, 수량',
    nameEn: 'Scale, Proportion, and Quantity',
    definition: '자연 현상과 인공물은 다양한 규모로 존재하며, 이는 기능과 관찰 방법에 영향을 미칩니다.',
    definitionEn: 'In considering phenomena, it is critical to recognize what is relevant at different size, time, and energy scales.',
    category: 'interdisciplinary',
    source: 'ngss',
    guidingQuestions: [
      '얼마나 큰가요 / 작은가요?',
      '측정은 어떻게 비교되나요?',
      '규모가 관찰에 어떤 영향을 미치나요?'
    ],
    examples: [
      '원자에서 우주까지의 규모',
      '지질학적 시간',
      '비례 관계'
    ],
    relatedConcepts: ['measurement', 'proportion', 'ratio'],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['science', 'math']
  },
  {
    id: 'ngss-systems',
    name: '시스템과 시스템 모델',
    nameEn: 'Systems and System Models',
    definition: '시스템에 대한 이해는 경계, 구성 요소, 상호작용을 정의하는 것을 포함합니다.',
    definitionEn: 'Defining the system under study and making a model of it is essential to understand phenomena.',
    category: 'interdisciplinary',
    source: 'ngss',
    guidingQuestions: [
      '시스템의 경계는 어디인가요?',
      '시스템의 입력과 출력은 무엇인가요?',
      '모델이 시스템을 어떻게 표현하나요?'
    ],
    examples: [
      '생태계 모델',
      '기계 시스템',
      '날씨 시스템'
    ],
    relatedConcepts: ['model', 'boundary', 'interaction'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['science', 'math']
  },
  {
    id: 'ngss-energy-matter',
    name: '에너지와 물질',
    nameEn: 'Energy and Matter',
    definition: '시스템 내에서 에너지와 물질의 흐름을 추적하면 시스템의 행동을 이해하는 데 도움이 됩니다.',
    definitionEn: 'Tracking energy and matter flows into, out of, and within systems helps one understand their behavior.',
    category: 'interdisciplinary',
    source: 'ngss',
    guidingQuestions: [
      '에너지는 어디서 오고 어디로 가나요?',
      '물질은 어떻게 변환되나요?',
      '에너지와 물질의 보존이란 무엇인가요?'
    ],
    examples: [
      '광합성과 호흡',
      '물 순환',
      '화학 반응에서의 에너지'
    ],
    relatedConcepts: ['conservation', 'transformation', 'flow'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['science']
  },
  {
    id: 'ngss-structure-function',
    name: '구조와 기능',
    nameEn: 'Structure and Function',
    definition: '복잡한 자연 및 인공 구조나 시스템의 형태와 기능은 서로 연관되어 있습니다.',
    definitionEn: 'The way in which an object is shaped and its substructure determine many of its properties and functions.',
    category: 'interdisciplinary',
    source: 'ngss',
    guidingQuestions: [
      '구조가 기능에 어떤 영향을 미치나요?',
      '왜 이런 형태인가요?',
      '구조를 변경하면 기능이 어떻게 변하나요?'
    ],
    examples: [
      '세포의 구조와 기능',
      '동물의 신체 구조',
      '기계의 설계'
    ],
    relatedConcepts: ['form', 'adaptation', 'design'],
    gradeLevel: ['elementary_middle', 'elementary_upper', 'middle_school', 'high_school'],
    subjects: ['science', 'practical_arts']
  },
  {
    id: 'ngss-stability-change',
    name: '안정성과 변화',
    nameEn: 'Stability and Change',
    definition: '조건이 안정적인지 변화하는지 이해하는 것은 시스템 행동을 이해하는 데 중요합니다.',
    definitionEn: 'For both designed and natural systems, conditions that affect stability and factors that control rates of change are critical.',
    category: 'interdisciplinary',
    source: 'ngss',
    guidingQuestions: [
      '시스템은 어떻게 안정성을 유지하나요?',
      '무엇이 변화를 일으키나요?',
      '변화의 속도에 영향을 미치는 것은 무엇인가요?'
    ],
    examples: [
      '생태계 평형',
      '지각 변동',
      '화학적 평형'
    ],
    relatedConcepts: ['equilibrium', 'feedback', 'balance'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['science']
  },

  // ============================================
  // 역사적 사고 개념 (Historical Thinking Concepts)
  // ============================================
  {
    id: 'hist-significance',
    name: '역사적 중요성',
    nameEn: 'Historical Significance',
    definition: '어떤 사건, 인물, 발전이 기억할 가치가 있는지 결정하는 과정입니다.',
    definitionEn: 'The process of deciding what events, people, or developments are worth remembering.',
    category: 'micro',
    source: 'historical_thinking',
    guidingQuestions: [
      '왜 이 사건이 중요한가요?',
      '누가 이것을 중요하다고 결정했나요?',
      '중요성의 기준은 무엇인가요?'
    ],
    examples: [
      '역사적 전환점 평가',
      '역사적 인물의 영향력',
      '사건의 장기적 결과'
    ],
    relatedConcepts: ['cause-consequence', 'perspective', 'evidence'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['social_studies']
  },
  {
    id: 'hist-evidence',
    name: '역사적 증거',
    nameEn: 'Primary Source Evidence',
    definition: '역사가들이 주장과 결론을 뒷받침하기 위해 자료의 증거를 사용하는 방법입니다.',
    definitionEn: 'How historians use evidence from sources to support their statements and conclusions.',
    category: 'micro',
    source: 'historical_thinking',
    guidingQuestions: [
      '이 자료는 무엇을 말해주나요?',
      '이 증거는 신뢰할 수 있나요?',
      '어떤 편향이 있을 수 있나요?'
    ],
    examples: [
      '1차 사료 분석',
      '다양한 사료 비교',
      '사료 비평'
    ],
    relatedConcepts: ['perspective', 'reliability', 'interpretation'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['social_studies']
  },
  {
    id: 'hist-continuity-change',
    name: '연속성과 변화',
    nameEn: 'Continuity and Change',
    definition: '역사에서 변화하는 것과 지속되는 것을 식별하고 분석하는 것입니다.',
    definitionEn: 'Identifying what has changed and what has stayed the same over time.',
    category: 'micro',
    source: 'historical_thinking',
    guidingQuestions: [
      '무엇이 변했나요?',
      '무엇이 같게 남아 있나요?',
      '변화의 속도와 방향은 무엇인가요?'
    ],
    examples: [
      '사회 변화의 추적',
      '전통의 지속',
      '시대별 비교'
    ],
    relatedConcepts: ['change', 'tradition', 'progress'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['social_studies']
  },
  {
    id: 'hist-cause-consequence',
    name: '원인과 결과',
    nameEn: 'Cause and Consequence',
    definition: '역사적 사건의 원인과 그 결과를 분석하는 것입니다.',
    definitionEn: 'Analyzing the reasons for historical events and their outcomes.',
    category: 'micro',
    source: 'historical_thinking',
    guidingQuestions: [
      '이 사건의 원인은 무엇이었나요?',
      '단기적/장기적 결과는 무엇인가요?',
      '의도한 결과와 의도치 않은 결과는 무엇인가요?'
    ],
    examples: [
      '전쟁의 원인 분석',
      '혁명의 결과',
      '정책 결정의 영향'
    ],
    relatedConcepts: ['causation', 'agency', 'impact'],
    gradeLevel: ['elementary_upper', 'middle_school', 'high_school'],
    subjects: ['social_studies']
  },
  {
    id: 'hist-perspective',
    name: '역사적 관점',
    nameEn: 'Historical Perspectives',
    definition: '과거 사람들의 사회적, 문화적, 지적, 감정적 맥락을 이해하는 것입니다.',
    definitionEn: 'Understanding the social, cultural, intellectual, and emotional context that shaped people\'s actions in the past.',
    category: 'micro',
    source: 'historical_thinking',
    guidingQuestions: [
      '당시 사람들은 어떻게 생각했나요?',
      '그들의 세계관은 무엇이었나요?',
      '우리와 어떻게 다른가요?'
    ],
    examples: [
      '역사적 맥락화',
      '시대적 가치관 이해',
      '다양한 행위자의 관점'
    ],
    relatedConcepts: ['empathy', 'context', 'worldview'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['social_studies']
  },
  {
    id: 'hist-ethical',
    name: '윤리적 차원',
    nameEn: 'Ethical Dimensions',
    definition: '역사가 현재를 살아가는 데 어떻게 도움이 되는지에 대한 윤리적 판단입니다.',
    definitionEn: 'How history can help us to live in the present through ethical judgments.',
    category: 'micro',
    source: 'historical_thinking',
    guidingQuestions: [
      '과거의 행동을 어떻게 판단해야 하나요?',
      '역사에서 무엇을 배울 수 있나요?',
      '현재에 어떻게 적용할 수 있나요?'
    ],
    examples: [
      '역사적 불의에 대한 반성',
      '기념과 추모',
      '역사의 교훈'
    ],
    relatedConcepts: ['responsibility', 'justice', 'memory'],
    gradeLevel: ['middle_school', 'high_school'],
    subjects: ['social_studies', 'ethics']
  }
];

export default KEY_CONCEPTS;
