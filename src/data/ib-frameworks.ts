// IB 프레임워크 데이터베이스
// PYP, MYP 관련 프레임워크 데이터

import type {
  TransdisciplinaryTheme,
  GlobalContext,
  ATLSkill,
  LearnerProfileAttribute
} from '../types/database';

// ============================================
// PYP 초학문적 주제 (Transdisciplinary Themes)
// ============================================
export const TRANSDISCIPLINARY_THEMES: TransdisciplinaryTheme[] = [
  {
    id: 'pyp-theme-who-we-are',
    name: 'Who We Are',
    nameKo: '우리는 누구인가',
    description: 'An inquiry into the nature of the self; beliefs and values; personal, physical, mental, social and spiritual health; human relationships including families, friends, communities and cultures; rights and responsibilities; what it means to be human.',
    descriptionKo: '자아의 본질, 신념과 가치, 개인적·신체적·정신적·사회적·영적 건강, 가족·친구·공동체·문화를 포함한 인간관계, 권리와 책임, 인간이라는 것의 의미에 대한 탐구',
    centralIdeas: [
      '개인의 정체성은 다양한 요인에 의해 형성된다',
      '건강한 선택은 우리의 삶에 영향을 미친다',
      '관계는 우리가 누구인지에 영향을 준다',
      '모든 사람은 권리와 책임을 가진다'
    ],
    programme: 'pyp'
  },
  {
    id: 'pyp-theme-where-we-are',
    name: 'Where We Are in Place and Time',
    nameKo: '우리가 있는 장소와 시간',
    description: 'An inquiry into orientation in place and time; personal histories; homes and journeys; the discoveries, explorations and migrations of humankind; the relationships between, and the interconnectedness of, individuals and civilizations, from local and global perspectives.',
    descriptionKo: '시간과 장소에서의 위치, 개인의 역사, 가정과 여정, 인류의 발견·탐험·이주, 지역적·세계적 관점에서 개인과 문명 간의 관계와 상호연결성에 대한 탐구',
    centralIdeas: [
      '장소는 사람들의 삶의 방식을 형성한다',
      '역사적 사건은 현재에 영향을 미친다',
      '사람들은 다양한 이유로 이주한다',
      '탐험은 세계에 대한 이해를 넓힌다'
    ],
    programme: 'pyp'
  },
  {
    id: 'pyp-theme-how-express',
    name: 'How We Express Ourselves',
    nameKo: '우리가 자신을 표현하는 방법',
    description: 'An inquiry into the ways in which we discover and express ideas, feelings, nature, culture, beliefs and values; the ways in which we reflect on, extend and enjoy our creativity; our appreciation of the aesthetic.',
    descriptionKo: '아이디어, 감정, 자연, 문화, 신념과 가치를 발견하고 표현하는 방법, 창의성을 성찰하고 확장하고 즐기는 방법, 미적 감상에 대한 탐구',
    centralIdeas: [
      '예술은 문화와 아이디어를 전달한다',
      '창의적 표현은 다양한 형태를 취한다',
      '이야기는 경험과 가치를 공유하는 방법이다',
      '기호와 상징은 의미를 전달한다'
    ],
    programme: 'pyp'
  },
  {
    id: 'pyp-theme-how-world-works',
    name: 'How the World Works',
    nameKo: '세상이 작동하는 방식',
    description: 'An inquiry into the natural world and its laws; the interaction between the natural world (physical and biological) and human societies; how humans use their understanding of scientific principles; the impact of scientific and technological advances on society and on the environment.',
    descriptionKo: '자연 세계와 그 법칙, 자연 세계(물리적·생물학적)와 인간 사회의 상호작용, 인간이 과학 원리에 대한 이해를 사용하는 방법, 과학기술 발전이 사회와 환경에 미치는 영향에 대한 탐구',
    centralIdeas: [
      '과학적 탐구는 자연을 이해하는 데 도움을 준다',
      '에너지는 다양한 형태로 변환된다',
      '기술은 인간의 삶을 변화시킨다',
      '자연 현상에는 원인과 결과가 있다'
    ],
    programme: 'pyp'
  },
  {
    id: 'pyp-theme-how-organize',
    name: 'How We Organize Ourselves',
    nameKo: '우리가 조직하는 방법',
    description: 'An inquiry into the interconnectedness of human-made systems and communities; the structure and function of organizations; societal decision-making; economic activities and their impact on humankind and the environment.',
    descriptionKo: '인간이 만든 시스템과 공동체의 상호연결성, 조직의 구조와 기능, 사회적 의사결정, 경제 활동이 인류와 환경에 미치는 영향에 대한 탐구',
    centralIdeas: [
      '공동체는 다양한 방식으로 조직된다',
      '경제 시스템은 사람들의 삶에 영향을 미친다',
      '규칙과 법은 사회를 조직한다',
      '협력은 목표 달성에 필수적이다'
    ],
    programme: 'pyp'
  },
  {
    id: 'pyp-theme-sharing-planet',
    name: 'Sharing the Planet',
    nameKo: '지구 공유하기',
    description: 'An inquiry into rights and responsibilities in the struggle to share finite resources with other people and with other living things; communities and the relationships within and between them; access to equal opportunities; peace and conflict resolution.',
    descriptionKo: '다른 사람들과 다른 생물들과 유한한 자원을 공유하기 위한 노력에서의 권리와 책임, 공동체와 그 안팎의 관계, 평등한 기회에 대한 접근, 평화와 갈등 해결에 대한 탐구',
    centralIdeas: [
      '인간은 환경에 영향을 미치고 환경의 영향을 받는다',
      '자원은 유한하며 책임 있게 사용해야 한다',
      '모든 생물은 서로 연결되어 있다',
      '갈등은 다양한 방법으로 해결될 수 있다'
    ],
    programme: 'pyp'
  }
];

// ============================================
// MYP 글로벌 맥락 (Global Contexts)
// ============================================
export const GLOBAL_CONTEXTS: GlobalContext[] = [
  {
    id: 'myp-gc-identities',
    name: 'Identities and Relationships',
    nameKo: '정체성과 관계',
    description: 'Who we are: an inquiry into the nature of the self; beliefs and values; personal, physical, mental, social and spiritual health; human relationships including families, friends, communities and cultures; rights and responsibilities; what it means to be human.',
    descriptionKo: '우리가 누구인가: 자아의 본질, 신념과 가치, 개인적·신체적·정신적·사회적·영적 건강, 인간관계, 권리와 책임에 대한 탐구',
    explorations: [
      '경쟁과 협력',
      '팀, 친화력, 리더십',
      '정체성 형성',
      '자아 개념과 자존감',
      '신체적, 심리적, 사회적 발달',
      '갈등과 갈등 해결'
    ],
    programme: 'myp'
  },
  {
    id: 'myp-gc-orientation',
    name: 'Orientation in Space and Time',
    nameKo: '시공간에서의 위치',
    description: 'Where we are in place and time: an inquiry into orientation in place and time; personal histories; homes and journeys; the discoveries, explorations and migrations of humankind; the relationships between, and the interconnectedness of, individuals and civilizations.',
    descriptionKo: '시간과 장소에서 우리의 위치: 개인의 역사, 가정과 여정, 인류의 발견과 탐험, 이주, 개인과 문명 간의 관계에 대한 탐구',
    explorations: [
      '문명과 사회 역사, 유산, 순례',
      '시대, 전환점, 빅뱅',
      '규모, 기간, 빈도, 변이성',
      '사람들, 경계, 교환',
      '천연자원과 인간이 만든 자원',
      '정착, 이주, 이민'
    ],
    programme: 'myp'
  },
  {
    id: 'myp-gc-expression',
    name: 'Personal and Cultural Expression',
    nameKo: '개인적·문화적 표현',
    description: 'How we express ourselves: an inquiry into the ways in which we discover and express ideas, feelings, nature, culture, beliefs and values; the ways in which we reflect on, extend and enjoy our creativity; our appreciation of the aesthetic.',
    descriptionKo: '우리가 표현하는 방법: 아이디어, 감정, 문화, 신념, 가치를 발견하고 표현하는 방법, 창의성의 확장, 미적 감상에 대한 탐구',
    explorations: [
      '장인정신, 창의성, 아름다움',
      '제품, 시스템, 기관',
      '사회적 구성물, 철학, 방법',
      '비판적 문해력, 언어, 커뮤니케이션',
      '유산, 예술, 의식',
      '미학과 디자인'
    ],
    programme: 'myp'
  },
  {
    id: 'myp-gc-scientific',
    name: 'Scientific and Technical Innovation',
    nameKo: '과학기술 혁신',
    description: 'How the world works: an inquiry into the natural world and its laws; the interaction between the natural world and human societies; how humans use their understanding of scientific principles; the impact of scientific and technological advances.',
    descriptionKo: '세상이 작동하는 방식: 자연 세계와 그 법칙, 자연과 인간 사회의 상호작용, 과학 원리의 활용, 과학기술 발전의 영향에 대한 탐구',
    explorations: [
      '적응, 독창성, 발명',
      '시스템, 모델, 방법',
      '제품, 공정, 해결책',
      '원리, 발견, 법칙',
      '자연과 인간 환경의 상호작용',
      '과학과 기술의 윤리적 영향'
    ],
    programme: 'myp'
  },
  {
    id: 'myp-gc-fairness',
    name: 'Fairness and Development',
    nameKo: '공정성과 발전',
    description: 'How we organize ourselves: an inquiry into rights and responsibilities; the relationship between communities; sharing finite resources with other people and with other living things; access to equal opportunities; peace and conflict resolution.',
    descriptionKo: '우리가 조직하는 방법: 권리와 책임, 공동체 간 관계, 유한한 자원 공유, 평등한 기회 접근, 평화와 갈등 해결에 대한 탐구',
    explorations: [
      '민주주의, 정치, 정부',
      '정의, 평화, 갈등 해결',
      '평등, 권한 부여',
      '교육, 기부, 자선 활동',
      '물질적 자원, 인적 자원',
      '분배, 소비'
    ],
    programme: 'myp'
  },
  {
    id: 'myp-gc-globalization',
    name: 'Globalization and Sustainability',
    nameKo: '세계화와 지속가능성',
    description: 'Sharing the planet: an inquiry into the interconnectedness of human-made systems and communities; the structure and function of organizations; societal decision-making; economic activities and their impact on humankind and the environment.',
    descriptionKo: '지구 공유하기: 인간이 만든 시스템과 공동체의 상호연결성, 조직의 구조와 기능, 사회적 의사결정, 경제 활동의 영향에 대한 탐구',
    explorations: [
      '시장, 상품, 서비스',
      '커뮤니케이션, 미디어, 네트워크',
      '생태계와 생물다양성',
      '인간과 환경의 상호작용',
      '기후 변화',
      '지속가능한 발전과 책임'
    ],
    programme: 'myp'
  }
];

// ============================================
// ATL 기술 (Approaches to Learning Skills)
// ============================================
export const ATL_SKILLS: ATLSkill[] = [
  // 사고 기술 (Thinking Skills)
  {
    id: 'atl-think-critical',
    category: 'thinking',
    categoryKo: '사고 기술',
    skill: 'Critical thinking',
    skillKo: '비판적 사고',
    description: '이슈와 아이디어를 분석하고 평가하는 능력',
    indicators: [
      '증거와 논증을 분석한다',
      '아이디어와 주장을 평가한다',
      '결론과 일반화를 도출한다',
      '가설을 세우고 검증한다'
    ]
  },
  {
    id: 'atl-think-creative',
    category: 'thinking',
    categoryKo: '사고 기술',
    skill: 'Creative thinking',
    skillKo: '창의적 사고',
    description: '새로운 아이디어를 생성하고 기존 아이디어를 새로운 관점에서 고려하는 능력',
    indicators: [
      '다양한 해결책을 생성한다',
      '새로운 관점을 고려한다',
      '다양한 가능성을 탐구한다',
      '창의적 위험을 감수한다'
    ]
  },
  {
    id: 'atl-think-transfer',
    category: 'thinking',
    categoryKo: '사고 기술',
    skill: 'Transfer',
    skillKo: '전이',
    description: '기술과 지식을 다양한 맥락에서 활용하는 능력',
    indicators: [
      '학습을 새로운 상황에 적용한다',
      '교과 간 연결을 만든다',
      '현실 세계와 연결한다',
      '익숙한 것에서 새로운 것으로 연결한다'
    ]
  },
  {
    id: 'atl-think-reflection',
    category: 'thinking',
    categoryKo: '사고 기술',
    skill: 'Reflection',
    skillKo: '성찰',
    description: '자신의 학습과 사고에 대해 되돌아보는 능력',
    indicators: [
      '학습 과정을 성찰한다',
      '강점과 약점을 파악한다',
      '목표 설정과 모니터링을 한다',
      '피드백을 활용한다'
    ]
  },

  // 의사소통 기술 (Communication Skills)
  {
    id: 'atl-comm-exchange',
    category: 'communication',
    categoryKo: '의사소통 기술',
    skill: 'Communication',
    skillKo: '의사소통',
    description: '생각, 메시지, 정보를 효과적으로 교환하는 능력',
    indicators: [
      '아이디어를 명확하게 표현한다',
      '청중에 맞게 의사소통한다',
      '효과적으로 듣는다',
      '비언어적 의사소통을 해석한다'
    ]
  },
  {
    id: 'atl-comm-language',
    category: 'communication',
    categoryKo: '의사소통 기술',
    skill: 'Language',
    skillKo: '언어',
    description: '정보를 수집하고 전달하기 위해 언어를 사용하는 능력',
    indicators: [
      '다양한 목적으로 읽고 쓴다',
      '학술적 언어를 사용한다',
      '다양한 형식으로 정보를 조직한다',
      '정보의 정확성을 확인한다'
    ]
  },

  // 사회적 기술 (Social Skills)
  {
    id: 'atl-social-collab',
    category: 'social',
    categoryKo: '사회적 기술',
    skill: 'Collaboration',
    skillKo: '협력',
    description: '다른 사람들과 효과적으로 함께 일하는 능력',
    indicators: [
      '팀에서 책임을 진다',
      '공정한 결정을 내린다',
      '갈등을 건설적으로 해결한다',
      '다양한 관점을 존중한다'
    ]
  },

  // 자기관리 기술 (Self-management Skills)
  {
    id: 'atl-self-org',
    category: 'self_management',
    categoryKo: '자기관리 기술',
    skill: 'Organization',
    skillKo: '조직화',
    description: '시간과 과제를 효과적으로 관리하는 능력',
    indicators: [
      '시간을 효과적으로 관리한다',
      '마감일을 준수한다',
      '계획을 세우고 따른다',
      '자료를 정리한다'
    ]
  },
  {
    id: 'atl-self-affective',
    category: 'self_management',
    categoryKo: '자기관리 기술',
    skill: 'Affective',
    skillKo: '정서 관리',
    description: '마음 상태를 관리하고 인내심과 자기 동기를 개발하는 능력',
    indicators: [
      '스트레스를 관리한다',
      '실패에서 회복한다',
      '긍정적 태도를 유지한다',
      '자기 동기를 부여한다'
    ]
  },

  // 연구 기술 (Research Skills)
  {
    id: 'atl-research-info',
    category: 'research',
    categoryKo: '연구 기술',
    skill: 'Information literacy',
    skillKo: '정보 리터러시',
    description: '정보를 찾고, 해석하고, 판단하고, 만드는 능력',
    indicators: [
      '관련 정보를 찾는다',
      '정보의 신뢰성을 평가한다',
      '다양한 출처를 비교한다',
      '정보를 윤리적으로 사용한다'
    ]
  },
  {
    id: 'atl-research-media',
    category: 'research',
    categoryKo: '연구 기술',
    skill: 'Media literacy',
    skillKo: '미디어 리터러시',
    description: '미디어와 상호작용하여 아이디어와 정보를 사용하고 만드는 능력',
    indicators: [
      '미디어 메시지를 분석한다',
      '미디어의 영향을 이해한다',
      '다양한 미디어로 정보를 전달한다',
      '미디어를 책임감 있게 사용한다'
    ]
  }
];

// ============================================
// 학습자 상 (Learner Profile)
// ============================================
export const LEARNER_PROFILE: LearnerProfileAttribute[] = [
  {
    id: 'lp-inquirers',
    name: 'Inquirers',
    nameKo: '탐구하는 사람',
    description: 'We nurture our curiosity, developing skills for inquiry and research. We know how to learn independently and with others. We learn with enthusiasm and sustain our love of learning throughout life.',
    descriptionKo: '호기심을 기르고, 탐구와 연구를 위한 기술을 개발합니다. 독립적으로 그리고 다른 사람들과 함께 학습하는 방법을 알고 있습니다. 열정적으로 학습하고 평생 학습에 대한 사랑을 유지합니다.',
    studentActions: [
      '질문을 하고 답을 찾아본다',
      '다양한 방법으로 탐구한다',
      '새로운 것을 배우는 것을 즐긴다',
      '스스로 학습 목표를 설정한다'
    ]
  },
  {
    id: 'lp-knowledgeable',
    name: 'Knowledgeable',
    nameKo: '지식을 갖춘 사람',
    description: 'We develop and use conceptual understanding, exploring knowledge across a range of disciplines. We engage with issues and ideas that have local and global significance.',
    descriptionKo: '개념적 이해를 개발하고 사용하며, 다양한 학문 분야에 걸쳐 지식을 탐구합니다. 지역적으로나 세계적으로 중요한 이슈와 아이디어에 참여합니다.',
    studentActions: [
      '다양한 주제에 대해 배운다',
      '중요한 글로벌 이슈에 관심을 가진다',
      '배운 것을 실생활에 연결한다',
      '지식을 깊이 있게 이해한다'
    ]
  },
  {
    id: 'lp-thinkers',
    name: 'Thinkers',
    nameKo: '생각하는 사람',
    description: 'We use critical and creative thinking skills to analyse and take responsible action on complex problems. We exercise initiative in making reasoned, ethical decisions.',
    descriptionKo: '복잡한 문제를 분석하고 책임감 있게 행동하기 위해 비판적이고 창의적인 사고력을 사용합니다. 이성적이고 윤리적인 결정을 내리는 데 주도성을 발휘합니다.',
    studentActions: [
      '문제를 다양한 각도에서 분석한다',
      '창의적인 해결책을 찾는다',
      '논리적으로 사고한다',
      '윤리적인 결정을 내린다'
    ]
  },
  {
    id: 'lp-communicators',
    name: 'Communicators',
    nameKo: '소통하는 사람',
    description: 'We express ourselves confidently and creatively in more than one language and in many ways. We collaborate effectively, listening carefully to the perspectives of other individuals and groups.',
    descriptionKo: '하나 이상의 언어와 다양한 방법으로 자신감 있고 창의적으로 자신을 표현합니다. 다른 개인과 집단의 관점을 주의 깊게 듣고 효과적으로 협력합니다.',
    studentActions: [
      '자신의 생각을 명확하게 표현한다',
      '다른 사람의 말을 경청한다',
      '다양한 방법으로 의사소통한다',
      '다른 언어로 소통하려고 노력한다'
    ]
  },
  {
    id: 'lp-principled',
    name: 'Principled',
    nameKo: '원칙을 지키는 사람',
    description: 'We act with integrity and honesty, with a strong sense of fairness and justice, and with respect for the dignity of the individual, groups and communities. We take responsibility for our actions and their consequences.',
    descriptionKo: '정직하고 성실하게 행동하며, 공정함과 정의에 대한 강한 감각을 가지고 개인, 집단, 공동체의 존엄성을 존중합니다. 우리의 행동과 그 결과에 책임을 집니다.',
    studentActions: [
      '정직하게 행동한다',
      '규칙을 존중하고 따른다',
      '공정하게 행동한다',
      '자신의 행동에 책임을 진다'
    ]
  },
  {
    id: 'lp-open-minded',
    name: 'Open-minded',
    nameKo: '열린 마음을 가진 사람',
    description: 'We critically appreciate our own cultures and personal histories, as well as the values and traditions of others. We seek and evaluate a range of points of view, and we are willing to grow from the experience.',
    descriptionKo: '자신의 문화와 개인의 역사, 그리고 다른 사람들의 가치와 전통을 비판적으로 감상합니다. 다양한 관점을 탐구하고 평가하며, 경험을 통해 성장하려고 합니다.',
    studentActions: [
      '다른 문화에 대해 배운다',
      '다양한 관점을 고려한다',
      '새로운 아이디어에 열려 있다',
      '다른 의견을 존중한다'
    ]
  },
  {
    id: 'lp-caring',
    name: 'Caring',
    nameKo: '배려하는 사람',
    description: 'We show empathy, compassion and respect. We have a commitment to service, and we act to make a positive difference in the lives of others and in the world around us.',
    descriptionKo: '공감, 연민, 존중을 보여줍니다. 봉사에 헌신하며, 다른 사람들의 삶과 우리 주변 세계에 긍정적인 변화를 만들기 위해 행동합니다.',
    studentActions: [
      '다른 사람의 감정을 이해한다',
      '도움이 필요한 사람을 돕는다',
      '친절하게 행동한다',
      '환경을 돌본다'
    ]
  },
  {
    id: 'lp-risk-takers',
    name: 'Risk-takers',
    nameKo: '도전하는 사람',
    description: 'We approach uncertainty with forethought and determination; we work independently and cooperatively to explore new ideas and innovative strategies. We are resourceful and resilient in the face of challenges and change.',
    descriptionKo: '신중함과 결단력으로 불확실성에 접근합니다. 새로운 아이디어와 혁신적인 전략을 탐구하기 위해 독립적으로 그리고 협력적으로 일합니다. 도전과 변화 앞에서 자원이 풍부하고 회복력이 있습니다.',
    studentActions: [
      '새로운 것을 시도한다',
      '실수를 두려워하지 않는다',
      '어려운 과제에 도전한다',
      '실패에서 배운다'
    ]
  },
  {
    id: 'lp-balanced',
    name: 'Balanced',
    nameKo: '균형 잡힌 사람',
    description: 'We understand the importance of balancing different aspects of our lives—intellectual, physical, and emotional—to achieve well-being for ourselves and others. We recognize our interdependence with other people and with the world in which we live.',
    descriptionKo: '우리 자신과 다른 사람들의 안녕을 위해 지적, 신체적, 정서적 측면의 균형을 맞추는 것의 중요성을 이해합니다. 다른 사람들과 우리가 사는 세상과의 상호의존성을 인식합니다.',
    studentActions: [
      '공부와 놀이의 균형을 맞춘다',
      '건강을 돌본다',
      '다양한 활동에 참여한다',
      '감정을 건강하게 관리한다'
    ]
  },
  {
    id: 'lp-reflective',
    name: 'Reflective',
    nameKo: '성찰하는 사람',
    description: 'We thoughtfully consider the world and our own ideas and experience. We work to understand our strengths and weaknesses in order to support our learning and personal development.',
    descriptionKo: '세상과 우리 자신의 아이디어와 경험을 사려 깊게 생각합니다. 학습과 개인적 발전을 지원하기 위해 우리의 강점과 약점을 이해하려고 노력합니다.',
    studentActions: [
      '자신의 학습을 돌아본다',
      '실수에서 배운다',
      '목표를 세우고 점검한다',
      '피드백을 받아들인다'
    ]
  }
];

export default {
  TRANSDISCIPLINARY_THEMES,
  GLOBAL_CONTEXTS,
  ATL_SKILLS,
  LEARNER_PROFILE
};
