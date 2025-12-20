// 2022 개정 교육과정 국어과 성취기준
// 출처: 교육부 고시 제2022-33호 [별책 5], NCIC 국가교육과정정보센터, 나무위키

export interface AchievementStandard {
  code: string;
  content: string;
  domain: string;
  gradeGroup: '1-2' | '3-4' | '5-6';
}

// 1-2학년군 국어 성취기준
export const KOREAN_STANDARDS_1_2: AchievementStandard[] = [
  // 듣기·말하기
  { code: '[2국01-01]', content: '상황에 어울리는 인사말을 주고받는다.', domain: '듣기·말하기', gradeGroup: '1-2' },
  { code: '[2국01-02]', content: '일의 순서를 고려하며 듣고 말한다.', domain: '듣기·말하기', gradeGroup: '1-2' },
  { code: '[2국01-03]', content: '자신의 감정이나 경험을 바른 자세로 말한다.', domain: '듣기·말하기', gradeGroup: '1-2' },
  { code: '[2국01-04]', content: '듣는 이를 바라보며 바른 자세로 자신 있게 말한다.', domain: '듣기·말하기', gradeGroup: '1-2' },
  { code: '[2국01-05]', content: '말하는 이를 바라보며 집중하여 듣는다.', domain: '듣기·말하기', gradeGroup: '1-2' },
  { code: '[2국01-06]', content: '바르고 고운 말을 사용하여 대화한다.', domain: '듣기·말하기', gradeGroup: '1-2' },
  // 읽기
  { code: '[2국02-01]', content: '글자, 낱말, 문장을 소리 내어 읽는다.', domain: '읽기', gradeGroup: '1-2' },
  { code: '[2국02-02]', content: '문장과 짧은 글을 알맞게 띄어 읽는다.', domain: '읽기', gradeGroup: '1-2' },
  { code: '[2국02-03]', content: '글을 읽고 중심 내용을 확인한다.', domain: '읽기', gradeGroup: '1-2' },
  { code: '[2국02-04]', content: '글을 읽고 인물의 처지나 마음을 짐작한다.', domain: '읽기', gradeGroup: '1-2' },
  { code: '[2국02-05]', content: '글을 읽고 대상의 특징을 파악한다.', domain: '읽기', gradeGroup: '1-2' },
  { code: '[2국02-06]', content: '책을 즐겨 읽는 태도를 지닌다.', domain: '읽기', gradeGroup: '1-2' },
  // 쓰기
  { code: '[2국03-01]', content: '글자를 바르게 쓴다.', domain: '쓰기', gradeGroup: '1-2' },
  { code: '[2국03-02]', content: '자신의 생각이나 느낌을 문장으로 쓴다.', domain: '쓰기', gradeGroup: '1-2' },
  { code: '[2국03-03]', content: '주변의 사람이나 사물을 소개하는 글을 쓴다.', domain: '쓰기', gradeGroup: '1-2' },
  { code: '[2국03-04]', content: '겪은 일을 떠올려 글로 쓴다.', domain: '쓰기', gradeGroup: '1-2' },
  { code: '[2국03-05]', content: '쓰기에 흥미를 가지고 즐겨 쓰는 태도를 지닌다.', domain: '쓰기', gradeGroup: '1-2' },
  // 문법
  { code: '[2국04-01]', content: '한글 자모의 이름과 소릿값을 알고 정확하게 발음하고 쓴다.', domain: '문법', gradeGroup: '1-2' },
  { code: '[2국04-02]', content: '소리와 표기가 다를 수 있음을 알고 낱말을 바르게 읽고 쓴다.', domain: '문법', gradeGroup: '1-2' },
  { code: '[2국04-03]', content: '문장에 따라 알맞은 문장 부호를 사용한다.', domain: '문법', gradeGroup: '1-2' },
  { code: '[2국04-04]', content: '낱말과 낱말의 의미 관계를 파악한다.', domain: '문법', gradeGroup: '1-2' },
  { code: '[2국04-05]', content: '한글을 소중히 여기는 태도를 지닌다.', domain: '문법', gradeGroup: '1-2' },
  // 문학
  { code: '[2국05-01]', content: '말의 재미를 느끼며 작품을 듣거나 읽는다.', domain: '문학', gradeGroup: '1-2' },
  { code: '[2국05-02]', content: '인물의 모습, 행동, 마음을 상상하며 작품을 듣거나 읽는다.', domain: '문학', gradeGroup: '1-2' },
  { code: '[2국05-03]', content: '작품에 대한 생각이나 느낌을 다양하게 표현한다.', domain: '문학', gradeGroup: '1-2' },
  { code: '[2국05-04]', content: '자신의 생각이나 겪은 일을 시나 이야기로 표현한다.', domain: '문학', gradeGroup: '1-2' },
  { code: '[2국05-05]', content: '작품을 듣거나 읽으면서 느끼는 즐거움을 경험한다.', domain: '문학', gradeGroup: '1-2' },
];

// 3-4학년군 국어 성취기준
export const KOREAN_STANDARDS_3_4: AchievementStandard[] = [
  // 듣기·말하기
  { code: '[4국01-01]', content: '중요한 내용과 주제를 파악하며 듣고 그 내용을 요약한다.', domain: '듣기·말하기', gradeGroup: '3-4' },
  { code: '[4국01-02]', content: '원인과 결과의 관계를 고려하여 내용을 예측하며 듣고 말한다.', domain: '듣기·말하기', gradeGroup: '3-4' },
  { code: '[4국01-03]', content: '상황에 적절한 준언어·비언어적 표현을 활용하여 듣고 말한다.', domain: '듣기·말하기', gradeGroup: '3-4' },
  { code: '[4국01-04]', content: '상황과 상대의 입장을 이해하고 예의를 지키며 대화한다.', domain: '듣기·말하기', gradeGroup: '3-4' },
  { code: '[4국01-05]', content: '목적과 주제에 알맞게 자료를 정리하여 자신감 있게 발표한다.', domain: '듣기·말하기', gradeGroup: '3-4' },
  { code: '[4국01-06]', content: '주제에 적절한 의견과 이유를 제시하고 서로의 생각을 교환하며 토의한다.', domain: '듣기·말하기', gradeGroup: '3-4' },
  // 읽기
  { code: '[4국02-01]', content: '글의 의미를 파악하며 유창하게 글을 읽는다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4국02-02]', content: '문단과 글에서 중심 생각을 파악하고 내용을 간추린다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4국02-03]', content: '질문을 활용하여 글을 예측하며 읽고 자신의 읽기 과정을 점검한다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4국02-04]', content: '글에 나타난 사실과 의견을 구분하고 필자와 자신의 의견을 비교한다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4국02-05]', content: '글이나 자료의 출처가 믿을 만한지 판단한다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4국02-06]', content: '바람직한 읽기 습관을 형성하고 읽기에 대한 자신감을 기른다.', domain: '읽기', gradeGroup: '3-4' },
  // 쓰기
  { code: '[4국03-01]', content: '중심 문장과 뒷받침 문장을 갖추어 문단을 쓰고, 문장과 문단을 중심으로 고쳐 쓴다.', domain: '쓰기', gradeGroup: '3-4' },
  { code: '[4국03-02]', content: '절차와 결과가 드러나게 정확한 표현으로 보고하는 글을 쓴다.', domain: '쓰기', gradeGroup: '3-4' },
  { code: '[4국03-03]', content: '대상에 대한 자신의 의견과 그렇게 생각한 이유가 드러나게 글을 쓴다.', domain: '쓰기', gradeGroup: '3-4' },
  { code: '[4국03-04]', content: '목적과 주제를 고려하여 독자에게 마음을 전하는 글을 쓴다.', domain: '쓰기', gradeGroup: '3-4' },
  { code: '[4국03-05]', content: '자신의 쓰기 과정을 점검하며 쓰기에 자신감을 갖는다.', domain: '쓰기', gradeGroup: '3-4' },
  // 문법
  { code: '[4국04-01]', content: '단어와 단어 간의 의미 관계를 파악한다.', domain: '문법', gradeGroup: '3-4' },
  { code: '[4국04-02]', content: '단어를 분류하고 국어사전을 활용하여 능동적인 국어 활동을 한다.', domain: '문법', gradeGroup: '3-4' },
  { code: '[4국04-03]', content: '기본적인 문장의 짜임을 이해하고 적절하게 사용한다.', domain: '문법', gradeGroup: '3-4' },
  { code: '[4국04-04]', content: '글과 담화에 쓰인 높임 표현과 지시·접속 표현을 이해하고 상황에 맞게 표현한다.', domain: '문법', gradeGroup: '3-4' },
  { code: '[4국04-05]', content: '언어가 의사소통과 관계 형성의 수단임을 이해하고 국어를 소중히 여기는 태도를 지닌다.', domain: '문법', gradeGroup: '3-4' },
  // 문학
  { code: '[4국05-01]', content: '인물과 이야기의 흐름을 중심으로 작품을 감상한다.', domain: '문학', gradeGroup: '3-4' },
  { code: '[4국05-02]', content: '자신의 경험을 바탕으로 작품 속 세계와 현실 세계를 비교하여 작품을 감상한다.', domain: '문학', gradeGroup: '3-4' },
  { code: '[4국05-03]', content: '작품을 듣거나 읽고 마음에 드는 작품을 소개한다.', domain: '문학', gradeGroup: '3-4' },
  { code: '[4국05-04]', content: '감각적 표현에 유의하여 작품을 감상하고, 감각적 표현을 활용하여 자신의 생각이나 감정을 표현한다.', domain: '문학', gradeGroup: '3-4' },
  { code: '[4국05-05]', content: '재미나 감동을 느끼며 작품을 즐겨 감상하는 태도를 지닌다.', domain: '문학', gradeGroup: '3-4' },
  // 매체
  { code: '[4국06-01]', content: '인터넷에서 학습에 필요한 다양한 자료를 탐색하고 목적에 맞게 자료를 선택한다.', domain: '매체', gradeGroup: '3-4' },
  { code: '[4국06-02]', content: '매체를 활용하여 간단한 발표 자료를 만든다.', domain: '매체', gradeGroup: '3-4' },
  { code: '[4국06-03]', content: '매체 소통 윤리를 고려하여 매체 자료를 활용하고 공유한다.', domain: '매체', gradeGroup: '3-4' },
];

// 5-6학년군 국어 성취기준
export const KOREAN_STANDARDS_5_6: AchievementStandard[] = [
  // 듣기·말하기
  { code: '[6국01-01]', content: '구어 의사소통의 특성을 바탕으로 하여 듣기·말하기 활동에 참여한다.', domain: '듣기·말하기', gradeGroup: '5-6' },
  { code: '[6국01-02]', content: '의견을 제시하고 함께 조정하며 토의한다.', domain: '듣기·말하기', gradeGroup: '5-6' },
  { code: '[6국01-03]', content: '적절한 근거와 표현을 사용하여 주장하는 말을 한다.', domain: '듣기·말하기', gradeGroup: '5-6' },
  { code: '[6국01-04]', content: '자신의 의견과 상대의 의견을 비교하며 토론한다.', domain: '듣기·말하기', gradeGroup: '5-6' },
  { code: '[6국01-05]', content: '면담의 방법과 절차를 알고 면담한다.', domain: '듣기·말하기', gradeGroup: '5-6' },
  { code: '[6국01-06]', content: '절차와 규칙을 지키며 공식적인 상황에서 협의한다.', domain: '듣기·말하기', gradeGroup: '5-6' },
  // 읽기
  { code: '[6국02-01]', content: '읽기의 가치와 중요성을 깨닫고 글을 즐겨 읽는 태도를 지닌다.', domain: '읽기', gradeGroup: '5-6' },
  { code: '[6국02-02]', content: '글의 구조를 파악하여 글 전체의 내용을 요약한다.', domain: '읽기', gradeGroup: '5-6' },
  { code: '[6국02-03]', content: '글의 표현 방법과 효과를 평가하며 읽는다.', domain: '읽기', gradeGroup: '5-6' },
  { code: '[6국02-04]', content: '관점이나 입장의 차이가 드러나는 글을 비교하며 읽는다.', domain: '읽기', gradeGroup: '5-6' },
  { code: '[6국02-05]', content: '매체에 따른 다양한 읽기 방법을 이해하고 적절하게 적용하며 읽는다.', domain: '읽기', gradeGroup: '5-6' },
  { code: '[6국02-06]', content: '읽기 목적에 따라 여러 글을 찾아 읽는다.', domain: '읽기', gradeGroup: '5-6' },
  // 쓰기
  { code: '[6국03-01]', content: '쓰기의 과정을 이해하고 과정에 따라 글을 쓴다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6국03-02]', content: '읽는 이를 고려하여 설득하는 글을 쓴다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6국03-03]', content: '적절한 근거와 표현을 사용하여 주장하는 글을 쓴다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6국03-04]', content: '관용적 표현을 사용하여 자신의 생각을 효과적으로 표현하는 글을 쓴다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6국03-05]', content: '글에 대한 의견을 주고받으며 함께 고쳐 쓴다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6국03-06]', content: '쓰기의 가치를 인식하고 글을 꾸준히 쓰는 태도를 지닌다.', domain: '쓰기', gradeGroup: '5-6' },
  // 문법
  { code: '[6국04-01]', content: '언어의 본질에 대한 이해를 바탕으로 국어 활동을 한다.', domain: '문법', gradeGroup: '5-6' },
  { code: '[6국04-02]', content: '낱말의 짜임과 단어 형성 원리를 이해하고 새말을 활용하여 어휘를 확장한다.', domain: '문법', gradeGroup: '5-6' },
  { code: '[6국04-03]', content: '다양한 문장의 짜임을 이해하고 적절하게 활용한다.', domain: '문법', gradeGroup: '5-6' },
  { code: '[6국04-04]', content: '관용 표현을 이해하고 적절하게 활용한다.', domain: '문법', gradeGroup: '5-6' },
  { code: '[6국04-05]', content: '문장 성분 간의 호응 관계를 이해하고 적절하게 사용한다.', domain: '문법', gradeGroup: '5-6' },
  { code: '[6국04-06]', content: '한글의 가치를 인식하고 국어를 발전시키는 태도를 지닌다.', domain: '문법', gradeGroup: '5-6' },
  // 문학
  { code: '[6국05-01]', content: '비유적 표현과 상징의 효과를 살려 작품을 읽고 쓴다.', domain: '문학', gradeGroup: '5-6' },
  { code: '[6국05-02]', content: '작품의 주제와 가치를 이해하고 다양한 관점에서 감상한다.', domain: '문학', gradeGroup: '5-6' },
  { code: '[6국05-03]', content: '작품 속의 사건과 갈등을 이해하고 이를 바탕으로 작품을 감상하고 쓴다.', domain: '문학', gradeGroup: '5-6' },
  { code: '[6국05-04]', content: '매체로 구현된 작품과 원작을 비교하며 감상한다.', domain: '문학', gradeGroup: '5-6' },
  { code: '[6국05-05]', content: '작품에서 자신과 사회의 다양한 문제를 발견하고 이를 성찰한다.', domain: '문학', gradeGroup: '5-6' },
  { code: '[6국05-06]', content: '작품을 감상하는 바람직한 태도를 지닌다.', domain: '문학', gradeGroup: '5-6' },
  // 매체
  { code: '[6국06-01]', content: '인터넷과 소셜 미디어에서 자료를 선별하여 활용한다.', domain: '매체', gradeGroup: '5-6' },
  { code: '[6국06-02]', content: '매체 자료의 효과와 영향력을 비판적으로 이해한다.', domain: '매체', gradeGroup: '5-6' },
  { code: '[6국06-03]', content: '매체를 활용하여 생각과 느낌을 표현하고 다양한 형식의 자료를 제작한다.', domain: '매체', gradeGroup: '5-6' },
  { code: '[6국06-04]', content: '책임감 있는 매체 이용 태도를 지닌다.', domain: '매체', gradeGroup: '5-6' },
];

// 모든 국어 성취기준
export const ALL_KOREAN_STANDARDS: AchievementStandard[] = [
  ...KOREAN_STANDARDS_1_2,
  ...KOREAN_STANDARDS_3_4,
  ...KOREAN_STANDARDS_5_6,
];

// 학년군별 성취기준 조회
export const getKoreanStandardsByGradeGroup = (gradeGroup: '1-2' | '3-4' | '5-6'): AchievementStandard[] => {
  switch (gradeGroup) {
    case '1-2': return KOREAN_STANDARDS_1_2;
    case '3-4': return KOREAN_STANDARDS_3_4;
    case '5-6': return KOREAN_STANDARDS_5_6;
  }
};

// 영역별 성취기준 조회
export const getKoreanStandardsByDomain = (domain: string): AchievementStandard[] => {
  return ALL_KOREAN_STANDARDS.filter(s => s.domain === domain);
};

// 코드로 성취기준 조회
export const getKoreanStandardByCode = (code: string): AchievementStandard | undefined => {
  return ALL_KOREAN_STANDARDS.find(s => s.code === code);
};
