-- CBI Lesson Designer 데이터베이스 스키마
-- Supabase에서 실행

-- 사용자 프로필 (auth.users와 연결)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  school_name TEXT,
  grade_teaching TEXT[],
  subjects_teaching TEXT[],
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 프로필 자동 생성 트리거
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 수업 설계 테이블 (비용 최적화: JSONB 압축 저장)
CREATE TABLE IF NOT EXISTS lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,

  -- 기본 정보 (인덱싱 대상)
  title TEXT NOT NULL,
  publisher_id TEXT,
  subject_id TEXT,
  unit_id TEXT,
  grade INTEGER NOT NULL,
  class_period INTEGER DEFAULT 1,
  duration INTEGER DEFAULT 40,

  -- 학습 목표 (배열)
  learning_objectives TEXT[] NOT NULL DEFAULT '{}',
  achievement_standards TEXT[] DEFAULT '{}',

  -- 개념기반 설계 요소
  core_concepts TEXT[] DEFAULT '{}',
  related_concepts TEXT[] DEFAULT '{}',
  big_ideas TEXT[] DEFAULT '{}',

  -- 안내 질문
  factual_questions TEXT[] DEFAULT '{}',
  conceptual_questions TEXT[] DEFAULT '{}',
  debatable_questions TEXT[] DEFAULT '{}',

  -- 7단계 수업 설계 (JSONB로 압축 저장)
  stage_engage JSONB DEFAULT '{}',
  stage_focus JSONB DEFAULT '{}',
  stage_investigate JSONB DEFAULT '{}',
  stage_organize JSONB DEFAULT '{}',
  stage_generalize JSONB DEFAULT '{}',
  stage_transfer JSONB DEFAULT '{}',
  stage_reflect JSONB DEFAULT '{}',

  -- 평가 및 기타
  assessment_plan JSONB DEFAULT '{}',
  preparation TEXT[] DEFAULT '{}',
  safety_notes TEXT[] DEFAULT '{}',
  differentiation JSONB DEFAULT '{}',

  -- 메타 정보
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'generated', 'completed')),
  is_public BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 수업 자료 테이블 (최신 버전만 content 저장하여 용량 최적화)
CREATE TABLE IF NOT EXISTS materials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE NOT NULL,

  type TEXT NOT NULL CHECK (type IN ('lesson_plan', 'teaching_script', 'pptx', 'worksheet', 'assessment')),
  title TEXT NOT NULL,

  -- 최신 버전만 content 저장 (구버전은 NULL)
  content JSONB,

  -- 파일 정보
  file_url TEXT,
  file_format TEXT CHECK (file_format IN ('docx', 'pptx', 'pdf', 'json')),

  -- 버전 관리
  version INTEGER DEFAULT 1,
  is_latest BOOLEAN DEFAULT true,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 사고 루틴 라이브러리 (읽기 전용 참조 테이블)
CREATE TABLE IF NOT EXISTS thinking_routines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  name_en TEXT,
  description TEXT,
  suitable_stages TEXT[],
  procedure TEXT[],
  example_questions TEXT[],
  tips TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 생성 히스토리 (비용 추적용, 30일 후 자동 삭제)
CREATE TABLE IF NOT EXISTS generation_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  lesson_id UUID REFERENCES lessons(id) ON DELETE SET NULL,

  -- 프롬프트는 저장하지 않음 (용량 절약)
  model_used TEXT,
  tokens_used INTEGER,
  generation_time_ms INTEGER,

  status TEXT CHECK (status IN ('success', 'failed', 'partial')),
  error_message TEXT,

  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 즐겨찾기
CREATE TABLE IF NOT EXISTS favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  lesson_id UUID REFERENCES lessons(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- ===== 인덱스 생성 (쿼리 성능 최적화) =====

-- 수업 검색용 인덱스
CREATE INDEX IF NOT EXISTS idx_lessons_user_id ON lessons(user_id);
CREATE INDEX IF NOT EXISTS idx_lessons_status ON lessons(status);
CREATE INDEX IF NOT EXISTS idx_lessons_grade ON lessons(grade);
CREATE INDEX IF NOT EXISTS idx_lessons_subject ON lessons(subject_id);
CREATE INDEX IF NOT EXISTS idx_lessons_created ON lessons(created_at DESC);

-- 공개 수업 검색용 복합 인덱스
CREATE INDEX IF NOT EXISTS idx_lessons_public ON lessons(is_public, created_at DESC) WHERE is_public = true;

-- 자료 검색용 인덱스
CREATE INDEX IF NOT EXISTS idx_materials_lesson ON materials(lesson_id);
CREATE INDEX IF NOT EXISTS idx_materials_type ON materials(lesson_id, type);
CREATE INDEX IF NOT EXISTS idx_materials_latest ON materials(lesson_id, is_latest) WHERE is_latest = true;

-- 즐겨찾기 검색용 인덱스
CREATE INDEX IF NOT EXISTS idx_favorites_user ON favorites(user_id);

-- 히스토리 정리용 인덱스
CREATE INDEX IF NOT EXISTS idx_history_created ON generation_history(created_at);

-- ===== Row Level Security (RLS) =====

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE generation_history ENABLE ROW LEVEL SECURITY;

-- 프로필 정책
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- 수업 정책
CREATE POLICY "Users can view own lessons"
  ON lessons FOR SELECT
  USING (auth.uid() = user_id OR is_public = true);

CREATE POLICY "Users can create lessons"
  ON lessons FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own lessons"
  ON lessons FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own lessons"
  ON lessons FOR DELETE
  USING (auth.uid() = user_id);

-- 자료 정책
CREATE POLICY "Users can view materials of accessible lessons"
  ON materials FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM lessons
      WHERE lessons.id = materials.lesson_id
      AND (lessons.user_id = auth.uid() OR lessons.is_public = true)
    )
  );

CREATE POLICY "Users can manage materials of own lessons"
  ON materials FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM lessons
      WHERE lessons.id = materials.lesson_id
      AND lessons.user_id = auth.uid()
    )
  );

-- 즐겨찾기 정책
CREATE POLICY "Users can manage own favorites"
  ON favorites FOR ALL
  USING (auth.uid() = user_id);

-- 히스토리 정책 (본인 기록만 조회)
CREATE POLICY "Users can view own history"
  ON generation_history FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own history"
  ON generation_history FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ===== 자동 업데이트 트리거 =====

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_lessons_updated_at
  BEFORE UPDATE ON lessons
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_materials_updated_at
  BEFORE UPDATE ON materials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ===== 버전 관리 트리거 (자료 저장 시 이전 버전 content 제거) =====

CREATE OR REPLACE FUNCTION handle_material_version()
RETURNS TRIGGER AS $$
BEGIN
  -- 같은 lesson_id와 type의 이전 버전들의 content를 NULL로 설정
  IF NEW.is_latest = true THEN
    UPDATE materials
    SET
      is_latest = false,
      content = NULL  -- 구버전 content 제거하여 용량 절약
    WHERE lesson_id = NEW.lesson_id
      AND type = NEW.type
      AND id != NEW.id
      AND is_latest = true;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER handle_material_version_trigger
  AFTER INSERT ON materials
  FOR EACH ROW EXECUTE FUNCTION handle_material_version();

-- ===== 30일 지난 히스토리 자동 삭제 함수 (cron으로 실행) =====

CREATE OR REPLACE FUNCTION cleanup_old_history()
RETURNS void AS $$
BEGIN
  DELETE FROM generation_history
  WHERE created_at < NOW() - INTERVAL '30 days';
END;
$$ LANGUAGE plpgsql;

-- ===== Storage 버킷 설정 (Supabase Dashboard에서 실행) =====
-- INSERT INTO storage.buckets (id, name, public)
-- VALUES ('materials', 'materials', true);

-- ===== 초기 사고 루틴 데이터 =====

INSERT INTO thinking_routines (name, name_en, description, suitable_stages, procedure, example_questions, tips) VALUES
('보고-생각하고-궁금해하기', 'See-Think-Wonder', '관찰을 통해 사고를 촉진하고 궁금증을 유발하는 루틴',
  ARRAY['engage', 'investigate'],
  ARRAY['무엇이 보이나요?', '무엇이 생각나나요?', '무엇이 궁금한가요?'],
  ARRAY['이 그림/자료에서 어떤 것들이 눈에 띄나요?', '이것을 보고 어떤 생각이 드나요?', '더 알고 싶은 것은 무엇인가요?'],
  ARRAY['모든 관찰을 수용적으로 받아들이기', '판단하지 않고 다양한 생각 격려']
),
('3-2-1 브리지', '3-2-1 Bridge', '학습 전후의 사고 변화를 연결하는 루틴',
  ARRAY['engage', 'reflect'],
  ARRAY['3개의 생각', '2개의 질문', '1개의 비유'],
  ARRAY['이 주제에 대해 떠오르는 3가지 생각은?', '알고 싶은 2가지 질문은?', '이것은 마치 ___와 같다'],
  ARRAY['학습 전후 비교를 통해 사고 변화 인식', '비유를 통한 개념 연결 장려']
),
('예전에는-지금은', 'I Used to Think... Now I Think...', '학습을 통한 사고 변화를 인식하는 성찰 루틴',
  ARRAY['reflect'],
  ARRAY['예전에는 ___ 라고 생각했어요', '지금은 ___ 라고 생각해요', '내 생각이 바뀐 이유는...'],
  ARRAY['이 수업 전에는 이 주제에 대해 어떻게 생각했나요?', '지금은 어떻게 다르게 생각하게 되었나요?'],
  ARRAY['생각의 변화를 긍정적으로 인정', '충분한 성찰 시간 제공']
),
('연결-확장-도전', 'Connect-Extend-Challenge', '새로운 아이디어를 기존 지식과 연결하는 루틴',
  ARRAY['generalize', 'reflect'],
  ARRAY['이미 알고 있던 것과 어떻게 연결되나요?', '어떤 새로운 아이디어가 생각을 확장시켰나요?', '여전히 어렵거나 혼란스러운 것은?'],
  ARRAY['오늘 배운 내용과 이전에 알던 것은 어떻게 연결되나요?', '어떤 새로운 방향으로 생각이 확장되었나요?'],
  ARRAY['개인 후 모둠 공유', '도전 영역을 긍정적으로 다루기']
)
ON CONFLICT DO NOTHING;
