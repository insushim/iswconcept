import type { GeneratedLesson } from '@/types/lesson';

export const generateTeachingScriptPrompt = (lesson: GeneratedLesson, grade: number): string => {
  // 단원 전체 정보 추출
  const totalPeriods = lesson.unitOverview?.totalPeriods || 10;
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;

  return `당신은 경력 20년의 우수 초등교사입니다.
주어진 **단원 설계**를 바탕으로 단원 전체(${totalPeriods}차시)에 대한 상세한 수업 진행 대본을 작성합니다.

## 단원 설계 정보

**단원명**: ${unitTitle}
**총 차시**: ${totalPeriods}차시
**학년**: ${grade}학년

### 단원 개요
${JSON.stringify(lesson.unitOverview || lesson.lessonOverview, null, 2)}

### 7단계 설계
${JSON.stringify(lesson.stages, null, 2)}

### 단원 평가
${JSON.stringify(lesson.unitAssessment || {}, null, 2)}

## 수업 대본 작성 요청

다음 JSON 형식으로 **단원 전체**의 수업 대본을 작성하세요.
각 단계별로 해당 차시에 맞는 상세한 대본을 작성합니다.
JSON 외의 다른 텍스트는 포함하지 마세요.

{
  "unitScript": {
    "unitTitle": "${unitTitle}",
    "totalPeriods": ${totalPeriods},
    "grade": ${grade},
    "opening": {
      "unitIntroduction": "단원 첫 시간에 사용할 단원 소개 멘트",
      "conceptLensIntro": "개념 렌즈를 소개하는 멘트",
      "bigQuestionsIntro": "단원 전체를 관통하는 탐구 질문 소개"
    },
    "stages": [
      {
        "stageName": "관계맺기",
        "stageNameEn": "Engage",
        "phase": "개념인식",
        "periods": "${lesson.stages?.engage?.periods || '1차시'}",
        "periodCount": ${lesson.stages?.engage?.periodCount || 1},
        "generalization": "${lesson.stages?.engage?.generalization || ''}",
        "inquiryQuestion": "${lesson.stages?.engage?.inquiryQuestion || ''}",
        "sections": [
          {
            "periodNumber": "해당 차시 번호",
            "activity": "동기유발 활동",
            "duration": "0:00 - 10:00",
            "teacherSays": [
              "T: (단원을 시작하며) 여러분, 오늘부터 새로운 단원을 시작합니다.",
              "T: (자료를 보여주며) 이 자료를 한번 볼까요?",
              "T: 무엇이 보이나요? 손을 들어 이야기해 봅시다.",
              "T: (학생 발표 후) 네, 좋은 관찰이에요. 또 다른 생각이 있나요?",
              "T: 여러분의 경험 중에 이것과 비슷한 것이 있나요?"
            ],
            "expectedStudentResponses": [
              "S1: ○○이 보여요.",
              "S2: △△ 같아요.",
              "S3: 저는 □□ 경험이 있어요.",
              "S4: 왜 ◇◇일까요?"
            ],
            "teacherNotes": [
              "모든 학생이 자료를 볼 수 있도록 확인",
              "다양한 반응을 수용적으로 받아들이기",
              "오개념이 있어도 이 단계에서는 수정하지 않음",
              "학생들의 사전 경험과 지식을 파악하여 기록"
            ],
            "thinkingRoutine": "See-Think-Wonder (보고-생각하고-궁금해하기)",
            "transition": "자, 이제 우리가 이 단원에서 탐구할 핵심 개념에 대해 알아볼까요?"
          }
        ]
      },
      {
        "stageName": "집중하기",
        "stageNameEn": "Focus",
        "phase": "개념인식",
        "periods": "${lesson.stages?.focus?.periods || '2차시'}",
        "periodCount": ${lesson.stages?.focus?.periodCount || 1},
        "generalization": "${lesson.stages?.focus?.generalization || ''}",
        "inquiryQuestion": "${lesson.stages?.focus?.inquiryQuestion || ''}",
        "sections": [
          {
            "periodNumber": "해당 차시 번호",
            "activity": "핵심 개념 탐색",
            "duration": "0:00 - 15:00",
            "teacherSays": [
              "T: 지난 시간에 우리가 살펴본 것을 기억하나요?",
              "T: 오늘 우리가 탐구할 핵심 개념은 '○○'입니다.",
              "T: ○○이란 무엇일까요? 자신의 생각을 짝과 나눠보세요.",
              "T: (프레이어 모델 활동지 배부) 이 활동지를 함께 채워볼 거예요.",
              "T: ○○의 정의를 여러분의 말로 적어볼까요?",
              "T: ○○의 예시와 비예시는 무엇이 있을까요?"
            ],
            "expectedStudentResponses": [
              "S: ○○은 □□인 것 같아요.",
              "S: △△에서 볼 수 있어요.",
              "S: ◇◇은 ○○이 아닌 것 같아요."
            ],
            "teacherNotes": [
              "핵심 개념을 명확하게 제시",
              "학생들의 초기 이해 파악",
              "프레이어 모델을 통한 개념 정의 유도"
            ],
            "thinkingRoutine": "Frayer Model (프레이어 모델)",
            "transition": "핵심 개념을 이해했으니, 이제 더 깊이 탐구해 봅시다."
          },
          {
            "periodNumber": "해당 차시 번호",
            "activity": "탐구 질문 안내",
            "duration": "15:00 - 25:00",
            "teacherSays": [
              "T: 이번 단원에서 우리가 탐구할 질문들을 소개할게요.",
              "T: 첫 번째는 사실적 질문이에요. (사) ~은 무엇인가요?",
              "T: 두 번째는 개념적 질문이에요. (개) 왜 ~할까요?",
              "T: 세 번째는 논쟁적 질문이에요. (논) ~해야 할까요?"
            ],
            "teacherNotes": [
              "탐구 질문의 세 유형 명확히 설명",
              "학습 방향 안내"
            ],
            "transition": "이제 이 질문들에 대한 답을 찾기 위해 조사활동을 해볼까요?"
          }
        ]
      },
      {
        "stageName": "조사하기",
        "stageNameEn": "Investigate",
        "phase": "개념연결",
        "periods": "${lesson.stages?.investigate?.periods || '3-4차시'}",
        "periodCount": ${lesson.stages?.investigate?.periodCount || 2},
        "generalization": "${lesson.stages?.investigate?.generalization || ''}",
        "inquiryQuestion": "${lesson.stages?.investigate?.inquiryQuestion || ''}",
        "sections": [
          {
            "periodNumber": "해당 차시 번호 (첫 번째 조사 차시)",
            "activity": "탐구 활동 안내 및 시작",
            "duration": "0:00 - 10:00",
            "teacherSays": [
              "T: 오늘은 모둠별로 탐구 활동을 해 볼 거예요.",
              "T: 각 모둠은 서로 다른 사례를 조사하게 됩니다.",
              "T: 활동 순서를 설명할게요. (순서 안내)",
              "T: 첫째, 자료를 읽고 중요한 내용을 찾아요.",
              "T: 둘째, 모둠원과 발견한 것을 토의해요.",
              "T: 셋째, 발견한 것을 활동지에 기록해요.",
              "T: 질문이 있으면 손을 들어주세요."
            ],
            "teacherNotes": [
              "활동 순서를 명확히 안내",
              "자료 배부",
              "역할 분담 확인"
            ]
          },
          {
            "periodNumber": "해당 차시 번호",
            "activity": "모둠별 탐구",
            "duration": "10:00 - 30:00",
            "teacherSays": [
              "T: (순회 지도하며) 이 모둠은 어떤 것을 발견했나요?",
              "T: 좋아요. 왜 그렇게 생각했나요?",
              "T: 다른 관점에서도 생각해 볼까요?",
              "T: 이것과 저것의 공통점은 무엇일까요?",
              "T: (어려워하는 모둠에게) 이 힌트 카드를 참고해 보세요."
            ],
            "scaffoldingQuestions": [
              "어떤 공통점이 보이나요?",
              "왜 그런 현상이 일어났을까요?",
              "다른 경우에도 똑같이 적용될까요?",
              "이것은 우리가 배운 개념과 어떻게 연결되나요?"
            ],
            "teacherNotes": [
              "모든 모둠 순회 지도",
              "스캐폴딩 질문으로 탐구 촉진",
              "시간 관리",
              "어려워하는 모둠에 추가 지원"
            ]
          },
          {
            "periodNumber": "해당 차시 번호 (두 번째 조사 차시)",
            "activity": "탐구 심화 및 결과 공유",
            "duration": "0:00 - 25:00",
            "teacherSays": [
              "T: 지난 시간 조사한 내용을 이어서 마무리해 봅시다.",
              "T: (추가 조사 후) 자, 이제 발견한 내용을 함께 나눠볼까요?",
              "T: 1모둠부터 발표해 주세요.",
              "T: (발표 후) 좋은 발견이에요. 다른 모둠도 비슷한 것을 발견했나요?",
              "T: 모둠마다 조사한 내용에서 공통점이 보이나요?"
            ],
            "teacherNotes": [
              "발표 시간 관리",
              "공통점과 차이점 정리 유도"
            ],
            "transition": "여러분이 발견한 내용을 정리해 봅시다."
          }
        ]
      },
      {
        "stageName": "조직 및 정리하기",
        "stageNameEn": "Organize",
        "phase": "개념연결",
        "periods": "${lesson.stages?.organize?.periods || '5-6차시'}",
        "periodCount": ${lesson.stages?.organize?.periodCount || 2},
        "generalization": "${lesson.stages?.organize?.generalization || ''}",
        "inquiryQuestion": "${lesson.stages?.organize?.inquiryQuestion || ''}",
        "sections": [
          {
            "periodNumber": "해당 차시 번호",
            "activity": "정보 분류 및 조직화",
            "duration": "0:00 - 20:00",
            "teacherSays": [
              "T: 지금까지 조사한 내용을 정리해 볼 거예요.",
              "T: 이 그래픽 조직자를 함께 채워봅시다.",
              "T: 먼저 공통점을 찾아볼까요?",
              "T: 그렇다면 차이점은 무엇인가요?",
              "T: 이 정보들 사이에 어떤 패턴이 보이나요?",
              "T: 왜 그런 패턴이 나타났을까요?"
            ],
            "expectedStudentResponses": [
              "S: 공통점은 ○○이에요.",
              "S: △△와 □□가 다르네요.",
              "S: 모두 ◇◇한 특징이 있어요."
            ],
            "teacherNotes": [
              "그래픽 조직자 활용 안내",
              "패턴 발견 촉진",
              "학생들의 다양한 분류 방식 수용"
            ],
            "thinkingRoutine": "Compare and Contrast (교차비교차트)",
            "transition": "이제 우리가 발견한 패턴에서 중요한 아이디어를 찾아봅시다."
          },
          {
            "periodNumber": "해당 차시 번호",
            "activity": "결과 공유 및 토의",
            "duration": "20:00 - 40:00",
            "teacherSays": [
              "T: 모둠별로 정리한 내용을 갤러리 워크로 공유해 볼까요?",
              "T: 다른 모둠의 정리 내용에서 좋은 점을 찾아 메모해 주세요.",
              "T: (갤러리 워크 후) 어떤 공통점을 발견했나요?",
              "T: 우리 반 전체가 발견한 것을 종합해 봅시다."
            ],
            "teacherNotes": [
              "갤러리 워크 진행",
              "상호 피드백 유도"
            ],
            "transition": "정리한 내용을 바탕으로 중요한 아이디어를 도출해 봅시다."
          }
        ]
      },
      {
        "stageName": "일반화하기",
        "stageNameEn": "Generalize",
        "phase": "개념전이",
        "periods": "${lesson.stages?.generalize?.periods || '7차시'}",
        "periodCount": ${lesson.stages?.generalize?.periodCount || 1},
        "generalization": "${lesson.stages?.generalize?.generalization || ''}",
        "inquiryQuestion": "${lesson.stages?.generalize?.inquiryQuestion || ''}",
        "sections": [
          {
            "periodNumber": "해당 차시 번호",
            "activity": "일반화 도출",
            "duration": "0:00 - 25:00",
            "teacherSays": [
              "T: 우리가 조사하고 정리한 내용을 돌아봅시다.",
              "T: 이 사례들에서 공통적으로 발견한 것은 무엇인가요?",
              "T: 이것이 다른 상황에서도 적용될까요?",
              "T: 그렇다면, '○○은/는 △△하다'라고 말할 수 있을까요?",
              "T: (학생 일반화 발표 후) 이 생각을 다른 말로 표현해 볼 사람?",
              "T: 우리가 발견한 중요한 아이디어를 함께 정리해 봅시다.",
              "T: 이것을 우리의 '빅 아이디어'라고 불러요."
            ],
            "keyQuestions": [
              "이 패턴이 다른 상황에서도 적용될까요?",
              "우리가 발견한 것을 한 문장으로 말해볼까요?",
              "왜 이것이 중요할까요?",
              "언제, 어디서든 이 원리가 적용될까요?"
            ],
            "expectedStudentResponses": [
              "S: ○○은 항상 △△한 것 같아요.",
              "S: □□하기 때문에 ◇◇해요.",
              "S: 다른 곳에서도 비슷할 것 같아요."
            ],
            "teacherNotes": [
              "학생들이 직접 일반화를 도출하도록 기다림",
              "다양한 표현 격려",
              "일반화 문장 기록 (칠판/전자칠판)"
            ],
            "thinkingRoutine": "Headlines (헤드라인)",
            "transition": "이제 발견한 빅 아이디어를 새로운 상황에 적용해 봅시다."
          }
        ]
      },
      {
        "stageName": "전이하기",
        "stageNameEn": "Transfer",
        "phase": "개념전이",
        "periods": "${lesson.stages?.transfer?.periods || '8-9차시'}",
        "periodCount": ${lesson.stages?.transfer?.periodCount || 2},
        "generalization": "${lesson.stages?.transfer?.generalization || ''}",
        "inquiryQuestion": "${lesson.stages?.transfer?.inquiryQuestion || ''}",
        "sections": [
          {
            "periodNumber": "해당 차시 번호",
            "activity": "GRASPS 수행과제 안내",
            "duration": "0:00 - 15:00",
            "teacherSays": [
              "T: 우리가 발견한 빅 아이디어가 다른 상황에도 적용되는지 확인해 볼까요?",
              "T: 여러분에게 특별한 미션을 드릴게요.",
              "T: 여러분은 (역할)이 되어서 (상황)에서 (산출물)을 만들어야 해요.",
              "T: 이 과제의 목표는 (목표)입니다.",
              "T: (청중)에게 발표하게 될 거예요.",
              "T: 평가 기준을 함께 살펴볼까요?"
            ],
            "teacherNotes": [
              "GRASPS 요소 명확히 안내",
              "루브릭 공유",
              "질문 시간 제공"
            ]
          },
          {
            "periodNumber": "해당 차시 번호",
            "activity": "수행과제 수행",
            "duration": "15:00 - 40:00",
            "teacherSays": [
              "T: 모둠별로 수행과제를 시작해 봅시다.",
              "T: (순회 지도하며) 우리가 발견한 빅 아이디어를 어떻게 적용하고 있나요?",
              "T: 좋아요, 그 아이디어를 더 발전시켜 볼까요?",
              "T: 다른 관점에서도 생각해 보면 어떨까요?"
            ],
            "scaffoldingQuestions": [
              "우리가 배운 개념이 여기서 어떻게 나타나나요?",
              "빅 아이디어가 이 상황에서 어떻게 적용되나요?",
              "더 창의적인 방법은 없을까요?"
            ],
            "teacherNotes": [
              "순회 지도하며 개별 피드백",
              "개념 적용 확인",
              "창의성 격려"
            ]
          },
          {
            "periodNumber": "해당 차시 번호 (발표 차시)",
            "activity": "발표 및 피드백",
            "duration": "0:00 - 40:00",
            "teacherSays": [
              "T: 이제 여러분의 결과물을 발표해 봅시다.",
              "T: 발표를 들을 때 우리가 배운 개념이 어떻게 나타나는지 찾아보세요.",
              "T: (발표 후) 이 모둠은 빅 아이디어를 어떻게 적용했나요?",
              "T: 좋은 점과 더 발전시킬 점을 이야기해 봅시다."
            ],
            "teacherNotes": [
              "루브릭에 따른 평가",
              "동료 피드백 유도",
              "개념 전이 확인"
            ],
            "transition": "이번 단원을 마무리하며 우리의 학습을 돌아봅시다."
          }
        ]
      },
      {
        "stageName": "성찰하기",
        "stageNameEn": "Reflect",
        "phase": "개념성찰",
        "periods": "${lesson.stages?.reflect?.periods || '10차시'}",
        "periodCount": ${lesson.stages?.reflect?.periodCount || 1},
        "generalization": "${lesson.stages?.reflect?.generalization || ''}",
        "inquiryQuestion": "${lesson.stages?.reflect?.inquiryQuestion || ''}",
        "sections": [
          {
            "periodNumber": "해당 차시 번호 (마지막 차시)",
            "activity": "학습 성찰",
            "duration": "0:00 - 20:00",
            "teacherSays": [
              "T: 이번 단원을 마무리하며 함께 돌아봅시다.",
              "T: 단원을 시작할 때 여러분은 (주제)에 대해 어떻게 생각했나요?",
              "T: 지금은 어떻게 생각이 바뀌었나요?",
              "T: '예전에는 ___라고 생각했는데, 지금은 ___라고 생각해요' 형식으로 적어봅시다.",
              "T: 이번 단원에서 가장 중요하게 배운 것은 무엇인가요?",
              "T: 우리의 빅 아이디어를 다시 한번 읽어볼까요?"
            ],
            "expectedStudentResponses": [
              "S: 예전에는 ○○라고 생각했는데, 지금은 △△라고 생각해요.",
              "S: □□가 가장 인상 깊었어요.",
              "S: ◇◇가 더 궁금해요."
            ],
            "teacherNotes": [
              "충분한 성찰 시간 제공",
              "다양한 성찰 공유",
              "성장 관점 피드백"
            ],
            "thinkingRoutine": "I Used to Think... Now I Think... (예전에는-지금은)"
          },
          {
            "periodNumber": "해당 차시 번호",
            "activity": "자기평가 및 마무리",
            "duration": "20:00 - 40:00",
            "teacherSays": [
              "T: 자기평가 체크리스트를 작성해 봅시다.",
              "T: 자신의 성장을 스스로 평가하는 시간이에요.",
              "T: 이번 단원에서 더 알고 싶은 것이 있나요?",
              "T: 배운 내용을 실생활에서 어떻게 활용할 수 있을까요?",
              "T: 이번 단원을 마치며, 여러분 모두 훌륭했어요!",
              "T: 다음 단원에서는 오늘 배운 개념을 확장해서 더 탐구해 볼 거예요."
            ],
            "closingRemarks": "이번 단원에서 우리는 '(핵심 개념)'을 탐구하며 '(빅 아이디어)'라는 중요한 발견을 했습니다. 여러분 모두 수고했어요!"
          }
        ]
      }
    ],
    "unitClosing": {
      "summary": "이번 단원에서 우리는 ○○에 대해 탐구하며 '△△' 라는 중요한 빅 아이디어를 발견했습니다.",
      "keyLearnings": [
        "핵심 개념 정리",
        "빅 아이디어(일반화) 요약",
        "탐구 과정에서 기른 역량"
      ],
      "connectionToNext": "다음 단원에서는 이 개념을 확장하여 □□에 대해 탐구해 보겠습니다.",
      "realLifeApplication": "오늘 배운 내용은 ◇◇에서 활용할 수 있습니다."
    },
    "contingencyPlans": {
      "timeShortage": "전이하기 수행과제를 간소화하고, 성찰하기에서 핵심만 다룸",
      "studentStruggle": "추가 예시 제공, 소그룹 지도, 또래 도움 활용, 스캐폴딩 질문 강화",
      "fastFinishers": "심화 탐구 질문 제공, 동료 학습 지원 역할 부여, 추가 사례 탐구"
    },
    "assessmentIntegration": {
      "diagnostic": "관계맺기, 집중하기 단계에서 사전 지식 및 개념 이해도 파악",
      "formative": "조사하기, 조직하기, 일반화하기 단계에서 탐구 과정 관찰 및 피드백",
      "summative": "전이하기 단계의 GRASPS 수행과제로 개념 전이 능력 평가",
      "selfAssessment": "성찰하기 단계에서 자기평가 및 상호평가"
    }
  }
}

## 대본 작성 원칙

1. **단원 전체 흐름**: 각 단계가 ${totalPeriods}차시 전체에 걸쳐 어떻게 진행되는지 명확히 기술
2. **차시 연결**: 차시 간 연결을 위한 전환 멘트 포함
3. **자연스러운 화법**: ${grade}학년 학생들이 이해할 수 있는 자연스러운 말투 사용
4. **발문의 다양성**: 사실적, 개념적, 논쟁적 질문을 단계에 맞게 배치
5. **기다림의 시간**: 발문 후 학생 사고 시간 확보 (3-5초)
6. **긍정적 피드백**: 학생 반응에 대한 구체적 칭찬
7. **사고루틴 활용**: 각 단계에 맞는 사고루틴 적용
8. **스캐폴딩**: 어려워하는 학생을 위한 단계적 지원 질문 포함

반드시 유효한 JSON 형식으로만 응답하세요.`;
};
