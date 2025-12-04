// 전체 차시별 데이터 통합 및 조회 함수
import { UnitLessons, LessonPeriod, SCIENCE_LESSONS } from './lesson-periods';
import { MATH_LESSONS } from './math-periods';
import { OTHER_LESSONS } from './other-periods';
import { UNITS } from './curriculum-data';

// 전체 차시 데이터 통합
export const ALL_LESSONS: Record<string, UnitLessons> = {
  ...SCIENCE_LESSONS,
  ...MATH_LESSONS,
  ...OTHER_LESSONS,
};

// 과목별 성취기준 코드 접두사 매핑
const SUBJECT_ACHIEVEMENT_PREFIX: Record<string, string> = {
  korean: '국',
  math: '수',
  society: '사',
  science: '과',
  english: '영',
  moral: '도',
  music: '음',
  art: '미',
  pe: '체',
  practical: '실',
  spring: '슬기', // 통합교과
  summer: '슬기',
  autumn: '슬기',
  winter: '슬기',
  safelife: '안전',
};

// 단원명에서 학습 목표 생성 함수
const generateObjectivesFromUnitName = (unitName: string, period: number, totalPeriods: number): string[] => {
  // 단원명에서 숫자와 점 제거 (예: "1. 물질의 성질" -> "물질의 성질")
  const cleanName = unitName.replace(/^\d+\.\s*/, '');

  if (period === 1) {
    return [`${cleanName}에 대해 알 수 있다.`, `${cleanName}의 기초 개념을 이해할 수 있다.`];
  } else if (period === totalPeriods) {
    return [`${cleanName}에서 배운 내용을 정리할 수 있다.`, `${cleanName}의 개념을 다른 상황에 적용할 수 있다.`];
  } else {
    return [`${cleanName}의 ${period}차시 내용을 이해할 수 있다.`];
  }
};

// 기본 차시 생성 함수 (차시 데이터가 없는 단원용)
const generateDefaultPeriods = (unitId: string, unitName: string, periodCount: number = 4, subject?: string, grade?: string): LessonPeriod[] => {
  const periods: LessonPeriod[] = [];

  // 성취기준 코드 생성 (예: [4과01-01])
  let achievementCode = '';
  if (subject && grade) {
    const prefix = SUBJECT_ACHIEVEMENT_PREFIX[subject] || '';
    const gradeNum = parseInt(grade);
    const gradePrefix = gradeNum <= 2 ? '2' : gradeNum <= 4 ? '4' : '6';
    // 단원 번호 추출 (예: "1. 물질의 성질" -> "01")
    const unitMatch = unitName.match(/^(\d+)\./);
    const unitNum = unitMatch ? unitMatch[1].padStart(2, '0') : '01';
    achievementCode = `[${gradePrefix}${prefix}${unitNum}-01]`;
  }

  for (let i = 1; i <= periodCount; i++) {
    const objectives = generateObjectivesFromUnitName(unitName, i, periodCount);
    const achievementStandards = achievementCode ? [`${achievementCode} ${objectives[0]}`] : [];

    periods.push({
      id: `${unitId}_${i}`,
      period: i,
      title: `${unitName} ${i}/${periodCount}차시`,
      objectives,
      achievementStandards,
      duration: 40,
    });
  }
  return periods;
};

// 단원 ID로 차시 목록 조회
export const getPeriodsForUnit = (unitId: string): LessonPeriod[] => {
  const unitLessons = ALL_LESSONS[unitId];
  return unitLessons ? unitLessons.periods : [];
};

// 단원명으로 차시 목록 조회 (단원명 기반 검색)
export const getPeriodsForUnitName = (unitName: string, subject: string, grade: string): LessonPeriod[] => {
  // 단원명에서 단원 ID를 추출하기 위한 매핑
  const subjectPrefixMap: Record<string, string> = {
    'korean': 'kor',
    'math': 'math',
    'society': 'soc',
    'science': 'sci',
    'english': 'eng',
    'moral': 'mor',
    'music': 'mus',
    'art': 'art',
    'pe': 'pe',
    'practical': 'prac',
  };

  const prefix = subjectPrefixMap[subject] || subject;

  // 가능한 ID 패턴들 검색 - 기존 데이터에서 찾기
  for (const [key, unitLessons] of Object.entries(ALL_LESSONS)) {
    if (key.startsWith(prefix) && key.includes(`_${grade}_`) && unitLessons.unitName === unitName) {
      return unitLessons.periods;
    }
  }

  // 단원명으로 직접 검색
  for (const [key, unitLessons] of Object.entries(ALL_LESSONS)) {
    if (unitLessons.unitName === unitName) {
      return unitLessons.periods;
    }
  }

  // 기존 데이터에 없으면 curriculum-data에서 단원 ID 찾아서 기본 차시 생성
  const subjectKey = `${subject}_${grade}`;
  const units = UNITS[subjectKey];
  if (units) {
    const unit = units.find(u => u.name === unitName);
    if (unit) {
      // 단원별 기본 차시 수 (대부분 4~8차시)
      const defaultPeriodCount = 6;
      return generateDefaultPeriods(unit.id, unitName, defaultPeriodCount, subject, grade);
    }
  }

  // 그래도 못 찾으면 기본 6차시 반환
  const fallbackId = `${prefix}_${grade}_default`;
  return generateDefaultPeriods(fallbackId, unitName, 6, subject, grade);
};

// 특정 차시 정보 조회
export const getPeriodInfo = (unitId: string, period: number): LessonPeriod | undefined => {
  const periods = getPeriodsForUnit(unitId);
  return periods.find(p => p.period === period);
};

// 단원명과 차시 번호로 정보 조회
export const getPeriodInfoByUnitName = (
  unitName: string,
  subject: string,
  grade: string,
  period: number
): LessonPeriod | undefined => {
  const periods = getPeriodsForUnitName(unitName, subject, grade);
  return periods.find(p => p.period === period);
};

// 단원에 해당하는 총 차시 수 조회
export const getTotalPeriods = (unitId: string): number => {
  const periods = getPeriodsForUnit(unitId);
  return periods.length;
};

// 과목-학년-학기로 단원 목록 조회
export const getUnitsBySubjectGrade = (subject: string, grade: string): UnitLessons[] => {
  const subjectPrefixMap: Record<string, string> = {
    'korean': 'kor',
    'math': 'math',
    'society': 'soc',
    'science': 'sci',
    'english': 'eng',
    'moral': 'mor',
    'music': 'mus',
    'art': 'art',
    'pe': 'pe',
    'practical': 'prac',
  };

  const prefix = subjectPrefixMap[subject] || subject;
  const results: UnitLessons[] = [];

  for (const [key, unitLessons] of Object.entries(ALL_LESSONS)) {
    if (key.startsWith(prefix) && key.includes(`_${grade}_`)) {
      results.push(unitLessons);
    }
  }

  return results;
};

// Re-export 타입
export type { UnitLessons, LessonPeriod };
