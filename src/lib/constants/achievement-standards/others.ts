// 2022 개정 교육과정 기타 과목 성취기준 (도덕, 음악, 미술, 체육, 실과)
// 출처: 교육부 고시 제2022-33호, NCIC 국가교육과정정보센터, 나무위키

import { AchievementStandard } from './korean';

// ==================== 도덕과 ====================
export const MORAL_STANDARDS_3_4: AchievementStandard[] = [
  // 자신과의 관계
  { code: '[4도01-01]', content: '자신의 감정을 소중히 여기며 존중하는 태도를 바탕으로 내가 누구인가를 탐구한다.', domain: '자신과의 관계', gradeGroup: '3-4' },
  { code: '[4도01-02]', content: '정직의 의미를 이해하고 모범 사례를 탐색하여 바른 행동 태도를 형성한다.', domain: '자신과의 관계', gradeGroup: '3-4' },
  { code: '[4도01-03]', content: '성실함의 모범 사례를 탐색하고 시간 관리를 통해 자기 성장을 모색한다.', domain: '자신과의 관계', gradeGroup: '3-4' },
  { code: '[4도01-04]', content: '타인의 관점을 수용하고 도덕규범을 내면화하여 도덕적 행동 자세를 함양한다.', domain: '자신과의 관계', gradeGroup: '3-4' },
  // 타인과의 관계
  { code: '[4도02-01]', content: '효와 우애의 의미를 이해하고 가족 행복을 위한 실천 계획을 수립한다.', domain: '타인과의 관계', gradeGroup: '3-4' },
  { code: '[4도02-02]', content: '친구 사이의 배려에 대한 올바른 이해를 바탕으로 도덕적 관계 형성 방안을 탐색한다.', domain: '타인과의 관계', gradeGroup: '3-4' },
  { code: '[4도02-03]', content: '공감 태도의 필요성을 이해하고 도덕적 상상력을 바탕으로 감정 나누기 방법을 탐구하여 실천한다.', domain: '타인과의 관계', gradeGroup: '3-4' },
  // 사회·공동체와의 관계
  { code: '[4도03-01]', content: '불공정 사례를 탐구하고 일상생활에서 공정의 가치를 추구하는 활동을 통해 실천 의지를 함양한다.', domain: '사회·공동체', gradeGroup: '3-4' },
  { code: '[4도03-02]', content: '디지털 사회의 문제를 탐구하고 정보통신 윤리 민감성을 형성한다.', domain: '사회·공동체', gradeGroup: '3-4' },
  { code: '[4도03-03]', content: '통일의 필요성을 이해하고 통일 감수성을 함양한다.', domain: '사회·공동체', gradeGroup: '3-4' },
  // 자연과의 관계
  { code: '[4도04-01]', content: '생명 경시 사례를 조사하고 문제 해결 방법을 탐구하여 생명의 소중함을 이해한다.', domain: '자연과의 관계', gradeGroup: '3-4' },
  { code: '[4도04-02]', content: '인간과 자연의 공생 관계를 이해하고 생태 감수성을 함양한다.', domain: '자연과의 관계', gradeGroup: '3-4' },
];

export const MORAL_STANDARDS_5_6: AchievementStandard[] = [
  // 자신과의 관계
  { code: '[6도01-01]', content: '자주적인 삶에 대한 이해를 바탕으로 생활계획을 세우고 실천하여 주체적인 삶의 태도를 기른다.', domain: '자신과의 관계', gradeGroup: '5-6' },
  { code: '[6도01-02]', content: '생활 습관에 대한 성찰을 통해 자기 생활을 점검하고 올바른 계획을 세워 실천한다.', domain: '자신과의 관계', gradeGroup: '5-6' },
  { code: '[6도01-03]', content: '자기가 하고 싶은 일을 선택할 때 도덕적 고려의 필요성을 알고 진로계획을 수립한다.', domain: '자신과의 관계', gradeGroup: '5-6' },
  // 타인과의 관계
  { code: '[6도02-01]', content: '봉사의 의미와 중요성을 이해하고 타인의 상황과 환경에 관심을 갖고 봉사를 실천한다.', domain: '타인과의 관계', gradeGroup: '5-6' },
  { code: '[6도02-02]', content: '편견 해결 방안을 탐색하고 다양성을 존중하여 올바른 관계를 형성한다.', domain: '타인과의 관계', gradeGroup: '5-6' },
  { code: '[6도02-03]', content: '인공지능 로봇과 도덕에 기반한 관계 형성의 필요성을 탐구한다.', domain: '타인과의 관계', gradeGroup: '5-6' },
  // 사회·공동체와의 관계
  { code: '[6도03-01]', content: '인권 관련 사례를 검토하여 인권 감수성을 형성한다.', domain: '사회·공동체', gradeGroup: '5-6' },
  { code: '[6도03-02]', content: '공동체 규칙의 중요성을 이해하고 공정한 규칙을 고안한다.', domain: '사회·공동체', gradeGroup: '5-6' },
  { code: '[6도03-03]', content: '통일 과정과 통일 이후의 상황을 예상한다.', domain: '사회·공동체', gradeGroup: '5-6' },
  { code: '[6도03-04]', content: '다른 나라 사람들의 상황을 이해하고 인류애를 함양한다.', domain: '사회·공동체', gradeGroup: '5-6' },
  // 자연과의 관계
  { code: '[6도04-01]', content: '지구 환경 위기를 이해하고 일상 속에서 환경 보호를 실천한다.', domain: '자연과의 관계', gradeGroup: '5-6' },
  { code: '[6도04-02]', content: '지속 가능한 삶의 의미를 탐구하고 미래 세대에 대한 책임을 강화한다.', domain: '자연과의 관계', gradeGroup: '5-6' },
];

// ==================== 음악과 ====================
export const MUSIC_STANDARDS_3_4: AchievementStandard[] = [
  // 표현
  { code: '[4음01-01]', content: '악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.', domain: '표현', gradeGroup: '3-4' },
  { code: '[4음01-02]', content: '악곡에 어울리는 신체표현을 한다.', domain: '표현', gradeGroup: '3-4' },
  { code: '[4음01-03]', content: '제재곡의 리듬꼴과 장단꼴을 바꾸어 표현한다.', domain: '표현', gradeGroup: '3-4' },
  { code: '[4음01-04]', content: '제재곡의 가락을 바꾸어 표현한다.', domain: '표현', gradeGroup: '3-4' },
  // 감상
  { code: '[4음02-01]', content: '악곡의 특징을 이해하며 감상한다.', domain: '감상', gradeGroup: '3-4' },
  { code: '[4음02-02]', content: '상황이나 이야기 등을 음악으로 표현한 악곡을 감상한다.', domain: '감상', gradeGroup: '3-4' },
  // 생활화
  { code: '[4음03-01]', content: '음악을 활용하여 가정, 학교 행사에 참여한다.', domain: '생활화', gradeGroup: '3-4' },
  { code: '[4음03-02]', content: '우리 지역의 음악 또는 음악가에 대해 알아본다.', domain: '생활화', gradeGroup: '3-4' },
];

export const MUSIC_STANDARDS_5_6: AchievementStandard[] = [
  // 표현
  { code: '[6음01-01]', content: '악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.', domain: '표현', gradeGroup: '5-6' },
  { code: '[6음01-02]', content: '악곡에 어울리는 신체표현을 한다.', domain: '표현', gradeGroup: '5-6' },
  { code: '[6음01-03]', content: '주어진 조건에 따라 리듬꼴이나 장단꼴을 만들어 표현한다.', domain: '표현', gradeGroup: '5-6' },
  { code: '[6음01-04]', content: '주어진 조건에 따라 가락을 만들어 표현한다.', domain: '표현', gradeGroup: '5-6' },
  // 감상
  { code: '[6음02-01]', content: '악곡의 특징을 구별하며 감상한다.', domain: '감상', gradeGroup: '5-6' },
  { code: '[6음02-02]', content: '다양한 문화권의 음악을 감상한다.', domain: '감상', gradeGroup: '5-6' },
  // 생활화
  { code: '[6음03-01]', content: '음악을 활용하여 지역의 다양한 행사에 참여한다.', domain: '생활화', gradeGroup: '5-6' },
  { code: '[6음03-02]', content: '우리나라 또는 세계의 음악 또는 음악가에 대해 알아본다.', domain: '생활화', gradeGroup: '5-6' },
];

// ==================== 미술과 ====================
export const ART_STANDARDS_3_4: AchievementStandard[] = [
  // 체험
  { code: '[4미01-01]', content: '주변 대상이나 현상을 탐색하여 느낌과 생각을 다양한 방법으로 나타낸다.', domain: '체험', gradeGroup: '3-4' },
  { code: '[4미01-02]', content: '시각 문화를 생활 속에서 발견하고 관심을 가진다.', domain: '체험', gradeGroup: '3-4' },
  // 표현
  { code: '[4미02-01]', content: '미술의 다양한 표현 주제를 탐색하여 자유롭게 표현한다.', domain: '표현', gradeGroup: '3-4' },
  { code: '[4미02-02]', content: '기본적인 표현 재료와 용구를 다양하게 사용하여 표현한다.', domain: '표현', gradeGroup: '3-4' },
  { code: '[4미02-03]', content: '관찰, 상상, 경험을 다양한 방법으로 표현한다.', domain: '표현', gradeGroup: '3-4' },
  { code: '[4미02-04]', content: '조형 원리의 특징을 탐색하고 표현 의도에 따라 적용하여 표현한다.', domain: '표현', gradeGroup: '3-4' },
  // 감상
  { code: '[4미03-01]', content: '다양한 분야의 미술 작품과 미술가에 관심을 갖고 친숙하게 여긴다.', domain: '감상', gradeGroup: '3-4' },
  { code: '[4미03-02]', content: '미술 작품에 대한 자신의 느낌과 생각을 다양한 방법으로 나타낸다.', domain: '감상', gradeGroup: '3-4' },
];

export const ART_STANDARDS_5_6: AchievementStandard[] = [
  // 체험
  { code: '[6미01-01]', content: '주변 대상이나 현상에서 시각적 특징을 발견하여 소통한다.', domain: '체험', gradeGroup: '5-6' },
  { code: '[6미01-02]', content: '시각 문화가 생활에 미치는 영향을 이해하고 적극적으로 참여한다.', domain: '체험', gradeGroup: '5-6' },
  // 표현
  { code: '[6미02-01]', content: '표현 주제를 다양한 방식으로 탐색하여 주제 의식을 발전시킨다.', domain: '표현', gradeGroup: '5-6' },
  { code: '[6미02-02]', content: '다양한 표현 재료와 용구, 방법을 탐색하여 표현 과정을 계획한다.', domain: '표현', gradeGroup: '5-6' },
  { code: '[6미02-03]', content: '다양한 자료를 활용하여 아이디어와 관련된 표현 내용을 발전시켜 표현한다.', domain: '표현', gradeGroup: '5-6' },
  { code: '[6미02-04]', content: '조형 원리를 적용하여 표현 효과를 이해하고 표현 의도에 맞게 활용하여 표현한다.', domain: '표현', gradeGroup: '5-6' },
  // 감상
  { code: '[6미03-01]', content: '미술품의 내용과 형식을 연관 지어 이해한다.', domain: '감상', gradeGroup: '5-6' },
  { code: '[6미03-02]', content: '미술 작품을 비평하는 방법으로 작품의 가치를 판단한다.', domain: '감상', gradeGroup: '5-6' },
];

// ==================== 체육과 ====================
export const PE_STANDARDS_3_4: AchievementStandard[] = [
  // 건강
  { code: '[4체01-01]', content: '건강의 개념과 중요성을 이해하고 건강 증진을 위해 실천한다.', domain: '건강', gradeGroup: '3-4' },
  { code: '[4체01-02]', content: '건강한 생활 습관의 종류와 중요성을 이해하고 실천한다.', domain: '건강', gradeGroup: '3-4' },
  { code: '[4체01-03]', content: '성장에 따른 신체적 변화를 이해하고 수용한다.', domain: '건강', gradeGroup: '3-4' },
  // 도전
  { code: '[4체02-01]', content: '기본 움직임을 다양하게 시도하고, 이를 종합하여 표현한다.', domain: '도전', gradeGroup: '3-4' },
  { code: '[4체02-02]', content: '기록 도전에서 자신의 기록을 측정하고 기록 향상을 위해 노력한다.', domain: '도전', gradeGroup: '3-4' },
  { code: '[4체02-03]', content: '자신의 동작 수행 능력을 파악하고 동작 도전을 시도한다.', domain: '도전', gradeGroup: '3-4' },
  // 경쟁
  { code: '[4체03-01]', content: '게임에서 협력의 중요성을 알고, 게임에 참여한다.', domain: '경쟁', gradeGroup: '3-4' },
  { code: '[4체03-02]', content: '게임에서 사용되는 기초적인 움직임과 전략을 탐색하고 적용한다.', domain: '경쟁', gradeGroup: '3-4' },
  // 표현
  { code: '[4체04-01]', content: '움직임 표현의 특성을 이해하고 다양하게 탐색한다.', domain: '표현', gradeGroup: '3-4' },
  { code: '[4체04-02]', content: '주제에 맞는 움직임 표현에 참여하고 감상한다.', domain: '표현', gradeGroup: '3-4' },
  // 안전
  { code: '[4체05-01]', content: '신체활동에서 발생할 수 있는 위험 상황을 알고 안전하게 활동한다.', domain: '안전', gradeGroup: '3-4' },
  { code: '[4체05-02]', content: '일상생활에서 발생할 수 있는 안전사고의 종류와 대처 방법을 익힌다.', domain: '안전', gradeGroup: '3-4' },
];

export const PE_STANDARDS_5_6: AchievementStandard[] = [
  // 건강
  { code: '[6체01-01]', content: '체력의 개념과 중요성을 이해하고 체력 증진을 위해 실천한다.', domain: '건강', gradeGroup: '5-6' },
  { code: '[6체01-02]', content: '여가의 개념과 중요성을 이해하고 건강한 여가 생활을 계획한다.', domain: '건강', gradeGroup: '5-6' },
  { code: '[6체01-03]', content: '음주, 흡연, 약물의 폐해를 알고 건강 위협 요인에 대처한다.', domain: '건강', gradeGroup: '5-6' },
  // 도전
  { code: '[6체02-01]', content: '목표 달성을 위해 기록 도전에 참여하고 끈기 있게 노력한다.', domain: '도전', gradeGroup: '5-6' },
  { code: '[6체02-02]', content: '동작 도전의 종류와 특성을 알고 창의적으로 도전한다.', domain: '도전', gradeGroup: '5-6' },
  { code: '[6체02-03]', content: '도전 활동에 참여하며 겸손을 실천한다.', domain: '도전', gradeGroup: '5-6' },
  // 경쟁
  { code: '[6체03-01]', content: '경쟁 활동에서 전략의 중요성을 알고, 전략을 적용하여 경쟁에 참여한다.', domain: '경쟁', gradeGroup: '5-6' },
  { code: '[6체03-02]', content: '경쟁 활동에서 게임 규칙을 이해하고 상황에 맞게 적용한다.', domain: '경쟁', gradeGroup: '5-6' },
  { code: '[6체03-03]', content: '경쟁 활동에 참여하며 페어플레이를 실천한다.', domain: '경쟁', gradeGroup: '5-6' },
  // 표현
  { code: '[6체04-01]', content: '표현 활동의 종류와 특성을 알고, 다양하게 움직임을 창작한다.', domain: '표현', gradeGroup: '5-6' },
  { code: '[6체04-02]', content: '표현 활동에 참여하며 심미적 안목을 기른다.', domain: '표현', gradeGroup: '5-6' },
  // 안전
  { code: '[6체05-01]', content: '야외 활동과 스포츠 활동에서 발생할 수 있는 위험 상황을 파악하고 대처한다.', domain: '안전', gradeGroup: '5-6' },
  { code: '[6체05-02]', content: '응급 상황에서 기본적인 응급 처치 방법을 적용한다.', domain: '안전', gradeGroup: '5-6' },
];

// ==================== 실과 ====================
export const PRACTICAL_STANDARDS_5_6: AchievementStandard[] = [
  // 인간 발달과 주도적 삶
  { code: '[6실01-01]', content: '가정생활에서 나와 가족의 발달을 이해하고 바람직한 가족 관계를 위해 실천한다.', domain: '인간 발달', gradeGroup: '5-6' },
  { code: '[6실01-02]', content: '삶의 주도성의 의미를 알고 자기 관리 및 시간 관리 방법을 실천한다.', domain: '인간 발달', gradeGroup: '5-6' },
  // 가정생활과 안전
  { code: '[6실02-01]', content: '식생활 속 식품의 특성을 알고 건강한 식생활을 실천한다.', domain: '가정생활', gradeGroup: '5-6' },
  { code: '[6실02-02]', content: '의생활 속 의복의 기능과 자원 절약을 이해하고 바르게 관리한다.', domain: '가정생활', gradeGroup: '5-6' },
  { code: '[6실02-03]', content: '주거 공간의 특성을 알고 정리정돈 및 청소를 실천한다.', domain: '가정생활', gradeGroup: '5-6' },
  { code: '[6실02-04]', content: '가정생활 속 안전사고의 원인을 알고 예방 및 대처 방법을 실천한다.', domain: '가정생활', gradeGroup: '5-6' },
  // 기술의 세계
  { code: '[6실03-01]', content: '생활 속 기술의 발달 과정과 기술 시스템을 이해한다.', domain: '기술', gradeGroup: '5-6' },
  { code: '[6실03-02]', content: '수송 기술의 원리와 발달을 이해하고 미래 수송 기술을 상상한다.', domain: '기술', gradeGroup: '5-6' },
  { code: '[6실03-03]', content: '간단한 제품의 제작 과정을 이해하고 창의적으로 설계하여 만든다.', domain: '기술', gradeGroup: '5-6' },
  // 기술 활용
  { code: '[6실04-01]', content: '소프트웨어의 개념과 종류를 이해하고 생활 속에서 활용한다.', domain: '기술 활용', gradeGroup: '5-6' },
  { code: '[6실04-02]', content: '일상생활의 문제 해결 과정에서 순차, 선택, 반복 등의 알고리즘을 활용한다.', domain: '기술 활용', gradeGroup: '5-6' },
  { code: '[6실04-03]', content: '생활 속 문제를 분석하여 블록 기반 프로그래밍으로 해결한다.', domain: '기술 활용', gradeGroup: '5-6' },
  { code: '[6실04-04]', content: '인공지능의 개념과 특성을 이해하고 생활 속에서 활용한다.', domain: '기술 활용', gradeGroup: '5-6' },
];

// ==================== 통합 Export ====================
export const ALL_MORAL_STANDARDS: AchievementStandard[] = [...MORAL_STANDARDS_3_4, ...MORAL_STANDARDS_5_6];
export const ALL_MUSIC_STANDARDS: AchievementStandard[] = [...MUSIC_STANDARDS_3_4, ...MUSIC_STANDARDS_5_6];
export const ALL_ART_STANDARDS: AchievementStandard[] = [...ART_STANDARDS_3_4, ...ART_STANDARDS_5_6];
export const ALL_PE_STANDARDS: AchievementStandard[] = [...PE_STANDARDS_3_4, ...PE_STANDARDS_5_6];
export const ALL_PRACTICAL_STANDARDS: AchievementStandard[] = [...PRACTICAL_STANDARDS_5_6];

// 학년군별 조회 함수
export const getMoralStandardsByGradeGroup = (gradeGroup: '3-4' | '5-6'): AchievementStandard[] => {
  return gradeGroup === '3-4' ? MORAL_STANDARDS_3_4 : MORAL_STANDARDS_5_6;
};

export const getMusicStandardsByGradeGroup = (gradeGroup: '3-4' | '5-6'): AchievementStandard[] => {
  return gradeGroup === '3-4' ? MUSIC_STANDARDS_3_4 : MUSIC_STANDARDS_5_6;
};

export const getArtStandardsByGradeGroup = (gradeGroup: '3-4' | '5-6'): AchievementStandard[] => {
  return gradeGroup === '3-4' ? ART_STANDARDS_3_4 : ART_STANDARDS_5_6;
};

export const getPeStandardsByGradeGroup = (gradeGroup: '3-4' | '5-6'): AchievementStandard[] => {
  return gradeGroup === '3-4' ? PE_STANDARDS_3_4 : PE_STANDARDS_5_6;
};

export const getPracticalStandardsByGradeGroup = (): AchievementStandard[] => {
  return PRACTICAL_STANDARDS_5_6; // 실과는 5-6학년군만
};
