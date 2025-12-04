// 차시별 학습목표 및 성취기준 데이터

export interface LessonPeriod {
  id: string;
  period: number;
  title: string;
  objectives: string[];
  achievementStandards: string[];
  duration: number; // 기본 수업 시간 (분)
}

export interface UnitLessons {
  unitId: string;
  unitName: string;
  periods: LessonPeriod[];
}

// ==================== 과학 3학년 ====================
export const SCIENCE_3_LESSONS: Record<string, UnitLessons> = {
  // 1학기
  'sci_3_1_1': {
    unitId: 'sci_3_1_1',
    unitName: '1. 물질의 성질',
    periods: [
      { id: 'sci_3_1_1_1', period: 1, title: '물체와 물질 알아보기', objectives: ['물체와 물질의 의미를 이해할 수 있다.', '주변에서 여러 가지 물체와 물질을 찾을 수 있다.'], achievementStandards: ['[4과01-01] 서로 다른 물질로 만들어진 물체들을 관찰하여 물체와 물질을 구별할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_1_2', period: 2, title: '물질의 성질 관찰하기', objectives: ['여러 가지 물질의 성질을 관찰할 수 있다.'], achievementStandards: ['[4과01-01] 서로 다른 물질로 만들어진 물체들을 관찰하여 물체와 물질을 구별할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_1_3', period: 3, title: '물질의 성질 비교하기', objectives: ['서로 다른 물질의 성질을 비교할 수 있다.'], achievementStandards: ['[4과01-02] 크기와 모양이 같은 물체의 무게를 비교하여 물질마다 무게가 다름을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_1_4', period: 4, title: '물질의 무게 비교하기', objectives: ['같은 크기의 서로 다른 물질의 무게를 비교할 수 있다.'], achievementStandards: ['[4과01-02] 크기와 모양이 같은 물체의 무게를 비교하여 물질마다 무게가 다름을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_1_5', period: 5, title: '물질의 성질과 쓰임새', objectives: ['물질의 성질에 따른 쓰임새를 설명할 수 있다.'], achievementStandards: ['[4과01-03] 물질의 성질을 이용하여 물체를 만들거나 물체에 사용된 물질을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_1_6', period: 6, title: '물질을 이용한 물체 만들기', objectives: ['물질의 성질을 이용하여 물체를 만들 수 있다.'], achievementStandards: ['[4과01-03] 물질의 성질을 이용하여 물체를 만들거나 물체에 사용된 물질을 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_3_1_2': {
    unitId: 'sci_3_1_2',
    unitName: '2. 동물의 한살이',
    periods: [
      { id: 'sci_3_1_2_1', period: 1, title: '동물의 한살이 알아보기', objectives: ['동물의 한살이의 의미를 이해할 수 있다.'], achievementStandards: ['[4과03-01] 동물의 암수에 따른 특징을 동물별로 비교할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_2_2', period: 2, title: '동물의 암수 구별하기', objectives: ['동물의 암수를 구별하는 방법을 알 수 있다.'], achievementStandards: ['[4과03-01] 동물의 암수에 따른 특징을 동물별로 비교할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_2_3', period: 3, title: '배추흰나비 알 관찰하기', objectives: ['배추흰나비 알의 특징을 관찰할 수 있다.'], achievementStandards: ['[4과03-02] 동물의 한살이 관찰 계획을 세우고 한살이를 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_2_4', period: 4, title: '배추흰나비 애벌레 관찰하기', objectives: ['배추흰나비 애벌레의 특징을 관찰할 수 있다.'], achievementStandards: ['[4과03-02] 동물의 한살이 관찰 계획을 세우고 한살이를 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_2_5', period: 5, title: '배추흰나비 번데기와 성충', objectives: ['배추흰나비 번데기와 성충의 특징을 관찰할 수 있다.'], achievementStandards: ['[4과03-02] 동물의 한살이 관찰 계획을 세우고 한살이를 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_2_6', period: 6, title: '배추흰나비의 한살이 정리', objectives: ['배추흰나비의 한살이 과정을 정리할 수 있다.'], achievementStandards: ['[4과03-03] 여러 가지 동물의 한살이 과정을 조사하여 비교할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_2_7', period: 7, title: '여러 가지 곤충의 한살이', objectives: ['여러 가지 곤충의 한살이를 비교할 수 있다.'], achievementStandards: ['[4과03-03] 여러 가지 동물의 한살이 과정을 조사하여 비교할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_2_8', period: 8, title: '다른 동물의 한살이', objectives: ['곤충 이외의 동물의 한살이를 알 수 있다.'], achievementStandards: ['[4과03-03] 여러 가지 동물의 한살이 과정을 조사하여 비교할 수 있다.'], duration: 40 },
    ]
  },
  'sci_3_1_3': {
    unitId: 'sci_3_1_3',
    unitName: '3. 자석의 이용',
    periods: [
      { id: 'sci_3_1_3_1', period: 1, title: '자석에 붙는 물체', objectives: ['자석에 붙는 물체와 붙지 않는 물체를 구별할 수 있다.'], achievementStandards: ['[4과09-01] 자석 주위에서 철로 된 물체가 끌려오는 현상을 관찰하고 자석과 철로 된 물체 사이에 힘이 작용함을 안다.'], duration: 40 },
      { id: 'sci_3_1_3_2', period: 2, title: '자석의 극 알아보기', objectives: ['자석의 극의 성질을 알 수 있다.'], achievementStandards: ['[4과09-02] 자석의 같은 극끼리는 밀고 다른 극끼리는 당김을 실험을 통해 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_3_3', period: 3, title: '자석의 극 사이의 힘', objectives: ['자석의 같은 극과 다른 극 사이에 작용하는 힘을 알 수 있다.'], achievementStandards: ['[4과09-02] 자석의 같은 극끼리는 밀고 다른 극끼리는 당김을 실험을 통해 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_3_4', period: 4, title: '자석으로 나침반 만들기', objectives: ['자석의 성질을 이용하여 나침반을 만들 수 있다.'], achievementStandards: ['[4과09-03] 나침반 바늘이 일정한 방향을 가리키는 성질이 있음을 관찰하고 그 이유를 자석의 성질과 관련지어 추리할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_3_5', period: 5, title: '나침반 바늘이 가리키는 방향', objectives: ['나침반 바늘이 일정한 방향을 가리키는 이유를 설명할 수 있다.'], achievementStandards: ['[4과09-03] 나침반 바늘이 일정한 방향을 가리키는 성질이 있음을 관찰하고 그 이유를 자석의 성질과 관련지어 추리할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_3_6', period: 6, title: '생활 속 자석의 이용', objectives: ['생활 속에서 자석이 이용되는 예를 찾을 수 있다.'], achievementStandards: ['[4과09-04] 일상생활에서 자석이 사용되는 예를 조사하고 자석의 성질과 관련지어 그 기능을 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_3_1_4': {
    unitId: 'sci_3_1_4',
    unitName: '4. 지구의 모습',
    periods: [
      { id: 'sci_3_1_4_1', period: 1, title: '지구의 모양 알아보기', objectives: ['지구의 모양을 알 수 있다.'], achievementStandards: ['[4과07-01] 지구와 관련된 자료를 조사하여 지구의 모양을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_4_2', period: 2, title: '지구의 육지와 바다', objectives: ['지구 표면의 육지와 바다의 특징을 설명할 수 있다.'], achievementStandards: ['[4과07-01] 지구와 관련된 자료를 조사하여 지구의 모양을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_4_3', period: 3, title: '지구의 공기', objectives: ['지구를 둘러싼 공기의 역할을 설명할 수 있다.'], achievementStandards: ['[4과07-02] 지구 표면을 덮고 있는 물과 공기의 역할을 예를 들어 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_4_4', period: 4, title: '지구의 물', objectives: ['지구의 물의 역할을 설명할 수 있다.'], achievementStandards: ['[4과07-02] 지구 표면을 덮고 있는 물과 공기의 역할을 예를 들어 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_4_5', period: 5, title: '달의 모양과 표면', objectives: ['달의 모양과 표면의 특징을 알 수 있다.'], achievementStandards: ['[4과07-03] 달의 표면 모습을 지구의 표면과 비교하여 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_1_4_6', period: 6, title: '지구와 달 비교하기', objectives: ['지구와 달의 모습을 비교할 수 있다.'], achievementStandards: ['[4과07-03] 달의 표면 모습을 지구의 표면과 비교하여 설명할 수 있다.'], duration: 40 },
    ]
  },
  // 2학기
  'sci_3_2_1': {
    unitId: 'sci_3_2_1',
    unitName: '1. 재미있는 나의 탐구',
    periods: [
      { id: 'sci_3_2_1_1', period: 1, title: '탐구 문제 정하기', objectives: ['탐구하고 싶은 문제를 정할 수 있다.'], achievementStandards: ['[4과18-01] 궁금한 점이나 문제를 해결하기 위해 호기심을 가지고 탐구하는 태도를 기른다.'], duration: 40 },
      { id: 'sci_3_2_1_2', period: 2, title: '탐구 계획 세우기', objectives: ['탐구 계획을 세울 수 있다.'], achievementStandards: ['[4과18-02] 과학적 문제 해결 방법을 익히고 일상생활의 문제를 해결하는 데 활용한다.'], duration: 40 },
      { id: 'sci_3_2_1_3', period: 3, title: '탐구 실행하기', objectives: ['탐구 계획에 따라 탐구를 실행할 수 있다.'], achievementStandards: ['[4과18-02] 과학적 문제 해결 방법을 익히고 일상생활의 문제를 해결하는 데 활용한다.'], duration: 40 },
      { id: 'sci_3_2_1_4', period: 4, title: '탐구 결과 발표하기', objectives: ['탐구 결과를 정리하여 발표할 수 있다.'], achievementStandards: ['[4과18-03] 다른 사람의 의견을 존중하고 협력하여 문제를 해결한다.'], duration: 40 },
    ]
  },
  'sci_3_2_2': {
    unitId: 'sci_3_2_2',
    unitName: '2. 동물의 생활',
    periods: [
      { id: 'sci_3_2_2_1', period: 1, title: '주변의 동물 관찰하기', objectives: ['주변에서 동물을 찾아 관찰할 수 있다.'], achievementStandards: ['[4과02-01] 동물을 관찰하여 생김새와 생활 방식이 환경과 관련되어 있음을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_2_2', period: 2, title: '동물의 생김새와 생활 방식', objectives: ['동물의 생김새와 생활 방식의 관계를 알 수 있다.'], achievementStandards: ['[4과02-01] 동물을 관찰하여 생김새와 생활 방식이 환경과 관련되어 있음을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_2_3', period: 3, title: '사는 곳에 따른 동물 분류', objectives: ['사는 곳에 따라 동물을 분류할 수 있다.'], achievementStandards: ['[4과02-02] 동물을 여러 가지 기준으로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_2_4', period: 4, title: '생김새에 따른 동물 분류', objectives: ['생김새에 따라 동물을 분류할 수 있다.'], achievementStandards: ['[4과02-02] 동물을 여러 가지 기준으로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_2_5', period: 5, title: '동물의 특징과 환경', objectives: ['동물의 특징이 환경과 관련됨을 설명할 수 있다.'], achievementStandards: ['[4과02-01] 동물을 관찰하여 생김새와 생활 방식이 환경과 관련되어 있음을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_2_6', period: 6, title: '동물 보호하기', objectives: ['동물을 보호해야 하는 이유를 알 수 있다.'], achievementStandards: ['[4과02-03] 동물의 생활을 조사하여 동물의 소중함을 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_3_2_3': {
    unitId: 'sci_3_2_3',
    unitName: '3. 지표의 변화',
    periods: [
      { id: 'sci_3_2_3_1', period: 1, title: '흙이 만들어지는 과정', objectives: ['흙이 만들어지는 과정을 설명할 수 있다.'], achievementStandards: ['[4과08-01] 자연 현상이나 일상에서 풍화 작용의 예를 찾고, 암석이 작은 알갱이로 부서지는 현상을 탐구할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_3_2', period: 2, title: '흙의 종류와 특징', objectives: ['여러 가지 흙의 특징을 비교할 수 있다.'], achievementStandards: ['[4과08-01] 자연 현상이나 일상에서 풍화 작용의 예를 찾고, 암석이 작은 알갱이로 부서지는 현상을 탐구할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_3_3', period: 3, title: '흐르는 물의 작용', objectives: ['흐르는 물에 의해 지표가 변하는 것을 알 수 있다.'], achievementStandards: ['[4과08-02] 흐르는 물의 침식, 운반, 퇴적 작용을 알고, 강 주변의 모습이 어떻게 변하는지 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_3_4', period: 4, title: '강 주변 지형의 특징', objectives: ['강 주변의 다양한 지형을 설명할 수 있다.'], achievementStandards: ['[4과08-02] 흐르는 물의 침식, 운반, 퇴적 작용을 알고, 강 주변의 모습이 어떻게 변하는지 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_3_5', period: 5, title: '바닷가 지형의 특징', objectives: ['바닷가 주변의 다양한 지형을 설명할 수 있다.'], achievementStandards: ['[4과08-03] 바닷가 주변의 지형 변화를 파도에 의한 침식·운반·퇴적 작용과 관련지어 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_3_6', period: 6, title: '흙의 소중함', objectives: ['흙을 보존하는 방법을 제안할 수 있다.'], achievementStandards: ['[4과08-04] 일상생활에서 흙을 보존하는 방안을 제안할 수 있다.'], duration: 40 },
    ]
  },
  'sci_3_2_4': {
    unitId: 'sci_3_2_4',
    unitName: '4. 물질의 상태',
    periods: [
      { id: 'sci_3_2_4_1', period: 1, title: '고체의 성질 알아보기', objectives: ['고체의 성질을 알 수 있다.'], achievementStandards: ['[4과04-01] 여러 가지 물질을 고체, 액체, 기체로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_4_2', period: 2, title: '액체의 성질 알아보기', objectives: ['액체의 성질을 알 수 있다.'], achievementStandards: ['[4과04-01] 여러 가지 물질을 고체, 액체, 기체로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_4_3', period: 3, title: '기체의 성질 알아보기', objectives: ['기체의 성질을 알 수 있다.'], achievementStandards: ['[4과04-01] 여러 가지 물질을 고체, 액체, 기체로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_4_4', period: 4, title: '물질의 상태 분류하기', objectives: ['여러 가지 물질을 상태에 따라 분류할 수 있다.'], achievementStandards: ['[4과04-01] 여러 가지 물질을 고체, 액체, 기체로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_4_5', period: 5, title: '기체가 공간을 차지함', objectives: ['기체가 공간을 차지한다는 것을 알 수 있다.'], achievementStandards: ['[4과04-02] 기체가 공간을 차지하고 있음을 관찰하고, 공기가 빠지거나 들어감에 따라 물체의 부피가 달라짐을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_4_6', period: 6, title: '공기의 무게', objectives: ['공기가 무게가 있음을 알 수 있다.'], achievementStandards: ['[4과04-03] 무게를 가진 공기가 물체를 밀어내는 성질을 이용하여 생활 속 사례를 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_3_2_5': {
    unitId: 'sci_3_2_5',
    unitName: '5. 소리의 성질',
    periods: [
      { id: 'sci_3_2_5_1', period: 1, title: '소리가 나는 물체 관찰하기', objectives: ['소리가 나는 물체의 공통점을 찾을 수 있다.'], achievementStandards: ['[4과10-01] 소리가 나는 물체의 공통적인 특징을 관찰하여 소리가 물체의 떨림에 의해 발생함을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_5_2', period: 2, title: '소리의 발생', objectives: ['소리가 물체의 떨림에 의해 발생함을 알 수 있다.'], achievementStandards: ['[4과10-01] 소리가 나는 물체의 공통적인 특징을 관찰하여 소리가 물체의 떨림에 의해 발생함을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_5_3', period: 3, title: '큰 소리와 작은 소리', objectives: ['소리의 세기를 비교할 수 있다.'], achievementStandards: ['[4과10-02] 소리의 세기와 높낮이가 활용되는 경우를 찾아 그 특성을 비교할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_5_4', period: 4, title: '높은 소리와 낮은 소리', objectives: ['소리의 높낮이를 비교할 수 있다.'], achievementStandards: ['[4과10-02] 소리의 세기와 높낮이가 활용되는 경우를 찾아 그 특성을 비교할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_5_5', period: 5, title: '소리의 전달', objectives: ['소리가 전달되는 과정을 설명할 수 있다.'], achievementStandards: ['[4과10-03] 여러 가지 물질을 통하여 소리가 전달됨을 탐구하고, 소음을 줄이는 방법을 제안할 수 있다.'], duration: 40 },
      { id: 'sci_3_2_5_6', period: 6, title: '소리의 반사', objectives: ['소리가 반사되는 현상을 알 수 있다.'], achievementStandards: ['[4과10-03] 여러 가지 물질을 통하여 소리가 전달됨을 탐구하고, 소음을 줄이는 방법을 제안할 수 있다.'], duration: 40 },
    ]
  },
};

// ==================== 과학 4학년 ====================
export const SCIENCE_4_LESSONS: Record<string, UnitLessons> = {
  // 1학기
  'sci_4_1_1': {
    unitId: 'sci_4_1_1',
    unitName: '1. 지층과 화석',
    periods: [
      { id: 'sci_4_1_1_1', period: 1, title: '지층 관찰하기', objectives: ['지층을 관찰하고 특징을 설명할 수 있다.'], achievementStandards: ['[4과06-01] 여러 가지 지층을 관찰하고, 지층의 형성 과정을 모형을 통해 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_1_2', period: 2, title: '지층이 만들어지는 과정', objectives: ['지층이 만들어지는 과정을 설명할 수 있다.'], achievementStandards: ['[4과06-01] 여러 가지 지층을 관찰하고, 지층의 형성 과정을 모형을 통해 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_1_3', period: 3, title: '퇴적암의 종류', objectives: ['여러 가지 퇴적암의 특징을 비교할 수 있다.'], achievementStandards: ['[4과06-02] 퇴적암을 알갱이의 크기에 따라 분류할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_1_4', period: 4, title: '화석 관찰하기', objectives: ['화석을 관찰하고 특징을 설명할 수 있다.'], achievementStandards: ['[4과06-03] 화석을 관찰하고 화석이 만들어지는 과정을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_1_5', period: 5, title: '화석이 만들어지는 과정', objectives: ['화석이 만들어지는 과정을 설명할 수 있다.'], achievementStandards: ['[4과06-03] 화석을 관찰하고 화석이 만들어지는 과정을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_1_6', period: 6, title: '화석의 이용', objectives: ['화석을 통해 알 수 있는 것을 설명할 수 있다.'], achievementStandards: ['[4과06-04] 화석이 우리 생활에 어떻게 이용되는지 예를 들어 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_4_1_2': {
    unitId: 'sci_4_1_2',
    unitName: '2. 식물의 한살이',
    periods: [
      { id: 'sci_4_1_2_1', period: 1, title: '씨가 싹트는 조건', objectives: ['씨가 싹트는 데 필요한 조건을 알 수 있다.'], achievementStandards: ['[4과05-01] 씨가 싹트는 데 필요한 조건을 탐구하여 알 수 있다.'], duration: 40 },
      { id: 'sci_4_1_2_2', period: 2, title: '식물의 자라는 데 필요한 조건', objectives: ['식물이 자라는 데 필요한 조건을 알 수 있다.'], achievementStandards: ['[4과05-01] 씨가 싹트는 데 필요한 조건을 탐구하여 알 수 있다.'], duration: 40 },
      { id: 'sci_4_1_2_3', period: 3, title: '강낭콩의 한살이 관찰 계획', objectives: ['강낭콩의 한살이 관찰 계획을 세울 수 있다.'], achievementStandards: ['[4과05-02] 식물의 한살이 관찰 계획을 세우고 한살이를 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_2_4', period: 4, title: '씨가 싹트는 과정', objectives: ['씨가 싹트는 과정을 관찰할 수 있다.'], achievementStandards: ['[4과05-02] 식물의 한살이 관찰 계획을 세우고 한살이를 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_2_5', period: 5, title: '식물의 자라는 과정', objectives: ['식물이 자라는 과정을 관찰할 수 있다.'], achievementStandards: ['[4과05-02] 식물의 한살이 관찰 계획을 세우고 한살이를 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_2_6', period: 6, title: '꽃이 피고 열매를 맺는 과정', objectives: ['꽃이 피고 열매를 맺는 과정을 관찰할 수 있다.'], achievementStandards: ['[4과05-02] 식물의 한살이 관찰 계획을 세우고 한살이를 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_2_7', period: 7, title: '여러 가지 식물의 한살이', objectives: ['여러 가지 식물의 한살이를 비교할 수 있다.'], achievementStandards: ['[4과05-03] 여러 가지 식물의 한살이 과정을 조사하여 비교할 수 있다.'], duration: 40 },
    ]
  },
  'sci_4_1_3': {
    unitId: 'sci_4_1_3',
    unitName: '3. 물체의 무게',
    periods: [
      { id: 'sci_4_1_3_1', period: 1, title: '물체의 무게 비교하기', objectives: ['여러 가지 방법으로 물체의 무게를 비교할 수 있다.'], achievementStandards: ['[4과11-01] 물체를 들거나 수평 잡기를 통해 물체의 무게를 비교할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_3_2', period: 2, title: '수평 잡기로 무게 비교', objectives: ['수평 잡기를 이용하여 물체의 무게를 비교할 수 있다.'], achievementStandards: ['[4과11-01] 물체를 들거나 수평 잡기를 통해 물체의 무게를 비교할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_3_3', period: 3, title: '용수철을 이용한 무게 측정', objectives: ['용수철의 성질을 이용하여 무게를 측정할 수 있다.'], achievementStandards: ['[4과11-02] 용수철이나 고무줄이 늘어난 길이를 이용하여 물체의 무게를 비교하는 방법을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_3_4', period: 4, title: '용수철저울 만들기', objectives: ['용수철저울을 만들 수 있다.'], achievementStandards: ['[4과11-02] 용수철이나 고무줄이 늘어난 길이를 이용하여 물체의 무게를 비교하는 방법을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_3_5', period: 5, title: '저울로 무게 측정하기', objectives: ['여러 가지 저울로 물체의 무게를 측정할 수 있다.'], achievementStandards: ['[4과11-03] 양팔저울, 윗접시 저울, 전자저울을 이용하여 물체의 무게를 정확하게 측정할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_3_6', period: 6, title: '무게의 단위', objectives: ['무게의 단위를 알고 사용할 수 있다.'], achievementStandards: ['[4과11-03] 양팔저울, 윗접시 저울, 전자저울을 이용하여 물체의 무게를 정확하게 측정할 수 있다.'], duration: 40 },
    ]
  },
  'sci_4_1_4': {
    unitId: 'sci_4_1_4',
    unitName: '4. 혼합물의 분리',
    periods: [
      { id: 'sci_4_1_4_1', period: 1, title: '혼합물 알아보기', objectives: ['혼합물의 의미를 알 수 있다.'], achievementStandards: ['[4과12-01] 여러 가지 물질의 혼합 과정을 통해 혼합물의 의미를 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_4_2', period: 2, title: '혼합물을 분리하는 까닭', objectives: ['혼합물을 분리해야 하는 이유를 알 수 있다.'], achievementStandards: ['[4과12-01] 여러 가지 물질의 혼합 과정을 통해 혼합물의 의미를 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_4_3', period: 3, title: '알갱이 크기로 분리하기', objectives: ['알갱이의 크기 차이를 이용하여 혼합물을 분리할 수 있다.'], achievementStandards: ['[4과12-02] 혼합물의 성질을 이용하여 혼합물을 분리할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_4_4', period: 4, title: '자석으로 분리하기', objectives: ['자석을 이용하여 혼합물을 분리할 수 있다.'], achievementStandards: ['[4과12-02] 혼합물의 성질을 이용하여 혼합물을 분리할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_4_5', period: 5, title: '물에 뜨는 성질로 분리하기', objectives: ['물에 뜨는 성질을 이용하여 혼합물을 분리할 수 있다.'], achievementStandards: ['[4과12-02] 혼합물의 성질을 이용하여 혼합물을 분리할 수 있다.'], duration: 40 },
      { id: 'sci_4_1_4_6', period: 6, title: '거름과 증발로 분리하기', objectives: ['거름과 증발을 이용하여 혼합물을 분리할 수 있다.'], achievementStandards: ['[4과12-02] 혼합물의 성질을 이용하여 혼합물을 분리할 수 있다.'], duration: 40 },
    ]
  },
  // 2학기
  'sci_4_2_1': {
    unitId: 'sci_4_2_1',
    unitName: '1. 식물의 생활',
    periods: [
      { id: 'sci_4_2_1_1', period: 1, title: '식물 관찰하기', objectives: ['주변의 식물을 관찰할 수 있다.'], achievementStandards: ['[4과04-01] 식물을 관찰하여 생김새와 생활 방식이 환경과 관련되어 있음을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_1_2', period: 2, title: '들과 산의 식물', objectives: ['들과 산에 사는 식물의 특징을 알 수 있다.'], achievementStandards: ['[4과04-01] 식물을 관찰하여 생김새와 생활 방식이 환경과 관련되어 있음을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_1_3', period: 3, title: '연못과 강의 식물', objectives: ['연못과 강에 사는 식물의 특징을 알 수 있다.'], achievementStandards: ['[4과04-01] 식물을 관찰하여 생김새와 생활 방식이 환경과 관련되어 있음을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_1_4', period: 4, title: '식물의 특징과 환경', objectives: ['식물의 생김새가 환경과 관련됨을 알 수 있다.'], achievementStandards: ['[4과04-01] 식물을 관찰하여 생김새와 생활 방식이 환경과 관련되어 있음을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_1_5', period: 5, title: '식물을 분류하는 기준', objectives: ['여러 가지 기준으로 식물을 분류할 수 있다.'], achievementStandards: ['[4과04-02] 식물을 여러 가지 기준으로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_1_6', period: 6, title: '식물의 소중함', objectives: ['식물의 소중함을 알고 보호하는 방법을 제안할 수 있다.'], achievementStandards: ['[4과04-03] 식물의 생활을 조사하여 식물의 소중함을 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_4_2_2': {
    unitId: 'sci_4_2_2',
    unitName: '2. 물의 상태 변화',
    periods: [
      { id: 'sci_4_2_2_1', period: 1, title: '물의 세 가지 상태', objectives: ['물의 세 가지 상태를 알 수 있다.'], achievementStandards: ['[4과13-01] 물이 증발하여 수증기로 변하는 현상을 관찰하고, 물과 수증기의 공통점과 차이점을 비교할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_2_2', period: 2, title: '물의 증발', objectives: ['물이 증발하는 현상을 알 수 있다.'], achievementStandards: ['[4과13-01] 물이 증발하여 수증기로 변하는 현상을 관찰하고, 물과 수증기의 공통점과 차이점을 비교할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_2_3', period: 3, title: '물의 끓음', objectives: ['물이 끓는 현상을 알 수 있다.'], achievementStandards: ['[4과13-02] 물이 끓을 때 나타나는 현상을 관찰하고 물이 수증기로 변하는 현상을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_2_4', period: 4, title: '수증기가 물로 변하는 현상', objectives: ['수증기가 물로 변하는 현상을 알 수 있다.'], achievementStandards: ['[4과13-03] 공기 중의 수증기가 물로 변하여 나타나는 자연 현상의 예를 알 수 있다.'], duration: 40 },
      { id: 'sci_4_2_2_5', period: 5, title: '물이 얼 때와 얼음이 녹을 때', objectives: ['물이 얼 때와 얼음이 녹을 때의 변화를 알 수 있다.'], achievementStandards: ['[4과13-04] 물이 얼 때와 얼음이 녹을 때의 변화를 관찰하고 그 현상을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_2_6', period: 6, title: '물의 상태 변화와 생활', objectives: ['물의 상태 변화가 생활에 이용되는 예를 알 수 있다.'], achievementStandards: ['[4과13-05] 물의 상태 변화를 이용한 예를 조사하여 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_4_2_3': {
    unitId: 'sci_4_2_3',
    unitName: '3. 그림자와 거울',
    periods: [
      { id: 'sci_4_2_3_1', period: 1, title: '그림자가 생기는 조건', objectives: ['그림자가 생기는 조건을 알 수 있다.'], achievementStandards: ['[4과14-01] 빛이 나아가는 현상을 관찰하여 빛이 직진하는 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_3_2', period: 2, title: '그림자의 크기 변화', objectives: ['그림자의 크기가 변하는 조건을 알 수 있다.'], achievementStandards: ['[4과14-01] 빛이 나아가는 현상을 관찰하여 빛이 직진하는 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_3_3', period: 3, title: '빛의 직진', objectives: ['빛이 직진하는 성질을 알 수 있다.'], achievementStandards: ['[4과14-01] 빛이 나아가는 현상을 관찰하여 빛이 직진하는 성질을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_3_4', period: 4, title: '거울에 비친 모습', objectives: ['거울에 비친 물체의 모습을 알 수 있다.'], achievementStandards: ['[4과14-02] 여러 가지 물체에 빛을 비추어 보고 빛이 반사되는 현상을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_3_5', period: 5, title: '빛의 반사', objectives: ['빛이 반사되는 현상을 알 수 있다.'], achievementStandards: ['[4과14-02] 여러 가지 물체에 빛을 비추어 보고 빛이 반사되는 현상을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_3_6', period: 6, title: '거울의 이용', objectives: ['거울을 이용한 예를 찾을 수 있다.'], achievementStandards: ['[4과14-03] 거울을 이용하여 햇빛이나 전등의 빛을 반사시키고, 생활 속에서 거울을 이용하는 예를 찾아 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_4_2_4': {
    unitId: 'sci_4_2_4',
    unitName: '4. 화산과 지진',
    periods: [
      { id: 'sci_4_2_4_1', period: 1, title: '화산 활동 알아보기', objectives: ['화산 활동으로 나오는 물질을 알 수 있다.'], achievementStandards: ['[4과15-01] 화산 활동으로 나오는 여러 가지 물질을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_4_2', period: 2, title: '화산 분출물', objectives: ['화산 분출물의 종류를 알 수 있다.'], achievementStandards: ['[4과15-01] 화산 활동으로 나오는 여러 가지 물질을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_4_3', period: 3, title: '화성암의 종류', objectives: ['화성암의 종류와 특징을 알 수 있다.'], achievementStandards: ['[4과15-02] 화성암의 종류를 알고 만들어지는 과정을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_4_4', period: 4, title: '화산 활동의 영향', objectives: ['화산 활동이 우리 생활에 미치는 영향을 알 수 있다.'], achievementStandards: ['[4과15-03] 화산 활동이 우리 생활에 미치는 영향을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_4_5', period: 5, title: '지진 발생과 피해', objectives: ['지진이 발생하는 원인과 피해를 알 수 있다.'], achievementStandards: ['[4과15-04] 지진의 의미와 지진이 발생하는 이유를 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_4_6', period: 6, title: '지진 대처 방법', objectives: ['지진 발생 시 대처 방법을 알 수 있다.'], achievementStandards: ['[4과15-05] 지진이 발생했을 때 대처하는 방법을 알고 실천할 수 있다.'], duration: 40 },
    ]
  },
  'sci_4_2_5': {
    unitId: 'sci_4_2_5',
    unitName: '5. 물의 여행',
    periods: [
      { id: 'sci_4_2_5_1', period: 1, title: '물의 순환', objectives: ['물이 순환하는 과정을 알 수 있다.'], achievementStandards: ['[4과16-01] 물이 지구 곳곳을 순환하는 과정을 모형을 통해 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_5_2', period: 2, title: '물의 순환 모형 만들기', objectives: ['물의 순환 모형을 만들 수 있다.'], achievementStandards: ['[4과16-01] 물이 지구 곳곳을 순환하는 과정을 모형을 통해 설명할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_5_3', period: 3, title: '물의 중요성', objectives: ['물의 중요성을 알 수 있다.'], achievementStandards: ['[4과16-02] 물의 중요성을 알고 물 부족 현상을 해결하기 위해 자신이 할 수 있는 일을 제안할 수 있다.'], duration: 40 },
      { id: 'sci_4_2_5_4', period: 4, title: '물 부족 현상과 해결 방안', objectives: ['물 부족 현상을 해결하는 방법을 제안할 수 있다.'], achievementStandards: ['[4과16-02] 물의 중요성을 알고 물 부족 현상을 해결하기 위해 자신이 할 수 있는 일을 제안할 수 있다.'], duration: 40 },
    ]
  },
};

// ==================== 과학 5학년 ====================
export const SCIENCE_5_LESSONS: Record<string, UnitLessons> = {
  // 1학기
  'sci_5_1_1': {
    unitId: 'sci_5_1_1',
    unitName: '1. 과학자는 어떻게 탐구할까요?',
    periods: [
      { id: 'sci_5_1_1_1', period: 1, title: '탐구 문제 찾기', objectives: ['일상생활에서 탐구 문제를 찾을 수 있다.'], achievementStandards: ['[6과01-01] 과학적 탐구에 호기심과 흥미를 가지고 참여한다.'], duration: 40 },
      { id: 'sci_5_1_1_2', period: 2, title: '가설 세우기', objectives: ['탐구 문제에 대한 가설을 세울 수 있다.'], achievementStandards: ['[6과01-02] 과학적 문제 해결 방법으로 탐구 설계를 할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_1_3', period: 3, title: '변인 통제하기', objectives: ['탐구에서 변인을 통제할 수 있다.'], achievementStandards: ['[6과01-02] 과학적 문제 해결 방법으로 탐구 설계를 할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_1_4', period: 4, title: '탐구 결과 정리하기', objectives: ['탐구 결과를 정리하고 결론을 내릴 수 있다.'], achievementStandards: ['[6과01-03] 과학 탐구의 결과를 증거에 기초하여 해석하고 결론을 도출할 수 있다.'], duration: 40 },
    ]
  },
  'sci_5_1_2': {
    unitId: 'sci_5_1_2',
    unitName: '2. 온도와 열',
    periods: [
      { id: 'sci_5_1_2_1', period: 1, title: '온도 측정하기', objectives: ['온도를 측정하고 비교할 수 있다.'], achievementStandards: ['[6과05-01] 온도가 다른 두 물체를 접촉시켜 온도 변화를 측정하고, 열평형 상태를 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_2_2', period: 2, title: '온도가 다른 물체의 접촉', objectives: ['온도가 다른 두 물체를 접촉시킬 때 온도 변화를 알 수 있다.'], achievementStandards: ['[6과05-01] 온도가 다른 두 물체를 접촉시켜 온도 변화를 측정하고, 열평형 상태를 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_2_3', period: 3, title: '열의 이동', objectives: ['열이 이동하는 방향을 알 수 있다.'], achievementStandards: ['[6과05-02] 고체, 액체, 기체에서 열이 전달되는 방식을 비교하여 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_2_4', period: 4, title: '고체에서 열의 이동', objectives: ['고체에서 열이 전달되는 방식을 알 수 있다.'], achievementStandards: ['[6과05-02] 고체, 액체, 기체에서 열이 전달되는 방식을 비교하여 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_2_5', period: 5, title: '액체와 기체에서 열의 이동', objectives: ['액체와 기체에서 열이 전달되는 방식을 알 수 있다.'], achievementStandards: ['[6과05-02] 고체, 액체, 기체에서 열이 전달되는 방식을 비교하여 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_2_6', period: 6, title: '단열의 이용', objectives: ['단열이 이용되는 예를 찾을 수 있다.'], achievementStandards: ['[6과05-03] 일상생활에서 단열을 이용하는 예를 찾아 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_5_1_3': {
    unitId: 'sci_5_1_3',
    unitName: '3. 태양계와 별',
    periods: [
      { id: 'sci_5_1_3_1', period: 1, title: '태양계 행성 알아보기', objectives: ['태양계를 구성하는 행성을 알 수 있다.'], achievementStandards: ['[6과09-01] 태양과 행성을 조사하여 태양계를 구성하는 천체의 특징을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_3_2', period: 2, title: '태양계 행성의 크기 비교', objectives: ['태양계 행성의 크기를 비교할 수 있다.'], achievementStandards: ['[6과09-01] 태양과 행성을 조사하여 태양계를 구성하는 천체의 특징을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_3_3', period: 3, title: '태양계 행성의 거리 비교', objectives: ['태양에서 행성까지의 거리를 비교할 수 있다.'], achievementStandards: ['[6과09-02] 태양에서 행성까지의 상대적 거리를 비교할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_3_4', period: 4, title: '별과 별자리', objectives: ['별과 별자리의 의미를 알 수 있다.'], achievementStandards: ['[6과09-03] 별의 의미를 알고, 밝기와 색이 다양하다는 것을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_3_5', period: 5, title: '북두칠성과 북극성', objectives: ['북두칠성으로 북극성을 찾을 수 있다.'], achievementStandards: ['[6과09-04] 북두칠성을 이용하여 북극성을 찾을 수 있다.'], duration: 40 },
      { id: 'sci_5_1_3_6', period: 6, title: '계절에 따른 별자리', objectives: ['계절에 따라 보이는 별자리가 달라지는 이유를 알 수 있다.'], achievementStandards: ['[6과09-05] 계절에 따라 보이는 별자리가 달라지는 이유를 지구의 공전으로 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_5_1_4': {
    unitId: 'sci_5_1_4',
    unitName: '4. 용해와 용액',
    periods: [
      { id: 'sci_5_1_4_1', period: 1, title: '용해와 용액', objectives: ['용해와 용액의 의미를 알 수 있다.'], achievementStandards: ['[6과06-01] 용해 전후의 물질의 양을 비교하고, 용해 현상을 입자의 개념으로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_4_2', period: 2, title: '용해 전후 무게 비교', objectives: ['용해 전후 물질의 무게를 비교할 수 있다.'], achievementStandards: ['[6과06-01] 용해 전후의 물질의 양을 비교하고, 용해 현상을 입자의 개념으로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_4_3', period: 3, title: '용질의 종류에 따른 용해', objectives: ['용질의 종류에 따라 녹는 양이 다름을 알 수 있다.'], achievementStandards: ['[6과06-02] 용질의 종류에 따라 녹는 양이 다름을 비교하여 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_4_4', period: 4, title: '온도에 따른 용해', objectives: ['온도에 따라 녹는 양이 달라짐을 알 수 있다.'], achievementStandards: ['[6과06-03] 물의 온도에 따라 용질이 녹는 양이 달라짐을 비교할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_4_5', period: 5, title: '진한 용액과 묽은 용액', objectives: ['용액의 진하기를 비교할 수 있다.'], achievementStandards: ['[6과06-04] 용액의 진하기를 비교하는 방법을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_4_6', period: 6, title: '용해와 생활', objectives: ['용해가 생활에 이용되는 예를 찾을 수 있다.'], achievementStandards: ['[6과06-05] 일상생활에서 용해가 이용되는 예를 찾아 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_5_1_5': {
    unitId: 'sci_5_1_5',
    unitName: '5. 다양한 생물과 우리 생활',
    periods: [
      { id: 'sci_5_1_5_1', period: 1, title: '곰팡이와 버섯', objectives: ['곰팡이와 버섯의 특징을 알 수 있다.'], achievementStandards: ['[6과03-01] 곰팡이, 버섯 등 균류의 특징을 관찰하고 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_5_2', period: 2, title: '짚신벌레와 해캄', objectives: ['짚신벌레와 해캄의 특징을 알 수 있다.'], achievementStandards: ['[6과03-02] 세균의 특징을 조사하고 세균이 우리 생활에 미치는 영향을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_5_3', period: 3, title: '세균', objectives: ['세균의 특징을 알 수 있다.'], achievementStandards: ['[6과03-02] 세균의 특징을 조사하고 세균이 우리 생활에 미치는 영향을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_5_4', period: 4, title: '다양한 생물의 이용', objectives: ['다양한 생물이 우리 생활에 이용되는 예를 알 수 있다.'], achievementStandards: ['[6과03-03] 다양한 생물이 우리 생활에 미치는 영향을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_1_5_5', period: 5, title: '첨단 기술과 생물', objectives: ['첨단 기술에 생물이 이용되는 예를 알 수 있다.'], achievementStandards: ['[6과03-04] 첨단 기술에 생물이 이용되는 예를 조사하여 설명할 수 있다.'], duration: 40 },
    ]
  },
  // 2학기
  'sci_5_2_1': {
    unitId: 'sci_5_2_1',
    unitName: '1. 재미있는 나의 탐구',
    periods: [
      { id: 'sci_5_2_1_1', period: 1, title: '탐구 주제 정하기', objectives: ['탐구 주제를 정할 수 있다.'], achievementStandards: ['[6과01-01] 과학적 탐구에 호기심과 흥미를 가지고 참여한다.'], duration: 40 },
      { id: 'sci_5_2_1_2', period: 2, title: '탐구 계획 세우기', objectives: ['탐구 계획을 세울 수 있다.'], achievementStandards: ['[6과01-02] 과학적 문제 해결 방법으로 탐구 설계를 할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_1_3', period: 3, title: '탐구 수행하기', objectives: ['탐구를 수행하고 결과를 기록할 수 있다.'], achievementStandards: ['[6과01-03] 과학 탐구의 결과를 증거에 기초하여 해석하고 결론을 도출할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_1_4', period: 4, title: '탐구 결과 발표하기', objectives: ['탐구 결과를 정리하여 발표할 수 있다.'], achievementStandards: ['[6과01-04] 과학 탐구 결과를 발표하고 서로의 결과를 비교할 수 있다.'], duration: 40 },
    ]
  },
  'sci_5_2_2': {
    unitId: 'sci_5_2_2',
    unitName: '2. 생물과 환경',
    periods: [
      { id: 'sci_5_2_2_1', period: 1, title: '생태계 알아보기', objectives: ['생태계의 의미와 구성 요소를 알 수 있다.'], achievementStandards: ['[6과04-01] 생태계의 구성 요소인 생물 요소와 비생물 요소를 알고 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_2_2', period: 2, title: '생물 요소 사이의 관계', objectives: ['생물 요소 사이의 관계를 알 수 있다.'], achievementStandards: ['[6과04-02] 생태계 내에서 생물들 사이의 먹이 관계를 먹이 사슬과 먹이 그물로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_2_3', period: 3, title: '먹이 사슬과 먹이 그물', objectives: ['먹이 사슬과 먹이 그물을 설명할 수 있다.'], achievementStandards: ['[6과04-02] 생태계 내에서 생물들 사이의 먹이 관계를 먹이 사슬과 먹이 그물로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_2_4', period: 4, title: '생태계 평형', objectives: ['생태계 평형의 의미를 알 수 있다.'], achievementStandards: ['[6과04-03] 생태계 평형의 의미를 알고 생태계 평형이 깨지는 경우를 조사하여 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_2_5', period: 5, title: '환경 오염과 생물', objectives: ['환경 오염이 생물에 미치는 영향을 알 수 있다.'], achievementStandards: ['[6과04-04] 환경 오염이 생물에 미치는 영향을 조사하여 발표할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_2_6', period: 6, title: '환경 보전 실천하기', objectives: ['환경을 보전하기 위한 실천 방안을 제안할 수 있다.'], achievementStandards: ['[6과04-05] 환경을 보전하기 위한 실천 방안을 제안하고 실천할 수 있다.'], duration: 40 },
    ]
  },
  'sci_5_2_3': {
    unitId: 'sci_5_2_3',
    unitName: '3. 날씨와 우리 생활',
    periods: [
      { id: 'sci_5_2_3_1', period: 1, title: '습도와 우리 생활', objectives: ['습도의 의미와 측정 방법을 알 수 있다.'], achievementStandards: ['[6과08-01] 이슬, 안개, 구름의 공통점과 차이점을 비교할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_3_2', period: 2, title: '이슬과 안개', objectives: ['이슬과 안개가 생기는 원리를 알 수 있다.'], achievementStandards: ['[6과08-01] 이슬, 안개, 구름의 공통점과 차이점을 비교할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_3_3', period: 3, title: '구름과 비', objectives: ['구름과 비가 생기는 원리를 알 수 있다.'], achievementStandards: ['[6과08-02] 비와 눈이 만들어지는 과정을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_3_4', period: 4, title: '기압과 바람', objectives: ['기압과 바람의 관계를 알 수 있다.'], achievementStandards: ['[6과08-03] 기압의 변화에 따라 날씨가 달라짐을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_3_5', period: 5, title: '고기압과 저기압', objectives: ['고기압과 저기압에서의 날씨를 알 수 있다.'], achievementStandards: ['[6과08-03] 기압의 변화에 따라 날씨가 달라짐을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_3_6', period: 6, title: '날씨 예보', objectives: ['날씨 예보를 활용하는 방법을 알 수 있다.'], achievementStandards: ['[6과08-04] 우리나라 계절별 날씨의 특징을 이해하고 일상생활에 적용할 수 있다.'], duration: 40 },
    ]
  },
  'sci_5_2_4': {
    unitId: 'sci_5_2_4',
    unitName: '4. 물체의 운동',
    periods: [
      { id: 'sci_5_2_4_1', period: 1, title: '물체의 위치와 이동', objectives: ['물체의 위치를 나타내는 방법을 알 수 있다.'], achievementStandards: ['[6과10-01] 물체의 운동을 물체의 위치와 시간을 이용하여 나타낼 수 있다.'], duration: 40 },
      { id: 'sci_5_2_4_2', period: 2, title: '물체의 빠르기', objectives: ['물체의 빠르기를 비교할 수 있다.'], achievementStandards: ['[6과10-02] 물체의 이동 거리와 걸린 시간을 측정하여 물체의 빠르기를 비교할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_4_3', period: 3, title: '속력 구하기', objectives: ['물체의 속력을 계산할 수 있다.'], achievementStandards: ['[6과10-02] 물체의 이동 거리와 걸린 시간을 측정하여 물체의 빠르기를 비교할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_4_4', period: 4, title: '속력과 안전', objectives: ['속력과 안전의 관계를 알 수 있다.'], achievementStandards: ['[6과10-03] 일상생활에서 물체의 운동에 대한 탐구를 통해 속력과 안전의 관계를 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_5_2_5': {
    unitId: 'sci_5_2_5',
    unitName: '5. 산과 염기',
    periods: [
      { id: 'sci_5_2_5_1', period: 1, title: '지시약으로 용액 분류하기', objectives: ['지시약을 이용하여 용액을 분류할 수 있다.'], achievementStandards: ['[6과07-01] 지시약을 이용하여 여러 가지 용액을 산성과 염기성으로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_5_2', period: 2, title: '산성 용액과 염기성 용액', objectives: ['산성 용액과 염기성 용액의 특징을 알 수 있다.'], achievementStandards: ['[6과07-01] 지시약을 이용하여 여러 가지 용액을 산성과 염기성으로 분류할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_5_3', period: 3, title: '산성 용액에 금속을 넣으면', objectives: ['산성 용액에 금속을 넣었을 때의 변화를 알 수 있다.'], achievementStandards: ['[6과07-02] 산성 용액에 금속, 탄산칼슘(달걀 껍데기, 조개 등)을 넣을 때 나타나는 현상을 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_5_4', period: 4, title: '산성 용액에 탄산칼슘을 넣으면', objectives: ['산성 용액에 탄산칼슘을 넣었을 때의 변화를 알 수 있다.'], achievementStandards: ['[6과07-02] 산성 용액에 금속, 탄산칼슘(달걀 껍데기, 조개 등)을 넣을 때 나타나는 현상을 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_5_5', period: 5, title: '산성 용액과 염기성 용액 섞기', objectives: ['산성 용액과 염기성 용액을 섞었을 때의 변화를 알 수 있다.'], achievementStandards: ['[6과07-03] 산성 용액과 염기성 용액을 섞을 때 용액의 성질이 변하는 것을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_5_2_5_6', period: 6, title: '산과 염기의 이용', objectives: ['산과 염기가 우리 생활에 이용되는 예를 알 수 있다.'], achievementStandards: ['[6과07-04] 우리 주변에서 산과 염기를 이용하는 예를 찾아 설명할 수 있다.'], duration: 40 },
    ]
  },
};

// ==================== 과학 6학년 ====================
export const SCIENCE_6_LESSONS: Record<string, UnitLessons> = {
  // 1학기
  'sci_6_1_1': {
    unitId: 'sci_6_1_1',
    unitName: '1. 과학자처럼 탐구해 볼까요?',
    periods: [
      { id: 'sci_6_1_1_1', period: 1, title: '과학자의 탐구 방법', objectives: ['과학자가 탐구하는 방법을 알 수 있다.'], achievementStandards: ['[6과01-01] 과학적 탐구에 호기심과 흥미를 가지고 참여한다.'], duration: 40 },
      { id: 'sci_6_1_1_2', period: 2, title: '탐구 문제 정하기', objectives: ['탐구 문제를 정할 수 있다.'], achievementStandards: ['[6과01-02] 과학적 문제 해결 방법으로 탐구 설계를 할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_1_3', period: 3, title: '탐구 계획 세우기', objectives: ['탐구 계획을 세울 수 있다.'], achievementStandards: ['[6과01-02] 과학적 문제 해결 방법으로 탐구 설계를 할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_1_4', period: 4, title: '탐구 수행 및 결과 정리', objectives: ['탐구를 수행하고 결과를 정리할 수 있다.'], achievementStandards: ['[6과01-03] 과학 탐구의 결과를 증거에 기초하여 해석하고 결론을 도출할 수 있다.'], duration: 40 },
    ]
  },
  'sci_6_1_2': {
    unitId: 'sci_6_1_2',
    unitName: '2. 지구와 달의 운동',
    periods: [
      { id: 'sci_6_1_2_1', period: 1, title: '하루 동안 태양과 달의 위치 변화', objectives: ['하루 동안 태양과 달의 위치 변화를 알 수 있다.'], achievementStandards: ['[6과11-01] 하루 동안 태양과 달의 위치 변화를 관찰하여 지구의 자전을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_2_2', period: 2, title: '지구의 자전', objectives: ['지구의 자전과 낮과 밤의 관계를 알 수 있다.'], achievementStandards: ['[6과11-01] 하루 동안 태양과 달의 위치 변화를 관찰하여 지구의 자전을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_2_3', period: 3, title: '지구의 공전', objectives: ['지구의 공전과 계절 변화의 관계를 알 수 있다.'], achievementStandards: ['[6과11-02] 계절에 따른 태양의 남중 고도, 낮과 밤의 길이, 기온 변화를 지구의 공전으로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_2_4', period: 4, title: '계절이 변하는 이유', objectives: ['계절이 변하는 이유를 설명할 수 있다.'], achievementStandards: ['[6과11-02] 계절에 따른 태양의 남중 고도, 낮과 밤의 길이, 기온 변화를 지구의 공전으로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_2_5', period: 5, title: '달의 모양 변화', objectives: ['달의 모양이 변하는 이유를 알 수 있다.'], achievementStandards: ['[6과11-03] 달의 모양 변화를 달의 공전으로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_2_6', period: 6, title: '달의 공전', objectives: ['달의 공전 주기와 모양 변화를 설명할 수 있다.'], achievementStandards: ['[6과11-03] 달의 모양 변화를 달의 공전으로 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_6_1_3': {
    unitId: 'sci_6_1_3',
    unitName: '3. 여러 가지 기체',
    periods: [
      { id: 'sci_6_1_3_1', period: 1, title: '산소의 성질', objectives: ['산소의 성질을 알 수 있다.'], achievementStandards: ['[6과12-01] 산소와 이산화탄소를 발생시키고, 각 기체의 성질을 확인하는 실험을 할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_3_2', period: 2, title: '산소 발생시키기', objectives: ['산소를 발생시키는 방법을 알 수 있다.'], achievementStandards: ['[6과12-01] 산소와 이산화탄소를 발생시키고, 각 기체의 성질을 확인하는 실험을 할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_3_3', period: 3, title: '이산화탄소의 성질', objectives: ['이산화탄소의 성질을 알 수 있다.'], achievementStandards: ['[6과12-01] 산소와 이산화탄소를 발생시키고, 각 기체의 성질을 확인하는 실험을 할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_3_4', period: 4, title: '이산화탄소 발생시키기', objectives: ['이산화탄소를 발생시키는 방법을 알 수 있다.'], achievementStandards: ['[6과12-01] 산소와 이산화탄소를 발생시키고, 각 기체의 성질을 확인하는 실험을 할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_3_5', period: 5, title: '기체의 이용', objectives: ['여러 가지 기체가 우리 생활에 이용되는 예를 알 수 있다.'], achievementStandards: ['[6과12-02] 우리 생활에서 산소와 이산화탄소가 이용되는 예를 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_6_1_4': {
    unitId: 'sci_6_1_4',
    unitName: '4. 식물의 구조와 기능',
    periods: [
      { id: 'sci_6_1_4_1', period: 1, title: '뿌리의 구조와 기능', objectives: ['뿌리의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과02-01] 식물의 각 기관(뿌리, 줄기, 잎, 꽃, 열매)의 구조와 기능을 관찰하고 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_4_2', period: 2, title: '줄기의 구조와 기능', objectives: ['줄기의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과02-01] 식물의 각 기관(뿌리, 줄기, 잎, 꽃, 열매)의 구조와 기능을 관찰하고 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_4_3', period: 3, title: '잎의 구조와 기능', objectives: ['잎의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과02-01] 식물의 각 기관(뿌리, 줄기, 잎, 꽃, 열매)의 구조와 기능을 관찰하고 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_4_4', period: 4, title: '광합성', objectives: ['광합성의 의미와 과정을 알 수 있다.'], achievementStandards: ['[6과02-02] 식물의 잎에서 광합성이 일어남을 실험을 통해 확인하고, 광합성에 필요한 물질과 생성되는 물질을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_4_5', period: 5, title: '꽃의 구조와 기능', objectives: ['꽃의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과02-03] 식물이 번식하는 방법을 꽃의 구조와 관련지어 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_4_6', period: 6, title: '열매와 씨', objectives: ['열매와 씨가 생기는 과정을 알 수 있다.'], achievementStandards: ['[6과02-03] 식물이 번식하는 방법을 꽃의 구조와 관련지어 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_6_1_5': {
    unitId: 'sci_6_1_5',
    unitName: '5. 빛과 렌즈',
    periods: [
      { id: 'sci_6_1_5_1', period: 1, title: '빛의 직진과 반사', objectives: ['빛의 직진과 반사를 알 수 있다.'], achievementStandards: ['[6과13-01] 햇빛이 프리즘에 의해 여러 가지 색의 빛으로 나눠지는 현상을 관찰할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_5_2', period: 2, title: '빛의 굴절', objectives: ['빛이 굴절하는 현상을 알 수 있다.'], achievementStandards: ['[6과13-02] 빛이 공기와 물의 경계에서 굴절하는 현상을 관찰하고 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_5_3', period: 3, title: '볼록 렌즈의 특징', objectives: ['볼록 렌즈의 특징을 알 수 있다.'], achievementStandards: ['[6과13-03] 볼록 렌즈를 이용하여 물체의 모습이 다르게 보이는 현상을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_5_4', period: 4, title: '볼록 렌즈로 보이는 물체의 모습', objectives: ['볼록 렌즈로 보이는 물체의 모습을 관찰할 수 있다.'], achievementStandards: ['[6과13-03] 볼록 렌즈를 이용하여 물체의 모습이 다르게 보이는 현상을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_1_5_5', period: 5, title: '간이 사진기 만들기', objectives: ['간이 사진기를 만들어 볼 수 있다.'], achievementStandards: ['[6과13-04] 볼록 렌즈를 이용한 도구를 만들 수 있다.'], duration: 40 },
      { id: 'sci_6_1_5_6', period: 6, title: '렌즈의 이용', objectives: ['렌즈가 이용되는 예를 찾을 수 있다.'], achievementStandards: ['[6과13-04] 볼록 렌즈를 이용한 도구를 만들 수 있다.'], duration: 40 },
    ]
  },
  // 2학기
  'sci_6_2_1': {
    unitId: 'sci_6_2_1',
    unitName: '1. 전기의 이용',
    periods: [
      { id: 'sci_6_2_1_1', period: 1, title: '전기 부품 알아보기', objectives: ['전기 부품의 종류와 역할을 알 수 있다.'], achievementStandards: ['[6과14-01] 전구에 불이 켜지는 조건을 찾아 전기 회로를 구성하고, 전기가 흐르는 길을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_1_2', period: 2, title: '전기 회로 꾸미기', objectives: ['전기 회로를 꾸밀 수 있다.'], achievementStandards: ['[6과14-01] 전구에 불이 켜지는 조건을 찾아 전기 회로를 구성하고, 전기가 흐르는 길을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_1_3', period: 3, title: '전구의 연결 방법', objectives: ['전구를 직렬과 병렬로 연결할 수 있다.'], achievementStandards: ['[6과14-02] 전구의 연결 방법에 따른 전구의 밝기 차이를 비교하여 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_1_4', period: 4, title: '전구의 밝기 비교', objectives: ['전구의 연결 방법에 따른 밝기 차이를 알 수 있다.'], achievementStandards: ['[6과14-02] 전구의 연결 방법에 따른 전구의 밝기 차이를 비교하여 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_1_5', period: 5, title: '전기를 안전하게 사용하기', objectives: ['전기를 안전하게 사용하는 방법을 알 수 있다.'], achievementStandards: ['[6과14-03] 전기를 안전하게 사용하고 절약하는 방법을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_1_6', period: 6, title: '전기 절약하기', objectives: ['전기를 절약하는 방법을 알 수 있다.'], achievementStandards: ['[6과14-03] 전기를 안전하게 사용하고 절약하는 방법을 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_6_2_2': {
    unitId: 'sci_6_2_2',
    unitName: '2. 계절의 변화',
    periods: [
      { id: 'sci_6_2_2_1', period: 1, title: '태양 고도와 그림자 길이', objectives: ['태양 고도에 따른 그림자 길이 변화를 알 수 있다.'], achievementStandards: ['[6과11-04] 태양 고도, 그림자 길이, 기온을 측정하여 관계를 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_2_2', period: 2, title: '태양 고도와 기온', objectives: ['태양 고도와 기온의 관계를 알 수 있다.'], achievementStandards: ['[6과11-04] 태양 고도, 그림자 길이, 기온을 측정하여 관계를 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_2_3', period: 3, title: '계절에 따른 태양의 남중 고도', objectives: ['계절에 따른 태양의 남중 고도 변화를 알 수 있다.'], achievementStandards: ['[6과11-02] 계절에 따른 태양의 남중 고도, 낮과 밤의 길이, 기온 변화를 지구의 공전으로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_2_4', period: 4, title: '계절에 따른 낮과 밤의 길이', objectives: ['계절에 따른 낮과 밤의 길이 변화를 알 수 있다.'], achievementStandards: ['[6과11-02] 계절에 따른 태양의 남중 고도, 낮과 밤의 길이, 기온 변화를 지구의 공전으로 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_2_5', period: 5, title: '계절이 변하는 까닭', objectives: ['계절이 변하는 이유를 설명할 수 있다.'], achievementStandards: ['[6과11-02] 계절에 따른 태양의 남중 고도, 낮과 밤의 길이, 기온 변화를 지구의 공전으로 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_6_2_3': {
    unitId: 'sci_6_2_3',
    unitName: '3. 연소와 소화',
    periods: [
      { id: 'sci_6_2_3_1', period: 1, title: '물질이 탈 때 나타나는 현상', objectives: ['물질이 탈 때 나타나는 현상을 알 수 있다.'], achievementStandards: ['[6과15-01] 연소에 필요한 조건을 알고, 연소 시 나타나는 현상을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_3_2', period: 2, title: '연소에 필요한 조건', objectives: ['연소에 필요한 조건을 알 수 있다.'], achievementStandards: ['[6과15-01] 연소에 필요한 조건을 알고, 연소 시 나타나는 현상을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_3_3', period: 3, title: '연소 후 생성되는 물질', objectives: ['연소 후 생성되는 물질을 알 수 있다.'], achievementStandards: ['[6과15-02] 연소 후 생성되는 물질을 확인하는 방법을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_3_4', period: 4, title: '소화의 조건', objectives: ['소화의 조건을 알 수 있다.'], achievementStandards: ['[6과15-03] 화재의 원인과 예방 방법, 화재 시 안전 대피 방법을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_3_5', period: 5, title: '화재 예방과 안전', objectives: ['화재를 예방하고 안전하게 대처하는 방법을 알 수 있다.'], achievementStandards: ['[6과15-03] 화재의 원인과 예방 방법, 화재 시 안전 대피 방법을 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_6_2_4': {
    unitId: 'sci_6_2_4',
    unitName: '4. 우리 몸의 구조와 기능',
    periods: [
      { id: 'sci_6_2_4_1', period: 1, title: '뼈와 근육', objectives: ['뼈와 근육의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과16-01] 뼈와 근육의 구조와 기능을 관찰하고 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_4_2', period: 2, title: '소화 기관', objectives: ['소화 기관의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과16-02] 소화, 순환, 호흡, 배설 기관의 구조와 기능을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_4_3', period: 3, title: '순환 기관', objectives: ['순환 기관의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과16-02] 소화, 순환, 호흡, 배설 기관의 구조와 기능을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_4_4', period: 4, title: '호흡 기관', objectives: ['호흡 기관의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과16-02] 소화, 순환, 호흡, 배설 기관의 구조와 기능을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_4_5', period: 5, title: '배설 기관', objectives: ['배설 기관의 구조와 기능을 알 수 있다.'], achievementStandards: ['[6과16-02] 소화, 순환, 호흡, 배설 기관의 구조와 기능을 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_4_6', period: 6, title: '자극과 반응', objectives: ['자극과 반응의 과정을 알 수 있다.'], achievementStandards: ['[6과16-03] 감각 기관을 통해 자극을 받아들이고 반응하는 과정을 설명할 수 있다.'], duration: 40 },
    ]
  },
  'sci_6_2_5': {
    unitId: 'sci_6_2_5',
    unitName: '5. 에너지와 생활',
    periods: [
      { id: 'sci_6_2_5_1', period: 1, title: '에너지의 종류', objectives: ['여러 가지 에너지의 종류를 알 수 있다.'], achievementStandards: ['[6과17-01] 일상생활에서 이용되는 에너지의 종류를 알 수 있다.'], duration: 40 },
      { id: 'sci_6_2_5_2', period: 2, title: '에너지의 전환', objectives: ['에너지가 전환되는 예를 찾을 수 있다.'], achievementStandards: ['[6과17-02] 에너지 형태가 다른 형태로 바뀌는 예를 찾아 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_5_3', period: 3, title: '에너지 전환 장치 만들기', objectives: ['에너지를 전환하는 장치를 만들 수 있다.'], achievementStandards: ['[6과17-02] 에너지 형태가 다른 형태로 바뀌는 예를 찾아 설명할 수 있다.'], duration: 40 },
      { id: 'sci_6_2_5_4', period: 4, title: '에너지의 효율적 이용', objectives: ['에너지를 효율적으로 이용하는 방법을 알 수 있다.'], achievementStandards: ['[6과17-03] 에너지를 효율적으로 사용하는 방법을 찾아 실천할 수 있다.'], duration: 40 },
    ]
  },
};

// 전체 과학 차시 데이터 통합
export const SCIENCE_LESSONS: Record<string, UnitLessons> = {
  ...SCIENCE_3_LESSONS,
  ...SCIENCE_4_LESSONS,
  ...SCIENCE_5_LESSONS,
  ...SCIENCE_6_LESSONS,
};

// 차시 조회 함수
export const getPeriodsForUnit = (unitId: string): LessonPeriod[] => {
  const unitLessons = SCIENCE_LESSONS[unitId];
  return unitLessons ? unitLessons.periods : [];
};

// 특정 차시 조회 함수
export const getPeriodInfo = (unitId: string, period: number): LessonPeriod | undefined => {
  const periods = getPeriodsForUnit(unitId);
  return periods.find(p => p.period === period);
};
