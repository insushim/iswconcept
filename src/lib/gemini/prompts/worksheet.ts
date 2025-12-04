import type { GeneratedLesson } from '@/types/lesson';

export const generateWorksheetPrompt = (lesson: GeneratedLesson, grade: number, subject: string): string => {
  return `수업용 학습지를 생성합니다.

## 수업 정보

${JSON.stringify(lesson.lessonOverview, null, 2)}

## 학년: ${grade}학년
## 과목: ${subject}

## 학습지 생성 요청

다음 JSON 형식으로 학습지 내용을 생성하세요.
JSON 외의 다른 텍스트는 포함하지 마세요.

{
  "worksheet": {
    "header": {
      "title": "탐구 학습지",
      "subtitle": "${lesson.lessonOverview.title}",
      "subject": "${subject}",
      "grade": "${grade}학년",
      "studentNameField": true,
      "dateField": true
    },
    "sections": [
      {
        "id": "section-1",
        "sectionNumber": 1,
        "title": "관계맺기",
        "stage": "engage",
        "instructions": "다음 자료를 보고 생각을 적어봅시다.",
        "questions": [
          {
            "id": "q1",
            "number": 1,
            "type": "short_answer",
            "question": "무엇이 보이나요?",
            "answerSpace": "medium",
            "lines": 2
          },
          {
            "id": "q2",
            "number": 2,
            "type": "short_answer",
            "question": "무엇이 떠오르나요?",
            "answerSpace": "medium",
            "lines": 2
          },
          {
            "id": "q3",
            "number": 3,
            "type": "short_answer",
            "question": "무엇이 궁금한가요?",
            "answerSpace": "medium",
            "lines": 2
          }
        ]
      },
      {
        "id": "section-2",
        "sectionNumber": 2,
        "title": "집중하기",
        "stage": "focus",
        "instructions": "핵심 개념을 정리해 봅시다.",
        "questions": [
          {
            "id": "q4",
            "number": 4,
            "type": "fill_blank",
            "question": "오늘 배울 핵심 개념: _____은(는) _____을(를) 의미합니다.",
            "answerSpace": "small"
          },
          {
            "id": "q5",
            "number": 5,
            "type": "short_answer",
            "question": "오늘의 탐구 질문에 대한 나의 첫 생각:",
            "answerSpace": "medium",
            "lines": 3
          }
        ]
      },
      {
        "id": "section-3",
        "sectionNumber": 3,
        "title": "조사하기",
        "stage": "investigate",
        "instructions": "탐구 활동 결과를 기록합니다.",
        "questions": [
          {
            "id": "q6",
            "number": 6,
            "type": "table",
            "question": "조사 내용을 표에 정리하세요.",
            "tableHeaders": ["항목", "관찰/발견 내용", "특징"],
            "rows": 4
          },
          {
            "id": "q7",
            "number": 7,
            "type": "long_answer",
            "question": "조사하면서 발견한 패턴이나 공통점은 무엇인가요?",
            "answerSpace": "large",
            "lines": 4
          }
        ]
      },
      {
        "id": "section-4",
        "sectionNumber": 4,
        "title": "조직 및 정리하기",
        "stage": "organize",
        "instructions": "배운 내용을 정리합니다.",
        "questions": [
          {
            "id": "q8",
            "number": 8,
            "type": "graphic_organizer",
            "question": "핵심 개념을 중심으로 관련 내용을 정리하세요.",
            "organizerType": "concept_map",
            "centralConcept": "${lesson.lessonOverview.coreConcepts[0] || '핵심 개념'}",
            "branches": 4
          }
        ]
      },
      {
        "id": "section-5",
        "sectionNumber": 5,
        "title": "일반화하기",
        "stage": "generalize",
        "instructions": "우리가 발견한 아이디어를 정리합니다.",
        "questions": [
          {
            "id": "q9",
            "number": 9,
            "type": "sentence_completion",
            "question": "오늘 탐구를 통해 발견한 중요한 아이디어:",
            "starter": "\"_____은/는 _____하기 때문에 _____하다.\"",
            "answerSpace": "medium",
            "lines": 3
          }
        ]
      },
      {
        "id": "section-6",
        "sectionNumber": 6,
        "title": "전이하기",
        "stage": "transfer",
        "instructions": "배운 내용을 새로운 상황에 적용해 봅시다.",
        "questions": [
          {
            "id": "q10",
            "number": 10,
            "type": "long_answer",
            "question": "오늘 배운 개념이 적용될 수 있는 다른 상황을 생각해보고 설명해 봅시다.",
            "answerSpace": "large",
            "lines": 5
          }
        ]
      },
      {
        "id": "section-7",
        "sectionNumber": 7,
        "title": "성찰하기",
        "stage": "reflect",
        "instructions": "오늘 학습을 돌아봅니다.",
        "questions": [
          {
            "id": "q11",
            "number": 11,
            "type": "reflection",
            "question": "학습 성찰",
            "prompts": [
              "예전에는 ___라고 생각했어요.",
              "지금은 ___라고 생각해요.",
              "더 알고 싶은 것: ___"
            ]
          },
          {
            "id": "q12",
            "number": 12,
            "type": "self_assessment",
            "question": "오늘 학습 자기 평가",
            "criteria": [
              "핵심 개념을 이해했나요?",
              "탐구 활동에 적극적으로 참여했나요?",
              "새로운 아이디어를 발견했나요?"
            ],
            "scale": ["매우 잘함", "잘함", "보통", "노력 필요"]
          }
        ]
      }
    ],
    "footer": {
      "teacherComment": true,
      "parentSignature": false
    }
  },
  "teacherGuide": {
    "answers": [
      {"questionNumber": 4, "answer": "예시 답안"},
      {"questionNumber": 9, "answer": "일반화 예시 답안"}
    ],
    "scoringRubric": [
      {"section": "조사하기", "maxPoints": 10, "criteria": "정보 수집의 정확성과 다양성"},
      {"section": "일반화하기", "maxPoints": 10, "criteria": "개념적 이해와 일반화 능력"}
    ],
    "commonMisconceptions": ["예상되는 오개념 1", "예상되는 오개념 2"],
    "differentiationNotes": {
      "support": "지원이 필요한 학생을 위한 힌트나 추가 설명",
      "extension": "심화 활동이나 추가 질문"
    }
  }
}

## 학습지 설계 원칙

1. **탐구 단계 연계**: 각 섹션이 CBI 7단계와 연결
2. **${grade}학년 수준**: 적절한 어휘와 문항 난이도
3. **다양한 문항 유형**: 단답형, 서술형, 그래픽 조직자 등 혼합
4. **사고 촉진**: 열린 질문과 성찰 질문 포함
5. **충분한 공간**: 학생들이 생각을 기록할 충분한 공간

반드시 유효한 JSON 형식으로만 응답하세요.`;
};
