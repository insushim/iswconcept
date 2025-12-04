import { NextRequest, NextResponse } from 'next/server';
import {
  generatePPTX,
  generateLessonPlanDocx,
  generateTeachingScriptDocx,
  generateWorksheetDocx,
} from '@/lib/generators';
import type { Lesson } from '@/types/lesson';
import type { TeachingScriptContent, WorksheetContent, PPTXContent } from '@/types/material';

// POST: 클라이언트에서 데이터를 받아서 파일 생성
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params;
    const { lesson, materialContent } = await req.json();

    if (!lesson) {
      return NextResponse.json({ error: '수업 데이터가 필요합니다.' }, { status: 400 });
    }

    let buffer: Buffer;
    let filename: string;
    let contentType: string;

    const lessonTitle = (lesson.title as string) || '수업';

    switch (type) {
      case 'lesson_plan':
        buffer = await generateLessonPlanDocx(lesson as Lesson);
        filename = `${lessonTitle}_교수학습지도안.docx`;
        contentType =
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;

      case 'teaching_script':
        if (!materialContent) {
          return NextResponse.json(
            { error: '수업 대본이 없습니다. 먼저 생성해주세요.' },
            { status: 404 }
          );
        }
        buffer = await generateTeachingScriptDocx(
          lesson as Lesson,
          materialContent as TeachingScriptContent
        );
        filename = `${lessonTitle}_수업대본.docx`;
        contentType =
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;

      case 'pptx':
        if (!materialContent) {
          return NextResponse.json({ error: 'PPT가 없습니다. 먼저 생성해주세요.' }, { status: 404 });
        }
        buffer = await generatePPTX(lesson as Lesson, materialContent as PPTXContent);
        filename = `${lessonTitle}_수업PPT.pptx`;
        contentType =
          'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;

      case 'worksheet':
        if (!materialContent) {
          return NextResponse.json({ error: '학습지가 없습니다. 먼저 생성해주세요.' }, { status: 404 });
        }
        buffer = await generateWorksheetDocx(
          lesson as Lesson,
          materialContent as WorksheetContent
        );
        filename = `${lessonTitle}_학습지.docx`;
        contentType =
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;

      default:
        return NextResponse.json(
          { error: '지원하지 않는 파일 형식입니다.' },
          { status: 400 }
        );
    }

    // 파일명 인코딩 (한글 지원)
    const encodedFilename = encodeURIComponent(filename);

    // Buffer를 Uint8Array로 변환
    const uint8Array = new Uint8Array(buffer);

    return new NextResponse(uint8Array, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename*=UTF-8''${encodedFilename}`,
      },
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '파일 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
