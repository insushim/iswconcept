// 2022 개정 교육과정 성취기준 통합 인덱스
// 출처: 교육부 고시 제2022-33호, NCIC 국가교육과정정보센터, 한국교육과정평가원(KICE)

// 타입 export
export type { AchievementStandard } from './korean';

// 국어
export {
  KOREAN_STANDARDS_1_2,
  KOREAN_STANDARDS_3_4,
  KOREAN_STANDARDS_5_6,
  ALL_KOREAN_STANDARDS,
  getKoreanStandardsByGradeGroup,
  getKoreanStandardsByDomain,
  getKoreanStandardByCode,
} from './korean';

// 수학
export {
  MATH_STANDARDS_1_2,
  MATH_STANDARDS_3_4,
  MATH_STANDARDS_5_6,
  ALL_MATH_STANDARDS,
  getMathStandardsByGradeGroup,
  getMathStandardsByDomain,
  getMathStandardByCode,
} from './math';

// 사회
export {
  SOCIAL_STANDARDS_3_4,
  SOCIAL_STANDARDS_5_6,
  ALL_SOCIAL_STANDARDS,
  getSocialStandardsByGradeGroup,
  getSocialStandardsByDomain,
  getSocialStandardByCode,
} from './social';

// 과학
export {
  SCIENCE_STANDARDS_3_4,
  SCIENCE_STANDARDS_5_6,
  ALL_SCIENCE_STANDARDS,
  getScienceStandardsByGradeGroup,
  getScienceStandardsByDomain,
  getScienceStandardByCode,
} from './science';

// 영어
export {
  ENGLISH_STANDARDS_3_4,
  ENGLISH_STANDARDS_5_6,
  ALL_ENGLISH_STANDARDS,
  getEnglishStandardsByGradeGroup,
  getEnglishStandardsByDomain,
  getEnglishStandardByCode,
} from './english';

// 기타 과목 (도덕, 음악, 미술, 체육, 실과)
export {
  MORAL_STANDARDS_3_4,
  MORAL_STANDARDS_5_6,
  ALL_MORAL_STANDARDS,
  getMoralStandardsByGradeGroup,
  MUSIC_STANDARDS_3_4,
  MUSIC_STANDARDS_5_6,
  ALL_MUSIC_STANDARDS,
  getMusicStandardsByGradeGroup,
  ART_STANDARDS_3_4,
  ART_STANDARDS_5_6,
  ALL_ART_STANDARDS,
  getArtStandardsByGradeGroup,
  PE_STANDARDS_3_4,
  PE_STANDARDS_5_6,
  ALL_PE_STANDARDS,
  getPeStandardsByGradeGroup,
  PRACTICAL_STANDARDS_5_6,
  ALL_PRACTICAL_STANDARDS,
  getPracticalStandardsByGradeGroup,
} from './others';

// 과목별 성취기준 조회 통합 함수
import { AchievementStandard } from './korean';
import { ALL_KOREAN_STANDARDS, getKoreanStandardByCode } from './korean';
import { ALL_MATH_STANDARDS, getMathStandardByCode } from './math';
import { ALL_SOCIAL_STANDARDS, getSocialStandardByCode } from './social';
import { ALL_SCIENCE_STANDARDS, getScienceStandardByCode } from './science';
import { ALL_ENGLISH_STANDARDS, getEnglishStandardByCode } from './english';
import {
  ALL_MORAL_STANDARDS,
  ALL_MUSIC_STANDARDS,
  ALL_ART_STANDARDS,
  ALL_PE_STANDARDS,
  ALL_PRACTICAL_STANDARDS,
} from './others';

// 과목 ID와 성취기준 매핑
const SUBJECT_STANDARDS_MAP: Record<string, AchievementStandard[]> = {
  korean: ALL_KOREAN_STANDARDS,
  math: ALL_MATH_STANDARDS,
  society: ALL_SOCIAL_STANDARDS,
  science: ALL_SCIENCE_STANDARDS,
  english: ALL_ENGLISH_STANDARDS,
  moral: ALL_MORAL_STANDARDS,
  music: ALL_MUSIC_STANDARDS,
  art: ALL_ART_STANDARDS,
  pe: ALL_PE_STANDARDS,
  practical: ALL_PRACTICAL_STANDARDS,
};

/**
 * 과목 ID로 해당 과목의 모든 성취기준 조회
 */
export const getStandardsBySubject = (subjectId: string): AchievementStandard[] => {
  return SUBJECT_STANDARDS_MAP[subjectId] || [];
};

/**
 * 과목 ID와 학년군으로 성취기준 조회
 */
export const getStandardsBySubjectAndGrade = (
  subjectId: string,
  grade: number
): AchievementStandard[] => {
  const standards = SUBJECT_STANDARDS_MAP[subjectId] || [];

  // 학년군 결정
  let gradeGroup: '1-2' | '3-4' | '5-6';
  if (grade <= 2) gradeGroup = '1-2';
  else if (grade <= 4) gradeGroup = '3-4';
  else gradeGroup = '5-6';

  return standards.filter(s => s.gradeGroup === gradeGroup);
};

/**
 * 성취기준 코드로 성취기준 조회 (모든 과목에서 검색)
 */
export const getStandardByCode = (code: string): AchievementStandard | undefined => {
  // 코드에서 과목 식별
  const subjectMatch = code.match(/\[(\d)([가-힣]+)\d+-\d+\]/);
  if (!subjectMatch) return undefined;

  const subjectPrefix = subjectMatch[2];

  // 과목별 조회
  switch (subjectPrefix) {
    case '국': return getKoreanStandardByCode(code);
    case '수': return getMathStandardByCode(code);
    case '사': return getSocialStandardByCode(code);
    case '과': return getScienceStandardByCode(code);
    case '영': return getEnglishStandardByCode(code);
    case '도': return ALL_MORAL_STANDARDS.find(s => s.code === code);
    case '음': return ALL_MUSIC_STANDARDS.find(s => s.code === code);
    case '미': return ALL_ART_STANDARDS.find(s => s.code === code);
    case '체': return ALL_PE_STANDARDS.find(s => s.code === code);
    case '실': return ALL_PRACTICAL_STANDARDS.find(s => s.code === code);
    default: return undefined;
  }
};

/**
 * 단원명과 관련된 성취기준 추천 (키워드 기반)
 */
export const getRecommendedStandards = (
  subjectId: string,
  grade: number,
  unitName: string,
  limit: number = 5
): AchievementStandard[] => {
  const standards = getStandardsBySubjectAndGrade(subjectId, grade);

  // 단원명에서 키워드 추출
  const keywords = unitName
    .replace(/^\d+\.\s*/, '') // 번호 제거
    .split(/[,\s]+/)
    .filter(k => k.length > 1);

  // 키워드 매칭 점수 계산
  const scored = standards.map(s => {
    let score = 0;
    keywords.forEach(keyword => {
      if (s.content.includes(keyword)) score += 2;
      if (s.domain.includes(keyword)) score += 1;
    });
    return { standard: s, score };
  });

  // 점수순 정렬 후 상위 N개 반환
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.standard);
};

/**
 * 모든 성취기준 개수 통계
 */
export const getStandardsStats = () => {
  return {
    korean: ALL_KOREAN_STANDARDS.length,
    math: ALL_MATH_STANDARDS.length,
    social: ALL_SOCIAL_STANDARDS.length,
    science: ALL_SCIENCE_STANDARDS.length,
    english: ALL_ENGLISH_STANDARDS.length,
    moral: ALL_MORAL_STANDARDS.length,
    music: ALL_MUSIC_STANDARDS.length,
    art: ALL_ART_STANDARDS.length,
    pe: ALL_PE_STANDARDS.length,
    practical: ALL_PRACTICAL_STANDARDS.length,
    total:
      ALL_KOREAN_STANDARDS.length +
      ALL_MATH_STANDARDS.length +
      ALL_SOCIAL_STANDARDS.length +
      ALL_SCIENCE_STANDARDS.length +
      ALL_ENGLISH_STANDARDS.length +
      ALL_MORAL_STANDARDS.length +
      ALL_MUSIC_STANDARDS.length +
      ALL_ART_STANDARDS.length +
      ALL_PE_STANDARDS.length +
      ALL_PRACTICAL_STANDARDS.length,
  };
};
