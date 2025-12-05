import type { GeneratedLesson } from '@/types/lesson';

export const generateTeachingScriptPrompt = (lesson: GeneratedLesson, grade: number): string => {
  // 단원 전체 정보 추출
  const totalPeriods = lesson.unitOverview?.totalPeriods || 10;
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || '';
  const unitKeyIdea = lesson.unitOverview?.unitKeyIdea || '';

  return `당신은 경력 20년의 우수 초등교사입니다.
주어진 **단원 설계**를 바탕으로 단원 전체(${totalPeriods}차시)에 대한 **실제 수업 대본**을 작성합니다.

## ⚠️ 매우 중요: 실제 대화 형식의 대본을 작성하세요!

대본은 **실제 수업에서 교사와 학생이 주고받는 대화**처럼 작성해야 합니다:

### 좋은 예 (구체적, 실제 대화처럼)
\`\`\`
T: 여러분, 오늘은 '작품 속 세계'에 대해 알아볼 거예요. 이 그림을 함께 볼까요?
S1: 선생님, 저 그림 속 아이가 슬퍼 보여요.
T: 민준이가 좋은 관찰을 했어요! 왜 슬퍼 보인다고 생각했나요?
S1: 눈물을 흘리고 있는 것 같아서요.
S2: 저는 외로워 보여요. 혼자 앉아 있잖아요.
T: 네, 두 친구 모두 작품을 잘 관찰했어요. 작가는 왜 이렇게 그렸을까요?
\`\`\`

### 나쁜 예 (일반적, 플레이스홀더)
\`\`\`
T: (단원을 시작하며) 여러분, 오늘부터 새로운 단원을 시작합니다.
S: ○○이 보여요.
T: (학생 발표 후) 좋은 생각이에요.
\`\`\`

**모든 대화는 "${unitTitle}" 단원의 실제 내용에 맞게 구체적으로 작성하세요!**
**플레이스홀더(○○, △△, □□)나 "(내용)"은 절대 사용하지 마세요!**

## 단원 설계 정보

**단원명**: ${unitTitle}
**총 차시**: ${totalPeriods}차시
**학년**: ${grade}학년
**개념 렌즈**: ${conceptLens}
**빅 아이디어**: ${unitKeyIdea}

### 단원 개요
${JSON.stringify(lesson.unitOverview || lesson.lessonOverview, null, 2)}

### 7단계 설계
${JSON.stringify(lesson.stages, null, 2)}

### 단원 평가
${JSON.stringify(lesson.unitAssessment || {}, null, 2)}

## 수업 대본 작성 요청

다음 JSON 형식으로 **단원 전체**의 실제 수업 대본을 작성하세요.
**모든 "T:"와 "S:"는 이 단원의 실제 내용에 맞는 구체적인 대화여야 합니다.**
JSON 외의 다른 텍스트는 포함하지 마세요.

{
  "lessonScript": {
    "opening": {
      "greeting": "T: 여러분 안녕하세요! 오늘부터 '${unitTitle}' 단원을 함께 공부해 볼 거예요.",
      "motivation": "T: (동기유발 - 이 단원에 맞는 구체적인 질문이나 자료 제시)",
      "objectiveShare": "T: (학습 목표 안내 - 구체적으로)"
    },
    "stages": [
      {
        "stageName": "1단계: 관계맺기 (Engage)",
        "timing": "${lesson.stages?.engage?.periods || '1차시'}",
        "sections": [
          {
            "activity": "See-Think-Wonder 활동",
            "teacherSays": [
              "T: (이 단원의 구체적인 자료를 보여주며 하는 말)",
              "T: (학생 반응에 대한 구체적인 피드백)",
              "T: (후속 발문 - 구체적으로)"
            ],
            "expectedStudentResponses": [
              "S1: (이 단원 내용에 맞는 구체적인 학생 발언)",
              "S2: (다른 구체적인 학생 발언)",
              "S3: (학생의 질문)"
            ],
            "teacherNotes": ["학생들의 다양한 반응 수용", "오개념도 이 단계에서는 수정하지 않음"],
            "transition": "T: (다음 활동으로 넘어가는 구체적인 전환 멘트)"
          },
          {
            "activity": "경험 연결하기",
            "teacherSays": ["T: (학생의 경험과 연결하는 구체적인 질문들)"],
            "expectedStudentResponses": ["S: (구체적인 학생 경험 공유)"]
          }
        ]
      },
      {
        "stageName": "2단계: 집중하기 (Focus)",
        "timing": "${lesson.stages?.focus?.periods || '2차시'}",
        "sections": [
          {
            "activity": "핵심 개념 탐색 - 프레이어 모델",
            "teacherSays": [
              "T: 오늘 우리가 탐구할 핵심 개념은 '${conceptLens}'이에요.",
              "T: (프레이어 모델 활동 안내)",
              "T: (정의, 특징, 예시, 비예시 각각에 대한 발문)"
            ],
            "expectedStudentResponses": ["S: (개념에 대한 학생들의 구체적 반응)"],
            "transition": "T: (다음 단계로 넘어가는 전환)"
          }
        ]
      },
      {
        "stageName": "3단계: 조사하기 (Investigate)",
        "timing": "${lesson.stages?.investigate?.periods || '3-4차시'}",
        "sections": [
          {
            "activity": "탐구 활동 안내",
            "teacherSays": ["T: (탐구 활동 구체적 안내)"],
            "expectedStudentResponses": ["S: (학생 질문이나 반응)"]
          },
          {
            "activity": "모둠별 탐구",
            "teacherSays": [
              "T: (순회 지도하며 하는 구체적인 발문)",
              "T: (탐구를 촉진하는 스캐폴딩 질문)"
            ],
            "expectedStudentResponses": ["S: (탐구 과정에서의 구체적인 발견)"],
            "scaffoldingQuestions": ["(구체적인 스캐폴딩 질문 목록)"]
          },
          {
            "activity": "탐구 결과 공유",
            "teacherSays": ["T: (발표 안내 및 피드백)"],
            "expectedStudentResponses": ["S: (모둠별 발표 내용)"]
          }
        ]
      },
      {
        "stageName": "4단계: 조직 및 정리하기 (Organize)",
        "timing": "${lesson.stages?.organize?.periods || '5-6차시'}",
        "sections": [
          {
            "activity": "정보 분류 및 조직화",
            "teacherSays": ["T: (그래픽 조직자 활용 안내)", "T: (공통점, 차이점, 패턴 찾기 발문)"],
            "expectedStudentResponses": ["S: (패턴 발견에 대한 구체적 반응)"]
          },
          {
            "activity": "갤러리 워크",
            "teacherSays": ["T: (갤러리 워크 안내 및 정리)"]
          }
        ]
      },
      {
        "stageName": "5단계: 일반화하기 (Generalize)",
        "timing": "${lesson.stages?.generalize?.periods || '7차시'}",
        "sections": [
          {
            "activity": "빅 아이디어 도출",
            "teacherSays": [
              "T: 우리가 탐구한 내용에서 공통적으로 발견한 것은 무엇인가요?",
              "T: 이것을 한 문장으로 정리해 볼까요?",
              "T: (학생 일반화에 대한 피드백)",
              "T: 이것이 우리의 '빅 아이디어'예요: ${unitKeyIdea}"
            ],
            "expectedStudentResponses": ["S: (학생들이 도출한 일반화 문장)"],
            "keyQuestions": ["이 패턴이 다른 상황에서도 적용될까요?", "왜 이것이 중요할까요?"]
          }
        ]
      },
      {
        "stageName": "6단계: 전이하기 (Transfer)",
        "timing": "${lesson.stages?.transfer?.periods || '8-9차시'}",
        "sections": [
          {
            "activity": "GRASPS 수행과제 안내",
            "teacherSays": [
              "T: 여러분에게 특별한 미션을 드릴게요!",
              "T: (수행과제의 Goal, Role, Audience, Situation, Product, Standards 구체적 안내)"
            ]
          },
          {
            "activity": "수행과제 수행",
            "teacherSays": ["T: (순회 지도하며 하는 피드백 및 발문)"],
            "expectedStudentResponses": ["S: (수행과제 중 학생 반응)"]
          },
          {
            "activity": "발표 및 평가",
            "teacherSays": ["T: (발표 안내)", "T: (루브릭에 따른 피드백)"]
          }
        ]
      },
      {
        "stageName": "7단계: 성찰하기 (Reflect)",
        "timing": "${lesson.stages?.reflect?.periods || '10차시'}",
        "sections": [
          {
            "activity": "예전에는-지금은 루틴",
            "teacherSays": [
              "T: 단원을 시작할 때 여러분은 '${conceptLens}'에 대해 어떻게 생각했나요?",
              "T: 지금은 어떻게 생각이 바뀌었나요?",
              "T: '예전에는 ___라고 생각했는데, 지금은 ___라고 생각해요' 형식으로 적어봅시다."
            ],
            "expectedStudentResponses": ["S: 예전에는 (구체적)이라고 생각했는데, 지금은 (구체적)이라고 생각해요."]
          },
          {
            "activity": "자기평가 및 마무리",
            "teacherSays": [
              "T: (자기평가 안내)",
              "T: 이번 단원에서 가장 중요하게 배운 것은 무엇인가요?",
              "T: 이번 단원에서 우리는 '${conceptLens}'를 탐구하며 '${unitKeyIdea}'라는 중요한 발견을 했어요.",
              "T: 여러분 모두 훌륭한 탐구자가 되었어요! 수고했습니다."
            ]
          }
        ]
      }
    ],
    "closing": {
      "summary": "이번 단원에서 우리는 '${conceptLens}'를 탐구하며 '${unitKeyIdea}'라는 빅 아이디어를 발견했습니다.",
      "preview": "다음 단원에서는 이 개념을 확장하여 더 탐구해 보겠습니다.",
      "farewell": "여러분 모두 수고했어요!"
    },
    "contingencyPlans": {
      "timeShortage": "(시간 부족 시 대응 방안)",
      "studentStruggle": "(학생이 어려워할 때 대응 방안)",
      "fastFinishers": "(빨리 끝낸 학생을 위한 활동)"
    }
  }
}

## 대본 작성 원칙

1. **실제 대화처럼**: 모든 T:와 S:는 실제 교실에서 오가는 대화처럼 자연스럽게
2. **구체적 내용**: "${unitTitle}" 단원의 실제 내용이 반영되어야 함
3. **플레이스홀더 금지**: ○○, △△, (내용), [내용] 같은 플레이스홀더 사용 금지
4. **학년 수준**: ${grade}학년 학생이 이해할 수 있는 자연스러운 말투
5. **풍부한 대화**: 각 활동마다 최소 3-5개의 교사 발언과 2-3개의 학생 반응
6. **후속 발문**: 학생 반응에 대한 후속 질문 포함
7. **차시 연결**: 차시 간 자연스러운 전환

반드시 유효한 JSON 형식으로만 응답하세요.`;
};
