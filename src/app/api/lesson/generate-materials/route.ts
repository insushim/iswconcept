import { NextRequest, NextResponse } from 'next/server';
import { getGeminiClient } from '@/lib/gemini/client';
import {
  generateTeachingScriptPrompt,
  generatePPTXContentPrompt,
  generateWorksheetPrompt,
  generateLessonPlanDocxPrompt,
} from '@/lib/gemini/prompts';
import type { GeneratedLesson } from '@/types/lesson';
import type { PPTXContent, WorksheetContent, TeachingScriptContent, LessonPlanDocxContent } from '@/types/material';

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    const { lessonId, type, lessonData } = await req.json();

    if (!lessonId || !type) {
      return NextResponse.json({ error: 'lessonId와 type이 필요합니다.' }, { status: 400 });
    }

    if (!lessonData) {
      return NextResponse.json({ error: 'lessonData가 필요합니다.' }, { status: 400 });
    }

    const gemini = getGeminiClient();

    // 수업 설계 데이터 구성
    const lessonDesign: GeneratedLesson = {
      lessonOverview: {
        title: lessonData.title as string,
        coreConcepts: lessonData.core_concepts as string[] || [],
        relatedConcepts: lessonData.related_concepts as string[] || [],
        bigIdeas: lessonData.big_ideas as string[] || [],
        guidingQuestions: {
          factual: lessonData.factual_questions as string[] || [],
          conceptual: lessonData.conceptual_questions as string[] || [],
          debatable: lessonData.debatable_questions as string[] || [],
        },
      },
      stages: {
        engage: lessonData.stage_engage as GeneratedLesson['stages']['engage'],
        focus: lessonData.stage_focus as GeneratedLesson['stages']['focus'],
        investigate: lessonData.stage_investigate as GeneratedLesson['stages']['investigate'],
        organize: lessonData.stage_organize as GeneratedLesson['stages']['organize'],
        generalize: lessonData.stage_generalize as GeneratedLesson['stages']['generalize'],
        transfer: lessonData.stage_transfer as GeneratedLesson['stages']['transfer'],
        reflect: lessonData.stage_reflect as GeneratedLesson['stages']['reflect'],
      },
      assessmentPlan: lessonData.assessment_plan as GeneratedLesson['assessmentPlan'],
      preparation: lessonData.preparation as string[] || [],
      safetyNotes: lessonData.safety_notes as string[] || [],
      differentiation: lessonData.differentiation as GeneratedLesson['differentiation'],
    };

    const grade = lessonData.grade as number;
    const subject = lessonData.subject_id as string;

    let content: TeachingScriptContent | PPTXContent | WorksheetContent | LessonPlanDocxContent;

    switch (type) {
      case 'teaching_script':
        const scriptPrompt = generateTeachingScriptPrompt(lessonDesign, grade);
        content = await gemini.generateJSON<TeachingScriptContent>(scriptPrompt);
        break;

      case 'pptx':
        const pptxPrompt = generatePPTXContentPrompt(lessonDesign, grade);
        content = await gemini.generateJSON<PPTXContent>(pptxPrompt);
        break;

      case 'worksheet':
        const worksheetPrompt = generateWorksheetPrompt(lessonDesign, grade, subject);
        content = await gemini.generateJSON<WorksheetContent>(worksheetPrompt);
        break;

      case 'lesson_plan_docx':
        const lessonPlanPrompt = generateLessonPlanDocxPrompt(lessonDesign, grade);
        content = await gemini.generateJSON<LessonPlanDocxContent>(lessonPlanPrompt);
        break;

      default:
        return NextResponse.json({ error: '지원하지 않는 타입입니다.' }, { status: 400 });
    }

    // Gemini 생성 결과만 반환 (저장은 클라이언트에서 처리)
    return NextResponse.json({
      success: true,
      type,
      content,
      message: '자료가 생성되었습니다.',
    });
  } catch (error) {
    console.error('Material generation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '자료 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
