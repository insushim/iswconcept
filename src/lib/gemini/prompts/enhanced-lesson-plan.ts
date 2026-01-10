import type { LessonInput } from '@/types/lesson';
import { THINKING_ROUTINES } from '@/data/thinking-routines';
import { ASSESSMENT_STRATEGIES, RUBRIC_TEMPLATES } from '@/data/assessment-tools';
import { TEACHING_STRATEGIES, GRAPHIC_ORGANIZERS } from '@/data/teaching-strategies';
import { KEY_CONCEPTS } from '@/data/key-concepts';
import { GENERALIZATIONS } from '@/data/generalizations';
import { INQUIRY_QUESTIONS } from '@/data/inquiry-questions';
import {
  TRANSDISCIPLINARY_THEMES,
  GLOBAL_CONTEXTS,
  ATL_SKILLS,
  LEARNER_PROFILE
} from '@/data/ib-frameworks';
import {
  INTERNATIONAL_FRAMEWORKS,
  CONCEPT_BASED_MODELS,
  THINKING_FRAMEWORKS,
  MYP_RELATED_CONCEPTS,
  KOREA_2022_CORE_IDEAS,
  INTERNATIONAL_FRAMEWORKS_STATS
} from '@/data/international-frameworks';
import {
  LEARNING_THEORIES,
  INSTRUCTIONAL_MODELS,
  SUBJECT_SPECIFIC_FRAMEWORKS,
  PEDAGOGICAL_APPROACHES,
  COMPETENCY_FRAMEWORKS_21C,
  EXTENDED_THINKING_ROUTINES,
  HABITS_OF_MIND,
  SIX_THINKING_HATS,
  KAGAN_STRUCTURES,
  ROSENSHINE_PRINCIPLES,
  WILIAM_FORMATIVE_ASSESSMENT,
  C3_FRAMEWORK,
  SINGAPORE_MATH,
  NUMBER_TALKS,
  BALANCED_LITERACY,
  CURRICULUM_DESIGN_MODELS,
  UDL_FRAMEWORK,
  DIFFERENTIATED_INSTRUCTION,
  VISIBLE_LEARNING,
  THINKING_MAPS,
  BLENDED_LEARNING_MODELS,
  FLIPPED_LEARNING,
  GAMIFICATION_EDUCATION
} from '@/data/educational-theories';

// 차시 배분 계산 함수
function calculatePeriodDistribution(totalPeriods: number) {
  if (totalPeriods <= 4) {
    return { engage: 1, focus: 1, investigate: 1, organize: 1, generalize: 0, transfer: 0, reflect: 0 };
  }
  if (totalPeriods <= 6) {
    return { engage: 1, focus: 1, investigate: 1, organize: 1, generalize: 1, transfer: 1, reflect: 0 };
  }
  if (totalPeriods <= 8) {
    return { engage: 1, focus: 1, investigate: 2, organize: 1, generalize: 1, transfer: 1, reflect: 1 };
  }
  if (totalPeriods <= 10) {
    return { engage: 1, focus: 1, investigate: 2, organize: 2, generalize: 1, transfer: 2, reflect: 1 };
  }
  if (totalPeriods <= 12) {
    return { engage: 1, focus: 2, investigate: 3, organize: 2, generalize: 1, transfer: 2, reflect: 1 };
  }

  const engage = Math.max(1, Math.round(totalPeriods * 0.08));
  const focus = Math.max(1, Math.round(totalPeriods * 0.1));
  const investigate = Math.max(2, Math.round(totalPeriods * 0.25));
  const organize = Math.max(2, Math.round(totalPeriods * 0.18));
  const generalize = Math.max(1, Math.round(totalPeriods * 0.12));
  const transfer = Math.max(2, Math.round(totalPeriods * 0.17));
  const reflect = Math.max(1, Math.round(totalPeriods * 0.1));

  let sum = engage + focus + investigate + organize + generalize + transfer + reflect;
  const difference = totalPeriods - sum;

  return {
    engage, focus, investigate: investigate + difference, organize, generalize, transfer, reflect
  };
}

function calculatePeriodRange(startPeriod: number, count: number): string {
  if (count <= 0) return "";
  if (count === 1) return `${startPeriod}차시`;
  return `${startPeriod}-${startPeriod + count - 1}차시`;
}

// 데이터베이스에서 사고 루틴 정보 생성
function getThinkingRoutinesInfo(): string {
  const routinesByCategory: Record<string, typeof THINKING_ROUTINES> = {};

  THINKING_ROUTINES.forEach(routine => {
    if (!routinesByCategory[routine.category]) {
      routinesByCategory[routine.category] = [];
    }
    routinesByCategory[routine.category].push(routine);
  });

  const categoryNames: Record<string, string> = {
    'introducing_exploring': '도입 및 탐색',
    'synthesizing_organizing': '종합 및 조직',
    'digging_deeper': '심화 탐구',
    'understanding_perspectives': '관점 이해',
    'reasoning_evidence': '추론 및 증거',
    'capturing_core': '핵심 포착'
  };

  return Object.entries(routinesByCategory).map(([category, routines]) => {
    const categoryName = categoryNames[category] || category;
    const routineList = routines.map(r =>
      `  - ${r.name} (${r.nameKo}): ${r.steps.join(' → ')}`
    ).join('\n');
    return `**${categoryName}**:\n${routineList}`;
  }).join('\n\n');
}

// 데이터베이스에서 Kagan 구조 정보 생성
function getKaganStructuresInfo(): string {
  if (!KAGAN_STRUCTURES?.structures) return '';
  return KAGAN_STRUCTURES.structures.map(s =>
    `- ${s.name} (${s.nameKr}): ${s.purpose}\n  단계: ${s.steps.join(' → ')}`
  ).join('\n');
}

// 데이터베이스에서 6색 사고모자 정보 생성
function getSixThinkingHatsInfo(): string {
  if (!SIX_THINKING_HATS?.hats) return '';
  return SIX_THINKING_HATS.hats.map(h =>
    `- ${h.color} (${h.name}): ${h.focus} - "${h.questions[0]}"`
  ).join('\n');
}

// 데이터베이스에서 Rosenshine 원리 정보 생성
function getRosenshineInfo(): string {
  if (!ROSENSHINE_PRINCIPLES?.principles) return '';
  return ROSENSHINE_PRINCIPLES.principles.map((p, i) =>
    `${i + 1}. ${p.name}: ${p.description}`
  ).join('\n');
}

// 데이터베이스에서 Dylan Wiliam 형성평가 전략 정보 생성
function getWiliamInfo(): string {
  if (!WILIAM_FORMATIVE_ASSESSMENT?.fiveKeyStrategies) return '';
  return WILIAM_FORMATIVE_ASSESSMENT.fiveKeyStrategies.map((s) =>
    `${s.id}. ${s.name} (${s.nameEn})\n   기법: ${s.techniques.join(', ')}`
  ).join('\n');
}

// 데이터베이스에서 형성평가 전략 정보 생성
function getAssessmentStrategiesInfo(): string {
  const formative = ASSESSMENT_STRATEGIES.filter(s => s.type === 'formative');
  return formative.slice(0, 10).map(s =>
    `- ${s.name} (${s.nameEn}): ${s.description}`
  ).join('\n');
}

// 학습 이론 및 교수 모델 정보 생성
function getLearningTheoriesInfo(): string {
  return LEARNING_THEORIES.slice(0, 8).map(t =>
    `- ${t.name} (${t.theorist}, ${t.year}): ${t.keyPrinciples?.[0] || ''}`
  ).join('\n');
}

// 국제 교육 프레임워크 및 교수법 정보 생성
function getPedagogicalApproachesInfo(): string {
  return PEDAGOGICAL_APPROACHES.slice(0, 8).map(p =>
    `- ${p.name} (${p.nameEn}): ${p.keyPrinciples?.[0] || ''}`
  ).join('\n');
}

// 21세기 역량 프레임워크 정보 생성
function getCompetencyFrameworksInfo(): string {
  return COMPETENCY_FRAMEWORKS_21C.slice(0, 5).map(f =>
    `- ${f.name} (${f.organization}, ${f.year})`
  ).join('\n');
}

// ============================================
// 추가된 DB Helper 함수들
// ============================================

// 55개국 국제 교육 프레임워크 정보 생성
function getInternationalFrameworksInfo(): string {
  const topFrameworks = INTERNATIONAL_FRAMEWORKS.slice(0, 15);
  return topFrameworks.map(f =>
    `- ${f.country}: ${f.name} (${f.yearIntroduced})\n  핵심: ${f.keyElements.slice(0, 3).map(e => e.name).join(', ')}`
  ).join('\n');
}

// IB PYP 초학문적 주제 정보 생성
function getTransdisciplinaryThemesInfo(): string {
  return TRANSDISCIPLINARY_THEMES.map(t =>
    `- ${t.nameKo} (${t.name}): ${t.descriptionKo.slice(0, 80)}...`
  ).join('\n');
}

// IB MYP 글로벌 맥락 정보 생성
function getGlobalContextsInfo(): string {
  return GLOBAL_CONTEXTS.map(g =>
    `- ${g.nameKo} (${g.name}): ${g.descriptionKo.slice(0, 60)}...`
  ).join('\n');
}

// IB ATL 기능 정보 생성
function getATLSkillsInfo(): string {
  const categories: Record<string, typeof ATL_SKILLS> = {};
  ATL_SKILLS.forEach(skill => {
    if (!categories[skill.categoryKo]) categories[skill.categoryKo] = [];
    categories[skill.categoryKo].push(skill);
  });
  return Object.entries(categories).slice(0, 5).map(([cat, skills]) =>
    `**${cat}**: ${skills.slice(0, 3).map(s => s.skillKo).join(', ')}`
  ).join('\n');
}

// IB 학습자 상 정보 생성
function getLearnerProfileInfo(): string {
  return LEARNER_PROFILE.slice(0, 5).map(l =>
    `- ${l.nameKo} (${l.name}): ${l.descriptionKo.slice(0, 50)}...`
  ).join('\n');
}

// 핵심 개념 정보 생성
function getKeyConceptsInfo(): string {
  const concepts = KEY_CONCEPTS.slice(0, 12);
  return concepts.map(c =>
    `- ${c.name} (${c.nameEn}): ${c.definition.slice(0, 60)}...\n  탐구질문: "${c.guidingQuestions[0]}"`
  ).join('\n');
}

// MYP 관련 개념 정보 생성
function getMYPRelatedConceptsInfo(): string {
  const subjects: Record<string, typeof MYP_RELATED_CONCEPTS> = {};
  MYP_RELATED_CONCEPTS.forEach(c => {
    if (!subjects[c.subject]) subjects[c.subject] = [];
    subjects[c.subject].push(c);
  });
  return Object.entries(subjects).slice(0, 5).map(([subj, concepts]) =>
    `**${subj}**: ${concepts.slice(0, 4).map(c => `${c.nameEn}(${c.name})`).join(', ')}`
  ).join('\n');
}

// 한국 2022 교육과정 핵심 아이디어 정보 생성
function getKorea2022CoreIdeasInfo(): string {
  const subjects: Record<string, typeof KOREA_2022_CORE_IDEAS> = {};
  KOREA_2022_CORE_IDEAS.forEach(i => {
    if (!subjects[i.subject]) subjects[i.subject] = [];
    subjects[i.subject].push(i);
  });
  return Object.entries(subjects).slice(0, 5).map(([subj, ideas]) =>
    `**${subj}**: ${ideas.slice(0, 2).map(i => `[${i.domain}] ${i.coreIdea.slice(0, 40)}...`).join('; ')}`
  ).join('\n');
}

// 일반화 문장 정보 생성
function getGeneralizationsInfo(): string {
  return GENERALIZATIONS.slice(0, 10).map(g =>
    `- [${g.subject}] "${g.statement}"`
  ).join('\n');
}

// 탐구 질문 정보 생성
function getInquiryQuestionsInfo(): string {
  const byType: Record<string, typeof INQUIRY_QUESTIONS> = {};
  INQUIRY_QUESTIONS.forEach(q => {
    if (!byType[q.type]) byType[q.type] = [];
    byType[q.type].push(q);
  });
  return Object.entries(byType).map(([type, questions]) => {
    const typeNames: Record<string, string> = {
      'factual': '사실적',
      'conceptual': '개념적',
      'debatable': '논쟁적',
      'essential': '본질적'
    };
    return `**${typeNames[type] || type}**: ${questions.slice(0, 3).map(q => `"${q.question}"`).join(', ')}`;
  }).join('\n');
}

// 그래픽 오거나이저 정보 생성
function getGraphicOrganizersInfo(): string {
  return GRAPHIC_ORGANIZERS.slice(0, 8).map(g =>
    `- ${g.nameKo} (${g.name}): ${g.purpose.slice(0, 50)}...`
  ).join('\n');
}

// UDL 프레임워크 정보 생성
function getUDLFrameworkInfo(): string {
  if (!UDL_FRAMEWORK?.principles) return '';
  return UDL_FRAMEWORK.principles.map(p =>
    `- ${p.name} (${p.nameEn}): ${p.guidelines?.slice(0, 2).map(g => g.name).join(', ') || ''}`
  ).join('\n');
}

// Visible Learning 정보 생성
function getVisibleLearningInfo(): string {
  if (!VISIBLE_LEARNING?.highImpactStrategies) return '';
  return VISIBLE_LEARNING.highImpactStrategies.slice(0, 8).map(s =>
    `- ${s.name} (${s.nameEn}): 효과크기 ${s.effectSize}`
  ).join('\n');
}

// Thinking Maps 정보 생성
function getThinkingMapsInfo(): string {
  if (!THINKING_MAPS?.maps) return '';
  return THINKING_MAPS.maps.slice(0, 8).map(m =>
    `- ${m.name}: ${m.thinkingProcess} - ${m.purpose}`
  ).join('\n');
}

// 차별화 수업 정보 생성
function getDifferentiatedInstructionInfo(): string {
  if (!DIFFERENTIATED_INSTRUCTION?.differentiationElements) return '';
  return DIFFERENTIATED_INSTRUCTION.differentiationElements.slice(0, 5).map(s =>
    `- ${s.name} (${s.nameEn}): ${s.strategies?.slice(0, 3).join(', ') || ''}`
  ).join('\n');
}

// 개념기반 모델 정보 생성
function getConceptBasedModelsInfo(): string {
  return CONCEPT_BASED_MODELS.map(m =>
    `- ${m.name} (${m.author}): ${m.keyPrinciples.slice(0, 2).join('; ')}`
  ).join('\n');
}

// 사고력 프레임워크 (Bloom, Webb's DOK) 정보 생성
function getThinkingFrameworksInfo(): string {
  return THINKING_FRAMEWORKS.map(f => {
    const levels = f.levels.slice(0, 4).map(l => `${l.name}(${l.verbs.slice(0, 2).join(',')})`).join(' → ');
    return `- ${f.name} (${f.author}): ${levels}`;
  }).join('\n');
}

// 루브릭 템플릿 정보 생성
function getRubricTemplatesInfo(): string {
  return RUBRIC_TEMPLATES.slice(0, 5).map(r =>
    `- ${r.title} (${r.type}): 기준 ${r.criteria.length}개`
  ).join('\n');
}

// 블렌디드/플립드 러닝 정보 생성
function getBlendedLearningInfo(): string {
  let info = '';
  if (FLIPPED_LEARNING?.structure?.beforeClass) {
    info += `**거꾸로 교실**: 사전(${FLIPPED_LEARNING.structure.beforeClass.activities.slice(0, 2).join(', ')}), 수업중(${FLIPPED_LEARNING.structure.duringClass?.activities?.slice(0, 2).join(', ') || ''})\n`;
  }
  if (BLENDED_LEARNING_MODELS?.models) {
    info += `**블렌디드 러닝 모델**: ${BLENDED_LEARNING_MODELS.models.slice(0, 3).map(m => m.name).join(', ')}`;
  }
  return info;
}

// 게이미피케이션 정보 생성
function getGamificationInfo(): string {
  if (!GAMIFICATION_EDUCATION?.gameElements) return '';
  return `게이미피케이션 요소: ${GAMIFICATION_EDUCATION.gameElements.slice(0, 5).map(e => `${e.nameKr}(${e.name})`).join(', ')}`;
}

// 교과별 전문 프레임워크
function getSubjectSpecificGuidance(subject: string): string {
  const subjectGuides: Record<string, string> = {
    '국어': `
### 📖 국어과 전문 프레임워크 (실제 DB 데이터)
**균형적 문해력(Balanced Literacy):**
${BALANCED_LITERACY ? `- 구성요소: ${BALANCED_LITERACY.components?.map(c => c.name).join(', ') || '읽기, 쓰기, 말하기, 듣기'}` : ''}
**핵심 개념:** 의미, 맥락, 표현, 소통, 비판적 이해`,

    '수학': `
### 🔢 수학과 전문 프레임워크 (실제 DB 데이터)
**싱가포르 수학(CPA 접근):**
${SINGAPORE_MATH ? `- 철학: ${SINGAPORE_MATH.philosophy}
- CPA 단계: ${SINGAPORE_MATH.cpaApproach?.stages?.map(s => `${s.nameKr}(${s.name})`).join(' → ') || 'Concrete → Pictorial → Abstract'}` : ''}

**Number Talks:**
${NUMBER_TALKS ? `- 단계: ${NUMBER_TALKS.structure?.map(s => s.name).join(' → ') || '문제 제시 → 생각 시간 → 전략 공유'}` : ''}

**수학과 핵심 개념:** 패턴, 관계, 변화, 구조, 표현`,

    '사회': `
### 🌍 사회과 전문 프레임워크 (실제 DB 데이터)
**C3 Framework (탐구 아크):**
${C3_FRAMEWORK ? `- 4차원: ${C3_FRAMEWORK.dimensions?.map(d => d.name).join(' → ') || '질문 개발 → 개념/도구 적용 → 증거 평가 → 결론 전달과 행동'}` : ''}

**사회과 핵심 개념:** 변화, 상호작용, 권력, 정의, 시스템`,

    '과학': `
### 🔬 과학과 전문 프레임워크
**과학과 핵심 개념:** 인과, 시스템, 패턴, 에너지, 물질
**탐구 접근:** 현상에서 출발, 모델링, 증거 기반 주장`,

    '도덕': `
### 💝 도덕과 전문 프레임워크
**도덕과 핵심 개념:** 존중, 책임, 정의, 배려, 공정
**가치 탐구 활동:** 딜레마 토론, 역할극, 가치 명료화`,
  };

  return subjectGuides[subject] || `
### 📚 ${subject}과 설계 가이드
교과 특성을 고려하여 개념기반 탐구수업을 설계하세요.`;
}

/**
 * 세계 최고 수준의 개념기반 탐구수업 설계 프롬프트 생성기
 * 실제 데이터베이스 파일에서 모든 정보를 동적으로 로드
 */
export const generateEnhancedLessonPlanPrompt = (input: LessonInput): string => {
  const totalPeriods = input.totalPeriods;
  const periodDistribution = calculatePeriodDistribution(totalPeriods);

  // ============================================
  // 실제 DB에서 모든 데이터 로드
  // ============================================

  // 기존 DB 데이터
  const thinkingRoutinesInfo = getThinkingRoutinesInfo();
  const kaganInfo = getKaganStructuresInfo();
  const sixHatsInfo = getSixThinkingHatsInfo();
  const rosenshineInfo = getRosenshineInfo();
  const wiliamInfo = getWiliamInfo();
  const assessmentInfo = getAssessmentStrategiesInfo();
  const learningTheoriesInfo = getLearningTheoriesInfo();
  const pedagogicalInfo = getPedagogicalApproachesInfo();
  const competencyInfo = getCompetencyFrameworksInfo();
  const subjectFramework = getSubjectSpecificGuidance(input.subject);

  // 추가된 DB 데이터 (55개국 + IB + 핵심개념 등)
  const internationalInfo = getInternationalFrameworksInfo();
  const ibThemesInfo = getTransdisciplinaryThemesInfo();
  const ibContextsInfo = getGlobalContextsInfo();
  const atlSkillsInfo = getATLSkillsInfo();
  const learnerProfileInfo = getLearnerProfileInfo();
  const keyConceptsInfo = getKeyConceptsInfo();
  const mypConceptsInfo = getMYPRelatedConceptsInfo();
  const korea2022Info = getKorea2022CoreIdeasInfo();
  const generalizationsInfo = getGeneralizationsInfo();
  const inquiryQuestionsInfo = getInquiryQuestionsInfo();
  const graphicOrganizersInfo = getGraphicOrganizersInfo();
  const udlInfo = getUDLFrameworkInfo();
  const visibleLearningInfo = getVisibleLearningInfo();
  const thinkingMapsInfo = getThinkingMapsInfo();
  const differentiationInfo = getDifferentiatedInstructionInfo();
  const conceptModelsInfo = getConceptBasedModelsInfo();
  const thinkingFrameworksInfo = getThinkingFrameworksInfo();
  const rubricInfo = getRubricTemplatesInfo();
  const blendedInfo = getBlendedLearningInfo();
  const gamificationInfo = getGamificationInfo();

  // 교육과정 설계 모델 정보
  const curriculumModels = Array.isArray(CURRICULUM_DESIGN_MODELS)
    ? CURRICULUM_DESIGN_MODELS.slice(0, 5).map(m =>
        `- ${m.name} (${m.developer}, ${m.year}): ${m.description?.slice(0, 50)}...`
      ).join('\n')
    : '';

  // 총 데이터베이스 항목 수 계산 (모든 DB 포함)
  const totalDbItems =
    THINKING_ROUTINES.length + LEARNING_THEORIES.length + INSTRUCTIONAL_MODELS.length +
    PEDAGOGICAL_APPROACHES.length + ASSESSMENT_STRATEGIES.length + TEACHING_STRATEGIES.length +
    INTERNATIONAL_FRAMEWORKS.length + KEY_CONCEPTS.length + GENERALIZATIONS.length +
    INQUIRY_QUESTIONS.length + GRAPHIC_ORGANIZERS.length + TRANSDISCIPLINARY_THEMES.length +
    GLOBAL_CONTEXTS.length + ATL_SKILLS.length + LEARNER_PROFILE.length + MYP_RELATED_CONCEPTS.length +
    KOREA_2022_CORE_IDEAS.length + RUBRIC_TEMPLATES.length;

  const totalCountries = INTERNATIONAL_FRAMEWORKS_STATS?.countries || 55;

  return `당신은 세계 최고 수준의 개념기반탐구(CBI) 수업설계 전문가 AI입니다.

═══════════════════════════════════════════════════════════════════════════════
📚 통합 교육 데이터베이스 (${totalDbItems}개 항목 + ${totalCountries}개국 프레임워크)
═══════════════════════════════════════════════════════════════════════════════

### 1. 🌍 국제 교육 프레임워크 (${INTERNATIONAL_FRAMEWORKS.length}개국)
${internationalInfo}
... 외 ${INTERNATIONAL_FRAMEWORKS.length - 15}개국 프레임워크 더

### 2. 📖 학습 이론 (${LEARNING_THEORIES.length}개 이론)
${learningTheoriesInfo}

### 3. 📐 개념기반 교육 모델
${conceptModelsInfo}

### 4. 🧠 사고력 프레임워크 (Bloom, Webb's DOK)
${thinkingFrameworksInfo}

### 5. 📊 21세기 역량 프레임워크 (${COMPETENCY_FRAMEWORKS_21C.length}개)
${competencyInfo}

### 6. 👨‍🏫 교수법/페다고지 접근 (${PEDAGOGICAL_APPROACHES.length}개)
${pedagogicalInfo}

### 7. ✅ Rosenshine의 효과적인 교수 원리 10가지
${rosenshineInfo}

### 8. 📝 Dylan Wiliam의 형성평가 5대 전략
${wiliamInfo}

### 9. 📚 교육과정 설계 모델
${curriculumModels}

═══════════════════════════════════════════════════════════════════════════════
🎓 IB 프레임워크 (PYP/MYP)
═══════════════════════════════════════════════════════════════════════════════

### PYP 초학문적 주제 (${TRANSDISCIPLINARY_THEMES.length}개)
${ibThemesInfo}

### MYP 글로벌 맥락 (${GLOBAL_CONTEXTS.length}개)
${ibContextsInfo}

### ATL 학습접근기능 (${ATL_SKILLS.length}개)
${atlSkillsInfo}

### IB 학습자상 (${LEARNER_PROFILE.length}개)
${learnerProfileInfo}

### MYP 교과별 관련 개념
${mypConceptsInfo}

═══════════════════════════════════════════════════════════════════════════════
🇰🇷 한국 2022 개정 교육과정 핵심 아이디어
═══════════════════════════════════════════════════════════════════════════════
${korea2022Info}

═══════════════════════════════════════════════════════════════════════════════
💡 핵심 개념 라이브러리 (${KEY_CONCEPTS.length}개)
═══════════════════════════════════════════════════════════════════════════════
${keyConceptsInfo}

═══════════════════════════════════════════════════════════════════════════════
📜 일반화 문장 예시 (${GENERALIZATIONS.length}개)
═══════════════════════════════════════════════════════════════════════════════
${generalizationsInfo}

═══════════════════════════════════════════════════════════════════════════════
❓ 탐구 질문 유형별 예시 (${INQUIRY_QUESTIONS.length}개)
═══════════════════════════════════════════════════════════════════════════════
${inquiryQuestionsInfo}

═══════════════════════════════════════════════════════════════════════════════
👁️ Visible Learning 효과적인 전략 (John Hattie)
═══════════════════════════════════════════════════════════════════════════════
${visibleLearningInfo}

═══════════════════════════════════════════════════════════════════════════════
🗺️ Thinking Maps (8가지 사고 지도)
═══════════════════════════════════════════════════════════════════════════════
${thinkingMapsInfo}

═══════════════════════════════════════════════════════════════════════════════
📊 그래픽 오거나이저 (${GRAPHIC_ORGANIZERS.length}개)
═══════════════════════════════════════════════════════════════════════════════
${graphicOrganizersInfo}

═══════════════════════════════════════════════════════════════════════════════
♿ UDL 보편적 학습설계
═══════════════════════════════════════════════════════════════════════════════
${udlInfo}

═══════════════════════════════════════════════════════════════════════════════
🎯 차별화 수업 전략
═══════════════════════════════════════════════════════════════════════════════
${differentiationInfo}

═══════════════════════════════════════════════════════════════════════════════
📋 루브릭 템플릿 (${RUBRIC_TEMPLATES.length}개)
═══════════════════════════════════════════════════════════════════════════════
${rubricInfo}

═══════════════════════════════════════════════════════════════════════════════
💻 블렌디드/플립드 러닝
═══════════════════════════════════════════════════════════════════════════════
${blendedInfo}

═══════════════════════════════════════════════════════════════════════════════
🎮 게이미피케이션
═══════════════════════════════════════════════════════════════════════════════
${gamificationInfo}

${subjectFramework}

═══════════════════════════════════════════════════════════════════════════════
🎯 수업 설계 요청
═══════════════════════════════════════════════════════════════════════════════

### 입력 정보
- **출판사**: ${input.publisher}
- **학년**: ${input.grade}학년
- **과목**: ${input.subject}
- **단원**: ${input.unit}
- **총 차시**: ${totalPeriods}차시
- **학습목표**: ${input.objectives.join(', ')}
- **성취기준**: ${input.achievementStandards?.join(', ') || '미지정'}

${input.conceptLens ? `
### 🔍 교사가 선택한 개념 렌즈 (필수 적용!)
- **개념 렌즈**: ${input.conceptLens.name} (${input.conceptLens.nameEn})
- **의미**: ${input.conceptLens.description}
` : ''}

${input.selectedGeneralizations && input.selectedGeneralizations.length > 0 ? `
### 📝 교사가 선택한 일반화 문장 (필수 포함!)
${input.selectedGeneralizations.map((g, i) => `${i + 1}. "${g.customText || g.template}"`).join('\n')}
` : ''}

${input.selectedGRASPS ? `
### 🎭 교사가 선택한 GRASPS 수행과제 요소
${input.selectedGRASPS.role ? `- **역할**: ${input.selectedGRASPS.role.name}` : ''}
${input.selectedGRASPS.audience ? `- **청중**: ${input.selectedGRASPS.audience.name}` : ''}
${input.selectedGRASPS.product ? `- **산출물**: ${input.selectedGRASPS.product.name}` : ''}
${input.selectedGRASPS.situation ? `- **상황**: ${input.selectedGRASPS.situation}` : ''}
${input.selectedGRASPS.goal ? `- **목표**: ${input.selectedGRASPS.goal}` : ''}
` : ''}


═══════════════════════════════════════════════════════════════════════════════
📋 차시 배분 (${totalPeriods}차시)
═══════════════════════════════════════════════════════════════════════════════
- 관계맺기: ${periodDistribution.engage}차시
- 집중하기: ${periodDistribution.focus}차시
- 조사하기: ${periodDistribution.investigate}차시
- 조직정리: ${periodDistribution.organize}차시
- 일반화: ${periodDistribution.generalize}차시
- 전이하기: ${periodDistribution.transfer}차시
- 성찰하기: ${periodDistribution.reflect}차시

═══════════════════════════════════════════════════════════════════════════════
🧠 사고 루틴 라이브러리 (실제 DB에서 로드: ${THINKING_ROUTINES.length}개)
═══════════════════════════════════════════════════════════════════════════════

${thinkingRoutinesInfo}

═══════════════════════════════════════════════════════════════════════════════
🤝 Kagan 협동학습 구조 (실제 DB)
═══════════════════════════════════════════════════════════════════════════════
${kaganInfo}

═══════════════════════════════════════════════════════════════════════════════
🎨 De Bono 6색 사고모자 (실제 DB)
═══════════════════════════════════════════════════════════════════════════════
${sixHatsInfo}

═══════════════════════════════════════════════════════════════════════════════
📊 형성평가 전략 (실제 DB에서 로드: ${ASSESSMENT_STRATEGIES.length}개)
═══════════════════════════════════════════════════════════════════════════════
${assessmentInfo}

═══════════════════════════════════════════════════════════════════════════════
✨ 핵심 설계 원칙 (반드시 준수!)
═══════════════════════════════════════════════════════════════════════════════

1. **일반화는 학생 삶과 연결**: "우리 반에서도...", "우리 가족도...", "내 일상에서..."
2. **탐구질문 3단계 철저히**: (사)사실적, (개)개념적, (논)논쟁적
3. **사고 루틴 적극 활용**: 위 라이브러리에서 각 단계에 적합한 루틴 선택
4. **협동학습 구조 통합**: Kagan 구조 활용
5. **형성평가 내장**: Dylan Wiliam 5대 전략 반영
6. **Webb's DOK 수준 고려**: 조사/조직 DOK 2-3, 일반화/전이 DOK 3-4

═══════════════════════════════════════════════════════════════════════════════
📄 JSON 출력 형식
═══════════════════════════════════════════════════════════════════════════════

{
  "lessonOverview": {
    "title": "수업 제목",
    "coreConcepts": ["핵심 개념"],
    "relatedConcepts": ["관련 개념1", "관련 개념2", "관련 개념3"],
    "bigIdeas": ["일반화1 - 학생 생활 연결", "일반화2", "일반화3"],
    "guidingQuestions": {
      "factual": ["(사) 사실적 질문1", "(사) 질문2", "(사) 질문3"],
      "conceptual": ["(개) 개념적 질문1", "(개) 질문2", "(개) 질문3"],
      "debatable": ["(논) 논쟁적 질문1", "(논) 질문2"]
    }
  },
  "unitOverview": {
    "title": "수업 제목",
    "grade": ${input.grade},
    "subject": "${input.subject}",
    "unitName": "${input.unit}",
    "totalPeriods": ${totalPeriods},
    "curriculumKeyIdea": "교육과정 핵심 아이디어",
    "unitKeyIdea": "단원 핵심 이해",
    "coreCompetencies": [{"name": "역량", "description": "설명"}],
    "designIntent": "설계 의도 설명",
    "conceptLens": "개념 렌즈",
    "relatedConcepts": ["관련 개념"],
    "achievementStandards": ["성취기준"],
    "contentElements": {
      "knowledge": ["지식"],
      "process": ["기능"],
      "attitude": ["태도"]
    },
    "generalizations": [{
      "generalization": "일반화 문장",
      "inquiryQuestions": {"factual": [], "conceptual": [], "debatable": []}
    }]
  },
  "unitAssessment": {
    "graspsTask": {
      "taskName": "수행과제명",
      "goal": "목표",
      "role": "역할",
      "audience": "청중",
      "situation": "상황",
      "product": "산출물",
      "standards": "기준"
    },
    "rubric": [{
      "criterion": "기준",
      "category": "knowledge",
      "categoryName": "지식·이해",
      "excellent": "탁월",
      "satisfactory": "능숙",
      "needsImprovement": "발전중"
    }]
  },
  "stages": {
    "engage": {
      "stageName": "관계맺기",
      "stageNameEn": "Engage",
      "periods": "${calculatePeriodRange(1, periodDistribution.engage)}",
      "periodCount": ${periodDistribution.engage},
      "generalization": "일반화",
      "inquiryQuestion": "탐구질문",
      "objectives": ["목표"],
      "activities": [{
        "order": 1,
        "title": "활동명",
        "description": "설명",
        "duration": 40,
        "type": "whole_class",
        "instructions": ["지시"],
        "expectedResponses": ["예상반응"],
        "kaganStructure": "협동학습 구조"
      }],
      "thinkingRoutine": {
        "name": "See-Think-Wonder",
        "nameEn": "See-Think-Wonder",
        "steps": ["단계"],
        "questions": ["질문"]
      },
      "teacherActions": ["교사 행동"],
      "studentActions": ["학생 행동"],
      "materials": ["준비물"],
      "tips": ["팁"],
      "assessment": {
        "type": "diagnostic",
        "criteria": ["기준"],
        "methods": ["방법"],
        "formativeStrategy": "형성평가 전략"
      }
    },
    "focus": {
      "stageName": "집중하기",
      "stageNameEn": "Focus",
      "periods": "${calculatePeriodRange(periodDistribution.engage + 1, periodDistribution.focus)}",
      "periodCount": ${periodDistribution.focus},
      "generalization": "일반화",
      "inquiryQuestion": "탐구질문",
      "objectives": ["목표"],
      "activities": [{"order": 1, "title": "활동명", "description": "설명", "duration": 40, "type": "whole_class", "instructions": [], "expectedResponses": []}],
      "thinkingRoutine": {"name": "Frayer Model", "nameEn": "Frayer Model", "steps": [], "questions": []},
      "teacherActions": [],
      "studentActions": [],
      "materials": [],
      "tips": [],
      "assessment": {"type": "diagnostic", "criteria": [], "methods": [], "formativeStrategy": ""}
    },
    "investigate": {
      "stageName": "조사하기",
      "stageNameEn": "Investigate",
      "periods": "${calculatePeriodRange(periodDistribution.engage + periodDistribution.focus + 1, periodDistribution.investigate)}",
      "periodCount": ${periodDistribution.investigate},
      "generalization": "일반화",
      "inquiryQuestion": "탐구질문",
      "objectives": ["목표"],
      "activities": [{"order": 1, "title": "활동명", "description": "설명", "duration": 80, "type": "group", "instructions": [], "expectedResponses": [], "differentiation": {"support": "", "extension": ""}}],
      "thinkingRoutine": {"name": "", "nameEn": "", "steps": [], "questions": []},
      "teacherActions": [],
      "studentActions": [],
      "materials": [],
      "tips": [],
      "assessment": {"type": "formative", "criteria": [], "methods": [], "formativeStrategy": ""}
    },
    "organize": {
      "stageName": "조직 및 정리하기",
      "stageNameEn": "Organize",
      "periods": "${calculatePeriodRange(periodDistribution.engage + periodDistribution.focus + periodDistribution.investigate + 1, periodDistribution.organize)}",
      "periodCount": ${periodDistribution.organize},
      "generalization": "일반화",
      "inquiryQuestion": "탐구질문",
      "objectives": ["목표"],
      "activities": [{"order": 1, "title": "활동명", "description": "설명", "duration": 80, "type": "pair", "instructions": [], "expectedResponses": []}],
      "thinkingRoutine": {"name": "Compare & Contrast", "nameEn": "Compare and Contrast", "steps": [], "questions": []},
      "teacherActions": [],
      "studentActions": [],
      "materials": [],
      "tips": [],
      "assessment": {"type": "formative", "criteria": [], "methods": [], "formativeStrategy": ""}
    },
    "generalize": {
      "stageName": "일반화하기",
      "stageNameEn": "Generalize",
      "periods": "${calculatePeriodRange(periodDistribution.engage + periodDistribution.focus + periodDistribution.investigate + periodDistribution.organize + 1, periodDistribution.generalize)}",
      "periodCount": ${periodDistribution.generalize},
      "generalization": "학생들이 도출할 일반화",
      "inquiryQuestion": "개념적/논쟁적 질문",
      "objectives": ["빅 아이디어 도출"],
      "activities": [{"order": 1, "title": "활동명", "description": "설명", "duration": 40, "type": "whole_class", "instructions": [], "expectedResponses": []}],
      "thinkingRoutine": {"name": "Headlines", "nameEn": "Headlines", "steps": [], "questions": []},
      "teacherActions": [],
      "studentActions": [],
      "materials": [],
      "tips": [],
      "assessment": {"type": "formative", "criteria": [], "methods": [], "formativeStrategy": ""}
    },
    "transfer": {
      "stageName": "전이하기",
      "stageNameEn": "Transfer",
      "periods": "${calculatePeriodRange(periodDistribution.engage + periodDistribution.focus + periodDistribution.investigate + periodDistribution.organize + periodDistribution.generalize + 1, periodDistribution.transfer)}",
      "periodCount": ${periodDistribution.transfer},
      "generalization": "전이할 일반화",
      "inquiryQuestion": "적용 질문",
      "objectives": ["새로운 상황 적용"],
      "activities": [{"order": 1, "title": "GRASPS 수행과제", "description": "설명", "duration": 80, "type": "group", "instructions": [], "expectedResponses": []}],
      "thinkingRoutine": {"name": "What If...?", "nameEn": "What If...?", "steps": [], "questions": []},
      "teacherActions": [],
      "studentActions": [],
      "materials": [],
      "tips": [],
      "assessment": {"type": "summative", "criteria": [], "methods": [], "formativeStrategy": ""}
    },
    "reflect": {
      "stageName": "성찰하기",
      "stageNameEn": "Reflect",
      "periods": "${calculatePeriodRange(totalPeriods - periodDistribution.reflect + 1, periodDistribution.reflect)}",
      "periodCount": ${periodDistribution.reflect},
      "generalization": "최종 일반화",
      "inquiryQuestion": "성찰 질문",
      "objectives": ["메타인지 발달"],
      "activities": [{"order": 1, "title": "학습 성찰", "description": "설명", "duration": 40, "type": "individual", "instructions": [], "expectedResponses": []}],
      "thinkingRoutine": {"name": "I Used to Think... Now I Think...", "nameEn": "I Used to Think... Now I Think...", "steps": [], "questions": []},
      "teacherActions": [],
      "studentActions": [],
      "materials": [],
      "tips": [],
      "assessment": {"type": "self", "criteria": [], "methods": [], "formativeStrategy": ""}
    }
  },
  "assessmentPlan": {
    "formative": {"methods": [], "criteria": [], "timing": "각 단계별", "wiliamStrategies": []},
    "summative": {"methods": [], "criteria": [], "rubric": []}
  },
  "preparation": ["준비물"],
  "safetyNotes": ["안전"],
  "differentiation": {"support": [], "extension": []}
}

**중요**: 모든 필드를 구체적이고 상세하게 채워주세요. 빈 배열이나 플레이스홀더가 아닌 실제 내용을 작성하세요.
${input.grade}학년 수준에 맞는 어휘와 활동을 사용하세요.
반드시 유효한 JSON 형식으로만 응답하세요.`;
};

export default generateEnhancedLessonPlanPrompt;
