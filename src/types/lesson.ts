// 전북형 CBI 단원설계 관련 타입 정의

// 활동 타입
export interface Activity {
  order: number;
  title: string;
  description: string;
  duration: number;
  type: 'individual' | 'pair' | 'group' | 'whole_class';
  instructions: string[];
  expectedResponses?: string[];
  differentiation?: {
    support: string;
    extension: string;
  };
}

// 사고 루틴 타입
export interface ThinkingRoutine {
  id?: string;
  name: string;
  nameEn: string;
  steps: string[];
  questions: string[];
}

// 수업 대본 섹션
export interface ScriptSection {
  timing: string;
  teacherSays: string[];
  expectedStudentResponses?: string[];
  notes?: string[];
}

// 수업 대본
export interface TeachingScript {
  introduction: ScriptSection;
  mainActivities: ScriptSection[];
  conclusion: ScriptSection;
  transitions: string[];
}

// 루브릭 항목
export interface RubricItem {
  criterion: string;
  levels: {
    excellent: string;
    good: string;
    developing: string;
    beginning: string;
  };
}

// 평가
export interface Assessment {
  type: 'diagnostic' | 'formative' | 'summative' | 'self';
  criteria: string[];
  methods: string[];
  rubric?: RubricItem[];
}

// 탐구 질문 (3단계)
export interface InquiryQuestions {
  factual: string[];    // (사) 사실적 질문
  conceptual: string[]; // (개) 개념적 질문
  debatable: string[];  // (논) 논쟁적 질문
}

// 일반화와 탐구질문
export interface GeneralizationWithQuestions {
  generalization: string;
  inquiryQuestions: InquiryQuestions;
}

// 단원 7단계 중 각 단계 (차시 배정 포함)
export interface UnitStage {
  stageName: string;
  stageNameEn: string;
  periods: string;  // 예: "1-2차시", "3-4차시"
  periodCount: number; // 해당 단계에 배정된 차시 수
  duration?: number; // 1차시당 수업 시간 (분) - 기본 40분
  generalization: string;
  inquiryQuestion: string;
  objectives: string[];
  activities: Activity[];
  teacherActions: string[];
  studentActions: string[];
  thinkingRoutine?: ThinkingRoutine;
  materials: string[];
  tips: string[];
  assessment?: Assessment;
}

// GRASPS 수행과제
export interface GRASPSTask {
  taskName: string;
  goal: string;
  role: string;
  audience: string;
  situation: string;
  product: string;
  standards: string;
}

// 3단계 루브릭 (잘함/보통/노력요함)
export interface ThreeLevelRubric {
  criterion: string;
  category: 'knowledge' | 'process' | 'attitude';
  categoryName: string;
  excellent: string;
  satisfactory: string;
  needsImprovement: string;
}

// 내용 요소
export interface ContentElements {
  knowledge: string[];  // 지식·이해
  process: string[];    // 과정·기능
  attitude: string[];   // 가치·태도
}

// 단원 7단계 전체
export interface UnitStages {
  engage: UnitStage;      // 개념인식 - 관계맺기
  focus: UnitStage;       // 개념인식 - 집중하기
  investigate: UnitStage; // 개념연결 - 조사하기
  organize: UnitStage;    // 개념연결 - 조직 및 정리하기
  generalize: UnitStage;  // 개념전이 - 일반화하기
  transfer: UnitStage;    // 개념전이 - 전이하기
  reflect: UnitStage;     // 개념성찰 - 성찰하기
}

// 핵심역량
export interface CoreCompetency {
  name: string;
  description: string;
}

// 단원 개요
export interface UnitOverview {
  title: string;
  grade: number;
  subject: string;
  unitName: string;
  totalPeriods: number;

  // 핵심 아이디어 (교육과정 기반)
  curriculumKeyIdea: string;

  // 단원 핵심 아이디어 (일반화)
  unitKeyIdea: string;

  // 핵심역량
  coreCompetencies: CoreCompetency[];

  // 단원 설계 의도
  designIntent: string;

  // 개념 렌즈
  conceptLens: string;
  relatedConcepts: string[];

  // 성취기준
  achievementStandards: string[];

  // 내용 요소
  contentElements: ContentElements;

  // 일반화와 탐구질문 (3-4개)
  generalizations: GeneralizationWithQuestions[];
}

// 단원 평가
export interface UnitAssessment {
  graspsTask: GRASPSTask;
  rubric: ThreeLevelRubric[];
}

// 전체 단원 설계안
export interface UnitDesign {
  overview: UnitOverview;
  stages: UnitStages;
  assessment: UnitAssessment;
  preparation: string[];
  safetyNotes?: string[];
}

// 기존 Lesson 타입 (DB 저장용 - 호환성 유지)
export interface Lesson {
  id: string;
  user_id: string;

  // 기본 정보
  title: string;
  publisher_id?: string;
  subject_id?: string;
  unit_id?: string;
  grade: number;
  class_period: number;
  duration: number;

  // 학습 목표
  learning_objectives: string[];
  achievement_standards: string[];

  // 개념기반 설계
  core_concepts: string[];
  related_concepts: string[];
  big_ideas: string[];

  // 안내 질문
  factual_questions: string[];
  conceptual_questions: string[];
  debatable_questions: string[];

  // 7단계 (단원 기반)
  stage_engage: UnitStage;
  stage_focus: UnitStage;
  stage_investigate: UnitStage;
  stage_organize: UnitStage;
  stage_generalize: UnitStage;
  stage_transfer: UnitStage;
  stage_reflect: UnitStage;

  // 단원 개요 (새로 추가)
  unit_overview?: UnitOverview;

  // 단원 평가 (새로 추가)
  unit_assessment?: UnitAssessment;

  // 평가 및 기타
  assessment_plan: AssessmentPlan;
  preparation?: string[];
  safety_notes?: string[];
  differentiation?: Differentiation;

  // 메타 정보
  status: 'draft' | 'generated' | 'completed';
  is_public: boolean;
  view_count: number;

  created_at: string;
  updated_at: string;
}

export interface AssessmentPlan {
  formative?: {
    methods: string[];
    criteria: string[];
    timing?: string;
  };
  summative?: {
    methods: string[];
    criteria: string[];
    rubric?: RubricItem[];
  };
}

export interface Differentiation {
  support: string[];
  extension: string[];
}

// 기존 CBIStage 타입은 UnitStage로 대체됨
export type CBIStage = UnitStage;

export interface GuidingQuestions {
  factual: string[];
  conceptual: string[];
  debatable: string[];
}

export interface LessonOverview {
  title: string;
  coreConcepts: string[];
  relatedConcepts: string[];
  bigIdeas: string[];
  guidingQuestions: GuidingQuestions;
}

export interface LessonStages {
  engage: UnitStage;
  focus: UnitStage;
  investigate: UnitStage;
  organize: UnitStage;
  generalize: UnitStage;
  transfer: UnitStage;
  reflect: UnitStage;
}

export interface LessonInput {
  publisher: string;
  grade: number;
  subject: string;
  unit: string;
  period: number;  // 총 차시 수
  duration: number;
  objectives: string[];
  achievementStandards?: string[];
}

export interface GeneratedLesson {
  lessonOverview: LessonOverview;
  stages: LessonStages;
  assessmentPlan: AssessmentPlan;
  preparation: string[];
  safetyNotes?: string[];
  differentiation?: Differentiation;

  // 단원 설계 추가 필드
  unitOverview?: UnitOverview;
  unitAssessment?: UnitAssessment;
}

// 수업 생성 진행 상태
export interface GenerationProgress {
  currentStep: string;
  percentage: number;
  steps: GenerationStep[];
}

export interface GenerationStep {
  id: string;
  name: string;
  status: 'pending' | 'in_progress' | 'completed' | 'error';
}
