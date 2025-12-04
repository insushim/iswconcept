import { NextRequest, NextResponse } from 'next/server';
import { getGeminiClient } from '@/lib/gemini/client';
import {
  generateTeachingScriptPrompt,
  generatePPTXContentPrompt,
  generateWorksheetPrompt,
} from '@/lib/gemini/prompts';
import { getServerLesson } from '@/lib/firebase/admin';
import type { GeneratedLesson } from '@/types/lesson';
import type { PPTXContent, WorksheetContent, TeachingScriptContent } from '@/types/material';

export const maxDuration = 60;

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    const { lessonId, type } = await req.json();

    if (!lessonId || !type) {
      return NextResponse.json({ error: 'lessonId와 type이 필요합니다.' }, { status: 400 });
    }

    // 수업 데이터 가져오기
    const lesson = await getServerLesson(lessonId);
    if (!lesson) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    const gemini = getGeminiClient();

    // 수업 설계 데이터 구성
    const lessonDesign: GeneratedLesson = {
      lessonOverview: {
        title: lesson.title as string,
        coreConcepts: lesson.core_concepts as string[] || [],
        relatedConcepts: lesson.related_concepts as string[] || [],
        bigIdeas: lesson.big_ideas as string[] || [],
        guidingQuestions: {
          factual: lesson.factual_questions as string[] || [],
          conceptual: lesson.conceptual_questions as string[] || [],
          debatable: lesson.debatable_questions as string[] || [],
        },
      },
      stages: {
        engage: lesson.stage_engage as GeneratedLesson['stages']['engage'],
        focus: lesson.stage_focus as GeneratedLesson['stages']['focus'],
        investigate: lesson.stage_investigate as GeneratedLesson['stages']['investigate'],
        organize: lesson.stage_organize as GeneratedLesson['stages']['organize'],
        generalize: lesson.stage_generalize as GeneratedLesson['stages']['generalize'],
        transfer: lesson.stage_transfer as GeneratedLesson['stages']['transfer'],
        reflect: lesson.stage_reflect as GeneratedLesson['stages']['reflect'],
      },
      assessmentPlan: lesson.assessment_plan as GeneratedLesson['assessmentPlan'],
      preparation: lesson.preparation as string[] || [],
      safetyNotes: lesson.safety_notes as string[] || [],
      differentiation: lesson.differentiation as GeneratedLesson['differentiation'],
    };

    const grade = lesson.grade as number;
    const subject = lesson.subject_id as string;

    let content: TeachingScriptContent | PPTXContent | WorksheetContent;

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

      default:
        return NextResponse.json({ error: '지원하지 않는 타입입니다.' }, { status: 400 });
    }

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
