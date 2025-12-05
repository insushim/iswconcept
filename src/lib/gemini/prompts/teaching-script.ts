import type { GeneratedLesson } from '@/types/lesson';

export const generateTeachingScriptPrompt = (lesson: GeneratedLesson, grade: number): string => {
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || '';
  const totalPeriods = lesson.unitOverview?.totalPeriods || 10;

  return `${grade}학년 "${unitTitle}" 단원(${totalPeriods}차시)의 수업 대본을 JSON으로 생성하세요.
개념 렌즈: ${conceptLens}

반드시 아래 JSON 형식을 정확히 따르세요. JSON만 출력하세요.

{
  "lessonScript": {
    "stages": [
      {
        "stageName": "1단계: 관계맺기 (Engage) - 1~2차시",
        "activities": [
          {
            "title": "인사 및 동기유발",
            "teacherScript": "여러분 안녕하세요! 오늘부터 새로운 단원을 시작해요. (자료를 보여주며) 이것을 보고 무엇이 떠오르나요? 자유롭게 이야기해 봅시다.",
            "expectedResponse": "학생들의 다양한 반응과 생각"
          },
          {
            "title": "See-Think-Wonder 활동",
            "teacherScript": "자, 이 자료를 자세히 살펴봅시다. 무엇이 보이나요? (학생 발표 후) 그것을 보고 어떤 생각이 드나요? 궁금한 점은 무엇인가요?",
            "expectedResponse": "보이는 것, 생각나는 것, 궁금한 것에 대한 학생 발표"
          },
          {
            "title": "경험 연결하기",
            "teacherScript": "혹시 이와 비슷한 경험을 해본 적 있나요? 여러분의 경험을 친구들과 나눠봅시다.",
            "expectedResponse": "학생들의 개인 경험 공유"
          }
        ]
      },
      {
        "stageName": "2단계: 집중하기 (Focus) - 3차시",
        "activities": [
          {
            "title": "핵심 개념 소개",
            "teacherScript": "오늘 우리가 탐구할 핵심 개념은 '${conceptLens}'입니다. 이 개념이 무엇을 의미하는지 함께 알아봅시다.",
            "expectedResponse": "개념에 대한 학생들의 초기 생각"
          },
          {
            "title": "프레이어 모델 활동",
            "teacherScript": "프레이어 모델을 사용해서 이 개념을 분석해 봅시다. 먼저 정의를 생각해 볼까요? 이 개념의 특징은 무엇일까요? 예시와 예시가 아닌 것도 찾아봅시다.",
            "expectedResponse": "정의, 특징, 예시, 비예시에 대한 학생 발표"
          },
          {
            "title": "탐구 질문 설정",
            "teacherScript": "이 개념에 대해 더 알고 싶은 것은 무엇인가요? 우리가 탐구할 질문을 함께 만들어 봅시다.",
            "expectedResponse": "학생들이 제안하는 탐구 질문들"
          }
        ]
      },
      {
        "stageName": "3단계: 조사하기 (Investigate) - 4~5차시",
        "activities": [
          {
            "title": "탐구 활동 안내",
            "teacherScript": "오늘은 모둠별로 탐구 활동을 해볼 거예요. 각 모둠은 주어진 자료를 분석하고, 발견한 내용을 기록해 주세요. 궁금한 점이 있으면 언제든 질문하세요.",
            "expectedResponse": "활동 방법에 대한 질문, 모둠 구성"
          },
          {
            "title": "모둠별 탐구 진행",
            "teacherScript": "(순회 지도하며) 어떤 것을 발견했나요? 왜 그렇게 생각했나요? 다른 방법으로도 생각해 볼 수 있을까요? 모둠 친구들과 의견을 나눠보세요.",
            "expectedResponse": "탐구 과정에서의 발견과 질문들"
          },
          {
            "title": "탐구 결과 공유",
            "teacherScript": "이제 각 모둠에서 발견한 내용을 발표해 봅시다. 다른 모둠의 발표를 들으면서 새롭게 알게 된 점이나 궁금한 점을 메모해 두세요.",
            "expectedResponse": "모둠별 발표와 질의응답"
          }
        ]
      },
      {
        "stageName": "4단계: 조직하기 (Organize) - 6차시",
        "activities": [
          {
            "title": "정보 분류하기",
            "teacherScript": "지금까지 탐구한 내용을 정리해 봅시다. 공통점은 무엇인가요? 차이점은 무엇인가요? 그래픽 조직자를 사용해서 분류해 봅시다.",
            "expectedResponse": "공통점과 차이점 분류, 패턴 발견"
          },
          {
            "title": "패턴 찾기",
            "teacherScript": "정리한 내용을 살펴보니 어떤 패턴이나 규칙이 보이나요? 왜 이런 패턴이 나타났을까요?",
            "expectedResponse": "발견한 패턴과 그 이유에 대한 발표"
          },
          {
            "title": "갤러리 워크",
            "teacherScript": "각 모둠의 정리 결과를 돌아보면서 좋은 점이나 새롭게 알게 된 점에 포스트잇을 붙여주세요.",
            "expectedResponse": "다른 모둠 결과물에 대한 피드백"
          }
        ]
      },
      {
        "stageName": "5단계: 일반화하기 (Generalize) - 7차시",
        "activities": [
          {
            "title": "공통 원리 발견",
            "teacherScript": "우리가 탐구한 내용에서 공통적으로 발견한 것은 무엇인가요? 이것을 한 문장으로 정리해 볼까요?",
            "expectedResponse": "학생들이 도출한 일반화 문장들"
          },
          {
            "title": "빅 아이디어 도출",
            "teacherScript": "여러분이 발견한 내용을 종합하면, 우리는 이런 중요한 깨달음을 얻을 수 있어요. 이것이 우리의 '빅 아이디어'입니다. 이 발견이 다른 상황에서도 적용될까요?",
            "expectedResponse": "빅 아이디어의 다른 상황 적용 가능성 토론"
          },
          {
            "title": "적용 가능성 탐색",
            "teacherScript": "이 빅 아이디어가 우리 일상생활이나 다른 과목에서는 어떻게 적용될 수 있을까요?",
            "expectedResponse": "다양한 적용 사례 제시"
          }
        ]
      },
      {
        "stageName": "6단계: 전이하기 (Transfer) - 8~9차시",
        "activities": [
          {
            "title": "수행과제 안내",
            "teacherScript": "이제 여러분이 배운 것을 활용해서 특별한 과제를 수행해 볼 거예요. (역할, 상황, 대상, 결과물 안내) 평가 기준표를 함께 살펴봅시다.",
            "expectedResponse": "과제에 대한 질문과 확인"
          },
          {
            "title": "수행과제 진행",
            "teacherScript": "(순회 지도하며) 진행 상황이 어떤가요? 어려운 점은 없나요? 우리가 발견한 빅 아이디어를 어떻게 적용하고 있나요?",
            "expectedResponse": "과제 수행 과정에서의 질문과 발견"
          },
          {
            "title": "결과물 발표",
            "teacherScript": "이제 여러분의 결과물을 발표해 봅시다. 발표를 들으면서 평가 기준표에 따라 피드백을 준비해 주세요.",
            "expectedResponse": "발표 및 동료 피드백"
          }
        ]
      },
      {
        "stageName": "7단계: 성찰하기 (Reflect) - 10차시",
        "activities": [
          {
            "title": "예전에는-지금은 활동",
            "teacherScript": "단원을 시작할 때 '${conceptLens}'에 대해 어떻게 생각했나요? 지금은 어떻게 생각이 바뀌었나요? '예전에는 ___라고 생각했는데, 지금은 ___라고 생각해요' 형식으로 적어봅시다.",
            "expectedResponse": "생각의 변화를 담은 성찰문"
          },
          {
            "title": "배움 정리",
            "teacherScript": "이번 단원에서 가장 중요하게 배운 것은 무엇인가요? 3-2-1 활동으로 정리해 봅시다. 3가지 배운 점, 2가지 흥미로웠던 점, 1가지 더 알고 싶은 점을 적어보세요.",
            "expectedResponse": "3-2-1 성찰 내용 공유"
          },
          {
            "title": "마무리",
            "teacherScript": "이번 단원에서 우리는 '${conceptLens}'를 탐구하며 중요한 빅 아이디어를 발견했어요. 여러분 모두 훌륭한 탐구자가 되었습니다. 배운 내용을 일상생활에서도 적용해 보세요. 수고했습니다!",
            "expectedResponse": "소감 나누기"
          }
        ]
      }
    ]
  }
}

위 템플릿의 모든 teacherScript와 expectedResponse를 "${unitTitle}" 단원의 실제 내용에 맞게 구체적으로 수정하세요.
- teacherScript는 교사가 실제로 수업에서 말하는 대사처럼 자연스럽게 작성
- expectedResponse는 학생들의 예상 반응을 구체적으로 작성
- ${grade}학년 수준에 맞는 쉬운 말투 사용
- 각 활동별로 충분한 내용이 담기도록 작성

JSON만 출력하세요.`;
};
