// 사용자 관련 타입 정의

export interface Profile {
  id: string;
  email: string;
  full_name?: string;
  school_name?: string;
  grade_teaching?: string[];
  subjects_teaching?: string[];
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Favorite {
  id: string;
  user_id: string;
  lesson_id: string;
  created_at: string;
}

export interface GenerationHistory {
  id: string;
  user_id: string;
  lesson_id: string;
  prompt_used?: string;
  model_used?: string;
  tokens_used?: number;
  generation_time_ms?: number;
  status: 'success' | 'failed' | 'partial';
  error_message?: string;
  created_at: string;
}
