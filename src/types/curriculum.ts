// 교육과정 관련 타입 정의

export interface Publisher {
  id: string;
  name: string;
  code: string;
  is_active: boolean;
  created_at: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  category?: string;
  grades: number[];
  is_active: boolean;
  created_at: string;
}

export interface Unit {
  id: string;
  publisher_id: string;
  subject_id: string;
  grade: number;
  semester?: number;
  unit_number?: number;
  unit_name: string;
  description?: string;
  achievement_standards: string[];
  core_concepts: string[];
  created_at: string;
}

export interface ThinkingRoutineData {
  id: string;
  name: string;
  name_en?: string;
  description?: string;
  suitable_stages: string[];
  procedure: string[];
  example_questions: string[];
  tips: string[];
  created_at: string;
}
