import { NextRequest, NextResponse } from 'next/server';
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
  FLIPPED_LEARNING,
  BLENDED_LEARNING_MODELS,
  GAMIFICATION_EDUCATION,
  UDL_FRAMEWORK,
  DIFFERENTIATED_INSTRUCTION,
  VISIBLE_LEARNING,
  THINKING_MAPS,
  EDUCATIONAL_THEORIES_STATS
} from '@/data/educational-theories';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  try {
    let data;

    switch (category) {
      case 'thinking-routines':
        data = THINKING_ROUTINES;
        break;
      case 'assessment-strategies':
        data = ASSESSMENT_STRATEGIES;
        break;
      case 'rubric-templates':
        data = RUBRIC_TEMPLATES;
        break;
      case 'teaching-strategies':
        data = TEACHING_STRATEGIES;
        break;
      case 'graphic-organizers':
        data = GRAPHIC_ORGANIZERS;
        break;
      case 'key-concepts':
        data = KEY_CONCEPTS;
        break;
      case 'generalizations':
        data = GENERALIZATIONS;
        break;
      case 'inquiry-questions':
        data = INQUIRY_QUESTIONS;
        break;
      case 'ib-themes':
        data = TRANSDISCIPLINARY_THEMES;
        break;
      case 'ib-contexts':
        data = GLOBAL_CONTEXTS;
        break;
      case 'ib-atl':
        data = ATL_SKILLS;
        break;
      case 'ib-learner-profile':
        data = LEARNER_PROFILE;
        break;
      case 'learning-theories':
        data = LEARNING_THEORIES;
        break;
      case 'instructional-models':
        data = INSTRUCTIONAL_MODELS;
        break;
      case 'subject-specific-frameworks':
        data = SUBJECT_SPECIFIC_FRAMEWORKS;
        break;
      case 'pedagogical-approaches':
        data = PEDAGOGICAL_APPROACHES;
        break;
      case 'competency-frameworks':
        data = COMPETENCY_FRAMEWORKS_21C;
        break;
      case 'extended-thinking-routines':
        data = EXTENDED_THINKING_ROUTINES;
        break;
      case 'habits-of-mind':
        data = HABITS_OF_MIND;
        break;
      case 'udl-framework':
        data = UDL_FRAMEWORK;
        break;
      case 'differentiated-instruction':
        data = DIFFERENTIATED_INSTRUCTION;
        break;
      case 'visible-learning':
        data = VISIBLE_LEARNING;
        break;
      case 'thinking-maps':
        data = THINKING_MAPS;
        break;
      case 'six-thinking-hats':
        data = SIX_THINKING_HATS;
        break;
      case 'kagan-structures':
        data = KAGAN_STRUCTURES;
        break;
      case 'rosenshine-principles':
        data = ROSENSHINE_PRINCIPLES;
        break;
      case 'wiliam-assessment':
        data = WILIAM_FORMATIVE_ASSESSMENT;
        break;
      case 'c3-framework':
        data = C3_FRAMEWORK;
        break;
      case 'singapore-math':
        data = SINGAPORE_MATH;
        break;
      case 'number-talks':
        data = NUMBER_TALKS;
        break;
      case 'balanced-literacy':
        data = BALANCED_LITERACY;
        break;
      case 'curriculum-design':
        data = CURRICULUM_DESIGN_MODELS;
        break;
      case 'flipped-learning':
        data = FLIPPED_LEARNING;
        break;
      case 'blended-learning':
        data = BLENDED_LEARNING_MODELS;
        break;
      case 'gamification':
        data = GAMIFICATION_EDUCATION;
        break;
      case 'all':
        data = {
          // 기본 교육 데이터베이스
          thinkingRoutines: THINKING_ROUTINES,
          assessmentStrategies: ASSESSMENT_STRATEGIES,
          rubricTemplates: RUBRIC_TEMPLATES,
          teachingStrategies: TEACHING_STRATEGIES,
          graphicOrganizers: GRAPHIC_ORGANIZERS,
          keyConcepts: KEY_CONCEPTS,
          generalizations: GENERALIZATIONS,
          inquiryQuestions: INQUIRY_QUESTIONS,
          // IB 프레임워크
          ibThemes: TRANSDISCIPLINARY_THEMES,
          ibContexts: GLOBAL_CONTEXTS,
          ibAtl: ATL_SKILLS,
          ibLearnerProfile: LEARNER_PROFILE,
          // 학습 이론 및 교수 모델
          learningTheories: LEARNING_THEORIES,
          instructionalModels: INSTRUCTIONAL_MODELS,
          subjectSpecificFrameworks: SUBJECT_SPECIFIC_FRAMEWORKS,
          pedagogicalApproaches: PEDAGOGICAL_APPROACHES,
          competencyFrameworks: COMPETENCY_FRAMEWORKS_21C,
          extendedThinkingRoutines: EXTENDED_THINKING_ROUTINES,
          habitsOfMind: HABITS_OF_MIND,
          // 특별 프레임워크
          sixThinkingHats: SIX_THINKING_HATS,
          kaganStructures: KAGAN_STRUCTURES,
          rosenshinePrinciples: ROSENSHINE_PRINCIPLES,
          wiliamAssessment: WILIAM_FORMATIVE_ASSESSMENT,
          c3Framework: C3_FRAMEWORK,
          singaporeMath: SINGAPORE_MATH,
          numberTalks: NUMBER_TALKS,
          balancedLiteracy: BALANCED_LITERACY,
          curriculumDesign: CURRICULUM_DESIGN_MODELS,
          flippedLearning: FLIPPED_LEARNING,
          blendedLearning: BLENDED_LEARNING_MODELS,
          gamification: GAMIFICATION_EDUCATION,
          udlFramework: UDL_FRAMEWORK,
          differentiatedInstruction: DIFFERENTIATED_INSTRUCTION,
          visibleLearning: VISIBLE_LEARNING,
          thinkingMaps: THINKING_MAPS,
        };
        break;
      case 'stats':
        data = {
          // 기본 교육 데이터
          thinkingRoutines: THINKING_ROUTINES.length,
          assessmentStrategies: ASSESSMENT_STRATEGIES.length,
          rubricTemplates: RUBRIC_TEMPLATES.length,
          teachingStrategies: TEACHING_STRATEGIES.length,
          graphicOrganizers: GRAPHIC_ORGANIZERS.length,
          keyConcepts: KEY_CONCEPTS.length,
          generalizations: GENERALIZATIONS.length,
          inquiryQuestions: INQUIRY_QUESTIONS.length,
          // 교육 이론 통계 (educational-theories.ts에서 로드)
          ...EDUCATIONAL_THEORIES_STATS,
          // 총계 계산
          totalBasicDb: THINKING_ROUTINES.length + ASSESSMENT_STRATEGIES.length +
                 RUBRIC_TEMPLATES.length + TEACHING_STRATEGIES.length +
                 GRAPHIC_ORGANIZERS.length + KEY_CONCEPTS.length +
                 GENERALIZATIONS.length + INQUIRY_QUESTIONS.length,
          totalEducationalTheories: EDUCATIONAL_THEORIES_STATS.total
        };
        break;
      default:
        data = {
          categories: [
            'thinking-routines', 'assessment-strategies', 'rubric-templates',
            'teaching-strategies', 'graphic-organizers', 'key-concepts',
            'generalizations', 'inquiry-questions', 'ib-themes', 'ib-contexts',
            'ib-atl', 'ib-learner-profile', 'learning-theories', 'instructional-models',
            'subject-specific-frameworks', 'pedagogical-approaches', 'competency-frameworks',
            'extended-thinking-routines', 'habits-of-mind', 'udl-framework',
            'differentiated-instruction', 'visible-learning', 'thinking-maps',
            'six-thinking-hats', 'kagan-structures', 'rosenshine-principles', 'wiliam-assessment',
            'c3-framework', 'singapore-math', 'number-talks', 'balanced-literacy',
            'curriculum-design', 'flipped-learning', 'blended-learning', 'gamification',
            'all', 'stats'
          ]
        };
    }

    return NextResponse.json({
      success: true,
      category: category || 'available-categories',
      data,
      count: Array.isArray(data) ? data.length : undefined
    });
  } catch (error) {
    console.error('Database API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch database', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
