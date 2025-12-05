// 국어, 사회, 영어, 도덕 차시별 학습목표 및 성취기준 데이터
import { UnitLessons } from './lesson-periods';

// ==================== 국어 ====================
export const KOREAN_LESSONS: Record<string, UnitLessons> = {
  // 4학년 1학기
  'kor_4_1_1': {
    unitId: 'kor_4_1_1',
    unitName: '1. 생각과 느낌을 나누어요',
    periods: [
      { id: 'kor_4_1_1_1', period: 1, title: '시를 읽고 생각과 느낌 나누기', objectives: ['시를 읽고 자신의 생각과 느낌을 표현할 수 있다.'], achievementStandards: ['[4국05-02] 인물, 사건, 배경에 주목하며 작품을 이해한다.'], duration: 40 },
      { id: 'kor_4_1_1_2', period: 2, title: '이야기를 읽고 느낌 표현하기', objectives: ['이야기를 읽고 느낌을 다양하게 표현할 수 있다.'], achievementStandards: ['[4국05-02] 인물, 사건, 배경에 주목하며 작품을 이해한다.'], duration: 40 },
      { id: 'kor_4_1_1_3', period: 3, title: '작품 속 인물의 마음 이해하기', objectives: ['작품 속 인물의 마음을 이해하고 공감할 수 있다.'], achievementStandards: ['[4국05-02] 인물, 사건, 배경에 주목하며 작품을 이해한다.'], duration: 40 },
      { id: 'kor_4_1_1_4', period: 4, title: '생각과 느낌을 글로 표현하기', objectives: ['작품을 읽고 자신의 생각과 느낌을 글로 표현할 수 있다.'], achievementStandards: ['[4국03-01] 중심 생각이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_1_1_5', period: 5, title: '생각과 느낌 나누기 활동', objectives: ['작품에 대한 생각과 느낌을 친구들과 나눌 수 있다.'], achievementStandards: ['[4국01-02] 회의에서 의견을 적극적으로 교환한다.'], duration: 40 },
      { id: 'kor_4_1_1_6', period: 6, title: '단원 정리 및 발표', objectives: ['단원에서 배운 내용을 정리하고 발표할 수 있다.'], achievementStandards: ['[4국01-03] 원고를 보고 자연스럽게 발표한다.'], duration: 40 },
    ]
  },
  'kor_4_1_2': {
    unitId: 'kor_4_1_2',
    unitName: '2. 내용을 간추려요',
    periods: [
      { id: 'kor_4_1_2_1', period: 1, title: '글의 중심 내용 파악하기', objectives: ['글을 읽고 중심 내용을 파악할 수 있다.'], achievementStandards: ['[4국02-02] 글의 유형을 고려하여 대강의 내용을 간추린다.'], duration: 40 },
      { id: 'kor_4_1_2_2', period: 2, title: '문단의 중심 문장 찾기', objectives: ['문단의 중심 문장을 찾을 수 있다.'], achievementStandards: ['[4국02-02] 글의 유형을 고려하여 대강의 내용을 간추린다.'], duration: 40 },
      { id: 'kor_4_1_2_3', period: 3, title: '글 전체 내용 간추리기', objectives: ['글 전체의 내용을 간추릴 수 있다.'], achievementStandards: ['[4국02-02] 글의 유형을 고려하여 대강의 내용을 간추린다.'], duration: 40 },
      { id: 'kor_4_1_2_4', period: 4, title: '간추린 내용으로 글쓰기', objectives: ['간추린 내용을 바탕으로 글을 쓸 수 있다.'], achievementStandards: ['[4국03-01] 중심 생각이 드러나게 글을 쓴다.'], duration: 40 },
    ]
  },
  'kor_4_1_3': {
    unitId: 'kor_4_1_3',
    unitName: '3. 느낌을 살려 말해요',
    periods: [
      { id: 'kor_4_1_3_1', period: 1, title: '표현력 있게 말하기', objectives: ['느낌을 살려 표현력 있게 말할 수 있다.'], achievementStandards: ['[4국01-03] 원고를 보고 자연스럽게 발표한다.'], duration: 40 },
      { id: 'kor_4_1_3_2', period: 2, title: '상황에 맞게 말하기', objectives: ['상황에 맞게 느낌을 살려 말할 수 있다.'], achievementStandards: ['[4국01-04] 듣는 이를 고려하여 자신의 말을 점검한다.'], duration: 40 },
      { id: 'kor_4_1_3_3', period: 3, title: '느낌을 살려 시 낭송하기', objectives: ['느낌을 살려 시를 낭송할 수 있다.'], achievementStandards: ['[4국05-01] 시각이나 청각 등 감각적 표현에 주목하며 작품을 감상한다.'], duration: 40 },
      { id: 'kor_4_1_3_4', period: 4, title: '연극하듯 말하기', objectives: ['연극하듯 실감 나게 말할 수 있다.'], achievementStandards: ['[4국01-03] 원고를 보고 자연스럽게 발표한다.'], duration: 40 },
    ]
  },
  'kor_4_1_4': {
    unitId: 'kor_4_1_4',
    unitName: '4. 일에 대한 의견',
    periods: [
      { id: 'kor_4_1_4_1', period: 1, title: '사실과 의견 구별하기', objectives: ['사실과 의견을 구별할 수 있다.'], achievementStandards: ['[4국02-03] 글에서 낱말의 의미나 생략된 내용을 짐작한다.'], duration: 40 },
      { id: 'kor_4_1_4_2', period: 2, title: '의견 제시하기', objectives: ['일에 대한 자신의 의견을 제시할 수 있다.'], achievementStandards: ['[4국03-03] 관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_1_4_3', period: 3, title: '의견을 뒷받침하는 이유', objectives: ['의견을 뒷받침하는 이유를 들 수 있다.'], achievementStandards: ['[4국03-03] 관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_1_4_4', period: 4, title: '의견을 담은 글쓰기', objectives: ['자신의 의견이 드러나게 글을 쓸 수 있다.'], achievementStandards: ['[4국03-03] 관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.'], duration: 40 },
    ]
  },
  'kor_4_1_5': {
    unitId: 'kor_4_1_5',
    unitName: '5. 내가 만든 이야기',
    periods: [
      { id: 'kor_4_1_5_1', period: 1, title: '이야기의 구성 요소', objectives: ['이야기의 구성 요소를 알 수 있다.'], achievementStandards: ['[4국05-02] 인물, 사건, 배경에 주목하며 작품을 이해한다.'], duration: 40 },
      { id: 'kor_4_1_5_2', period: 2, title: '이야기 구상하기', objectives: ['이야기를 구상할 수 있다.'], achievementStandards: ['[4국03-02] 시간의 흐름에 따라 사건이나 행동이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_1_5_3', period: 3, title: '이야기 쓰기', objectives: ['상상하여 이야기를 쓸 수 있다.'], achievementStandards: ['[4국03-02] 시간의 흐름에 따라 사건이나 행동이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_1_5_4', period: 4, title: '이야기 발표하기', objectives: ['자신이 쓴 이야기를 발표할 수 있다.'], achievementStandards: ['[4국01-03] 원고를 보고 자연스럽게 발표한다.'], duration: 40 },
    ]
  },
  'kor_4_1_6': {
    unitId: 'kor_4_1_6',
    unitName: '6. 회의를 해요',
    periods: [
      { id: 'kor_4_1_6_1', period: 1, title: '회의의 의미와 절차', objectives: ['회의의 의미와 절차를 알 수 있다.'], achievementStandards: ['[4국01-02] 회의에서 의견을 적극적으로 교환한다.'], duration: 40 },
      { id: 'kor_4_1_6_2', period: 2, title: '회의 참여자의 역할', objectives: ['회의 참여자의 역할을 알 수 있다.'], achievementStandards: ['[4국01-02] 회의에서 의견을 적극적으로 교환한다.'], duration: 40 },
      { id: 'kor_4_1_6_3', period: 3, title: '회의 해 보기', objectives: ['회의에 적극적으로 참여할 수 있다.'], achievementStandards: ['[4국01-02] 회의에서 의견을 적극적으로 교환한다.'], duration: 40 },
      { id: 'kor_4_1_6_4', period: 4, title: '회의 결과 정리하기', objectives: ['회의 결과를 정리할 수 있다.'], achievementStandards: ['[4국01-02] 회의에서 의견을 적극적으로 교환한다.'], duration: 40 },
    ]
  },
  'kor_4_1_7': {
    unitId: 'kor_4_1_7',
    unitName: '7. 사전은 내 친구',
    periods: [
      { id: 'kor_4_1_7_1', period: 1, title: '국어사전의 구성', objectives: ['국어사전의 구성을 알 수 있다.'], achievementStandards: ['[4국04-02] 국어사전에서 낱말을 찾는 방법을 익힌다.'], duration: 40 },
      { id: 'kor_4_1_7_2', period: 2, title: '국어사전에서 낱말 찾기', objectives: ['국어사전에서 낱말을 찾을 수 있다.'], achievementStandards: ['[4국04-02] 국어사전에서 낱말을 찾는 방법을 익힌다.'], duration: 40 },
      { id: 'kor_4_1_7_3', period: 3, title: '낱말의 뜻 이해하기', objectives: ['낱말의 여러 가지 뜻을 이해할 수 있다.'], achievementStandards: ['[4국02-03] 글에서 낱말의 의미나 생략된 내용을 짐작한다.'], duration: 40 },
      { id: 'kor_4_1_7_4', period: 4, title: '사전 활용하여 글쓰기', objectives: ['사전을 활용하여 글을 쓸 수 있다.'], achievementStandards: ['[4국03-04] 읽는 이를 고려하여 자신의 마음을 표현하는 글을 쓴다.'], duration: 40 },
    ]
  },
  'kor_4_1_8': {
    unitId: 'kor_4_1_8',
    unitName: '8. 이런 제안 어때요',
    periods: [
      { id: 'kor_4_1_8_1', period: 1, title: '제안하는 글의 특징', objectives: ['제안하는 글의 특징을 알 수 있다.'], achievementStandards: ['[4국03-03] 관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_1_8_2', period: 2, title: '제안 내용 정하기', objectives: ['제안할 내용을 정할 수 있다.'], achievementStandards: ['[4국03-03] 관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_1_8_3', period: 3, title: '제안하는 글쓰기', objectives: ['제안하는 글을 쓸 수 있다.'], achievementStandards: ['[4국03-03] 관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_1_8_4', period: 4, title: '제안하는 글 발표하기', objectives: ['제안하는 글을 발표할 수 있다.'], achievementStandards: ['[4국01-03] 원고를 보고 자연스럽게 발표한다.'], duration: 40 },
    ]
  },
  // 4학년 2학기
  'kor_4_2_1': {
    unitId: 'kor_4_2_1',
    unitName: '1. 이어질 장면을 생각해요',
    periods: [
      { id: 'kor_4_2_1_1', period: 1, title: '이야기의 흐름 파악하기', objectives: ['이야기의 흐름을 파악할 수 있다.'], achievementStandards: ['[4국05-02] 인물, 사건, 배경에 주목하며 작품을 이해한다.'], duration: 40 },
      { id: 'kor_4_2_1_2', period: 2, title: '이어질 내용 상상하기', objectives: ['이어질 내용을 상상할 수 있다.'], achievementStandards: ['[4국05-04] 작품을 듣거나 읽거나 보고 떠오르는 느낌과 생각을 다양하게 표현한다.'], duration: 40 },
      { id: 'kor_4_2_1_3', period: 3, title: '이어질 이야기 쓰기', objectives: ['이어질 이야기를 상상하여 쓸 수 있다.'], achievementStandards: ['[4국03-02] 시간의 흐름에 따라 사건이나 행동이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_2_1_4', period: 4, title: '이어질 장면 발표하기', objectives: ['이어질 장면을 발표할 수 있다.'], achievementStandards: ['[4국01-03] 원고를 보고 자연스럽게 발표한다.'], duration: 40 },
    ]
  },
  'kor_4_2_2': {
    unitId: 'kor_4_2_2',
    unitName: '2. 마음을 전하는 글을 써요',
    periods: [
      { id: 'kor_4_2_2_1', period: 1, title: '마음을 전하는 글의 특징', objectives: ['마음을 전하는 글의 특징을 알 수 있다.'], achievementStandards: ['[4국03-04] 읽는 이를 고려하여 자신의 마음을 표현하는 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_2_2_2', period: 2, title: '마음 표현하기', objectives: ['자신의 마음을 표현할 수 있다.'], achievementStandards: ['[4국03-04] 읽는 이를 고려하여 자신의 마음을 표현하는 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_2_2_3', period: 3, title: '마음을 전하는 글쓰기', objectives: ['마음을 전하는 글을 쓸 수 있다.'], achievementStandards: ['[4국03-04] 읽는 이를 고려하여 자신의 마음을 표현하는 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_2_2_4', period: 4, title: '글 고치고 전달하기', objectives: ['쓴 글을 고치고 전달할 수 있다.'], achievementStandards: ['[4국03-05] 쓰기의 과정에서 쓴 글을 점검하고 고쳐 쓴다.'], duration: 40 },
    ]
  },
  'kor_4_2_3': {
    unitId: 'kor_4_2_3',
    unitName: '3. 바르고 공손하게',
    periods: [
      { id: 'kor_4_2_3_1', period: 1, title: '높임 표현 알아보기', objectives: ['높임 표현을 알 수 있다.'], achievementStandards: ['[4국04-04] 높임법에 따른 언어 예절을 지키며 어른과 대화한다.'], duration: 40 },
      { id: 'kor_4_2_3_2', period: 2, title: '상황에 맞는 높임 표현', objectives: ['상황에 맞는 높임 표현을 사용할 수 있다.'], achievementStandards: ['[4국04-04] 높임법에 따른 언어 예절을 지키며 어른과 대화한다.'], duration: 40 },
      { id: 'kor_4_2_3_3', period: 3, title: '공손하게 말하기', objectives: ['공손하게 말하는 방법을 알 수 있다.'], achievementStandards: ['[4국04-04] 높임법에 따른 언어 예절을 지키며 어른과 대화한다.'], duration: 40 },
      { id: 'kor_4_2_3_4', period: 4, title: '바르고 공손하게 대화하기', objectives: ['바르고 공손하게 대화할 수 있다.'], achievementStandards: ['[4국04-04] 높임법에 따른 언어 예절을 지키며 어른과 대화한다.'], duration: 40 },
    ]
  },
  'kor_4_2_4': {
    unitId: 'kor_4_2_4',
    unitName: '4. 이야기 속 세상',
    periods: [
      { id: 'kor_4_2_4_1', period: 1, title: '이야기 속 세상 상상하기', objectives: ['이야기 속 세상을 상상할 수 있다.'], achievementStandards: ['[4국05-02] 인물, 사건, 배경에 주목하며 작품을 이해한다.'], duration: 40 },
      { id: 'kor_4_2_4_2', period: 2, title: '인물의 성격 파악하기', objectives: ['인물의 성격을 파악할 수 있다.'], achievementStandards: ['[4국05-02] 인물, 사건, 배경에 주목하며 작품을 이해한다.'], duration: 40 },
      { id: 'kor_4_2_4_3', period: 3, title: '이야기 감상하기', objectives: ['이야기를 감상할 수 있다.'], achievementStandards: ['[4국05-04] 작품을 듣거나 읽거나 보고 떠오르는 느낌과 생각을 다양하게 표현한다.'], duration: 40 },
      { id: 'kor_4_2_4_4', period: 4, title: '감상 나누기', objectives: ['이야기에 대한 감상을 나눌 수 있다.'], achievementStandards: ['[4국01-01] 대화의 즐거움을 알고 적극적으로 대화에 참여한다.'], duration: 40 },
    ]
  },
  'kor_4_2_5': {
    unitId: 'kor_4_2_5',
    unitName: '5. 컴퓨터로 글을 써요',
    periods: [
      { id: 'kor_4_2_5_1', period: 1, title: '컴퓨터로 글쓰기의 장점', objectives: ['컴퓨터로 글을 쓰는 장점을 알 수 있다.'], achievementStandards: ['[4국03-01] 중심 생각이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_2_5_2', period: 2, title: '문서 작성하기', objectives: ['컴퓨터로 문서를 작성할 수 있다.'], achievementStandards: ['[4국03-01] 중심 생각이 드러나게 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_2_5_3', period: 3, title: '글 수정하기', objectives: ['컴퓨터로 글을 수정할 수 있다.'], achievementStandards: ['[4국03-05] 쓰기의 과정에서 쓴 글을 점검하고 고쳐 쓴다.'], duration: 40 },
      { id: 'kor_4_2_5_4', period: 4, title: '발표 자료 만들기', objectives: ['발표 자료를 만들 수 있다.'], achievementStandards: ['[4국01-03] 원고를 보고 자연스럽게 발표한다.'], duration: 40 },
    ]
  },
  'kor_4_2_6': {
    unitId: 'kor_4_2_6',
    unitName: '6. 본받고 싶은 인물을 찾아봐요',
    periods: [
      { id: 'kor_4_2_6_1', period: 1, title: '인물의 행동 살펴보기', objectives: ['인물의 행동을 살펴볼 수 있다.'], achievementStandards: ['[4국02-04] 글을 읽고 자신의 생각을 정리한다.'], duration: 40 },
      { id: 'kor_4_2_6_2', period: 2, title: '본받을 점 찾기', objectives: ['인물에서 본받을 점을 찾을 수 있다.'], achievementStandards: ['[4국02-04] 글을 읽고 자신의 생각을 정리한다.'], duration: 40 },
      { id: 'kor_4_2_6_3', period: 3, title: '본받고 싶은 인물 조사하기', objectives: ['본받고 싶은 인물을 조사할 수 있다.'], achievementStandards: ['[4국02-01] 글을 읽고 내용을 확인한다.'], duration: 40 },
      { id: 'kor_4_2_6_4', period: 4, title: '인물 소개하기', objectives: ['본받고 싶은 인물을 소개할 수 있다.'], achievementStandards: ['[4국01-03] 원고를 보고 자연스럽게 발표한다.'], duration: 40 },
    ]
  },
  'kor_4_2_7': {
    unitId: 'kor_4_2_7',
    unitName: '7. 독서 감상문을 써요',
    periods: [
      { id: 'kor_4_2_7_1', period: 1, title: '독서 감상문의 특징', objectives: ['독서 감상문의 특징을 알 수 있다.'], achievementStandards: ['[4국02-04] 글을 읽고 자신의 생각을 정리한다.'], duration: 40 },
      { id: 'kor_4_2_7_2', period: 2, title: '책 읽고 생각 정리하기', objectives: ['책을 읽고 생각을 정리할 수 있다.'], achievementStandards: ['[4국02-04] 글을 읽고 자신의 생각을 정리한다.'], duration: 40 },
      { id: 'kor_4_2_7_3', period: 3, title: '독서 감상문 쓰기', objectives: ['독서 감상문을 쓸 수 있다.'], achievementStandards: ['[4국03-04] 읽는 이를 고려하여 자신의 마음을 표현하는 글을 쓴다.'], duration: 40 },
      { id: 'kor_4_2_7_4', period: 4, title: '독서 감상문 나누기', objectives: ['독서 감상문을 나눌 수 있다.'], achievementStandards: ['[4국01-01] 대화의 즐거움을 알고 적극적으로 대화에 참여한다.'], duration: 40 },
    ]
  },
  'kor_4_2_8': {
    unitId: 'kor_4_2_8',
    unitName: '8. 생각하며 읽어요',
    periods: [
      { id: 'kor_4_2_8_1', period: 1, title: '글의 내용 예측하기', objectives: ['글의 내용을 예측할 수 있다.'], achievementStandards: ['[4국02-03] 글에서 낱말의 의미나 생략된 내용을 짐작한다.'], duration: 40 },
      { id: 'kor_4_2_8_2', period: 2, title: '질문하며 읽기', objectives: ['질문하며 글을 읽을 수 있다.'], achievementStandards: ['[4국02-03] 글에서 낱말의 의미나 생략된 내용을 짐작한다.'], duration: 40 },
      { id: 'kor_4_2_8_3', period: 3, title: '글의 의미 파악하기', objectives: ['글의 의미를 파악할 수 있다.'], achievementStandards: ['[4국02-03] 글에서 낱말의 의미나 생략된 내용을 짐작한다.'], duration: 40 },
      { id: 'kor_4_2_8_4', period: 4, title: '생각하며 읽기 실천하기', objectives: ['생각하며 읽기를 실천할 수 있다.'], achievementStandards: ['[4국02-04] 글을 읽고 자신의 생각을 정리한다.'], duration: 40 },
    ]
  },
  // 5학년 1학기
  'kor_5_1_1': {
    unitId: 'kor_5_1_1',
    unitName: '1. 대화와 공감',
    periods: [
      { id: 'kor_5_1_1_1', period: 1, title: '공감하며 대화하기', objectives: ['공감하며 대화하는 방법을 알 수 있다.'], achievementStandards: ['[6국01-01] 구어 의사소통의 특성을 바탕으로 하여 듣기·말하기를 한다.'], duration: 40 },
      { id: 'kor_5_1_1_2', period: 2, title: '상대의 감정 이해하기', objectives: ['상대의 감정을 이해하며 대화할 수 있다.'], achievementStandards: ['[6국01-01] 구어 의사소통의 특성을 바탕으로 하여 듣기·말하기를 한다.'], duration: 40 },
      { id: 'kor_5_1_1_3', period: 3, title: '바람직한 대화 예절', objectives: ['바람직한 대화 예절을 익힐 수 있다.'], achievementStandards: ['[6국01-05] 매체 자료를 활용하여 내용을 효과적으로 발표한다.'], duration: 40 },
      { id: 'kor_5_1_1_4', period: 4, title: '공감 대화 연습하기', objectives: ['공감하며 대화하는 것을 연습할 수 있다.'], achievementStandards: ['[6국01-01] 구어 의사소통의 특성을 바탕으로 하여 듣기·말하기를 한다.'], duration: 40 },
    ]
  },
  'kor_5_1_2': {
    unitId: 'kor_5_1_2',
    unitName: '2. 작품을 감상해요',
    periods: [
      { id: 'kor_5_1_2_1', period: 1, title: '작품 감상 방법', objectives: ['작품을 감상하는 방법을 알 수 있다.'], achievementStandards: ['[6국05-01] 시에서 비유하는 표현의 특성과 효과를 알 수 있다.'], duration: 40 },
      { id: 'kor_5_1_2_2', period: 2, title: '시 감상하기', objectives: ['시를 감상하고 느낌을 표현할 수 있다.'], achievementStandards: ['[6국05-01] 시에서 비유하는 표현의 특성과 효과를 알 수 있다.'], duration: 40 },
      { id: 'kor_5_1_2_3', period: 3, title: '이야기 감상하기', objectives: ['이야기를 감상하고 느낌을 표현할 수 있다.'], achievementStandards: ['[6국05-02] 작품 속 인물의 삶을 이해하고 자신의 삶과 관련지어 성찰한다.'], duration: 40 },
      { id: 'kor_5_1_2_4', period: 4, title: '감상문 쓰기', objectives: ['작품을 감상하고 감상문을 쓸 수 있다.'], achievementStandards: ['[6국03-01] 쓰기는 절차에 따라 의미를 구성하고 표현하는 과정임을 이해하고 글을 쓴다.'], duration: 40 },
    ]
  },
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

// ==================== 음악 ====================
export const MUSIC_LESSONS: Record<string, UnitLessons> = {
  // 3학년
  'mus_3_1': {
    unitId: 'mus_3_1',
    unitName: '1. 음악으로 만나요',
    periods: [
      { id: 'mus_3_1_1', period: 1, title: '노래로 인사해요', objectives: ['노래를 부르며 친구들과 인사할 수 있다.'], achievementStandards: ['[4음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_3_1_2', period: 2, title: '리듬 악기 연주하기', objectives: ['리듬 악기를 사용하여 연주할 수 있다.'], achievementStandards: ['[4음01-02] 악곡에 어울리는 신체표현을 한다.'], duration: 40 },
      { id: 'mus_3_1_3', period: 3, title: '박자에 맞춰 노래하기', objectives: ['박자에 맞춰 노래를 부를 수 있다.'], achievementStandards: ['[4음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_3_1_4', period: 4, title: '음악 감상하기', objectives: ['음악을 감상하고 느낌을 나눌 수 있다.'], achievementStandards: ['[4음02-01] 3~4학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
    ]
  },
  'mus_3_2': {
    unitId: 'mus_3_2',
    unitName: '2. 음악으로 표현해요',
    periods: [
      { id: 'mus_3_2_1', period: 1, title: '셈여림 표현하기', objectives: ['셈여림을 살려 노래를 부를 수 있다.'], achievementStandards: ['[4음01-03] 제재곡의 노랫말을 바꾸거나 노랫말에 맞는 말붙임새로 노래를 부른다.'], duration: 40 },
      { id: 'mus_3_2_2', period: 2, title: '빠르기 표현하기', objectives: ['빠르기를 살려 노래를 부를 수 있다.'], achievementStandards: ['[4음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_3_2_3', period: 3, title: '몸으로 음악 표현하기', objectives: ['음악에 맞춰 몸으로 표현할 수 있다.'], achievementStandards: ['[4음01-02] 악곡에 어울리는 신체표현을 한다.'], duration: 40 },
      { id: 'mus_3_2_4', period: 4, title: '그림으로 음악 표현하기', objectives: ['음악을 듣고 그림으로 표현할 수 있다.'], achievementStandards: ['[4음02-02] 상황이나 이야기 등을 음악으로 표현한다.'], duration: 40 },
    ]
  },
  'mus_3_3': {
    unitId: 'mus_3_3',
    unitName: '3. 음악으로 이야기해요',
    periods: [
      { id: 'mus_3_3_1', period: 1, title: '이야기가 있는 음악', objectives: ['이야기가 담긴 음악을 감상할 수 있다.'], achievementStandards: ['[4음02-01] 3~4학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
      { id: 'mus_3_3_2', period: 2, title: '노랫말 바꿔 부르기', objectives: ['노랫말을 바꿔서 노래를 부를 수 있다.'], achievementStandards: ['[4음01-03] 제재곡의 노랫말을 바꾸거나 노랫말에 맞는 말붙임새로 노래를 부른다.'], duration: 40 },
      { id: 'mus_3_3_3', period: 3, title: '음악으로 이야기 만들기', objectives: ['음악을 활용하여 이야기를 만들 수 있다.'], achievementStandards: ['[4음02-02] 상황이나 이야기 등을 음악으로 표현한다.'], duration: 40 },
    ]
  },
  'mus_3_4': {
    unitId: 'mus_3_4',
    unitName: '4. 음악으로 함께해요',
    periods: [
      { id: 'mus_3_4_1', period: 1, title: '함께 노래 부르기', objectives: ['친구들과 함께 노래를 부를 수 있다.'], achievementStandards: ['[4음03-01] 음악을 활용하여 가정, 학교 행사에 참여하고 느낌을 발표한다.'], duration: 40 },
      { id: 'mus_3_4_2', period: 2, title: '악기 합주하기', objectives: ['친구들과 악기로 합주할 수 있다.'], achievementStandards: ['[4음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_3_4_3', period: 3, title: '음악회 열기', objectives: ['친구들과 음악회를 열 수 있다.'], achievementStandards: ['[4음03-01] 음악을 활용하여 가정, 학교 행사에 참여하고 느낌을 발표한다.'], duration: 40 },
    ]
  },
  // 4학년
  'mus_4_1': {
    unitId: 'mus_4_1',
    unitName: '1. 소리의 어울림',
    periods: [
      { id: 'mus_4_1_1', period: 1, title: '화음 이해하기', objectives: ['화음의 개념을 이해할 수 있다.'], achievementStandards: ['[4음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_4_1_2', period: 2, title: '2부 합창하기', objectives: ['2부 합창을 할 수 있다.'], achievementStandards: ['[4음01-04] 제재곡의 일부 가락을 바꾸어 표현한다.'], duration: 40 },
      { id: 'mus_4_1_3', period: 3, title: '리코더 연주하기', objectives: ['리코더로 곡을 연주할 수 있다.'], achievementStandards: ['[4음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_4_1_4', period: 4, title: '합주하기', objectives: ['여러 악기로 합주할 수 있다.'], achievementStandards: ['[4음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
    ]
  },
  'mus_4_2': {
    unitId: 'mus_4_2',
    unitName: '2. 음악으로 소통해요',
    periods: [
      { id: 'mus_4_2_1', period: 1, title: '감정을 담아 노래하기', objectives: ['감정을 담아 노래를 부를 수 있다.'], achievementStandards: ['[4음01-03] 제재곡의 노랫말을 바꾸거나 노랫말에 맞는 말붙임새로 노래를 부른다.'], duration: 40 },
      { id: 'mus_4_2_2', period: 2, title: '음악으로 마음 전하기', objectives: ['음악으로 마음을 전할 수 있다.'], achievementStandards: ['[4음02-02] 상황이나 이야기 등을 음악으로 표현한다.'], duration: 40 },
      { id: 'mus_4_2_3', period: 3, title: '음악 감상 발표하기', objectives: ['음악을 감상하고 느낌을 발표할 수 있다.'], achievementStandards: ['[4음02-01] 3~4학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
    ]
  },
  'mus_4_3': {
    unitId: 'mus_4_3',
    unitName: '3. 음악 여행',
    periods: [
      { id: 'mus_4_3_1', period: 1, title: '우리나라 음악 알기', objectives: ['우리나라 전통 음악을 알 수 있다.'], achievementStandards: ['[4음02-03] 우리나라 음악과 외국 음악을 듣고 악곡의 특징에 대해 이야기한다.'], duration: 40 },
      { id: 'mus_4_3_2', period: 2, title: '다른 나라 음악 알기', objectives: ['다른 나라의 음악을 알 수 있다.'], achievementStandards: ['[4음02-03] 우리나라 음악과 외국 음악을 듣고 악곡의 특징에 대해 이야기한다.'], duration: 40 },
      { id: 'mus_4_3_3', period: 3, title: '세계 여러 나라 노래 부르기', objectives: ['세계 여러 나라의 노래를 부를 수 있다.'], achievementStandards: ['[4음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
    ]
  },
  'mus_4_4': {
    unitId: 'mus_4_4',
    unitName: '4. 함께 만드는 음악',
    periods: [
      { id: 'mus_4_4_1', period: 1, title: '가락 만들기', objectives: ['간단한 가락을 만들 수 있다.'], achievementStandards: ['[4음01-04] 제재곡의 일부 가락을 바꾸어 표현한다.'], duration: 40 },
      { id: 'mus_4_4_2', period: 2, title: '리듬 만들기', objectives: ['리듬을 만들어 연주할 수 있다.'], achievementStandards: ['[4음02-02] 상황이나 이야기 등을 음악으로 표현한다.'], duration: 40 },
      { id: 'mus_4_4_3', period: 3, title: '음악극 꾸미기', objectives: ['친구들과 음악극을 꾸밀 수 있다.'], achievementStandards: ['[4음03-01] 음악을 활용하여 가정, 학교 행사에 참여하고 느낌을 발표한다.'], duration: 40 },
    ]
  },
  // 5학년
  'mus_5_1': {
    unitId: 'mus_5_1',
    unitName: '1. 음악과 생활',
    periods: [
      { id: 'mus_5_1_1', period: 1, title: '생활 속 음악 찾기', objectives: ['생활 속에서 음악을 찾을 수 있다.'], achievementStandards: ['[6음03-01] 음악을 활용하여 가정, 학교, 사회 등의 행사에 참여하고 느낌을 발표한다.'], duration: 40 },
      { id: 'mus_5_1_2', period: 2, title: '배경 음악의 역할', objectives: ['배경 음악의 역할을 알 수 있다.'], achievementStandards: ['[6음02-01] 5~6학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
      { id: 'mus_5_1_3', period: 3, title: '상황에 어울리는 음악', objectives: ['상황에 어울리는 음악을 선택할 수 있다.'], achievementStandards: ['[6음02-02] 다양한 문화권의 음악을 듣고 음악의 특징에 대해 발표한다.'], duration: 40 },
      { id: 'mus_5_1_4', period: 4, title: '음악의 사회적 역할', objectives: ['음악의 사회적 역할을 이해할 수 있다.'], achievementStandards: ['[6음03-02] 음악이 사회에 미치는 영향에 대해 발표한다.'], duration: 40 },
    ]
  },
  'mus_5_2': {
    unitId: 'mus_5_2',
    unitName: '2. 함께하는 음악',
    periods: [
      { id: 'mus_5_2_1', period: 1, title: '합창하기', objectives: ['화음을 넣어 합창할 수 있다.'], achievementStandards: ['[6음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_5_2_2', period: 2, title: '기악 합주하기', objectives: ['여러 악기로 합주할 수 있다.'], achievementStandards: ['[6음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_5_2_3', period: 3, title: '음악에 맞춰 움직이기', objectives: ['음악에 맞춰 창의적으로 움직일 수 있다.'], achievementStandards: ['[6음01-02] 악곡의 특징을 살려 창의적으로 신체표현을 한다.'], duration: 40 },
      { id: 'mus_5_2_4', period: 4, title: '뮤지컬 만들기', objectives: ['친구들과 뮤지컬을 만들 수 있다.'], achievementStandards: ['[6음01-03] 다양한 예술 표현과 관련지어 음악을 만든다.'], duration: 40 },
    ]
  },
  'mus_5_3': {
    unitId: 'mus_5_3',
    unitName: '3. 음악의 아름다움',
    periods: [
      { id: 'mus_5_3_1', period: 1, title: '클래식 음악 감상', objectives: ['클래식 음악을 감상할 수 있다.'], achievementStandards: ['[6음02-01] 5~6학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
      { id: 'mus_5_3_2', period: 2, title: '국악의 아름다움', objectives: ['국악의 아름다움을 느낄 수 있다.'], achievementStandards: ['[6음02-02] 다양한 문화권의 음악을 듣고 음악의 특징에 대해 발표한다.'], duration: 40 },
      { id: 'mus_5_3_3', period: 3, title: '음악의 형식 알기', objectives: ['음악의 형식을 알 수 있다.'], achievementStandards: ['[6음02-01] 5~6학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
    ]
  },
  'mus_5_4': {
    unitId: 'mus_5_4',
    unitName: '4. 음악으로 하나 되어',
    periods: [
      { id: 'mus_5_4_1', period: 1, title: '통일 노래 부르기', objectives: ['통일 관련 노래를 부를 수 있다.'], achievementStandards: ['[6음03-01] 음악을 활용하여 가정, 학교, 사회 등의 행사에 참여하고 느낌을 발표한다.'], duration: 40 },
      { id: 'mus_5_4_2', period: 2, title: '평화의 노래', objectives: ['평화를 주제로 한 노래를 부를 수 있다.'], achievementStandards: ['[6음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_5_4_3', period: 3, title: '음악으로 마음 나누기', objectives: ['음악으로 마음을 나눌 수 있다.'], achievementStandards: ['[6음03-02] 음악이 사회에 미치는 영향에 대해 발표한다.'], duration: 40 },
    ]
  },
  // 6학년
  'mus_6_1': {
    unitId: 'mus_6_1',
    unitName: '1. 음악의 멋',
    periods: [
      { id: 'mus_6_1_1', period: 1, title: '가곡의 멋', objectives: ['가곡의 멋을 느낄 수 있다.'], achievementStandards: ['[6음02-01] 5~6학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
      { id: 'mus_6_1_2', period: 2, title: '민요의 멋', objectives: ['민요의 멋을 느낄 수 있다.'], achievementStandards: ['[6음02-02] 다양한 문화권의 음악을 듣고 음악의 특징에 대해 발표한다.'], duration: 40 },
      { id: 'mus_6_1_3', period: 3, title: '장단에 맞춰 노래하기', objectives: ['장단에 맞춰 노래를 부를 수 있다.'], achievementStandards: ['[6음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_6_1_4', period: 4, title: '전통 악기 연주하기', objectives: ['전통 악기를 연주할 수 있다.'], achievementStandards: ['[6음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
    ]
  },
  'mus_6_2': {
    unitId: 'mus_6_2',
    unitName: '2. 다양한 음악 문화',
    periods: [
      { id: 'mus_6_2_1', period: 1, title: '세계 여러 나라 음악', objectives: ['세계 여러 나라의 음악을 감상할 수 있다.'], achievementStandards: ['[6음02-02] 다양한 문화권의 음악을 듣고 음악의 특징에 대해 발표한다.'], duration: 40 },
      { id: 'mus_6_2_2', period: 2, title: '음악 문화 비교하기', objectives: ['여러 나라의 음악 문화를 비교할 수 있다.'], achievementStandards: ['[6음02-02] 다양한 문화권의 음악을 듣고 음악의 특징에 대해 발표한다.'], duration: 40 },
      { id: 'mus_6_2_3', period: 3, title: '다문화 음악 체험', objectives: ['다문화 음악을 체험할 수 있다.'], achievementStandards: ['[6음03-01] 음악을 활용하여 가정, 학교, 사회 등의 행사에 참여하고 느낌을 발표한다.'], duration: 40 },
    ]
  },
  'mus_6_3': {
    unitId: 'mus_6_3',
    unitName: '3. 음악과 삶',
    periods: [
      { id: 'mus_6_3_1', period: 1, title: '음악가의 삶', objectives: ['음악가의 삶을 이해할 수 있다.'], achievementStandards: ['[6음02-01] 5~6학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
      { id: 'mus_6_3_2', period: 2, title: '음악이 주는 감동', objectives: ['음악이 주는 감동을 느낄 수 있다.'], achievementStandards: ['[6음02-01] 5~6학년 수준의 음악 요소와 개념을 구별하여 표현한다.'], duration: 40 },
      { id: 'mus_6_3_3', period: 3, title: '나의 음악 만들기', objectives: ['나만의 음악을 만들 수 있다.'], achievementStandards: ['[6음01-03] 다양한 예술 표현과 관련지어 음악을 만든다.'], duration: 40 },
    ]
  },
  'mus_6_4': {
    unitId: 'mus_6_4',
    unitName: '4. 음악의 날개',
    periods: [
      { id: 'mus_6_4_1', period: 1, title: '졸업 노래 부르기', objectives: ['졸업 관련 노래를 부를 수 있다.'], achievementStandards: ['[6음03-01] 음악을 활용하여 가정, 학교, 사회 등의 행사에 참여하고 느낌을 발표한다.'], duration: 40 },
      { id: 'mus_6_4_2', period: 2, title: '꿈과 희망의 노래', objectives: ['꿈과 희망을 담은 노래를 부를 수 있다.'], achievementStandards: ['[6음01-01] 악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.'], duration: 40 },
      { id: 'mus_6_4_3', period: 3, title: '음악회 준비하기', objectives: ['졸업 음악회를 준비할 수 있다.'], achievementStandards: ['[6음03-01] 음악을 활용하여 가정, 학교, 사회 등의 행사에 참여하고 느낌을 발표한다.'], duration: 40 },
    ]
  },
};

// ==================== 미술 ====================
export const ART_LESSONS: Record<string, UnitLessons> = {
  // 3학년
  'art_3_1': {
    unitId: 'art_3_1',
    unitName: '1. 미술과 친해지기',
    periods: [
      { id: 'art_3_1_1', period: 1, title: '미술의 세계', objectives: ['미술의 다양한 분야를 알 수 있다.'], achievementStandards: ['[4미01-01] 자연물과 인공물의 조형적 특징을 탐색할 수 있다.'], duration: 40 },
      { id: 'art_3_1_2', period: 2, title: '색의 세계', objectives: ['색의 특징을 이해할 수 있다.'], achievementStandards: ['[4미01-02] 기초적인 표현 재료와 용구의 사용법을 익혀 안전하게 사용할 수 있다.'], duration: 40 },
      { id: 'art_3_1_3', period: 3, title: '선과 형', objectives: ['선과 형의 특징을 이해할 수 있다.'], achievementStandards: ['[4미02-01] 발상 방법을 활용하여 아이디어를 발전시킬 수 있다.'], duration: 40 },
      { id: 'art_3_1_4', period: 4, title: '다양한 재료 탐색', objectives: ['다양한 재료를 탐색할 수 있다.'], achievementStandards: ['[4미01-02] 기초적인 표현 재료와 용구의 사용법을 익혀 안전하게 사용할 수 있다.'], duration: 40 },
    ]
  },
  'art_3_2': {
    unitId: 'art_3_2',
    unitName: '2. 관찰하고 표현하기',
    periods: [
      { id: 'art_3_2_1', period: 1, title: '자연물 관찰하기', objectives: ['자연물을 관찰하여 표현할 수 있다.'], achievementStandards: ['[4미01-01] 자연물과 인공물의 조형적 특징을 탐색할 수 있다.'], duration: 40 },
      { id: 'art_3_2_2', period: 2, title: '인물 표현하기', objectives: ['인물을 관찰하여 표현할 수 있다.'], achievementStandards: ['[4미02-02] 기초적인 표현 재료와 용구를 활용하여 표현할 수 있다.'], duration: 40 },
      { id: 'art_3_2_3', period: 3, title: '생활 용품 그리기', objectives: ['생활 용품을 관찰하여 그릴 수 있다.'], achievementStandards: ['[4미02-02] 기초적인 표현 재료와 용구를 활용하여 표현할 수 있다.'], duration: 40 },
      { id: 'art_3_2_4', period: 4, title: '풍경 그리기', objectives: ['풍경을 관찰하여 그릴 수 있다.'], achievementStandards: ['[4미02-03] 평면이나 입체에 자신의 느낌과 생각을 표현할 수 있다.'], duration: 40 },
    ]
  },
  'art_3_3': {
    unitId: 'art_3_3',
    unitName: '3. 상상하여 표현하기',
    periods: [
      { id: 'art_3_3_1', period: 1, title: '상상화 그리기', objectives: ['상상한 것을 그림으로 표현할 수 있다.'], achievementStandards: ['[4미02-01] 발상 방법을 활용하여 아이디어를 발전시킬 수 있다.'], duration: 40 },
      { id: 'art_3_3_2', period: 2, title: '이야기 그림 그리기', objectives: ['이야기를 그림으로 표현할 수 있다.'], achievementStandards: ['[4미02-03] 평면이나 입체에 자신의 느낌과 생각을 표현할 수 있다.'], duration: 40 },
      { id: 'art_3_3_3', period: 3, title: '만들기 작품', objectives: ['상상한 것을 입체 작품으로 만들 수 있다.'], achievementStandards: ['[4미02-04] 생활 속에서 미술을 활용할 수 있다.'], duration: 40 },
    ]
  },
  'art_3_4': {
    unitId: 'art_3_4',
    unitName: '4. 미술작품 감상하기',
    periods: [
      { id: 'art_3_4_1', period: 1, title: '작품 감상 방법', objectives: ['작품을 감상하는 방법을 알 수 있다.'], achievementStandards: ['[4미03-01] 다양한 분야의 미술 작품과 문화를 감상할 수 있다.'], duration: 40 },
      { id: 'art_3_4_2', period: 2, title: '친구 작품 감상', objectives: ['친구의 작품을 감상할 수 있다.'], achievementStandards: ['[4미03-02] 미술 작품에 대한 자신의 느낌과 생각을 발표할 수 있다.'], duration: 40 },
      { id: 'art_3_4_3', period: 3, title: '명화 감상', objectives: ['유명한 미술 작품을 감상할 수 있다.'], achievementStandards: ['[4미03-01] 다양한 분야의 미술 작품과 문화를 감상할 수 있다.'], duration: 40 },
    ]
  },
  // 4학년
  'art_4_1': {
    unitId: 'art_4_1',
    unitName: '1. 미술로 이야기하기',
    periods: [
      { id: 'art_4_1_1', period: 1, title: '그림으로 이야기하기', objectives: ['그림으로 이야기를 표현할 수 있다.'], achievementStandards: ['[4미02-03] 평면이나 입체에 자신의 느낌과 생각을 표현할 수 있다.'], duration: 40 },
      { id: 'art_4_1_2', period: 2, title: '만화 그리기', objectives: ['만화를 그려 이야기를 표현할 수 있다.'], achievementStandards: ['[4미02-01] 발상 방법을 활용하여 아이디어를 발전시킬 수 있다.'], duration: 40 },
      { id: 'art_4_1_3', period: 3, title: '포스터 만들기', objectives: ['포스터를 만들어 메시지를 전달할 수 있다.'], achievementStandards: ['[4미02-04] 생활 속에서 미술을 활용할 수 있다.'], duration: 40 },
    ]
  },
  'art_4_2': {
    unitId: 'art_4_2',
    unitName: '2. 생활 속 미술',
    periods: [
      { id: 'art_4_2_1', period: 1, title: '생활 용품 꾸미기', objectives: ['생활 용품을 꾸밀 수 있다.'], achievementStandards: ['[4미02-04] 생활 속에서 미술을 활용할 수 있다.'], duration: 40 },
      { id: 'art_4_2_2', period: 2, title: '환경 미술', objectives: ['환경을 아름답게 꾸밀 수 있다.'], achievementStandards: ['[4미02-04] 생활 속에서 미술을 활용할 수 있다.'], duration: 40 },
      { id: 'art_4_2_3', period: 3, title: '디자인의 세계', objectives: ['디자인의 역할을 이해할 수 있다.'], achievementStandards: ['[4미01-01] 자연물과 인공물의 조형적 특징을 탐색할 수 있다.'], duration: 40 },
    ]
  },
  'art_4_3': {
    unitId: 'art_4_3',
    unitName: '3. 미술 작품 속 세상',
    periods: [
      { id: 'art_4_3_1', period: 1, title: '미술관 여행', objectives: ['미술관의 역할을 알 수 있다.'], achievementStandards: ['[4미03-01] 다양한 분야의 미술 작품과 문화를 감상할 수 있다.'], duration: 40 },
      { id: 'art_4_3_2', period: 2, title: '작품 속 이야기', objectives: ['작품 속 이야기를 찾을 수 있다.'], achievementStandards: ['[4미03-02] 미술 작품에 대한 자신의 느낌과 생각을 발표할 수 있다.'], duration: 40 },
      { id: 'art_4_3_3', period: 3, title: '우리 미술 문화', objectives: ['우리나라 미술 문화를 알 수 있다.'], achievementStandards: ['[4미03-01] 다양한 분야의 미술 작품과 문화를 감상할 수 있다.'], duration: 40 },
    ]
  },
  'art_4_4': {
    unitId: 'art_4_4',
    unitName: '4. 함께하는 미술',
    periods: [
      { id: 'art_4_4_1', period: 1, title: '협동 작품 만들기', objectives: ['친구들과 협동하여 작품을 만들 수 있다.'], achievementStandards: ['[4미02-03] 평면이나 입체에 자신의 느낌과 생각을 표현할 수 있다.'], duration: 40 },
      { id: 'art_4_4_2', period: 2, title: '전시회 열기', objectives: ['전시회를 열 수 있다.'], achievementStandards: ['[4미03-02] 미술 작품에 대한 자신의 느낌과 생각을 발표할 수 있다.'], duration: 40 },
      { id: 'art_4_4_3', period: 3, title: '미술 나눔', objectives: ['미술로 나눔을 실천할 수 있다.'], achievementStandards: ['[4미02-04] 생활 속에서 미술을 활용할 수 있다.'], duration: 40 },
    ]
  },
  // 5학년
  'art_5_1': {
    unitId: 'art_5_1',
    unitName: '1. 미술의 세계',
    periods: [
      { id: 'art_5_1_1', period: 1, title: '미술의 다양한 분야', objectives: ['미술의 다양한 분야를 알 수 있다.'], achievementStandards: ['[6미01-01] 주제를 다양하게 탐색할 수 있다.'], duration: 40 },
      { id: 'art_5_1_2', period: 2, title: '조형 요소와 원리', objectives: ['조형 요소와 원리를 이해할 수 있다.'], achievementStandards: ['[6미01-02] 표현 방법과 과정에 관심을 가지고 계획할 수 있다.'], duration: 40 },
      { id: 'art_5_1_3', period: 3, title: '다양한 표현 재료', objectives: ['다양한 표현 재료를 탐색할 수 있다.'], achievementStandards: ['[6미01-03] 다양한 재료와 용구의 특성을 알고 활용하여 표현할 수 있다.'], duration: 40 },
    ]
  },
  'art_5_2': {
    unitId: 'art_5_2',
    unitName: '2. 표현의 즐거움',
    periods: [
      { id: 'art_5_2_1', period: 1, title: '주제 표현하기', objectives: ['주제를 다양한 방법으로 표현할 수 있다.'], achievementStandards: ['[6미02-01] 주제를 다양하게 탐색할 수 있다.'], duration: 40 },
      { id: 'art_5_2_2', period: 2, title: '입체 작품 만들기', objectives: ['입체 작품을 만들 수 있다.'], achievementStandards: ['[6미02-02] 조형 요소와 원리를 알고 표현에 적용할 수 있다.'], duration: 40 },
      { id: 'art_5_2_3', period: 3, title: '디지털 미술', objectives: ['디지털 도구로 미술 작품을 만들 수 있다.'], achievementStandards: ['[6미02-03] 다양한 표현 방법의 특징과 효과를 알고 표현할 수 있다.'], duration: 40 },
      { id: 'art_5_2_4', period: 4, title: '판화 만들기', objectives: ['판화를 만들 수 있다.'], achievementStandards: ['[6미02-03] 다양한 표현 방법의 특징과 효과를 알고 표현할 수 있다.'], duration: 40 },
    ]
  },
  'art_5_3': {
    unitId: 'art_5_3',
    unitName: '3. 미술 문화 탐험',
    periods: [
      { id: 'art_5_3_1', period: 1, title: '세계의 미술 문화', objectives: ['세계 여러 나라의 미술 문화를 알 수 있다.'], achievementStandards: ['[6미03-01] 미술 작품의 특징을 알 수 있다.'], duration: 40 },
      { id: 'art_5_3_2', period: 2, title: '우리나라 미술의 역사', objectives: ['우리나라 미술의 역사를 알 수 있다.'], achievementStandards: ['[6미03-01] 미술 작품의 특징을 알 수 있다.'], duration: 40 },
      { id: 'art_5_3_3', period: 3, title: '미술과 문화유산', objectives: ['미술 문화유산의 가치를 알 수 있다.'], achievementStandards: ['[6미03-02] 미술 작품이 가진 가치를 알 수 있다.'], duration: 40 },
    ]
  },
  'art_5_4': {
    unitId: 'art_5_4',
    unitName: '4. 소통하는 미술',
    periods: [
      { id: 'art_5_4_1', period: 1, title: '광고와 미술', objectives: ['광고에서 미술의 역할을 알 수 있다.'], achievementStandards: ['[6미02-04] 미술 작품에 담긴 의미와 메시지를 읽을 수 있다.'], duration: 40 },
      { id: 'art_5_4_2', period: 2, title: '공공 미술', objectives: ['공공 미술의 역할을 알 수 있다.'], achievementStandards: ['[6미02-04] 미술 작품에 담긴 의미와 메시지를 읽을 수 있다.'], duration: 40 },
      { id: 'art_5_4_3', period: 3, title: '미술과 사회', objectives: ['미술이 사회에 미치는 영향을 알 수 있다.'], achievementStandards: ['[6미03-02] 미술 작품이 가진 가치를 알 수 있다.'], duration: 40 },
    ]
  },
  // 6학년
  'art_6_1': {
    unitId: 'art_6_1',
    unitName: '1. 미술로 소통하기',
    periods: [
      { id: 'art_6_1_1', period: 1, title: '시각 문화와 미술', objectives: ['시각 문화에서 미술의 역할을 알 수 있다.'], achievementStandards: ['[6미02-04] 미술 작품에 담긴 의미와 메시지를 읽을 수 있다.'], duration: 40 },
      { id: 'art_6_1_2', period: 2, title: '미디어 아트', objectives: ['미디어 아트를 이해하고 표현할 수 있다.'], achievementStandards: ['[6미02-03] 다양한 표현 방법의 특징과 효과를 알고 표현할 수 있다.'], duration: 40 },
      { id: 'art_6_1_3', period: 3, title: '메시지 전달하기', objectives: ['미술로 메시지를 전달할 수 있다.'], achievementStandards: ['[6미02-04] 미술 작품에 담긴 의미와 메시지를 읽을 수 있다.'], duration: 40 },
    ]
  },
  'art_6_2': {
    unitId: 'art_6_2',
    unitName: '2. 창의적 표현',
    periods: [
      { id: 'art_6_2_1', period: 1, title: '발상과 표현', objectives: ['창의적으로 발상하고 표현할 수 있다.'], achievementStandards: ['[6미02-01] 주제를 다양하게 탐색할 수 있다.'], duration: 40 },
      { id: 'art_6_2_2', period: 2, title: '융합 미술', objectives: ['다른 분야와 융합한 미술을 표현할 수 있다.'], achievementStandards: ['[6미01-02] 표현 방법과 과정에 관심을 가지고 계획할 수 있다.'], duration: 40 },
      { id: 'art_6_2_3', period: 3, title: '설치 미술', objectives: ['설치 미술 작품을 만들 수 있다.'], achievementStandards: ['[6미02-02] 조형 요소와 원리를 알고 표현에 적용할 수 있다.'], duration: 40 },
    ]
  },
  'art_6_3': {
    unitId: 'art_6_3',
    unitName: '3. 미술과 문화',
    periods: [
      { id: 'art_6_3_1', period: 1, title: '미술과 시대', objectives: ['시대별 미술의 특징을 알 수 있다.'], achievementStandards: ['[6미03-01] 미술 작품의 특징을 알 수 있다.'], duration: 40 },
      { id: 'art_6_3_2', period: 2, title: '다문화 미술', objectives: ['다문화 미술을 이해할 수 있다.'], achievementStandards: ['[6미03-01] 미술 작품의 특징을 알 수 있다.'], duration: 40 },
      { id: 'art_6_3_3', period: 3, title: '미술 비평', objectives: ['미술 작품을 비평할 수 있다.'], achievementStandards: ['[6미03-02] 미술 작품이 가진 가치를 알 수 있다.'], duration: 40 },
    ]
  },
  'art_6_4': {
    unitId: 'art_6_4',
    unitName: '4. 미술의 가치',
    periods: [
      { id: 'art_6_4_1', period: 1, title: '미술의 사회적 가치', objectives: ['미술의 사회적 가치를 알 수 있다.'], achievementStandards: ['[6미03-02] 미술 작품이 가진 가치를 알 수 있다.'], duration: 40 },
      { id: 'art_6_4_2', period: 2, title: '미술과 진로', objectives: ['미술 관련 진로를 탐색할 수 있다.'], achievementStandards: ['[6미03-02] 미술 작품이 가진 가치를 알 수 있다.'], duration: 40 },
      { id: 'art_6_4_3', period: 3, title: '졸업 전시회', objectives: ['졸업 전시회를 준비할 수 있다.'], achievementStandards: ['[6미02-04] 미술 작품에 담긴 의미와 메시지를 읽을 수 있다.'], duration: 40 },
    ]
  },
};

// ==================== 체육 ====================
export const PE_LESSONS: Record<string, UnitLessons> = {
  // 3학년
  'pe_3_1': {
    unitId: 'pe_3_1',
    unitName: '1. 건강 활동',
    periods: [
      { id: 'pe_3_1_1', period: 1, title: '건강한 생활 알기', objectives: ['건강한 생활의 중요성을 알 수 있다.'], achievementStandards: ['[4체01-01] 건강과 신체 발달에 좋은 운동과 영양의 관계를 안다.'], duration: 40 },
      { id: 'pe_3_1_2', period: 2, title: '바른 자세 익히기', objectives: ['바른 자세를 익힐 수 있다.'], achievementStandards: ['[4체01-02] 체격과 체력을 측정하고, 자신의 체력 수준을 파악한다.'], duration: 40 },
      { id: 'pe_3_1_3', period: 3, title: '체력 기르기', objectives: ['체력을 기르는 운동을 할 수 있다.'], achievementStandards: ['[4체01-03] 신체의 유연성, 민첩성, 근력, 근지구력을 높이는 운동을 한다.'], duration: 40 },
      { id: 'pe_3_1_4', period: 4, title: '스트레칭하기', objectives: ['스트레칭을 할 수 있다.'], achievementStandards: ['[4체01-04] 운동 전후의 몸 상태를 비교하며 운동 후 회복을 한다.'], duration: 40 },
    ]
  },
  'pe_3_2': {
    unitId: 'pe_3_2',
    unitName: '2. 도전 활동',
    periods: [
      { id: 'pe_3_2_1', period: 1, title: '거리 도전', objectives: ['멀리 뛰기를 할 수 있다.'], achievementStandards: ['[4체02-01] 도전 활동의 의미와 특성을 탐색한다.'], duration: 40 },
      { id: 'pe_3_2_2', period: 2, title: '속도 도전', objectives: ['빨리 달리기를 할 수 있다.'], achievementStandards: ['[4체02-02] 거리, 속도, 시간에 도전하는 활동에 참여한다.'], duration: 40 },
      { id: 'pe_3_2_3', period: 3, title: '높이 도전', objectives: ['높이 뛰기를 할 수 있다.'], achievementStandards: ['[4체02-02] 거리, 속도, 시간에 도전하는 활동에 참여한다.'], duration: 40 },
      { id: 'pe_3_2_4', period: 4, title: '줄넘기 도전', objectives: ['줄넘기를 오래 할 수 있다.'], achievementStandards: ['[4체02-03] 자신의 최선을 다하여 도전 활동에 참여한다.'], duration: 40 },
    ]
  },
  'pe_3_3': {
    unitId: 'pe_3_3',
    unitName: '3. 경쟁 활동',
    periods: [
      { id: 'pe_3_3_1', period: 1, title: '피구 게임', objectives: ['피구 게임을 할 수 있다.'], achievementStandards: ['[4체03-01] 경쟁 활동의 의미와 특성을 탐색한다.'], duration: 40 },
      { id: 'pe_3_3_2', period: 2, title: '발야구', objectives: ['발야구 게임을 할 수 있다.'], achievementStandards: ['[4체03-02] 영역형 게임의 기본 규칙과 기능을 이해한다.'], duration: 40 },
      { id: 'pe_3_3_3', period: 3, title: '축구형 게임', objectives: ['축구형 게임을 할 수 있다.'], achievementStandards: ['[4체03-03] 게임 규칙을 지키며 경쟁에 참여한다.'], duration: 40 },
      { id: 'pe_3_3_4', period: 4, title: '릴레이 경기', objectives: ['릴레이 경기를 할 수 있다.'], achievementStandards: ['[4체03-04] 팀원과 협력하여 경쟁 활동에 참여한다.'], duration: 40 },
    ]
  },
  'pe_3_4': {
    unitId: 'pe_3_4',
    unitName: '4. 표현 활동',
    periods: [
      { id: 'pe_3_4_1', period: 1, title: '움직임 탐색하기', objectives: ['다양한 움직임을 탐색할 수 있다.'], achievementStandards: ['[4체04-01] 표현 활동의 의미와 특성을 탐색한다.'], duration: 40 },
      { id: 'pe_3_4_2', period: 2, title: '리듬에 맞춰 움직이기', objectives: ['리듬에 맞춰 움직일 수 있다.'], achievementStandards: ['[4체04-02] 움직임의 다양한 요소를 느끼고 표현한다.'], duration: 40 },
      { id: 'pe_3_4_3', period: 3, title: '민속 춤 배우기', objectives: ['민속 춤을 배울 수 있다.'], achievementStandards: ['[4체04-03] 창작 움직임 또는 민속 표현을 창의적으로 표현한다.'], duration: 40 },
      { id: 'pe_3_4_4', period: 4, title: '창작 표현하기', objectives: ['창작 표현을 할 수 있다.'], achievementStandards: ['[4체04-04] 다양한 표현 활동을 감상하고 서로의 작품을 존중한다.'], duration: 40 },
    ]
  },
  // 4학년
  'pe_4_1': {
    unitId: 'pe_4_1',
    unitName: '1. 건강 활동',
    periods: [
      { id: 'pe_4_1_1', period: 1, title: '건강과 운동', objectives: ['건강과 운동의 관계를 알 수 있다.'], achievementStandards: ['[4체01-01] 건강과 신체 발달에 좋은 운동과 영양의 관계를 안다.'], duration: 40 },
      { id: 'pe_4_1_2', period: 2, title: '체력 측정하기', objectives: ['자신의 체력을 측정할 수 있다.'], achievementStandards: ['[4체01-02] 체격과 체력을 측정하고, 자신의 체력 수준을 파악한다.'], duration: 40 },
      { id: 'pe_4_1_3', period: 3, title: '체력 운동하기', objectives: ['체력 운동을 할 수 있다.'], achievementStandards: ['[4체01-03] 신체의 유연성, 민첩성, 근력, 근지구력을 높이는 운동을 한다.'], duration: 40 },
      { id: 'pe_4_1_4', period: 4, title: '건강한 생활 습관', objectives: ['건강한 생활 습관을 기를 수 있다.'], achievementStandards: ['[4체01-05] 건강한 생활을 위해 지켜야 할 규칙적인 식사와 운동을 실천한다.'], duration: 40 },
    ]
  },
  'pe_4_2': {
    unitId: 'pe_4_2',
    unitName: '2. 도전 활동',
    periods: [
      { id: 'pe_4_2_1', period: 1, title: '매트 운동', objectives: ['매트 운동을 할 수 있다.'], achievementStandards: ['[4체02-04] 동작, 기술에 도전하는 활동에 참여한다.'], duration: 40 },
      { id: 'pe_4_2_2', period: 2, title: '철봉 운동', objectives: ['철봉 운동을 할 수 있다.'], achievementStandards: ['[4체02-04] 동작, 기술에 도전하는 활동에 참여한다.'], duration: 40 },
      { id: 'pe_4_2_3', period: 3, title: '뜀틀 운동', objectives: ['뜀틀 운동을 할 수 있다.'], achievementStandards: ['[4체02-04] 동작, 기술에 도전하는 활동에 참여한다.'], duration: 40 },
      { id: 'pe_4_2_4', period: 4, title: '평균대 운동', objectives: ['평균대 운동을 할 수 있다.'], achievementStandards: ['[4체02-05] 기본 기술을 바르게 익혀 동작, 기술에 도전한다.'], duration: 40 },
    ]
  },
  'pe_4_3': {
    unitId: 'pe_4_3',
    unitName: '3. 경쟁 활동',
    periods: [
      { id: 'pe_4_3_1', period: 1, title: '농구형 게임', objectives: ['농구형 게임을 할 수 있다.'], achievementStandards: ['[4체03-02] 영역형 게임의 기본 규칙과 기능을 이해한다.'], duration: 40 },
      { id: 'pe_4_3_2', period: 2, title: '핸드볼형 게임', objectives: ['핸드볼형 게임을 할 수 있다.'], achievementStandards: ['[4체03-02] 영역형 게임의 기본 규칙과 기능을 이해한다.'], duration: 40 },
      { id: 'pe_4_3_3', period: 3, title: '티볼', objectives: ['티볼 게임을 할 수 있다.'], achievementStandards: ['[4체03-03] 게임 규칙을 지키며 경쟁에 참여한다.'], duration: 40 },
      { id: 'pe_4_3_4', period: 4, title: '배드민턴형 게임', objectives: ['배드민턴형 게임을 할 수 있다.'], achievementStandards: ['[4체03-04] 팀원과 협력하여 경쟁 활동에 참여한다.'], duration: 40 },
    ]
  },
  'pe_4_4': {
    unitId: 'pe_4_4',
    unitName: '4. 표현 활동',
    periods: [
      { id: 'pe_4_4_1', period: 1, title: '민속 무용', objectives: ['민속 무용을 할 수 있다.'], achievementStandards: ['[4체04-03] 창작 움직임 또는 민속 표현을 창의적으로 표현한다.'], duration: 40 },
      { id: 'pe_4_4_2', period: 2, title: '에어로빅', objectives: ['에어로빅을 할 수 있다.'], achievementStandards: ['[4체04-02] 움직임의 다양한 요소를 느끼고 표현한다.'], duration: 40 },
      { id: 'pe_4_4_3', period: 3, title: '창작 무용', objectives: ['창작 무용을 만들 수 있다.'], achievementStandards: ['[4체04-03] 창작 움직임 또는 민속 표현을 창의적으로 표현한다.'], duration: 40 },
      { id: 'pe_4_4_4', period: 4, title: '발표회', objectives: ['표현 활동 발표회를 할 수 있다.'], achievementStandards: ['[4체04-04] 다양한 표현 활동을 감상하고 서로의 작품을 존중한다.'], duration: 40 },
    ]
  },
  // 5학년
  'pe_5_1': {
    unitId: 'pe_5_1',
    unitName: '1. 건강 활동',
    periods: [
      { id: 'pe_5_1_1', period: 1, title: '체력 관리하기', objectives: ['자신의 체력을 관리할 수 있다.'], achievementStandards: ['[6체01-01] 건강 체력의 의미와 중요성을 이해한다.'], duration: 40 },
      { id: 'pe_5_1_2', period: 2, title: '심폐 지구력 기르기', objectives: ['심폐 지구력을 기를 수 있다.'], achievementStandards: ['[6체01-02] 건강 체력 요소를 측정하고 자신의 체력 수준을 파악한다.'], duration: 40 },
      { id: 'pe_5_1_3', period: 3, title: '근력과 근지구력', objectives: ['근력과 근지구력을 기를 수 있다.'], achievementStandards: ['[6체01-03] 자신의 건강 체력 수준에 맞는 운동 계획을 세워 실천한다.'], duration: 40 },
      { id: 'pe_5_1_4', period: 4, title: '비만 예방하기', objectives: ['비만 예방의 중요성을 알 수 있다.'], achievementStandards: ['[6체01-04] 비만 예방을 위한 운동 방법을 찾아 생활 속에서 실천한다.'], duration: 40 },
    ]
  },
  'pe_5_2': {
    unitId: 'pe_5_2',
    unitName: '2. 도전 활동',
    periods: [
      { id: 'pe_5_2_1', period: 1, title: '육상 도전', objectives: ['육상 기록에 도전할 수 있다.'], achievementStandards: ['[6체02-01] 도전 활동의 의미와 특성을 이해한다.'], duration: 40 },
      { id: 'pe_5_2_2', period: 2, title: '체조 도전', objectives: ['체조 동작에 도전할 수 있다.'], achievementStandards: ['[6체02-02] 기록, 표적, 투기 도전에 참여하고 기능을 익힌다.'], duration: 40 },
      { id: 'pe_5_2_3', period: 3, title: '투기 도전', objectives: ['투기 활동에 도전할 수 있다.'], achievementStandards: ['[6체02-03] 자신의 목표를 달성하기 위해 꾸준히 노력한다.'], duration: 40 },
      { id: 'pe_5_2_4', period: 4, title: '수영 기초', objectives: ['수영의 기초를 익힐 수 있다.'], achievementStandards: ['[6체02-04] 도전 활동에 참여하며 자신의 한계를 극복하려는 의지를 기른다.'], duration: 40 },
    ]
  },
  'pe_5_3': {
    unitId: 'pe_5_3',
    unitName: '3. 경쟁 활동',
    periods: [
      { id: 'pe_5_3_1', period: 1, title: '축구', objectives: ['축구 경기를 할 수 있다.'], achievementStandards: ['[6체03-01] 경쟁 활동의 의미와 특성을 이해한다.'], duration: 40 },
      { id: 'pe_5_3_2', period: 2, title: '농구', objectives: ['농구 경기를 할 수 있다.'], achievementStandards: ['[6체03-02] 영역형, 필드형, 네트형 경쟁의 기본 전략을 이해하고 게임에 참여한다.'], duration: 40 },
      { id: 'pe_5_3_3', period: 3, title: '야구형 게임', objectives: ['야구형 게임을 할 수 있다.'], achievementStandards: ['[6체03-03] 경쟁 활동에서 정정당당하게 경쟁한다.'], duration: 40 },
      { id: 'pe_5_3_4', period: 4, title: '배구형 게임', objectives: ['배구형 게임을 할 수 있다.'], achievementStandards: ['[6체03-04] 경쟁 활동에서 팀원의 역할을 존중하며 협동한다.'], duration: 40 },
    ]
  },
  'pe_5_4': {
    unitId: 'pe_5_4',
    unitName: '4. 표현 활동',
    periods: [
      { id: 'pe_5_4_1', period: 1, title: '현대 무용', objectives: ['현대 무용을 할 수 있다.'], achievementStandards: ['[6체04-01] 표현 활동의 의미와 특성을 이해한다.'], duration: 40 },
      { id: 'pe_5_4_2', period: 2, title: '전통 무용', objectives: ['전통 무용을 할 수 있다.'], achievementStandards: ['[6체04-02] 움직임 표현 또는 전통 표현의 동작과 방법을 알고 표현한다.'], duration: 40 },
      { id: 'pe_5_4_3', period: 3, title: '창작 표현', objectives: ['창의적으로 움직임을 표현할 수 있다.'], achievementStandards: ['[6체04-03] 움직임 표현 또는 전통 표현을 창의적으로 표현한다.'], duration: 40 },
      { id: 'pe_5_4_4', period: 4, title: '표현 감상하기', objectives: ['다양한 표현 활동을 감상할 수 있다.'], achievementStandards: ['[6체04-04] 표현 활동을 감상하고 서로의 작품을 존중한다.'], duration: 40 },
    ]
  },
  // 6학년
  'pe_6_1': {
    unitId: 'pe_6_1',
    unitName: '1. 건강 활동',
    periods: [
      { id: 'pe_6_1_1', period: 1, title: '여가와 건강', objectives: ['여가 활동과 건강의 관계를 알 수 있다.'], achievementStandards: ['[6체01-05] 여가 활동의 의미와 중요성을 이해한다.'], duration: 40 },
      { id: 'pe_6_1_2', period: 2, title: '여가 활동 계획', objectives: ['여가 활동 계획을 세울 수 있다.'], achievementStandards: ['[6체01-06] 자신의 여가 활동을 계획하고 실천한다.'], duration: 40 },
      { id: 'pe_6_1_3', period: 3, title: '안전한 운동', objectives: ['안전하게 운동할 수 있다.'], achievementStandards: ['[6체01-07] 운동 중 발생할 수 있는 안전사고를 예방하고 대처하는 방법을 익힌다.'], duration: 40 },
      { id: 'pe_6_1_4', period: 4, title: '응급 처치', objectives: ['기초적인 응급 처치를 할 수 있다.'], achievementStandards: ['[6체01-07] 운동 중 발생할 수 있는 안전사고를 예방하고 대처하는 방법을 익힌다.'], duration: 40 },
    ]
  },
  'pe_6_2': {
    unitId: 'pe_6_2',
    unitName: '2. 도전 활동',
    periods: [
      { id: 'pe_6_2_1', period: 1, title: '표적 도전', objectives: ['표적 활동에 도전할 수 있다.'], achievementStandards: ['[6체02-02] 기록, 표적, 투기 도전에 참여하고 기능을 익힌다.'], duration: 40 },
      { id: 'pe_6_2_2', period: 2, title: '배드민턴 도전', objectives: ['배드민턴 기술에 도전할 수 있다.'], achievementStandards: ['[6체02-02] 기록, 표적, 투기 도전에 참여하고 기능을 익힌다.'], duration: 40 },
      { id: 'pe_6_2_3', period: 3, title: '탁구 도전', objectives: ['탁구 기술에 도전할 수 있다.'], achievementStandards: ['[6체02-03] 자신의 목표를 달성하기 위해 꾸준히 노력한다.'], duration: 40 },
      { id: 'pe_6_2_4', period: 4, title: '골프형 활동', objectives: ['골프형 활동에 도전할 수 있다.'], achievementStandards: ['[6체02-04] 도전 활동에 참여하며 자신의 한계를 극복하려는 의지를 기른다.'], duration: 40 },
    ]
  },
  'pe_6_3': {
    unitId: 'pe_6_3',
    unitName: '3. 경쟁 활동',
    periods: [
      { id: 'pe_6_3_1', period: 1, title: '전략 경쟁', objectives: ['전략을 세워 경쟁할 수 있다.'], achievementStandards: ['[6체03-02] 영역형, 필드형, 네트형 경쟁의 기본 전략을 이해하고 게임에 참여한다.'], duration: 40 },
      { id: 'pe_6_3_2', period: 2, title: '네트형 경쟁', objectives: ['네트형 경쟁 활동을 할 수 있다.'], achievementStandards: ['[6체03-02] 영역형, 필드형, 네트형 경쟁의 기본 전략을 이해하고 게임에 참여한다.'], duration: 40 },
      { id: 'pe_6_3_3', period: 3, title: '필드형 경쟁', objectives: ['필드형 경쟁 활동을 할 수 있다.'], achievementStandards: ['[6체03-03] 경쟁 활동에서 정정당당하게 경쟁한다.'], duration: 40 },
      { id: 'pe_6_3_4', period: 4, title: '종합 스포츠', objectives: ['다양한 스포츠 활동을 할 수 있다.'], achievementStandards: ['[6체03-04] 경쟁 활동에서 팀원의 역할을 존중하며 협동한다.'], duration: 40 },
    ]
  },
  'pe_6_4': {
    unitId: 'pe_6_4',
    unitName: '4. 표현 활동',
    periods: [
      { id: 'pe_6_4_1', period: 1, title: '세계 민속춤', objectives: ['세계 여러 나라의 민속춤을 할 수 있다.'], achievementStandards: ['[6체04-02] 움직임 표현 또는 전통 표현의 동작과 방법을 알고 표현한다.'], duration: 40 },
      { id: 'pe_6_4_2', period: 2, title: '뮤지컬 표현', objectives: ['뮤지컬 표현을 할 수 있다.'], achievementStandards: ['[6체04-03] 움직임 표현 또는 전통 표현을 창의적으로 표현한다.'], duration: 40 },
      { id: 'pe_6_4_3', period: 3, title: '졸업 공연 준비', objectives: ['졸업 공연을 준비할 수 있다.'], achievementStandards: ['[6체04-04] 표현 활동을 감상하고 서로의 작품을 존중한다.'], duration: 40 },
    ]
  },
};

// ==================== 실과 ====================
export const PRACTICAL_LESSONS: Record<string, UnitLessons> = {
  // 5학년
  'prac_5_1': {
    unitId: 'prac_5_1',
    unitName: '1. 나와 가정생활',
    periods: [
      { id: 'prac_5_1_1', period: 1, title: '가정생활의 중요성', objectives: ['가정생활의 중요성을 알 수 있다.'], achievementStandards: ['[6실01-01] 나와 가족의 일상생활을 건강하게 관리한다.'], duration: 40 },
      { id: 'prac_5_1_2', period: 2, title: '청소와 정리정돈', objectives: ['청소와 정리정돈을 할 수 있다.'], achievementStandards: ['[6실01-02] 청결한 의생활의 중요성을 이해하고 의복 관리를 실천한다.'], duration: 40 },
      { id: 'prac_5_1_3', period: 3, title: '간단한 조리', objectives: ['간단한 조리를 할 수 있다.'], achievementStandards: ['[6실01-03] 균형 잡힌 식생활의 중요성을 이해하고 건강 식생활을 계획한다.'], duration: 40 },
      { id: 'prac_5_1_4', period: 4, title: '용돈 관리하기', objectives: ['용돈을 계획적으로 관리할 수 있다.'], achievementStandards: ['[6실01-04] 합리적인 소비 생활을 이해하고 실생활에서 실천한다.'], duration: 40 },
    ]
  },
  'prac_5_2': {
    unitId: 'prac_5_2',
    unitName: '2. 생활 속 동식물',
    periods: [
      { id: 'prac_5_2_1', period: 1, title: '동물 기르기', objectives: ['동물을 기르는 방법을 알 수 있다.'], achievementStandards: ['[6실02-01] 생활 속에서 활용되는 동물의 종류와 특성을 탐색한다.'], duration: 40 },
      { id: 'prac_5_2_2', period: 2, title: '식물 기르기', objectives: ['식물을 기르는 방법을 알 수 있다.'], achievementStandards: ['[6실02-02] 생활 속에서 활용되는 식물의 종류와 특성을 탐색한다.'], duration: 40 },
      { id: 'prac_5_2_3', period: 3, title: '동식물과 생활', objectives: ['동식물이 생활에 주는 이로움을 알 수 있다.'], achievementStandards: ['[6실02-03] 생활 속에서 동식물을 활용한 예를 조사한다.'], duration: 40 },
      { id: 'prac_5_2_4', period: 4, title: '동식물 돌보기 실습', objectives: ['동식물을 돌볼 수 있다.'], achievementStandards: ['[6실02-04] 동식물을 기르는 방법을 알고 실천한다.'], duration: 40 },
    ]
  },
  'prac_5_3': {
    unitId: 'prac_5_3',
    unitName: '3. 생활과 정보',
    periods: [
      { id: 'prac_5_3_1', period: 1, title: '정보와 생활', objectives: ['정보가 생활에 미치는 영향을 알 수 있다.'], achievementStandards: ['[6실03-01] 정보화 사회에서 정보의 의미와 중요성을 이해한다.'], duration: 40 },
      { id: 'prac_5_3_2', period: 2, title: '소프트웨어 이해하기', objectives: ['소프트웨어의 역할을 이해할 수 있다.'], achievementStandards: ['[6실03-02] 소프트웨어가 생활에 미치는 영향을 이해한다.'], duration: 40 },
      { id: 'prac_5_3_3', period: 3, title: '프로그래밍 기초', objectives: ['간단한 프로그래밍을 할 수 있다.'], achievementStandards: ['[6실03-03] 순차, 선택, 반복 구조를 활용하여 프로그래밍한다.'], duration: 40 },
      { id: 'prac_5_3_4', period: 4, title: '블록 코딩', objectives: ['블록 코딩으로 프로그램을 만들 수 있다.'], achievementStandards: ['[6실03-04] 생활 속 문제 상황을 알고리즘으로 해결한다.'], duration: 40 },
    ]
  },
  'prac_5_4': {
    unitId: 'prac_5_4',
    unitName: '4. 안전한 생활',
    periods: [
      { id: 'prac_5_4_1', period: 1, title: '생활 안전', objectives: ['생활 속 안전사고를 예방할 수 있다.'], achievementStandards: ['[6실04-01] 가정과 학교에서 발생할 수 있는 안전사고의 종류를 알고 예방한다.'], duration: 40 },
      { id: 'prac_5_4_2', period: 2, title: '식품 안전', objectives: ['식품 안전의 중요성을 알 수 있다.'], achievementStandards: ['[6실04-02] 식품 안전을 위한 방법을 알고 실천한다.'], duration: 40 },
      { id: 'prac_5_4_3', period: 3, title: '정보 보안', objectives: ['정보 보안의 중요성을 알 수 있다.'], achievementStandards: ['[6실04-03] 개인 정보를 보호하고 안전하게 활용하는 방법을 알고 실천한다.'], duration: 40 },
    ]
  },
  // 6학년
  'prac_6_1': {
    unitId: 'prac_6_1',
    unitName: '1. 생활과 기술',
    periods: [
      { id: 'prac_6_1_1', period: 1, title: '기술의 발달', objectives: ['기술의 발달 과정을 알 수 있다.'], achievementStandards: ['[6실05-01] 생활 속에서 사용되는 기술의 의미와 역할을 이해한다.'], duration: 40 },
      { id: 'prac_6_1_2', period: 2, title: '생활과 발명', objectives: ['발명이 생활에 미치는 영향을 알 수 있다.'], achievementStandards: ['[6실05-02] 생활 속 문제를 기술적으로 해결하는 방법을 탐색한다.'], duration: 40 },
      { id: 'prac_6_1_3', period: 3, title: '간단한 물건 만들기', objectives: ['간단한 물건을 만들 수 있다.'], achievementStandards: ['[6실05-03] 간단한 생활용품을 설계하고 제작한다.'], duration: 40 },
      { id: 'prac_6_1_4', period: 4, title: '수송과 통신', objectives: ['수송과 통신의 원리를 알 수 있다.'], achievementStandards: ['[6실05-04] 수송과 통신의 발달이 생활에 미친 영향을 탐색한다.'], duration: 40 },
    ]
  },
  'prac_6_2': {
    unitId: 'prac_6_2',
    unitName: '2. 생활과 에너지',
    periods: [
      { id: 'prac_6_2_1', period: 1, title: '에너지의 종류', objectives: ['다양한 에너지의 종류를 알 수 있다.'], achievementStandards: ['[6실06-01] 생활 속에서 사용되는 다양한 에너지의 종류를 탐색한다.'], duration: 40 },
      { id: 'prac_6_2_2', period: 2, title: '신재생 에너지', objectives: ['신재생 에너지의 중요성을 알 수 있다.'], achievementStandards: ['[6실06-02] 친환경적인 에너지의 종류와 이용 방법을 탐색한다.'], duration: 40 },
      { id: 'prac_6_2_3', period: 3, title: '에너지 절약', objectives: ['에너지 절약 방법을 실천할 수 있다.'], achievementStandards: ['[6실06-03] 생활 속에서 에너지를 절약하는 방법을 알고 실천한다.'], duration: 40 },
    ]
  },
  'prac_6_3': {
    unitId: 'prac_6_3',
    unitName: '3. 지속 가능한 미래',
    periods: [
      { id: 'prac_6_3_1', period: 1, title: '지속 가능한 발전', objectives: ['지속 가능한 발전의 의미를 알 수 있다.'], achievementStandards: ['[6실07-01] 지속 가능한 발전의 의미와 중요성을 이해한다.'], duration: 40 },
      { id: 'prac_6_3_2', period: 2, title: '환경과 미래', objectives: ['환경 보전의 중요성을 알 수 있다.'], achievementStandards: ['[6실07-02] 지속 가능한 미래를 위한 생활 방식을 탐색한다.'], duration: 40 },
      { id: 'prac_6_3_3', period: 3, title: '녹색 생활 실천', objectives: ['녹색 생활을 실천할 수 있다.'], achievementStandards: ['[6실07-03] 지속 가능한 미래를 위한 실천 계획을 세우고 실천한다.'], duration: 40 },
    ]
  },
  'prac_6_4': {
    unitId: 'prac_6_4',
    unitName: '4. 발명과 로봇',
    periods: [
      { id: 'prac_6_4_1', period: 1, title: '발명의 기초', objectives: ['발명의 기초를 이해할 수 있다.'], achievementStandards: ['[6실08-01] 발명의 의미와 중요성을 이해한다.'], duration: 40 },
      { id: 'prac_6_4_2', period: 2, title: '창의적 발명', objectives: ['창의적으로 발명할 수 있다.'], achievementStandards: ['[6실08-02] 발명 기법을 활용하여 아이디어를 구상한다.'], duration: 40 },
      { id: 'prac_6_4_3', period: 3, title: '로봇의 세계', objectives: ['로봇의 원리를 이해할 수 있다.'], achievementStandards: ['[6실08-03] 간단한 로봇을 설계하고 제작한다.'], duration: 40 },
      { id: 'prac_6_4_4', period: 4, title: '로봇 만들기', objectives: ['간단한 로봇을 만들 수 있다.'], achievementStandards: ['[6실08-04] 로봇을 프로그래밍하여 작동시킨다.'], duration: 40 },
    ]
  },
};

// ==================== 1~2학년 통합교과 (봄, 여름, 가을, 겨울) ====================
export const INTEGRATED_LESSONS: Record<string, UnitLessons> = {
  // 1학년 봄
  'spr_1_1': {
    unitId: 'spr_1_1',
    unitName: '1. 학교에 가면',
    periods: [
      { id: 'spr_1_1_1', period: 1, title: '학교 둘러보기', objectives: ['학교의 여러 장소를 알 수 있다.'], achievementStandards: ['[2슬01-01] 학교 안과 밖, 교실을 둘러보고 위치와 하는 일을 알아본다.'], duration: 40 },
      { id: 'spr_1_1_2', period: 2, title: '교실에서 지켜야 할 약속', objectives: ['교실에서 지켜야 할 약속을 알 수 있다.'], achievementStandards: ['[2바01-01] 학교와 교실에서 알맞은 행동과 말을 한다.'], duration: 40 },
      { id: 'spr_1_1_3', period: 3, title: '친구 사귀기', objectives: ['친구와 사이좋게 지낼 수 있다.'], achievementStandards: ['[2바01-02] 친구와 사이좋게 지내는 방법을 알고 실천한다.'], duration: 40 },
      { id: 'spr_1_1_4', period: 4, title: '학교생활 표현하기', objectives: ['학교생활을 표현할 수 있다.'], achievementStandards: ['[2즐01-01] 학교와 교실에서 느낀 점을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
  'spr_1_2': {
    unitId: 'spr_1_2',
    unitName: '2. 도란도란 봄 동산',
    periods: [
      { id: 'spr_1_2_1', period: 1, title: '봄의 모습 살펴보기', objectives: ['봄의 모습을 살펴볼 수 있다.'], achievementStandards: ['[2슬02-01] 봄에 볼 수 있는 동식물을 찾아 관찰한다.'], duration: 40 },
      { id: 'spr_1_2_2', period: 2, title: '봄에 피는 꽃', objectives: ['봄에 피는 꽃을 알 수 있다.'], achievementStandards: ['[2슬02-02] 봄의 날씨와 생활 모습을 관찰한다.'], duration: 40 },
      { id: 'spr_1_2_3', period: 3, title: '봄 동산 꾸미기', objectives: ['봄 동산을 표현할 수 있다.'], achievementStandards: ['[2즐02-01] 봄에 느낀 점을 여러 가지 방법으로 표현한다.'], duration: 40 },
      { id: 'spr_1_2_4', period: 4, title: '봄 노래 부르기', objectives: ['봄에 관한 노래를 부를 수 있다.'], achievementStandards: ['[2즐02-02] 봄과 관련된 노래를 즐겁게 부른다.'], duration: 40 },
    ]
  },
  // 2학년 봄
  'spr_2_1': {
    unitId: 'spr_2_1',
    unitName: '1. 알쏭달쏭 나',
    periods: [
      { id: 'spr_2_1_1', period: 1, title: '나의 모습 살펴보기', objectives: ['나의 모습을 살펴볼 수 있다.'], achievementStandards: ['[2슬03-01] 나의 몸과 마음에 관심을 가지고 관찰한다.'], duration: 40 },
      { id: 'spr_2_1_2', period: 2, title: '나의 특징 알기', objectives: ['나의 특징을 알 수 있다.'], achievementStandards: ['[2바03-01] 나의 소중함을 알고 자신을 소중히 여긴다.'], duration: 40 },
      { id: 'spr_2_1_3', period: 3, title: '나를 표현하기', objectives: ['나를 여러 가지 방법으로 표현할 수 있다.'], achievementStandards: ['[2즐03-01] 나의 특징을 여러 가지 방법으로 표현한다.'], duration: 40 },
      { id: 'spr_2_1_4', period: 4, title: '나의 꿈 이야기', objectives: ['나의 꿈을 이야기할 수 있다.'], achievementStandards: ['[2즐03-02] 나의 꿈을 친구들과 나눈다.'], duration: 40 },
    ]
  },
  'spr_2_2': {
    unitId: 'spr_2_2',
    unitName: '2. 봄이 오면',
    periods: [
      { id: 'spr_2_2_1', period: 1, title: '봄의 변화 살펴보기', objectives: ['봄의 변화를 살펴볼 수 있다.'], achievementStandards: ['[2슬04-01] 봄의 모습과 생활 모습의 변화를 관찰한다.'], duration: 40 },
      { id: 'spr_2_2_2', period: 2, title: '봄 동식물 관찰하기', objectives: ['봄에 볼 수 있는 동식물을 관찰할 수 있다.'], achievementStandards: ['[2슬04-02] 봄에 볼 수 있는 동식물을 관찰하고 기록한다.'], duration: 40 },
      { id: 'spr_2_2_3', period: 3, title: '봄 활동 계획하기', objectives: ['봄에 할 수 있는 활동을 계획할 수 있다.'], achievementStandards: ['[2바04-01] 봄에 지켜야 할 생활 규칙을 정하고 실천한다.'], duration: 40 },
      { id: 'spr_2_2_4', period: 4, title: '봄을 표현하기', objectives: ['봄을 여러 가지 방법으로 표현할 수 있다.'], achievementStandards: ['[2즐04-01] 봄에 느낀 점을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
  // 1학년 여름
  'sum_1_1': {
    unitId: 'sum_1_1',
    unitName: '1. 우리는 가족입니다',
    periods: [
      { id: 'sum_1_1_1', period: 1, title: '우리 가족 소개하기', objectives: ['우리 가족을 소개할 수 있다.'], achievementStandards: ['[2슬05-01] 가족 구성원의 역할을 알아본다.'], duration: 40 },
      { id: 'sum_1_1_2', period: 2, title: '가족의 역할 알기', objectives: ['가족의 역할을 알 수 있다.'], achievementStandards: ['[2바05-01] 가족 구성원의 역할을 이해하고 자신의 역할을 한다.'], duration: 40 },
      { id: 'sum_1_1_3', period: 3, title: '가족 사랑 표현하기', objectives: ['가족에 대한 사랑을 표현할 수 있다.'], achievementStandards: ['[2즐05-01] 가족에 대한 사랑을 여러 가지 방법으로 표현한다.'], duration: 40 },
      { id: 'sum_1_1_4', period: 4, title: '가족과 함께하기', objectives: ['가족과 함께하는 활동을 계획할 수 있다.'], achievementStandards: ['[2바05-02] 가족과 함께하는 즐거운 활동에 참여한다.'], duration: 40 },
    ]
  },
  'sum_1_2': {
    unitId: 'sum_1_2',
    unitName: '2. 여름 나라',
    periods: [
      { id: 'sum_1_2_1', period: 1, title: '여름의 모습', objectives: ['여름의 모습을 알 수 있다.'], achievementStandards: ['[2슬06-01] 여름의 날씨와 생활 모습을 관찰한다.'], duration: 40 },
      { id: 'sum_1_2_2', period: 2, title: '여름 생활', objectives: ['여름에 하는 활동을 알 수 있다.'], achievementStandards: ['[2바06-01] 여름에 안전하고 건강하게 생활하는 방법을 익힌다.'], duration: 40 },
      { id: 'sum_1_2_3', period: 3, title: '여름놀이', objectives: ['여름에 할 수 있는 놀이를 할 수 있다.'], achievementStandards: ['[2즐06-01] 여름에 느낀 점을 여러 가지 방법으로 표현한다.'], duration: 40 },
      { id: 'sum_1_2_4', period: 4, title: '여름 표현하기', objectives: ['여름을 표현할 수 있다.'], achievementStandards: ['[2즐06-02] 여름과 관련된 노래와 율동을 한다.'], duration: 40 },
    ]
  },
  // 2학년 여름
  'sum_2_1': {
    unitId: 'sum_2_1',
    unitName: '1. 이런 집 저런 집',
    periods: [
      { id: 'sum_2_1_1', period: 1, title: '여러 가지 집', objectives: ['여러 가지 집의 모습을 알 수 있다.'], achievementStandards: ['[2슬07-01] 여러 종류의 집을 알아보고 다양한 재료로 집을 꾸민다.'], duration: 40 },
      { id: 'sum_2_1_2', period: 2, title: '우리 집 소개하기', objectives: ['우리 집을 소개할 수 있다.'], achievementStandards: ['[2슬07-02] 집의 모습과 특징을 설명한다.'], duration: 40 },
      { id: 'sum_2_1_3', period: 3, title: '집 만들기', objectives: ['다양한 재료로 집을 만들 수 있다.'], achievementStandards: ['[2즐07-01] 다양한 재료를 이용하여 집을 꾸민다.'], duration: 40 },
    ]
  },
  'sum_2_2': {
    unitId: 'sum_2_2',
    unitName: '2. 초록이의 여름 여행',
    periods: [
      { id: 'sum_2_2_1', period: 1, title: '여름 날씨와 생활', objectives: ['여름 날씨와 생활을 알 수 있다.'], achievementStandards: ['[2슬08-01] 여름 날씨의 특징과 생활 모습을 알아본다.'], duration: 40 },
      { id: 'sum_2_2_2', period: 2, title: '여름 건강', objectives: ['여름에 건강하게 생활하는 방법을 알 수 있다.'], achievementStandards: ['[2바08-01] 여름에 건강하고 안전하게 생활하는 방법을 익힌다.'], duration: 40 },
      { id: 'sum_2_2_3', period: 3, title: '여름 여행 계획', objectives: ['여름 여행 계획을 세울 수 있다.'], achievementStandards: ['[2즐08-01] 여름 여행 계획을 세우고 발표한다.'], duration: 40 },
      { id: 'sum_2_2_4', period: 4, title: '여름 표현하기', objectives: ['여름을 여러 가지 방법으로 표현할 수 있다.'], achievementStandards: ['[2즐08-02] 여름에 느낀 점을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
  // 1학년 가을
  'aut_1_1': {
    unitId: 'aut_1_1',
    unitName: '1. 내 이웃 이야기',
    periods: [
      { id: 'aut_1_1_1', period: 1, title: '이웃 알아보기', objectives: ['이웃을 알아볼 수 있다.'], achievementStandards: ['[2슬09-01] 이웃의 모습과 하는 일을 알아본다.'], duration: 40 },
      { id: 'aut_1_1_2', period: 2, title: '이웃과 인사하기', objectives: ['이웃과 바르게 인사할 수 있다.'], achievementStandards: ['[2바09-01] 이웃과 서로 도우며 생활하는 방법을 익힌다.'], duration: 40 },
      { id: 'aut_1_1_3', period: 3, title: '이웃을 도와요', objectives: ['이웃을 도울 수 있는 방법을 알 수 있다.'], achievementStandards: ['[2바09-02] 이웃과 사이좋게 지낼 수 있다.'], duration: 40 },
      { id: 'aut_1_1_4', period: 4, title: '이웃 표현하기', objectives: ['이웃에 대해 표현할 수 있다.'], achievementStandards: ['[2즐09-01] 이웃에 대한 생각을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
  'aut_1_2': {
    unitId: 'aut_1_2',
    unitName: '2. 현규의 추석',
    periods: [
      { id: 'aut_1_2_1', period: 1, title: '추석 알아보기', objectives: ['추석의 의미를 알 수 있다.'], achievementStandards: ['[2슬10-01] 추석의 의미와 풍습을 알아본다.'], duration: 40 },
      { id: 'aut_1_2_2', period: 2, title: '가을 모습 살펴보기', objectives: ['가을의 모습을 살펴볼 수 있다.'], achievementStandards: ['[2슬10-02] 가을의 모습과 변화를 관찰한다.'], duration: 40 },
      { id: 'aut_1_2_3', period: 3, title: '추석 놀이', objectives: ['추석 놀이를 할 수 있다.'], achievementStandards: ['[2즐10-01] 추석과 관련된 활동을 한다.'], duration: 40 },
      { id: 'aut_1_2_4', period: 4, title: '가을 표현하기', objectives: ['가을을 표현할 수 있다.'], achievementStandards: ['[2즐10-02] 가을에 느낀 점을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
  // 2학년 가을
  'aut_2_1': {
    unitId: 'aut_2_1',
    unitName: '1. 동네 한 바퀴',
    periods: [
      { id: 'aut_2_1_1', period: 1, title: '우리 동네 살펴보기', objectives: ['우리 동네를 살펴볼 수 있다.'], achievementStandards: ['[2슬11-01] 우리 동네의 모습과 특징을 알아본다.'], duration: 40 },
      { id: 'aut_2_1_2', period: 2, title: '동네 사람들', objectives: ['동네 사람들이 하는 일을 알 수 있다.'], achievementStandards: ['[2슬11-02] 동네 사람들이 하는 일을 알아본다.'], duration: 40 },
      { id: 'aut_2_1_3', period: 3, title: '동네 행사 참여하기', objectives: ['동네 행사에 참여할 수 있다.'], achievementStandards: ['[2바11-01] 동네 사람들과 사이좋게 지내는 방법을 알고 실천한다.'], duration: 40 },
      { id: 'aut_2_1_4', period: 4, title: '동네 소개하기', objectives: ['동네를 소개할 수 있다.'], achievementStandards: ['[2즐11-01] 동네를 여러 가지 방법으로 소개한다.'], duration: 40 },
    ]
  },
  'aut_2_2': {
    unitId: 'aut_2_2',
    unitName: '2. 가을아 어디 있니',
    periods: [
      { id: 'aut_2_2_1', period: 1, title: '가을의 변화', objectives: ['가을의 변화를 알 수 있다.'], achievementStandards: ['[2슬12-01] 가을의 변화를 관찰하고 기록한다.'], duration: 40 },
      { id: 'aut_2_2_2', period: 2, title: '가을 동식물', objectives: ['가을에 볼 수 있는 동식물을 알 수 있다.'], achievementStandards: ['[2슬12-02] 가을에 볼 수 있는 동식물을 관찰한다.'], duration: 40 },
      { id: 'aut_2_2_3', period: 3, title: '가을 활동', objectives: ['가을에 할 수 있는 활동을 알 수 있다.'], achievementStandards: ['[2바12-01] 가을에 알맞은 생활 규칙을 정하고 실천한다.'], duration: 40 },
      { id: 'aut_2_2_4', period: 4, title: '가을 표현하기', objectives: ['가을을 여러 가지 방법으로 표현할 수 있다.'], achievementStandards: ['[2즐12-01] 가을에 느낀 점을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
  // 1학년 겨울
  'win_1_1': {
    unitId: 'win_1_1',
    unitName: '1. 여기는 우리나라',
    periods: [
      { id: 'win_1_1_1', period: 1, title: '우리나라 알아보기', objectives: ['우리나라에 대해 알 수 있다.'], achievementStandards: ['[2슬13-01] 우리나라의 상징과 문화를 알아본다.'], duration: 40 },
      { id: 'win_1_1_2', period: 2, title: '우리나라 상징', objectives: ['우리나라의 상징을 알 수 있다.'], achievementStandards: ['[2바13-01] 우리나라를 사랑하는 마음을 표현한다.'], duration: 40 },
      { id: 'win_1_1_3', period: 3, title: '전통문화', objectives: ['우리나라 전통문화를 알 수 있다.'], achievementStandards: ['[2슬13-02] 우리나라의 전통문화를 알아본다.'], duration: 40 },
      { id: 'win_1_1_4', period: 4, title: '우리나라 표현하기', objectives: ['우리나라에 대해 표현할 수 있다.'], achievementStandards: ['[2즐13-01] 우리나라에 대한 자부심을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
  'win_1_2': {
    unitId: 'win_1_2',
    unitName: '2. 우리의 겨울',
    periods: [
      { id: 'win_1_2_1', period: 1, title: '겨울의 모습', objectives: ['겨울의 모습을 알 수 있다.'], achievementStandards: ['[2슬14-01] 겨울의 모습과 생활 변화를 관찰한다.'], duration: 40 },
      { id: 'win_1_2_2', period: 2, title: '겨울 생활', objectives: ['겨울에 건강하게 생활하는 방법을 알 수 있다.'], achievementStandards: ['[2바14-01] 겨울에 건강하고 안전하게 생활하는 방법을 익힌다.'], duration: 40 },
      { id: 'win_1_2_3', period: 3, title: '겨울 놀이', objectives: ['겨울에 할 수 있는 놀이를 할 수 있다.'], achievementStandards: ['[2즐14-01] 겨울에 할 수 있는 놀이를 한다.'], duration: 40 },
      { id: 'win_1_2_4', period: 4, title: '겨울 표현하기', objectives: ['겨울을 여러 가지 방법으로 표현할 수 있다.'], achievementStandards: ['[2즐14-02] 겨울에 느낀 점을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
  // 2학년 겨울
  'win_2_1': {
    unitId: 'win_2_1',
    unitName: '1. 두근두근 세계 여행',
    periods: [
      { id: 'win_2_1_1', period: 1, title: '세계 여러 나라', objectives: ['세계 여러 나라에 대해 알 수 있다.'], achievementStandards: ['[2슬15-01] 세계 여러 나라의 문화와 특징을 알아본다.'], duration: 40 },
      { id: 'win_2_1_2', period: 2, title: '다양한 문화', objectives: ['다양한 문화를 존중할 수 있다.'], achievementStandards: ['[2바15-01] 다양한 문화를 존중하는 태도를 가진다.'], duration: 40 },
      { id: 'win_2_1_3', period: 3, title: '세계 여행 계획', objectives: ['세계 여행 계획을 세울 수 있다.'], achievementStandards: ['[2즐15-01] 세계 여행 계획을 세우고 발표한다.'], duration: 40 },
      { id: 'win_2_1_4', period: 4, title: '세계 문화 체험', objectives: ['세계 여러 나라의 문화를 체험할 수 있다.'], achievementStandards: ['[2즐15-02] 세계 여러 나라의 문화를 체험한다.'], duration: 40 },
    ]
  },
  'win_2_2': {
    unitId: 'win_2_2',
    unitName: '2. 겨울 탐정대의 대작전',
    periods: [
      { id: 'win_2_2_1', period: 1, title: '겨울의 변화', objectives: ['겨울의 변화를 알 수 있다.'], achievementStandards: ['[2슬16-01] 겨울의 변화를 관찰하고 기록한다.'], duration: 40 },
      { id: 'win_2_2_2', period: 2, title: '겨울 동식물', objectives: ['겨울에 볼 수 있는 동식물을 알 수 있다.'], achievementStandards: ['[2슬16-02] 겨울에 볼 수 있는 동식물을 관찰한다.'], duration: 40 },
      { id: 'win_2_2_3', period: 3, title: '겨울 건강', objectives: ['겨울에 건강하게 생활하는 방법을 알 수 있다.'], achievementStandards: ['[2바16-01] 겨울에 건강하고 안전하게 생활하는 방법을 익힌다.'], duration: 40 },
      { id: 'win_2_2_4', period: 4, title: '새해 계획', objectives: ['새해 계획을 세울 수 있다.'], achievementStandards: ['[2즐16-01] 새해에 대한 다짐을 여러 가지 방법으로 표현한다.'], duration: 40 },
    ]
  },
};

// ==================== 안전한 생활 ====================
export const SAFELIFE_LESSONS: Record<string, UnitLessons> = {
  // 1학년
  'safe_1_1': {
    unitId: 'safe_1_1',
    unitName: '1. 학교에서 안전하게',
    periods: [
      { id: 'safe_1_1_1', period: 1, title: '교실 안전', objectives: ['교실에서 안전하게 생활할 수 있다.'], achievementStandards: ['[2안01-01] 학교와 교실에서 지켜야 할 안전 규칙을 알고 실천한다.'], duration: 40 },
      { id: 'safe_1_1_2', period: 2, title: '복도와 계단 안전', objectives: ['복도와 계단에서 안전하게 이동할 수 있다.'], achievementStandards: ['[2안01-02] 복도와 계단에서 안전하게 생활하는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_1_1_3', period: 3, title: '운동장 안전', objectives: ['운동장에서 안전하게 놀 수 있다.'], achievementStandards: ['[2안01-03] 운동장에서 안전하게 놀이하는 방법을 익힌다.'], duration: 40 },
    ]
  },
  'safe_1_2': {
    unitId: 'safe_1_2',
    unitName: '2. 교통안전을 지켜요',
    periods: [
      { id: 'safe_1_2_1', period: 1, title: '안전하게 걷기', objectives: ['길에서 안전하게 걸을 수 있다.'], achievementStandards: ['[2안02-01] 보행 안전 규칙을 알고 실천한다.'], duration: 40 },
      { id: 'safe_1_2_2', period: 2, title: '횡단보도 건너기', objectives: ['횡단보도를 안전하게 건널 수 있다.'], achievementStandards: ['[2안02-02] 횡단보도를 안전하게 건너는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_1_2_3', period: 3, title: '안전하게 타기', objectives: ['탈것을 안전하게 이용할 수 있다.'], achievementStandards: ['[2안02-03] 다양한 교통수단을 안전하게 이용하는 방법을 익힌다.'], duration: 40 },
    ]
  },
  'safe_1_3': {
    unitId: 'safe_1_3',
    unitName: '3. 생활 속 안전',
    periods: [
      { id: 'safe_1_3_1', period: 1, title: '화재 안전', objectives: ['화재 시 대처 방법을 알 수 있다.'], achievementStandards: ['[2안03-01] 화재 발생 시 대처하는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_1_3_2', period: 2, title: '지진 안전', objectives: ['지진 시 대처 방법을 알 수 있다.'], achievementStandards: ['[2안03-02] 지진 발생 시 대처하는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_1_3_3', period: 3, title: '전기 안전', objectives: ['전기를 안전하게 사용할 수 있다.'], achievementStandards: ['[2안03-03] 전기 안전 규칙을 알고 실천한다.'], duration: 40 },
    ]
  },
  'safe_1_4': {
    unitId: 'safe_1_4',
    unitName: '4. 위험으로부터 나를 지켜요',
    periods: [
      { id: 'safe_1_4_1', period: 1, title: '낯선 사람 대처', objectives: ['낯선 사람을 만났을 때 대처할 수 있다.'], achievementStandards: ['[2안04-01] 낯선 사람을 만났을 때 안전하게 대처하는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_1_4_2', period: 2, title: '몸을 지키는 방법', objectives: ['내 몸을 지키는 방법을 알 수 있다.'], achievementStandards: ['[2안04-02] 내 몸을 소중히 여기고 지키는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_1_4_3', period: 3, title: '도움 요청하기', objectives: ['위험할 때 도움을 요청할 수 있다.'], achievementStandards: ['[2안04-03] 위험한 상황에서 도움을 요청하는 방법을 익힌다.'], duration: 40 },
    ]
  },
  // 2학년
  'safe_2_1': {
    unitId: 'safe_2_1',
    unitName: '1. 안전하게 학교생활',
    periods: [
      { id: 'safe_2_1_1', period: 1, title: '학교 안전 점검', objectives: ['학교에서 위험한 곳을 알 수 있다.'], achievementStandards: ['[2안05-01] 학교에서 위험한 곳과 상황을 알고 안전하게 생활한다.'], duration: 40 },
      { id: 'safe_2_1_2', period: 2, title: '안전한 놀이', objectives: ['안전하게 놀이할 수 있다.'], achievementStandards: ['[2안05-02] 안전한 놀이 방법을 알고 실천한다.'], duration: 40 },
      { id: 'safe_2_1_3', period: 3, title: '실험실 안전', objectives: ['실험실에서 안전하게 활동할 수 있다.'], achievementStandards: ['[2안05-03] 학교의 다양한 공간에서 안전하게 활동한다.'], duration: 40 },
    ]
  },
  'safe_2_2': {
    unitId: 'safe_2_2',
    unitName: '2. 안전한 교통생활',
    periods: [
      { id: 'safe_2_2_1', period: 1, title: '교통 표지판', objectives: ['교통 표지판의 의미를 알 수 있다.'], achievementStandards: ['[2안06-01] 교통 표지판의 의미를 알고 안전하게 행동한다.'], duration: 40 },
      { id: 'safe_2_2_2', period: 2, title: '자전거 안전', objectives: ['자전거를 안전하게 탈 수 있다.'], achievementStandards: ['[2안06-02] 자전거를 안전하게 이용하는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_2_2_3', period: 3, title: '대중교통 이용', objectives: ['대중교통을 안전하게 이용할 수 있다.'], achievementStandards: ['[2안06-03] 대중교통을 안전하게 이용하는 방법을 익힌다.'], duration: 40 },
    ]
  },
  'safe_2_3': {
    unitId: 'safe_2_3',
    unitName: '3. 안전하게 생활해요',
    periods: [
      { id: 'safe_2_3_1', period: 1, title: '가정 안전', objectives: ['가정에서 안전하게 생활할 수 있다.'], achievementStandards: ['[2안07-01] 가정에서 안전하게 생활하는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_2_3_2', period: 2, title: '물놀이 안전', objectives: ['물놀이를 안전하게 할 수 있다.'], achievementStandards: ['[2안07-02] 물놀이 안전 규칙을 알고 실천한다.'], duration: 40 },
      { id: 'safe_2_3_3', period: 3, title: '야외활동 안전', objectives: ['야외에서 안전하게 활동할 수 있다.'], achievementStandards: ['[2안07-03] 야외에서 안전하게 활동하는 방법을 익힌다.'], duration: 40 },
    ]
  },
  'safe_2_4': {
    unitId: 'safe_2_4',
    unitName: '4. 안전한 나 안전한 우리',
    periods: [
      { id: 'safe_2_4_1', period: 1, title: '약 안전', objectives: ['약을 안전하게 사용할 수 있다.'], achievementStandards: ['[2안08-01] 약의 올바른 사용 방법을 알고 실천한다.'], duration: 40 },
      { id: 'safe_2_4_2', period: 2, title: '응급 상황 대처', objectives: ['응급 상황에 대처할 수 있다.'], achievementStandards: ['[2안08-02] 응급 상황 시 대처하는 방법을 익힌다.'], duration: 40 },
      { id: 'safe_2_4_3', period: 3, title: '안전 의식 기르기', objectives: ['안전 의식을 기를 수 있다.'], achievementStandards: ['[2안08-03] 일상생활에서 안전 규칙을 실천하는 태도를 기른다.'], duration: 40 },
    ]
  },
};

// 전체 통합
export const OTHER_LESSONS: Record<string, UnitLessons> = {
  ...KOREAN_LESSONS,
  ...SOCIETY_LESSONS,
  ...ENGLISH_LESSONS,
  ...MORAL_LESSONS,
  ...MUSIC_LESSONS,
  ...ART_LESSONS,
  ...PE_LESSONS,
  ...PRACTICAL_LESSONS,
  ...INTEGRATED_LESSONS,
  ...SAFELIFE_LESSONS,
};
