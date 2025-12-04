import type { LessonInput } from '@/types/lesson';

export const generateLessonPlanPrompt = (input: LessonInput): string => {
  return `당신은 전북형 개념기반탐구(CBI) 모형 전문가입니다.
Lynn Erickson과 Lois Lanning의 개념기반 교육과정 이론,
그리고 Rachel French와 Carla Marshall의 개념기반 탐구학습 모형을 기반으로
초등학교 수업을 설계합니다.

## 입력 정보

- **출판사**: ${input.publisher}
- **학년**: ${input.grade}학년
- **과목**: ${input.subject}
- **단원**: ${input.unit}
- **차시**: ${input.period}차시
- **학습목표**: ${input.objectives.join(', ')}
- **성취기준**: ${input.achievementStandards?.join(', ') || '미지정'}
- **수업시간**: ${input.duration}분

## 개념기반탐구 7단계 모형으로 수업 설계

반드시 아래 JSON 형식으로 완전한 수업 설계를 생성하세요.
JSON 외의 다른 텍스트는 포함하지 마세요.

{
  "lessonOverview": {
    "title": "수업 제목 (구체적이고 매력적으로)",
    "coreConcepts": ["핵심 개념 1", "핵심 개념 2"],
    "relatedConcepts": ["관련 개념 1", "관련 개념 2", "관련 개념 3"],
    "bigIdeas": ["핵심 아이디어(일반화) - 개념 간 관계를 보여주는 진술문"],
    "guidingQuestions": {
      "factual": ["사실적 질문 1 (무엇, 언제, 어디)", "사실적 질문 2"],
      "conceptual": ["개념적 질문 1 (왜, 어떻게)", "개념적 질문 2"],
      "debatable": ["논쟁적 질문 (다양한 관점이 가능한 질문)"]
    }
  },
  "stages": {
    "engage": {
      "stageName": "관계맺기",
      "stageNameEn": "Engage",
      "duration": 5,
      "objectives": ["학습 주제에 관심 유발", "사전 지식 활성화"],
      "activities": [
        {
          "order": 1,
          "title": "동기유발 활동명",
          "description": "활동 설명",
          "duration": 5,
          "type": "whole_class",
          "instructions": ["구체적인 교사 지시사항 1", "지시사항 2"],
          "expectedResponses": ["예상되는 학생 반응 1", "예상 반응 2"]
        }
      ],
      "thinkingRoutine": {
        "name": "보고-생각하고-궁금해하기",
        "nameEn": "See-Think-Wonder",
        "steps": ["무엇이 보이나요?", "무엇이 생각나나요?", "무엇이 궁금한가요?"],
        "questions": ["이 자료에서 무엇이 보이나요?", "어떤 생각이 드나요?"]
      },
      "teacherActions": ["자료 제시", "학생 반응 수용", "호기심 유발 질문"],
      "studentActions": ["관찰하기", "생각 나누기", "궁금한 점 발표"],
      "materials": ["동기유발 자료 (사진/영상/실물)"],
      "assessment": {
        "type": "diagnostic",
        "criteria": ["주제에 대한 사전 지식 파악"],
        "methods": ["관찰", "질문"]
      }
    },
    "focus": {
      "stageName": "집중하기",
      "stageNameEn": "Focus",
      "duration": 7,
      "objectives": ["핵심 개념 이해", "탐구 방향 인식"],
      "activities": [
        {
          "order": 1,
          "title": "핵심 개념 소개",
          "description": "오늘 배울 핵심 개념을 명시적으로 소개",
          "duration": 4,
          "type": "whole_class",
          "instructions": ["핵심 개념 제시", "개념의 의미 설명", "예시 제공"],
          "expectedResponses": ["개념 이해 표현", "관련 경험 공유"]
        },
        {
          "order": 2,
          "title": "탐구 질문 안내",
          "description": "오늘 함께 탐구할 질문 공유",
          "duration": 3,
          "type": "whole_class",
          "instructions": ["탐구 질문 제시", "학습 목표 안내"],
          "expectedResponses": ["질문에 대한 초기 생각 발표"]
        }
      ],
      "teacherActions": ["핵심 개념 명시적 소개", "탐구 질문 제시", "학습 목표 안내"],
      "studentActions": ["개념 이해하기", "탐구 질문 인식", "학습 방향 파악"],
      "materials": ["학습 목표 게시물", "핵심 개념 카드"],
      "assessment": {
        "type": "diagnostic",
        "criteria": ["핵심 개념에 대한 초기 이해도"],
        "methods": ["발문", "관찰"]
      }
    },
    "investigate": {
      "stageName": "조사하기",
      "stageNameEn": "Investigate",
      "duration": 12,
      "objectives": ["다양한 사례 탐구", "정보 수집 및 분석", "탐구 기능 발휘"],
      "activities": [
        {
          "order": 1,
          "title": "탐구 활동 안내",
          "description": "모둠별 탐구 활동 방법 안내",
          "duration": 2,
          "type": "whole_class",
          "instructions": ["활동 순서 설명", "역할 분담 안내", "자료 배부"]
        },
        {
          "order": 2,
          "title": "모둠별 탐구 활동",
          "description": "사례 분석 및 정보 수집",
          "duration": 8,
          "type": "group",
          "instructions": ["자료 분석하기", "발견한 것 기록하기", "모둠원과 토의하기"],
          "expectedResponses": ["사례별 특징 발견", "패턴 인식", "질문 생성"],
          "differentiation": {
            "support": "핵심 질문 카드 제공, 1:1 지원",
            "extension": "추가 사례 탐구, 심화 질문 제공"
          }
        },
        {
          "order": 3,
          "title": "탐구 결과 공유",
          "description": "모둠별 발견 내용 공유",
          "duration": 2,
          "type": "whole_class",
          "instructions": ["모둠별 발표", "다른 모둠 의견 경청"],
          "expectedResponses": ["다양한 발견 내용 공유", "질문과 피드백"]
        }
      ],
      "teacherActions": ["순회 지도", "스캐폴딩 질문", "탐구 촉진"],
      "studentActions": ["자료 분석", "정보 수집", "협력적 탐구"],
      "materials": ["탐구 활동지", "다양한 사례 자료", "기록 도구"],
      "assessment": {
        "type": "formative",
        "criteria": ["탐구 과정 참여도", "정보 수집 능력"],
        "methods": ["관찰", "활동지 확인", "순회 지도 중 발문"]
      }
    },
    "organize": {
      "stageName": "조직 및 정리하기",
      "stageNameEn": "Organize",
      "duration": 6,
      "objectives": ["정보 조직화", "패턴과 관계 발견"],
      "activities": [
        {
          "order": 1,
          "title": "정보 정리 활동",
          "description": "그래픽 조직자를 활용한 정보 정리",
          "duration": 4,
          "type": "pair",
          "instructions": ["발견한 내용 정리", "공통점과 차이점 분류", "연결 관계 표시"],
          "expectedResponses": ["체계적인 정보 정리", "패턴 발견"]
        },
        {
          "order": 2,
          "title": "정리 내용 공유",
          "description": "정리한 내용 전체 공유",
          "duration": 2,
          "type": "whole_class",
          "instructions": ["정리 결과 발표", "피드백 교환"],
          "expectedResponses": ["다양한 정리 방식 확인", "새로운 관점 발견"]
        }
      ],
      "teacherActions": ["그래픽 조직자 제공", "정리 방법 안내", "연결 촉진"],
      "studentActions": ["정보 분류", "패턴 찾기", "시각적 표상 만들기"],
      "materials": ["그래픽 조직자 활동지", "포스트잇", "마커"],
      "assessment": {
        "type": "formative",
        "criteria": ["정보 조직 능력", "패턴 인식 능력"],
        "methods": ["활동지 확인", "발표 평가"]
      }
    },
    "generalize": {
      "stageName": "일반화하기",
      "stageNameEn": "Generalize",
      "duration": 5,
      "objectives": ["개념적 이해 도출", "빅 아이디어 형성"],
      "activities": [
        {
          "order": 1,
          "title": "일반화 도출",
          "description": "사례에서 일반적 원리 발견",
          "duration": 3,
          "type": "whole_class",
          "instructions": ["공통점에서 일반화 도출", "문장으로 표현하기"],
          "expectedResponses": ["일반화된 진술문 작성", "다양한 표현 시도"]
        },
        {
          "order": 2,
          "title": "일반화 정교화",
          "description": "토론을 통한 일반화 다듬기",
          "duration": 2,
          "type": "whole_class",
          "instructions": ["일반화 문장 검토", "더 정확한 표현으로 수정"],
          "expectedResponses": ["수정 의견 제시", "합의된 일반화 완성"]
        }
      ],
      "thinkingRoutine": {
        "name": "헤드라인",
        "nameEn": "Headlines",
        "steps": ["가장 중요한 것 생각하기", "한 문장으로 요약하기", "선택 이유 설명하기"],
        "questions": ["오늘 발견한 가장 중요한 아이디어는?", "한 문장으로 정리하면?"]
      },
      "teacherActions": ["귀납적 질문", "스캐폴딩", "일반화 기록"],
      "studentActions": ["패턴에서 원리 발견", "일반화 문장 작성", "토론"],
      "materials": ["일반화 기록판", "학습지"],
      "assessment": {
        "type": "formative",
        "criteria": ["개념적 이해 수준", "일반화 능력"],
        "methods": ["일반화 문장 평가", "토론 참여도"]
      }
    },
    "transfer": {
      "stageName": "전이하기",
      "stageNameEn": "Transfer",
      "duration": 3,
      "objectives": ["새로운 상황에 적용", "실생활 연결"],
      "activities": [
        {
          "order": 1,
          "title": "전이 활동",
          "description": "배운 개념을 새로운 상황에 적용",
          "duration": 3,
          "type": "individual",
          "instructions": ["새로운 상황 제시", "배운 개념 적용하기", "적용 결과 공유"],
          "expectedResponses": ["개념 적용 시도", "다양한 적용 사례 발표"]
        }
      ],
      "teacherActions": ["새로운 맥락 제시", "적용 촉진", "피드백 제공"],
      "studentActions": ["개념 적용", "창의적 연결", "발표"],
      "materials": ["전이 활동 카드"],
      "assessment": {
        "type": "formative",
        "criteria": ["개념 전이 능력", "창의적 적용"],
        "methods": ["적용 사례 평가"]
      }
    },
    "reflect": {
      "stageName": "성찰하기",
      "stageNameEn": "Reflect",
      "duration": 2,
      "objectives": ["학습 과정 성찰", "메타인지 발달"],
      "activities": [
        {
          "order": 1,
          "title": "학습 성찰",
          "description": "오늘 학습에 대한 성찰",
          "duration": 2,
          "type": "individual",
          "instructions": ["사고 변화 인식", "성찰 기록", "소감 나누기"],
          "expectedResponses": ["학습 전후 생각 변화 인식", "추가 탐구 의욕"]
        }
      ],
      "thinkingRoutine": {
        "name": "예전에는-지금은",
        "nameEn": "I Used to Think... Now I Think...",
        "steps": ["예전에는 ___ 라고 생각했어요", "지금은 ___ 라고 생각해요"],
        "questions": ["이 주제에 대해 생각이 어떻게 바뀌었나요?"]
      },
      "teacherActions": ["성찰 안내", "개별 피드백", "다음 학습 안내"],
      "studentActions": ["자기 성찰", "성찰 기록", "소감 발표"],
      "materials": ["성찰 활동지"],
      "assessment": {
        "type": "self",
        "criteria": ["메타인지 표현", "학습 태도"],
        "methods": ["성찰일지", "자기평가"]
      }
    }
  },
  "assessmentPlan": {
    "formative": {
      "methods": ["관찰", "발문", "활동지 확인", "동료 평가"],
      "criteria": ["개념 이해도", "탐구 참여도", "협력 능력"],
      "timing": "각 단계별"
    },
    "summative": {
      "methods": ["일반화 문장 평가", "전이 활동 평가"],
      "criteria": ["핵심 개념 이해", "일반화 능력", "전이 능력"],
      "rubric": [
        {
          "criterion": "개념 이해",
          "levels": {
            "excellent": "핵심 개념과 일반화를 정확히 이해하고 새로운 상황에 적용함",
            "good": "핵심 개념을 이해하고 부분적으로 적용함",
            "developing": "핵심 개념을 부분적으로 이해함",
            "beginning": "핵심 개념 이해에 도움이 필요함"
          }
        }
      ]
    }
  },
  "preparation": ["수업 준비물 목록"],
  "safetyNotes": ["안전 유의사항 (해당되는 경우)"],
  "differentiation": {
    "support": ["학습 지원이 필요한 학생을 위한 방안"],
    "extension": ["심화 학습을 위한 방안"]
  }
}

## 중요 설계 원칙

1. **개념 중심**: 사실적 지식에서 개념적 이해로 이끌어야 합니다.
2. **탐구 중심**: 학생이 스스로 일반화를 도출하도록 설계합니다.
3. **전이 강조**: 배운 개념을 새로운 상황에 적용할 수 있어야 합니다.
4. **학생 중심**: 학생의 능동적 참여를 유도합니다.
5. **시간 배분**: 총 ${input.duration}분에 맞게 각 단계 시간을 조정하세요.

${input.grade}학년 수준에 맞는 용어와 활동을 사용하세요.
반드시 유효한 JSON 형식으로만 응답하세요.`;
};
