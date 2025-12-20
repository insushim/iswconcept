// 2022 개정 교육과정 영어과 성취기준
// 출처: 교육부 고시 제2022-33호 [별책 14], NCIC 국가교육과정정보센터, 나무위키

import { AchievementStandard } from './korean';

// 3-4학년군 영어 성취기준
export const ENGLISH_STANDARDS_3_4: AchievementStandard[] = [
  // 듣기 영역
  { code: '[4영01-01]', content: '알파벳과 낱말의 소리를 듣고 식별할 수 있다.', domain: '듣기', gradeGroup: '3-4' },
  { code: '[4영01-02]', content: '낱말, 어구, 문장을 듣고 강세, 리듬, 억양을 식별할 수 있다.', domain: '듣기', gradeGroup: '3-4' },
  { code: '[4영01-03]', content: '기초적인 낱말, 어구, 문장을 듣고 의미를 이해할 수 있다.', domain: '듣기', gradeGroup: '3-4' },
  { code: '[4영01-04]', content: '쉽고 친숙한 표현을 듣고 의미를 이해할 수 있다.', domain: '듣기', gradeGroup: '3-4' },
  { code: '[4영01-05]', content: '한두 문장의 쉽고 간단한 지시나 설명을 듣고 이해할 수 있다.', domain: '듣기', gradeGroup: '3-4' },
  { code: '[4영01-06]', content: '주변의 사물과 사람에 관한 쉽고 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', domain: '듣기', gradeGroup: '3-4' },
  { code: '[4영01-07]', content: '일상생활 속의 친숙한 주제에 관한 쉽고 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', domain: '듣기', gradeGroup: '3-4' },
  // 말하기 영역
  { code: '[4영02-01]', content: '알파벳과 낱말의 소리를 듣고 따라 말할 수 있다.', domain: '말하기', gradeGroup: '3-4' },
  { code: '[4영02-02]', content: '영어의 강세, 리듬, 억양에 맞게 따라 말할 수 있다.', domain: '말하기', gradeGroup: '3-4' },
  { code: '[4영02-03]', content: '그림, 실물, 동작에 관해 쉽고 간단한 낱말이나 어구, 문장으로 표현할 수 있다.', domain: '말하기', gradeGroup: '3-4' },
  { code: '[4영02-04]', content: '한두 문장으로 자기소개를 할 수 있다.', domain: '말하기', gradeGroup: '3-4' },
  { code: '[4영02-05]', content: '한두 문장으로 지시하거나 설명할 수 있다.', domain: '말하기', gradeGroup: '3-4' },
  { code: '[4영02-06]', content: '쉽고 간단한 인사말을 주고받을 수 있다.', domain: '말하기', gradeGroup: '3-4' },
  { code: '[4영02-07]', content: '일상생활 속의 친숙한 주제에 관해 쉽고 간단한 표현으로 묻거나 답할 수 있다.', domain: '말하기', gradeGroup: '3-4' },
  // 읽기 영역
  { code: '[4영03-01]', content: '알파벳 대소문자를 식별하여 읽을 수 있다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4영03-02]', content: '소리와 철자의 관계를 이해하여 낱말을 읽을 수 있다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4영03-03]', content: '쉽고 간단한 낱말이나 어구, 문장을 따라 읽을 수 있다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4영03-04]', content: '쉽고 간단한 낱말이나 어구를 읽고 의미를 이해할 수 있다.', domain: '읽기', gradeGroup: '3-4' },
  { code: '[4영03-05]', content: '쉽고 간단한 문장을 읽고 의미를 이해할 수 있다.', domain: '읽기', gradeGroup: '3-4' },
  // 쓰기 영역
  { code: '[4영04-01]', content: '알파벳 대소문자를 구별하여 쓸 수 있다.', domain: '쓰기', gradeGroup: '3-4' },
  { code: '[4영04-02]', content: '구두로 익힌 낱말이나 어구를 따라 쓰거나 보고 쓸 수 있다.', domain: '쓰기', gradeGroup: '3-4' },
  { code: '[4영04-03]', content: '실물이나 그림을 보고 쉽고 간단한 낱말이나 어구를 쓸 수 있다.', domain: '쓰기', gradeGroup: '3-4' },
];

// 5-6학년군 영어 성취기준
export const ENGLISH_STANDARDS_5_6: AchievementStandard[] = [
  // 듣기 영역
  { code: '[6영01-01]', content: '두세 개의 연속된 지시나 설명을 듣고 이해할 수 있다.', domain: '듣기', gradeGroup: '5-6' },
  { code: '[6영01-02]', content: '일상생활 속의 친숙한 주제에 관한 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', domain: '듣기', gradeGroup: '5-6' },
  { code: '[6영01-03]', content: '그림이나 도표에 대한 쉽고 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', domain: '듣기', gradeGroup: '5-6' },
  { code: '[6영01-04]', content: '대상을 비교하는 쉽고 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', domain: '듣기', gradeGroup: '5-6' },
  { code: '[6영01-05]', content: '쉽고 간단한 말이나 대화를 듣고 줄거리를 파악할 수 있다.', domain: '듣기', gradeGroup: '5-6' },
  { code: '[6영01-06]', content: '쉽고 간단한 말이나 대화를 듣고 목적을 파악할 수 있다.', domain: '듣기', gradeGroup: '5-6' },
  { code: '[6영01-07]', content: '쉽고 간단한 말이나 대화를 듣고 일의 순서를 파악할 수 있다.', domain: '듣기', gradeGroup: '5-6' },
  // 말하기 영역
  { code: '[6영02-01]', content: '그림, 실물, 동작에 관해 한두 문장으로 표현할 수 있다.', domain: '말하기', gradeGroup: '5-6' },
  { code: '[6영02-02]', content: '주변 사람에 관해 쉽고 간단한 문장으로 소개할 수 있다.', domain: '말하기', gradeGroup: '5-6' },
  { code: '[6영02-03]', content: '주변 사람과 사물에 관해 쉽고 간단한 문장으로 묘사할 수 있다.', domain: '말하기', gradeGroup: '5-6' },
  { code: '[6영02-04]', content: '주변 위치나 장소에 관해 쉽고 간단한 문장으로 설명할 수 있다.', domain: '말하기', gradeGroup: '5-6' },
  { code: '[6영02-05]', content: '간단한 그림이나 도표의 세부 정보에 대해 묻거나 답할 수 있다.', domain: '말하기', gradeGroup: '5-6' },
  { code: '[6영02-06]', content: '자신의 경험이나 계획에 대해 간단히 묻거나 답할 수 있다.', domain: '말하기', gradeGroup: '5-6' },
  { code: '[6영02-07]', content: '일상생활 속의 친숙한 주제에 관해 간단히 묻거나 답할 수 있다.', domain: '말하기', gradeGroup: '5-6' },
  // 읽기 영역
  { code: '[6영03-01]', content: '쉽고 간단한 문장을 강세, 리듬, 억양에 맞게 소리 내어 읽을 수 있다.', domain: '읽기', gradeGroup: '5-6' },
  { code: '[6영03-02]', content: '그림이나 도표에 대한 쉽고 짧은 글을 읽고 세부 정보를 파악할 수 있다.', domain: '읽기', gradeGroup: '5-6' },
  { code: '[6영03-03]', content: '일상생활 속의 친숙한 주제에 관한 쉽고 짧은 글을 읽고 세부 정보를 파악할 수 있다.', domain: '읽기', gradeGroup: '5-6' },
  { code: '[6영03-04]', content: '쉽고 짧은 글을 읽고 줄거리나 목적 등 중심 내용을 파악할 수 있다.', domain: '읽기', gradeGroup: '5-6' },
  // 쓰기 영역
  { code: '[6영04-01]', content: '소리와 철자의 관계를 바탕으로 쉽고 간단한 낱말이나 어구를 듣고 쓸 수 있다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6영04-02]', content: '알파벳 대소문자와 문장부호를 문장에서 바르게 사용할 수 있다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6영04-03]', content: '구두로 익힌 문장을 쓸 수 있다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6영04-04]', content: '실물이나 그림을 보고 한두 문장으로 표현할 수 있다.', domain: '쓰기', gradeGroup: '5-6' },
  { code: '[6영04-05]', content: '예시문을 참고하여 간단한 초대, 감사, 축하 등의 글을 쓸 수 있다.', domain: '쓰기', gradeGroup: '5-6' },
];

// 모든 영어 성취기준
export const ALL_ENGLISH_STANDARDS: AchievementStandard[] = [
  ...ENGLISH_STANDARDS_3_4,
  ...ENGLISH_STANDARDS_5_6,
];

// 학년군별 성취기준 조회
export const getEnglishStandardsByGradeGroup = (gradeGroup: '3-4' | '5-6'): AchievementStandard[] => {
  switch (gradeGroup) {
    case '3-4': return ENGLISH_STANDARDS_3_4;
    case '5-6': return ENGLISH_STANDARDS_5_6;
    default: return [];
  }
};

// 영역별 성취기준 조회
export const getEnglishStandardsByDomain = (domain: string): AchievementStandard[] => {
  return ALL_ENGLISH_STANDARDS.filter(s => s.domain === domain);
};

// 코드로 성취기준 조회
export const getEnglishStandardByCode = (code: string): AchievementStandard | undefined => {
  return ALL_ENGLISH_STANDARDS.find(s => s.code === code);
};
