// 개념기반 탐구수업 데이터베이스 타입 정의

// ============================================
// 핵심 개념 (Key Concepts)
// ============================================

export interface KeyConcept {
  id: string;
  name: string;
  nameEn: string;
  definition: string;
  definitionEn: string;
  category: ConceptCategory;
  source: ConceptSource;
  guidingQuestions: string[];
  examples: string[];
  relatedConcepts: string[];
  gradeLevel: GradeLevel[];
  subjects: Subject[];
}

export type ConceptCategory =
  | 'macro' // 거시개념 (여러 교과에 걸쳐 적용)
  | 'micro' // 미시개념 (특정 교과/영역에 특화)
  | 'transdisciplinary' // 초학문적 개념
  | 'interdisciplinary'; // 학제간 개념

export type ConceptSource =
  | 'ib_pyp'
  | 'ib_myp'
  | 'ib_dp'
  | 'erickson'
  | 'ubd'
  | 'korea_2022'
  | 'ngss'
  | 'historical_thinking'
  | 'custom';

export type GradeLevel =
  | 'elementary_lower' // 초등 저학년 (1-2)
  | 'elementary_middle' // 초등 중학년 (3-4)
  | 'elementary_upper' // 초등 고학년 (5-6)
  | 'middle_school' // 중학교
  | 'high_school'; // 고등학교

export type Subject =
  | 'korean' // 국어
  | 'math' // 수학
  | 'social_studies' // 사회
  | 'science' // 과학
  | 'english' // 영어
  | 'art' // 미술
  | 'music' // 음악
  | 'physical_education' // 체육
  | 'practical_arts' // 실과
  | 'ethics' // 도덕
  | 'integrated' // 통합교과
  | 'all'; // 모든 교과

// ============================================
// 일반화/영속적 이해 (Generalizations)
// ============================================

export interface Generalization {
  id: string;
  statement: string;
  statementEn: string;
  concepts: string[]; // 연결된 개념 ID들
  subject: Subject;
  gradeLevel: GradeLevel[];
  topic?: string;
  source: ConceptSource;
  transferability: 'high' | 'medium' | 'low';
}

// ============================================
// 탐구 질문 (Inquiry Questions)
// ============================================

export interface InquiryQuestion {
  id: string;
  question: string;
  questionEn?: string;
  type: QuestionType;
  subject: Subject;
  gradeLevel: GradeLevel[];
  relatedConcepts: string[];
  topic?: string;
  thinkingLevel: ThinkingLevel;
}

export type QuestionType =
  | 'factual' // 사실적 질문
  | 'conceptual' // 개념적 질문
  | 'debatable' // 논쟁적 질문
  | 'essential'; // 본질적 질문

export type ThinkingLevel =
  | 'remember' // 기억
  | 'understand' // 이해
  | 'apply' // 적용
  | 'analyze' // 분석
  | 'evaluate' // 평가
  | 'create'; // 창조

// ============================================
// 수업 템플릿 (Lesson Templates)
// ============================================

export interface LessonTemplate {
  id: string;
  title: string;
  description: string;
  subject: Subject;
  gradeLevel: GradeLevel[];
  duration: number; // 분 단위
  conceptualLens: string;
  keyConcepts: string[];
  generalizations: string[];
  essentialQuestions: string[];
  learningObjectives: LearningObjective[];
  phases: LessonPhase[];
  assessmentStrategies: AssessmentStrategy[];
  differentiationStrategies: string[];
  resources: string[];
  source: ConceptSource;
}

export interface LearningObjective {
  type: 'knowledge' | 'skill' | 'understanding';
  description: string;
}

export interface LessonPhase {
  name: string;
  duration: number;
  activities: string[];
  thinkingRoutines?: string[];
  formativeAssessment?: string;
}

// ============================================
// 평가 도구 (Assessment Tools)
// ============================================

export interface AssessmentStrategy {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  type: AssessmentType;
  purpose: AssessmentPurpose;
  instructions: string;
  examples: string[];
  suitableFor: GradeLevel[];
}

export type AssessmentType =
  | 'formative' // 형성평가
  | 'summative' // 총괄평가
  | 'diagnostic' // 진단평가
  | 'self_assessment' // 자기평가
  | 'peer_assessment'; // 동료평가

export type AssessmentPurpose =
  | 'check_understanding' // 이해도 확인
  | 'measure_transfer' // 전이 측정
  | 'evaluate_thinking' // 사고력 평가
  | 'assess_skills' // 기능 평가
  | 'gauge_attitudes'; // 태도 평가

export interface RubricTemplate {
  id: string;
  title: string;
  type: 'holistic' | 'analytic' | 'single_point';
  criteria: RubricCriterion[];
  levels: RubricLevel[];
  subject?: Subject;
  gradeLevel?: GradeLevel[];
}

export interface RubricCriterion {
  name: string;
  description: string;
  weight?: number;
}

export interface RubricLevel {
  level: number;
  label: string;
  description: string;
}

// ============================================
// 사고 루틴 (Thinking Routines)
// ============================================

export interface ThinkingRoutine {
  id: string;
  name: string;
  nameKo: string;
  category: ThinkingRoutineCategory;
  description: string;
  steps: string[];
  purpose: string[];
  suitableFor: GradeLevel[];
  duration: string;
  source: 'project_zero' | 'custom';
}

export type ThinkingRoutineCategory =
  | 'introducing_exploring' // 도입 및 탐색
  | 'synthesizing_organizing' // 종합 및 조직
  | 'digging_deeper' // 심화 탐구
  | 'understanding_perspectives' // 관점 이해
  | 'reasoning_evidence' // 추론 및 증거
  | 'capturing_core'; // 핵심 포착

// ============================================
// IB 프레임워크 (IB Frameworks)
// ============================================

export interface TransdisciplinaryTheme {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  centralIdeas: string[];
  programme: 'pyp';
}

export interface GlobalContext {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  explorations: string[];
  programme: 'myp';
}

export interface ATLSkill {
  id: string;
  category: ATLCategory;
  categoryKo: string;
  skill: string;
  skillKo: string;
  description: string;
  indicators: string[];
}

export type ATLCategory =
  | 'thinking'
  | 'communication'
  | 'social'
  | 'self_management'
  | 'research';

export interface LearnerProfileAttribute {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  descriptionKo: string;
  studentActions: string[];
}

// ============================================
// 한국 2022 교육과정 (Korea 2022 Curriculum)
// ============================================

export interface CoreIdea {
  id: string;
  subject: Subject;
  domain: string;
  statement: string;
  gradeLevel: GradeLevel[];
}

export interface CoreCompetency {
  id: string;
  name: string;
  description: string;
  subCompetencies: string[];
}

export interface ContentElement {
  id: string;
  subject: Subject;
  domain: string;
  category: 'knowledge_understanding' | 'process_skill' | 'value_attitude';
  element: string;
  gradeLevel: GradeLevel[];
}

// ============================================
// 그래픽 오거나이저 (Graphic Organizers)
// ============================================

export interface GraphicOrganizer {
  id: string;
  name: string;
  nameKo: string;
  type: GraphicOrganizerType;
  purpose: string;
  useCase: string[];
  instructions: string;
  subjects: Subject[];
  gradeLevel: GradeLevel[];
}

export type GraphicOrganizerType =
  | 'concept_map'
  | 'venn_diagram'
  | 'kwl_chart'
  | 'fishbone'
  | 'flowchart'
  | 'matrix'
  | 'hierarchy'
  | 'sequence'
  | 'web';

// ============================================
// 교과별 영역 개념 (Subject Domain Concepts)
// ============================================

export interface SubjectDomainConcept {
  id: string;
  subject: Subject;
  domain: string;
  concepts: {
    name: string;
    nameEn?: string;
    definition: string;
  }[];
  gradeLevel: GradeLevel[];
}

// ============================================
// 수업 전략 (Teaching Strategies)
// ============================================

export interface TeachingStrategy {
  id: string;
  name: string;
  nameEn: string;
  category: StrategyCategory;
  description: string;
  steps: string[];
  benefits: string[];
  challenges: string[];
  suitableFor: GradeLevel[];
  subjects: Subject[];
}

export type StrategyCategory =
  | 'inductive' // 귀납적
  | 'deductive' // 연역적
  | 'inquiry' // 탐구
  | 'collaborative' // 협력
  | 'discussion' // 토론
  | 'project_based' // 프로젝트 기반
  | 'problem_based'; // 문제 기반
