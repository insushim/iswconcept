// 교육과정 기본 데이터 (초등학교)

export const PUBLISHERS = [
  { id: 'kumsung', name: '금성출판사', code: 'kumsung' },
  { id: 'kyohak', name: '교학사', code: 'kyohak' },
  { id: 'donga', name: '동아출판', code: 'donga' },
  { id: 'mirae', name: '미래엔', code: 'mirae' },
  { id: 'bisang', name: '비상교육', code: 'bisang' },
  { id: 'jihak', name: '지학사', code: 'jihak' },
  { id: 'chunjae', name: '천재교육', code: 'chunjae' },
  { id: 'national', name: '국정교과서', code: 'national' }
] as const;

export const GRADES = [3, 4, 5, 6] as const;

export const SUBJECTS = [
  { id: 'korean', name: '국어', code: 'korean', category: '국어', grades: [3, 4, 5, 6] },
  { id: 'math', name: '수학', code: 'math', category: '수학', grades: [3, 4, 5, 6] },
  { id: 'society', name: '사회', code: 'society', category: '사회', grades: [3, 4, 5, 6] },
  { id: 'science', name: '과학', code: 'science', category: '과학', grades: [3, 4, 5, 6] },
  { id: 'english', name: '영어', code: 'english', category: '영어', grades: [3, 4, 5, 6] },
  { id: 'moral', name: '도덕', code: 'moral', category: '도덕', grades: [3, 4, 5, 6] },
  { id: 'music', name: '음악', code: 'music', category: '음악', grades: [3, 4, 5, 6] },
  { id: 'art', name: '미술', code: 'art', category: '미술', grades: [3, 4, 5, 6] },
  { id: 'pe', name: '체육', code: 'pe', category: '체육', grades: [3, 4, 5, 6] },
  { id: 'practical', name: '실과', code: 'practical', category: '실과', grades: [5, 6] }
] as const;

// 학년별 사용 가능 과목
export const getSubjectsForGrade = (grade: number) =>
  SUBJECTS.filter((subject) => (subject.grades as readonly number[]).includes(grade));

// 단원 타입
interface Unit {
  id: string;
  name: string;
  unitNumber: number;
  semester: 1 | 2;
}

// 국정교과서 단원 데이터 (2024년 기준)
export const UNITS: Record<string, Unit[]> = {
  // ==================== 국어 (국정) ====================
  // 3학년 국어
  korean_3: [
    { id: 'kor_3_1_1', name: '1. 재미가 톡톡톡', unitNumber: 1, semester: 1 },
    { id: 'kor_3_1_2', name: '2. 문단의 짜임', unitNumber: 2, semester: 1 },
    { id: 'kor_3_1_3', name: '3. 알맞은 높임 표현', unitNumber: 3, semester: 1 },
    { id: 'kor_3_1_4', name: '4. 내 마음을 편지에 담아', unitNumber: 4, semester: 1 },
    { id: 'kor_3_1_5', name: '5. 중요한 내용을 적어요', unitNumber: 5, semester: 1 },
    { id: 'kor_3_1_6', name: '6. 일이 일어난 까닭', unitNumber: 6, semester: 1 },
    { id: 'kor_3_1_7', name: '7. 반갑다, 국어사전', unitNumber: 7, semester: 1 },
    { id: 'kor_3_1_8', name: '8. 의견이 있어요', unitNumber: 8, semester: 1 },
    { id: 'kor_3_2_1', name: '1. 작품을 보고 느낌을 나누어요', unitNumber: 1, semester: 2 },
    { id: 'kor_3_2_2', name: '2. 중심 생각을 찾아요', unitNumber: 2, semester: 2 },
    { id: 'kor_3_2_3', name: '3. 자신의 경험을 글로 써요', unitNumber: 3, semester: 2 },
    { id: 'kor_3_2_4', name: '4. 감동을 나타내요', unitNumber: 4, semester: 2 },
    { id: 'kor_3_2_5', name: '5. 바르게 대화해요', unitNumber: 5, semester: 2 },
    { id: 'kor_3_2_6', name: '6. 마음을 담아 글을 써요', unitNumber: 6, semester: 2 },
    { id: 'kor_3_2_7', name: '7. 글을 읽고 소개해요', unitNumber: 7, semester: 2 },
    { id: 'kor_3_2_8', name: '8. 글의 흐름을 생각해요', unitNumber: 8, semester: 2 },
  ],
  // 4학년 국어
  korean_4: [
    { id: 'kor_4_1_1', name: '1. 생각과 느낌을 나누어요', unitNumber: 1, semester: 1 },
    { id: 'kor_4_1_2', name: '2. 내용을 간추려요', unitNumber: 2, semester: 1 },
    { id: 'kor_4_1_3', name: '3. 느낌을 살려 말해요', unitNumber: 3, semester: 1 },
    { id: 'kor_4_1_4', name: '4. 일에 대한 의견', unitNumber: 4, semester: 1 },
    { id: 'kor_4_1_5', name: '5. 내가 만든 이야기', unitNumber: 5, semester: 1 },
    { id: 'kor_4_1_6', name: '6. 회의를 해요', unitNumber: 6, semester: 1 },
    { id: 'kor_4_1_7', name: '7. 사전은 내 친구', unitNumber: 7, semester: 1 },
    { id: 'kor_4_1_8', name: '8. 이런 제안 어때요', unitNumber: 8, semester: 1 },
    { id: 'kor_4_2_1', name: '1. 이어질 장면을 생각해요', unitNumber: 1, semester: 2 },
    { id: 'kor_4_2_2', name: '2. 마음을 전하는 글을 써요', unitNumber: 2, semester: 2 },
    { id: 'kor_4_2_3', name: '3. 바르고 공손하게', unitNumber: 3, semester: 2 },
    { id: 'kor_4_2_4', name: '4. 이야기 속 세상', unitNumber: 4, semester: 2 },
    { id: 'kor_4_2_5', name: '5. 컴퓨터로 글을 써요', unitNumber: 5, semester: 2 },
    { id: 'kor_4_2_6', name: '6. 본받고 싶은 인물을 찾아봐요', unitNumber: 6, semester: 2 },
    { id: 'kor_4_2_7', name: '7. 독서 감상문을 써요', unitNumber: 7, semester: 2 },
    { id: 'kor_4_2_8', name: '8. 생각하며 읽어요', unitNumber: 8, semester: 2 },
  ],
  // 5학년 국어
  korean_5: [
    { id: 'kor_5_1_1', name: '1. 대화와 공감', unitNumber: 1, semester: 1 },
    { id: 'kor_5_1_2', name: '2. 작품을 감상해요', unitNumber: 2, semester: 1 },
    { id: 'kor_5_1_3', name: '3. 글을 요약해요', unitNumber: 3, semester: 1 },
    { id: 'kor_5_1_4', name: '4. 글쓰기의 과정', unitNumber: 4, semester: 1 },
    { id: 'kor_5_1_5', name: '5. 글쓴이의 주장', unitNumber: 5, semester: 1 },
    { id: 'kor_5_1_6', name: '6. 토의하여 해결해요', unitNumber: 6, semester: 1 },
    { id: 'kor_5_1_7', name: '7. 기행문을 써요', unitNumber: 7, semester: 1 },
    { id: 'kor_5_1_8', name: '8. 아는 것과 새롭게 안 것', unitNumber: 8, semester: 1 },
    { id: 'kor_5_2_1', name: '1. 마음을 나누며 대화해요', unitNumber: 1, semester: 2 },
    { id: 'kor_5_2_2', name: '2. 지식이나 경험을 활용해요', unitNumber: 2, semester: 2 },
    { id: 'kor_5_2_3', name: '3. 의견을 조정하며 토의해요', unitNumber: 3, semester: 2 },
    { id: 'kor_5_2_4', name: '4. 겪은 일을 써요', unitNumber: 4, semester: 2 },
    { id: 'kor_5_2_5', name: '5. 여러 가지 매체 자료', unitNumber: 5, semester: 2 },
    { id: 'kor_5_2_6', name: '6. 타당성을 생각하며 토론해요', unitNumber: 6, semester: 2 },
    { id: 'kor_5_2_7', name: '7. 중요한 내용을 요약해요', unitNumber: 7, semester: 2 },
    { id: 'kor_5_2_8', name: '8. 우리말 지킴이', unitNumber: 8, semester: 2 },
  ],
  // 6학년 국어
  korean_6: [
    { id: 'kor_6_1_1', name: '1. 비유하는 표현', unitNumber: 1, semester: 1 },
    { id: 'kor_6_1_2', name: '2. 이야기를 간추려요', unitNumber: 2, semester: 1 },
    { id: 'kor_6_1_3', name: '3. 짜임새 있게 구성해요', unitNumber: 3, semester: 1 },
    { id: 'kor_6_1_4', name: '4. 주장과 근거를 판단해요', unitNumber: 4, semester: 1 },
    { id: 'kor_6_1_5', name: '5. 속담을 활용해요', unitNumber: 5, semester: 1 },
    { id: 'kor_6_1_6', name: '6. 내용을 추론해요', unitNumber: 6, semester: 1 },
    { id: 'kor_6_1_7', name: '7. 우리말을 가꾸어요', unitNumber: 7, semester: 1 },
    { id: 'kor_6_1_8', name: '8. 인물의 삶을 찾아서', unitNumber: 8, semester: 1 },
    { id: 'kor_6_2_1', name: '1. 작품 속 인물과 나', unitNumber: 1, semester: 2 },
    { id: 'kor_6_2_2', name: '2. 관용 표현을 활용해요', unitNumber: 2, semester: 2 },
    { id: 'kor_6_2_3', name: '3. 타당한 근거로 글을 써요', unitNumber: 3, semester: 2 },
    { id: 'kor_6_2_4', name: '4. 효과적으로 발표해요', unitNumber: 4, semester: 2 },
    { id: 'kor_6_2_5', name: '5. 글에 담긴 생각과 비교해요', unitNumber: 5, semester: 2 },
    { id: 'kor_6_2_6', name: '6. 정보와 표현 판단하기', unitNumber: 6, semester: 2 },
    { id: 'kor_6_2_7', name: '7. 글 고쳐 쓰기', unitNumber: 7, semester: 2 },
    { id: 'kor_6_2_8', name: '8. 작품으로 경험하기', unitNumber: 8, semester: 2 },
  ],

  // ==================== 수학 (국정) ====================
  // 3학년 수학
  math_3: [
    { id: 'math_3_1_1', name: '1. 덧셈과 뺄셈', unitNumber: 1, semester: 1 },
    { id: 'math_3_1_2', name: '2. 평면도형', unitNumber: 2, semester: 1 },
    { id: 'math_3_1_3', name: '3. 나눗셈', unitNumber: 3, semester: 1 },
    { id: 'math_3_1_4', name: '4. 곱셈', unitNumber: 4, semester: 1 },
    { id: 'math_3_1_5', name: '5. 길이와 시간', unitNumber: 5, semester: 1 },
    { id: 'math_3_1_6', name: '6. 분수와 소수', unitNumber: 6, semester: 1 },
    { id: 'math_3_2_1', name: '1. 곱셈', unitNumber: 1, semester: 2 },
    { id: 'math_3_2_2', name: '2. 나눗셈', unitNumber: 2, semester: 2 },
    { id: 'math_3_2_3', name: '3. 원', unitNumber: 3, semester: 2 },
    { id: 'math_3_2_4', name: '4. 분수', unitNumber: 4, semester: 2 },
    { id: 'math_3_2_5', name: '5. 들이와 무게', unitNumber: 5, semester: 2 },
    { id: 'math_3_2_6', name: '6. 자료의 정리', unitNumber: 6, semester: 2 },
  ],
  // 4학년 수학
  math_4: [
    { id: 'math_4_1_1', name: '1. 큰 수', unitNumber: 1, semester: 1 },
    { id: 'math_4_1_2', name: '2. 각도', unitNumber: 2, semester: 1 },
    { id: 'math_4_1_3', name: '3. 곱셈과 나눗셈', unitNumber: 3, semester: 1 },
    { id: 'math_4_1_4', name: '4. 평면도형의 이동', unitNumber: 4, semester: 1 },
    { id: 'math_4_1_5', name: '5. 막대그래프', unitNumber: 5, semester: 1 },
    { id: 'math_4_1_6', name: '6. 규칙 찾기', unitNumber: 6, semester: 1 },
    { id: 'math_4_2_1', name: '1. 분수의 덧셈과 뺄셈', unitNumber: 1, semester: 2 },
    { id: 'math_4_2_2', name: '2. 삼각형', unitNumber: 2, semester: 2 },
    { id: 'math_4_2_3', name: '3. 소수의 덧셈과 뺄셈', unitNumber: 3, semester: 2 },
    { id: 'math_4_2_4', name: '4. 사각형', unitNumber: 4, semester: 2 },
    { id: 'math_4_2_5', name: '5. 꺾은선그래프', unitNumber: 5, semester: 2 },
    { id: 'math_4_2_6', name: '6. 다각형', unitNumber: 6, semester: 2 },
  ],
  // 5학년 수학
  math_5: [
    { id: 'math_5_1_1', name: '1. 자연수의 혼합 계산', unitNumber: 1, semester: 1 },
    { id: 'math_5_1_2', name: '2. 약수와 배수', unitNumber: 2, semester: 1 },
    { id: 'math_5_1_3', name: '3. 규칙과 대응', unitNumber: 3, semester: 1 },
    { id: 'math_5_1_4', name: '4. 약분과 통분', unitNumber: 4, semester: 1 },
    { id: 'math_5_1_5', name: '5. 분수의 덧셈과 뺄셈', unitNumber: 5, semester: 1 },
    { id: 'math_5_1_6', name: '6. 다각형의 둘레와 넓이', unitNumber: 6, semester: 1 },
    { id: 'math_5_2_1', name: '1. 수의 범위와 어림하기', unitNumber: 1, semester: 2 },
    { id: 'math_5_2_2', name: '2. 분수의 곱셈', unitNumber: 2, semester: 2 },
    { id: 'math_5_2_3', name: '3. 합동과 대칭', unitNumber: 3, semester: 2 },
    { id: 'math_5_2_4', name: '4. 소수의 곱셈', unitNumber: 4, semester: 2 },
    { id: 'math_5_2_5', name: '5. 직육면체', unitNumber: 5, semester: 2 },
    { id: 'math_5_2_6', name: '6. 평균과 가능성', unitNumber: 6, semester: 2 },
  ],
  // 6학년 수학
  math_6: [
    { id: 'math_6_1_1', name: '1. 분수의 나눗셈', unitNumber: 1, semester: 1 },
    { id: 'math_6_1_2', name: '2. 각기둥과 각뿔', unitNumber: 2, semester: 1 },
    { id: 'math_6_1_3', name: '3. 소수의 나눗셈', unitNumber: 3, semester: 1 },
    { id: 'math_6_1_4', name: '4. 비와 비율', unitNumber: 4, semester: 1 },
    { id: 'math_6_1_5', name: '5. 여러 가지 그래프', unitNumber: 5, semester: 1 },
    { id: 'math_6_1_6', name: '6. 직육면체의 부피와 겉넓이', unitNumber: 6, semester: 1 },
    { id: 'math_6_2_1', name: '1. 분수의 나눗셈', unitNumber: 1, semester: 2 },
    { id: 'math_6_2_2', name: '2. 소수의 나눗셈', unitNumber: 2, semester: 2 },
    { id: 'math_6_2_3', name: '3. 공간과 입체', unitNumber: 3, semester: 2 },
    { id: 'math_6_2_4', name: '4. 비례식과 비례배분', unitNumber: 4, semester: 2 },
    { id: 'math_6_2_5', name: '5. 원의 넓이', unitNumber: 5, semester: 2 },
    { id: 'math_6_2_6', name: '6. 원기둥, 원뿔, 구', unitNumber: 6, semester: 2 },
  ],

  // ==================== 사회 (국정) ====================
  // 3학년 사회
  society_3: [
    { id: 'soc_3_1_1', name: '1. 우리 고장의 모습', unitNumber: 1, semester: 1 },
    { id: 'soc_3_1_2', name: '2. 우리가 알아보는 고장 이야기', unitNumber: 2, semester: 1 },
    { id: 'soc_3_1_3', name: '3. 교통과 통신 수단의 변화', unitNumber: 3, semester: 1 },
    { id: 'soc_3_2_1', name: '1. 환경에 따라 다른 삶의 모습', unitNumber: 1, semester: 2 },
    { id: 'soc_3_2_2', name: '2. 시대마다 다른 삶의 모습', unitNumber: 2, semester: 2 },
    { id: 'soc_3_2_3', name: '3. 가족의 형태와 역할 변화', unitNumber: 3, semester: 2 },
  ],
  // 4학년 사회
  society_4: [
    { id: 'soc_4_1_1', name: '1. 지역의 위치와 특성', unitNumber: 1, semester: 1 },
    { id: 'soc_4_1_2', name: '2. 우리가 알아보는 지역의 역사', unitNumber: 2, semester: 1 },
    { id: 'soc_4_1_3', name: '3. 지역의 공공 기관과 주민 참여', unitNumber: 3, semester: 1 },
    { id: 'soc_4_2_1', name: '1. 촌락과 도시의 생활 모습', unitNumber: 1, semester: 2 },
    { id: 'soc_4_2_2', name: '2. 필요한 것의 생산과 교환', unitNumber: 2, semester: 2 },
    { id: 'soc_4_2_3', name: '3. 사회 변화와 문화 다양성', unitNumber: 3, semester: 2 },
  ],
  // 5학년 사회
  society_5: [
    { id: 'soc_5_1_1', name: '1. 국토와 우리 생활', unitNumber: 1, semester: 1 },
    { id: 'soc_5_1_2', name: '2. 인권 존중과 정의로운 사회', unitNumber: 2, semester: 1 },
    { id: 'soc_5_2_1', name: '1. 옛사람들의 삶과 문화', unitNumber: 1, semester: 2 },
    { id: 'soc_5_2_2', name: '2. 사회의 새로운 변화와 오늘날의 우리', unitNumber: 2, semester: 2 },
  ],
  // 6학년 사회
  society_6: [
    { id: 'soc_6_1_1', name: '1. 우리나라의 정치 발전', unitNumber: 1, semester: 1 },
    { id: 'soc_6_1_2', name: '2. 우리나라의 경제 발전', unitNumber: 2, semester: 1 },
    { id: 'soc_6_2_1', name: '1. 세계 여러 나라의 자연과 문화', unitNumber: 1, semester: 2 },
    { id: 'soc_6_2_2', name: '2. 통일 한국의 미래와 지구촌의 평화', unitNumber: 2, semester: 2 },
  ],

  // ==================== 과학 (국정) ====================
  // 3학년 과학
  science_3: [
    { id: 'sci_3_1_1', name: '1. 물질의 성질', unitNumber: 1, semester: 1 },
    { id: 'sci_3_1_2', name: '2. 동물의 한살이', unitNumber: 2, semester: 1 },
    { id: 'sci_3_1_3', name: '3. 자석의 이용', unitNumber: 3, semester: 1 },
    { id: 'sci_3_1_4', name: '4. 지구의 모습', unitNumber: 4, semester: 1 },
    { id: 'sci_3_2_1', name: '1. 재미있는 나의 탐구', unitNumber: 1, semester: 2 },
    { id: 'sci_3_2_2', name: '2. 동물의 생활', unitNumber: 2, semester: 2 },
    { id: 'sci_3_2_3', name: '3. 지표의 변화', unitNumber: 3, semester: 2 },
    { id: 'sci_3_2_4', name: '4. 물질의 상태', unitNumber: 4, semester: 2 },
    { id: 'sci_3_2_5', name: '5. 소리의 성질', unitNumber: 5, semester: 2 },
  ],
  // 4학년 과학
  science_4: [
    { id: 'sci_4_1_1', name: '1. 지층과 화석', unitNumber: 1, semester: 1 },
    { id: 'sci_4_1_2', name: '2. 식물의 한살이', unitNumber: 2, semester: 1 },
    { id: 'sci_4_1_3', name: '3. 물체의 무게', unitNumber: 3, semester: 1 },
    { id: 'sci_4_1_4', name: '4. 혼합물의 분리', unitNumber: 4, semester: 1 },
    { id: 'sci_4_2_1', name: '1. 식물의 생활', unitNumber: 1, semester: 2 },
    { id: 'sci_4_2_2', name: '2. 물의 상태 변화', unitNumber: 2, semester: 2 },
    { id: 'sci_4_2_3', name: '3. 그림자와 거울', unitNumber: 3, semester: 2 },
    { id: 'sci_4_2_4', name: '4. 화산과 지진', unitNumber: 4, semester: 2 },
    { id: 'sci_4_2_5', name: '5. 물의 여행', unitNumber: 5, semester: 2 },
  ],
  // 5학년 과학
  science_5: [
    { id: 'sci_5_1_1', name: '1. 과학자는 어떻게 탐구할까요?', unitNumber: 1, semester: 1 },
    { id: 'sci_5_1_2', name: '2. 온도와 열', unitNumber: 2, semester: 1 },
    { id: 'sci_5_1_3', name: '3. 태양계와 별', unitNumber: 3, semester: 1 },
    { id: 'sci_5_1_4', name: '4. 용해와 용액', unitNumber: 4, semester: 1 },
    { id: 'sci_5_1_5', name: '5. 다양한 생물과 우리 생활', unitNumber: 5, semester: 1 },
    { id: 'sci_5_2_1', name: '1. 재미있는 나의 탐구', unitNumber: 1, semester: 2 },
    { id: 'sci_5_2_2', name: '2. 생물과 환경', unitNumber: 2, semester: 2 },
    { id: 'sci_5_2_3', name: '3. 날씨와 우리 생활', unitNumber: 3, semester: 2 },
    { id: 'sci_5_2_4', name: '4. 물체의 운동', unitNumber: 4, semester: 2 },
    { id: 'sci_5_2_5', name: '5. 산과 염기', unitNumber: 5, semester: 2 },
  ],
  // 6학년 과학
  science_6: [
    { id: 'sci_6_1_1', name: '1. 과학자처럼 탐구해 볼까요?', unitNumber: 1, semester: 1 },
    { id: 'sci_6_1_2', name: '2. 지구와 달의 운동', unitNumber: 2, semester: 1 },
    { id: 'sci_6_1_3', name: '3. 여러 가지 기체', unitNumber: 3, semester: 1 },
    { id: 'sci_6_1_4', name: '4. 식물의 구조와 기능', unitNumber: 4, semester: 1 },
    { id: 'sci_6_1_5', name: '5. 빛과 렌즈', unitNumber: 5, semester: 1 },
    { id: 'sci_6_2_1', name: '1. 전기의 이용', unitNumber: 1, semester: 2 },
    { id: 'sci_6_2_2', name: '2. 계절의 변화', unitNumber: 2, semester: 2 },
    { id: 'sci_6_2_3', name: '3. 연소와 소화', unitNumber: 3, semester: 2 },
    { id: 'sci_6_2_4', name: '4. 우리 몸의 구조와 기능', unitNumber: 4, semester: 2 },
    { id: 'sci_6_2_5', name: '5. 에너지와 생활', unitNumber: 5, semester: 2 },
  ],

  // ==================== 도덕 (국정) ====================
  // 3학년 도덕
  moral_3: [
    { id: 'mor_3_1_1', name: '1. 나와 너, 우리 함께', unitNumber: 1, semester: 1 },
    { id: 'mor_3_1_2', name: '2. 인내하며 최선을 다하는 생활', unitNumber: 2, semester: 1 },
    { id: 'mor_3_1_3', name: '3. 사랑이 가득한 우리 집', unitNumber: 3, semester: 1 },
    { id: 'mor_3_2_4', name: '4. 아름다운 사람이 되는 길', unitNumber: 4, semester: 2 },
    { id: 'mor_3_2_5', name: '5. 함께 지키는 행복한 세상', unitNumber: 5, semester: 2 },
    { id: 'mor_3_2_6', name: '6. 생명을 존중하는 우리', unitNumber: 6, semester: 2 },
  ],
  // 4학년 도덕
  moral_4: [
    { id: 'mor_4_1_1', name: '1. 도덕 공부, 행복한 우리', unitNumber: 1, semester: 1 },
    { id: 'mor_4_1_2', name: '2. 공손하고 다정하게', unitNumber: 2, semester: 1 },
    { id: 'mor_4_1_3', name: '3. 아껴 쓰는 우리', unitNumber: 3, semester: 1 },
    { id: 'mor_4_2_4', name: '4. 힘을 모아 함께', unitNumber: 4, semester: 2 },
    { id: 'mor_4_2_5', name: '5. 하나 되는 우리', unitNumber: 5, semester: 2 },
    { id: 'mor_4_2_6', name: '6. 함께 꿈꾸는 무지개 세상', unitNumber: 6, semester: 2 },
  ],
  // 5학년 도덕
  moral_5: [
    { id: 'mor_5_1_1', name: '1. 바르게 판단하고 행동해요', unitNumber: 1, semester: 1 },
    { id: 'mor_5_1_2', name: '2. 내 안의 소중한 나', unitNumber: 2, semester: 1 },
    { id: 'mor_5_1_3', name: '3. 나를 돌아보는 생활', unitNumber: 3, semester: 1 },
    { id: 'mor_5_2_4', name: '4. 밝고 건전한 사이버 생활', unitNumber: 4, semester: 2 },
    { id: 'mor_5_2_5', name: '5. 갈등을 해결하는 지혜', unitNumber: 5, semester: 2 },
    { id: 'mor_5_2_6', name: '6. 인권을 존중하는 세상', unitNumber: 6, semester: 2 },
  ],
  // 6학년 도덕
  moral_6: [
    { id: 'mor_6_1_1', name: '1. 내 삶의 주인은 바로 나', unitNumber: 1, semester: 1 },
    { id: 'mor_6_1_2', name: '2. 알맞게 소통하는 우리', unitNumber: 2, semester: 1 },
    { id: 'mor_6_1_3', name: '3. 나라를 사랑하는 마음', unitNumber: 3, semester: 1 },
    { id: 'mor_6_2_4', name: '4. 공정한 생활', unitNumber: 4, semester: 2 },
    { id: 'mor_6_2_5', name: '5. 우리가 꿈꾸는 통일 한국', unitNumber: 5, semester: 2 },
    { id: 'mor_6_2_6', name: '6. 함께 살아가는 지구촌', unitNumber: 6, semester: 2 },
  ],

  // ==================== 영어 (검정 - 대표 단원명) ====================
  // 3학년 영어
  english_3: [
    { id: 'eng_3_1_1', name: '1. Hello, I\'m Minsu', unitNumber: 1, semester: 1 },
    { id: 'eng_3_1_2', name: '2. What\'s This?', unitNumber: 2, semester: 1 },
    { id: 'eng_3_1_3', name: '3. I Like Apples', unitNumber: 3, semester: 1 },
    { id: 'eng_3_1_4', name: '4. How Many Cows?', unitNumber: 4, semester: 1 },
    { id: 'eng_3_2_5', name: '5. I Have a Pencil', unitNumber: 5, semester: 2 },
    { id: 'eng_3_2_6', name: '6. Is It a Dog?', unitNumber: 6, semester: 2 },
    { id: 'eng_3_2_7', name: '7. I Can Swim', unitNumber: 7, semester: 2 },
    { id: 'eng_3_2_8', name: '8. Happy Birthday!', unitNumber: 8, semester: 2 },
  ],
  // 4학년 영어
  english_4: [
    { id: 'eng_4_1_1', name: '1. How Are You?', unitNumber: 1, semester: 1 },
    { id: 'eng_4_1_2', name: '2. What Day Is It?', unitNumber: 2, semester: 1 },
    { id: 'eng_4_1_3', name: '3. It\'s Under the Table', unitNumber: 3, semester: 1 },
    { id: 'eng_4_1_4', name: '4. Do You Like Cheese?', unitNumber: 4, semester: 1 },
    { id: 'eng_4_2_5', name: '5. Where Is the Gym?', unitNumber: 5, semester: 2 },
    { id: 'eng_4_2_6', name: '6. Would You Like Some More?', unitNumber: 6, semester: 2 },
    { id: 'eng_4_2_7', name: '7. She\'s My Mom', unitNumber: 7, semester: 2 },
    { id: 'eng_4_2_8', name: '8. Let\'s Play Soccer', unitNumber: 8, semester: 2 },
  ],
  // 5학년 영어
  english_5: [
    { id: 'eng_5_1_1', name: '1. How Are You Doing?', unitNumber: 1, semester: 1 },
    { id: 'eng_5_1_2', name: '2. What\'s Your Favorite Subject?', unitNumber: 2, semester: 1 },
    { id: 'eng_5_1_3', name: '3. I Get Up at Seven', unitNumber: 3, semester: 1 },
    { id: 'eng_5_1_4', name: '4. Where Is the Post Office?', unitNumber: 4, semester: 1 },
    { id: 'eng_5_2_5', name: '5. I\'m Taller Than You', unitNumber: 5, semester: 2 },
    { id: 'eng_5_2_6', name: '6. What Do You Want?', unitNumber: 6, semester: 2 },
    { id: 'eng_5_2_7', name: '7. What Will You Do This Summer?', unitNumber: 7, semester: 2 },
    { id: 'eng_5_2_8', name: '8. How Much Is It?', unitNumber: 8, semester: 2 },
  ],
  // 6학년 영어
  english_6: [
    { id: 'eng_6_1_1', name: '1. What Grade Are You In?', unitNumber: 1, semester: 1 },
    { id: 'eng_6_1_2', name: '2. What Do You Want to Do?', unitNumber: 2, semester: 1 },
    { id: 'eng_6_1_3', name: '3. I Have a Headache', unitNumber: 3, semester: 1 },
    { id: 'eng_6_1_4', name: '4. When Is Your Birthday?', unitNumber: 4, semester: 1 },
    { id: 'eng_6_2_5', name: '5. I Went to Jeju Island', unitNumber: 5, semester: 2 },
    { id: 'eng_6_2_6', name: '6. What Do You Think?', unitNumber: 6, semester: 2 },
    { id: 'eng_6_2_7', name: '7. My Dream Is to Be a Chef', unitNumber: 7, semester: 2 },
    { id: 'eng_6_2_8', name: '8. What Should I Do?', unitNumber: 8, semester: 2 },
  ],

  // ==================== 음악 (검정 - 대표 단원명) ====================
  music_3: [
    { id: 'mus_3_1', name: '1. 음악으로 만나요', unitNumber: 1, semester: 1 },
    { id: 'mus_3_2', name: '2. 음악으로 표현해요', unitNumber: 2, semester: 1 },
    { id: 'mus_3_3', name: '3. 음악으로 이야기해요', unitNumber: 3, semester: 2 },
    { id: 'mus_3_4', name: '4. 음악으로 함께해요', unitNumber: 4, semester: 2 },
  ],
  music_4: [
    { id: 'mus_4_1', name: '1. 소리의 어울림', unitNumber: 1, semester: 1 },
    { id: 'mus_4_2', name: '2. 음악으로 소통해요', unitNumber: 2, semester: 1 },
    { id: 'mus_4_3', name: '3. 음악 여행', unitNumber: 3, semester: 2 },
    { id: 'mus_4_4', name: '4. 함께 만드는 음악', unitNumber: 4, semester: 2 },
  ],
  music_5: [
    { id: 'mus_5_1', name: '1. 음악과 생활', unitNumber: 1, semester: 1 },
    { id: 'mus_5_2', name: '2. 함께하는 음악', unitNumber: 2, semester: 1 },
    { id: 'mus_5_3', name: '3. 음악의 아름다움', unitNumber: 3, semester: 2 },
    { id: 'mus_5_4', name: '4. 음악으로 하나 되어', unitNumber: 4, semester: 2 },
  ],
  music_6: [
    { id: 'mus_6_1', name: '1. 음악의 멋', unitNumber: 1, semester: 1 },
    { id: 'mus_6_2', name: '2. 다양한 음악 문화', unitNumber: 2, semester: 1 },
    { id: 'mus_6_3', name: '3. 음악과 삶', unitNumber: 3, semester: 2 },
    { id: 'mus_6_4', name: '4. 음악의 날개', unitNumber: 4, semester: 2 },
  ],

  // ==================== 미술 (검정 - 대표 단원명) ====================
  art_3: [
    { id: 'art_3_1', name: '1. 미술과 친해지기', unitNumber: 1, semester: 1 },
    { id: 'art_3_2', name: '2. 관찰하고 표현하기', unitNumber: 2, semester: 1 },
    { id: 'art_3_3', name: '3. 상상하여 표현하기', unitNumber: 3, semester: 2 },
    { id: 'art_3_4', name: '4. 미술작품 감상하기', unitNumber: 4, semester: 2 },
  ],
  art_4: [
    { id: 'art_4_1', name: '1. 미술로 이야기하기', unitNumber: 1, semester: 1 },
    { id: 'art_4_2', name: '2. 생활 속 미술', unitNumber: 2, semester: 1 },
    { id: 'art_4_3', name: '3. 미술 작품 속 세상', unitNumber: 3, semester: 2 },
    { id: 'art_4_4', name: '4. 함께하는 미술', unitNumber: 4, semester: 2 },
  ],
  art_5: [
    { id: 'art_5_1', name: '1. 미술의 세계', unitNumber: 1, semester: 1 },
    { id: 'art_5_2', name: '2. 표현의 즐거움', unitNumber: 2, semester: 1 },
    { id: 'art_5_3', name: '3. 미술 문화 탐험', unitNumber: 3, semester: 2 },
    { id: 'art_5_4', name: '4. 소통하는 미술', unitNumber: 4, semester: 2 },
  ],
  art_6: [
    { id: 'art_6_1', name: '1. 미술로 소통하기', unitNumber: 1, semester: 1 },
    { id: 'art_6_2', name: '2. 창의적 표현', unitNumber: 2, semester: 1 },
    { id: 'art_6_3', name: '3. 미술과 문화', unitNumber: 3, semester: 2 },
    { id: 'art_6_4', name: '4. 미술의 가치', unitNumber: 4, semester: 2 },
  ],

  // ==================== 체육 (검정 - 대표 단원명) ====================
  pe_3: [
    { id: 'pe_3_1', name: '1. 건강 활동', unitNumber: 1, semester: 1 },
    { id: 'pe_3_2', name: '2. 도전 활동', unitNumber: 2, semester: 1 },
    { id: 'pe_3_3', name: '3. 경쟁 활동', unitNumber: 3, semester: 2 },
    { id: 'pe_3_4', name: '4. 표현 활동', unitNumber: 4, semester: 2 },
  ],
  pe_4: [
    { id: 'pe_4_1', name: '1. 건강 활동', unitNumber: 1, semester: 1 },
    { id: 'pe_4_2', name: '2. 도전 활동', unitNumber: 2, semester: 1 },
    { id: 'pe_4_3', name: '3. 경쟁 활동', unitNumber: 3, semester: 2 },
    { id: 'pe_4_4', name: '4. 표현 활동', unitNumber: 4, semester: 2 },
  ],
  pe_5: [
    { id: 'pe_5_1', name: '1. 건강 활동', unitNumber: 1, semester: 1 },
    { id: 'pe_5_2', name: '2. 도전 활동', unitNumber: 2, semester: 1 },
    { id: 'pe_5_3', name: '3. 경쟁 활동', unitNumber: 3, semester: 2 },
    { id: 'pe_5_4', name: '4. 표현 활동', unitNumber: 4, semester: 2 },
  ],
  pe_6: [
    { id: 'pe_6_1', name: '1. 건강 활동', unitNumber: 1, semester: 1 },
    { id: 'pe_6_2', name: '2. 도전 활동', unitNumber: 2, semester: 1 },
    { id: 'pe_6_3', name: '3. 경쟁 활동', unitNumber: 3, semester: 2 },
    { id: 'pe_6_4', name: '4. 표현 활동', unitNumber: 4, semester: 2 },
  ],

  // ==================== 실과 (국정) ====================
  practical_5: [
    { id: 'prac_5_1', name: '1. 나와 가정생활', unitNumber: 1, semester: 1 },
    { id: 'prac_5_2', name: '2. 생활 속 동식물', unitNumber: 2, semester: 1 },
    { id: 'prac_5_3', name: '3. 생활과 정보', unitNumber: 3, semester: 2 },
    { id: 'prac_5_4', name: '4. 안전한 생활', unitNumber: 4, semester: 2 },
  ],
  practical_6: [
    { id: 'prac_6_1', name: '1. 생활과 기술', unitNumber: 1, semester: 1 },
    { id: 'prac_6_2', name: '2. 생활과 에너지', unitNumber: 2, semester: 1 },
    { id: 'prac_6_3', name: '3. 지속 가능한 미래', unitNumber: 3, semester: 2 },
    { id: 'prac_6_4', name: '4. 발명과 로봇', unitNumber: 4, semester: 2 },
  ],
};

// 단원 조회 함수
export const getUnitsForSubjectAndGrade = (subject: string, grade: string): Unit[] => {
  const key = `${subject}_${grade}`;
  return UNITS[key] || [];
};

// 과목별 핵심 개념 예시
export const SUBJECT_CORE_CONCEPTS: Record<string, string[]> = {
  science: ['변화', '상호작용', '시스템', '에너지', '물질', '생명', '환경'],
  society: ['공간', '시간', '사회', '경제', '정치', '문화', '환경'],
  korean: ['소통', '표현', '이해', '탐구', '창의'],
  math: ['수', '연산', '도형', '측정', '규칙', '자료'],
  moral: ['자아', '타인', '사회', '자연', '가치'],
  english: ['의사소통', '문화', '언어'],
  music: ['표현', '감상', '생활화'],
  art: ['표현', '감상', '체험'],
  pe: ['건강', '도전', '경쟁', '표현', '안전'],
  practical: ['기술', '가정', '정보', '안전']
};

export type PublisherId = (typeof PUBLISHERS)[number]['id'];
export type SubjectId = (typeof SUBJECTS)[number]['id'];
export type Grade = (typeof GRADES)[number];
