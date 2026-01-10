import type { GeneratedLesson } from '@/types/lesson';

// 사고 루틴별 학습지 템플릿
const THINKING_ROUTINE_TEMPLATES = {
  'See-Think-Wonder': {
    sections: ['보이는 것', '생각나는 것', '궁금한 것'],
    prompts: ['이 자료에서 무엇이 보이나요?', '무엇이 생각나나요?', '더 알고 싶은 것은 무엇인가요?']
  },
  'Think-Pair-Share': {
    sections: ['나의 생각', '짝과 나눈 생각', '우리의 생각'],
    prompts: ['먼저 혼자 생각해 보세요.', '짝과 생각을 나눠보세요.', '함께 정리해 보세요.']
  },
  'Frayer Model': {
    sections: ['정의', '특징', '예', '비예'],
    prompts: ['이것은 무엇인가요?', '어떤 특징이 있나요?', '예시를 찾아보세요.', '예시가 아닌 것은?']
  },
  'Compare & Contrast': {
    sections: ['A의 특징', 'A와 B의 공통점', 'B의 특징'],
    prompts: ['A는 어떤 특징이 있나요?', '둘의 공통점은?', 'B는 어떤 특징이 있나요?']
  },
  'Headlines': {
    sections: ['핵심 아이디어', '한 문장 요약', '선택 이유'],
    prompts: ['가장 중요한 것은?', '한 문장으로 정리하면?', '왜 그렇게 생각하나요?']
  },
  'I Used to Think... Now I Think...': {
    sections: ['예전에는', '지금은', '변화 이유'],
    prompts: ['예전에는 ~라고 생각했어요.', '지금은 ~라고 생각해요.', '왜 생각이 바뀌었나요?']
  },
  'Step Inside': {
    sections: ['선택한 관점', '그 입장에서 보면', '새로운 통찰'],
    prompts: ['누구의 입장에서 생각해 볼까요?', '그 사람은 어떻게 느낄까요?', '새롭게 알게 된 것은?']
  },
  'What If...?': {
    sections: ['가정 상황', '예상 결과', '이유'],
    prompts: ['만약 ~라면?', '어떤 일이 일어날까요?', '왜 그렇게 생각하나요?']
  },
  '4Cs': {
    sections: ['Connections (연결)', 'Challenges (도전)', 'Concepts (개념)', 'Changes (변화)'],
    prompts: ['내 경험과 어떻게 연결되나요?', '어려운 점은 무엇인가요?', '핵심 개념은?', '무엇이 바뀌었나요?']
  }
};

// 협동학습 구조별 활동지 안내
const KAGAN_ACTIVITY_GUIDES = {
  'Round Robin': '모둠원들이 돌아가며 한 사람씩 자신의 생각을 말합니다.',
  'Think-Pair-Share': '① 혼자 생각 → ② 짝과 공유 → ③ 전체 발표',
  'Numbered Heads Together': '모둠원에게 번호를 정하고, 함께 토의한 후 불린 번호가 발표합니다.',
  'Jigsaw': '각자 맡은 부분을 조사한 후, 모둠에서 전문가로서 설명합니다.',
  'Gallery Walk': '모둠 결과물을 전시하고, 돌아다니며 감상하고 피드백을 남깁니다.',
  'Four Corners': '네 가지 선택지 중 자신의 입장을 정하고 해당 코너로 이동합니다.'
};

// 탐구질문 유형별 프롬프트
const INQUIRY_QUESTION_TYPES = {
  factual: {
    prefix: '(사)',
    description: '사실적 질문 - 정답이 있는 확인 질문',
    starters: ['~은/는 무엇인가요?', '~은/는 어디에 있나요?', '~은/는 언제 일어났나요?', '~의 특징은?']
  },
  conceptual: {
    prefix: '(개)',
    description: '개념적 질문 - 왜, 어떻게 관계를 묻는 질문',
    starters: ['왜 ~할까요?', '어떻게 ~와 ~가 관련될까요?', '~의 원인은 무엇일까요?', '~의 영향은?']
  },
  debatable: {
    prefix: '(논)',
    description: '논쟁적 질문 - 가치 판단이 필요한 질문',
    starters: ['~해야 할까요?', '~이 옳을까요?', '~이 더 좋을까요?', '~을 어떻게 해결해야 할까요?']
  }
};

/**
 * 세계 최고 수준의 탐구 학습지 생성 프롬프트
 * 사고 루틴, 협동학습 구조, 탐구질문 3단계를 통합
 */
export const generateEnhancedWorksheetPrompt = (
  lesson: GeneratedLesson,
  grade: number,
  subject: string
): string => {
  const unitTitle = lesson.unitOverview?.unitName || lesson.lessonOverview.title;
  const conceptLens = lesson.unitOverview?.conceptLens || lesson.lessonOverview.coreConcepts?.[0] || '핵심 개념';
  const bigIdeas = lesson.lessonOverview?.bigIdeas || [];

  // 단계별 사고 루틴 추천
  const stageRoutines = {
    engage: lesson.stages?.engage?.thinkingRoutine?.name || 'See-Think-Wonder',
    focus: lesson.stages?.focus?.thinkingRoutine?.name || 'Frayer Model',
    investigate: lesson.stages?.investigate?.thinkingRoutine?.name || 'Think-Pair-Share',
    organize: lesson.stages?.organize?.thinkingRoutine?.name || 'Compare & Contrast',
    generalize: lesson.stages?.generalize?.thinkingRoutine?.name || 'Headlines',
    transfer: lesson.stages?.transfer?.thinkingRoutine?.name || 'What If...?',
    reflect: lesson.stages?.reflect?.thinkingRoutine?.name || 'I Used to Think... Now I Think...'
  };

  return `${grade}학년 ${subject} "${unitTitle}" 단원의 **세계 최고 수준 탐구 학습지**를 JSON으로 생성하세요.

═══════════════════════════════════════════════════════════════════════════════
📚 학습지 설계 원칙 (Harvard Project Zero + Kagan 구조 통합)
═══════════════════════════════════════════════════════════════════════════════

### 사고 루틴 라이브러리
${Object.entries(THINKING_ROUTINE_TEMPLATES).map(([name, template]) =>
  `**${name}**: ${template.sections.join(' → ')}`
).join('\n')}

### 협동학습 구조 활동 안내
${Object.entries(KAGAN_ACTIVITY_GUIDES).map(([name, guide]) =>
  `**${name}**: ${guide}`
).join('\n')}

### 탐구질문 3단계
${Object.entries(INQUIRY_QUESTION_TYPES).map(([type, info]) =>
  `**${info.prefix} ${info.description}**: ${info.starters.join(', ')}`
).join('\n')}

═══════════════════════════════════════════════════════════════════════════════
🎯 수업 정보
═══════════════════════════════════════════════════════════════════════════════

- **단원**: ${unitTitle}
- **개념 렌즈**: ${conceptLens}
- **일반화(빅 아이디어)**: ${bigIdeas.join(' / ')}
- **학년**: ${grade}학년
- **과목**: ${subject}

═══════════════════════════════════════════════════════════════════════════════
📝 단계별 권장 사고 루틴
═══════════════════════════════════════════════════════════════════════════════

- 관계맺기: ${stageRoutines.engage}
- 집중하기: ${stageRoutines.focus}
- 조사하기: ${stageRoutines.investigate}
- 조직하기: ${stageRoutines.organize}
- 일반화하기: ${stageRoutines.generalize}
- 전이하기: ${stageRoutines.transfer}
- 성찰하기: ${stageRoutines.reflect}

═══════════════════════════════════════════════════════════════════════════════
📄 JSON 출력 형식 (정확히 따르세요)
═══════════════════════════════════════════════════════════════════════════════

{
  "worksheet": {
    "title": "${unitTitle} 탐구 학습지",
    "subtitle": "개념 렌즈: ${conceptLens}",
    "grade": "${grade}학년",
    "subject": "${subject}",
    "conceptLens": "${conceptLens}",
    "bigIdea": "학생이 도달해야 할 일반화 문장 (학생 생활 연결)",
    "stages": [
      {
        "stage": "engage",
        "name": "1단계: 관계맺기 🔍",
        "thinkingRoutine": "${stageRoutines.engage}",
        "kaganStructure": "Think-Pair-Share",
        "icon": "🔍",
        "instruction": "이 단계에서 학생들에게 주는 안내 문구",
        "questions": [
          {
            "num": 1,
            "type": "observation",
            "text": "See-Think-Wonder 또는 적절한 사고루틴에 맞는 질문",
            "space": "medium",
            "hint": "학생을 위한 힌트"
          },
          {
            "num": 2,
            "type": "connection",
            "text": "내 경험과 연결하는 질문",
            "space": "medium",
            "hint": "힌트"
          }
        ]
      },
      {
        "stage": "focus",
        "name": "2단계: 집중하기 🎯",
        "thinkingRoutine": "${stageRoutines.focus}",
        "kaganStructure": "Round Robin",
        "icon": "🎯",
        "instruction": "핵심 개념을 탐색하는 안내",
        "frayerModel": {
          "concept": "${conceptLens}",
          "definition": "",
          "characteristics": "",
          "examples": "",
          "nonExamples": ""
        },
        "questions": [
          {
            "num": 3,
            "type": "factual",
            "prefix": "(사)",
            "text": "사실적 질문 - 개념의 정의나 특징을 묻는 질문",
            "space": "medium",
            "hint": "힌트"
          },
          {
            "num": 4,
            "type": "conceptual",
            "prefix": "(개)",
            "text": "개념적 질문 - 왜, 어떻게 관계를 묻는 질문",
            "space": "medium",
            "hint": "힌트"
          }
        ]
      },
      {
        "stage": "investigate",
        "name": "3단계: 조사하기 🔬",
        "thinkingRoutine": "${stageRoutines.investigate}",
        "kaganStructure": "Jigsaw",
        "icon": "🔬",
        "instruction": "모둠별로 조사하고 발견하는 안내",
        "investigationTable": {
          "headers": ["조사 항목", "발견한 내용", "의미/중요성"],
          "rows": 3
        },
        "questions": [
          {
            "num": 5,
            "type": "investigation",
            "text": "조사해서 알아낼 내용 관련 질문",
            "space": "large",
            "hint": "힌트"
          },
          {
            "num": 6,
            "type": "analysis",
            "text": "발견한 것을 분석하는 질문",
            "space": "large",
            "hint": "힌트"
          }
        ]
      },
      {
        "stage": "organize",
        "name": "4단계: 조직하기 📊",
        "thinkingRoutine": "${stageRoutines.organize}",
        "kaganStructure": "Gallery Walk",
        "icon": "📊",
        "instruction": "정보를 정리하고 패턴을 찾는 안내",
        "graphicOrganizer": {
          "type": "compare_contrast",
          "headers": ["공통점", "차이점", "패턴/규칙"],
          "description": "비교대상을 정리하는 그래픽 오거나이저"
        },
        "questions": [
          {
            "num": 7,
            "type": "pattern",
            "text": "패턴이나 공통점을 찾는 질문",
            "space": "medium",
            "hint": "힌트"
          },
          {
            "num": 8,
            "type": "relationship",
            "text": "관계를 정리하는 질문",
            "space": "medium",
            "hint": "힌트"
          }
        ]
      },
      {
        "stage": "generalize",
        "name": "5단계: 일반화하기 💡",
        "thinkingRoutine": "${stageRoutines.generalize}",
        "kaganStructure": "Numbered Heads Together",
        "icon": "💡",
        "instruction": "발견한 것에서 큰 아이디어를 도출하는 안내",
        "headlinesTemplate": {
          "prompt": "오늘 발견한 가장 중요한 아이디어를 한 문장으로 정리해 보세요.",
          "example": "예시: ~은/는 ~이다. 왜냐하면 ~이기 때문이다."
        },
        "questions": [
          {
            "num": 9,
            "type": "generalization",
            "prefix": "(개)",
            "text": "개념적 이해를 정리하는 질문 (왜, 어떻게)",
            "space": "large",
            "hint": "여러 사례에서 공통으로 발견한 것을 생각해 보세요."
          },
          {
            "num": 10,
            "type": "big_idea",
            "text": "나만의 일반화 문장을 적어보세요: '_____은/는 _____이다. 왜냐하면 _____이기 때문이다.'",
            "space": "large",
            "hint": "학교, 가정, 사회에서 모두 적용되는 원리를 생각해 보세요."
          }
        ]
      },
      {
        "stage": "transfer",
        "name": "6단계: 전이하기 🔄",
        "thinkingRoutine": "${stageRoutines.transfer}",
        "kaganStructure": "Four Corners",
        "icon": "🔄",
        "instruction": "배운 것을 새로운 상황에 적용하는 안내",
        "whatIfTemplate": {
          "scenario": "새로운 상황 설정",
          "questions": ["만약 ~라면?", "어떻게 적용할 수 있을까?"]
        },
        "questions": [
          {
            "num": 11,
            "type": "application",
            "prefix": "(논)",
            "text": "배운 것을 새로운 상황에 적용하는 논쟁적 질문",
            "space": "large",
            "hint": "정답이 하나가 아니에요. 여러분의 생각을 자유롭게 써보세요."
          },
          {
            "num": 12,
            "type": "real_world",
            "text": "내 일상/우리 반/우리 가족에게 어떻게 적용할 수 있을까요?",
            "space": "large",
            "hint": "구체적인 상황을 떠올려 보세요."
          }
        ]
      },
      {
        "stage": "reflect",
        "name": "7단계: 성찰하기 🪞",
        "thinkingRoutine": "${stageRoutines.reflect}",
        "icon": "🪞",
        "instruction": "배움을 되돌아보고 성장을 확인하는 안내",
        "reflectionTemplate": {
          "usedToThink": "예전에는 ___________________라고 생각했어요.",
          "nowThink": "지금은 ___________________라고 생각해요.",
          "because": "왜냐하면 ___________________이기 때문이에요."
        },
        "questions": [
          {
            "num": 13,
            "type": "metacognition",
            "text": "이 단원을 공부하면서 나의 생각이 어떻게 바뀌었나요?",
            "space": "large",
            "hint": "'예전에는... 지금은...' 형식으로 적어보세요."
          },
          {
            "num": 14,
            "type": "self_assessment",
            "text": "오늘 배운 것 중 가장 기억에 남는 것은 무엇인가요? 왜 그런가요?",
            "space": "medium",
            "hint": "솔직하게 적어보세요."
          },
          {
            "num": 15,
            "type": "future_inquiry",
            "text": "더 알고 싶은 것이나 궁금한 점은 무엇인가요?",
            "space": "medium",
            "hint": "탐구는 계속됩니다!"
          }
        ]
      }
    ],
    "selfAssessment": {
      "title": "나의 탐구 활동 자기평가",
      "criteria": [
        {
          "item": "개념 이해",
          "description": "핵심 개념(${conceptLens})을 이해했나요?",
          "levels": ["😊 잘 이해했어요", "🙂 대체로 이해했어요", "😐 조금 어려웠어요"]
        },
        {
          "item": "탐구 참여",
          "description": "탐구 활동에 적극적으로 참여했나요?",
          "levels": ["😊 적극 참여", "🙂 보통", "😐 더 노력할게요"]
        },
        {
          "item": "협력 학습",
          "description": "친구들과 잘 협력했나요?",
          "levels": ["😊 잘 협력", "🙂 보통", "😐 더 노력할게요"]
        },
        {
          "item": "일반화",
          "description": "나만의 일반화 문장을 만들 수 있었나요?",
          "levels": ["😊 잘 만들었어요", "🙂 어느 정도", "😐 어려웠어요"]
        }
      ]
    },
    "footer": {
      "encouragement": "훌륭해요! 여러분은 진정한 탐구자입니다! 🌟",
      "nextStep": "다음 시간에도 함께 탐구해요!"
    }
  }
}

═══════════════════════════════════════════════════════════════════════════════
✨ 핵심 작성 원칙
═══════════════════════════════════════════════════════════════════════════════

1. **${grade}학년 수준에 맞는 쉬운 어휘 사용**
2. **모든 질문은 "${unitTitle}" 단원과 "${conceptLens}" 개념에 맞게 구체적으로**
3. **탐구질문 3단계(사/개/논) 명시**
4. **사고 루틴 템플릿 충실히 반영**
5. **협동학습 구조 안내 포함**
6. **학생 생활과 연결되는 실제적 질문**
7. **자기평가 체크리스트 포함**

JSON만 출력하세요. 다른 텍스트는 포함하지 마세요.`;
};

export default generateEnhancedWorksheetPrompt;
