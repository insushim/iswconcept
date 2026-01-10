// 개념기반 탐구수업 데이터베이스 - 메인 인덱스
// 모든 데이터 모듈을 중앙에서 관리하고 내보냅니다.

// 핵심 개념
export { KEY_CONCEPTS } from './key-concepts';
export { default as keyConcepts } from './key-concepts';

// 일반화
export { GENERALIZATIONS } from './generalizations';
export { default as generalizations } from './generalizations';

// 탐구 질문
export { INQUIRY_QUESTIONS } from './inquiry-questions';
export { default as inquiryQuestions } from './inquiry-questions';

// 사고 루틴
export { THINKING_ROUTINES } from './thinking-routines';
export { default as thinkingRoutines } from './thinking-routines';

// IB 프레임워크
export {
  TRANSDISCIPLINARY_THEMES,
  GLOBAL_CONTEXTS,
  ATL_SKILLS,
  LEARNER_PROFILE
} from './ib-frameworks';
export { default as ibFrameworks } from './ib-frameworks';

// 평가 도구
export { ASSESSMENT_STRATEGIES, RUBRIC_TEMPLATES } from './assessment-tools';
export { default as assessmentTools } from './assessment-tools';

// 수업 전략
export { TEACHING_STRATEGIES, GRAPHIC_ORGANIZERS } from './teaching-strategies';
export { default as teachingStrategies } from './teaching-strategies';

// 국제 교육 프레임워크 (v3.0 - 55개국!)
export {
  INTERNATIONAL_FRAMEWORKS,
  CONCEPT_BASED_MODELS,
  THINKING_FRAMEWORKS,
  MYP_RELATED_CONCEPTS,
  KOREA_2022_CORE_IDEAS,
  // 기존 20개국
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
  MOROCCO_VISION2030,
  // 개념기반 모델 및 사고 프레임워크
  CONCEPT_BASED_INQUIRY_MODEL,
  STRUCTURE_OF_KNOWLEDGE,
  STRUCTURE_OF_PROCESS,
  BLOOMS_REVISED_TAXONOMY,
  WEBBS_DOK,
  INTERNATIONAL_FRAMEWORKS_STATS
} from './international-frameworks';
export { default as internationalFrameworks } from './international-frameworks';

// 교육 이론 및 프레임워크 (v3.5 - 완전체!)
export {
  // 학습 이론
  LEARNING_THEORIES,
  INSTRUCTIONAL_MODELS,
  ASSESSMENT_FRAMEWORKS,
  ADDITIONAL_ASSESSMENT_FRAMEWORKS,
  // 역량 프레임워크
  COMPETENCY_FRAMEWORKS_21C,
  HABITS_OF_MIND,
  BUILDING_LEARNING_POWER,
  EXTENDED_THINKING_ROUTINES,
  // 교육 설계 프레임워크
  UDL_FRAMEWORK,
  DIFFERENTIATED_INSTRUCTION,
  CASEL_SEL_FRAMEWORK,
  SAMR_MODEL,
  TPACK_FRAMEWORK,
  QUESTION_FORMULATION_TECHNIQUE,
  SOCRATIC_SEMINAR,
  VISIBLE_LEARNING,
  THINKING_MAPS,
  // 교육적 접근법
  SUBJECT_SPECIFIC_FRAMEWORKS,
  PEDAGOGICAL_APPROACHES,
  ADDITIONAL_PEDAGOGICAL_APPROACHES,
  // 사고 및 협동 학습 (v3.5)
  SIX_THINKING_HATS,
  KAGAN_STRUCTURES,
  REGGIO_EMILIA_APPROACH,
  RESPONSIVE_CLASSROOM,
  RESTORATIVE_PRACTICES,
  ROSENSHINE_PRINCIPLES,
  WILIAM_FORMATIVE_ASSESSMENT,
  // 교과별 프레임워크 (v3.5)
  C3_FRAMEWORK,
  BALANCED_LITERACY,
  WORKSHOP_MODEL,
  SINGAPORE_MATH,
  NUMBER_TALKS,
  CGI_MATH,
  STEAM_MAKER_EDUCATION,
  // 교육과정 설계 및 테크 통합 (v3.5)
  CURRICULUM_DESIGN_MODELS,
  FLIPPED_LEARNING,
  BLENDED_LEARNING_MODELS,
  GAMIFICATION_EDUCATION,
  GAME_BASED_LEARNING,
  // 기타
  IB_TOK_FRAMEWORK,
  EDUCATIONAL_THEORIES_STATS
} from './educational-theories';
export { default as educationalTheories } from './educational-theories';

// 타입 내보내기
export * from '../types/database';

// ============================================
// 데이터베이스 통계
// ============================================
import { KEY_CONCEPTS } from './key-concepts';
import { GENERALIZATIONS } from './generalizations';
import { INQUIRY_QUESTIONS } from './inquiry-questions';
import { THINKING_ROUTINES } from './thinking-routines';
import { TRANSDISCIPLINARY_THEMES, GLOBAL_CONTEXTS, ATL_SKILLS, LEARNER_PROFILE } from './ib-frameworks';
import { ASSESSMENT_STRATEGIES, RUBRIC_TEMPLATES } from './assessment-tools';
import { TEACHING_STRATEGIES, GRAPHIC_ORGANIZERS } from './teaching-strategies';
import {
  INTERNATIONAL_FRAMEWORKS,
  CONCEPT_BASED_MODELS,
  THINKING_FRAMEWORKS,
  MYP_RELATED_CONCEPTS,
  KOREA_2022_CORE_IDEAS
} from './international-frameworks';
import {
  LEARNING_THEORIES,
  INSTRUCTIONAL_MODELS,
  ASSESSMENT_FRAMEWORKS,
  COMPETENCY_FRAMEWORKS_21C,
  HABITS_OF_MIND,
  BUILDING_LEARNING_POWER,
  EXTENDED_THINKING_ROUTINES,
  SUBJECT_SPECIFIC_FRAMEWORKS,
  PEDAGOGICAL_APPROACHES
} from './educational-theories';

export const DATABASE_STATS = {
  keyConcepts: KEY_CONCEPTS.length,
  generalizations: GENERALIZATIONS.length,
  inquiryQuestions: INQUIRY_QUESTIONS.length,
  thinkingRoutines: THINKING_ROUTINES.length,
  transdisciplinaryThemes: TRANSDISCIPLINARY_THEMES.length,
  globalContexts: GLOBAL_CONTEXTS.length,
  atlSkills: ATL_SKILLS.length,
  learnerProfileAttributes: LEARNER_PROFILE.length,
  assessmentStrategies: ASSESSMENT_STRATEGIES.length,
  rubricTemplates: RUBRIC_TEMPLATES.length,
  teachingStrategies: TEACHING_STRATEGIES.length,
  graphicOrganizers: GRAPHIC_ORGANIZERS.length,
  // 국제 프레임워크 (NEW!)
  internationalFrameworks: INTERNATIONAL_FRAMEWORKS.length,
  conceptBasedModels: CONCEPT_BASED_MODELS.length,
  thinkingFrameworks: THINKING_FRAMEWORKS.length,
  mypRelatedConcepts: MYP_RELATED_CONCEPTS.length,
  koreaCoreIdeas: KOREA_2022_CORE_IDEAS.length,
  // 교육 이론 및 프레임워크 (NEW!)
  learningTheories: LEARNING_THEORIES.length,
  instructionalModels: INSTRUCTIONAL_MODELS.length,
  assessmentFrameworksExtended: ASSESSMENT_FRAMEWORKS.length,
  competencyFrameworks21c: COMPETENCY_FRAMEWORKS_21C.length,
  habitsOfMind: HABITS_OF_MIND.length,
  buildingLearningPower: BUILDING_LEARNING_POWER.length,
  extendedThinkingRoutines: EXTENDED_THINKING_ROUTINES.length,
  subjectSpecificFrameworks: SUBJECT_SPECIFIC_FRAMEWORKS.length,
  pedagogicalApproaches: PEDAGOGICAL_APPROACHES.length,
  get total() {
    return (
      this.keyConcepts +
      this.generalizations +
      this.inquiryQuestions +
      this.thinkingRoutines +
      this.transdisciplinaryThemes +
      this.globalContexts +
      this.atlSkills +
      this.learnerProfileAttributes +
      this.assessmentStrategies +
      this.rubricTemplates +
      this.teachingStrategies +
      this.graphicOrganizers +
      this.internationalFrameworks +
      this.conceptBasedModels +
      this.thinkingFrameworks +
      this.mypRelatedConcepts +
      this.koreaCoreIdeas +
      this.learningTheories +
      this.instructionalModels +
      this.assessmentFrameworksExtended +
      this.competencyFrameworks21c +
      this.habitsOfMind +
      this.buildingLearningPower +
      this.extendedThinkingRoutines +
      this.subjectSpecificFrameworks +
      this.pedagogicalApproaches
    );
  }
};

// ============================================
// 유틸리티 함수
// ============================================

/**
 * 교과별 핵심 개념 필터링
 */
export function getConceptsBySubject(subject: string) {
  return KEY_CONCEPTS.filter(
    concept => concept.subjects.includes(subject as any) || concept.subjects.includes('all')
  );
}

/**
 * 학년군별 핵심 개념 필터링
 */
export function getConceptsByGrade(gradeLevel: string) {
  return KEY_CONCEPTS.filter(concept =>
    concept.gradeLevel.includes(gradeLevel as any)
  );
}

/**
 * 소스별 핵심 개념 필터링
 */
export function getConceptsBySource(source: string) {
  return KEY_CONCEPTS.filter(concept => concept.source === source);
}

/**
 * 교과별 일반화 필터링
 */
export function getGeneralizationsBySubject(subject: string) {
  return GENERALIZATIONS.filter(
    gen => gen.subject === subject || gen.subject === 'all'
  );
}

/**
 * 질문 유형별 탐구 질문 필터링
 */
export function getQuestionsByType(type: 'factual' | 'conceptual' | 'debatable' | 'essential') {
  return INQUIRY_QUESTIONS.filter(q => q.type === type);
}

/**
 * 교과별 탐구 질문 필터링
 */
export function getQuestionsBySubject(subject: string) {
  return INQUIRY_QUESTIONS.filter(
    q => q.subject === subject || q.subject === 'all'
  );
}

/**
 * 사고 루틴 카테고리별 필터링
 */
export function getRoutinesByCategory(category: string) {
  return THINKING_ROUTINES.filter(routine => routine.category === category);
}

/**
 * 평가 유형별 전략 필터링
 */
export function getAssessmentsByType(type: 'formative' | 'summative' | 'diagnostic' | 'self_assessment' | 'peer_assessment') {
  return ASSESSMENT_STRATEGIES.filter(strategy => strategy.type === type);
}

/**
 * 수업 전략 카테고리별 필터링
 */
export function getStrategiesByCategory(category: string) {
  return TEACHING_STRATEGIES.filter(strategy => strategy.category === category);
}

/**
 * 학년군에 적합한 사고 루틴 필터링
 */
export function getRoutinesByGrade(gradeLevel: string) {
  return THINKING_ROUTINES.filter(routine =>
    routine.suitableFor.includes(gradeLevel as any)
  );
}

/**
 * 개념 ID로 관련 일반화 찾기
 */
export function getRelatedGeneralizations(conceptId: string) {
  return GENERALIZATIONS.filter(gen =>
    gen.concepts.includes(conceptId)
  );
}

/**
 * 개념 ID로 관련 탐구 질문 찾기
 */
export function getRelatedQuestions(conceptId: string) {
  return INQUIRY_QUESTIONS.filter(q =>
    q.relatedConcepts.includes(conceptId)
  );
}

console.log(`
╔═══════════════════════════════════════════════════════════════════╗
║         개념기반 탐구수업 데이터베이스 로드 완료                     ║
╠═══════════════════════════════════════════════════════════════════╣
║  [기본 데이터]                                                     ║
║  📚 핵심 개념: ${String(DATABASE_STATS.keyConcepts).padStart(3)}개        📝 일반화: ${String(DATABASE_STATS.generalizations).padStart(3)}개                   ║
║  ❓ 탐구 질문: ${String(DATABASE_STATS.inquiryQuestions).padStart(3)}개       🧠 사고 루틴: ${String(DATABASE_STATS.thinkingRoutines).padStart(3)}개                ║
╠═══════════════════════════════════════════════════════════════════╣
║  [IB 프레임워크]                                                   ║
║  🌍 PYP 주제: ${String(DATABASE_STATS.transdisciplinaryThemes).padStart(2)}개   🌐 MYP 맥락: ${String(DATABASE_STATS.globalContexts).padStart(2)}개   📖 ATL: ${String(DATABASE_STATS.atlSkills).padStart(3)}개     ║
║  👤 학습자 상: ${String(DATABASE_STATS.learnerProfileAttributes).padStart(3)}개  📖 MYP 관련 개념: ${String(DATABASE_STATS.mypRelatedConcepts).padStart(3)}개                    ║
╠═══════════════════════════════════════════════════════════════════╣
║  [교수·학습 도구]                                                  ║
║  📊 평가 전략: ${String(DATABASE_STATS.assessmentStrategies).padStart(3)}개    📋 루브릭: ${String(DATABASE_STATS.rubricTemplates).padStart(2)}개   🎯 수업 전략: ${String(DATABASE_STATS.teachingStrategies).padStart(3)}개  ║
║  📈 그래픽 오거나이저: ${String(DATABASE_STATS.graphicOrganizers).padStart(2)}개                                      ║
╠═══════════════════════════════════════════════════════════════════╣
║  [국제 교육과정] (20개국)                                          ║
║  🌐 국제 프레임워크: ${String(DATABASE_STATS.internationalFrameworks).padStart(2)}개   🔬 개념기반 모델: ${String(DATABASE_STATS.conceptBasedModels).padStart(2)}개          ║
║  💡 사고 프레임워크: ${String(DATABASE_STATS.thinkingFrameworks).padStart(2)}개    🇰🇷 한국 핵심아이디어: ${String(DATABASE_STATS.koreaCoreIdeas).padStart(2)}개           ║
╠═══════════════════════════════════════════════════════════════════╣
║  [교육 이론 및 프레임워크]                                          ║
║  📚 학습 이론: ${String(DATABASE_STATS.learningTheories).padStart(2)}개       🎯 수업 모델: ${String(DATABASE_STATS.instructionalModels).padStart(2)}개                ║
║  📊 평가 프레임워크: ${String(DATABASE_STATS.assessmentFrameworksExtended).padStart(2)}개  🌐 21세기 역량: ${String(DATABASE_STATS.competencyFrameworks21c).padStart(2)}개              ║
║  🧠 사고 습관: ${String(DATABASE_STATS.habitsOfMind).padStart(2)}개        💪 학습력 구축(4Rs): ${String(DATABASE_STATS.buildingLearningPower).padStart(2)}개             ║
║  🔄 확장 사고 루틴: ${String(DATABASE_STATS.extendedThinkingRoutines).padStart(2)}개   📖 교과별 프레임워크: ${String(DATABASE_STATS.subjectSpecificFrameworks).padStart(2)}개          ║
║  🎨 교육적 접근법: ${String(DATABASE_STATS.pedagogicalApproaches).padStart(2)}개                                       ║
╠═══════════════════════════════════════════════════════════════════╣
║  📦 총 ${String(DATABASE_STATS.total).padStart(4)}개 항목 로드됨 - 세계에서 가장 포괄적인 데이터베이스        ║
╚═══════════════════════════════════════════════════════════════════╝
`);
