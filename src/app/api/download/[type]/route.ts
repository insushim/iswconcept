import { NextRequest, NextResponse } from 'next/server';
import { getServerLesson, getServerMaterial } from '@/lib/firebase/server';
import {
  generatePPTX,
  generateLessonPlanDocx,
  generateTeachingScriptDocx,
  generateWorksheetDocx,
} from '@/lib/generators';
import type { Lesson } from '@/types/lesson';
import type { TeachingScriptContent, WorksheetContent, PPTXContent } from '@/types/material';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  try {
    const { type } = await params;
    const lessonId = req.nextUrl.searchParams.get('lessonId');

    if (!lessonId) {
      return NextResponse.json({ error: '수업 ID가 필요합니다.' }, { status: 400 });
    }

    // Firebase REST API로 수업 정보 조회
    const lesson = await getServerLesson(lessonId);

    if (!lesson) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    // 자료 조회
    const material = await getServerMaterial(lessonId, type);

    let buffer: Buffer;
    let filename: string;
    let contentType: string;

    const lessonTitle = (lesson.title as string) || '수업';

    switch (type) {
      case 'lesson_plan':
        buffer = await generateLessonPlanDocx(lesson as unknown as Lesson);
        filename = `${lessonTitle}_교수학습지도안.docx`;
        contentType =
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;

      case 'teaching_script':
        if (!material?.content) {
          return NextResponse.json(
            { error: '수업 대본이 없습니다. 아직 생성되지 않았습니다.' },
            { status: 404 }
          );
        }
        buffer = await generateTeachingScriptDocx(
          lesson as unknown as Lesson,
          material.content as TeachingScriptContent
        );
        filename = `${lessonTitle}_수업대본.docx`;
        contentType =
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;

      case 'pptx':
        if (!material?.content) {
          return NextResponse.json({ error: 'PPT가 없습니다. 아직 생성되지 않았습니다.' }, { status: 404 });
        }
        buffer = await generatePPTX(lesson as unknown as Lesson, material.content as PPTXContent);
        filename = `${lessonTitle}_수업PPT.pptx`;
        contentType =
          'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;

      case 'worksheet':
        if (!material?.content) {
          return NextResponse.json({ error: '학습지가 없습니다. 아직 생성되지 않았습니다.' }, { status: 404 });
        }
        buffer = await generateWorksheetDocx(
          lesson as unknown as Lesson,
          material.content as WorksheetContent
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
