// 국제 교육 프레임워크 데이터베이스
// 전세계 개념기반 교육과정 및 역량 프레임워크 모음

// ============================================
// 타입 정의
// ============================================

export interface InternationalFramework {
  id: string;
  name: string;
  nameEn: string;
  country: string;
  description: string;
  descriptionEn: string;
  keyElements: FrameworkElement[];
  source: string;
  yearIntroduced: number;
  website?: string;
}

export interface FrameworkElement {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn?: string;
  subElements?: string[];
  subComponents?: string[];
}

export interface ConceptBasedModel {
  id: string;
  name: string;
  nameEn: string;
  author: string;
  description: string;
  phases?: ModelPhase[];
  keyPrinciples: string[];
  targetSubjects: string[];
  source: string;
}

export interface ModelPhase {
  order: number;
  name: string;
  nameEn: string;
  purpose: string;
  activities: string[];
}

export interface ThinkingFramework {
  id: string;
  name: string;
  nameEn: string;
  author: string;
  description: string;
  levels: ThinkingLevel[];
  source: string;
}

export interface ThinkingLevel {
  level: number;
  name: string;
  nameEn: string;
  description: string;
  verbs: string[];
  examples: string[];
}

export interface MYPRelatedConcept {
  id: string;
  name: string;
  nameEn: string;
  subject: string;
  definition: string;
  phases?: string;
}

// ============================================
// UK Big Ideas in Science (Wynne Harlen)
// ============================================

export const UK_BIG_IDEAS_SCIENCE: InternationalFramework = {
  id: 'uk-big-ideas-science',
  name: 'UK 과학 교육의 빅 아이디어',
  nameEn: 'UK Big Ideas of Science Education',
  country: 'UK',
  description: 'Wynne Harlen이 이끈 과학 교육자 팀이 개발한 10가지 과학 빅 아이디어와 4가지 과학에 대한 아이디어입니다.',
  descriptionEn: 'Ten Big Ideas of Science and four ideas about science developed by Wynne Harlen and a team of science educators.',
  keyElements: [
    {
      id: 'uk-sci-1',
      name: '물질의 입자성',
      nameEn: 'Particulate Nature of Matter',
      description: '모든 물질은 매우 작은 입자로 이루어져 있으며, 물질의 세 가지 상태와 변화를 설명할 수 있습니다.',
      subElements: ['원자', '분자', '상태 변화', '물질의 보존']
    },
    {
      id: 'uk-sci-2',
      name: '화학 반응',
      nameEn: 'Chemical Reactions',
      description: '화학 반응에서 원자들이 재배열되어 새로운 물질이 형성됩니다.',
      subElements: ['반응물과 생성물', '에너지 변화', '결합']
    },
    {
      id: 'uk-sci-3',
      name: '힘과 운동',
      nameEn: 'Forces and Motion',
      description: '물체의 운동 변화는 힘에 의해 일어나며, 힘의 효과는 물체의 질량에 따라 달라집니다.',
      subElements: ['뉴턴의 법칙', '중력', '마찰력', '가속도']
    },
    {
      id: 'uk-sci-4',
      name: '에너지',
      nameEn: 'Energy',
      description: '에너지는 전달되거나 변환될 수 있지만 전체 양은 보존됩니다.',
      subElements: ['에너지 전달', '에너지 변환', '에너지 보존']
    },
    {
      id: 'uk-sci-5',
      name: '지구 시스템',
      nameEn: 'Earth Systems',
      description: '지구는 내부와 외부의 힘에 의해 지속적으로 변화하는 시스템입니다.',
      subElements: ['판 구조론', '암석 순환', '기후', '물 순환']
    },
    {
      id: 'uk-sci-6',
      name: '우주',
      nameEn: 'The Universe',
      description: '우주의 구성과 지구의 위치, 그리고 우주의 진화를 이해합니다.',
      subElements: ['태양계', '별', '은하', '빅뱅']
    },
    {
      id: 'uk-sci-7',
      name: '생물의 세포',
      nameEn: 'Cells as Building Blocks',
      description: '모든 생물은 세포로 이루어져 있으며, 세포의 구조와 기능을 이해합니다.',
      subElements: ['세포 구조', '세포 분열', '조직과 기관']
    },
    {
      id: 'uk-sci-8',
      name: '유전과 진화',
      nameEn: 'Genetics and Evolution',
      description: '유전 정보가 세대 간에 전달되고, 변이와 자연선택을 통해 진화가 일어납니다.',
      subElements: ['DNA', '유전', '자연선택', '적응']
    },
    {
      id: 'uk-sci-9',
      name: '생태계',
      nameEn: 'Ecosystems',
      description: '생물은 환경과 다른 생물과 상호작용하며, 에너지와 물질이 순환합니다.',
      subElements: ['먹이 그물', '에너지 흐름', '물질 순환', '생물 다양성']
    },
    {
      id: 'uk-sci-10',
      name: '생물의 기능',
      nameEn: 'Organism Functions',
      description: '생물은 생존과 번식을 위해 다양한 기능을 수행합니다.',
      subElements: ['영양', '호흡', '생식', '반응']
    }
  ],
  source: 'Association for Science Education (ASE)',
  yearIntroduced: 2010,
  website: 'https://www.ase.org.uk/bigideas'
};

// ============================================
// Finland Transversal Competences
// ============================================

export const FINLAND_TRANSVERSAL_COMPETENCES: InternationalFramework = {
  id: 'finland-transversal',
  name: '핀란드 횡단적 역량',
  nameEn: 'Finland Transversal Competences',
  country: 'Finland',
  description: '2016년 핀란드 국가 교육과정에서 도입된 7가지 횡단적 역량으로, 모든 교과에서 발달시켜야 합니다.',
  descriptionEn: 'Seven transversal competences introduced in the 2016 Finnish National Core Curriculum, to be developed across all subjects.',
  keyElements: [
    {
      id: 'fin-tc-1',
      name: '사고와 학습 역량',
      nameEn: 'Thinking and Learning to Learn',
      description: '비판적, 창의적, 체계적 사고를 발달시키고 자기주도적 학습 능력을 기릅니다.',
      subElements: ['비판적 사고', '창의적 사고', '메타인지', '자기조절 학습']
    },
    {
      id: 'fin-tc-2',
      name: '문화적 역량, 상호작용, 표현',
      nameEn: 'Cultural Competence, Interaction and Expression',
      description: '문화적 다양성을 이해하고 존중하며, 다양한 방식으로 자신을 표현합니다.',
      subElements: ['문화 이해', '의사소통', '예술적 표현', '상호문화 역량']
    },
    {
      id: 'fin-tc-3',
      name: '자기 돌봄과 일상 관리',
      nameEn: 'Taking Care of Oneself and Managing Daily Life',
      description: '건강, 안전, 일상생활을 관리하는 능력을 기릅니다.',
      subElements: ['건강관리', '안전', '시간관리', '재정관리']
    },
    {
      id: 'fin-tc-4',
      name: '다중 리터러시',
      nameEn: 'Multiliteracy',
      description: '다양한 텍스트와 미디어를 해석하고 생산하는 능력입니다.',
      subElements: ['텍스트 이해', '미디어 리터러시', '정보 리터러시', '비주얼 리터러시']
    },
    {
      id: 'fin-tc-5',
      name: 'ICT 역량',
      nameEn: 'ICT Competence',
      description: '정보통신기술을 효과적이고 책임감 있게 사용하는 능력입니다.',
      subElements: ['디지털 도구 활용', '정보 검색', '디지털 창작', '디지털 안전']
    },
    {
      id: 'fin-tc-6',
      name: '직업 생활과 기업가 정신',
      nameEn: 'Working Life Competence and Entrepreneurship',
      description: '직업 세계를 이해하고 기업가적 태도를 발달시킵니다.',
      subElements: ['협력', '프로젝트 관리', '창업 마인드', '직업 탐색']
    },
    {
      id: 'fin-tc-7',
      name: '참여, 영향력, 지속가능한 미래 구축',
      nameEn: 'Participation, Involvement, Building a Sustainable Future',
      description: '민주적 참여와 지속가능한 발전에 기여하는 능력입니다.',
      subElements: ['시민 참여', '민주주의', '지속가능발전', '사회적 책임']
    }
  ],
  source: 'Finnish National Agency for Education (FNAE)',
  yearIntroduced: 2016,
  website: 'https://www.oph.fi/en'
};

// ============================================
// Singapore 21st Century Competencies
// ============================================

export const SINGAPORE_21CC: InternationalFramework = {
  id: 'singapore-21cc',
  name: '싱가포르 21세기 역량 프레임워크',
  nameEn: 'Singapore 21st Century Competencies Framework',
  country: 'Singapore',
  description: '싱가포르 교육부가 2010년에 도입한 프레임워크로, 핵심 가치를 중심으로 사회정서적 역량과 21세기 역량을 구축합니다.',
  descriptionEn: 'Framework introduced by Singapore MOE in 2010, building social-emotional competencies and 21CC around core values.',
  keyElements: [
    {
      id: 'sg-core-values',
      name: '핵심 가치',
      nameEn: 'Core Values',
      description: '프레임워크의 중심에 있는 핵심 가치들입니다.',
      subElements: ['존중 (Respect)', '책임 (Responsibility)', '회복탄력성 (Resilience)', '진실성 (Integrity)', '배려 (Care)', '조화 (Harmony)']
    },
    {
      id: 'sg-sec',
      name: '사회정서적 역량',
      nameEn: 'Social-Emotional Competencies',
      description: '중간 링에 위치한 사회정서적 역량입니다.',
      subElements: ['자기인식', '자기관리', '사회적 인식', '관계 관리', '책임 있는 의사결정']
    },
    {
      id: 'sg-21cc-civic',
      name: '시민 리터러시, 글로벌 인식, 다문화 역량',
      nameEn: 'Civic Literacy, Global Awareness and Cross-Cultural Skills',
      description: '시민으로서, 글로벌 시민으로서의 역량을 기릅니다.',
      subElements: ['시민 의식', '글로벌 이슈 이해', '문화 간 소통']
    },
    {
      id: 'sg-21cc-thinking',
      name: '비판적, 창의적 사고',
      nameEn: 'Critical and Inventive Thinking',
      description: '복잡한 문제를 해결하고 새로운 아이디어를 창출하는 역량입니다.',
      subElements: ['비판적 분석', '창의적 문제해결', '혁신', '의사결정']
    },
    {
      id: 'sg-21cc-communication',
      name: '소통, 협력, 정보 역량',
      nameEn: 'Communication, Collaboration and Information Skills',
      description: '효과적으로 소통하고 협력하며 정보를 처리하는 역량입니다.',
      subElements: ['구두 소통', '문서 소통', '협업', '정보 리터러시']
    }
  ],
  source: 'Singapore Ministry of Education',
  yearIntroduced: 2010,
  website: 'https://www.moe.gov.sg/education-in-sg/21st-century-competencies'
};

// ============================================
// Australian Curriculum General Capabilities
// ============================================

export const AUSTRALIAN_GENERAL_CAPABILITIES: InternationalFramework = {
  id: 'australia-capabilities',
  name: '호주 교육과정 일반 역량',
  nameEn: 'Australian Curriculum General Capabilities',
  country: 'Australia',
  description: '호주 교육과정의 핵심 차원으로, 모든 학습 영역에서 발달시키는 7가지 일반 역량입니다.',
  descriptionEn: 'Seven general capabilities that are a key dimension of the Australian Curriculum, addressed through the content of learning areas.',
  keyElements: [
    {
      id: 'au-literacy',
      name: '리터러시',
      nameEn: 'Literacy',
      description: '텍스트를 이해하고 생산하는 지식과 기술입니다.',
      subElements: ['읽기', '쓰기', '말하기', '듣기', '시각적 리터러시']
    },
    {
      id: 'au-numeracy',
      name: '수리력',
      nameEn: 'Numeracy',
      description: '수학적 개념과 기술을 실제 상황에 적용하는 능력입니다.',
      subElements: ['수와 대수', '측정과 기하', '통계와 확률']
    },
    {
      id: 'au-ict',
      name: '디지털 리터러시',
      nameEn: 'Digital Literacy',
      description: 'ICT를 효과적이고 책임감 있게 사용하는 능력입니다.',
      subElements: ['디지털 도구 활용', '정보 관리', '디지털 창작', '디지털 시민성']
    },
    {
      id: 'au-critical-creative',
      name: '비판적, 창의적 사고',
      nameEn: 'Critical and Creative Thinking',
      description: '분석, 평가, 종합하고 새로운 아이디어를 생성하는 능력입니다.',
      subElements: ['탐구', '분석', '평가', '반성', '창의적 생성']
    },
    {
      id: 'au-personal-social',
      name: '개인적, 사회적 역량',
      nameEn: 'Personal and Social Capability',
      description: '자기인식, 자기관리, 사회적 인식, 사회적 관리 능력입니다.',
      subElements: ['자기인식', '자기관리', '사회적 인식', '관계 기술']
    },
    {
      id: 'au-ethical',
      name: '윤리적 이해',
      nameEn: 'Ethical Understanding',
      description: '윤리적 문제를 탐구하고 도덕적 판단을 내리는 능력입니다.',
      subElements: ['윤리적 개념 이해', '윤리적 추론', '윤리적 행동']
    },
    {
      id: 'au-intercultural',
      name: '상호문화적 이해',
      nameEn: 'Intercultural Understanding',
      description: '문화적 차이를 이해하고 존중하며 다양한 문화와 소통하는 능력입니다.',
      subElements: ['문화 인식', '문화 다양성 이해', '상호문화적 소통']
    }
  ],
  source: 'Australian Curriculum, Assessment and Reporting Authority (ACARA)',
  yearIntroduced: 2010,
  website: 'https://www.australiancurriculum.edu.au/f-10-curriculum/general-capabilities'
};

// ============================================
// New Zealand Key Competencies
// ============================================

export const NEW_ZEALAND_KEY_COMPETENCIES: InternationalFramework = {
  id: 'nz-key-competencies',
  name: '뉴질랜드 핵심 역량',
  nameEn: 'New Zealand Key Competencies',
  country: 'New Zealand',
  description: '2007년 뉴질랜드 교육과정에서 도입된 5가지 핵심 역량으로, 생애 학습을 위한 능력입니다.',
  descriptionEn: 'Five key competencies introduced in the 2007 New Zealand Curriculum, capabilities for living and lifelong learning.',
  keyElements: [
    {
      id: 'nz-thinking',
      name: '사고',
      nameEn: 'Thinking',
      description: '호기심을 갖고 창의적, 비판적, 메타인지적 사고를 통해 정보와 경험을 이해하고 새로운 지식을 창출합니다.',
      subElements: ['호기심', '창의적 사고', '비판적 사고', '메타인지', '문제해결']
    },
    {
      id: 'nz-language-symbols',
      name: '언어, 기호, 텍스트 사용',
      nameEn: 'Using Language, Symbols and Texts',
      description: '정보, 경험, 아이디어를 해석하고 소통하는 다양한 방식입니다.',
      subElements: ['읽기와 쓰기', '수학적 표현', '시각적 표현', 'ICT 활용']
    },
    {
      id: 'nz-managing-self',
      name: '자기 관리',
      nameEn: 'Managing Self',
      description: '자신의 학습을 관리하고 도전에 대응하며 회복탄력성을 갖춘 학습자가 됩니다.',
      subElements: ['자기 동기', '목표 설정', '시간 관리', '회복탄력성']
    },
    {
      id: 'nz-relating-others',
      name: '타인과 관계 맺기',
      nameEn: 'Relating to Others',
      description: '다양한 상황에서 타인과 효과적으로 상호작용하는 능력입니다.',
      subElements: ['경청', '공감', '협력', '갈등 해결']
    },
    {
      id: 'nz-participating',
      name: '참여와 기여',
      nameEn: 'Participating and Contributing',
      description: '공동체의 적극적인 구성원으로 참여하고 기여하는 능력입니다.',
      subElements: ['팀워크', '리더십', '시민 참여', '사회적 기여']
    }
  ],
  source: 'New Zealand Ministry of Education',
  yearIntroduced: 2007,
  website: 'https://nzcurriculum.tki.org.nz/Key-competencies'
};

// ============================================
// Canada Ontario Big Ideas
// ============================================

export const CANADA_ONTARIO_BIG_IDEAS: InternationalFramework = {
  id: 'canada-ontario-big-ideas',
  name: '캐나다 온타리오 빅 아이디어',
  nameEn: 'Canada Ontario Curriculum Big Ideas',
  country: 'Canada',
  description: '온타리오 주 교육과정에서 사용하는 빅 아이디어 접근법으로, 각 학년과 교과의 핵심 개념을 표현합니다.',
  descriptionEn: 'Big Ideas approach used in Ontario curriculum to express core concepts for each grade and subject.',
  keyElements: [
    {
      id: 'on-math-big-ideas',
      name: '수학 빅 아이디어',
      nameEn: 'Mathematics Big Ideas',
      description: '수학 교육과정의 핵심 개념들입니다.',
      subElements: ['수 감각', '대수적 사고', '공간 추론', '비례적 추론', '데이터 분석']
    },
    {
      id: 'on-science-big-ideas',
      name: '과학/기술 빅 아이디어',
      nameEn: 'Science and Technology Big Ideas',
      description: '과학과 기술 교육과정의 핵심 개념들입니다.',
      subElements: ['생명 체계', '물질과 에너지', '지구와 우주', '구조와 메커니즘']
    },
    {
      id: 'on-social-big-ideas',
      name: '사회과 빅 아이디어',
      nameEn: 'Social Studies Big Ideas',
      description: '사회과 교육과정의 핵심 개념들입니다.',
      subElements: ['시민성', '정체성', '관계', '환경']
    }
  ],
  source: 'Ontario Ministry of Education',
  yearIntroduced: 2005,
  website: 'https://www.ontario.ca/page/ontario-curriculum'
};

// ============================================
// Japan Competency-Based Curriculum
// ============================================

export const JAPAN_COMPETENCY_CURRICULUM: InternationalFramework = {
  id: 'japan-competency',
  name: '일본 자질·능력 기반 교육과정',
  nameEn: 'Japan Competency-Based Curriculum (資質・能力)',
  country: 'Japan',
  description: '2020년부터 시행된 일본의 역량 통합형 교육과정으로, 지식·기능, 사고력·판단력·표현력, 학습 의욕의 세 요소를 강조합니다.',
  descriptionEn: 'Japan\'s competency-integrated curriculum implemented from 2020, emphasizing knowledge/skills, thinking/judgment/expression, and motivation to learn.',
  keyElements: [
    {
      id: 'jp-knowledge-skills',
      name: '지식 및 기능',
      nameEn: 'Knowledge and Skills',
      description: '각 교과의 핵심 지식과 기능을 습득합니다.',
      subElements: ['기초 지식', '기본 기능', '교과 내용']
    },
    {
      id: 'jp-thinking',
      name: '사고력·판단력·표현력',
      nameEn: 'Thinking, Judgment, Expression',
      description: '지식을 활용하여 사고하고 판단하며 표현하는 능력입니다.',
      subElements: ['비판적 사고', '창의적 사고', '문제해결', '의사소통']
    },
    {
      id: 'jp-motivation',
      name: '학습에 임하는 태도·인간성',
      nameEn: 'Motivation to Learn and Humanity',
      description: '학습 의욕과 인간적 성장을 추구합니다.',
      subElements: ['학습 동기', '주체적 학습', '협력적 태도', '인성']
    },
    {
      id: 'jp-active-learning',
      name: '주체적·대화적·깊은 학습',
      nameEn: 'Active Learning (主体的・対話的・深い学び)',
      description: '능동적이고 대화적인 깊은 학습을 추구합니다.',
      subElements: ['주체적 학습', '협력 학습', '탐구 학습', '프로젝트 학습']
    },
    {
      id: 'jp-ikiru-chikara',
      name: '살아가는 힘 (生きる力)',
      nameEn: 'Zest for Living (Ikiru Chikara)',
      description: '변화하는 사회에서 살아가는 데 필요한 종합적 역량입니다.',
      subElements: ['확실한 학력', '풍부한 인간성', '건강·체력']
    }
  ],
  source: 'Japanese Ministry of Education, Culture, Sports, Science and Technology (MEXT)',
  yearIntroduced: 2020,
  website: 'https://www.mext.go.jp/'
};

// ============================================
// China Core Competencies (核心素养)
// ============================================

export const CHINA_CORE_COMPETENCIES: InternationalFramework = {
  id: 'china-core-competencies',
  name: '중국 학생 핵심 소양 (核心素养)',
  nameEn: 'China Core Competencies for Student Development',
  country: 'China',
  description: '2016년 중국 교육부가 발표한 핵심 역량 프레임워크로, 3가지 차원, 6가지 모듈, 18가지 요소로 구성됩니다.',
  descriptionEn: 'Core competencies framework released by China MOE in 2016, consisting of 3 dimensions, 6 modules, and 18 items.',
  keyElements: [
    {
      id: 'cn-cultural-foundation',
      name: '문화적 기초 (文化基础)',
      nameEn: 'Cultural Foundation',
      description: '인문적 소양과 과학적 정신을 함양합니다.',
      subElements: ['인문적 축적', '인문적 정서', '심미적 감상', '과학적 정신', '이성적 사고', '탐구 능력']
    },
    {
      id: 'cn-autonomous-development',
      name: '자주적 발전 (自主发展)',
      nameEn: 'Autonomous Development',
      description: '학습 능력과 건강한 생활 능력을 기릅니다.',
      subElements: ['학습 의지', '학습 방법', '정보 의식', '건강 생활', '심리적 건강', '자기 관리']
    },
    {
      id: 'cn-social-participation',
      name: '사회 참여 (社会参与)',
      nameEn: 'Social Participation',
      description: '책임 의식과 실천 혁신 능력을 기릅니다.',
      subElements: ['사회적 책임', '국가 정체성', '국제 이해', '문제 해결', '기술 활용', '창신 의식']
    }
  ],
  source: 'Chinese Ministry of Education',
  yearIntroduced: 2016,
  website: 'http://www.moe.gov.cn/'
};

// ============================================
// Concept-Based Inquiry Model (French & Marschall)
// ============================================

export const CONCEPT_BASED_INQUIRY_MODEL: ConceptBasedModel = {
  id: 'cbi-french-marschall',
  name: '개념기반 탐구 모델',
  nameEn: 'Concept-Based Inquiry Model',
  author: 'Carla Marschall & Rachel French',
  description: '개념기반 교육과정과 탐구 학습을 통합한 6단계 모델로, 전이 가능한 이해를 촉진합니다.',
  phases: [
    {
      order: 1,
      name: '참여',
      nameEn: 'Engage',
      purpose: '학습자의 호기심을 유발하고 탐구에 대한 동기를 부여합니다.',
      activities: ['도발적 질문', '현상 관찰', '모순 제시', '실생활 연결', '사전 지식 활성화']
    },
    {
      order: 2,
      name: '초점',
      nameEn: 'Focus',
      purpose: '탐구의 방향을 설정하고 핵심 개념과 일반화에 초점을 맞춥니다.',
      activities: ['핵심 개념 도입', '탐구 질문 개발', '학습 목표 설정', '성공 기준 공유']
    },
    {
      order: 3,
      name: '탐구',
      nameEn: 'Investigate',
      purpose: '자료를 수집하고 분석하여 개념적 이해를 구축합니다.',
      activities: ['자료 수집', '실험', '연구', '인터뷰', '현장 조사', '다양한 관점 탐색']
    },
    {
      order: 4,
      name: '조직',
      nameEn: 'Organize',
      purpose: '수집한 정보를 조직하고 패턴과 연결을 찾습니다.',
      activities: ['분류', '비교', '대조', '패턴 찾기', '그래픽 오거나이저 활용', '관계 시각화']
    },
    {
      order: 5,
      name: '일반화',
      nameEn: 'Generalize',
      purpose: '탐구 결과를 바탕으로 개념적 일반화를 도출합니다.',
      activities: ['일반화 진술', '증거 기반 주장', '개념 간 관계 정의', '이론 형성', '원리 도출']
    },
    {
      order: 6,
      name: '전이/성찰',
      nameEn: 'Transfer/Reflect',
      purpose: '학습한 개념을 새로운 상황에 적용하고 학습 과정을 성찰합니다.',
      activities: ['새로운 맥락 적용', '문제 해결', '창작', '자기 평가', '학습 과정 성찰', '다음 단계 계획']
    }
  ],
  keyPrinciples: [
    '개념적 렌즈를 통한 탐구',
    '귀납적 사고와 연역적 사고의 균형',
    '전이 가능한 이해 구축',
    '학생 주도적 탐구',
    '지속적인 성찰'
  ],
  targetSubjects: ['all'],
  source: 'Concept-Based Inquiry in Action (2018)'
};

// ============================================
// Structure of Knowledge & Process (Erickson & Lanning)
// ============================================

export const STRUCTURE_OF_KNOWLEDGE: ConceptBasedModel = {
  id: 'structure-of-knowledge',
  name: '지식의 구조',
  nameEn: 'Structure of Knowledge',
  author: 'H. Lynn Erickson',
  description: '지식이 사실, 주제, 개념, 원리/일반화로 구성되는 방식을 나타내는 모델입니다.',
  keyPrinciples: [
    '사실(Facts): 구체적인 정보, 예시',
    '주제(Topics): 관련된 사실들의 집합',
    '개념(Concepts): 시간과 장소를 초월하는 추상적 아이디어',
    '원리/일반화(Principles/Generalizations): 개념 간의 관계를 진술',
    '이론(Theory): 검증된 원리들의 체계'
  ],
  targetSubjects: ['social_studies', 'science', 'math'],
  source: 'Concept-Based Curriculum and Instruction (2017)'
};

export const STRUCTURE_OF_PROCESS: ConceptBasedModel = {
  id: 'structure-of-process',
  name: '과정의 구조',
  nameEn: 'Structure of Process',
  author: 'Lois A. Lanning',
  description: '과정 중심 교과(언어, 예술, 체육 등)를 위한 모델로, 전략, 기술, 과정이 개념적 이해로 연결됩니다.',
  keyPrinciples: [
    '과정(Processes): 복잡한 수행을 구성하는 단계들',
    '전략(Strategies): 과정을 효과적으로 수행하기 위한 접근법',
    '기술(Skills): 구체적인 능력과 테크닉',
    '개념(Concepts): 왜 전략과 기술이 효과적인지 설명',
    '일반화(Generalizations): 과정에 대한 전이 가능한 이해'
  ],
  targetSubjects: ['korean', 'english', 'art', 'music', 'physical_education'],
  source: 'Transitioning to Concept-Based Curriculum and Instruction (2014)'
};

// ============================================
// Bloom's Revised Taxonomy (Anderson & Krathwohl)
// ============================================

export const BLOOMS_REVISED_TAXONOMY: ThinkingFramework = {
  id: 'blooms-revised',
  name: "블룸의 수정된 분류체계",
  nameEn: "Bloom's Revised Taxonomy",
  author: 'Lorin Anderson & David Krathwohl',
  description: '2001년에 수정된 인지적 과정의 분류체계로, 동사형으로 표현되며 6단계의 인지 과정과 4가지 지식 유형을 포함합니다.',
  levels: [
    {
      level: 1,
      name: '기억하기',
      nameEn: 'Remember',
      description: '관련 지식을 장기 기억에서 인출합니다.',
      verbs: ['인식하다', '회상하다', '나열하다', '명명하다', '정의하다'],
      examples: ['사실 기억', '용어 정의', '목록 작성']
    },
    {
      level: 2,
      name: '이해하기',
      nameEn: 'Understand',
      description: '구두, 문서, 그래픽 메시지에서 의미를 구성합니다.',
      verbs: ['해석하다', '예시하다', '분류하다', '요약하다', '추론하다', '비교하다', '설명하다'],
      examples: ['개념 설명', '비유 만들기', '요약하기']
    },
    {
      level: 3,
      name: '적용하기',
      nameEn: 'Apply',
      description: '주어진 상황에서 절차를 사용하거나 실행합니다.',
      verbs: ['실행하다', '구현하다', '사용하다', '적용하다', '시연하다'],
      examples: ['문제 해결', '기술 적용', '절차 실행']
    },
    {
      level: 4,
      name: '분석하기',
      nameEn: 'Analyze',
      description: '자료를 구성 부분으로 분해하고 관계를 파악합니다.',
      verbs: ['구별하다', '조직하다', '귀속하다', '분해하다', '비교하다', '대조하다'],
      examples: ['요소 식별', '관계 분석', '원인 탐구']
    },
    {
      level: 5,
      name: '평가하기',
      nameEn: 'Evaluate',
      description: '기준에 근거하여 판단합니다.',
      verbs: ['점검하다', '비평하다', '판단하다', '평가하다', '정당화하다'],
      examples: ['주장 평가', '결과 판단', '기준 적용']
    },
    {
      level: 6,
      name: '창조하기',
      nameEn: 'Create',
      description: '요소들을 결합하여 새로운 전체를 형성합니다.',
      verbs: ['생성하다', '계획하다', '생산하다', '설계하다', '구성하다', '발명하다'],
      examples: ['새로운 해결책 제시', '원래 작품 창작', '가설 생성']
    }
  ],
  source: 'A Taxonomy for Learning, Teaching, and Assessing (2001)'
};

// ============================================
// Webb's Depth of Knowledge (DOK)
// ============================================

export const WEBBS_DOK: ThinkingFramework = {
  id: 'webbs-dok',
  name: "웹의 지식의 깊이",
  nameEn: "Webb's Depth of Knowledge",
  author: 'Norman Webb',
  description: '인지적 복잡성에 따라 학습 과제를 분류하는 4단계 프레임워크입니다. 난이도가 아닌 복잡성을 측정합니다.',
  levels: [
    {
      level: 1,
      name: '회상과 재생',
      nameEn: 'Recall and Reproduction',
      description: '사실을 회상하거나 단순한 절차를 적용합니다.',
      verbs: ['회상하다', '인식하다', '나열하다', '정의하다', '계산하다'],
      examples: ['사실 기억', '공식 적용', '용어 정의']
    },
    {
      level: 2,
      name: '기술과 개념',
      nameEn: 'Skills and Concepts',
      description: '개념 간의 관계를 이해하고 기술을 적용합니다.',
      verbs: ['비교하다', '분류하다', '조직하다', '추정하다', '예측하다', '설명하다'],
      examples: ['정보 비교', '원인-결과 설명', '데이터 해석']
    },
    {
      level: 3,
      name: '전략적 사고',
      nameEn: 'Strategic Thinking',
      description: '복잡한 추론과 계획이 필요하며, 증거 기반 주장을 합니다.',
      verbs: ['분석하다', '평가하다', '정당화하다', '가설을 세우다', '조사하다'],
      examples: ['논거 개발', '결론 도출', '복잡한 문제 해결']
    },
    {
      level: 4,
      name: '확장된 사고',
      nameEn: 'Extended Thinking',
      description: '장시간에 걸쳐 여러 출처에서 종합하고, 영역 간 지식을 전이합니다.',
      verbs: ['설계하다', '연결하다', '종합하다', '창조하다', '비평하다'],
      examples: ['독창적 연구', '복잡한 프로젝트', '새로운 이론 개발']
    }
  ],
  source: 'Webb (1997)'
};

// ============================================
// IB MYP Related Concepts by Subject
// ============================================

export const MYP_RELATED_CONCEPTS: MYPRelatedConcept[] = [
  // Language and Literature
  { id: 'mrc-ll-audience', name: '청중/독자', nameEn: 'Audience Imperatives', subject: 'language_literature', definition: '텍스트가 특정 청중을 위해 어떻게 구성되는지' },
  { id: 'mrc-ll-character', name: '인물', nameEn: 'Character', subject: 'language_literature', definition: '문학에서 인물의 묘사와 발전' },
  { id: 'mrc-ll-context', name: '맥락', nameEn: 'Context', subject: 'language_literature', definition: '텍스트가 생산되고 수용되는 상황' },
  { id: 'mrc-ll-genre', name: '장르', nameEn: 'Genres', subject: 'language_literature', definition: '텍스트의 유형과 관습' },
  { id: 'mrc-ll-intertextuality', name: '상호텍스트성', nameEn: 'Intertextuality', subject: 'language_literature', definition: '텍스트 간의 연결과 참조' },
  { id: 'mrc-ll-pov', name: '시점', nameEn: 'Point of View', subject: 'language_literature', definition: '서술 관점' },
  { id: 'mrc-ll-purpose', name: '목적', nameEn: 'Purpose', subject: 'language_literature', definition: '텍스트의 의도와 기능' },
  { id: 'mrc-ll-expression', name: '자기표현', nameEn: 'Self-expression', subject: 'language_literature', definition: '개인적 목소리와 정체성 표현' },
  { id: 'mrc-ll-setting', name: '배경', nameEn: 'Setting', subject: 'language_literature', definition: '시간과 장소의 맥락' },
  { id: 'mrc-ll-structure', name: '구조', nameEn: 'Structure', subject: 'language_literature', definition: '텍스트의 조직과 형태' },
  { id: 'mrc-ll-style', name: '문체', nameEn: 'Style', subject: 'language_literature', definition: '언어 선택과 표현 방식' },
  { id: 'mrc-ll-theme', name: '주제', nameEn: 'Theme', subject: 'language_literature', definition: '텍스트의 중심 아이디어' },

  // Sciences
  { id: 'mrc-sci-balance', name: '균형', nameEn: 'Balance', subject: 'sciences', definition: '시스템 내의 평형 상태' },
  { id: 'mrc-sci-consequences', name: '결과', nameEn: 'Consequences', subject: 'sciences', definition: '행동이나 현상의 효과' },
  { id: 'mrc-sci-energy', name: '에너지', nameEn: 'Energy', subject: 'sciences', definition: '일을 수행하는 능력' },
  { id: 'mrc-sci-environment', name: '환경', nameEn: 'Environment', subject: 'sciences', definition: '생물을 둘러싼 조건들' },
  { id: 'mrc-sci-evidence', name: '증거', nameEn: 'Evidence', subject: 'sciences', definition: '주장을 뒷받침하는 데이터' },
  { id: 'mrc-sci-form', name: '형태', nameEn: 'Form', subject: 'sciences', definition: '물체의 외형과 구조' },
  { id: 'mrc-sci-function', name: '기능', nameEn: 'Function', subject: 'sciences', definition: '역할과 목적' },
  { id: 'mrc-sci-interaction', name: '상호작용', nameEn: 'Interaction', subject: 'sciences', definition: '요소들 간의 영향' },
  { id: 'mrc-sci-models', name: '모델', nameEn: 'Models', subject: 'sciences', definition: '현상의 표현' },
  { id: 'mrc-sci-movement', name: '운동', nameEn: 'Movement', subject: 'sciences', definition: '위치나 상태의 변화' },
  { id: 'mrc-sci-patterns', name: '패턴', nameEn: 'Patterns', subject: 'sciences', definition: '반복되는 규칙성' },
  { id: 'mrc-sci-transformation', name: '변환', nameEn: 'Transformation', subject: 'sciences', definition: '형태나 성질의 변화' },

  // Mathematics
  { id: 'mrc-math-approximation', name: '근사', nameEn: 'Approximation', subject: 'mathematics', definition: '정확한 값에 가까운 추정' },
  { id: 'mrc-math-change', name: '변화', nameEn: 'Change', subject: 'mathematics', definition: '양의 변동' },
  { id: 'mrc-math-equivalence', name: '동치', nameEn: 'Equivalence', subject: 'mathematics', definition: '같은 값을 가진 표현들' },
  { id: 'mrc-math-generalization', name: '일반화', nameEn: 'Generalization', subject: 'mathematics', definition: '패턴에서 규칙 도출' },
  { id: 'mrc-math-measurement', name: '측정', nameEn: 'Measurement', subject: 'mathematics', definition: '양의 정량화' },
  { id: 'mrc-math-model', name: '모델', nameEn: 'Model', subject: 'mathematics', definition: '수학적 표현' },
  { id: 'mrc-math-pattern', name: '패턴', nameEn: 'Pattern', subject: 'mathematics', definition: '수학적 규칙성' },
  { id: 'mrc-math-quantity', name: '양', nameEn: 'Quantity', subject: 'mathematics', definition: '수량과 크기' },
  { id: 'mrc-math-representation', name: '표현', nameEn: 'Representation', subject: 'mathematics', definition: '수학적 아이디어의 표시' },
  { id: 'mrc-math-simplification', name: '단순화', nameEn: 'Simplification', subject: 'mathematics', definition: '더 간단한 형태로 변환' },
  { id: 'mrc-math-space', name: '공간', nameEn: 'Space', subject: 'mathematics', definition: '기하학적 영역' },
  { id: 'mrc-math-validity', name: '타당성', nameEn: 'Validity', subject: 'mathematics', definition: '논증의 정당성' },

  // Individuals and Societies
  { id: 'mrc-is-causality', name: '인과관계', nameEn: 'Causality', subject: 'individuals_societies', definition: '원인과 결과의 관계' },
  { id: 'mrc-is-choice', name: '선택', nameEn: 'Choice', subject: 'individuals_societies', definition: '대안들 중 결정' },
  { id: 'mrc-is-culture', name: '문화', nameEn: 'Culture', subject: 'individuals_societies', definition: '공유된 신념과 관습' },
  { id: 'mrc-is-equity', name: '형평성', nameEn: 'Equity', subject: 'individuals_societies', definition: '공정성과 정의' },
  { id: 'mrc-is-globalization', name: '세계화', nameEn: 'Globalization', subject: 'individuals_societies', definition: '국제적 통합 과정' },
  { id: 'mrc-is-identity', name: '정체성', nameEn: 'Identity', subject: 'individuals_societies', definition: '개인/집단의 특성' },
  { id: 'mrc-is-ideology', name: '이념', nameEn: 'Ideology', subject: 'individuals_societies', definition: '신념과 가치 체계' },
  { id: 'mrc-is-innovation', name: '혁신', nameEn: 'Innovation', subject: 'individuals_societies', definition: '새로운 아이디어와 방법' },
  { id: 'mrc-is-power', name: '권력', nameEn: 'Power', subject: 'individuals_societies', definition: '영향력과 통제' },
  { id: 'mrc-is-processes', name: '과정', nameEn: 'Processes', subject: 'individuals_societies', definition: '변화의 단계들' },
  { id: 'mrc-is-resources', name: '자원', nameEn: 'Resources', subject: 'individuals_societies', definition: '사용 가능한 재화' },
  { id: 'mrc-is-sustainability', name: '지속가능성', nameEn: 'Sustainability', subject: 'individuals_societies', definition: '장기적 유지 가능성' },

  // Arts
  { id: 'mrc-art-audience', name: '관객', nameEn: 'Audience', subject: 'arts', definition: '예술 작품의 수용자' },
  { id: 'mrc-art-boundaries', name: '경계', nameEn: 'Boundaries', subject: 'arts', definition: '예술 형식의 한계' },
  { id: 'mrc-art-composition', name: '구성', nameEn: 'Composition', subject: 'arts', definition: '요소들의 배열' },
  { id: 'mrc-art-expression', name: '표현', nameEn: 'Expression', subject: 'arts', definition: '감정과 아이디어 전달' },
  { id: 'mrc-art-genre', name: '장르', nameEn: 'Genre', subject: 'arts', definition: '예술의 유형과 양식' },
  { id: 'mrc-art-innovation', name: '혁신', nameEn: 'Innovation', subject: 'arts', definition: '새로운 예술적 접근' },
  { id: 'mrc-art-interpretation', name: '해석', nameEn: 'Interpretation', subject: 'arts', definition: '의미의 이해' },
  { id: 'mrc-art-narrative', name: '서사', nameEn: 'Narrative', subject: 'arts', definition: '이야기 전달' },
  { id: 'mrc-art-play', name: '놀이', nameEn: 'Play', subject: 'arts', definition: '창의적 실험' },
  { id: 'mrc-art-presentation', name: '발표', nameEn: 'Presentation', subject: 'arts', definition: '작품의 공유' },
  { id: 'mrc-art-role', name: '역할', nameEn: 'Role', subject: 'arts', definition: '예술에서의 기능' },
  { id: 'mrc-art-style', name: '양식', nameEn: 'Style', subject: 'arts', definition: '독특한 표현 방식' },

  // Design
  { id: 'mrc-design-adaptation', name: '적응', nameEn: 'Adaptation', subject: 'design', definition: '변화하는 요구에 맞추기' },
  { id: 'mrc-design-collaboration', name: '협력', nameEn: 'Collaboration', subject: 'design', definition: '함께 작업하기' },
  { id: 'mrc-design-ergonomics', name: '인체공학', nameEn: 'Ergonomics', subject: 'design', definition: '인간 사용에 최적화' },
  { id: 'mrc-design-evaluation', name: '평가', nameEn: 'Evaluation', subject: 'design', definition: '디자인 판단' },
  { id: 'mrc-design-form', name: '형태', nameEn: 'Form', subject: 'design', definition: '디자인의 외형' },
  { id: 'mrc-design-function', name: '기능', nameEn: 'Function', subject: 'design', definition: '디자인의 목적' },
  { id: 'mrc-design-innovation', name: '혁신', nameEn: 'Innovation', subject: 'design', definition: '새로운 해결책' },
  { id: 'mrc-design-invention', name: '발명', nameEn: 'Invention', subject: 'design', definition: '새로운 창작물' },
  { id: 'mrc-design-markets', name: '시장', nameEn: 'Markets and Trends', subject: 'design', definition: '소비자 요구와 트렌드' },
  { id: 'mrc-design-perspective', name: '관점', nameEn: 'Perspective', subject: 'design', definition: '디자인 시각' },
  { id: 'mrc-design-resources', name: '자원', nameEn: 'Resources', subject: 'design', definition: '사용 가능한 재료' },
  { id: 'mrc-design-sustainability', name: '지속가능성', nameEn: 'Sustainability', subject: 'design', definition: '환경적 책임' }
];

// ============================================
// Korea 2022 Curriculum Core Ideas
// ============================================

export interface KoreaCoreIdea {
  id: string;
  subject: string;
  domain: string;
  coreIdea: string;
  gradeLevel: string[];
}

export const KOREA_2022_CORE_IDEAS: KoreaCoreIdea[] = [
  // 국어
  { id: 'kr-korean-1', subject: '국어', domain: '듣기·말하기', coreIdea: '듣기·말하기는 언어, 준언어, 비언어를 활용하여 청자와 화자가 의미를 교섭하는 과정이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-korean-2', subject: '국어', domain: '읽기', coreIdea: '읽기는 글에 담긴 의미를 능동적으로 구성하는 과정이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-korean-3', subject: '국어', domain: '쓰기', coreIdea: '쓰기는 글로 의미를 구성하여 소통하는 행위이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-korean-4', subject: '국어', domain: '문법', coreIdea: '국어는 체계적인 규칙과 원리에 의해 작동하는 기호 체계이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-korean-5', subject: '국어', domain: '문학', coreIdea: '문학은 인간의 삶을 언어로 형상화한 예술이다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 수학
  { id: 'kr-math-1', subject: '수학', domain: '수와 연산', coreIdea: '수는 양의 비교와 측정에서 비롯되었으며, 자연수의 확장을 통해 새로운 수 체계가 형성된다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-math-2', subject: '수학', domain: '변화와 관계', coreIdea: '수학적 패턴을 인식하고 규칙을 찾는 것은 변화와 관계를 이해하는 기초가 된다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-math-3', subject: '수학', domain: '도형과 측정', coreIdea: '도형은 모양과 위치에 따라 분류되며, 도형의 성질을 측정을 통해 파악할 수 있다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-math-4', subject: '수학', domain: '자료와 가능성', coreIdea: '자료를 수집, 정리, 해석하는 통계적 과정과 확률적 사고는 합리적 의사결정의 기반이 된다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 사회
  { id: 'kr-social-1', subject: '사회', domain: '지리', coreIdea: '인간은 다양한 공간에서 자연환경 및 인문환경과 상호작용하며 삶을 영위한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-social-2', subject: '사회', domain: '역사', coreIdea: '역사적 사건과 인물, 문화는 시대적 맥락 속에서 형성되고 변화한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-social-3', subject: '사회', domain: '일반사회', coreIdea: '사회 현상은 개인, 집단, 제도가 상호작용한 결과이며, 이를 이해하고 탐구하는 것이 시민성의 기초가 된다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 과학
  { id: 'kr-science-1', subject: '과학', domain: '운동과 에너지', coreIdea: '자연 현상에서 물체의 운동과 다양한 형태의 에너지를 관찰하고 측정할 수 있다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-science-2', subject: '과학', domain: '물질', coreIdea: '물질은 원자로 이루어져 있으며, 원자의 배열과 결합에 따라 물질의 성질이 결정된다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-science-3', subject: '과학', domain: '생명', coreIdea: '생물은 세포로 이루어져 있으며, 생명 현상은 세포에서 일어나는 화학 반응의 결과이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-science-4', subject: '과학', domain: '지구와 우주', coreIdea: '지구는 역동적인 시스템이며, 태양계와 우주의 일부로서 상호작용한다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 도덕
  { id: 'kr-ethics-1', subject: '도덕', domain: '자기존중', coreIdea: '자기 이해와 도덕적 성찰은 바람직한 삶을 위한 토대이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-ethics-2', subject: '도덕', domain: '타인존중', coreIdea: '타인에 대한 배려와 존중은 공동체의 평화로운 삶을 위한 필수적 덕목이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-ethics-3', subject: '도덕', domain: '사회·공동체', coreIdea: '정의로운 사회와 민주적 공동체는 시민의 윤리적 실천을 통해 형성된다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-ethics-4', subject: '도덕', domain: '자연·초월', coreIdea: '인간은 자연 및 초월적 존재와의 관계 속에서 삶의 의미를 탐구한다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 영어
  { id: 'kr-english-1', subject: '영어', domain: '듣기·말하기', coreIdea: '영어 듣기·말하기는 상호작용을 통해 의미를 이해하고 표현하는 과정이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-english-2', subject: '영어', domain: '읽기·쓰기', coreIdea: '영어 읽기·쓰기는 문자 언어를 통해 정보와 의미를 이해하고 전달하는 과정이다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 음악
  { id: 'kr-music-1', subject: '음악', domain: '연주', coreIdea: '음악을 연주하는 것은 음악적 표현의 핵심이며, 다양한 방법으로 음악을 해석하고 표현한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-music-2', subject: '음악', domain: '감상', coreIdea: '음악 감상은 음악에 대한 깊은 이해와 심미적 경험을 제공한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-music-3', subject: '음악', domain: '생활화', coreIdea: '음악은 일상생활과 문화 속에서 다양한 역할과 의미를 지닌다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 미술
  { id: 'kr-art-1', subject: '미술', domain: '체험', coreIdea: '미술 체험은 자신과 세계에 대한 이해를 확장하고 삶을 풍요롭게 한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-art-2', subject: '미술', domain: '표현', coreIdea: '미술 표현은 다양한 재료, 방법, 기법을 활용하여 생각과 느낌을 시각적으로 창조하는 과정이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-art-3', subject: '미술', domain: '감상', coreIdea: '미술 감상은 미술 작품과 미술 문화에 대한 이해와 비평적 사고력을 기른다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 체육
  { id: 'kr-pe-1', subject: '체육', domain: '건강', coreIdea: '건강은 신체적, 정신적, 사회적 안녕 상태이며 체육 활동을 통해 증진된다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-pe-2', subject: '체육', domain: '도전', coreIdea: '도전은 자신의 한계를 극복하고 성취를 경험하는 과정이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-pe-3', subject: '체육', domain: '경쟁', coreIdea: '경쟁은 규칙을 준수하며 최선을 다해 겨루는 과정에서 페어플레이 정신을 기른다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-pe-4', subject: '체육', domain: '표현', coreIdea: '표현은 신체 움직임을 통해 생각과 감정을 창의적으로 나타내는 것이다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 실과/기술·가정
  { id: 'kr-practical-1', subject: '실과', domain: '기술', coreIdea: '기술은 인간의 필요와 욕구를 충족시키기 위해 발전해 왔으며, 미래 사회를 위한 지속가능한 발전을 추구한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-practical-2', subject: '실과', domain: '가정', coreIdea: '가정생활의 실천적 경험은 자립적인 생활 능력과 건강한 가정을 형성하는 데 기여한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-practical-3', subject: '실과', domain: '정보', coreIdea: '정보 기술의 이해와 활용은 디지털 시대에 필수적인 역량이다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 정보 (중등)
  { id: 'kr-info-1', subject: '정보', domain: '컴퓨팅 사고력', coreIdea: '컴퓨팅 사고력은 문제를 분석하고 알고리즘적 해결책을 설계하는 능력이다.', gradeLevel: ['middle', 'high'] },
  { id: 'kr-info-2', subject: '정보', domain: '데이터', coreIdea: '데이터는 정보의 기본 단위로, 수집, 분석, 시각화를 통해 의미 있는 정보로 변환된다.', gradeLevel: ['middle', 'high'] },
  { id: 'kr-info-3', subject: '정보', domain: '알고리즘', coreIdea: '알고리즘은 문제 해결을 위한 체계적인 절차이며, 프로그래밍을 통해 구현된다.', gradeLevel: ['middle', 'high'] },
  { id: 'kr-info-4', subject: '정보', domain: '인공지능', coreIdea: '인공지능은 인간의 지능적 행동을 모방하여 문제를 해결하는 기술이다.', gradeLevel: ['middle', 'high'] },

  // 통합교과 (초등 1-2학년)
  { id: 'kr-integrated-1', subject: '바른생활', domain: '기본생활습관', coreIdea: '바른 생활습관은 자기 관리와 타인 배려의 기초가 된다.', gradeLevel: ['elementary'] },
  { id: 'kr-integrated-2', subject: '슬기로운생활', domain: '탐구', coreIdea: '호기심을 바탕으로 주변 환경을 탐구하며 세계를 이해한다.', gradeLevel: ['elementary'] },
  { id: 'kr-integrated-3', subject: '즐거운생활', domain: '표현', coreIdea: '놀이와 표현 활동을 통해 창의성과 심미적 감수성을 기른다.', gradeLevel: ['elementary'] },

  // 2022 개정 핵심 역량
  { id: 'kr-core-comp-1', subject: '공통', domain: '자기관리 역량', coreIdea: '자아정체성과 자신감을 가지고 자신의 삶과 진로를 스스로 설계하고 관리한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-core-comp-2', subject: '공통', domain: '지식정보처리 역량', coreIdea: '다양한 분야의 지식과 정보를 처리하고 활용하여 새로운 지식을 생성하고 문제를 해결한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-core-comp-3', subject: '공통', domain: '창의적 사고 역량', coreIdea: '다양한 아이디어와 가능성을 폭넓게 탐색하고 새롭고 독창적인 것을 산출한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-core-comp-4', subject: '공통', domain: '심미적 감성 역량', coreIdea: '인간에 대한 공감적 이해와 문화적 감수성을 바탕으로 삶의 의미와 가치를 발견한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-core-comp-5', subject: '공통', domain: '협력적 소통 역량', coreIdea: '다른 사람의 관점을 존중하고 경청하며 갈등을 조정하고 협력한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-core-comp-6', subject: '공통', domain: '공동체 역량', coreIdea: '지역·국가·세계 공동체의 구성원으로서 공동체의 발전에 적극적으로 참여한다.', gradeLevel: ['elementary', 'middle', 'high'] },

  // 범교과 학습 주제
  { id: 'kr-cross-1', subject: '범교과', domain: '안전·건강 교육', coreIdea: '안전한 생활습관과 건강관리 능력은 개인과 사회의 안녕을 위해 필수적이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-2', subject: '범교과', domain: '인성 교육', coreIdea: '바람직한 인성은 자기 존중과 타인 배려, 공동체 의식을 포함한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-3', subject: '범교과', domain: '진로 교육', coreIdea: '진로 탐색과 설계는 자기 이해를 바탕으로 미래를 준비하는 과정이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-4', subject: '범교과', domain: '민주시민 교육', coreIdea: '민주시민으로서의 자질은 참여와 실천을 통해 함양된다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-5', subject: '범교과', domain: '인권 교육', coreIdea: '인권은 모든 인간이 가지는 기본적 권리로, 존중과 보호의 대상이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-6', subject: '범교과', domain: '다문화 교육', coreIdea: '문화 다양성은 인류의 자산이며, 상호 존중을 통해 공존한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-7', subject: '범교과', domain: '통일 교육', coreIdea: '평화와 통일은 한반도의 지속가능한 발전을 위해 필요하다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-8', subject: '범교과', domain: '독도 교육', coreIdea: '독도는 역사적·지리적·국제법적으로 대한민국의 고유 영토이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-9', subject: '범교과', domain: '경제·금융 교육', coreIdea: '합리적인 경제 활동과 금융 이해는 건전한 경제생활의 기반이다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-10', subject: '범교과', domain: '환경·지속가능발전 교육', coreIdea: '환경과 인간의 공존을 위해 지속가능한 발전을 추구해야 한다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-11', subject: '범교과', domain: '미디어 리터러시 교육', coreIdea: '미디어 정보를 비판적으로 이해하고 윤리적으로 활용하는 능력이 필요하다.', gradeLevel: ['elementary', 'middle', 'high'] },
  { id: 'kr-cross-12', subject: '범교과', domain: '디지털 시민성 교육', coreIdea: '디지털 환경에서 책임감 있고 윤리적으로 행동하는 시민성이 요구된다.', gradeLevel: ['elementary', 'middle', 'high'] }
];

// ============================================
// Germany Bildungsstandards (Education Standards)
// ============================================

export const GERMANY_BILDUNGSSTANDARDS: InternationalFramework = {
  id: 'germany-bildungsstandards',
  name: '독일 교육표준 (Bildungsstandards)',
  nameEn: 'Germany Education Standards (Bildungsstandards)',
  country: 'Germany',
  description: '독일 교육상임회의(KMK)가 정한 역량 중심 교육표준으로, 학생들이 갖추어야 할 핵심 역량을 정의합니다.',
  descriptionEn: 'Competency-based education standards set by the Standing Conference of Education Ministers (KMK), defining core competencies students should acquire.',
  keyElements: [
    {
      id: 'de-fach',
      name: '교과 역량 (Fachkompetenz)',
      nameEn: 'Subject Competence',
      description: '교과 지식과 기술을 적용하는 능력',
      subElements: ['교과 지식', '교과 기술', '전문적 이해']
    },
    {
      id: 'de-methoden',
      name: '방법 역량 (Methodenkompetenz)',
      nameEn: 'Methodological Competence',
      description: '학습 방법과 문제 해결 전략을 사용하는 능력',
      subElements: ['학습 전략', '문제 해결', '정보 처리', '비판적 분석']
    },
    {
      id: 'de-sozial',
      name: '사회적 역량 (Sozialkompetenz)',
      nameEn: 'Social Competence',
      description: '타인과 협력하고 소통하는 능력',
      subElements: ['팀워크', '의사소통', '갈등 해결', '공감']
    },
    {
      id: 'de-personal',
      name: '자기 역량 (Personalkompetenz)',
      nameEn: 'Personal Competence',
      description: '자기 관리와 자기 발전 능력',
      subElements: ['자기 인식', '자기 조절', '책임감', '동기']
    }
  ],
  source: 'Kultusministerkonferenz (KMK)',
  yearIntroduced: 2004,
  website: 'https://www.kmk.org/'
};

// ============================================
// France Socle Commun (Common Base)
// ============================================

export const FRANCE_SOCLE_COMMUN: InternationalFramework = {
  id: 'france-socle-commun',
  name: '프랑스 공통 기초 (Socle Commun)',
  nameEn: 'France Common Base of Knowledge and Skills',
  country: 'France',
  description: '프랑스 의무교육에서 모든 학생이 갖추어야 할 지식, 역량, 문화를 정의하는 공통 기초입니다.',
  descriptionEn: 'Common base defining knowledge, competencies, and culture all students must acquire during compulsory education in France.',
  keyElements: [
    {
      id: 'fr-langue',
      name: '언어 영역',
      nameEn: 'Languages for Thinking and Communication',
      description: '프랑스어, 외국어, 수학, 예술, 신체 언어',
      subElements: ['프랑스어', '외국어', '과학/수학 언어', '예술 언어', '신체 언어']
    },
    {
      id: 'fr-methodes',
      name: '학습 방법과 도구',
      nameEn: 'Methods and Tools for Learning',
      description: '학습을 조직하고 도구를 사용하는 능력',
      subElements: ['정보 접근', '프로젝트 수행', '미디어/정보 교육', '협력']
    },
    {
      id: 'fr-personne',
      name: '인격 형성과 시민성',
      nameEn: 'Formation of the Person and Citizen',
      description: '개인적 발달과 시민적 참여',
      subElements: ['도덕적 판단', '규칙 이해', '책임감', '시민적 참여']
    },
    {
      id: 'fr-naturels',
      name: '자연 시스템과 기술 시스템',
      nameEn: 'Natural and Technical Systems',
      description: '과학적, 기술적 접근 방법',
      subElements: ['과학적 탐구', '기술 설계', '환경 책임']
    },
    {
      id: 'fr-representations',
      name: '세계와 인간 활동의 표상',
      nameEn: 'Representations of the World and Human Activity',
      description: '시공간에서 자리 잡기, 사회와 예술 이해',
      subElements: ['공간 이해', '시간 이해', '사회 조직', '예술적 표현']
    }
  ],
  source: 'Ministère de l\'Éducation Nationale',
  yearIntroduced: 2015,
  website: 'https://www.education.gouv.fr/'
};

// ============================================
// India National Curriculum Framework 2023
// ============================================

export const INDIA_NCF_2023: InternationalFramework = {
  id: 'india-ncf-2023',
  name: '인도 국가 교육과정 프레임워크 2023',
  nameEn: 'India National Curriculum Framework 2023',
  country: 'India',
  description: '인도 국가교육정책 2020에 기반한 새로운 교육과정 프레임워크로, 역량 중심 교육을 강조합니다.',
  descriptionEn: 'New curriculum framework based on India\'s National Education Policy 2020, emphasizing competency-based education.',
  keyElements: [
    {
      id: 'in-rootedness',
      name: '인도적 뿌리',
      nameEn: 'Rootedness in India',
      description: '인도 문화와 가치에 대한 자부심과 이해',
      subElements: ['문화적 정체성', '헌법적 가치', '다양성 존중', '인도 지식 체계']
    },
    {
      id: 'in-holistic',
      name: '전인적 발달',
      nameEn: 'Holistic Development',
      description: '인지적, 정서적, 사회적, 신체적, 영적 발달',
      subElements: ['인지 발달', '정서 발달', '사회성 발달', '신체 발달', '영성']
    },
    {
      id: 'in-learning',
      name: '학습 방법 학습',
      nameEn: 'Learning How to Learn',
      description: '자기주도적 평생학습 능력',
      subElements: ['비판적 사고', '창의성', '문제 해결', '자기 학습']
    },
    {
      id: 'in-21century',
      name: '21세기 역량',
      nameEn: '21st Century Capacities',
      description: '미래 사회에 필요한 역량',
      subElements: ['디지털 리터러시', '글로벌 시민성', '환경 인식', '의사소통']
    }
  ],
  source: 'Ministry of Education, India',
  yearIntroduced: 2023,
  website: 'https://ncf.ncert.gov.in/'
};

// ============================================
// Taiwan 12-Year Basic Education Curriculum
// ============================================

export const TAIWAN_CURRICULUM: InternationalFramework = {
  id: 'taiwan-108-curriculum',
  name: '대만 12년 국민기본교육 과정강령',
  nameEn: 'Taiwan 12-Year Basic Education Curriculum Guidelines',
  country: 'Taiwan',
  description: '2019년 시행된 대만의 역량 중심 교육과정으로, 핵심 소양(核心素養)을 중심으로 구성됩니다.',
  descriptionEn: 'Taiwan\'s competency-based curriculum implemented in 2019, centered around Core Competencies (核心素養).',
  keyElements: [
    {
      id: 'tw-self',
      name: '자주적 행동',
      nameEn: 'Autonomous Action',
      description: '자기 관리와 자율적 행동 능력',
      subElements: ['신체 건강', '체계적 사고와 문제 해결', '기획 및 실행', '다원적 학습']
    },
    {
      id: 'tw-communication',
      name: '소통과 상호작용',
      nameEn: 'Communication and Interaction',
      description: '다양한 도구와 방식으로 소통하는 능력',
      subElements: ['기호 활용', '과학기술과 정보', '예술적 감상', '인간관계와 협력']
    },
    {
      id: 'tw-participation',
      name: '사회적 참여',
      nameEn: 'Social Participation',
      description: '지역, 국가, 세계 공동체에 참여',
      subElements: ['도덕적 실천', '공민 의식', '국제 이해', '다문화 이해']
    }
  ],
  source: 'Taiwan Ministry of Education',
  yearIntroduced: 2019,
  website: 'https://www.naer.edu.tw/'
};

// ============================================
// Netherlands 21st Century Skills
// ============================================

export const NETHERLANDS_21ST_SKILLS: InternationalFramework = {
  id: 'netherlands-21st',
  name: '네덜란드 21세기 역량',
  nameEn: 'Netherlands 21st Century Skills',
  country: 'Netherlands',
  description: 'SLO(네덜란드 교육과정 개발원)가 개발한 21세기 역량 프레임워크입니다.',
  descriptionEn: '21st century skills framework developed by SLO (Netherlands Institute for Curriculum Development).',
  keyElements: [
    {
      id: 'nl-creativity',
      name: '창의성',
      nameEn: 'Creativity',
      description: '새로운 아이디어를 생성하고 발전시키는 능력',
      subElements: ['아이디어 생성', '개방적 태도', '혁신', '호기심']
    },
    {
      id: 'nl-critical',
      name: '비판적 사고',
      nameEn: 'Critical Thinking',
      description: '정보를 분석하고 평가하는 능력',
      subElements: ['분석', '평가', '판단', '추론']
    },
    {
      id: 'nl-problem',
      name: '문제 해결',
      nameEn: 'Problem Solving',
      description: '복잡한 문제를 해결하는 능력',
      subElements: ['문제 인식', '전략 개발', '해결책 실행', '평가']
    },
    {
      id: 'nl-communication',
      name: '의사소통',
      nameEn: 'Communication',
      description: '효과적으로 소통하는 능력',
      subElements: ['구두 표현', '문서 표현', '경청', '미디어 활용']
    },
    {
      id: 'nl-collaboration',
      name: '협력',
      nameEn: 'Collaboration',
      description: '타인과 함께 작업하는 능력',
      subElements: ['팀워크', '역할 분담', '갈등 해결', '상호 존중']
    },
    {
      id: 'nl-digital',
      name: '디지털 리터러시',
      nameEn: 'Digital Literacy',
      description: 'ICT를 효과적으로 사용하는 능력',
      subElements: ['정보 리터러시', '미디어 리터러시', 'ICT 기본 기술', '컴퓨팅 사고']
    },
    {
      id: 'nl-social',
      name: '사회문화적 역량',
      nameEn: 'Social and Cultural Competences',
      description: '다양한 사회에서 효과적으로 상호작용',
      subElements: ['시민성', '문화 감수성', '책임감', '자기 조절']
    },
    {
      id: 'nl-self',
      name: '자기조절',
      nameEn: 'Self-regulation',
      description: '자신의 학습과 행동을 관리',
      subElements: ['자기 인식', '목표 설정', '시간 관리', '성찰']
    }
  ],
  source: 'SLO (Netherlands Institute for Curriculum Development)',
  yearIntroduced: 2014,
  website: 'https://www.slo.nl/'
};

// ============================================
// Sweden Curriculum 2011 (Lgr 11)
// ============================================

export const SWEDEN_LGR11: InternationalFramework = {
  id: 'sweden-lgr11',
  name: '스웨덴 교육과정 2011 (Lgr 11)',
  nameEn: 'Sweden Curriculum 2011 (Lgr 11)',
  country: 'Sweden',
  description: '스웨덴 의무교육과정의 기본 가치와 핵심 역량을 정의합니다.',
  descriptionEn: 'Defines fundamental values and core competencies for Swedish compulsory education.',
  keyElements: [
    {
      id: 'se-knowledge',
      name: '지식의 네 가지 형태',
      nameEn: 'Four Forms of Knowledge',
      description: '스웨덴 교육의 핵심 지식 개념',
      subElements: ['사실적 지식 (Facts)', '이해 (Understanding)', '친숙함 (Familiarity)', '기술 (Skills)']
    },
    {
      id: 'se-norms',
      name: '규범과 가치',
      nameEn: 'Norms and Values',
      description: '민주주의와 인권에 기반한 가치',
      subElements: ['민주주의', '인권', '평등', '다양성 존중']
    },
    {
      id: 'se-responsibility',
      name: '학생 책임과 영향력',
      nameEn: 'Student Responsibility and Influence',
      description: '학생의 자율성과 참여',
      subElements: ['자기 학습 책임', '민주적 참여', '의사결정 참여']
    },
    {
      id: 'se-entrepreneurship',
      name: '기업가 정신',
      nameEn: 'Entrepreneurship',
      description: '주도성과 창의적 문제해결',
      subElements: ['주도성', '창의성', '위험 감수', '실행력']
    }
  ],
  source: 'Swedish National Agency for Education (Skolverket)',
  yearIntroduced: 2011,
  website: 'https://www.skolverket.se/'
};

// ============================================
// Ireland Junior Cycle Key Skills
// ============================================

export const IRELAND_KEY_SKILLS: InternationalFramework = {
  id: 'ireland-key-skills',
  name: '아일랜드 주니어 사이클 핵심 역량',
  nameEn: 'Ireland Junior Cycle Key Skills',
  country: 'Ireland',
  description: '아일랜드 중학교 과정에서 발달시켜야 할 8가지 핵심 역량입니다.',
  descriptionEn: 'Eight key skills to be developed across the Irish Junior Cycle curriculum.',
  keyElements: [
    {
      id: 'ie-literacy',
      name: '리터러시',
      nameEn: 'Being Literate',
      description: '읽기, 쓰기, 구두 언어, 미디어 리터러시',
      subElements: ['읽기', '쓰기', '말하기', '미디어 이해']
    },
    {
      id: 'ie-numeracy',
      name: '수리력',
      nameEn: 'Being Numerate',
      description: '수학적 사고와 문제 해결',
      subElements: ['수 감각', '공간 인식', '데이터 해석', '문제 해결']
    },
    {
      id: 'ie-communication',
      name: '의사소통',
      nameEn: 'Communicating',
      description: '효과적인 의사소통 능력',
      subElements: ['경청', '표현', '토론', '발표']
    },
    {
      id: 'ie-learning',
      name: '학습 관리',
      nameEn: 'Managing Myself',
      description: '자기 학습과 개인 효과성 관리',
      subElements: ['목표 설정', '시간 관리', '자기 동기', '회복탄력성']
    },
    {
      id: 'ie-staying-well',
      name: '웰빙 유지',
      nameEn: 'Staying Well',
      description: '신체적, 정서적, 사회적 웰빙',
      subElements: ['건강한 선택', '정서 관리', '관계 기술', '안전']
    },
    {
      id: 'ie-creative',
      name: '창의성',
      nameEn: 'Being Creative',
      description: '상상력과 창의적 사고',
      subElements: ['상상력', '호기심', '창의적 표현', '혁신']
    },
    {
      id: 'ie-working',
      name: '협력',
      nameEn: 'Working with Others',
      description: '팀워크와 협력',
      subElements: ['팀워크', '존중', '협상', '리더십']
    },
    {
      id: 'ie-information',
      name: '정보와 기술 관리',
      nameEn: 'Managing Information and Thinking',
      description: '정보 처리와 사고 기술',
      subElements: ['정보 수집', '분석', '비판적 사고', '의사결정']
    }
  ],
  source: 'National Council for Curriculum and Assessment (NCCA)',
  yearIntroduced: 2015,
  website: 'https://www.curriculumonline.ie/'
};

// ============================================
// Hong Kong Generic Skills
// ============================================

export const HONG_KONG_GENERIC_SKILLS: InternationalFramework = {
  id: 'hong-kong-generic-skills',
  name: '홍콩 일반 기술',
  nameEn: 'Hong Kong Generic Skills',
  country: 'Hong Kong',
  description: '홍콩 학교 교육과정에서 모든 학생이 발달시켜야 할 9가지 일반 기술입니다.',
  descriptionEn: 'Nine generic skills all students should develop across the Hong Kong school curriculum.',
  keyElements: [
    {
      id: 'hk-collaboration',
      name: '협력 기술',
      nameEn: 'Collaboration Skills',
      description: '팀에서 효과적으로 작업하는 능력',
      subElements: ['팀워크', '역할 공유', '갈등 해결', '상호 존중']
    },
    {
      id: 'hk-communication',
      name: '의사소통 기술',
      nameEn: 'Communication Skills',
      description: '다양한 방식으로 효과적으로 소통',
      subElements: ['언어적 소통', '비언어적 소통', '경청', '발표']
    },
    {
      id: 'hk-creativity',
      name: '창의력',
      nameEn: 'Creativity',
      description: '새로운 아이디어와 해결책 생성',
      subElements: ['발산적 사고', '독창성', '호기심', '상상력']
    },
    {
      id: 'hk-critical',
      name: '비판적 사고력',
      nameEn: 'Critical Thinking Skills',
      description: '분석, 평가, 판단 능력',
      subElements: ['분석', '평가', '추론', '문제 해결']
    },
    {
      id: 'hk-it',
      name: '정보기술 기술',
      nameEn: 'Information Technology Skills',
      description: 'IT를 효과적이고 윤리적으로 사용',
      subElements: ['기본 IT 기술', '정보 검색', '디지털 창작', '디지털 윤리']
    },
    {
      id: 'hk-numeracy',
      name: '수리력',
      nameEn: 'Numeracy Skills',
      description: '수학적 사고와 응용',
      subElements: ['수 연산', '측정', '데이터 처리', '공간 추론']
    },
    {
      id: 'hk-problem',
      name: '문제 해결력',
      nameEn: 'Problem Solving Skills',
      description: '문제를 식별하고 해결하는 능력',
      subElements: ['문제 식별', '해결책 생성', '평가', '실행']
    },
    {
      id: 'hk-self-management',
      name: '자기관리 기술',
      nameEn: 'Self-management Skills',
      description: '자기 학습과 발전 관리',
      subElements: ['목표 설정', '시간 관리', '자기 동기', '감정 관리']
    },
    {
      id: 'hk-self-learning',
      name: '자기학습 기술',
      nameEn: 'Self-learning Skills',
      description: '독립적으로 학습하는 능력',
      subElements: ['학습 전략', '정보 처리', '성찰', '평생 학습']
    }
  ],
  source: 'Education Bureau, Hong Kong',
  yearIntroduced: 2001,
  website: 'https://www.edb.gov.hk/'
};

// ============================================
// Scotland Curriculum for Excellence
// ============================================

export const SCOTLAND_CFE: InternationalFramework = {
  id: 'scotland-cfe',
  name: '스코틀랜드 우수교육과정',
  nameEn: 'Scotland Curriculum for Excellence',
  country: 'Scotland',
  description: '스코틀랜드 교육의 핵심 목표인 4가지 역량(The Four Capacities)을 중심으로 구성됩니다.',
  descriptionEn: 'Centered around The Four Capacities, the core aims of Scottish education.',
  keyElements: [
    {
      id: 'sc-successful',
      name: '성공적인 학습자',
      nameEn: 'Successful Learners',
      description: '학습에 열정적이고 효과적인 학습자',
      subElements: ['학습 열정', '학습 의지', '사고력', '독립적 학습']
    },
    {
      id: 'sc-confident',
      name: '자신감 있는 개인',
      nameEn: 'Confident Individuals',
      description: '자기 가치감과 웰빙을 가진 개인',
      subElements: ['자기 가치', '회복탄력성', '야망', '건강한 라이프스타일']
    },
    {
      id: 'sc-responsible',
      name: '책임감 있는 시민',
      nameEn: 'Responsible Citizens',
      description: '사회에 기여하는 책임감 있는 시민',
      subElements: ['민주주의 이해', '환경 존중', '사회 참여', '타인 존중']
    },
    {
      id: 'sc-effective',
      name: '효과적인 기여자',
      nameEn: 'Effective Contributors',
      description: '사회에 효과적으로 기여하는 사람',
      subElements: ['팀워크', '주도성', '창의성', '문제 해결']
    }
  ],
  source: 'Education Scotland',
  yearIntroduced: 2010,
  website: 'https://education.gov.scot/'
};

// ============================================
// Switzerland Lehrplan 21
// ============================================

export const SWITZERLAND_LEHRPLAN21: InternationalFramework = {
  id: 'switzerland-lehrplan21',
  name: '스위스 교육과정 21 (Lehrplan 21)',
  nameEn: 'Switzerland Curriculum 21 (Lehrplan 21)',
  country: 'Switzerland',
  description: '독일어권 스위스 주(州)들의 공통 교육과정으로, 역량 중심으로 구성됩니다.',
  descriptionEn: 'Common curriculum for German-speaking Swiss cantons, organized around competencies.',
  keyElements: [
    {
      id: 'ch-ueber',
      name: '초교과적 역량',
      nameEn: 'Transversal Competencies (Überfachliche Kompetenzen)',
      description: '모든 교과에서 발달시키는 역량',
      subElements: ['개인적 역량', '사회적 역량', '방법적 역량']
    },
    {
      id: 'ch-personal',
      name: '개인적 역량',
      nameEn: 'Personal Competencies',
      description: '자기 인식과 자기 관리',
      subElements: ['자기 성찰', '자기 통제', '독립성', '고유성']
    },
    {
      id: 'ch-social',
      name: '사회적 역량',
      nameEn: 'Social Competencies',
      description: '타인과의 관계와 협력',
      subElements: ['협력 능력', '갈등 해결', '책임감', '의사소통']
    },
    {
      id: 'ch-method',
      name: '방법적 역량',
      nameEn: 'Methodological Competencies',
      description: '학습과 문제 해결 방법',
      subElements: ['정보 활용', '문제 해결 전략', '미디어/ICT 활용', '학습 전략']
    }
  ],
  source: 'D-EDK (Deutschschweizer Erziehungsdirektoren-Konferenz)',
  yearIntroduced: 2014,
  website: 'https://www.lehrplan21.ch/'
};

// ============================================
// South Africa CAPS (Curriculum and Assessment Policy Statement)
// ============================================

export const SOUTH_AFRICA_CAPS: InternationalFramework = {
  id: 'south-africa-caps',
  name: '남아프리카공화국 CAPS',
  nameEn: 'South Africa Curriculum and Assessment Policy Statement',
  country: 'South Africa',
  description: '남아프리카공화국의 국가 교육과정 정책으로, 핵심 원칙과 가치를 제시합니다.',
  descriptionEn: 'National curriculum policy of South Africa, presenting core principles and values.',
  keyElements: [
    {
      id: 'za-values',
      name: '가치',
      nameEn: 'Values',
      description: '교육의 기반이 되는 가치',
      subElements: ['민주주의', '사회 정의', '평등', '인권', '화해', '다양성 존중']
    },
    {
      id: 'za-skills',
      name: '핵심 기술',
      nameEn: 'Core Skills',
      description: '모든 학습 영역에서 발달시키는 기술',
      subElements: ['비판적 사고', '문제 해결', '의사소통', '협력', '정보 처리']
    },
    {
      id: 'za-inclusion',
      name: '포용',
      nameEn: 'Inclusion',
      description: '모든 학습자를 위한 교육',
      subElements: ['다양한 요구 충족', '장벽 제거', '접근성', '차별화']
    }
  ],
  source: 'Department of Basic Education, South Africa',
  yearIntroduced: 2011,
  website: 'https://www.education.gov.za/'
};

// ============================================
// Brazil BNCC (Base Nacional Comum Curricular)
// ============================================

export const BRAZIL_BNCC: InternationalFramework = {
  id: 'brazil-bncc',
  name: '브라질 국가공통교육과정기준 (BNCC)',
  nameEn: 'Brazil Common National Curricular Base (BNCC)',
  country: 'Brazil',
  description: '브라질 교육의 핵심 학습과 10가지 일반 역량을 정의합니다.',
  descriptionEn: 'Defines essential learning and ten general competencies for Brazilian education.',
  keyElements: [
    {
      id: 'br-knowledge',
      name: '지식',
      nameEn: 'Knowledge',
      description: '과학적, 예술적, 문화적 지식의 가치화와 활용',
      subElements: ['호기심', '탐구', '분석', '지식 활용']
    },
    {
      id: 'br-scientific',
      name: '과학적 사고',
      nameEn: 'Scientific Thinking',
      description: '과학적 방법을 통한 탐구',
      subElements: ['질문', '가설', '실험', '결론']
    },
    {
      id: 'br-cultural',
      name: '문화적 레퍼토리',
      nameEn: 'Cultural Repertoire',
      description: '다양한 문화적 표현의 가치화',
      subElements: ['예술 감상', '문화 다양성', '정체성', '창작']
    },
    {
      id: 'br-digital',
      name: '디지털 문화',
      nameEn: 'Digital Culture',
      description: '디지털 기술의 비판적이고 윤리적 사용',
      subElements: ['디지털 리터러시', '비판적 사용', '창의적 생산', '디지털 윤리']
    },
    {
      id: 'br-argument',
      name: '논증',
      nameEn: 'Argumentation',
      description: '다양한 언어를 사용한 의사소통',
      subElements: ['표현', '경청', '대화', '협상']
    },
    {
      id: 'br-work',
      name: '일과 삶 설계',
      nameEn: 'Work and Life Project',
      description: '개인적, 직업적 삶의 계획',
      subElements: ['자기 인식', '목표 설정', '유연성', '회복탄력성']
    },
    {
      id: 'br-self',
      name: '자기 돌봄',
      nameEn: 'Self-care',
      description: '신체적, 정서적 건강 관리',
      subElements: ['건강', '정서 관리', '자기 인식', '웰빙']
    },
    {
      id: 'br-empathy',
      name: '공감과 협력',
      nameEn: 'Empathy and Cooperation',
      description: '타인과의 관계와 협력',
      subElements: ['공감', '협력', '갈등 해결', '다양성 존중']
    },
    {
      id: 'br-responsibility',
      name: '책임',
      nameEn: 'Responsibility',
      description: '개인적, 사회적 책임감',
      subElements: ['윤리', '시민성', '지속가능성', '민주주의']
    },
    {
      id: 'br-autonomy',
      name: '자율성과 책임감',
      nameEn: 'Autonomy and Responsibility',
      description: '자율적이고 책임감 있는 의사결정',
      subElements: ['비판적 사고', '윤리적 판단', '자기 조절', '책임']
    }
  ],
  source: 'Ministério da Educação, Brazil',
  yearIntroduced: 2018,
  website: 'http://basenacionalcomum.mec.gov.br/'
};

// ============================================
// Norway Core Curriculum (Fagfornyelsen)
// ============================================

export const NORWAY_FAGFORNYELSEN: InternationalFramework = {
  id: 'norway-fagfornyelsen',
  name: '노르웨이 교육과정 개혁 (Fagfornyelsen)',
  nameEn: 'Norway Knowledge Promotion Reform 2020',
  country: 'Norway',
  description: '비판적 사고와 심층 학습을 강조하는 노르웨이 교육과정입니다.',
  descriptionEn: 'Norwegian curriculum emphasizing critical thinking and in-depth learning.',
  keyElements: [
    {
      id: 'no-democracy',
      name: '민주주의와 시민성',
      nameEn: 'Democracy and Citizenship',
      description: '민주적 가치와 참여',
      subElements: ['비판적 사고', '윤리적 인식', '민주적 참여']
    },
    {
      id: 'no-sustainability',
      name: '지속가능한 발전',
      nameEn: 'Sustainable Development',
      description: '환경, 사회, 경제적 지속가능성',
      subElements: ['환경 인식', '미래 세대 고려', '지속가능한 선택']
    },
    {
      id: 'no-health',
      name: '건강과 삶의 기술',
      nameEn: 'Health and Life Skills',
      description: '신체적, 정신적 건강과 삶의 관리',
      subElements: ['자기 인식', '관계 기술', '건강한 선택', '웰빙']
    }
  ],
  source: 'Utdanningsdirektoratet (Norwegian Directorate for Education)',
  yearIntroduced: 2020,
  website: 'https://www.udir.no/lk20/overordnet-del/'
};

// ============================================
// Denmark Curriculum (Fælles Mål)
// ============================================

export const DENMARK_FAELLES_MAAL: InternationalFramework = {
  id: 'denmark-faelles-maal',
  name: '덴마크 공통 목표 (Fælles Mål)',
  nameEn: 'Denmark Common Objectives',
  country: 'Denmark',
  description: '역량 기반 접근과 학생 중심 학습을 강조하는 덴마크 교육과정입니다.',
  descriptionEn: 'Danish curriculum emphasizing competency-based approach and student-centered learning.',
  keyElements: [
    {
      id: 'dk-allgemein',
      name: '일반 역량',
      nameEn: 'General Competencies',
      description: '모든 교과에 걸친 공통 역량',
      subElements: ['비판적 사고', '창의성', '협력', '의사소통']
    },
    {
      id: 'dk-bildung',
      name: '빌둥 (Dannelse)',
      nameEn: 'Bildung',
      description: '전인적 성장과 민주적 시민성',
      subElements: ['자아 형성', '문화적 이해', '민주적 참여', '비판적 성찰']
    },
    {
      id: 'dk-innovation',
      name: '혁신과 기업가정신',
      nameEn: 'Innovation and Entrepreneurship',
      description: '창의적 문제 해결과 기업가적 사고',
      subElements: ['창의성', '위험 감수', '실행력', '가치 창출']
    }
  ],
  source: 'Danish Ministry of Children and Education',
  yearIntroduced: 2019,
  website: 'https://www.uvm.dk/'
};

// ============================================
// Spain LOMLOE
// ============================================

export const SPAIN_LOMLOE: InternationalFramework = {
  id: 'spain-lomloe',
  name: '스페인 LOMLOE 교육법',
  nameEn: 'Spain LOMLOE Education Law',
  country: 'Spain',
  description: '핵심 역량과 포용적 교육을 강조하는 스페인 교육법입니다.',
  descriptionEn: 'Spanish education law emphasizing key competences and inclusive education.',
  keyElements: [
    {
      id: 'es-linguistic',
      name: '언어적 의사소통 역량',
      nameEn: 'Linguistic Communication Competence',
      description: '다양한 언어로 효과적 의사소통',
      subElements: ['모국어', '외국어', '읽기', '쓰기', '듣기', '말하기']
    },
    {
      id: 'es-stem',
      name: 'STEM 역량',
      nameEn: 'STEM Competence',
      description: '과학, 기술, 공학, 수학적 사고',
      subElements: ['과학적 방법', '수학적 추론', '기술 활용', '공학적 설계']
    },
    {
      id: 'es-digital',
      name: '디지털 역량',
      nameEn: 'Digital Competence',
      description: '디지털 도구의 비판적이고 안전한 사용',
      subElements: ['정보 리터러시', '디지털 소통', '콘텐츠 제작', '안전']
    },
    {
      id: 'es-personal',
      name: '개인적, 사회적, 학습 역량',
      nameEn: 'Personal, Social and Learning Competence',
      description: '자기 관리와 협력적 학습',
      subElements: ['자기 조절', '협력', '웰빙', '평생 학습']
    },
    {
      id: 'es-citizenship',
      name: '시민 역량',
      nameEn: 'Citizenship Competence',
      description: '민주적 참여와 사회적 책임',
      subElements: ['인권', '민주주의', '지속가능성', '문화 다양성']
    },
    {
      id: 'es-entrepreneurial',
      name: '기업가적 역량',
      nameEn: 'Entrepreneurial Competence',
      description: '기회 인식과 아이디어 실현',
      subElements: ['창의성', '계획', '위험 관리', '실행']
    },
    {
      id: 'es-cultural',
      name: '문화적 인식과 표현 역량',
      nameEn: 'Cultural Awareness and Expression',
      description: '예술과 문화의 이해와 표현',
      subElements: ['예술 감상', '문화 유산', '창의적 표현', '다양성']
    }
  ],
  source: 'Ministerio de Educación y Formación Profesional',
  yearIntroduced: 2020,
  website: 'https://www.educacionyfp.gob.es/'
};

// ============================================
// Portugal Essential Learning
// ============================================

export const PORTUGAL_APRENDIZAGENS: InternationalFramework = {
  id: 'portugal-aprendizagens',
  name: '포르투갈 필수 학습',
  nameEn: 'Portugal Essential Learning (Aprendizagens Essenciais)',
  country: 'Portugal',
  description: '학생 프로필 달성을 위한 필수 학습을 정의합니다.',
  descriptionEn: 'Defines essential learning for achieving the student profile.',
  keyElements: [
    {
      id: 'pt-languages',
      name: '언어와 텍스트',
      nameEn: 'Languages and Texts',
      description: '다양한 언어와 코드 이해 및 사용',
      subElements: ['모국어', '외국어', '기호', '코드']
    },
    {
      id: 'pt-information',
      name: '정보와 의사소통',
      nameEn: 'Information and Communication',
      description: '정보 처리와 효과적 의사소통',
      subElements: ['정보 리터러시', '미디어 리터러시', '의사소통']
    },
    {
      id: 'pt-reasoning',
      name: '추론과 문제 해결',
      nameEn: 'Reasoning and Problem Solving',
      description: '비판적 사고와 창의적 문제 해결',
      subElements: ['논리적 추론', '비판적 사고', '창의성', '문제 해결']
    },
    {
      id: 'pt-critical',
      name: '비판적이고 창의적 사고',
      nameEn: 'Critical and Creative Thinking',
      description: '분석, 평가, 혁신적 사고',
      subElements: ['분석', '평가', '혁신', '상상력']
    },
    {
      id: 'pt-relationship',
      name: '대인관계',
      nameEn: 'Interpersonal Relationships',
      description: '협력과 관계 기술',
      subElements: ['협력', '공감', '갈등 해결', '리더십']
    },
    {
      id: 'pt-development',
      name: '개인 발달과 자율성',
      nameEn: 'Personal Development and Autonomy',
      description: '자기 인식과 자기 관리',
      subElements: ['자기 인식', '자기 조절', '회복탄력성', '목표 설정']
    },
    {
      id: 'pt-wellbeing',
      name: '웰빙, 건강, 환경',
      nameEn: 'Well-being, Health and Environment',
      description: '신체적, 정서적 건강과 환경 인식',
      subElements: ['건강', '환경 인식', '지속가능성']
    },
    {
      id: 'pt-aesthetic',
      name: '미적 감수성',
      nameEn: 'Aesthetic Sensitivity',
      description: '예술 감상과 창작',
      subElements: ['예술 감상', '창작', '문화 이해']
    },
    {
      id: 'pt-technical',
      name: '기술적 지식',
      nameEn: 'Scientific and Technical Knowledge',
      description: '과학적, 기술적 지식과 적용',
      subElements: ['과학적 방법', '기술 활용', '연구']
    },
    {
      id: 'pt-consciousness',
      name: '비판적 의식과 시민 참여',
      nameEn: 'Critical Awareness and Civic Participation',
      description: '민주적 참여와 사회적 책임',
      subElements: ['민주주의', '인권', '시민 참여', '지속가능성']
    }
  ],
  source: 'Direção-Geral da Educação, Portugal',
  yearIntroduced: 2018,
  website: 'https://www.dge.mec.pt/'
};

// ============================================
// Austria Competence-Based Curriculum
// ============================================

export const AUSTRIA_KOMPETENZORIENTIERUNG: InternationalFramework = {
  id: 'austria-kompetenz',
  name: '오스트리아 역량 지향 교육과정',
  nameEn: 'Austria Competence-Oriented Curriculum',
  country: 'Austria',
  description: '역량 중심 접근을 통한 오스트리아 교육과정입니다.',
  descriptionEn: 'Austrian curriculum with competence-oriented approach.',
  keyElements: [
    {
      id: 'at-language',
      name: '언어 역량',
      nameEn: 'Language Competence',
      description: '언어 이해와 표현',
      subElements: ['읽기', '쓰기', '듣기', '말하기', '언어 성찰']
    },
    {
      id: 'at-math',
      name: '수학적 역량',
      nameEn: 'Mathematical Competence',
      description: '수학적 사고와 문제 해결',
      subElements: ['수 감각', '측정', '기하', '통계', '문제 해결']
    },
    {
      id: 'at-science',
      name: '과학적 역량',
      nameEn: 'Scientific Competence',
      description: '자연 현상의 탐구와 이해',
      subElements: ['관찰', '실험', '분석', '결론']
    },
    {
      id: 'at-digital',
      name: '디지털 역량',
      nameEn: 'Digital Competence',
      description: '디지털 도구의 효과적 사용',
      subElements: ['기초 활용', '정보 관리', '콘텐츠 제작', '안전']
    },
    {
      id: 'at-social',
      name: '사회적 역량',
      nameEn: 'Social Competence',
      description: '협력과 갈등 해결',
      subElements: ['팀워크', '의사소통', '갈등 해결', '공감']
    }
  ],
  source: 'Bundesministerium für Bildung, Wissenschaft und Forschung',
  yearIntroduced: 2012,
  website: 'https://www.bmbwf.gv.at/'
};

// ============================================
// Belgium (Flemish) Key Competences
// ============================================

export const BELGIUM_SLEUTELCOMPETENTIES: InternationalFramework = {
  id: 'belgium-sleutel',
  name: '벨기에 (플랑드르) 핵심 역량',
  nameEn: 'Belgium Flemish Key Competences',
  country: 'Belgium',
  description: '플랑드르 지역의 16가지 핵심 역량입니다.',
  descriptionEn: 'Sixteen key competences for Flemish education.',
  keyElements: [
    {
      id: 'be-competence-body',
      name: '신체 의식',
      nameEn: 'Body Awareness',
      description: '신체 건강과 움직임',
      subElements: ['건강', '움직임', '신체 인식']
    },
    {
      id: 'be-mental',
      name: '정신 건강',
      nameEn: 'Mental Well-being',
      description: '정서적, 심리적 건강',
      subElements: ['정서 조절', '스트레스 관리', '회복탄력성']
    },
    {
      id: 'be-dutch',
      name: '네덜란드어 역량',
      nameEn: 'Dutch Language Competence',
      description: '모국어 이해와 표현',
      subElements: ['읽기', '쓰기', '듣기', '말하기']
    },
    {
      id: 'be-other-lang',
      name: '타언어 역량',
      nameEn: 'Other Languages',
      description: '외국어 역량',
      subElements: ['프랑스어', '영어', '독일어', '기타']
    },
    {
      id: 'be-math-num',
      name: '수학적 역량과 수리력',
      nameEn: 'Mathematical and Numeracy',
      description: '수학적 사고와 수 감각',
      subElements: ['수 연산', '측정', '기하', '통계', '문제 해결']
    },
    {
      id: 'be-digital-media',
      name: '디지털 역량과 미디어',
      nameEn: 'Digital and Media Competence',
      description: '디지털 리터러시와 미디어 이해',
      subElements: ['디지털 도구', '미디어 리터러시', '비판적 사용']
    },
    {
      id: 'be-citizenship',
      name: '시민 역량',
      nameEn: 'Citizenship Competence',
      description: '민주적 시민성',
      subElements: ['민주주의', '인권', '참여', '다양성']
    },
    {
      id: 'be-economic',
      name: '경제적, 금융적 역량',
      nameEn: 'Economic and Financial Competence',
      description: '경제 이해와 금융 리터러시',
      subElements: ['경제 개념', '금융 관리', '기업가정신']
    }
  ],
  source: 'Vlaamse Overheid - Onderwijs Vlaanderen',
  yearIntroduced: 2019,
  website: 'https://onderwijs.vlaanderen.be/'
};

// ============================================
// Mexico New Mexican School
// ============================================

export const MEXICO_NEM: InternationalFramework = {
  id: 'mexico-nem',
  name: '멕시코 새 멕시코 학교 (NEM)',
  nameEn: 'Mexico New Mexican School',
  country: 'Mexico',
  description: '포용적이고 공평한 교육을 추구하는 멕시코 교육 모델입니다.',
  descriptionEn: 'Mexican educational model pursuing inclusive and equitable education.',
  keyElements: [
    {
      id: 'mx-language',
      name: '언어와 의사소통',
      nameEn: 'Languages and Communication',
      description: '다양한 언어로 이해하고 표현',
      subElements: ['스페인어', '원주민어', '외국어', '수어']
    },
    {
      id: 'mx-ethics',
      name: '윤리, 자연, 사회',
      nameEn: 'Ethics, Nature and Societies',
      description: '윤리적 가치와 사회 이해',
      subElements: ['윤리', '역사', '지리', '시민성']
    },
    {
      id: 'mx-scientific',
      name: '과학적, 수학적 사고',
      nameEn: 'Scientific and Mathematical Thinking',
      description: '과학적 방법과 수학적 추론',
      subElements: ['과학', '수학', '기술', '탐구']
    },
    {
      id: 'mx-humanistic',
      name: '인문학적 사고',
      nameEn: 'Humanistic Thinking',
      description: '비판적이고 성찰적 사고',
      subElements: ['철학', '비판적 사고', '성찰']
    },
    {
      id: 'mx-arts',
      name: '예술',
      nameEn: 'Arts',
      description: '예술적 표현과 감상',
      subElements: ['음악', '미술', '연극', '무용']
    },
    {
      id: 'mx-health',
      name: '신체 건강',
      nameEn: 'Physical Well-being',
      description: '신체 건강과 운동',
      subElements: ['체육', '건강', '영양']
    },
    {
      id: 'mx-socioemotional',
      name: '사회정서적',
      nameEn: 'Socio-emotional',
      description: '사회정서 학습',
      subElements: ['자기 인식', '자기 조절', '관계', '의사결정']
    }
  ],
  source: 'Secretaría de Educación Pública (SEP)',
  yearIntroduced: 2022,
  website: 'https://www.gob.mx/sep'
};

// ============================================
// Argentina National Curriculum
// ============================================

export const ARGENTINA_NAP: InternationalFramework = {
  id: 'argentina-nap',
  name: '아르헨티나 우선 학습 핵심 (NAP)',
  nameEn: 'Argentina Priority Learning Core (NAP)',
  country: 'Argentina',
  description: '모든 학생이 달성해야 할 우선 학습을 정의합니다.',
  descriptionEn: 'Defines priority learning that all students should achieve.',
  keyElements: [
    {
      id: 'ar-language',
      name: '언어',
      nameEn: 'Language',
      description: '언어 이해와 생산',
      subElements: ['읽기', '쓰기', '구어', '문학']
    },
    {
      id: 'ar-math',
      name: '수학',
      nameEn: 'Mathematics',
      description: '수학적 사고와 문제 해결',
      subElements: ['수와 연산', '기하', '측정', '통계']
    },
    {
      id: 'ar-natural',
      name: '자연과학',
      nameEn: 'Natural Sciences',
      description: '자연 세계 탐구',
      subElements: ['물리', '화학', '생물', '지구과학']
    },
    {
      id: 'ar-social',
      name: '사회과학',
      nameEn: 'Social Sciences',
      description: '사회 현상 이해',
      subElements: ['역사', '지리', '경제', '사회']
    },
    {
      id: 'ar-technology',
      name: '기술',
      nameEn: 'Technology',
      description: '기술적 문제 해결',
      subElements: ['설계', '제작', '디지털 기술']
    },
    {
      id: 'ar-arts',
      name: '예술 교육',
      nameEn: 'Arts Education',
      description: '예술적 표현과 감상',
      subElements: ['음악', '미술', '연극', '무용']
    },
    {
      id: 'ar-citizenship',
      name: '시민 교육',
      nameEn: 'Citizenship Education',
      description: '민주적 시민 양성',
      subElements: ['인권', '민주주의', '참여', '다양성']
    }
  ],
  source: 'Ministerio de Educación de la Nación',
  yearIntroduced: 2012,
  website: 'https://www.argentina.gob.ar/educacion'
};

// ============================================
// Chile Curriculum
// ============================================

export const CHILE_CURRICULAR: InternationalFramework = {
  id: 'chile-curricular',
  name: '칠레 교육과정 기반',
  nameEn: 'Chile Curricular Bases',
  country: 'Chile',
  description: '핵심 역량과 학습 목표를 정의하는 칠레 교육과정입니다.',
  descriptionEn: 'Chilean curriculum defining key competences and learning objectives.',
  keyElements: [
    {
      id: 'cl-language',
      name: '언어와 의사소통',
      nameEn: 'Language and Communication',
      description: '언어 이해와 표현',
      subElements: ['읽기', '쓰기', '구어', '문학']
    },
    {
      id: 'cl-math',
      name: '수학',
      nameEn: 'Mathematics',
      description: '수학적 사고와 문제 해결',
      subElements: ['수와 연산', '패턴과 대수', '기하', '통계']
    },
    {
      id: 'cl-science',
      name: '자연과학',
      nameEn: 'Natural Sciences',
      description: '과학적 탐구와 이해',
      subElements: ['생물', '화학', '물리', '지구우주']
    },
    {
      id: 'cl-history',
      name: '역사, 지리, 사회과학',
      nameEn: 'History, Geography and Social Sciences',
      description: '사회 이해와 시민성',
      subElements: ['역사', '지리', '시민교육', '경제']
    },
    {
      id: 'cl-technology',
      name: '기술',
      nameEn: 'Technology',
      description: '기술적 문제 해결',
      subElements: ['설계', '제작', '디지털 기술']
    },
    {
      id: 'cl-arts',
      name: '예술',
      nameEn: 'Arts',
      description: '예술적 표현',
      subElements: ['음악', '미술']
    },
    {
      id: 'cl-pe',
      name: '체육과 건강',
      nameEn: 'Physical Education and Health',
      description: '신체 활동과 건강',
      subElements: ['운동', '게임', '건강']
    },
    {
      id: 'cl-orientation',
      name: '오리엔테이션',
      nameEn: 'Orientation',
      description: '사회정서적 발달',
      subElements: ['자기 인식', '관계', '의사결정']
    }
  ],
  source: 'Ministerio de Educación de Chile',
  yearIntroduced: 2019,
  website: 'https://www.mineduc.cl/'
};

// ============================================
// Israel Curriculum
// ============================================

export const ISRAEL_CURRICULUM: InternationalFramework = {
  id: 'israel-curriculum',
  name: '이스라엘 21세기 역량 교육과정',
  nameEn: 'Israel 21st Century Skills Curriculum',
  country: 'Israel',
  description: '21세기 역량을 강조하는 이스라엘 교육과정입니다.',
  descriptionEn: 'Israeli curriculum emphasizing 21st century skills.',
  keyElements: [
    {
      id: 'il-thinking',
      name: '사고력',
      nameEn: 'Thinking Skills',
      description: '고차원적 사고 능력',
      subElements: ['비판적 사고', '창의적 사고', '문제 해결', '메타인지']
    },
    {
      id: 'il-learning',
      name: '학습력',
      nameEn: 'Learning Skills',
      description: '효과적 학습 능력',
      subElements: ['자기주도학습', '정보 리터러시', '협력 학습']
    },
    {
      id: 'il-literacy',
      name: '리터러시',
      nameEn: 'Literacies',
      description: '다양한 리터러시',
      subElements: ['디지털 리터러시', '미디어 리터러시', '정보 리터러시']
    },
    {
      id: 'il-social',
      name: '사회적 역량',
      nameEn: 'Social Competence',
      description: '사회적 상호작용 능력',
      subElements: ['의사소통', '협력', '리더십', '갈등 해결']
    },
    {
      id: 'il-personal',
      name: '개인적 역량',
      nameEn: 'Personal Competence',
      description: '개인 발달 역량',
      subElements: ['자기 조절', '회복탄력성', '적응력']
    }
  ],
  source: 'Israel Ministry of Education',
  yearIntroduced: 2015,
  website: 'https://edu.gov.il/'
};

// ============================================
// Philippines K to 12 Curriculum
// ============================================

export const PHILIPPINES_K12: InternationalFramework = {
  id: 'philippines-k12',
  name: '필리핀 K to 12 교육과정',
  nameEn: 'Philippines K to 12 Curriculum',
  country: 'Philippines',
  description: '12년제 기초교육을 위한 필리핀 교육과정입니다.',
  descriptionEn: 'Philippine curriculum for 12-year basic education.',
  keyElements: [
    {
      id: 'ph-language',
      name: '언어',
      nameEn: 'Language',
      description: '필리핀어, 영어, 지역 언어',
      subElements: ['필리핀어', '영어', '모어']
    },
    {
      id: 'ph-mathematics',
      name: '수학',
      nameEn: 'Mathematics',
      description: '수학적 사고와 문제 해결',
      subElements: ['수와 연산', '대수', '기하', '통계']
    },
    {
      id: 'ph-science',
      name: '과학',
      nameEn: 'Science',
      description: '과학적 탐구',
      subElements: ['생물', '화학', '물리', '지구과학']
    },
    {
      id: 'ph-araling',
      name: '아랄링 판리푸난 (사회)',
      nameEn: 'Araling Panlipunan (Social Studies)',
      description: '필리핀과 세계 사회 이해',
      subElements: ['역사', '지리', '경제', '정치']
    },
    {
      id: 'ph-values',
      name: '가치 교육',
      nameEn: 'Values Education',
      description: '도덕적 가치와 윤리',
      subElements: ['자기', '타인', '공동체', '환경', '신']
    },
    {
      id: 'ph-technology',
      name: '기술과 생활 교육',
      nameEn: 'Technology and Livelihood Education',
      description: '기술과 직업 준비',
      subElements: ['농업', '가정', '산업', 'ICT']
    },
    {
      id: 'ph-makabayan',
      name: '마카바얀',
      nameEn: 'Makabayan',
      description: '국가 정체성과 시민성',
      subElements: ['시민교육', '문화', '건강', '음악', '미술', '체육']
    }
  ],
  source: 'Department of Education, Philippines',
  yearIntroduced: 2013,
  website: 'https://www.deped.gov.ph/'
};

// ============================================
// Malaysia KSSM/KSSR Curriculum
// ============================================

export const MALAYSIA_KSSM: InternationalFramework = {
  id: 'malaysia-kssm',
  name: '말레이시아 표준 교육과정 (KSSM)',
  nameEn: 'Malaysia Standard Secondary School Curriculum',
  country: 'Malaysia',
  description: '21세기 역량을 통합한 말레이시아 교육과정입니다.',
  descriptionEn: 'Malaysian curriculum integrating 21st century skills.',
  keyElements: [
    {
      id: 'my-language',
      name: '언어',
      nameEn: 'Language',
      description: '말레이어, 영어, 중국어, 타밀어',
      subElements: ['말레이어', '영어', '중국어', '타밀어']
    },
    {
      id: 'my-mathematics',
      name: '수학',
      nameEn: 'Mathematics',
      description: '수학적 사고',
      subElements: ['수와 연산', '측정과 기하', '관계', '통계']
    },
    {
      id: 'my-science',
      name: '과학',
      nameEn: 'Science',
      description: '과학적 탐구',
      subElements: ['생물', '물리', '화학']
    },
    {
      id: 'my-hots',
      name: '고차원 사고력 (HOTS)',
      nameEn: 'Higher Order Thinking Skills',
      description: '비판적이고 창의적 사고',
      subElements: ['분석', '평가', '창조', '적용']
    },
    {
      id: 'my-islamic',
      name: '이슬람 교육 / 도덕 교육',
      nameEn: 'Islamic / Moral Education',
      description: '도덕적 가치와 윤리',
      subElements: ['이슬람 가치', '도덕적 가치', '윤리']
    },
    {
      id: 'my-21c',
      name: '21세기 역량',
      nameEn: '21st Century Skills',
      description: '미래 역량',
      subElements: ['의사소통', '협력', '비판적 사고', '창의성']
    }
  ],
  source: 'Ministry of Education Malaysia',
  yearIntroduced: 2017,
  website: 'https://www.moe.gov.my/'
};

// ============================================
// Thailand Basic Education Core Curriculum
// ============================================

export const THAILAND_CURRICULUM: InternationalFramework = {
  id: 'thailand-curriculum',
  name: '태국 기초교육 핵심 교육과정',
  nameEn: 'Thailand Basic Education Core Curriculum',
  country: 'Thailand',
  description: '21세기 태국 시민 양성을 위한 교육과정입니다.',
  descriptionEn: 'Curriculum for developing 21st century Thai citizens.',
  keyElements: [
    {
      id: 'th-thai',
      name: '태국어',
      nameEn: 'Thai Language',
      description: '태국어 이해와 표현',
      subElements: ['읽기', '쓰기', '듣기', '말하기', '문학']
    },
    {
      id: 'th-mathematics',
      name: '수학',
      nameEn: 'Mathematics',
      description: '수학적 사고와 문제 해결',
      subElements: ['수와 연산', '측정', '기하', '대수', '통계']
    },
    {
      id: 'th-science',
      name: '과학',
      nameEn: 'Science',
      description: '과학적 탐구',
      subComponents: ['물리', '화학', '생물', '지구', '기술']
    },
    {
      id: 'th-social',
      name: '사회, 종교, 문화',
      nameEn: 'Social Studies, Religion and Culture',
      description: '사회 이해와 불교 가르침',
      subElements: ['역사', '지리', '시민', '경제', '종교']
    },
    {
      id: 'th-health',
      name: '건강과 체육',
      nameEn: 'Health and Physical Education',
      description: '건강과 신체 활동',
      subElements: ['건강', '체육', '안전']
    },
    {
      id: 'th-arts',
      name: '예술',
      nameEn: 'Arts',
      description: '예술적 표현',
      subElements: ['시각예술', '음악', '공연예술']
    },
    {
      id: 'th-occupation',
      name: '직업과 기술',
      nameEn: 'Occupations and Technology',
      description: '직업 준비와 기술',
      subElements: ['가정', '기술', '직업', '정보기술']
    },
    {
      id: 'th-foreign',
      name: '외국어',
      nameEn: 'Foreign Languages',
      description: '영어 및 기타 언어',
      subElements: ['영어', '기타 외국어']
    }
  ],
  source: 'Ministry of Education, Thailand',
  yearIntroduced: 2008,
  website: 'https://www.moe.go.th/'
};

// ============================================
// Indonesia Kurikulum Merdeka
// ============================================

export const INDONESIA_MERDEKA: InternationalFramework = {
  id: 'indonesia-merdeka',
  name: '인도네시아 메르데카 교육과정',
  nameEn: 'Indonesia Kurikulum Merdeka',
  country: 'Indonesia',
  description: '학생 중심의 유연한 인도네시아 교육과정입니다.',
  descriptionEn: 'Student-centered and flexible Indonesian curriculum.',
  keyElements: [
    {
      id: 'id-faith',
      name: '신앙과 경건',
      nameEn: 'Faith and Piety',
      description: '종교적 가치와 도덕',
      subElements: ['종교', '도덕', '관용']
    },
    {
      id: 'id-creative',
      name: '창의적 사고',
      nameEn: 'Creative Thinking',
      description: '창의성과 혁신',
      subElements: ['아이디어 생성', '문제 해결', '혁신']
    },
    {
      id: 'id-critical',
      name: '비판적 사고',
      nameEn: 'Critical Thinking',
      description: '비판적 분석과 평가',
      subElements: ['분석', '평가', '추론', '반성']
    },
    {
      id: 'id-independence',
      name: '자기주도성',
      nameEn: 'Independence',
      description: '자기 조절과 주도성',
      subElements: ['자기 조절', '자기 인식', '자기 동기']
    },
    {
      id: 'id-gotong',
      name: '고똥 로용 (상호 협력)',
      nameEn: 'Gotong Royong (Mutual Cooperation)',
      description: '협력과 공동체 정신',
      subElements: ['협력', '공감', '나눔', '돌봄']
    },
    {
      id: 'id-global',
      name: '글로벌 다양성',
      nameEn: 'Global Diversity',
      description: '다문화 이해와 글로벌 시민성',
      subElements: ['다양성 존중', '문화 이해', '글로벌 인식']
    }
  ],
  source: 'Kementerian Pendidikan dan Kebudayaan',
  yearIntroduced: 2022,
  website: 'https://www.kemdikbud.go.id/'
};

// ============================================
// Vietnam General Education Program
// ============================================

export const VIETNAM_CTGDPT: InternationalFramework = {
  id: 'vietnam-ctgdpt',
  name: '베트남 일반교육 프로그램',
  nameEn: 'Vietnam General Education Program',
  country: 'Vietnam',
  description: '역량 중심의 베트남 일반교육 프로그램입니다.',
  descriptionEn: 'Competency-based Vietnamese general education program.',
  keyElements: [
    {
      id: 'vn-self',
      name: '자기 관리 역량',
      nameEn: 'Self-Management Competence',
      description: '자기 조절과 발달',
      subElements: ['자기 인식', '자기 조절', '자기 발달']
    },
    {
      id: 'vn-communication',
      name: '의사소통과 협력',
      nameEn: 'Communication and Cooperation',
      description: '효과적 의사소통과 팀워크',
      subElements: ['언어 소통', '비언어 소통', '협력', '리더십']
    },
    {
      id: 'vn-problem',
      name: '문제 해결과 창의성',
      nameEn: 'Problem Solving and Creativity',
      description: '문제 해결과 창의적 사고',
      subElements: ['문제 인식', '해결책 개발', '창의적 사고', '혁신']
    },
    {
      id: 'vn-language',
      name: '언어 역량',
      nameEn: 'Language Competence',
      description: '베트남어와 외국어',
      subElements: ['베트남어', '영어', '기타 외국어']
    },
    {
      id: 'vn-math-science',
      name: '수학과 과학 역량',
      nameEn: 'Math and Science Competence',
      description: '수학적, 과학적 사고',
      subElements: ['수학적 사고', '과학적 탐구', '기술 활용']
    },
    {
      id: 'vn-technology',
      name: '기술 역량',
      nameEn: 'Technology Competence',
      description: '기술 이해와 활용',
      subElements: ['디지털 리터러시', '기술 활용', '혁신']
    },
    {
      id: 'vn-aesthetic',
      name: '미적 역량',
      nameEn: 'Aesthetic Competence',
      description: '예술 감상과 표현',
      subElements: ['예술 감상', '예술 창작', '문화 이해']
    }
  ],
  source: 'Ministry of Education and Training, Vietnam',
  yearIntroduced: 2018,
  website: 'https://moet.gov.vn/'
};

// ============================================
// Additional 20 Countries (v3.0)
// ============================================

// Russia - Federal State Educational Standards (FGOS)
export const RUSSIA_FGOS: InternationalFramework = {
  id: 'russia-fgos',
  name: '러시아 연방 국가교육표준 (FGOS)',
  nameEn: 'Russia Federal State Educational Standards',
  country: 'Russia',
  description: '역량 기반의 러시아 연방 국가교육표준입니다.',
  descriptionEn: 'Competency-based Russian Federal State Educational Standards.',
  keyElements: [
    { id: 'ru-personal', name: '개인적 결과', nameEn: 'Personal Results', description: '자아 발달과 가치관', subElements: ['자기 정체성', '시민의식', '가치관', '동기'] },
    { id: 'ru-meta', name: '메타교과적 결과', nameEn: 'Meta-Subject Results', description: '범교과적 역량', subElements: ['인지 역량', '의사소통', '규제 역량', '협력'] },
    { id: 'ru-subject', name: '교과적 결과', nameEn: 'Subject Results', description: '교과별 지식과 기술', subElements: ['지식', '기술', '활동 경험', '창의성'] },
    { id: 'ru-universal', name: '보편적 학습 활동', nameEn: 'Universal Learning Activities', description: '학습 역량', subElements: ['개인적', '규제적', '인지적', '의사소통적'] }
  ],
  source: 'Ministry of Education of Russia',
  yearIntroduced: 2021,
  website: 'https://fgos.ru/'
};

// Poland - Core Curriculum
export const POLAND_CORE_CURRICULUM: InternationalFramework = {
  id: 'poland-curriculum',
  name: '폴란드 핵심 교육과정',
  nameEn: 'Poland Core Curriculum',
  country: 'Poland',
  description: '역량 중심의 폴란드 핵심 교육과정입니다.',
  descriptionEn: 'Competency-based Polish Core Curriculum.',
  keyElements: [
    { id: 'pl-communication', name: '의사소통 역량', nameEn: 'Communication Competence', description: '효과적 소통', subElements: ['언어 표현', '듣기', '읽기', '쓰기'] },
    { id: 'pl-math-science', name: '수학·과학 역량', nameEn: 'Mathematical and Scientific Competence', description: '논리적·과학적 사고', subElements: ['수학적 추론', '과학적 방법', '데이터 분석'] },
    { id: 'pl-digital', name: '디지털 역량', nameEn: 'Digital Competence', description: 'ICT 활용', subElements: ['디지털 리터러시', '정보 처리', '온라인 안전'] },
    { id: 'pl-learning', name: '학습 역량', nameEn: 'Learning to Learn', description: '자기주도 학습', subElements: ['학습 전략', '메타인지', '시간 관리'] },
    { id: 'pl-social', name: '사회·시민 역량', nameEn: 'Social and Civic Competence', description: '시민의식', subElements: ['민주주의', '인권', '문화 이해', '참여'] }
  ],
  source: 'Ministry of National Education, Poland',
  yearIntroduced: 2017,
  website: 'https://www.gov.pl/web/edukacja-i-nauka'
};

// Czech Republic - Framework Education Programme
export const CZECH_RVP: InternationalFramework = {
  id: 'czech-rvp',
  name: '체코 교육과정 프레임워크 (RVP)',
  nameEn: 'Czech Framework Education Programme',
  country: 'Czech Republic',
  description: '핵심 역량 기반의 체코 교육과정입니다.',
  descriptionEn: 'Key competency-based Czech Framework Education Programme.',
  keyElements: [
    { id: 'cz-learning', name: '학습 역량', nameEn: 'Learning Competence', description: '학습 방법 습득', subElements: ['학습 전략', '정보 활용', '자기 평가'] },
    { id: 'cz-problem', name: '문제해결 역량', nameEn: 'Problem-Solving Competence', description: '문제 분석과 해결', subElements: ['문제 인식', '전략 수립', '해결책 실행'] },
    { id: 'cz-communication', name: '의사소통 역량', nameEn: 'Communication Competence', description: '효과적 소통', subElements: ['언어 표현', '경청', '토론'] },
    { id: 'cz-social', name: '사회·개인 역량', nameEn: 'Social and Personal Competence', description: '협력과 자기관리', subElements: ['팀워크', '자기 조절', '책임감'] },
    { id: 'cz-civic', name: '시민 역량', nameEn: 'Civic Competence', description: '시민의식과 참여', subElements: ['민주주의', '인권', '환경'] },
    { id: 'cz-work', name: '직업 역량', nameEn: 'Work Competence', description: '직업 세계 준비', subElements: ['직업 탐색', '기업가정신', '경력 개발'] }
  ],
  source: 'Ministry of Education, Youth and Sports, Czech Republic',
  yearIntroduced: 2007,
  website: 'https://www.edu.cz/'
};

// Greece - New Curriculum
export const GREECE_NEW_CURRICULUM: InternationalFramework = {
  id: 'greece-curriculum',
  name: '그리스 신 교육과정',
  nameEn: 'Greece New Curriculum',
  country: 'Greece',
  description: '21세기 역량 기반의 그리스 신 교육과정입니다.',
  descriptionEn: '21st century competency-based Greek New Curriculum.',
  keyElements: [
    { id: 'gr-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고력', subElements: ['분석', '평가', '추론'] },
    { id: 'gr-creative', name: '창의성', nameEn: 'Creativity', description: '창의적 문제해결', subElements: ['발상', '혁신', '예술적 표현'] },
    { id: 'gr-communication', name: '의사소통', nameEn: 'Communication', description: '효과적 표현', subElements: ['언어', '미디어', '디지털'] },
    { id: 'gr-collaboration', name: '협력', nameEn: 'Collaboration', description: '팀워크', subElements: ['팀 작업', '리더십', '갈등 해결'] },
    { id: 'gr-citizenship', name: '시민의식', nameEn: 'Citizenship', description: '민주시민', subElements: ['민주주의', '인권', '유럽 정체성'] }
  ],
  source: 'Hellenic Ministry of Education',
  yearIntroduced: 2021,
  website: 'https://www.minedu.gov.gr/'
};

// Turkey - TTKB Curriculum
export const TURKEY_TTKB: InternationalFramework = {
  id: 'turkey-ttkb',
  name: '터키 교육위원회 교육과정',
  nameEn: 'Turkey TTKB Curriculum',
  country: 'Turkey',
  description: '가치와 역량 기반의 터키 교육과정입니다.',
  descriptionEn: 'Values and competency-based Turkish curriculum.',
  keyElements: [
    { id: 'tr-values', name: '핵심 가치', nameEn: 'Core Values', description: '터키의 핵심 가치', subElements: ['정의', '우정', '정직', '자기통제', '인내', '존중', '사랑', '책임', '애국심'] },
    { id: 'tr-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석과 평가', subElements: ['분석', '평가', '의사결정'] },
    { id: 'tr-creative', name: '창의적 사고', nameEn: 'Creative Thinking', description: '창의성과 혁신', subElements: ['발상', '문제해결', '혁신'] },
    { id: 'tr-communication', name: '의사소통', nameEn: 'Communication', description: '효과적 소통', subElements: ['터키어', '외국어', '디지털'] },
    { id: 'tr-entrepreneurship', name: '기업가정신', nameEn: 'Entrepreneurship', description: '주도성과 혁신', subElements: ['주도성', '리스크 관리', '프로젝트 관리'] }
  ],
  source: 'Ministry of National Education, Turkey (TTKB)',
  yearIntroduced: 2018,
  website: 'https://ttkb.meb.gov.tr/'
};

// UAE - MOE Framework
export const UAE_MOE_FRAMEWORK: InternationalFramework = {
  id: 'uae-moe',
  name: 'UAE 교육부 역량 프레임워크',
  nameEn: 'UAE MOE Competency Framework',
  country: 'UAE',
  description: '미래 지향적 UAE 교육 역량 프레임워크입니다.',
  descriptionEn: 'Future-oriented UAE educational competency framework.',
  keyElements: [
    { id: 'uae-islamic', name: '이슬람 가치', nameEn: 'Islamic Values', description: '이슬람 가치와 아랍 정체성', subElements: ['이슬람 가치', '아랍 정체성', '에미리트 유산'] },
    { id: 'uae-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고', subElements: ['분석', '평가', '문제해결'] },
    { id: 'uae-innovation', name: '혁신과 창의성', nameEn: 'Innovation and Creativity', description: '창의적 혁신', subElements: ['발명', '기업가정신', '디자인 사고'] },
    { id: 'uae-communication', name: '의사소통', nameEn: 'Communication', description: '다국어 소통', subElements: ['아랍어', '영어', '디지털 리터러시'] },
    { id: 'uae-global', name: '글로벌 시민의식', nameEn: 'Global Citizenship', description: '세계시민', subElements: ['문화 이해', '지속가능성', '국제 협력'] },
    { id: 'uae-future', name: '미래 준비도', nameEn: 'Future Readiness', description: '4차 산업혁명 대비', subElements: ['AI', '코딩', 'STEM', '적응력'] }
  ],
  source: 'UAE Ministry of Education',
  yearIntroduced: 2017,
  website: 'https://www.moe.gov.ae/'
};

// Saudi Arabia - Vision 2030 Education
export const SAUDI_VISION2030: InternationalFramework = {
  id: 'saudi-vision2030',
  name: '사우디아라비아 비전 2030 교육',
  nameEn: 'Saudi Arabia Vision 2030 Education',
  country: 'Saudi Arabia',
  description: '비전 2030에 기반한 사우디 교육 개혁입니다.',
  descriptionEn: 'Saudi education reform based on Vision 2030.',
  keyElements: [
    { id: 'sa-islamic', name: '이슬람 가치', nameEn: 'Islamic Values', description: '이슬람 가치와 원칙', subElements: ['이슬람 원칙', '도덕성', '사우디 정체성'] },
    { id: 'sa-knowledge', name: '지식 경제', nameEn: 'Knowledge Economy', description: '지식기반 경제 준비', subElements: ['비판적 사고', '문제해결', '혁신'] },
    { id: 'sa-skills', name: '21세기 기술', nameEn: '21st Century Skills', description: '미래 역량', subElements: ['디지털 리터러시', '협력', '의사소통'] },
    { id: 'sa-character', name: '인성 교육', nameEn: 'Character Education', description: '인성 발달', subElements: ['리더십', '책임감', '시민의식'] },
    { id: 'sa-stem', name: 'STEM 교육', nameEn: 'STEM Education', description: '과학기술 역량', subElements: ['과학', '기술', '공학', '수학'] }
  ],
  source: 'Saudi Ministry of Education',
  yearIntroduced: 2016,
  website: 'https://www.moe.gov.sa/'
};

// Qatar - QNV 2030 Education
export const QATAR_QNV2030: InternationalFramework = {
  id: 'qatar-qnv2030',
  name: '카타르 국가 비전 2030 교육',
  nameEn: 'Qatar National Vision 2030 Education',
  country: 'Qatar',
  description: '카타르 국가 비전 2030에 기반한 교육과정입니다.',
  descriptionEn: 'Curriculum based on Qatar National Vision 2030.',
  keyElements: [
    { id: 'qa-arabic', name: '아랍어와 이슬람', nameEn: 'Arabic and Islamic Studies', description: '아랍 정체성', subElements: ['아랍어', '이슬람 교육', '카타르 역사'] },
    { id: 'qa-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고력', subElements: ['분석', '종합', '평가'] },
    { id: 'qa-creativity', name: '창의성과 혁신', nameEn: 'Creativity and Innovation', description: '창의적 문제해결', subElements: ['창의적 사고', '혁신', '기업가정신'] },
    { id: 'qa-global', name: '글로벌 역량', nameEn: 'Global Competence', description: '세계시민 역량', subElements: ['다문화 이해', '국제 협력', '언어'] },
    { id: 'qa-digital', name: '디지털 역량', nameEn: 'Digital Competence', description: 'ICT 활용', subElements: ['디지털 리터러시', '코딩', '정보 관리'] }
  ],
  source: 'Ministry of Education and Higher Education, Qatar',
  yearIntroduced: 2018,
  website: 'https://www.edu.gov.qa/'
};

// Egypt - Education 2.0
export const EGYPT_EDUCATION_2_0: InternationalFramework = {
  id: 'egypt-education-2',
  name: '이집트 교육 2.0',
  nameEn: 'Egypt Education 2.0',
  country: 'Egypt',
  description: '역량 기반의 이집트 새 교육 시스템입니다.',
  descriptionEn: 'Competency-based new Egyptian education system.',
  keyElements: [
    { id: 'eg-arabic', name: '아랍어와 정체성', nameEn: 'Arabic and Identity', description: '아랍어와 이집트 정체성', subElements: ['아랍어', '이집트 역사', '문화'] },
    { id: 'eg-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고', subElements: ['분석', '평가', '추론'] },
    { id: 'eg-problem', name: '문제해결', nameEn: 'Problem Solving', description: '문제해결 능력', subElements: ['문제 정의', '전략 개발', '실행'] },
    { id: 'eg-digital', name: '디지털 리터러시', nameEn: 'Digital Literacy', description: '디지털 역량', subElements: ['ICT', '온라인 안전', '디지털 시민'] },
    { id: 'eg-life', name: '생활 기술', nameEn: 'Life Skills', description: '실생활 역량', subElements: ['의사소통', '협력', '자기관리'] }
  ],
  source: 'Ministry of Education and Technical Education, Egypt',
  yearIntroduced: 2018,
  website: 'https://moe.gov.eg/'
};

// Kenya - Competency Based Curriculum (CBC)
export const KENYA_CBC: InternationalFramework = {
  id: 'kenya-cbc',
  name: '케냐 역량중심 교육과정 (CBC)',
  nameEn: 'Kenya Competency Based Curriculum',
  country: 'Kenya',
  description: '역량 중심의 케냐 새 교육과정입니다.',
  descriptionEn: 'Competency-based new Kenyan curriculum.',
  keyElements: [
    { id: 'ke-communication', name: '의사소통과 협력', nameEn: 'Communication and Collaboration', description: '효과적 소통과 팀워크', subElements: ['언어 기술', '경청', '팀워크'] },
    { id: 'ke-critical', name: '비판적 사고와 문제해결', nameEn: 'Critical Thinking and Problem Solving', description: '분석과 해결', subElements: ['분석', '추론', '의사결정'] },
    { id: 'ke-imagination', name: '상상력과 창의성', nameEn: 'Imagination and Creativity', description: '창의적 표현', subElements: ['창의적 사고', '혁신', '예술'] },
    { id: 'ke-citizenship', name: '시민의식', nameEn: 'Citizenship', description: '책임있는 시민', subElements: ['민주주의', '인권', '환경'] },
    { id: 'ke-learning', name: '학습하기', nameEn: 'Learning to Learn', description: '자기주도 학습', subElements: ['학습 전략', '메타인지', '평생학습'] },
    { id: 'ke-self', name: '자기효능감', nameEn: 'Self-Efficacy', description: '자신감과 회복력', subElements: ['자기 믿음', '회복력', '목표 설정'] },
    { id: 'ke-digital', name: '디지털 리터러시', nameEn: 'Digital Literacy', description: 'ICT 활용', subElements: ['컴퓨터 기술', '정보 관리', '온라인 안전'] }
  ],
  source: 'Kenya Institute of Curriculum Development (KICD)',
  yearIntroduced: 2017,
  website: 'https://kicd.ac.ke/'
};

// Nigeria - NERDC Curriculum
export const NIGERIA_NERDC: InternationalFramework = {
  id: 'nigeria-nerdc',
  name: '나이지리아 NERDC 교육과정',
  nameEn: 'Nigeria NERDC Curriculum',
  country: 'Nigeria',
  description: '나이지리아 교육연구개발위원회 교육과정입니다.',
  descriptionEn: 'Nigerian Educational Research and Development Council curriculum.',
  keyElements: [
    { id: 'ng-knowledge', name: '지식과 이해', nameEn: 'Knowledge and Understanding', description: '교과 지식', subElements: ['핵심 지식', '개념 이해', '적용'] },
    { id: 'ng-skills', name: '기술과 역량', nameEn: 'Skills and Competencies', description: '실용적 기술', subElements: ['비판적 사고', '문제해결', '창의성'] },
    { id: 'ng-values', name: '가치와 태도', nameEn: 'Values and Attitudes', description: '도덕적 가치', subElements: ['정직', '존중', '책임감', '애국심'] },
    { id: 'ng-entrepreneurship', name: '기업가정신', nameEn: 'Entrepreneurship', description: '경제적 역량', subElements: ['비즈니스 기술', '재정 관리', '혁신'] },
    { id: 'ng-ict', name: 'ICT 역량', nameEn: 'ICT Competence', description: '디지털 역량', subElements: ['컴퓨터 기술', '정보 리터러시', '디지털 시민'] }
  ],
  source: 'Nigerian Educational Research and Development Council (NERDC)',
  yearIntroduced: 2013,
  website: 'https://nerdc.gov.ng/'
};

// Colombia - DBA
export const COLOMBIA_DBA: InternationalFramework = {
  id: 'colombia-dba',
  name: '콜롬비아 기초학습권 (DBA)',
  nameEn: 'Colombia Basic Learning Rights',
  country: 'Colombia',
  description: '역량 기반의 콜롬비아 기초학습권입니다.',
  descriptionEn: 'Competency-based Colombian Basic Learning Rights.',
  keyElements: [
    { id: 'co-communication', name: '의사소통 역량', nameEn: 'Communication Competence', description: '효과적 소통', subElements: ['스페인어', '외국어', '미디어'] },
    { id: 'co-math', name: '수학적 사고', nameEn: 'Mathematical Thinking', description: '수학적 추론', subElements: ['수적 사고', '공간적 사고', '문제해결'] },
    { id: 'co-scientific', name: '과학적 역량', nameEn: 'Scientific Competence', description: '과학적 탐구', subElements: ['탐구', '실험', '자연 이해'] },
    { id: 'co-citizenship', name: '시민 역량', nameEn: 'Citizenship Competence', description: '시민의식', subElements: ['민주주의', '평화', '다양성'] },
    { id: 'co-labor', name: '노동 역량', nameEn: 'Labor Competence', description: '직업 준비', subElements: ['직업 탐색', '기업가정신', '기술'] }
  ],
  source: 'Ministerio de Educación Nacional, Colombia',
  yearIntroduced: 2015,
  website: 'https://www.mineducacion.gov.co/'
};

// Peru - Currículo Nacional
export const PERU_CURRICULO: InternationalFramework = {
  id: 'peru-curriculo',
  name: '페루 국가 교육과정',
  nameEn: 'Peru National Curriculum',
  country: 'Peru',
  description: '역량 기반의 페루 국가 교육과정입니다.',
  descriptionEn: 'Competency-based Peruvian National Curriculum.',
  keyElements: [
    { id: 'pe-identity', name: '정체성 구축', nameEn: 'Identity Construction', description: '개인 정체성', subElements: ['자기 인식', '자기 조절', '윤리'] },
    { id: 'pe-citizenship', name: '시민으로서 행동', nameEn: 'Acting as Citizen', description: '민주시민', subElements: ['참여', '인권', '환경'] },
    { id: 'pe-communication', name: '다양한 언어로 소통', nameEn: 'Communication in Various Languages', description: '의사소통', subElements: ['스페인어', '원주민어', '외국어'] },
    { id: 'pe-scientific', name: '과학적 탐구', nameEn: 'Scientific Inquiry', description: '과학적 방법', subElements: ['관찰', '실험', '분석'] },
    { id: 'pe-math', name: '수학적 문제해결', nameEn: 'Mathematical Problem Solving', description: '수학적 사고', subElements: ['수량', '형태', '데이터'] },
    { id: 'pe-artistic', name: '예술적 감상과 창작', nameEn: 'Artistic Appreciation and Creation', description: '예술 역량', subElements: ['감상', '창작', '문화'] }
  ],
  source: 'Ministerio de Educación, Peru',
  yearIntroduced: 2016,
  website: 'https://www.minedu.gob.pe/'
};

// Ecuador - Currículo Nacional
export const ECUADOR_CURRICULO: InternationalFramework = {
  id: 'ecuador-curriculo',
  name: '에콰도르 국가 교육과정',
  nameEn: 'Ecuador National Curriculum',
  country: 'Ecuador',
  description: '역량 기반의 에콰도르 국가 교육과정입니다.',
  descriptionEn: 'Competency-based Ecuadorian National Curriculum.',
  keyElements: [
    { id: 'ec-justice', name: '정의와 혁신', nameEn: 'Justice and Innovation', description: '사회 정의', subElements: ['평등', '인권', '혁신'] },
    { id: 'ec-solidarity', name: '연대와 협력', nameEn: 'Solidarity and Cooperation', description: '협력과 연대', subElements: ['팀워크', '공동체', '상호존중'] },
    { id: 'ec-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고', subElements: ['분석', '평가', '추론'] },
    { id: 'ec-creativity', name: '창의성', nameEn: 'Creativity', description: '창의적 표현', subElements: ['발상', '혁신', '예술'] },
    { id: 'ec-intercultural', name: '상호문화 역량', nameEn: 'Intercultural Competence', description: '다문화 이해', subElements: ['문화 다양성', '원주민 문화', '존중'] }
  ],
  source: 'Ministerio de Educación, Ecuador',
  yearIntroduced: 2016,
  website: 'https://educacion.gob.ec/'
};

// Pakistan - Single National Curriculum (SNC)
export const PAKISTAN_SNC: InternationalFramework = {
  id: 'pakistan-snc',
  name: '파키스탄 단일 국가 교육과정 (SNC)',
  nameEn: 'Pakistan Single National Curriculum',
  country: 'Pakistan',
  description: '통합적인 파키스탄 단일 국가 교육과정입니다.',
  descriptionEn: 'Unified Pakistani Single National Curriculum.',
  keyElements: [
    { id: 'pk-islamic', name: '이슬람 가치', nameEn: 'Islamic Values', description: '이슬람 가치와 원칙', subElements: ['이슬람 교육', '도덕성', '윤리'] },
    { id: 'pk-national', name: '국가 정체성', nameEn: 'National Identity', description: '파키스탄 정체성', subElements: ['역사', '문화', '애국심'] },
    { id: 'pk-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고', subElements: ['분석', '추론', '문제해결'] },
    { id: 'pk-communication', name: '의사소통', nameEn: 'Communication', description: '언어 역량', subElements: ['우르두어', '영어', '지역어'] },
    { id: 'pk-stem', name: 'STEM 역량', nameEn: 'STEM Competence', description: '과학기술 역량', subElements: ['과학', '기술', '수학'] },
    { id: 'pk-life', name: '생활 기술', nameEn: 'Life Skills', description: '실생활 역량', subElements: ['협력', '리더십', '의사결정'] }
  ],
  source: 'Ministry of Federal Education and Professional Training, Pakistan',
  yearIntroduced: 2020,
  website: 'https://mofept.gov.pk/'
};

// Bangladesh - NCTB Curriculum
export const BANGLADESH_NCTB: InternationalFramework = {
  id: 'bangladesh-nctb',
  name: '방글라데시 NCTB 교육과정',
  nameEn: 'Bangladesh NCTB Curriculum',
  country: 'Bangladesh',
  description: '국가교과서위원회의 방글라데시 교육과정입니다.',
  descriptionEn: 'National Curriculum and Textbook Board curriculum.',
  keyElements: [
    { id: 'bd-bengali', name: '벵골어와 문화', nameEn: 'Bengali Language and Culture', description: '방글라데시 정체성', subElements: ['벵골어', '문학', '문화'] },
    { id: 'bd-communication', name: '의사소통', nameEn: 'Communication', description: '효과적 소통', subElements: ['언어', '듣기', '말하기', '쓰기'] },
    { id: 'bd-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고', subElements: ['분석', '추론', '판단'] },
    { id: 'bd-creativity', name: '창의성', nameEn: 'Creativity', description: '창의적 표현', subElements: ['상상력', '혁신', '예술'] },
    { id: 'bd-citizenship', name: '시민의식', nameEn: 'Citizenship', description: '민주시민', subElements: ['민주주의', '인권', '다양성'] },
    { id: 'bd-digital', name: '디지털 리터러시', nameEn: 'Digital Literacy', description: 'ICT 역량', subElements: ['컴퓨터 기술', '인터넷', '디지털 안전'] }
  ],
  source: 'National Curriculum and Textbook Board (NCTB), Bangladesh',
  yearIntroduced: 2021,
  website: 'https://nctb.gov.bd/'
};

// Sri Lanka - NIE Curriculum
export const SRI_LANKA_NIE: InternationalFramework = {
  id: 'sri-lanka-nie',
  name: '스리랑카 NIE 교육과정',
  nameEn: 'Sri Lanka NIE Curriculum',
  country: 'Sri Lanka',
  description: '국가교육원의 스리랑카 교육과정입니다.',
  descriptionEn: 'National Institute of Education curriculum.',
  keyElements: [
    { id: 'lk-communication', name: '의사소통과 협력', nameEn: 'Communication and Collaboration', description: '효과적 소통', subElements: ['싱할라어', '타밀어', '영어', '협력'] },
    { id: 'lk-critical', name: '비판적 사고', nameEn: 'Critical and Creative Thinking', description: '창의적 사고', subElements: ['분석', '종합', '창의성'] },
    { id: 'lk-citizenship', name: '시민의식과 가치', nameEn: 'Citizenship and Values', description: '시민 가치', subElements: ['민주주의', '다문화', '평화'] },
    { id: 'lk-environment', name: '환경 인식', nameEn: 'Environmental Awareness', description: '환경 보호', subElements: ['지속가능성', '생태', '보존'] },
    { id: 'lk-economy', name: '경제적 역량', nameEn: 'Economic Competence', description: '경제 이해', subElements: ['재정 관리', '기업가정신', '직업'] },
    { id: 'lk-technology', name: '기술 역량', nameEn: 'Technological Competence', description: '기술 활용', subElements: ['ICT', '디지털 리터러시', '혁신'] }
  ],
  source: 'National Institute of Education (NIE), Sri Lanka',
  yearIntroduced: 2015,
  website: 'https://nie.lk/'
};

// Nepal - NCF
export const NEPAL_NCF: InternationalFramework = {
  id: 'nepal-ncf',
  name: '네팔 국가 교육과정 프레임워크',
  nameEn: 'Nepal National Curriculum Framework',
  country: 'Nepal',
  description: '역량 기반의 네팔 국가 교육과정입니다.',
  descriptionEn: 'Competency-based Nepali National Curriculum Framework.',
  keyElements: [
    { id: 'np-nepali', name: '네팔어와 문화', nameEn: 'Nepali Language and Culture', description: '네팔 정체성', subElements: ['네팔어', '문화', '역사'] },
    { id: 'np-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고', subElements: ['분석', '추론', '문제해결'] },
    { id: 'np-creativity', name: '창의성과 혁신', nameEn: 'Creativity and Innovation', description: '창의적 표현', subElements: ['창의적 사고', '혁신', '발명'] },
    { id: 'np-communication', name: '의사소통', nameEn: 'Communication', description: '효과적 소통', subElements: ['네팔어', '영어', '지역어'] },
    { id: 'np-collaboration', name: '협력', nameEn: 'Collaboration', description: '팀워크', subElements: ['팀 작업', '리더십', '공동체'] },
    { id: 'np-digital', name: '디지털 역량', nameEn: 'Digital Competence', description: 'ICT 활용', subElements: ['컴퓨터', '인터넷', '미디어'] }
  ],
  source: 'Curriculum Development Centre (CDC), Nepal',
  yearIntroduced: 2019,
  website: 'https://moecdc.gov.np/'
};

// Ghana - NaCCA Standards
export const GHANA_NACCA: InternationalFramework = {
  id: 'ghana-nacca',
  name: '가나 NaCCA 교육과정 표준',
  nameEn: 'Ghana NaCCA Curriculum Standards',
  country: 'Ghana',
  description: '역량 기반의 가나 새 교육과정입니다.',
  descriptionEn: 'Competency-based Ghanaian new curriculum.',
  keyElements: [
    { id: 'gh-critical', name: '비판적 사고와 문제해결', nameEn: 'Critical Thinking and Problem Solving', description: '분석과 해결', subElements: ['분석', '추론', '의사결정'] },
    { id: 'gh-creativity', name: '창의성과 혁신', nameEn: 'Creativity and Innovation', description: '창의적 사고', subElements: ['상상력', '혁신', '발명'] },
    { id: 'gh-communication', name: '의사소통과 협력', nameEn: 'Communication and Collaboration', description: '효과적 소통', subElements: ['언어', '팀워크', '리더십'] },
    { id: 'gh-cultural', name: '문화 정체성', nameEn: 'Cultural Identity', description: '가나 문화', subElements: ['전통', '가치', '유산'] },
    { id: 'gh-digital', name: '디지털 리터러시', nameEn: 'Digital Literacy', description: 'ICT 역량', subElements: ['컴퓨터', '인터넷', '디지털 시민'] },
    { id: 'gh-personal', name: '개인 발달', nameEn: 'Personal Development', description: '자기 성장', subElements: ['자기 인식', '회복력', '목표 설정'] }
  ],
  source: 'National Council for Curriculum and Assessment (NaCCA), Ghana',
  yearIntroduced: 2019,
  website: 'https://nacca.gov.gh/'
};

// Morocco - Vision 2030 Education
export const MOROCCO_VISION2030: InternationalFramework = {
  id: 'morocco-vision2030',
  name: '모로코 비전 2030 교육',
  nameEn: 'Morocco Vision 2030 Education',
  country: 'Morocco',
  description: '비전 2030에 기반한 모로코 교육 개혁입니다.',
  descriptionEn: 'Moroccan education reform based on Vision 2030.',
  keyElements: [
    { id: 'ma-arabic', name: '아랍어와 정체성', nameEn: 'Arabic and Identity', description: '모로코 정체성', subElements: ['아랍어', '베르베르어', '프랑스어', '문화'] },
    { id: 'ma-citizenship', name: '시민의식', nameEn: 'Citizenship', description: '민주시민', subElements: ['민주주의', '인권', '참여'] },
    { id: 'ma-critical', name: '비판적 사고', nameEn: 'Critical Thinking', description: '분석적 사고', subElements: ['분석', '평가', '추론'] },
    { id: 'ma-creativity', name: '창의성', nameEn: 'Creativity', description: '창의적 표현', subElements: ['상상력', '혁신', '예술'] },
    { id: 'ma-digital', name: '디지털 역량', nameEn: 'Digital Competence', description: 'ICT 활용', subElements: ['디지털 리터러시', '코딩', '온라인 안전'] },
    { id: 'ma-entrepreneurship', name: '기업가정신', nameEn: 'Entrepreneurship', description: '경제적 역량', subElements: ['비즈니스', '혁신', '리더십'] }
  ],
  source: 'Ministère de l\'Éducation Nationale, Morocco',
  yearIntroduced: 2015,
  website: 'https://www.men.gov.ma/'
};

// ============================================
// All International Frameworks Export
// ============================================

export const INTERNATIONAL_FRAMEWORKS: InternationalFramework[] = [
  UK_BIG_IDEAS_SCIENCE,
  FINLAND_TRANSVERSAL_COMPETENCES,
  SINGAPORE_21CC,
  AUSTRALIAN_GENERAL_CAPABILITIES,
  NEW_ZEALAND_KEY_COMPETENCIES,
  CANADA_ONTARIO_BIG_IDEAS,
  JAPAN_COMPETENCY_CURRICULUM,
  CHINA_CORE_COMPETENCIES,
  GERMANY_BILDUNGSSTANDARDS,
  FRANCE_SOCLE_COMMUN,
  INDIA_NCF_2023,
  TAIWAN_CURRICULUM,
  NETHERLANDS_21ST_SKILLS,
  SWEDEN_LGR11,
  IRELAND_KEY_SKILLS,
  HONG_KONG_GENERIC_SKILLS,
  SCOTLAND_CFE,
  SWITZERLAND_LEHRPLAN21,
  SOUTH_AFRICA_CAPS,
  BRAZIL_BNCC,
  // 추가 15개국 (v2.5)
  NORWAY_FAGFORNYELSEN,
  DENMARK_FAELLES_MAAL,
  SPAIN_LOMLOE,
  PORTUGAL_APRENDIZAGENS,
  AUSTRIA_KOMPETENZORIENTIERUNG,
  BELGIUM_SLEUTELCOMPETENTIES,
  MEXICO_NEM,
  ARGENTINA_NAP,
  CHILE_CURRICULAR,
  ISRAEL_CURRICULUM,
  PHILIPPINES_K12,
  MALAYSIA_KSSM,
  THAILAND_CURRICULUM,
  INDONESIA_MERDEKA,
  VIETNAM_CTGDPT,
  // 추가 20개국 (v3.0)
  RUSSIA_FGOS,
  POLAND_CORE_CURRICULUM,
  CZECH_RVP,
  GREECE_NEW_CURRICULUM,
  TURKEY_TTKB,
  UAE_MOE_FRAMEWORK,
  SAUDI_VISION2030,
  QATAR_QNV2030,
  EGYPT_EDUCATION_2_0,
  KENYA_CBC,
  NIGERIA_NERDC,
  COLOMBIA_DBA,
  PERU_CURRICULO,
  ECUADOR_CURRICULO,
  PAKISTAN_SNC,
  BANGLADESH_NCTB,
  SRI_LANKA_NIE,
  NEPAL_NCF,
  GHANA_NACCA,
  MOROCCO_VISION2030
];

export const CONCEPT_BASED_MODELS: ConceptBasedModel[] = [
  CONCEPT_BASED_INQUIRY_MODEL,
  STRUCTURE_OF_KNOWLEDGE,
  STRUCTURE_OF_PROCESS
];

export const THINKING_FRAMEWORKS: ThinkingFramework[] = [
  BLOOMS_REVISED_TAXONOMY,
  WEBBS_DOK
];

// ============================================
// Database Statistics for International Frameworks
// ============================================

export const INTERNATIONAL_FRAMEWORKS_STATS = {
  frameworks: INTERNATIONAL_FRAMEWORKS.length,
  totalElements: INTERNATIONAL_FRAMEWORKS.reduce((acc, f) => acc + f.keyElements.length, 0),
  conceptBasedModels: CONCEPT_BASED_MODELS.length,
  thinkingFrameworks: THINKING_FRAMEWORKS.length,
  mypRelatedConcepts: MYP_RELATED_CONCEPTS.length,
  koreaCoreIdeas: KOREA_2022_CORE_IDEAS.length,
  countries: [...new Set(INTERNATIONAL_FRAMEWORKS.map(f => f.country))].length
};

console.log(`
╔══════════════════════════════════════════════════════════════╗
║     국제 교육 프레임워크 데이터베이스 로드 완료                  ║
╠══════════════════════════════════════════════════════════════╣
║  🌍 국제 프레임워크: ${String(INTERNATIONAL_FRAMEWORKS_STATS.frameworks).padStart(2)}개 (${INTERNATIONAL_FRAMEWORKS_STATS.countries}개국)                       ║
║  📚 핵심 요소: ${String(INTERNATIONAL_FRAMEWORKS_STATS.totalElements).padStart(3)}개                                       ║
║  🔬 개념기반 모델: ${String(INTERNATIONAL_FRAMEWORKS_STATS.conceptBasedModels).padStart(2)}개                                   ║
║  🧠 사고 프레임워크: ${String(INTERNATIONAL_FRAMEWORKS_STATS.thinkingFrameworks).padStart(2)}개                                 ║
║  📖 MYP 관련 개념: ${String(INTERNATIONAL_FRAMEWORKS_STATS.mypRelatedConcepts).padStart(3)}개                                  ║
║  🇰🇷 한국 핵심 아이디어: ${String(INTERNATIONAL_FRAMEWORKS_STATS.koreaCoreIdeas).padStart(2)}개 (전 교과)                      ║
╚══════════════════════════════════════════════════════════════╝
`);

export default {
  INTERNATIONAL_FRAMEWORKS,
  CONCEPT_BASED_MODELS,
  THINKING_FRAMEWORKS,
  MYP_RELATED_CONCEPTS,
  KOREA_2022_CORE_IDEAS,
  INTERNATIONAL_FRAMEWORKS_STATS
};
