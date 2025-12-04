import { NextRequest, NextResponse } from 'next/server';
import { getGeminiClient } from '@/lib/gemini/client';
import {
  generateLessonPlanPrompt,
} from '@/lib/gemini/prompts';
import type { LessonInput, GeneratedLesson } from '@/types/lesson';

export const maxDuration = 60; // Vercel 함수 타임아웃

export async function POST(req: NextRequest) {
  const startTime = Date.now();

  try {
    // Authorization 헤더에서 Firebase ID 토큰 추출
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    const input: LessonInput = await req.json();

    // 입력 검증
    if (
      !input.publisher ||
      !input.grade ||
      !input.subject ||
      !input.unit ||
      !input.objectives?.length
    ) {
      return NextResponse.json({ error: '필수 정보가 누락되었습니다.' }, { status: 400 });
    }

    const gemini = getGeminiClient();

    // 수업 설계만 생성 (시간 단축)
    const lessonPlanPrompt = generateLessonPlanPrompt(input);
    const lessonDesign = await gemini.generateJSON<GeneratedLesson>(lessonPlanPrompt);

    const generationTime = Date.now() - startTime;

    // 수업 설계만 반환 (대본, PPT, 학습지는 별도 API로 생성)
    return NextResponse.json({
      success: true,
      lessonDesign,
      input,
      generationTime,
      message: '수업 설계가 완료되었습니다!',
    });
  } catch (error) {
    console.error('Generation error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : '수업 생성 중 오류가 발생했습니다.',
      },
      { status: 500 }
    );
  }
}
