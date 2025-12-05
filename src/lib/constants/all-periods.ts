// 전체 차시별 데이터 통합 및 조회 함수
import { UnitLessons, LessonPeriod, SCIENCE_LESSONS } from './lesson-periods';
import { MATH_LESSONS } from './math-periods';
import { OTHER_LESSONS } from './other-periods';
import { UNITS } from './curriculum-data';
import { getAccuratePeriodCount } from './accurate-periods';

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

// 단원명에서 학습 목표 생성 함수 - 과목별 맞춤형 목표 생성
const generateObjectivesFromUnitName = (unitName: string, period: number, totalPeriods: number, subject?: string): string[] => {
  // 단원명에서 숫자와 점 제거 (예: "1. 물질의 성질" -> "물질의 성질")
  const cleanName = unitName.replace(/^\d+\.\s*/, '');

  // 과목별 차시 템플릿
  const subjectTemplates: Record<string, (name: string, p: number, total: number) => string[]> = {
    korean: (name, p, total) => {
      if (p === 1) return [`${name}의 개념을 이해할 수 있다.`, `${name}에 대해 탐구할 수 있다.`];
      if (p === 2) return [`${name}과 관련된 글을 읽고 내용을 파악할 수 있다.`];
      if (p === 3) return [`${name}을 위한 방법과 전략을 알 수 있다.`];
      if (p === 4) return [`${name}을 실생활에서 실천할 수 있다.`];
      if (p === total - 1) return [`${name}과 관련된 글을 쓸 수 있다.`];
      if (p === total) return [`${name}에서 배운 내용을 정리하고 발표할 수 있다.`];
      return [`${name}에 대해 더 깊이 탐구할 수 있다.`];
    },
    math: (name, p, total) => {
      if (p === 1) return [`${name}의 개념을 이해할 수 있다.`];
      if (p === 2) return [`${name}의 원리를 탐구할 수 있다.`];
      if (p === total - 1) return [`${name}을 활용하여 문제를 해결할 수 있다.`];
      if (p === total) return [`${name}에서 배운 내용을 정리하고 적용할 수 있다.`];
      return [`${name}의 다양한 방법을 익힐 수 있다.`];
    },
    science: (name, p, total) => {
      if (p === 1) return [`${name}에 대해 알 수 있다.`, `${name}의 특징을 탐구할 수 있다.`];
      if (p === 2) return [`${name}을 관찰하고 특징을 설명할 수 있다.`];
      if (p === total - 1) return [`${name}을 실험을 통해 탐구할 수 있다.`];
      if (p === total) return [`${name}에서 배운 내용을 정리하고 발표할 수 있다.`];
      return [`${name}에 대해 더 깊이 탐구할 수 있다.`];
    },
    society: (name, p, total) => {
      if (p === 1) return [`${name}의 의미를 알 수 있다.`];
      if (p === 2) return [`${name}의 특징을 조사할 수 있다.`];
      if (p === total - 1) return [`${name}과 관련된 문제를 탐구할 수 있다.`];
      if (p === total) return [`${name}에서 배운 내용을 정리하고 발표할 수 있다.`];
      return [`${name}에 대해 더 깊이 탐구할 수 있다.`];
    },
    english: (name, p, total) => {
      if (p === 1) return [`${name} 관련 표현을 듣고 이해할 수 있다.`];
      if (p === 2) return [`${name} 관련 어휘와 표현을 익힐 수 있다.`];
      if (p === 3) return [`${name} 관련 문장을 읽고 쓸 수 있다.`];
      if (p === total) return [`${name} 관련 대화를 할 수 있다.`];
      return [`${name} 관련 표현을 연습할 수 있다.`];
    },
    moral: (name, p, total) => {
      if (p === 1) return [`${name}의 의미를 이해할 수 있다.`];
      if (p === 2) return [`${name}의 중요성을 알 수 있다.`];
      if (p === total - 1) return [`${name}을 실천하는 방법을 알 수 있다.`];
      if (p === total) return [`${name}을 일상생활에서 실천할 수 있다.`];
      return [`${name}에 대해 생각해 볼 수 있다.`];
    },
    music: (name, p, total) => {
      if (p === 1) return [`${name} 관련 음악을 감상할 수 있다.`];
      if (p === 2) return [`${name} 관련 음악적 요소를 이해할 수 있다.`];
      if (p === total - 1) return [`${name} 관련 노래를 부를 수 있다.`];
      if (p === total) return [`${name} 관련 음악 활동에 참여할 수 있다.`];
      return [`${name}을 음악으로 표현할 수 있다.`];
    },
    art: (name, p, total) => {
      if (p === 1) return [`${name}을 감상할 수 있다.`];
      if (p === 2) return [`${name}의 표현 방법을 알 수 있다.`];
      if (p === total - 1) return [`${name}을 다양한 재료로 표현할 수 있다.`];
      if (p === total) return [`${name} 작품을 완성하고 감상할 수 있다.`];
      return [`${name}을 창의적으로 표현할 수 있다.`];
    },
    pe: (name, p, total) => {
      if (p === 1) return [`${name}의 기본 동작을 알 수 있다.`];
      if (p === 2) return [`${name}의 기본 기능을 익힐 수 있다.`];
      if (p === total - 1) return [`${name}을 응용하여 활동할 수 있다.`];
      if (p === total) return [`${name} 관련 경기나 활동에 참여할 수 있다.`];
      return [`${name}의 기능을 연습할 수 있다.`];
    },
    practical: (name, p, total) => {
      if (p === 1) return [`${name}의 개념을 이해할 수 있다.`];
      if (p === 2) return [`${name}의 방법을 알 수 있다.`];
      if (p === total - 1) return [`${name}을 직접 실습할 수 있다.`];
      if (p === total) return [`${name}을 생활에 적용할 수 있다.`];
      return [`${name}을 체험할 수 있다.`];
    },
    // 1~2학년 통합교과
    spring: (name, p, total) => {
      if (p === 1) return [`${name}에 대해 알아볼 수 있다.`];
      if (p === 2) return [`${name}을 탐색할 수 있다.`];
      if (p === total) return [`${name}을 표현하고 나눌 수 있다.`];
      return [`${name}에 대해 경험할 수 있다.`];
    },
    summer: (name, p, total) => {
      if (p === 1) return [`${name}에 대해 알아볼 수 있다.`];
      if (p === 2) return [`${name}을 탐색할 수 있다.`];
      if (p === total) return [`${name}을 표현하고 나눌 수 있다.`];
      return [`${name}에 대해 경험할 수 있다.`];
    },
    autumn: (name, p, total) => {
      if (p === 1) return [`${name}에 대해 알아볼 수 있다.`];
      if (p === 2) return [`${name}을 탐색할 수 있다.`];
      if (p === total) return [`${name}을 표현하고 나눌 수 있다.`];
      return [`${name}에 대해 경험할 수 있다.`];
    },
    winter: (name, p, total) => {
      if (p === 1) return [`${name}에 대해 알아볼 수 있다.`];
      if (p === 2) return [`${name}을 탐색할 수 있다.`];
      if (p === total) return [`${name}을 표현하고 나눌 수 있다.`];
      return [`${name}에 대해 경험할 수 있다.`];
    },
    safelife: (name, p, total) => {
      if (p === 1) return [`${name}의 중요성을 알 수 있다.`];
      if (p === 2) return [`${name}의 방법을 알 수 있다.`];
      if (p === total) return [`${name}을 실천할 수 있다.`];
      return [`${name}에 대해 연습할 수 있다.`];
    },
  };

  const template = subject && subjectTemplates[subject]
    ? subjectTemplates[subject]
    : (name: string, p: number, total: number) => {
        if (p === 1) return [`${name}에 대해 알 수 있다.`, `${name}의 기초 개념을 이해할 수 있다.`];
        if (p === total) return [`${name}에서 배운 내용을 정리할 수 있다.`, `${name}의 개념을 다른 상황에 적용할 수 있다.`];
        return [`${name}에 대해 더 깊이 탐구할 수 있다.`];
      };

  return template(cleanName, period, totalPeriods);
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
    const objectives = generateObjectivesFromUnitName(unitName, i, periodCount, subject);
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
    'spring': 'spr',
    'summer': 'sum',
    'autumn': 'aut',
    'winter': 'win',
    'safelife': 'safe',
  };

  const prefix = subjectPrefixMap[subject] || subject;

  // 가능한 ID 패턴들 검색 - 기존 데이터에서 찾기
  // ID 패턴: kor_4_1_1 (과목_학년_학기_단원)
  for (const [key, unitLessons] of Object.entries(ALL_LESSONS)) {
    // 과목 접두사로 시작하고 학년을 포함하는지 확인 (예: kor_4_1_1, kor_4_2_1)
    const gradePattern = new RegExp(`^${prefix}_${grade}_`);
    if (gradePattern.test(key) && unitLessons.unitName === unitName) {
      return unitLessons.periods;
    }
  }

  // 단원명으로 직접 검색
  for (const [key, unitLessons] of Object.entries(ALL_LESSONS)) {
    if (unitLessons.unitName === unitName) {
      return unitLessons.periods;
    }
  }

  // 기존 데이터에 없으면 정확한 차시 데이터에서 조회
  const accuratePeriodCount = getAccuratePeriodCount(subject, grade, unitName);

  const subjectKey = `${subject}_${grade}`;
  const units = UNITS[subjectKey];
  if (units) {
    const unit = units.find(u => u.name === unitName);
    if (unit) {
      return generateDefaultPeriods(unit.id, unitName, accuratePeriodCount, subject, grade);
    }
  }

  // 그래도 못 찾으면 정확한 차시 수로 반환
  const fallbackId = `${prefix}_${grade}_default`;
  return generateDefaultPeriods(fallbackId, unitName, accuratePeriodCount, subject, grade);
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
    'spring': 'spr',
    'summer': 'sum',
    'autumn': 'aut',
    'winter': 'win',
    'safelife': 'safe',
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
