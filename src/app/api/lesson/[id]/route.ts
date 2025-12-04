import { NextRequest, NextResponse } from 'next/server';
import { getServerLesson, getServerMaterial, getAdminDb } from '@/lib/firebase/admin';

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
    const db = getAdminDb();
    const materialsSnapshot = await db
      .collection('materials')
      .where('lesson_id', '==', id)
      .where('is_latest', '==', true)
      .get();

    const materials = materialsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
        updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      };
    });

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
    const db = getAdminDb();

    // 수업 존재 확인
    const lessonRef = db.collection('lessons').doc(id);
    const lessonDoc = await lessonRef.get();

    if (!lessonDoc.exists) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    const updates = await req.json();
    updates.updated_at = new Date();

    // 수업 업데이트
    await lessonRef.update(updates);

    const updatedDoc = await lessonRef.get();
    const data = updatedDoc.data() || {};

    return NextResponse.json({
      success: true,
      lesson: {
        id: updatedDoc.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
        updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      },
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
    const db = getAdminDb();

    // 수업 존재 확인
    const lessonRef = db.collection('lessons').doc(id);
    const lessonDoc = await lessonRef.get();

    if (!lessonDoc.exists) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    // 관련 자료 삭제
    const materialsSnapshot = await db
      .collection('materials')
      .where('lesson_id', '==', id)
      .get();

    const batch = db.batch();
    materialsSnapshot.docs.forEach(doc => {
      batch.delete(doc.ref);
    });
    batch.delete(lessonRef);

    await batch.commit();

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
