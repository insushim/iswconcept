// 수업 자료 관련 타입 정의

export interface LessonPlanHeader {
  subject: string;
  grade: string;
  unit: string;
  topic: string;
  date: string;
  period: string;
  duration: string;
  teacher: string;
}

export interface LessonPlanOverview {
  learningObjectives: string[];
  achievementStandards: string[];
  coreConcepts: string[];
  bigIdeas: string[];
  guidingQuestions: {
    factual: string[];
    conceptual: string[];
    debatable: string[];
  };
}

export interface LessonPlanStage {
  stage: string;
  time: string;
  teachingActivities: string[];
  learningActivities: string[];
  materials: string[];
  assessment: string;
}

export interface LessonPlanAssessment {
  methods: string[];
  criteria: string[];
  feedback: string;
}

export interface LessonPlan {
  lessonId: string;
  header: LessonPlanHeader;
  overview: LessonPlanOverview;
  stages: LessonPlanStage[];
  assessment: LessonPlanAssessment;
  preparation: string[];
  safetyNotes?: string[];
  differentiation?: {
    support: string[];
    extension: string[];
  };
}

// PPT 관련 타입
export interface PPTXSlide {
  id: string;
  order: number;
  type: 'title' | 'objective' | 'objectives' | 'concepts' | 'stage' | 'content' | 'activity' | 'question' | 'summary' | 'reflection';
  stage?: string;
  title: string;
  content: string[];
  leftContent?: string[];
  rightContent?: string[];
  subtitle?: string;
  footer?: string;
  imageDescription?: string;
  images?: string[];
  notes?: string;
  layout?: 'title' | 'content' | 'two_column' | 'image_text';
}

export interface PPTXTheme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  titleSize: number;
  contentSize: number;
}

export interface PPTXContent {
  lessonId: string;
  slides: PPTXSlide[];
  designTheme: PPTXTheme;
}

// 학습지 관련 타입 - CBI 7단계 탐구 학습지 지원
export interface WorksheetQuestion {
  id: string;
  number: number;
  type:
    | 'short_answer' | 'long_answer' | 'multiple_choice' | 'fill_blank' | 'matching' | 'drawing'
    | 'table' | 'graphic_organizer' | 'sentence_completion' | 'reflection' | 'self_assessment'
    // CBI 학습지 전용 타입들
    | 'see_think_wonder' | 'frayer_model' | 'investigation_table' | 'compare_contrast_table'
    | 'pattern_finding' | 'inquiry_start' | 'concept_map' | 'headlines' | 'class_consensus'
    | 'generalization_builder' | 'transfer_thinking' | 'grasps_understanding' | 'planning_sheet'
    | 'rubric_check' | 'thinking_change' | '3_2_1_summary' | 'self_assessment_table'
    | 'final_reflection' | 'summary' | 'experience_connection' | 'initial_thinking';
  question: string;
  options?: string[];
  answerSpace?: 'small' | 'medium' | 'large';
  lines?: number;
  hint?: string;
  teacherAnswer?: string;
  blanks?: string[];
  leftItems?: string[];
  rightItems?: string[];
  tableHeaders?: string[];
  rows?: Array<{case?: string; item?: string; cells: string[]}>;
  organizerType?: string;
  centralConcept?: string;
  branches?: number;
  starter?: string;
  prompts?: string[];
  criteria?: Array<{item: string; options?: string[]}>;
  scale?: string[];
  // CBI 학습지 전용 필드들
  subQuestions?: Array<{label: string; lines?: number; prompt?: string}>;
  quadrants?: Array<{position: string; label: string; lines: number}>;
  centerConcept?: string;
  note?: string;
  instructions?: string;
  prompt?: string;
  box?: boolean;
  highlight?: boolean;
  template?: string;
  steps?: Array<{label: string; hint?: string; lines?: number}>;
  finalStatement?: {label: string; lines?: number; highlight?: boolean};
  elements?: Array<{icon: string; label: string; prompt: string; lines?: number}>;
  sections?: Array<{label: string; lines?: number}>;
  before?: {label: string; lines?: number};
  after?: {label: string; lines?: number};
  reason?: {label: string; lines?: number};
  items?: Array<{number: string; label: string; subLines?: number}>;
}

export interface WorksheetSection {
  id: string;
  sectionNumber: number;
  title: string;
  stage: string;
  instructions: string;
  questions: WorksheetQuestion[];
  // CBI 학습지 전용 필드들
  periods?: string;
  phase?: string;
  stageColor?: string;
}

export interface WorksheetHeader {
  title: string;
  subtitle?: string;
  subject?: string;
  grade?: string;
  studentNameField?: boolean;
  dateField?: boolean;
  classField?: boolean;
  // CBI 학습지 전용 필드들
  totalPeriods?: string;
  conceptLens?: string;
}

export interface WorksheetFooter {
  teacherComment?: boolean;
  teacherCommentPrompt?: string;
  parentSignature?: boolean;
  portfolioNote?: string;
}

export interface Worksheet {
  lessonId: string;
  header: WorksheetHeader;
  sections: WorksheetSection[];
  footer: WorksheetFooter;
}

export interface TeacherGuide {
  answers: { questionNumber: number; answer: string }[];
  scoringRubric: { section: string; maxPoints: number; criteria: string }[];
  commonMisconceptions: string[];
  differentiationNotes: {
    support: string;
    extension: string;
  };
}

export interface WorksheetContent {
  worksheet: Worksheet;
  teacherGuide: TeacherGuide;
}

// 수업 대본 관련 타입
export interface ScriptStageSection {
  activity: string;
  teacherSays: string[];
  expectedStudentResponses?: string[];
  teacherNotes?: string[];
  transition?: string;
  groupInstructions?: string;
  scaffoldingQuestions?: string[];
  keyQuestions?: string[];
  closingRemarks?: string;
}

export interface ScriptStage {
  stageName: string;
  timing: string;
  sections: ScriptStageSection[];
}

export interface ScriptDialogue {
  speaker: 'teacher' | 'student';
  text: string;
  action?: string;
}

export interface TeachingScriptSection {
  stageId?: string;
  duration: number;
  dialogues: ScriptDialogue[];
  teacherTips?: string[];
}

export interface TeachingScriptContent {
  sections: TeachingScriptSection[];
  lessonScript?: {
    opening: {
      greeting: string;
      motivation: string;
      objectiveShare: string;
    };
    stages: ScriptStage[];
    closing: {
      summary: string;
      preview: string;
      assignment?: string;
      farewell: string;
    };
    contingencyPlans: {
      timeShortage: string;
      studentStruggle: string;
      fastFinishers: string;
    };
  };
}

// 교수학습지도안 DOCX 타입 (도입-전개-정리 형식)
export interface LessonPlanDocxActivity {
  activityName?: string;
  teacherActivity: string;
  studentActivity: string;
  materials: string;
}

export interface LessonPlanDocxPhase {
  duration: number;
  activities: LessonPlanDocxActivity[];
}

export interface LessonPlanDocxPeriod {
  period: number;
  periodRange: string;
  stageName: string;
  stageNameEn: string;
  topic: string;
  learningObjectives: string[];
  introduction: LessonPlanDocxPhase;
  development: LessonPlanDocxPhase;
  conclusion: LessonPlanDocxPhase;
  assessment: {
    type: string;
    criteria: string[];
  };
}

export interface LessonPlanDocxContent {
  lessonPlans: LessonPlanDocxPeriod[];
}

// 자료 저장 타입
export interface Material {
  id: string;
  lesson_id: string;
  type: 'lesson_plan' | 'teaching_script' | 'pptx' | 'worksheet' | 'assessment';
  title: string;
  content: LessonPlan | TeachingScriptContent | PPTXContent | WorksheetContent | null;
  file_url?: string;
  file_format?: 'docx' | 'pptx' | 'pdf' | 'json';
  version: number;
  is_latest: boolean;
  created_at: string;
  updated_at: string;
}
