import { NextRequest, NextResponse } from 'next/server';
import {
  getServerLesson,
  getServerMaterials,
  updateServerLesson,
  deleteServerLesson,
} from '@/lib/firebase/server';

// GET: 수업 조회
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 수업 조회
    const lesson = await getServerLesson(id);

    if (!lesson) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    // 자료 조회
    const materials = await getServerMaterials(id);

    return NextResponse.json({
      success: true,
      lesson,
      materials: materials || [],
    });
  } catch (error) {
    console.error('Lesson GET error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '수업 조회 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// PUT: 수업 수정
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 수업 존재 확인
    const existing = await getServerLesson(id);
    if (!existing) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    const updates = await req.json();

    // 수업 업데이트
    const lesson = await updateServerLesson(id, updates);

    return NextResponse.json({
      success: true,
      lesson,
      message: '수업이 수정되었습니다.',
    });
  } catch (error) {
    console.error('Lesson PUT error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '수업 수정 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// DELETE: 수업 삭제
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 수업 존재 확인
    const existing = await getServerLesson(id);
    if (!existing) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    // 수업 및 관련 자료 삭제
    await deleteServerLesson(id);

    return NextResponse.json({
      success: true,
      message: '수업이 삭제되었습니다.',
    });
  } catch (error) {
    console.error('Lesson DELETE error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '수업 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
