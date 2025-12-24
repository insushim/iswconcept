// CBI 7단계 확장 정보
// 기존 cbi-stages.ts를 보완하는 상세 정보

import { CBIStageId } from './cbi-stages';

export interface ExtendedStageInfo {
  id: CBIStageId;
  purpose: string;
  keyActivities: string[];
  teacherQuestions: string[];
  studentActions: string[];
  assessmentFocus: string[];
  commonMistakes: string[];
  successIndicators: string[];
}

export const CBI_STAGES_EXTENDED: Record<CBIStageId, ExtendedStageInfo> = {
  engage: {
    id: 'engage',
    purpose: '사전 지식 활성화, 동기 부여, 초기 질문 생성',
    keyActivities: [
      '학생들의 사전 경험과 지식 연결',
      '호기심과 궁금증 유발',
      '단원의 맥락 소개',
      '초기 질문 생성 및 수집'
    ],
    teacherQuestions: [
      '이 주제에 대해 이미 무엇을 알고 있나요?',
      '어떤 질문이 떠오르나요?',
      '이것이 왜 중요할까요?',
      '이와 비슷한 경험을 한 적이 있나요?'
    ],
    studentActions: [
      '사전 지식 공유하기',
      '경험 떠올리기',
      '궁금한 점 질문하기',
      '주제에 대한 관심 표현하기'
    ],
    assessmentFocus: [
      '사전 지식 수준 파악',
      '오개념 발견',
      '학습 흥미도 확인'
    ],
    commonMistakes: [
      '너무 빨리 내용 설명 시작',
      '학생 반응을 충분히 기다리지 않음',
      '모든 학생 참여 기회 부족'
    ],
    successIndicators: [
      '학생들이 질문을 많이 생성함',
      '개인 경험과 연결하여 이야기함',
      '주제에 대한 호기심을 표현함'
    ]
  },
  focus: {
    id: 'focus',
    purpose: '핵심 개념 소개, 탐구 질문 제시, 학습 방향 설정',
    keyActivities: [
      '핵심 개념과 용어 명시적 소개',
      '탐구 질문(사실적/개념적/논쟁적) 제시',
      '학습 목표와 연결',
      '프레이어 모델로 개념 탐색'
    ],
    teacherQuestions: [
      '이 개념을 어떻게 설명할 수 있을까요?',
      '왜 이 개념이 중요할까요?',
      '이 개념과 연결된 다른 개념은 무엇일까요?',
      '우리가 탐구해야 할 질문은 무엇인가요?'
    ],
    studentActions: [
      '개념 정의 시도하기',
      '개념의 특징 파악하기',
      '탐구 질문 이해하기',
      '학습 목표 인식하기'
    ],
    assessmentFocus: [
      '개념에 대한 초기 이해도',
      '질문 이해 여부',
      '학습 방향 인식'
    ],
    commonMistakes: [
      '개념을 너무 자세히 설명함',
      '학생이 스스로 탐색할 기회 감소',
      '탐구 질문이 불명확함'
    ],
    successIndicators: [
      '학생들이 개념의 핵심을 파악함',
      '탐구 질문에 관심을 보임',
      '학습 목표를 자신의 말로 설명함'
    ]
  },
  investigate: {
    id: 'investigate',
    purpose: '다양한 자료와 사례를 통한 탐구, 정보 수집 및 분석',
    keyActivities: [
      '모둠별/개별 조사 활동',
      '다양한 사례 분석',
      '실험 및 관찰 활동',
      '인터뷰, 설문, 자료 조사'
    ],
    teacherQuestions: [
      '어떤 자료가 이 질문에 답하는 데 도움이 될까요?',
      '이 사례에서 어떤 패턴이 보이나요?',
      '다른 사례와 비교하면 어떤가요?',
      '증거로 무엇을 발견했나요?'
    ],
    studentActions: [
      '자료 수집하기',
      '사례 분석하기',
      '메모하고 기록하기',
      '모둠원과 협력하기'
    ],
    assessmentFocus: [
      '탐구 기능 활용',
      '협력적 참여도',
      '정보 수집 능력'
    ],
    commonMistakes: [
      '탐구 시간이 부족함',
      '학생들에게 너무 많은 지시',
      '오픈엔드 탐구 기회 부족'
    ],
    successIndicators: [
      '다양한 자료를 활용함',
      '질문에 답하기 위해 적극적으로 조사함',
      '협력하여 정보를 수집함'
    ]
  },
  organize: {
    id: 'organize',
    purpose: '수집한 정보를 분류하고 패턴을 발견하여 의미 있게 조직',
    keyActivities: [
      '그래픽 조직자 활용 (벤 다이어그램, T-차트 등)',
      '정보의 패턴과 관계 발견',
      '탐구 결과 공유 및 토론',
      '개념 맵 작성'
    ],
    teacherQuestions: [
      '이 정보들을 어떻게 분류할 수 있을까요?',
      '어떤 패턴이나 공통점이 보이나요?',
      '이것들 사이의 관계는 무엇인가요?',
      '가장 중요한 발견은 무엇인가요?'
    ],
    studentActions: [
      '정보 분류하기',
      '그래픽 조직자 완성하기',
      '패턴 발견하기',
      '발견 내용 공유하기'
    ],
    assessmentFocus: [
      '조직화 능력',
      '패턴 인식 능력',
      '논리적 사고력'
    ],
    commonMistakes: [
      '그래픽 조직자 사용법만 설명',
      '사고 과정 공유 기회 부족',
      '조직화의 목적 불명확'
    ],
    successIndicators: [
      '정보를 논리적으로 분류함',
      '패턴과 관계를 발견함',
      '자신의 조직 방법을 설명할 수 있음'
    ]
  },
  generalize: {
    id: 'generalize',
    purpose: '사실에서 개념적 이해(일반화)로 도약, 빅 아이디어 도출',
    keyActivities: [
      '패턴에서 일반화 도출',
      '스캐폴딩 질문을 통한 사고 촉진',
      '일반화 문장 작성',
      '토론을 통한 일반화 정교화'
    ],
    teacherQuestions: [
      '이 모든 사례에서 공통적으로 무엇이 참인가요?',
      '이것이 다른 상황에도 적용될까요?',
      '왜 항상 이런 패턴이 나타날까요?',
      '한 문장으로 표현하면 어떻게 될까요?'
    ],
    studentActions: [
      '패턴에서 일반화 추론하기',
      '일반화 문장 작성하기',
      '토론을 통해 아이디어 정교화하기',
      '다른 상황에 적용 가능성 생각하기'
    ],
    assessmentFocus: [
      '일반화 도출 능력',
      '개념적 사고력',
      '추론 능력'
    ],
    commonMistakes: [
      '일반화를 직접 제시함',
      '학생의 추론 과정 생략',
      '너무 빠르게 진행'
    ],
    successIndicators: [
      '학생 스스로 일반화를 도출함',
      '일반화가 사실을 넘어서는 개념적 이해를 포함함',
      '전이 가능한 이해를 표현함'
    ]
  },
  transfer: {
    id: 'transfer',
    purpose: '배운 개념을 새로운 상황에 적용, 수행과제 수행',
    keyActivities: [
      '새로운 맥락/상황에 개념 적용',
      '실생활 문제 해결',
      'GRASPS 수행과제 수행',
      '창의적 적용 활동'
    ],
    teacherQuestions: [
      '배운 것을 이 새로운 상황에 어떻게 적용할 수 있을까요?',
      '실생활에서 이와 비슷한 예를 찾을 수 있을까요?',
      '만약 ___라면 어떻게 될까요?',
      '다른 맥락에서도 같은 원리가 적용될까요?'
    ],
    studentActions: [
      '새로운 상황에 적용하기',
      '문제 해결하기',
      '창의적 산출물 만들기',
      '적용 결과 발표하기'
    ],
    assessmentFocus: [
      '전이 능력',
      '문제 해결력',
      '창의적 적용력'
    ],
    commonMistakes: [
      '전이 상황이 너무 유사함',
      '충분한 시간 미제공',
      '창의적 적용 기회 부족'
    ],
    successIndicators: [
      '새로운 상황에 개념을 적용함',
      '원래 맥락을 넘어선 이해를 보여줌',
      '창의적인 해결책을 제시함'
    ]
  },
  reflect: {
    id: 'reflect',
    purpose: '학습 과정과 결과에 대한 메타인지적 성찰, 사고 변화 인식',
    keyActivities: [
      '학습 과정 되돌아보기',
      '사고 변화 인식하기',
      '학습 일지 작성',
      '동료 피드백 및 자기평가'
    ],
    teacherQuestions: [
      '예전에는 어떻게 생각했고, 지금은 어떻게 생각하나요?',
      '어떻게 그런 이해에 도달했나요?',
      '아직 궁금한 점은 무엇인가요?',
      '이 학습이 왜 의미 있었나요?'
    ],
    studentActions: [
      '사고 변화 인식하기',
      '학습 과정 되돌아보기',
      '성찰 일지 작성하기',
      '추가 탐구 방향 생각하기'
    ],
    assessmentFocus: [
      '메타인지 발달',
      '성찰 능력',
      '자기 인식'
    ],
    commonMistakes: [
      '성찰 시간이 부족함',
      '표면적 성찰만 유도',
      '성찰의 가치 강조 부족'
    ],
    successIndicators: [
      '구체적인 사고 변화를 설명함',
      '학습 과정을 반추함',
      '추가 탐구 방향을 설정함'
    ]
  }
};

// 단계별 확장 정보 조회
export const getExtendedStageInfo = (stageId: CBIStageId): ExtendedStageInfo => {
  return CBI_STAGES_EXTENDED[stageId];
};

// 특정 단계의 교사 질문 조회
export const getTeacherQuestions = (stageId: CBIStageId): string[] => {
  return CBI_STAGES_EXTENDED[stageId].teacherQuestions;
};

// 특정 단계의 핵심 활동 조회
export const getKeyActivities = (stageId: CBIStageId): string[] => {
  return CBI_STAGES_EXTENDED[stageId].keyActivities;
};

// 특정 단계의 성공 지표 조회
export const getSuccessIndicators = (stageId: CBIStageId): string[] => {
  return CBI_STAGES_EXTENDED[stageId].successIndicators;
};
