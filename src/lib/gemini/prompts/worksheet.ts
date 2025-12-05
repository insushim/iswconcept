import type { GeneratedLesson } from '@/types/lesson';

export const generateWorksheetPrompt = (lesson: GeneratedLesson, grade: number, subject: string): string => {
  // 단원 전체 정보 추출
  const totalPeriods = lesson.unitOverview?.totalPeriods || 10;
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || lesson.lessonOverview.coreConcepts?.[0] || '핵심 개념';

  return `단원 전체(${totalPeriods}차시)에 대한 학습지를 생성합니다.
각 7단계별로 해당 차시에 맞는 학습지 섹션을 생성합니다.

## 단원 정보

**단원명**: ${unitTitle}
**총 차시**: ${totalPeriods}차시
**학년**: ${grade}학년
**과목**: ${subject}
**개념 렌즈**: ${conceptLens}

### 단원 개요
${JSON.stringify(lesson.unitOverview || lesson.lessonOverview, null, 2)}

### 7단계 설계
${JSON.stringify(lesson.stages, null, 2)}

### 단원 평가
${JSON.stringify(lesson.unitAssessment || {}, null, 2)}

## 학습지 생성 요청

다음 JSON 형식으로 **단원 전체**의 학습지 내용을 생성하세요.
각 단계별로 해당 차시에 맞는 학습지 섹션을 포함합니다.
JSON 외의 다른 텍스트는 포함하지 마세요.

{
  "worksheet": {
    "header": {
      "title": "전북형 CBI 탐구 학습지",
      "subtitle": "${unitTitle}",
      "subject": "${subject}",
      "grade": "${grade}학년",
      "totalPeriods": "${totalPeriods}차시",
      "conceptLens": "${conceptLens}",
      "studentNameField": true,
      "dateField": true,
      "classField": true
    },
    "unitOverviewSection": {
      "title": "📚 단원 안내",
      "conceptLens": "${conceptLens}",
      "bigIdea": "단원의 빅 아이디어(일반화) 문장",
      "inquiryQuestions": {
        "factual": "(사) 사실적 질문",
        "conceptual": "(개) 개념적 질문",
        "debatable": "(논) 논쟁적 질문"
      },
      "learningJourney": [
        "1️⃣ 관계맺기 - 경험과 개념 연결",
        "2️⃣ 집중하기 - 핵심 개념 탐색",
        "3️⃣ 조사하기 - 다양한 사례 탐구",
        "4️⃣ 조직하기 - 정보 분류와 패턴 발견",
        "5️⃣ 일반화하기 - 빅 아이디어 도출",
        "6️⃣ 전이하기 - 새로운 상황에 적용",
        "7️⃣ 성찰하기 - 학습 돌아보기"
      ]
    },
    "sections": [
      {
        "id": "section-engage",
        "sectionNumber": 1,
        "title": "🔗 관계맺기 (Engage)",
        "stage": "engage",
        "periods": "${lesson.stages?.engage?.periods || '1차시'}",
        "phase": "개념인식",
        "stageColor": "#F59E0B",
        "instructions": "다음 자료를 관찰하고 생각을 적어봅시다.",
        "thinkingRoutine": "See-Think-Wonder (보고-생각하고-궁금해하기)",
        "questions": [
          {
            "id": "q1",
            "number": 1,
            "type": "see_think_wonder",
            "question": "자료를 관찰해 봅시다",
            "prompts": [
              "👀 무엇이 보이나요?",
              "🤔 무엇이 생각나나요? (떠오르는 것, 연상되는 것)",
              "❓ 무엇이 궁금한가요?"
            ],
            "answerSpace": "large",
            "lines": 4
          },
          {
            "id": "q2",
            "number": 2,
            "type": "experience",
            "question": "나의 경험과 연결해 봅시다",
            "prompt": "이것과 비슷한 경험이 있나요? 어떤 경험인지 적어봅시다.",
            "answerSpace": "medium",
            "lines": 3
          },
          {
            "id": "q3",
            "number": 3,
            "type": "initial_thinking",
            "question": "처음 생각 기록하기",
            "prompt": "이 주제에 대해 지금 알고 있거나 생각하는 것을 적어봅시다. (단원 마지막에 다시 확인할 거예요!)",
            "answerSpace": "medium",
            "lines": 3
          }
        ]
      },
      {
        "id": "section-focus",
        "sectionNumber": 2,
        "title": "🎯 집중하기 (Focus)",
        "stage": "focus",
        "periods": "${lesson.stages?.focus?.periods || '2차시'}",
        "phase": "개념인식",
        "stageColor": "#3B82F6",
        "instructions": "핵심 개념을 탐색하고 정의해 봅시다.",
        "thinkingRoutine": "Frayer Model (프레이어 모델)",
        "questions": [
          {
            "id": "q4",
            "number": 4,
            "type": "frayer_model",
            "question": "프레이어 모델로 핵심 개념 정리하기",
            "concept": "${conceptLens}",
            "sections": ["정의 (나의 말로)", "특징", "예시", "비예시"],
            "answerSpace": "large"
          },
          {
            "id": "q5",
            "number": 5,
            "type": "inquiry_questions",
            "question": "탐구 질문 이해하기",
            "prompts": [
              "(사) 사실적 질문에 대한 나의 첫 생각:",
              "(개) 개념적 질문에 대한 나의 첫 생각:",
              "(논) 논쟁적 질문에 대한 나의 첫 생각:"
            ],
            "answerSpace": "medium",
            "lines": 2
          }
        ]
      },
      {
        "id": "section-investigate",
        "sectionNumber": 3,
        "title": "🔬 조사하기 (Investigate)",
        "stage": "investigate",
        "periods": "${lesson.stages?.investigate?.periods || '3-4차시'}",
        "phase": "개념연결",
        "stageColor": "#10B981",
        "instructions": "다양한 사례를 탐구하고 발견한 것을 기록합니다.",
        "thinkingRoutine": "Jigsaw (직소) / Think-Pair-Share",
        "questions": [
          {
            "id": "q6",
            "number": 6,
            "type": "investigation_table",
            "question": "탐구 내용 기록표",
            "tableHeaders": ["탐구 항목/사례", "관찰한 내용", "발견한 특징", "궁금한 점"],
            "rows": 4,
            "notes": "모둠에서 맡은 사례를 조사하고 기록하세요."
          },
          {
            "id": "q7",
            "number": 7,
            "type": "pattern_finding",
            "question": "패턴 찾기",
            "prompt": "조사하면서 발견한 공통점이나 패턴은 무엇인가요?",
            "answerSpace": "medium",
            "lines": 3
          },
          {
            "id": "q8",
            "number": 8,
            "type": "connection",
            "question": "핵심 개념과 연결하기",
            "prompt": "발견한 것이 우리의 핵심 개념 '${conceptLens}'과 어떻게 연결되나요?",
            "answerSpace": "medium",
            "lines": 3
          }
        ]
      },
      {
        "id": "section-organize",
        "sectionNumber": 4,
        "title": "📊 조직 및 정리하기 (Organize)",
        "stage": "organize",
        "periods": "${lesson.stages?.organize?.periods || '5-6차시'}",
        "phase": "개념연결",
        "stageColor": "#8B5CF6",
        "instructions": "발견한 내용을 분류하고 조직화해 봅시다.",
        "thinkingRoutine": "Compare and Contrast (교차비교차트)",
        "questions": [
          {
            "id": "q9",
            "number": 9,
            "type": "compare_contrast",
            "question": "교차비교차트로 정리하기",
            "tableHeaders": ["비교 항목", "공통점", "차이점"],
            "rows": 3,
            "notes": "조사한 사례들의 공통점과 차이점을 정리하세요."
          },
          {
            "id": "q10",
            "number": 10,
            "type": "graphic_organizer",
            "question": "개념 맵으로 연결하기",
            "organizerType": "concept_map",
            "centralConcept": "${conceptLens}",
            "branches": 4,
            "prompt": "핵심 개념을 중심으로 관련 내용을 연결해 봅시다."
          },
          {
            "id": "q11",
            "number": 11,
            "type": "pattern_summary",
            "question": "패턴 정리하기",
            "prompts": [
              "모든 사례에서 공통으로 나타나는 것:",
              "이 패턴이 의미하는 것:",
              "이것이 중요한 이유:"
            ],
            "answerSpace": "medium",
            "lines": 2
          }
        ]
      },
      {
        "id": "section-generalize",
        "sectionNumber": 5,
        "title": "💡 일반화하기 (Generalize)",
        "stage": "generalize",
        "periods": "${lesson.stages?.generalize?.periods || '7차시'}",
        "phase": "개념전이",
        "stageColor": "#EC4899",
        "instructions": "발견한 패턴에서 빅 아이디어(일반화)를 도출해 봅시다.",
        "thinkingRoutine": "Headlines (헤드라인)",
        "questions": [
          {
            "id": "q12",
            "number": 12,
            "type": "headlines",
            "question": "헤드라인 만들기",
            "prompt": "오늘 발견한 가장 중요한 아이디어를 신문 헤드라인처럼 한 문장으로 표현해 봅시다.",
            "answerSpace": "medium",
            "lines": 2
          },
          {
            "id": "q13",
            "number": 13,
            "type": "generalization",
            "question": "빅 아이디어(일반화) 작성하기",
            "starter": "\"___은/는 ___하기 때문에 ___하다.\"",
            "prompts": [
              "나의 일반화 문장:",
              "이것이 다른 상황에서도 적용되는 이유:"
            ],
            "answerSpace": "medium",
            "lines": 3
          },
          {
            "id": "q14",
            "number": 14,
            "type": "class_big_idea",
            "question": "우리 반의 빅 아이디어",
            "prompt": "토론을 통해 합의한 우리 반의 빅 아이디어를 적어봅시다.",
            "answerSpace": "large",
            "lines": 3,
            "highlight": true
          }
        ]
      },
      {
        "id": "section-transfer",
        "sectionNumber": 6,
        "title": "🚀 전이하기 (Transfer)",
        "stage": "transfer",
        "periods": "${lesson.stages?.transfer?.periods || '8-9차시'}",
        "phase": "개념전이",
        "stageColor": "#06B6D4",
        "instructions": "배운 개념을 새로운 상황에 적용해 봅시다.",
        "thinkingRoutine": "What If...? (만약...이라면?)",
        "questions": [
          {
            "id": "q15",
            "number": 15,
            "type": "grasps_task",
            "question": "수행과제 이해하기",
            "sections": [
              "🎯 목표(G): 내가 해야 할 것",
              "🎭 역할(R): 내가 맡은 역할",
              "👥 청중(A): 누구에게 보여줄 것인지",
              "📍 상황(S): 어떤 상황인지",
              "📦 산출물(P): 무엇을 만들 것인지",
              "📋 기준(S): 평가 기준"
            ],
            "answerSpace": "medium"
          },
          {
            "id": "q16",
            "number": 16,
            "type": "application_plan",
            "question": "수행과제 계획하기",
            "prompts": [
              "우리의 빅 아이디어를 어떻게 적용할 것인가?",
              "필요한 자료/준비물:",
              "역할 분담:",
              "일정 계획:"
            ],
            "answerSpace": "large",
            "lines": 2
          },
          {
            "id": "q17",
            "number": 17,
            "type": "what_if",
            "question": "만약...이라면?",
            "prompt": "배운 개념이 적용될 수 있는 다른 상황을 생각해 봅시다. '만약 ___라면, ___할 것이다. 왜냐하면 ___이기 때문이다.'",
            "answerSpace": "medium",
            "lines": 3
          }
        ]
      },
      {
        "id": "section-reflect",
        "sectionNumber": 7,
        "title": "🪞 성찰하기 (Reflect)",
        "stage": "reflect",
        "periods": "${lesson.stages?.reflect?.periods || '10차시'}",
        "phase": "개념성찰",
        "stageColor": "#6366F1",
        "instructions": "단원 학습을 돌아보며 성찰해 봅시다.",
        "thinkingRoutine": "I Used to Think... Now I Think... (예전에는-지금은)",
        "questions": [
          {
            "id": "q18",
            "number": 18,
            "type": "thinking_change",
            "question": "나의 생각 변화",
            "prompts": [
              "예전에는 ___ 라고 생각했어요.",
              "지금은 ___ 라고 생각해요.",
              "내 생각이 바뀐 이유는 ___"
            ],
            "answerSpace": "medium",
            "lines": 2
          },
          {
            "id": "q19",
            "number": 19,
            "type": "3_2_1_bridge",
            "question": "3-2-1 브릿지",
            "prompts": [
              "3가지 새롭게 알게 된 것:",
              "2가지 인상 깊었던 것:",
              "1가지 더 궁금한 것:"
            ],
            "answerSpace": "medium",
            "lines": 2
          },
          {
            "id": "q20",
            "number": 20,
            "type": "self_assessment",
            "question": "자기평가",
            "criteria": [
              "핵심 개념을 이해했나요?",
              "탐구 활동에 적극적으로 참여했나요?",
              "빅 아이디어를 발견했나요?",
              "새로운 상황에 적용할 수 있나요?",
              "친구들과 협력했나요?"
            ],
            "scale": ["⭐⭐⭐ 잘함", "⭐⭐ 보통", "⭐ 노력 필요"]
          },
          {
            "id": "q21",
            "number": 21,
            "type": "final_reflection",
            "question": "단원을 마치며",
            "prompts": [
              "이 단원에서 가장 중요하게 배운 것:",
              "실생활에서 활용할 수 있는 점:",
              "다음에 더 탐구하고 싶은 것:"
            ],
            "answerSpace": "medium",
            "lines": 2
          }
        ]
      }
    ],
    "footer": {
      "teacherComment": true,
      "teacherCommentPrompt": "선생님의 피드백",
      "parentSignature": false,
      "portfolioNote": "이 학습지는 포트폴리오로 보관됩니다."
    }
  },
  "teacherGuide": {
    "overview": "이 학습지는 ${totalPeriods}차시에 걸친 전북형 CBI 7단계 탐구를 지원합니다.",
    "stageGuidance": [
      {"stage": "engage", "tip": "학생들의 사전 경험과 지식을 파악하고, 오개념이 있어도 이 단계에서는 수정하지 않습니다."},
      {"stage": "focus", "tip": "프레이어 모델을 통해 학생들이 자신의 언어로 개념을 정의하도록 유도합니다."},
      {"stage": "investigate", "tip": "직소 활동으로 모둠별 다른 사례를 탐구하게 하여 다양한 관점을 확보합니다."},
      {"stage": "organize", "tip": "그래픽 조직자를 활용하여 인지 부하를 줄이고 패턴을 발견하도록 합니다."},
      {"stage": "generalize", "tip": "학생들이 직접 일반화를 도출하도록 기다리고, 다양한 표현을 격려합니다."},
      {"stage": "transfer", "tip": "GRASPS 과제를 통해 실생활 맥락에서 개념을 적용하게 합니다."},
      {"stage": "reflect", "tip": "'예전에는-지금은' 루틴으로 메타인지를 발달시킵니다."}
    ],
    "sampleAnswers": [
      {"questionNumber": 4, "answer": "프레이어 모델 예시 답안"},
      {"questionNumber": 13, "answer": "일반화 예시 답안: '~은/는 ~하기 때문에 ~하다'"},
      {"questionNumber": 14, "answer": "반 전체 빅 아이디어 예시"}
    ],
    "scoringRubric": [
      {"section": "조사하기", "maxPoints": 10, "criteria": "정보 수집의 정확성, 다양성, 핵심 개념과의 연결"},
      {"section": "일반화하기", "maxPoints": 10, "criteria": "패턴 발견, 일반화 문장의 전이 가능성"},
      {"section": "전이하기", "maxPoints": 10, "criteria": "개념 적용의 적절성, 창의성"}
    ],
    "commonMisconceptions": [
      "예상되는 오개념 1",
      "예상되는 오개념 2",
      "오개념에 대한 지도 방법"
    ],
    "differentiationNotes": {
      "support": [
        "핵심 질문 카드 제공",
        "추가 예시 제공",
        "1:1 스캐폴딩"
      ],
      "extension": [
        "추가 사례 탐구",
        "심화 탐구 질문 제공",
        "동료 멘토 역할 부여"
      ]
    }
  }
}

## 학습지 설계 원칙

1. **단원 전체 구성**: ${totalPeriods}차시 전체를 커버하는 학습지 구성
2. **7단계 연계**: 각 섹션이 CBI 7단계와 명확히 연결
3. **차시 정보 표시**: 각 단계별 해당 차시를 명확히 표시
4. **단계별 색상**: 7단계 각각의 고유 색상을 활용하여 시각적 구분
5. **${grade}학년 수준**: 적절한 어휘와 문항 난이도
6. **다양한 문항 유형**: 단답형, 서술형, 표, 그래픽 조직자 등 혼합
7. **사고루틴 통합**: 각 단계에 맞는 사고루틴 활동 포함
8. **사고 촉진**: 열린 질문과 성찰 질문 포함
9. **충분한 공간**: 학생들이 생각을 기록할 충분한 공간
10. **메타인지 강조**: 처음 생각과 나중 생각 비교를 통한 성찰

반드시 유효한 JSON 형식으로만 응답하세요.`;
};
