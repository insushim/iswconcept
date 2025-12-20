// GRASPS 수행과제 템플릿 - 역할, 청중, 산출물 옵션
// 교사가 선택하여 수행과제를 구성할 수 있음

export interface GRASPSRole {
  id: string;
  name: string;
  description: string;
  subjects?: string[]; // 적합한 과목들
}

export interface GRASPSAudience {
  id: string;
  name: string;
  description: string;
}

export interface GRASPSProduct {
  id: string;
  name: string;
  description: string;
  subjects?: string[]; // 적합한 과목들
  difficulty?: 'easy' | 'medium' | 'hard'; // 난이도
}

export interface GRASPSSituation {
  id: string;
  name: string;
  template: string; // 상황 설명 템플릿
  subjects?: string[];
}

// ========== 역할 (Role) 옵션 ==========
export const GRASPS_ROLES: GRASPSRole[] = [
  // 탐구/조사 역할
  { id: 'scientist', name: '과학자', description: '현상을 탐구하고 실험하는 연구자', subjects: ['science'] },
  { id: 'researcher', name: '연구원', description: '자료를 조사하고 분석하는 전문가', subjects: ['science', 'social'] },
  { id: 'detective', name: '탐정', description: '단서를 찾아 비밀을 밝혀내는 조사관' },
  { id: 'historian', name: '역사가', description: '과거의 사건을 연구하는 전문가', subjects: ['social'] },
  { id: 'archaeologist', name: '고고학자', description: '유물과 유적을 발굴하는 탐험가', subjects: ['social'] },

  // 창작/예술 역할
  { id: 'author', name: '작가', description: '이야기와 글을 쓰는 창작자', subjects: ['korean'] },
  { id: 'poet', name: '시인', description: '감정과 생각을 시로 표현하는 예술가', subjects: ['korean'] },
  { id: 'journalist', name: '기자', description: '사건을 취재하고 보도하는 언론인', subjects: ['korean', 'social'] },
  { id: 'artist', name: '예술가', description: '아름다움을 표현하는 창작자', subjects: ['art', 'music'] },
  { id: 'designer', name: '디자이너', description: '새로운 것을 설계하고 디자인하는 전문가', subjects: ['art', 'practical'] },
  { id: 'filmmaker', name: '영화감독', description: '영상 작품을 만드는 창작자' },

  // 봉사/사회 역할
  { id: 'volunteer', name: '봉사자', description: '다른 사람을 돕는 마음 따뜻한 사람' },
  { id: 'eco_guardian', name: '환경 지킴이', description: '환경을 보호하는 지구의 수호자', subjects: ['science', 'social'] },
  { id: 'community_leader', name: '마을 리더', description: '지역사회를 이끄는 지도자', subjects: ['social'] },
  { id: 'campaign_planner', name: '캠페인 기획자', description: '사회 문제 해결을 위한 활동을 기획하는 사람' },

  // 전문가 역할
  { id: 'tour_guide', name: '여행 가이드', description: '장소의 이야기를 들려주는 안내자', subjects: ['social'] },
  { id: 'curator', name: '큐레이터', description: '전시를 기획하고 설명하는 전문가', subjects: ['art', 'social'] },
  { id: 'chef', name: '요리사', description: '맛있는 음식을 만드는 전문가', subjects: ['practical'] },
  { id: 'engineer', name: '공학자', description: '문제를 해결하는 도구와 방법을 만드는 사람', subjects: ['science', 'practical', 'math'] },
  { id: 'mathematician', name: '수학자', description: '수와 패턴의 비밀을 연구하는 전문가', subjects: ['math'] },

  // 교육/안내 역할
  { id: 'teacher', name: '선생님', description: '다른 사람에게 가르치고 안내하는 교육자' },
  { id: 'tutor', name: '멘토', description: '동생이나 친구를 도와주는 조력자' },
  { id: 'advisor', name: '상담사', description: '고민을 듣고 해결책을 제안하는 조언자', subjects: ['moral'] },

  // 정부/시민 역할
  { id: 'mayor', name: '시장', description: '도시를 이끄는 지도자', subjects: ['social'] },
  { id: 'council_member', name: '의원', description: '법과 규칙을 만드는 대표', subjects: ['social'] },
  { id: 'citizen', name: '시민', description: '사회에 참여하는 구성원', subjects: ['social', 'moral'] },

  // 기타 역할
  { id: 'inventor', name: '발명가', description: '새로운 것을 발명하는 창조자', subjects: ['science', 'practical'] },
  { id: 'storyteller', name: '이야기꾼', description: '이야기를 재미있게 전달하는 사람', subjects: ['korean'] },
  { id: 'reporter', name: '리포터', description: '현장의 소식을 전달하는 사람' },
];

// ========== 청중 (Audience) 옵션 ==========
export const GRASPS_AUDIENCES: GRASPSAudience[] = [
  // 학교 관련
  { id: 'classmates', name: '학급 친구들', description: '같은 반 친구들' },
  { id: 'schoolmates', name: '전교생', description: '우리 학교 모든 학생들' },
  { id: 'lower_grades', name: '동생들 (저학년)', description: '1-2학년 동생들' },
  { id: 'teachers', name: '선생님들', description: '학교 선생님들' },
  { id: 'principal', name: '교장 선생님', description: '학교 교장 선생님' },

  // 가족/지인
  { id: 'parents', name: '부모님', description: '우리 부모님' },
  { id: 'family', name: '가족', description: '우리 가족 모두' },
  { id: 'grandparents', name: '조부모님', description: '할아버지, 할머니' },

  // 지역사회
  { id: 'neighbors', name: '이웃 주민', description: '우리 동네 이웃들' },
  { id: 'community', name: '지역 주민', description: '우리 지역에 사는 분들' },
  { id: 'local_officials', name: '지역 공무원', description: '동사무소, 시청 공무원' },
  { id: 'mayor_audience', name: '시장님', description: '우리 도시의 시장님' },

  // 특정 그룹
  { id: 'tourists', name: '관광객', description: '우리 지역을 방문하는 여행자들' },
  { id: 'future_students', name: '미래의 학생들', description: '다음에 이 단원을 배울 학생들' },
  { id: 'experts', name: '전문가들', description: '해당 분야의 전문가들' },

  // 가상 청중
  { id: 'historical_figure', name: '역사 속 인물', description: '과거의 역사적 인물' },
  { id: 'future_generations', name: '미래 세대', description: '미래에 살 사람들' },
  { id: 'aliens', name: '외계인', description: '지구에 온 외계인' },

  // 일반
  { id: 'general_public', name: '일반 대중', description: '누구나 볼 수 있는 사람들' },
  { id: 'children', name: '어린이들', description: '나보다 어린 아이들' },
];

// ========== 산출물 (Product) 옵션 ==========
export const GRASPS_PRODUCTS: GRASPSProduct[] = [
  // 글쓰기 산출물
  { id: 'letter', name: '편지', description: '마음을 담은 편지 쓰기', difficulty: 'easy' },
  { id: 'diary', name: '일기/기록', description: '경험이나 관찰을 기록하기', difficulty: 'easy' },
  { id: 'report', name: '보고서', description: '조사한 내용을 정리한 문서', difficulty: 'medium' },
  { id: 'news_article', name: '신문 기사', description: '뉴스 형식의 글', subjects: ['korean', 'social'], difficulty: 'medium' },
  { id: 'story', name: '이야기/동화', description: '창작 이야기', subjects: ['korean'], difficulty: 'medium' },
  { id: 'poem', name: '시/노래 가사', description: '감정을 담은 시나 가사', subjects: ['korean', 'music'], difficulty: 'medium' },
  { id: 'guidebook', name: '안내서/가이드북', description: '정보를 안내하는 책자', difficulty: 'medium' },
  { id: 'manual', name: '사용 설명서', description: '방법을 설명하는 안내문', subjects: ['practical'], difficulty: 'medium' },

  // 시각 산출물
  { id: 'poster', name: '포스터', description: '한눈에 보는 시각 자료', difficulty: 'easy' },
  { id: 'infographic', name: '인포그래픽', description: '정보를 그림으로 정리', difficulty: 'medium' },
  { id: 'comic', name: '만화', description: '이야기를 만화로 표현', subjects: ['korean', 'art'], difficulty: 'medium' },
  { id: 'map', name: '지도', description: '장소나 정보를 지도로 표현', subjects: ['social'], difficulty: 'medium' },
  { id: 'diagram', name: '그래프/다이어그램', description: '데이터를 시각적으로 표현', subjects: ['math', 'science'], difficulty: 'medium' },
  { id: 'exhibition', name: '전시 패널', description: '전시회용 설명 자료', subjects: ['art', 'social'], difficulty: 'hard' },

  // 발표/공연 산출물
  { id: 'presentation', name: '발표 자료', description: 'PPT 등 발표용 자료', difficulty: 'medium' },
  { id: 'speech', name: '연설문', description: '청중 앞에서 읽을 연설', subjects: ['korean', 'social'], difficulty: 'medium' },
  { id: 'play', name: '연극/역할극', description: '대본과 연기', subjects: ['korean'], difficulty: 'hard' },
  { id: 'song', name: '노래', description: '주제를 담은 노래 만들기', subjects: ['music'], difficulty: 'medium' },
  { id: 'dance', name: '춤/안무', description: '주제를 표현한 동작', subjects: ['pe', 'music'], difficulty: 'medium' },

  // 멀티미디어 산출물
  { id: 'video', name: '영상/동영상', description: '촬영하거나 만든 영상', difficulty: 'hard' },
  { id: 'podcast', name: '팟캐스트/라디오', description: '음성 녹음 방송', difficulty: 'medium' },
  { id: 'photo_essay', name: '포토 에세이', description: '사진과 글로 표현', difficulty: 'medium' },
  { id: 'animation', name: '애니메이션', description: '움직이는 그림 영상', subjects: ['art'], difficulty: 'hard' },

  // 실물 산출물
  { id: 'model', name: '모형/모델', description: '실제처럼 만든 모형', subjects: ['science', 'social', 'practical'], difficulty: 'medium' },
  { id: 'craft', name: '만들기/공예품', description: '손으로 직접 만든 작품', subjects: ['art', 'practical'], difficulty: 'medium' },
  { id: 'experiment', name: '실험 시연', description: '실험을 보여주고 설명', subjects: ['science'], difficulty: 'medium' },
  { id: 'recipe', name: '요리/레시피', description: '음식 만들기와 설명', subjects: ['practical'], difficulty: 'medium' },
  { id: 'invention', name: '발명품', description: '새로운 도구나 장치', subjects: ['science', 'practical'], difficulty: 'hard' },

  // 게임/활동 산출물
  { id: 'board_game', name: '보드게임', description: '주제를 담은 게임 만들기', difficulty: 'hard' },
  { id: 'quiz', name: '퀴즈/문제', description: '다른 사람을 위한 문제 만들기', difficulty: 'easy' },
  { id: 'tour', name: '투어/안내', description: '장소를 안내하는 활동', subjects: ['social'], difficulty: 'medium' },
  { id: 'campaign', name: '캠페인 활동', description: '사회 참여 활동 기획', subjects: ['social', 'moral'], difficulty: 'hard' },

  // 디지털 산출물
  { id: 'website', name: '웹페이지', description: '온라인 정보 사이트', difficulty: 'hard' },
  { id: 'app_design', name: '앱 디자인', description: '앱 아이디어와 설계', subjects: ['practical'], difficulty: 'hard' },
  { id: 'social_media', name: 'SNS 게시물', description: '소셜미디어용 콘텐츠', difficulty: 'easy' },
];

// ========== 상황 (Situation) 템플릿 ==========
export const GRASPS_SITUATIONS: GRASPSSituation[] = [
  // 학교 상황
  { id: 'school_event', name: '학교 행사', template: '학교에서 {event}을(를) 준비하고 있습니다. 여러분은 {role}로서 {task}을(를) 해야 합니다.' },
  { id: 'class_project', name: '학급 프로젝트', template: '우리 반에서 {topic}에 대해 프로젝트를 진행하고 있습니다.' },
  { id: 'school_problem', name: '학교 문제 해결', template: '우리 학교에서 {problem} 문제가 발생했습니다. 이를 해결해야 합니다.' },

  // 지역사회 상황
  { id: 'community_issue', name: '지역사회 문제', template: '우리 동네에서 {issue}가 문제가 되고 있습니다.' },
  { id: 'local_event', name: '지역 행사', template: '우리 지역에서 {event}가 열립니다. 여러분이 참여해야 합니다.' },
  { id: 'helping_neighbors', name: '이웃 돕기', template: '이웃 {neighbor}이(가) {help}이(가) 필요합니다.' },

  // 환경/자연 상황
  { id: 'environmental', name: '환경 문제', template: '{location}에서 {environmental_issue} 문제가 심각해지고 있습니다.' },
  { id: 'nature_observation', name: '자연 관찰', template: '{season}이(가) 되어 {nature_phenomenon}을(를) 관찰하게 되었습니다.' },

  // 역사/문화 상황
  { id: 'historical', name: '역사 속 상황', template: '{historical_period}에 살고 있는 여러분은 {historical_situation}에 처해 있습니다.' },
  { id: 'cultural_exchange', name: '문화 교류', template: '다른 나라/지역의 친구들과 {cultural_activity}을(를) 함께 하게 되었습니다.' },

  // 미래/가상 상황
  { id: 'future_scenario', name: '미래 상황', template: '{years}년 후의 미래, {future_situation}한 세상에서 여러분은 {task}을(를) 해야 합니다.' },
  { id: 'imaginary', name: '상상 속 상황', template: '{imaginary_setting}에서 {imaginary_situation}이(가) 벌어졌습니다.' },

  // 개인/일상 상황
  { id: 'family', name: '가족 상황', template: '가족과 함께 {family_activity}을(를) 하게 되었습니다.' },
  { id: 'personal_challenge', name: '개인적 도전', template: '여러분은 {personal_goal}을(를) 달성하고 싶습니다.' },
];

// 과목별 추천 역할 가져오기
export function getRolesBySubject(subject: string): GRASPSRole[] {
  return GRASPS_ROLES.filter(r => !r.subjects || r.subjects.includes(subject));
}

// 과목별 추천 산출물 가져오기
export function getProductsBySubject(subject: string): GRASPSProduct[] {
  return GRASPS_PRODUCTS.filter(p => !p.subjects || p.subjects.includes(subject));
}

// 난이도별 산출물 가져오기
export function getProductsByDifficulty(difficulty: 'easy' | 'medium' | 'hard'): GRASPSProduct[] {
  return GRASPS_PRODUCTS.filter(p => p.difficulty === difficulty);
}

// 모든 역할 가져오기
export function getAllRoles(): GRASPSRole[] {
  return GRASPS_ROLES;
}

// 모든 청중 가져오기
export function getAllAudiences(): GRASPSAudience[] {
  return GRASPS_AUDIENCES;
}

// 모든 산출물 가져오기
export function getAllProducts(): GRASPSProduct[] {
  return GRASPS_PRODUCTS;
}

// 선택된 GRASPS 요소를 문장으로 변환
export function buildGRASPSSentence(
  role: GRASPSRole,
  audience: GRASPSAudience,
  product: GRASPSProduct,
  goal: string
): string {
  return `여러분은 ${role.name}입니다. ${audience.name}에게 ${goal}을(를) 알리기 위해 ${product.name}을(를) 만들어야 합니다.`;
}
