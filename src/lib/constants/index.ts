// Constants 모듈 통합 내보내기

// CBI 7단계 모형
export * from './cbi-stages';
export * from './cbi-stages-extended';

// CBI 개념, 일반화, 전이 관련
export * from './cbi-concepts';

// 사고 루틴
export * from './thinking-routines';
export * from './additional-thinking-routines';

// 교육과정 데이터
export * from './curriculum-data';

// 차시 배정 데이터
// lesson-periods.ts - 상세 차시별 데이터
export {
  type LessonPeriod,
  type UnitLessons,
  SCIENCE_3_LESSONS,
  SCIENCE_4_LESSONS,
  SCIENCE_5_LESSONS,
  SCIENCE_6_LESSONS,
  SCIENCE_LESSONS,
  getPeriodsForUnit,
  getPeriodInfo
} from './lesson-periods';

// accurate-periods.ts - 단원 총차시 정보
export {
  type UnitPeriodInfo,
  KOREAN_PERIODS,
  MATH_PERIODS,
  SCIENCE_PERIODS as SCIENCE_UNIT_PERIODS,
  SOCIAL_PERIODS,
  INTEGRATED_PERIODS,
  ENGLISH_PERIODS,
  MORAL_PERIODS,
  getAccuratePeriods,
  getAccuratePeriodCount
} from './accurate-periods';

// 기타 차시 데이터 (필요시 개별 import)
// all-periods.ts, math-periods.ts, other-periods.ts는 직접 import 필요
