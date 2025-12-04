// CBI 수업 설계 관련 타입 정의

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

export interface ThinkingRoutine {
  id?: string;
  name: string;
  nameEn: string;
  steps: string[];
  questions: string[];
}

export interface ScriptSection {
  timing: string;
  teacherSays: string[];
  expectedStudentResponses?: string[];
  notes?: string[];
}

export interface TeachingScript {
  introduction: ScriptSection;
  mainActivities: ScriptSection[];
  conclusion: ScriptSection;
  transitions: string[];
}

export interface RubricItem {
  criterion: string;
  levels: {
    excellent: string;
    good: string;
    developing: string;
    beginning: string;
  };
}

export interface Assessment {
  type: 'diagnostic' | 'formative' | 'summative' | 'self';
  criteria: string[];
  methods: string[];
  rubric?: RubricItem[];
}

export interface CBIStage {
  stageName: string;
  stageNameEn: string;
  duration: number;
  objectives: string[];
  activities: Activity[];
  teacherActions: string[];
  studentActions: string[];
  thinkingRoutine?: ThinkingRoutine;
  materials: string[];
  assessment?: Assessment;
  teachingScript?: TeachingScript;
}

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

export interface AssessmentPlan {
  formative?: {
    methods: string[];
    criteria: string[];
    timing: string;
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

export interface LessonStages {
  engage: CBIStage;
  focus: CBIStage;
  investigate: CBIStage;
  organize: CBIStage;
  generalize: CBIStage;
  transfer: CBIStage;
  reflect: CBIStage;
}

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

  // 7단계 (JSONB로 저장)
  stage_engage: CBIStage;
  stage_focus: CBIStage;
  stage_investigate: CBIStage;
  stage_organize: CBIStage;
  stage_generalize: CBIStage;
  stage_transfer: CBIStage;
  stage_reflect: CBIStage;

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

export interface LessonInput {
  publisher: string;
  grade: number;
  subject: string;
  unit: string;
  period: number;
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
