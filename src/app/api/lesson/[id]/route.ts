import { NextRequest, NextResponse } from 'next/server';
import {
  getServerLesson,
  getServerMaterials,
  updateServerLesson,
  deleteServerLesson,
} from '@/lib/firebase/server';

const FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const FIRESTORE_BASE_URL = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents`;

// 슈퍼 관리자 확인 함수 (서버용 REST API 사용)
async function isSuperAdmin(userId: string): Promise<boolean> {
  try {
    const response = await fetch(`${FIRESTORE_BASE_URL}/users/${userId}?key=${FIREBASE_API_KEY}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      return false;
    }

    const doc = await response.json();
    const role = doc.fields?.role?.stringValue;
    return role === 'admin' || role === 'super_admin';
  } catch {
    return false;
  }
}

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

    // 요청 본문에서 userId 확인
    const body = await req.json().catch(() => ({}));
    const { userId } = body as { userId?: string };

    if (!userId) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    // 수업 존재 확인
    const existing = await getServerLesson(id);
    if (!existing) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    // 권한 확인: 본인 수업이거나 슈퍼 관리자
    const isOwner = existing.user_id === userId;
    const isAdmin = await isSuperAdmin(userId);

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: '삭제 권한이 없습니다.' }, { status: 403 });
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
