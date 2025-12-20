// 2022 개정 교육과정 사회과 성취기준
// 출처: 교육부 고시 제2022-33호 [별책 7], NCIC 국가교육과정정보센터, 나무위키

import { AchievementStandard } from './korean';

// 3-4학년군 사회 성취기준
export const SOCIAL_STANDARDS_3_4: AchievementStandard[] = [
  // 지리 영역
  { code: '[4사01-01]', content: '주변 여러 장소에서의 경험과 느낌을 다양한 방식으로 표현하고, 장소감을 나누며 서로 존중하는 태도를 지닌다.', domain: '지리', gradeGroup: '3-4' },
  { code: '[4사01-02]', content: '주변의 여러 장소를 살펴보고, 우리가 사는 곳을 더 살기 좋은 곳으로 만드는 방안을 탐색한다.', domain: '지리', gradeGroup: '3-4' },
  // 역사 영역
  { code: '[4사02-01]', content: '일상 속에서 시간의 흐름을 경험하며 역사의 시간 개념을 이해한다.', domain: '역사', gradeGroup: '3-4' },
  { code: '[4사02-02]', content: '오래된 물건이나 자료들을 주변에서 찾아보고, 이를 통해 과거의 모습을 살펴볼 수 있음을 이해한다.', domain: '역사', gradeGroup: '3-4' },
  { code: '[4사02-03]', content: '지역의 변화상을 보여주는 자료를 분석하여 이전 생활 모습을 파악한다.', domain: '역사', gradeGroup: '3-4' },
  // 일반사회 영역
  { code: '[4사03-01]', content: '최근 사회 변화의 양상과 그로 인한 생활 모습의 변화를 탐색한다.', domain: '일반사회', gradeGroup: '3-4' },
  { code: '[4사03-02]', content: '다양한 문화 확산의 긍정적 효과와 문제를 분석하고 문화를 존중하는 태도를 함양한다.', domain: '일반사회', gradeGroup: '3-4' },
  { code: '[4사07-01]', content: '자원의 희소성으로 인한 경제적 선택의 문제를 이해하고 합리적 선택 방법을 탐색한다.', domain: '일반사회', gradeGroup: '3-4' },
  { code: '[4사07-02]', content: '생산과 소비 활동 및 지역 간 상호 의존 관계를 파악한다.', domain: '일반사회', gradeGroup: '3-4' },
  { code: '[4사08-01]', content: '학교 자치를 통해 민주주의의 의미를 이해하고 민주주의를 실천한다.', domain: '일반사회', gradeGroup: '3-4' },
  { code: '[4사08-02]', content: '지역 민주주의 사례를 통해 주민 참여의 중요성을 파악한다.', domain: '일반사회', gradeGroup: '3-4' },
  { code: '[4사09-01]', content: '주변의 문제를 파악하고 합리적으로 해결하는 능력을 함양한다.', domain: '일반사회', gradeGroup: '3-4' },
  { code: '[4사09-02]', content: '지역의 자연환경, 역사, 문화, 생산물을 알리는 지역 사회 노력을 인식한다.', domain: '일반사회', gradeGroup: '3-4' },
  { code: '[4사10-01]', content: '여러 지역의 자연 및 인문 환경의 특징과 환경 변화를 탐구한다.', domain: '지리', gradeGroup: '3-4' },
  { code: '[4사10-02]', content: '도시의 인구, 교통, 산업 특징과 삶의 모습을 이해한다.', domain: '지리', gradeGroup: '3-4' },
];

// 5-6학년군 사회 성취기준
export const SOCIAL_STANDARDS_5_6: AchievementStandard[] = [
  // 지리 영역
  { code: '[6사01-01]', content: '우리나라 산지, 하천, 해안 지형의 위치를 확인하고 분포 특징을 탐구한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사01-02]', content: '독도의 지리적 특성과 독도에 대한 역사 기록을 바탕으로 영토로서 독도의 중요성을 이해한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사02-01]', content: '우리나라 계절별 기후 특징을 탐구하고 기후변화로 인한 자연재해의 심각성을 이해한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사02-02]', content: '지역별 인구 분포 특징을 파악하고 관련 문제 해결 방안을 탐색한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사09-01]', content: '세계 공간 자료의 특징을 이해하고 지구본과 세계지도에서 위치를 표현하는 방법을 습득한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사09-02]', content: '세계 주요 대륙과 대양을 파악하고 국가의 위치와 영토 특징을 이해한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사10-01]', content: '세계 여러 지역의 지형 경관과 다양한 삶의 모습을 이해한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사10-02]', content: '세계 다양한 기후와 기후환경, 인간 생활 간의 관계를 탐구한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사12-01]', content: '세계 인구 분포를 파악하고 국가별 인구 특징을 탐구한다.', domain: '지리', gradeGroup: '5-6' },
  { code: '[6사12-02]', content: '지구촌을 위협하는 다양한 문제들을 파악하고, 지속가능한 미래를 위한 해결 방안을 탐색한다.', domain: '지리', gradeGroup: '5-6' },
  // 역사 영역
  { code: '[6사04-01]', content: '선사 시대와 고조선의 유적과 유물을 활용하여 당시의 생활을 추론한다.', domain: '역사', gradeGroup: '5-6' },
  { code: '[6사04-02]', content: '역사 기록, 유적, 유물에 나타난 고대의 생활과 사고를 추론한다.', domain: '역사', gradeGroup: '5-6' },
  { code: '[6사04-03]', content: '다양한 자료를 활용하여 고려 시대의 사회 모습과 생활을 추론한다.', domain: '역사', gradeGroup: '5-6' },
  { code: '[6사05-01]', content: '유교 문화가 조선 시대의 생활에 미친 영향을 파악한다.', domain: '역사', gradeGroup: '5-6' },
  { code: '[6사05-02]', content: '조선 후기와 개항기의 사회, 문화 변화와 달라진 생활을 이해한다.', domain: '역사', gradeGroup: '5-6' },
  { code: '[6사06-01]', content: '일제 식민 통치와 저항이 사회와 생활에 미친 영향을 이해한다.', domain: '역사', gradeGroup: '5-6' },
  { code: '[6사06-02]', content: '광복과 전쟁이 사회와 생활에 미친 영향을 파악한다.', domain: '역사', gradeGroup: '5-6' },
  // 일반사회 영역
  { code: '[6사03-01]', content: '일상 사례에서 법의 의미와 역할을 이해하고, 헌법에 규정된 인권이 일상생활에서 구현되는 사례를 조사한다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사03-02]', content: '인권 침해 사례를 찾고 해결 방안을 탐색하며, 인권 보호 활동에 참여한다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사07-01]', content: '분단의 문제점을 파악하고 평화 통일을 위한 노력을 탐색한다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사07-02]', content: '민주화와 산업화로 인한 생활 문화의 변화를 이해한다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사08-01]', content: '민주주의에서 선거의 의미와 역할을 파악하고 참여 태도를 함양한다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사08-02]', content: '국회, 행정부, 법원의 역할을 이해하고 권력 분립의 이유를 탐색한다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사08-03]', content: '미디어의 의미와 역할을 이해하고 비판적으로 분석하며 올바르게 이용하는 태도를 기른다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사11-01]', content: '시장경제에서 가계와 기업의 역할을 이해하고 근로자의 권리와 기업의 책임을 탐색한다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사11-02]', content: '경제성장이 우리 생활에 미치는 영향을 파악하고 문제 해결 방안을 탐색한다.', domain: '일반사회', gradeGroup: '5-6' },
  { code: '[6사11-03]', content: '무역의 의미를 이해하고 국가 간 무역이 발생하는 이유를 탐구한다.', domain: '일반사회', gradeGroup: '5-6' },
];

// 모든 사회 성취기준
export const ALL_SOCIAL_STANDARDS: AchievementStandard[] = [
  ...SOCIAL_STANDARDS_3_4,
  ...SOCIAL_STANDARDS_5_6,
];

// 학년군별 성취기준 조회
export const getSocialStandardsByGradeGroup = (gradeGroup: '3-4' | '5-6'): AchievementStandard[] => {
  switch (gradeGroup) {
    case '3-4': return SOCIAL_STANDARDS_3_4;
    case '5-6': return SOCIAL_STANDARDS_5_6;
    default: return [];
  }
};

// 영역별 성취기준 조회
export const getSocialStandardsByDomain = (domain: string): AchievementStandard[] => {
  return ALL_SOCIAL_STANDARDS.filter(s => s.domain === domain);
};

// 코드로 성취기준 조회
export const getSocialStandardByCode = (code: string): AchievementStandard | undefined => {
  return ALL_SOCIAL_STANDARDS.find(s => s.code === code);
};
