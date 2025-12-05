// 2022 개정 교육과정 기준 정확한 단원별 차시 데이터
// 국정교과서 기준 실제 배당 차시

export interface UnitPeriodInfo {
  unitName: string;
  totalPeriods: number;
  semester: 1 | 2;
}

// ==================== 국어 ====================
// 국어는 단원당 보통 8~12차시, 2차시씩 묶여서 진행

export const KOREAN_PERIODS: Record<string, UnitPeriodInfo[]> = {
  // 3학년
  '3': [
    // 1학기
    { unitName: '1. 재미가 톡톡톡', totalPeriods: 10, semester: 1 },
    { unitName: '2. 문단의 짜임', totalPeriods: 8, semester: 1 },
    { unitName: '3. 알맞은 높임 표현', totalPeriods: 8, semester: 1 },
    { unitName: '4. 내 마음을 편지에 담아', totalPeriods: 10, semester: 1 },
    { unitName: '5. 중요한 내용을 적어요', totalPeriods: 8, semester: 1 },
    { unitName: '6. 일이 일어난 까닭', totalPeriods: 10, semester: 1 },
    { unitName: '7. 반갑다, 국어사전', totalPeriods: 8, semester: 1 },
    { unitName: '8. 의견이 있어요', totalPeriods: 10, semester: 1 },
    // 2학기
    { unitName: '1. 작품을 보고 느낌을 나누어요', totalPeriods: 10, semester: 2 },
    { unitName: '2. 중심 생각을 찾아요', totalPeriods: 8, semester: 2 },
    { unitName: '3. 자신의 경험을 글로 써요', totalPeriods: 10, semester: 2 },
    { unitName: '4. 감동을 나타내요', totalPeriods: 8, semester: 2 },
    { unitName: '5. 바르게 대화해요', totalPeriods: 8, semester: 2 },
    { unitName: '6. 마음을 담아 글을 써요', totalPeriods: 10, semester: 2 },
    { unitName: '7. 글을 읽고 소개해요', totalPeriods: 8, semester: 2 },
    { unitName: '8. 글의 흐름을 생각해요', totalPeriods: 10, semester: 2 },
  ],
  // 4학년
  '4': [
    // 1학기
    { unitName: '1. 생각과 느낌을 나누어요', totalPeriods: 10, semester: 1 },
    { unitName: '2. 내용을 간추려요', totalPeriods: 8, semester: 1 },
    { unitName: '3. 느낌을 살려 말해요', totalPeriods: 8, semester: 1 },
    { unitName: '4. 일에 대한 의견', totalPeriods: 10, semester: 1 },
    { unitName: '5. 내가 만든 이야기', totalPeriods: 10, semester: 1 },
    { unitName: '6. 회의를 해요', totalPeriods: 8, semester: 1 },
    { unitName: '7. 사전은 내 친구', totalPeriods: 8, semester: 1 },
    { unitName: '8. 이런 제안 어때요', totalPeriods: 10, semester: 1 },
    // 2학기
    { unitName: '1. 이어질 장면을 생각해요', totalPeriods: 10, semester: 2 },
    { unitName: '2. 마음을 전하는 글을 써요', totalPeriods: 8, semester: 2 },
    { unitName: '3. 바르고 공손하게', totalPeriods: 8, semester: 2 },
    { unitName: '4. 이야기 속 세상', totalPeriods: 10, semester: 2 },
    { unitName: '5. 컴퓨터로 글을 써요', totalPeriods: 8, semester: 2 },
    { unitName: '6. 본받고 싶은 인물을 찾아봐요', totalPeriods: 10, semester: 2 },
    { unitName: '7. 독서 감상문을 써요', totalPeriods: 10, semester: 2 },
    { unitName: '8. 생각하며 읽어요', totalPeriods: 8, semester: 2 },
  ],
  // 5학년
  '5': [
    // 1학기
    { unitName: '1. 대화와 공감', totalPeriods: 10, semester: 1 },
    { unitName: '2. 작품을 감상해요', totalPeriods: 10, semester: 1 },
    { unitName: '3. 글을 요약해요', totalPeriods: 8, semester: 1 },
    { unitName: '4. 글쓰기의 과정', totalPeriods: 10, semester: 1 },
    { unitName: '5. 글쓴이의 주장', totalPeriods: 10, semester: 1 },
    { unitName: '6. 토의하여 해결해요', totalPeriods: 10, semester: 1 },
    { unitName: '7. 기행문을 써요', totalPeriods: 10, semester: 1 },
    { unitName: '8. 아는 것과 새롭게 안 것', totalPeriods: 8, semester: 1 },
    // 2학기
    { unitName: '1. 마음을 나누며 대화해요', totalPeriods: 10, semester: 2 },
    { unitName: '2. 지식이나 경험을 활용해요', totalPeriods: 8, semester: 2 },
    { unitName: '3. 의견을 조정하며 토의해요', totalPeriods: 10, semester: 2 },
    { unitName: '4. 겪은 일을 써요', totalPeriods: 10, semester: 2 },
    { unitName: '5. 여러 가지 매체 자료', totalPeriods: 8, semester: 2 },
    { unitName: '6. 타당성을 생각하며 토론해요', totalPeriods: 10, semester: 2 },
    { unitName: '7. 중요한 내용을 요약해요', totalPeriods: 8, semester: 2 },
    { unitName: '8. 우리말 지킴이', totalPeriods: 8, semester: 2 },
  ],
  // 6학년
  '6': [
    // 1학기
    { unitName: '1. 비유하는 표현', totalPeriods: 10, semester: 1 },
    { unitName: '2. 이야기를 간추려요', totalPeriods: 8, semester: 1 },
    { unitName: '3. 짜임새 있게 구성해요', totalPeriods: 10, semester: 1 },
    { unitName: '4. 주장과 근거를 판단해요', totalPeriods: 10, semester: 1 },
    { unitName: '5. 속담을 활용해요', totalPeriods: 8, semester: 1 },
    { unitName: '6. 내용을 추론해요', totalPeriods: 10, semester: 1 },
    { unitName: '7. 우리말을 가꾸어요', totalPeriods: 8, semester: 1 },
    { unitName: '8. 인물의 삶을 찾아서', totalPeriods: 10, semester: 1 },
    // 2학기
    { unitName: '1. 작품 속 인물과 나', totalPeriods: 10, semester: 2 },
    { unitName: '2. 관용 표현을 활용해요', totalPeriods: 8, semester: 2 },
    { unitName: '3. 타당한 근거로 글을 써요', totalPeriods: 10, semester: 2 },
    { unitName: '4. 효과적으로 발표해요', totalPeriods: 10, semester: 2 },
    { unitName: '5. 글에 담긴 생각과 비교해요', totalPeriods: 8, semester: 2 },
    { unitName: '6. 정보와 표현 판단하기', totalPeriods: 10, semester: 2 },
    { unitName: '7. 글 고쳐 쓰기', totalPeriods: 8, semester: 2 },
    { unitName: '8. 작품 속 세계,나를 발견하다', totalPeriods: 8, semester: 2 }, // 여기가 8차시!
  ],
};

// ==================== 수학 ====================
// 수학은 단원당 보통 12~16차시

export const MATH_PERIODS: Record<string, UnitPeriodInfo[]> = {
  // 3학년
  '3': [
    // 1학기
    { unitName: '1. 덧셈과 뺄셈', totalPeriods: 14, semester: 1 },
    { unitName: '2. 평면도형', totalPeriods: 12, semester: 1 },
    { unitName: '3. 나눗셈', totalPeriods: 14, semester: 1 },
    { unitName: '4. 곱셈', totalPeriods: 12, semester: 1 },
    { unitName: '5. 길이와 시간', totalPeriods: 14, semester: 1 },
    { unitName: '6. 분수와 소수', totalPeriods: 14, semester: 1 },
    // 2학기
    { unitName: '1. 곱셈', totalPeriods: 14, semester: 2 },
    { unitName: '2. 나눗셈', totalPeriods: 12, semester: 2 },
    { unitName: '3. 원', totalPeriods: 10, semester: 2 },
    { unitName: '4. 분수', totalPeriods: 14, semester: 2 },
    { unitName: '5. 들이와 무게', totalPeriods: 14, semester: 2 },
    { unitName: '6. 자료의 정리', totalPeriods: 10, semester: 2 },
  ],
  // 4학년
  '4': [
    // 1학기
    { unitName: '1. 큰 수', totalPeriods: 12, semester: 1 },
    { unitName: '2. 각도', totalPeriods: 12, semester: 1 },
    { unitName: '3. 곱셈과 나눗셈', totalPeriods: 14, semester: 1 },
    { unitName: '4. 평면도형의 이동', totalPeriods: 10, semester: 1 },
    { unitName: '5. 막대그래프', totalPeriods: 10, semester: 1 },
    { unitName: '6. 규칙 찾기', totalPeriods: 12, semester: 1 },
    // 2학기
    { unitName: '1. 분수의 덧셈과 뺄셈', totalPeriods: 14, semester: 2 },
    { unitName: '2. 삼각형', totalPeriods: 12, semester: 2 },
    { unitName: '3. 소수의 덧셈과 뺄셈', totalPeriods: 14, semester: 2 },
    { unitName: '4. 사각형', totalPeriods: 12, semester: 2 },
    { unitName: '5. 꺾은선그래프', totalPeriods: 10, semester: 2 },
    { unitName: '6. 다각형', totalPeriods: 10, semester: 2 },
  ],
  // 5학년
  '5': [
    // 1학기
    { unitName: '1. 자연수의 혼합 계산', totalPeriods: 12, semester: 1 },
    { unitName: '2. 약수와 배수', totalPeriods: 14, semester: 1 },
    { unitName: '3. 규칙과 대응', totalPeriods: 10, semester: 1 },
    { unitName: '4. 약분과 통분', totalPeriods: 14, semester: 1 },
    { unitName: '5. 분수의 덧셈과 뺄셈', totalPeriods: 12, semester: 1 },
    { unitName: '6. 다각형의 둘레와 넓이', totalPeriods: 14, semester: 1 },
    // 2학기
    { unitName: '1. 수의 범위와 어림하기', totalPeriods: 12, semester: 2 },
    { unitName: '2. 분수의 곱셈', totalPeriods: 14, semester: 2 },
    { unitName: '3. 합동과 대칭', totalPeriods: 14, semester: 2 },
    { unitName: '4. 소수의 곱셈', totalPeriods: 12, semester: 2 },
    { unitName: '5. 직육면체', totalPeriods: 12, semester: 2 },
    { unitName: '6. 평균과 가능성', totalPeriods: 12, semester: 2 },
  ],
  // 6학년
  '6': [
    // 1학기
    { unitName: '1. 분수의 나눗셈', totalPeriods: 14, semester: 1 },
    { unitName: '2. 각기둥과 각뿔', totalPeriods: 12, semester: 1 },
    { unitName: '3. 소수의 나눗셈', totalPeriods: 14, semester: 1 },
    { unitName: '4. 비와 비율', totalPeriods: 14, semester: 1 },
    { unitName: '5. 여러 가지 그래프', totalPeriods: 10, semester: 1 },
    { unitName: '6. 직육면체의 부피와 겉넓이', totalPeriods: 12, semester: 1 },
    // 2학기
    { unitName: '1. 분수의 나눗셈', totalPeriods: 12, semester: 2 },
    { unitName: '2. 소수의 나눗셈', totalPeriods: 12, semester: 2 },
    { unitName: '3. 공간과 입체', totalPeriods: 10, semester: 2 },
    { unitName: '4. 비례식과 비례배분', totalPeriods: 14, semester: 2 },
    { unitName: '5. 원의 넓이', totalPeriods: 12, semester: 2 },
    { unitName: '6. 원기둥, 원뿔, 구', totalPeriods: 12, semester: 2 },
  ],
};

// ==================== 과학 ====================
// 과학은 단원당 보통 10~14차시

export const SCIENCE_PERIODS: Record<string, UnitPeriodInfo[]> = {
  // 3학년
  '3': [
    // 1학기
    { unitName: '1. 물질의 성질', totalPeriods: 12, semester: 1 },
    { unitName: '2. 동물의 한살이', totalPeriods: 14, semester: 1 },
    { unitName: '3. 자석의 이용', totalPeriods: 12, semester: 1 },
    { unitName: '4. 지구의 모습', totalPeriods: 10, semester: 1 },
    // 2학기
    { unitName: '1. 재미있는 나의 탐구', totalPeriods: 8, semester: 2 },
    { unitName: '2. 동물의 생활', totalPeriods: 12, semester: 2 },
    { unitName: '3. 지표의 변화', totalPeriods: 12, semester: 2 },
    { unitName: '4. 물질의 상태', totalPeriods: 14, semester: 2 },
    { unitName: '5. 소리의 성질', totalPeriods: 12, semester: 2 },
  ],
  // 4학년
  '4': [
    // 1학기
    { unitName: '1. 지층과 화석', totalPeriods: 12, semester: 1 },
    { unitName: '2. 식물의 한살이', totalPeriods: 14, semester: 1 },
    { unitName: '3. 물체의 무게', totalPeriods: 10, semester: 1 },
    { unitName: '4. 혼합물의 분리', totalPeriods: 12, semester: 1 },
    // 2학기
    { unitName: '1. 식물의 생활', totalPeriods: 12, semester: 2 },
    { unitName: '2. 물의 상태 변화', totalPeriods: 14, semester: 2 },
    { unitName: '3. 그림자와 거울', totalPeriods: 12, semester: 2 },
    { unitName: '4. 화산과 지진', totalPeriods: 12, semester: 2 },
    { unitName: '5. 물의 여행', totalPeriods: 10, semester: 2 },
  ],
  // 5학년
  '5': [
    // 1학기
    { unitName: '1. 과학자는 어떻게 탐구할까요', totalPeriods: 8, semester: 1 },
    { unitName: '2. 온도와 열', totalPeriods: 12, semester: 1 },
    { unitName: '3. 태양계와 별', totalPeriods: 14, semester: 1 },
    { unitName: '4. 용해와 용액', totalPeriods: 12, semester: 1 },
    { unitName: '5. 다양한 생물과 우리 생활', totalPeriods: 12, semester: 1 },
    // 2학기
    { unitName: '1. 재미있는 나의 탐구', totalPeriods: 8, semester: 2 },
    { unitName: '2. 생물과 환경', totalPeriods: 14, semester: 2 },
    { unitName: '3. 날씨와 우리 생활', totalPeriods: 14, semester: 2 },
    { unitName: '4. 물체의 운동', totalPeriods: 12, semester: 2 },
    { unitName: '5. 산과 염기', totalPeriods: 12, semester: 2 },
  ],
  // 6학년
  '6': [
    // 1학기
    { unitName: '1. 과학자처럼 탐구해 볼까요', totalPeriods: 8, semester: 1 },
    { unitName: '2. 지구와 달의 운동', totalPeriods: 14, semester: 1 },
    { unitName: '3. 여러 가지 기체', totalPeriods: 12, semester: 1 },
    { unitName: '4. 식물의 구조와 기능', totalPeriods: 14, semester: 1 },
    { unitName: '5. 빛과 렌즈', totalPeriods: 12, semester: 1 },
    // 2학기
    { unitName: '1. 전기의 이용', totalPeriods: 14, semester: 2 },
    { unitName: '2. 계절의 변화', totalPeriods: 12, semester: 2 },
    { unitName: '3. 연소와 소화', totalPeriods: 12, semester: 2 },
    { unitName: '4. 우리 몸의 구조와 기능', totalPeriods: 14, semester: 2 },
    { unitName: '5. 에너지와 생활', totalPeriods: 10, semester: 2 },
  ],
};

// ==================== 사회 ====================
// 사회는 단원당 보통 12~16차시

export const SOCIAL_PERIODS: Record<string, UnitPeriodInfo[]> = {
  // 3학년
  '3': [
    // 1학기
    { unitName: '1. 우리 고장의 모습', totalPeriods: 14, semester: 1 },
    { unitName: '2. 우리가 알아보는 고장 이야기', totalPeriods: 16, semester: 1 },
    { unitName: '3. 교통과 통신 수단의 변화', totalPeriods: 14, semester: 1 },
    // 2학기
    { unitName: '1. 환경에 따라 다른 삶의 모습', totalPeriods: 16, semester: 2 },
    { unitName: '2. 시대마다 다른 삶의 모습', totalPeriods: 14, semester: 2 },
    { unitName: '3. 가족의 형태와 역할 변화', totalPeriods: 12, semester: 2 },
  ],
  // 4학년
  '4': [
    // 1학기
    { unitName: '1. 지역의 위치와 특성', totalPeriods: 14, semester: 1 },
    { unitName: '2. 우리가 알아보는 지역의 역사', totalPeriods: 16, semester: 1 },
    { unitName: '3. 지역의 공공 기관과 주민 참여', totalPeriods: 14, semester: 1 },
    // 2학기
    { unitName: '1. 촌락과 도시의 생활 모습', totalPeriods: 16, semester: 2 },
    { unitName: '2. 필요한 것의 생산과 교환', totalPeriods: 14, semester: 2 },
    { unitName: '3. 사회 변화와 문화 다양성', totalPeriods: 14, semester: 2 },
  ],
  // 5학년
  '5': [
    // 1학기
    { unitName: '1. 국토와 우리 생활', totalPeriods: 18, semester: 1 },
    { unitName: '2. 인권 존중과 정의로운 사회', totalPeriods: 16, semester: 1 },
    // 2학기
    { unitName: '1. 옛사람들의 삶과 문화', totalPeriods: 20, semester: 2 },
    { unitName: '2. 사회의 새로운 변화와 오늘날의 우리', totalPeriods: 18, semester: 2 },
  ],
  // 6학년
  '6': [
    // 1학기
    { unitName: '1. 우리나라의 정치 발전', totalPeriods: 18, semester: 1 },
    { unitName: '2. 우리나라의 경제 발전', totalPeriods: 16, semester: 1 },
    // 2학기
    { unitName: '1. 세계 여러 나라의 자연과 문화', totalPeriods: 18, semester: 2 },
    { unitName: '2. 통일 한국의 미래와 지구촌의 평화', totalPeriods: 16, semester: 2 },
  ],
};

// ==================== 통합교과 (1~2학년) ====================
// 통합교과는 봄/여름/가을/겨울로 구성, 각 주제별 10~14차시

export const INTEGRATED_PERIODS: Record<string, UnitPeriodInfo[]> = {
  // 1학년
  '1': [
    // 봄
    { unitName: '1. 학교에 가면', totalPeriods: 14, semester: 1 },
    { unitName: '2. 도란도란 봄 동산', totalPeriods: 12, semester: 1 },
    // 여름
    { unitName: '1. 우리는 가족입니다', totalPeriods: 14, semester: 1 },
    { unitName: '2. 여름 나라', totalPeriods: 12, semester: 1 },
    // 가을
    { unitName: '1. 내 이웃 이야기', totalPeriods: 14, semester: 2 },
    { unitName: '2. 현규의 추석', totalPeriods: 12, semester: 2 },
    // 겨울
    { unitName: '1. 여기는 우리나라', totalPeriods: 14, semester: 2 },
    { unitName: '2. 우리의 겨울', totalPeriods: 12, semester: 2 },
  ],
  // 2학년
  '2': [
    // 봄
    { unitName: '1. 알쏭달쏭 나', totalPeriods: 14, semester: 1 },
    { unitName: '2. 봄이 오면', totalPeriods: 12, semester: 1 },
    // 여름
    { unitName: '1. 이런 집 저런 집', totalPeriods: 14, semester: 1 },
    { unitName: '2. 초록이의 여름 여행', totalPeriods: 12, semester: 1 },
    // 가을
    { unitName: '1. 동네 한 바퀴', totalPeriods: 14, semester: 2 },
    { unitName: '2. 가을아 어디 있니', totalPeriods: 12, semester: 2 },
    // 겨울
    { unitName: '1. 두근두근 세계 여행', totalPeriods: 14, semester: 2 },
    { unitName: '2. 겨울 탐정대의 친구 찾기', totalPeriods: 12, semester: 2 },
  ],
};

// ==================== 영어 (3~6학년) ====================
// 영어는 단원당 보통 6~8차시

export const ENGLISH_PERIODS: Record<string, UnitPeriodInfo[]> = {
  // 3학년
  '3': [
    // 1학기
    { unitName: '1. Hello!', totalPeriods: 6, semester: 1 },
    { unitName: '2. What\'s This?', totalPeriods: 6, semester: 1 },
    { unitName: '3. Happy Birthday!', totalPeriods: 6, semester: 1 },
    { unitName: '4. I Like Apples', totalPeriods: 6, semester: 1 },
    // 2학기
    { unitName: '5. I Have a Pencil', totalPeriods: 6, semester: 2 },
    { unitName: '6. How Many Cows?', totalPeriods: 6, semester: 2 },
    { unitName: '7. I Can Swim', totalPeriods: 6, semester: 2 },
    { unitName: '8. It\'s Snowing', totalPeriods: 6, semester: 2 },
  ],
  // 4학년
  '4': [
    // 1학기
    { unitName: '1. Nice to Meet You', totalPeriods: 6, semester: 1 },
    { unitName: '2. Don\'t Run', totalPeriods: 6, semester: 1 },
    { unitName: '3. What Time Is It?', totalPeriods: 6, semester: 1 },
    { unitName: '4. How Much Is It?', totalPeriods: 6, semester: 1 },
    // 2학기
    { unitName: '5. Where Is My Bag?', totalPeriods: 6, semester: 2 },
    { unitName: '6. This Is My House', totalPeriods: 6, semester: 2 },
    { unitName: '7. I\'m Tall', totalPeriods: 6, semester: 2 },
    { unitName: '8. Let\'s Go Swimming', totalPeriods: 6, semester: 2 },
  ],
  // 5학년
  '5': [
    // 1학기
    { unitName: '1. How Are You?', totalPeriods: 8, semester: 1 },
    { unitName: '2. Is This Your Cap?', totalPeriods: 8, semester: 1 },
    { unitName: '3. What Day Is It Today?', totalPeriods: 8, semester: 1 },
    { unitName: '4. What Do You Have?', totalPeriods: 8, semester: 1 },
    // 2학기
    { unitName: '5. She\'s My Mom', totalPeriods: 8, semester: 2 },
    { unitName: '6. How Many Pets Do You Have?', totalPeriods: 8, semester: 2 },
    { unitName: '7. Can You Help Me?', totalPeriods: 8, semester: 2 },
    { unitName: '8. I\'d Like Bulgogi', totalPeriods: 8, semester: 2 },
  ],
  // 6학년
  '6': [
    // 1학기
    { unitName: '1. What Grade Are You In?', totalPeriods: 8, semester: 1 },
    { unitName: '2. When Is Your Birthday?', totalPeriods: 8, semester: 1 },
    { unitName: '3. Where Is Gyeongbokgung?', totalPeriods: 8, semester: 1 },
    { unitName: '4. What Do You Want to Do?', totalPeriods: 8, semester: 1 },
    // 2학기
    { unitName: '5. How Was Your Vacation?', totalPeriods: 8, semester: 2 },
    { unitName: '6. I\'m Going to Visit My Uncle', totalPeriods: 8, semester: 2 },
    { unitName: '7. What Should I Do?', totalPeriods: 8, semester: 2 },
    { unitName: '8. I Want to Be a Teacher', totalPeriods: 8, semester: 2 },
  ],
};

// ==================== 도덕 (3~6학년) ====================
// 도덕은 단원당 보통 6~8차시

export const MORAL_PERIODS: Record<string, UnitPeriodInfo[]> = {
  // 3학년
  '3': [
    { unitName: '1. 나와 너, 우리 함께', totalPeriods: 8, semester: 1 },
    { unitName: '2. 인내하며 최선을 다하는 생활', totalPeriods: 6, semester: 1 },
    { unitName: '3. 사랑이 가득한 우리 집', totalPeriods: 6, semester: 1 },
    { unitName: '4. 아름다운 사람이 되는 길', totalPeriods: 8, semester: 2 },
    { unitName: '5. 함께 지키는 행복한 세상', totalPeriods: 6, semester: 2 },
    { unitName: '6. 생명을 존중하는 우리', totalPeriods: 6, semester: 2 },
  ],
  // 4학년
  '4': [
    { unitName: '1. 참된 아름다움', totalPeriods: 8, semester: 1 },
    { unitName: '2. 공정한 생활', totalPeriods: 6, semester: 1 },
    { unitName: '3. 아껴 쓰는 우리', totalPeriods: 6, semester: 1 },
    { unitName: '4. 서로 존중하는 우리', totalPeriods: 8, semester: 2 },
    { unitName: '5. 바른 미디어 생활', totalPeriods: 6, semester: 2 },
    { unitName: '6. 함께 꿈꾸는 무지개 세상', totalPeriods: 6, semester: 2 },
  ],
  // 5학년
  '5': [
    { unitName: '1. 바르게 판단하고 행동해요', totalPeriods: 8, semester: 1 },
    { unitName: '2. 내 안의 소중한 나', totalPeriods: 6, semester: 1 },
    { unitName: '3. 감사와 나눔의 행복', totalPeriods: 6, semester: 1 },
    { unitName: '4. 서로 다른 우리 하나 되어', totalPeriods: 8, semester: 2 },
    { unitName: '5. 인권을 존중하는 세상', totalPeriods: 6, semester: 2 },
    { unitName: '6. 공정하게 생활해요', totalPeriods: 6, semester: 2 },
  ],
  // 6학년
  '6': [
    { unitName: '1. 삶을 가꾸는 도덕 공부', totalPeriods: 6, semester: 1 },
    { unitName: '2. 책임을 다하는 우리', totalPeriods: 8, semester: 1 },
    { unitName: '3. 나라를 위해', totalPeriods: 6, semester: 1 },
    { unitName: '4. 통일을 향한 노력', totalPeriods: 8, semester: 2 },
    { unitName: '5. 우리가 꿈꾸는 통일', totalPeriods: 6, semester: 2 },
    { unitName: '6. 함께 살아가는 지구촌', totalPeriods: 6, semester: 2 },
  ],
};

// 과목별 데이터 통합 조회 함수
export function getAccuratePeriods(
  subject: string,
  grade: string
): UnitPeriodInfo[] {
  const gradeStr = grade.toString();

  switch (subject) {
    case 'korean':
      return KOREAN_PERIODS[gradeStr] || [];
    case 'math':
      return MATH_PERIODS[gradeStr] || [];
    case 'science':
      return SCIENCE_PERIODS[gradeStr] || [];
    case 'society':
      return SOCIAL_PERIODS[gradeStr] || [];
    case 'english':
      return ENGLISH_PERIODS[gradeStr] || [];
    case 'moral':
      return MORAL_PERIODS[gradeStr] || [];
    case 'spring':
    case 'summer':
    case 'autumn':
    case 'winter':
      return INTEGRATED_PERIODS[gradeStr] || [];
    default:
      return [];
  }
}

// 단원명으로 정확한 차시 수 조회
export function getAccuratePeriodCount(
  subject: string,
  grade: string,
  unitName: string
): number {
  const periods = getAccuratePeriods(subject, grade);

  // 완전 일치 검색
  const exactMatch = periods.find(p => p.unitName === unitName);
  if (exactMatch) return exactMatch.totalPeriods;

  // 부분 일치 검색 (단원 번호 제외하고 비교)
  const cleanUnitName = unitName.replace(/^\d+\.\s*/, '');
  const partialMatch = periods.find(p => {
    const cleanName = p.unitName.replace(/^\d+\.\s*/, '');
    return cleanName.includes(cleanUnitName) || cleanUnitName.includes(cleanName);
  });
  if (partialMatch) return partialMatch.totalPeriods;

  // 기본값 반환
  return 10;
}
