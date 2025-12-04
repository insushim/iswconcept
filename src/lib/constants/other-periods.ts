// 국어, 사회, 영어, 도덕 차시별 학습목표 및 성취기준 데이터
import { UnitLessons } from './lesson-periods';

// ==================== 국어 ====================
export const KOREAN_LESSONS: Record<string, UnitLessons> = {
  // 3학년 1학기
  'kor_3_1_1': {
    unitId: 'kor_3_1_1',
    unitName: '1. 재미가 톡톡톡',
    periods: [
      { id: 'kor_3_1_1_1', period: 1, title: '시를 읽고 느낌 나누기', objectives: ['시를 읽고 느낌을 나눌 수 있다.'], achievementStandards: ['[4국05-01] 시각이나 청각 등 감각적 표현에 주목하며 작품을 감상한다.'], duration: 40 },
      { id: 'kor_3_1_1_2', period: 2, title: '이야기를 읽고 생각 나누기', objectives: ['이야기를 읽고 생각을 나눌 수 있다.'], achievementStandards: ['[4국05-02] 인물의 모습, 행동, 마음을 상상하며 그림책, 시, 이야기를 감상한다.'], duration: 40 },
      { id: 'kor_3_1_1_3', period: 3, title: '재미있는 표현 찾기', objectives: ['글에서 재미있는 표현을 찾을 수 있다.'], achievementStandards: ['[4국05-01] 시각이나 청각 등 감각적 표현에 주목하며 작품을 감상한다.'], duration: 40 },
      { id: 'kor_3_1_1_4', period: 4, title: '재미있는 표현 활용하기', objectives: ['재미있는 표현을 활용하여 글을 쓸 수 있다.'], achievementStandards: ['[4국03-03] 관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.'], duration: 40 },
    ]
  },
  'kor_3_1_2': {
    unitId: 'kor_3_1_2',
    unitName: '2. 문단의 짜임',
    periods: [
      { id: 'kor_3_1_2_1', period: 1, title: '문단 알아보기', objectives: ['문단의 의미를 알 수 있다.'], achievementStandards: ['[4국02-02] 글의 유형을 고려하여 대강의 내용을 간추린다.'], duration: 40 },
      { id: 'kor_3_1_2_2', period: 2, title: '중심 문장과 뒷받침 문장', objectives: ['중심 문장과 뒷받침 문장을 구별할 수 있다.'], achievementStandards: ['[4국02-02] 글의 유형을 고려하여 대강의 내용을 간추린다.'], duration: 40 },
      { id: 'kor_3_1_2_3', period: 3, title: '문단의 짜임 알아보기', objectives: ['문단의 짜임을 알 수 있다.'], achievementStandards: ['[4국03-02] 시간의 흐름에 따라 사건이나 행동이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_3_1_2_4', period: 4, title: '문단 쓰기', objectives: ['문단의 짜임에 맞게 글을 쓸 수 있다.'], achievementStandards: ['[4국03-02] 시간의 흐름에 따라 사건이나 행동이 드러나게 글을 쓴다.'], duration: 40 },
    ]
  },
  'kor_3_1_3': {
    unitId: 'kor_3_1_3',
    unitName: '3. 알맞은 높임 표현',
    periods: [
      { id: 'kor_3_1_3_1', period: 1, title: '높임 표현 알아보기', objectives: ['높임 표현의 종류를 알 수 있다.'], achievementStandards: ['[4국04-04] 높임법에 따른 언어 예절을 지키며 어른과 대화한다.'], duration: 40 },
      { id: 'kor_3_1_3_2', period: 2, title: '상황에 맞는 높임 표현', objectives: ['상황에 맞는 높임 표현을 사용할 수 있다.'], achievementStandards: ['[4국04-04] 높임법에 따른 언어 예절을 지키며 어른과 대화한다.'], duration: 40 },
      { id: 'kor_3_1_3_3', period: 3, title: '높임 표현 바르게 사용하기', objectives: ['높임 표현을 바르게 사용할 수 있다.'], achievementStandards: ['[4국04-04] 높임법에 따른 언어 예절을 지키며 어른과 대화한다.'], duration: 40 },
    ]
  },
  // 6학년 1학기
  'kor_6_1_1': {
    unitId: 'kor_6_1_1',
    unitName: '1. 비유하는 표현',
    periods: [
      { id: 'kor_6_1_1_1', period: 1, title: '비유하는 표현 알아보기', objectives: ['비유하는 표현의 의미와 종류를 알 수 있다.'], achievementStandards: ['[6국05-01] 시에서 비유하는 표현의 특성과 효과를 알 수 있다.'], duration: 40 },
      { id: 'kor_6_1_1_2', period: 2, title: '직유법 이해하기', objectives: ['직유법을 이해하고 찾을 수 있다.'], achievementStandards: ['[6국05-01] 시에서 비유하는 표현의 특성과 효과를 알 수 있다.'], duration: 40 },
      { id: 'kor_6_1_1_3', period: 3, title: '은유법 이해하기', objectives: ['은유법을 이해하고 찾을 수 있다.'], achievementStandards: ['[6국05-01] 시에서 비유하는 표현의 특성과 효과를 알 수 있다.'], duration: 40 },
      { id: 'kor_6_1_1_4', period: 4, title: '의인법 이해하기', objectives: ['의인법을 이해하고 찾을 수 있다.'], achievementStandards: ['[6국05-01] 시에서 비유하는 표현의 특성과 효과를 알 수 있다.'], duration: 40 },
      { id: 'kor_6_1_1_5', period: 5, title: '비유 표현 활용하여 시 쓰기', objectives: ['비유하는 표현을 활용하여 시를 쓸 수 있다.'], achievementStandards: ['[6국03-04] 적절한 근거와 알맞은 표현을 사용하여 주장하는 글을 쓴다.'], duration: 40 },
    ]
  },
  'kor_6_1_2': {
    unitId: 'kor_6_1_2',
    unitName: '2. 이야기를 간추려요',
    periods: [
      { id: 'kor_6_1_2_1', period: 1, title: '이야기 구조 알아보기', objectives: ['이야기의 구조를 알 수 있다.'], achievementStandards: ['[6국02-02] 글의 구조를 파악하며 글 전체의 내용을 요약한다.'], duration: 40 },
      { id: 'kor_6_1_2_2', period: 2, title: '중요한 내용 파악하기', objectives: ['이야기의 중요한 내용을 파악할 수 있다.'], achievementStandards: ['[6국02-02] 글의 구조를 파악하며 글 전체의 내용을 요약한다.'], duration: 40 },
      { id: 'kor_6_1_2_3', period: 3, title: '이야기 간추리기', objectives: ['이야기를 간추릴 수 있다.'], achievementStandards: ['[6국02-02] 글의 구조를 파악하며 글 전체의 내용을 요약한다.'], duration: 40 },
      { id: 'kor_6_1_2_4', period: 4, title: '간추린 내용 발표하기', objectives: ['간추린 내용을 발표할 수 있다.'], achievementStandards: ['[6국01-02] 의견을 제시하고 함께 조정하며 토의한다.'], duration: 40 },
    ]
  },
  'kor_6_1_4': {
    unitId: 'kor_6_1_4',
    unitName: '4. 주장과 근거를 판단해요',
    periods: [
      { id: 'kor_6_1_4_1', period: 1, title: '주장과 근거 알아보기', objectives: ['주장과 근거의 관계를 알 수 있다.'], achievementStandards: ['[6국02-04] 글을 읽고 내용의 타당성과 표현의 적절성을 평가한다.'], duration: 40 },
      { id: 'kor_6_1_4_2', period: 2, title: '근거의 타당성 판단하기', objectives: ['근거의 타당성을 판단할 수 있다.'], achievementStandards: ['[6국02-04] 글을 읽고 내용의 타당성과 표현의 적절성을 평가한다.'], duration: 40 },
      { id: 'kor_6_1_4_3', period: 3, title: '논설문 읽고 평가하기', objectives: ['논설문을 읽고 평가할 수 있다.'], achievementStandards: ['[6국02-04] 글을 읽고 내용의 타당성과 표현의 적절성을 평가한다.'], duration: 40 },
      { id: 'kor_6_1_4_4', period: 4, title: '타당한 근거로 주장하기', objectives: ['타당한 근거를 들어 주장할 수 있다.'], achievementStandards: ['[6국03-04] 적절한 근거와 알맞은 표현을 사용하여 주장하는 글을 쓴다.'], duration: 40 },
    ]
  },
  // 6학년 2학기
  'kor_6_2_1': {
    unitId: 'kor_6_2_1',
    unitName: '1. 작품 속 인물과 나',
    periods: [
      { id: 'kor_6_2_1_1', period: 1, title: '작품 속 인물 파악하기', objectives: ['작품 속 인물의 특성을 파악할 수 있다.'], achievementStandards: ['[6국05-02] 작품 속 인물의 삶을 이해하고 자신의 삶과 관련지어 성찰한다.'], duration: 40 },
      { id: 'kor_6_2_1_2', period: 2, title: '인물의 삶과 나의 삶 비교하기', objectives: ['인물의 삶과 자신의 삶을 비교할 수 있다.'], achievementStandards: ['[6국05-02] 작품 속 인물의 삶을 이해하고 자신의 삶과 관련지어 성찰한다.'], duration: 40 },
      { id: 'kor_6_2_1_3', period: 3, title: '인물에게 편지 쓰기', objectives: ['인물에게 편지를 쓸 수 있다.'], achievementStandards: ['[6국03-02] 목적이나 대상에 따라 알맞은 형식과 자료를 사용하여 설명하는 글을 쓴다.'], duration: 40 },
    ]
  },
  'kor_6_2_2': {
    unitId: 'kor_6_2_2',
    unitName: '2. 관용 표현을 활용해요',
    periods: [
      { id: 'kor_6_2_2_1', period: 1, title: '관용 표현 알아보기', objectives: ['관용 표현의 의미와 특징을 알 수 있다.'], achievementStandards: ['[6국04-03] 관용 표현을 이해하고 적절하게 활용한다.'], duration: 40 },
      { id: 'kor_6_2_2_2', period: 2, title: '관용 표현 찾아보기', objectives: ['글에서 관용 표현을 찾을 수 있다.'], achievementStandards: ['[6국04-03] 관용 표현을 이해하고 적절하게 활용한다.'], duration: 40 },
      { id: 'kor_6_2_2_3', period: 3, title: '관용 표현 활용하기', objectives: ['관용 표현을 활용하여 글을 쓸 수 있다.'], achievementStandards: ['[6국04-03] 관용 표현을 이해하고 적절하게 활용한다.'], duration: 40 },
    ]
  },
  'kor_6_2_3': {
    unitId: 'kor_6_2_3',
    unitName: '3. 타당한 근거로 글을 써요',
    periods: [
      { id: 'kor_6_2_3_1', period: 1, title: '주장하는 글의 특성', objectives: ['주장하는 글의 특성을 알 수 있다.'], achievementStandards: ['[6국03-04] 적절한 근거와 알맞은 표현을 사용하여 주장하는 글을 쓴다.'], duration: 40 },
      { id: 'kor_6_2_3_2', period: 2, title: '타당한 근거 찾기', objectives: ['타당한 근거를 찾을 수 있다.'], achievementStandards: ['[6국03-04] 적절한 근거와 알맞은 표현을 사용하여 주장하는 글을 쓴다.'], duration: 40 },
      { id: 'kor_6_2_3_3', period: 3, title: '주장하는 글 쓰기', objectives: ['타당한 근거를 들어 주장하는 글을 쓸 수 있다.'], achievementStandards: ['[6국03-04] 적절한 근거와 알맞은 표현을 사용하여 주장하는 글을 쓴다.'], duration: 40 },
    ]
  },
  'kor_6_2_4': {
    unitId: 'kor_6_2_4',
    unitName: '4. 효과적으로 발표해요',
    periods: [
      { id: 'kor_6_2_4_1', period: 1, title: '발표 준비하기', objectives: ['발표 주제를 정하고 준비할 수 있다.'], achievementStandards: ['[6국01-04] 목적에 맞게 발표 내용을 구성하여 청중 앞에서 발표한다.'], duration: 40 },
      { id: 'kor_6_2_4_2', period: 2, title: '자료 활용하기', objectives: ['발표에 적절한 자료를 활용할 수 있다.'], achievementStandards: ['[6국01-04] 목적에 맞게 발표 내용을 구성하여 청중 앞에서 발표한다.'], duration: 40 },
      { id: 'kor_6_2_4_3', period: 3, title: '효과적으로 발표하기', objectives: ['효과적으로 발표할 수 있다.'], achievementStandards: ['[6국01-04] 목적에 맞게 발표 내용을 구성하여 청중 앞에서 발표한다.'], duration: 40 },
    ]
  },
  'kor_6_2_5': {
    unitId: 'kor_6_2_5',
    unitName: '5. 글에 담긴 생각과 비교해요',
    periods: [
      { id: 'kor_6_2_5_1', period: 1, title: '글쓴이의 생각 파악하기', objectives: ['글쓴이의 생각을 파악할 수 있다.'], achievementStandards: ['[6국02-05] 매체에 따른 다양한 읽기 방법을 이해하고 적절하게 읽는다.'], duration: 40 },
      { id: 'kor_6_2_5_2', period: 2, title: '나의 생각과 비교하기', objectives: ['글쓴이의 생각과 자신의 생각을 비교할 수 있다.'], achievementStandards: ['[6국02-05] 매체에 따른 다양한 읽기 방법을 이해하고 적절하게 읽는다.'], duration: 40 },
      { id: 'kor_6_2_5_3', period: 3, title: '비판적으로 읽기', objectives: ['글을 비판적으로 읽을 수 있다.'], achievementStandards: ['[6국02-04] 글을 읽고 내용의 타당성과 표현의 적절성을 평가한다.'], duration: 40 },
    ]
  },
  'kor_6_2_6': {
    unitId: 'kor_6_2_6',
    unitName: '6. 정보와 표현 판단하기',
    periods: [
      { id: 'kor_6_2_6_1', period: 1, title: '정보의 출처 확인하기', objectives: ['정보의 출처를 확인할 수 있다.'], achievementStandards: ['[6국02-04] 글을 읽고 내용의 타당성과 표현의 적절성을 평가한다.'], duration: 40 },
      { id: 'kor_6_2_6_2', period: 2, title: '정보의 타당성 판단하기', objectives: ['정보의 타당성을 판단할 수 있다.'], achievementStandards: ['[6국02-04] 글을 읽고 내용의 타당성과 표현의 적절성을 평가한다.'], duration: 40 },
      { id: 'kor_6_2_6_3', period: 3, title: '표현의 적절성 판단하기', objectives: ['표현의 적절성을 판단할 수 있다.'], achievementStandards: ['[6국02-04] 글을 읽고 내용의 타당성과 표현의 적절성을 평가한다.'], duration: 40 },
    ]
  },
  'kor_6_2_7': {
    unitId: 'kor_6_2_7',
    unitName: '7. 글 고쳐 쓰기',
    periods: [
      { id: 'kor_6_2_7_1', period: 1, title: '글 고쳐 쓰기의 중요성', objectives: ['글을 고쳐 쓰는 것의 중요성을 알 수 있다.'], achievementStandards: ['[6국03-05] 자신의 글을 점검하고 고쳐 쓴다.'], duration: 40 },
      { id: 'kor_6_2_7_2', period: 2, title: '문장 수준에서 고쳐 쓰기', objectives: ['문장 수준에서 글을 고칠 수 있다.'], achievementStandards: ['[6국03-05] 자신의 글을 점검하고 고쳐 쓴다.'], duration: 40 },
      { id: 'kor_6_2_7_3', period: 3, title: '문단 수준에서 고쳐 쓰기', objectives: ['문단 수준에서 글을 고칠 수 있다.'], achievementStandards: ['[6국03-05] 자신의 글을 점검하고 고쳐 쓴다.'], duration: 40 },
    ]
  },
  'kor_6_2_8': {
    unitId: 'kor_6_2_8',
    unitName: '8. 작품으로 경험하기',
    periods: [
      { id: 'kor_6_2_8_1', period: 1, title: '작품 감상하기', objectives: ['문학 작품을 감상할 수 있다.'], achievementStandards: ['[6국05-03] 작품 속의 다양한 세계를 경험하고 표현한다.'], duration: 40 },
      { id: 'kor_6_2_8_2', period: 2, title: '작품 속 세계 경험하기', objectives: ['작품 속 다양한 세계를 경험할 수 있다.'], achievementStandards: ['[6국05-03] 작품 속의 다양한 세계를 경험하고 표현한다.'], duration: 40 },
      { id: 'kor_6_2_8_3', period: 3, title: '작품에 대한 생각 나누기', objectives: ['작품에 대한 자신의 생각을 나눌 수 있다.'], achievementStandards: ['[6국05-03] 작품 속의 다양한 세계를 경험하고 표현한다.'], duration: 40 },
      { id: 'kor_6_2_8_4', period: 4, title: '작품 속 경험 표현하기', objectives: ['작품에서 얻은 경험을 다양한 방식으로 표현할 수 있다.'], achievementStandards: ['[6국05-03] 작품 속의 다양한 세계를 경험하고 표현한다.'], duration: 40 },
    ]
  },
};

// ==================== 사회 ====================
export const SOCIETY_LESSONS: Record<string, UnitLessons> = {
  // 3학년 1학기
  'soc_3_1_1': {
    unitId: 'soc_3_1_1',
    unitName: '1. 우리 고장의 모습',
    periods: [
      { id: 'soc_3_1_1_1', period: 1, title: '우리 고장 알아보기', objectives: ['우리 고장의 위치를 알 수 있다.'], achievementStandards: ['[4사01-01] 우리 고장의 지리적 위치를 파악하고, 위치에 따른 특징을 이해한다.'], duration: 40 },
      { id: 'soc_3_1_1_2', period: 2, title: '고장의 중심지 찾기', objectives: ['고장의 중심지를 찾을 수 있다.'], achievementStandards: ['[4사01-02] 고장의 주요 장소를 조사하여 고장 사람들의 생활 모습을 파악한다.'], duration: 40 },
      { id: 'soc_3_1_1_3', period: 3, title: '지도로 고장 살펴보기', objectives: ['지도를 보고 고장을 살펴볼 수 있다.'], achievementStandards: ['[4사01-03] 지도를 활용하여 고장의 주요 장소를 찾을 수 있다.'], duration: 40 },
      { id: 'soc_3_1_1_4', period: 4, title: '디지털 영상 지도 활용하기', objectives: ['디지털 영상 지도를 활용할 수 있다.'], achievementStandards: ['[4사01-03] 지도를 활용하여 고장의 주요 장소를 찾을 수 있다.'], duration: 40 },
    ]
  },
  'soc_3_1_2': {
    unitId: 'soc_3_1_2',
    unitName: '2. 우리가 알아보는 고장 이야기',
    periods: [
      { id: 'soc_3_1_2_1', period: 1, title: '우리 고장의 옛이야기', objectives: ['우리 고장의 옛이야기를 알 수 있다.'], achievementStandards: ['[4사02-01] 우리 고장의 옛이야기를 조사하여 고장의 역사와 문화를 이해한다.'], duration: 40 },
      { id: 'soc_3_1_2_2', period: 2, title: '고장의 문화유산', objectives: ['고장의 문화유산을 알 수 있다.'], achievementStandards: ['[4사02-02] 우리 고장에 전해 내려오는 문화유산을 조사하고 그 가치를 설명한다.'], duration: 40 },
      { id: 'soc_3_1_2_3', period: 3, title: '고장의 역사 인물', objectives: ['고장의 역사적 인물을 알 수 있다.'], achievementStandards: ['[4사02-01] 우리 고장의 옛이야기를 조사하여 고장의 역사와 문화를 이해한다.'], duration: 40 },
      { id: 'soc_3_1_2_4', period: 4, title: '고장의 자랑거리 소개하기', objectives: ['고장의 자랑거리를 소개할 수 있다.'], achievementStandards: ['[4사02-02] 우리 고장에 전해 내려오는 문화유산을 조사하고 그 가치를 설명한다.'], duration: 40 },
    ]
  },
  // 6학년 1학기
  'soc_6_1_1': {
    unitId: 'soc_6_1_1',
    unitName: '1. 우리나라의 정치 발전',
    periods: [
      { id: 'soc_6_1_1_1', period: 1, title: '민주주의의 의미', objectives: ['민주주의의 의미를 알 수 있다.'], achievementStandards: ['[6사08-01] 일상생활에서 민주주의를 실천하는 태도를 기른다.'], duration: 40 },
      { id: 'soc_6_1_1_2', period: 2, title: '민주주의의 발전 과정', objectives: ['우리나라 민주주의의 발전 과정을 알 수 있다.'], achievementStandards: ['[6사08-02] 광복 이후 민주화를 위한 시민들의 노력을 조사한다.'], duration: 40 },
      { id: 'soc_6_1_1_3', period: 3, title: '4·19 혁명', objectives: ['4·19 혁명의 의미를 알 수 있다.'], achievementStandards: ['[6사08-02] 광복 이후 민주화를 위한 시민들의 노력을 조사한다.'], duration: 40 },
      { id: 'soc_6_1_1_4', period: 4, title: '5·18 민주화 운동', objectives: ['5·18 민주화 운동의 의미를 알 수 있다.'], achievementStandards: ['[6사08-02] 광복 이후 민주화를 위한 시민들의 노력을 조사한다.'], duration: 40 },
      { id: 'soc_6_1_1_5', period: 5, title: '6월 민주 항쟁', objectives: ['6월 민주 항쟁의 의미를 알 수 있다.'], achievementStandards: ['[6사08-02] 광복 이후 민주화를 위한 시민들의 노력을 조사한다.'], duration: 40 },
      { id: 'soc_6_1_1_6', period: 6, title: '국회와 행정부', objectives: ['국회와 행정부의 역할을 알 수 있다.'], achievementStandards: ['[6사08-03] 국가 기관들의 역할을 구분하고 민주 정치의 원리를 이해한다.'], duration: 40 },
      { id: 'soc_6_1_1_7', period: 7, title: '법원과 헌법재판소', objectives: ['법원과 헌법재판소의 역할을 알 수 있다.'], achievementStandards: ['[6사08-03] 국가 기관들의 역할을 구분하고 민주 정치의 원리를 이해한다.'], duration: 40 },
    ]
  },
  'soc_6_1_2': {
    unitId: 'soc_6_1_2',
    unitName: '2. 우리나라의 경제 발전',
    periods: [
      { id: 'soc_6_1_2_1', period: 1, title: '경제 성장의 의미', objectives: ['경제 성장의 의미를 알 수 있다.'], achievementStandards: ['[6사09-01] 우리나라 경제 성장 과정에서 정부, 기업가, 근로자의 역할을 탐구한다.'], duration: 40 },
      { id: 'soc_6_1_2_2', period: 2, title: '우리나라 경제 성장 과정', objectives: ['우리나라 경제 성장 과정을 알 수 있다.'], achievementStandards: ['[6사09-01] 우리나라 경제 성장 과정에서 정부, 기업가, 근로자의 역할을 탐구한다.'], duration: 40 },
      { id: 'soc_6_1_2_3', period: 3, title: '경제 주체의 역할', objectives: ['경제 주체의 역할을 알 수 있다.'], achievementStandards: ['[6사09-02] 세계화 속에서 우리 경제가 다른 나라와 어떻게 교류하는지 조사한다.'], duration: 40 },
      { id: 'soc_6_1_2_4', period: 4, title: '세계 속의 우리 경제', objectives: ['세계 속에서 우리나라 경제의 위상을 알 수 있다.'], achievementStandards: ['[6사09-02] 세계화 속에서 우리 경제가 다른 나라와 어떻게 교류하는지 조사한다.'], duration: 40 },
      { id: 'soc_6_1_2_5', period: 5, title: '경제 성장의 문제와 해결', objectives: ['경제 성장의 문제점과 해결 방안을 알 수 있다.'], achievementStandards: ['[6사09-03] 지속 가능한 미래를 위해 해결해야 할 경제적 문제를 탐구한다.'], duration: 40 },
    ]
  },
  // 6학년 2학기
  'soc_6_2_1': {
    unitId: 'soc_6_2_1',
    unitName: '1. 세계 여러 나라의 자연과 문화',
    periods: [
      { id: 'soc_6_2_1_1', period: 1, title: '세계의 다양한 자연환경', objectives: ['세계의 다양한 자연환경을 알 수 있다.'], achievementStandards: ['[6사10-01] 세계의 대륙과 대양, 주요 나라의 위치와 영토의 특성을 파악한다.'], duration: 40 },
      { id: 'soc_6_2_1_2', period: 2, title: '세계의 다양한 기후', objectives: ['세계의 다양한 기후를 알 수 있다.'], achievementStandards: ['[6사10-02] 세계의 다양한 기후와 그에 따른 사람들의 생활 모습을 조사한다.'], duration: 40 },
      { id: 'soc_6_2_1_3', period: 3, title: '세계의 다양한 문화', objectives: ['세계의 다양한 문화를 알 수 있다.'], achievementStandards: ['[6사10-03] 세계 주요 종교와 그 분포, 종교에 따른 생활 모습을 조사한다.'], duration: 40 },
      { id: 'soc_6_2_1_4', period: 4, title: '문화 다양성 존중하기', objectives: ['문화 다양성을 존중하는 태도를 기를 수 있다.'], achievementStandards: ['[6사10-04] 다양한 문화를 존중하는 태도를 기르고 문화 교류의 중요성을 이해한다.'], duration: 40 },
    ]
  },
  'soc_6_2_2': {
    unitId: 'soc_6_2_2',
    unitName: '2. 통일 한국의 미래와 지구촌의 평화',
    periods: [
      { id: 'soc_6_2_2_1', period: 1, title: '한반도의 분단', objectives: ['한반도 분단의 배경을 알 수 있다.'], achievementStandards: ['[6사11-01] 한반도 통일의 필요성과 통일을 위한 노력을 조사한다.'], duration: 40 },
      { id: 'soc_6_2_2_2', period: 2, title: '통일의 필요성', objectives: ['통일의 필요성을 알 수 있다.'], achievementStandards: ['[6사11-01] 한반도 통일의 필요성과 통일을 위한 노력을 조사한다.'], duration: 40 },
      { id: 'soc_6_2_2_3', period: 3, title: '통일을 위한 노력', objectives: ['통일을 위한 노력을 알 수 있다.'], achievementStandards: ['[6사11-01] 한반도 통일의 필요성과 통일을 위한 노력을 조사한다.'], duration: 40 },
      { id: 'soc_6_2_2_4', period: 4, title: '지구촌 평화와 협력', objectives: ['지구촌 평화와 협력의 중요성을 알 수 있다.'], achievementStandards: ['[6사11-02] 지구촌의 평화와 협력을 위해 노력하는 태도를 기른다.'], duration: 40 },
    ]
  },
};

// ==================== 영어 ====================
export const ENGLISH_LESSONS: Record<string, UnitLessons> = {
  // 3학년
  'eng_3_1_1': {
    unitId: 'eng_3_1_1',
    unitName: "1. Hello, I'm Minsu",
    periods: [
      { id: 'eng_3_1_1_1', period: 1, title: '인사 표현 알아보기', objectives: ['Hello, Hi 등 인사 표현을 듣고 이해할 수 있다.'], achievementStandards: ['[4영01-01] 알파벳 대소문자를 식별하여 읽을 수 있다.'], duration: 40 },
      { id: 'eng_3_1_1_2', period: 2, title: '인사하며 이름 묻고 답하기', objectives: ["What's your name? I'm ~. 표현을 사용할 수 있다."], achievementStandards: ['[4영02-01] 알파벳 대소문자를 구별하여 쓸 수 있다.'], duration: 40 },
      { id: 'eng_3_1_1_3', period: 3, title: '인사 표현 연습하기', objectives: ['인사 표현을 듣고 따라 말할 수 있다.'], achievementStandards: ['[4영03-01] 쉽고 간단한 인사말을 듣고 알맞게 응답할 수 있다.'], duration: 40 },
      { id: 'eng_3_1_1_4', period: 4, title: '인사 역할놀이하기', objectives: ['인사 상황을 역할놀이로 표현할 수 있다.'], achievementStandards: ['[4영04-01] 알파벳과 낱말을 소리 내어 읽을 수 있다.'], duration: 40 },
    ]
  },
  'eng_3_1_2': {
    unitId: 'eng_3_1_2',
    unitName: "2. What's This?",
    periods: [
      { id: 'eng_3_1_2_1', period: 1, title: '물건 이름 묻고 답하기', objectives: ["What's this? It's a ~. 표현을 이해할 수 있다."], achievementStandards: ['[4영03-02] 쉽고 간단한 지시나 설명을 듣고 행동할 수 있다.'], duration: 40 },
      { id: 'eng_3_1_2_2', period: 2, title: '학용품 이름 알아보기', objectives: ['학용품의 영어 이름을 알 수 있다.'], achievementStandards: ['[4영04-02] 쉽고 간단한 낱말이나 어구를 따라 읽을 수 있다.'], duration: 40 },
      { id: 'eng_3_1_2_3', period: 3, title: '물건 이름 표현 연습하기', objectives: ['물건 이름을 묻고 답하는 표현을 연습할 수 있다.'], achievementStandards: ['[4영05-01] 구두로 익힌 낱말을 따라 쓸 수 있다.'], duration: 40 },
    ]
  },
  // 6학년
  'eng_6_1_1': {
    unitId: 'eng_6_1_1',
    unitName: '1. What Grade Are You In?',
    periods: [
      { id: 'eng_6_1_1_1', period: 1, title: '학년 묻고 답하기', objectives: ['학년을 묻고 답하는 표현을 이해할 수 있다.'], achievementStandards: ['[6영03-01] 쉬운 낱말, 어구, 문장을 듣고 이해할 수 있다.'], duration: 40 },
      { id: 'eng_6_1_1_2', period: 2, title: '자기소개하기', objectives: ['자신을 소개하는 표현을 사용할 수 있다.'], achievementStandards: ['[6영04-01] 쉽고 간단한 낱말이나 어구, 문장을 강세, 리듬, 억양에 맞게 따라 말할 수 있다.'], duration: 40 },
      { id: 'eng_6_1_1_3', period: 3, title: '다양한 표현 연습하기', objectives: ['학년과 관련된 다양한 표현을 연습할 수 있다.'], achievementStandards: ['[6영05-01] 쉽고 간단한 낱말이나 어구를 듣고 쓸 수 있다.'], duration: 40 },
      { id: 'eng_6_1_1_4', period: 4, title: '역할놀이하기', objectives: ['학년 묻고 답하기 역할놀이를 할 수 있다.'], achievementStandards: ['[6영06-01] 자신에 대해 한두 문장으로 소개할 수 있다.'], duration: 40 },
    ]
  },
  'eng_6_1_2': {
    unitId: 'eng_6_1_2',
    unitName: '2. What Do You Want to Do?',
    periods: [
      { id: 'eng_6_1_2_1', period: 1, title: '원하는 것 묻고 답하기', objectives: ['원하는 것을 묻고 답하는 표현을 이해할 수 있다.'], achievementStandards: ['[6영03-02] 주변의 사물이나 사람에 관해 쉽고 간단한 말이나 대화를 듣고 이해할 수 있다.'], duration: 40 },
      { id: 'eng_6_1_2_2', period: 2, title: '활동 표현 알아보기', objectives: ['다양한 활동을 나타내는 표현을 알 수 있다.'], achievementStandards: ['[6영04-02] 자신의 감정이나 의견을 표현할 수 있다.'], duration: 40 },
      { id: 'eng_6_1_2_3', period: 3, title: '대화 연습하기', objectives: ['원하는 것에 대해 대화할 수 있다.'], achievementStandards: ['[6영04-03] 일상생활에 관해 간단히 묻고 답할 수 있다.'], duration: 40 },
      { id: 'eng_6_1_2_4', period: 4, title: '글쓰기 연습하기', objectives: ['원하는 것에 대해 간단히 쓸 수 있다.'], achievementStandards: ['[6영05-02] 구두로 익힌 문장을 쓸 수 있다.'], duration: 40 },
    ]
  },
};

// ==================== 도덕 ====================
export const MORAL_LESSONS: Record<string, UnitLessons> = {
  // 3학년
  'mor_3_1_1': {
    unitId: 'mor_3_1_1',
    unitName: '1. 나와 너, 우리 함께',
    periods: [
      { id: 'mor_3_1_1_1', period: 1, title: '나를 소개해요', objectives: ['자신의 장점과 특징을 알 수 있다.'], achievementStandards: ['[4도01-01] 정직의 의미와 중요성을 이해하고 일상생활에서 정직하게 생활한다.'], duration: 40 },
      { id: 'mor_3_1_1_2', period: 2, title: '친구를 이해해요', objectives: ['친구의 특징을 이해할 수 있다.'], achievementStandards: ['[4도02-01] 우정의 의미와 중요성을 이해하고 친구와 사이좋게 지낸다.'], duration: 40 },
      { id: 'mor_3_1_1_3', period: 3, title: '함께하는 우리', objectives: ['함께하는 것의 중요성을 알 수 있다.'], achievementStandards: ['[4도02-02] 협동의 의미와 중요성을 이해하고 일상생활에서 실천한다.'], duration: 40 },
    ]
  },
  'mor_3_1_2': {
    unitId: 'mor_3_1_2',
    unitName: '2. 인내하며 최선을 다하는 생활',
    periods: [
      { id: 'mor_3_1_2_1', period: 1, title: '인내의 의미', objectives: ['인내의 의미를 알 수 있다.'], achievementStandards: ['[4도01-02] 자주의 의미와 중요성을 이해하고 일상생활에서 자주적으로 행동한다.'], duration: 40 },
      { id: 'mor_3_1_2_2', period: 2, title: '최선을 다하는 생활', objectives: ['최선을 다하는 태도를 기를 수 있다.'], achievementStandards: ['[4도01-02] 자주의 의미와 중요성을 이해하고 일상생활에서 자주적으로 행동한다.'], duration: 40 },
      { id: 'mor_3_1_2_3', period: 3, title: '꾸준히 노력하기', objectives: ['꾸준히 노력하는 자세를 기를 수 있다.'], achievementStandards: ['[4도01-02] 자주의 의미와 중요성을 이해하고 일상생활에서 자주적으로 행동한다.'], duration: 40 },
    ]
  },
  // 6학년
  'mor_6_1_1': {
    unitId: 'mor_6_1_1',
    unitName: '1. 내 삶의 주인은 바로 나',
    periods: [
      { id: 'mor_6_1_1_1', period: 1, title: '자율의 의미', objectives: ['자율의 의미를 알 수 있다.'], achievementStandards: ['[6도01-01] 자율적 삶의 의미와 중요성을 이해하고, 자신의 삶을 자율적으로 이끌어 간다.'], duration: 40 },
      { id: 'mor_6_1_1_2', period: 2, title: '자율과 책임', objectives: ['자율과 책임의 관계를 알 수 있다.'], achievementStandards: ['[6도01-01] 자율적 삶의 의미와 중요성을 이해하고, 자신의 삶을 자율적으로 이끌어 간다.'], duration: 40 },
      { id: 'mor_6_1_1_3', period: 3, title: '올바른 선택하기', objectives: ['올바른 선택을 하는 방법을 알 수 있다.'], achievementStandards: ['[6도01-02] 자신이 추구하는 도덕적 삶의 방향을 스스로 결정하고 실천하려는 자세를 가진다.'], duration: 40 },
      { id: 'mor_6_1_1_4', period: 4, title: '내 삶의 주인 되기', objectives: ['자신의 삶의 주인이 되는 태도를 기를 수 있다.'], achievementStandards: ['[6도01-02] 자신이 추구하는 도덕적 삶의 방향을 스스로 결정하고 실천하려는 자세를 가진다.'], duration: 40 },
    ]
  },
  'mor_6_1_3': {
    unitId: 'mor_6_1_3',
    unitName: '3. 나라를 사랑하는 마음',
    periods: [
      { id: 'mor_6_1_3_1', period: 1, title: '나라 사랑의 의미', objectives: ['나라 사랑의 의미를 알 수 있다.'], achievementStandards: ['[6도04-01] 나라를 사랑하는 마음을 길러 통일에 관심을 갖고 통일 의지를 기른다.'], duration: 40 },
      { id: 'mor_6_1_3_2', period: 2, title: '나라를 지킨 사람들', objectives: ['나라를 지킨 사람들의 노력을 알 수 있다.'], achievementStandards: ['[6도04-01] 나라를 사랑하는 마음을 길러 통일에 관심을 갖고 통일 의지를 기른다.'], duration: 40 },
      { id: 'mor_6_1_3_3', period: 3, title: '나라 사랑 실천하기', objectives: ['나라 사랑을 실천하는 방법을 알 수 있다.'], achievementStandards: ['[6도04-02] 우리나라의 상징을 알고 존중하며, 나라를 위해 내가 할 수 있는 일을 실천한다.'], duration: 40 },
    ]
  },
};

// 전체 통합
export const OTHER_LESSONS: Record<string, UnitLessons> = {
  ...KOREAN_LESSONS,
  ...SOCIETY_LESSONS,
  ...ENGLISH_LESSONS,
  ...MORAL_LESSONS,
};
