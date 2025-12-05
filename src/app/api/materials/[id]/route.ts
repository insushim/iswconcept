import { NextRequest, NextResponse } from 'next/server';

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

// DELETE: 자료 삭제
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    console.log('[Material DELETE] 시작 - materialId:', id);

    // Firebase Auth에서 사용자 확인 (클라이언트에서 전달받은 userId 사용)
    let body;
    try {
      body = await req.json();
    } catch (parseError) {
      console.error('[Material DELETE] JSON 파싱 오류:', parseError);
      return NextResponse.json({ error: '요청 본문을 파싱할 수 없습니다.' }, { status: 400 });
    }

    const { userId, lessonUserId, isSharedMaterial } = body;
    console.log('[Material DELETE] 요청 데이터:', { userId, lessonUserId, isSharedMaterial });

    if (!userId) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    // 권한 확인
    const isOwner = lessonUserId === userId;
    const isAdmin = await isSuperAdmin(userId);

    // 공유 자료실 자료는 슈퍼 관리자만 삭제 가능
    if (isSharedMaterial && !isAdmin) {
      return NextResponse.json({ error: '공유 자료 삭제는 관리자만 가능합니다.' }, { status: 403 });
    }

    // 일반 자료는 본인만 삭제 가능 (또는 관리자)
    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: '삭제 권한이 없습니다.' }, { status: 403 });
    }

    // Firestore에서 자료 삭제 (REST API 사용 + API Key)
    const deleteUrl = `${FIRESTORE_BASE_URL}/materials/${id}?key=${FIREBASE_API_KEY}`;
    console.log('[Material DELETE] Firestore 삭제 시도...');

    const deleteResponse = await fetch(deleteUrl, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('[Material DELETE] Firestore 응답:', deleteResponse.status);

    if (!deleteResponse.ok && deleteResponse.status !== 404) {
      const errorText = await deleteResponse.text();
      console.error('[Material DELETE] Firestore 오류:', errorText);
      throw new Error(`Failed to delete material: ${deleteResponse.status}`);
    }

    console.log('[Material DELETE] 삭제 성공!');
    return NextResponse.json({
      success: true,
      message: '자료가 삭제되었습니다.',
    });
  } catch (error) {
    console.error('[Material DELETE] 오류:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : '자료 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// PUT: 자료 수정 (편집 기능)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 요청 본문에서 userId와 content 확인
    const { userId, lessonUserId, content } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    // 자료 조회 (REST API 사용)
    const materialResponse = await fetch(`${FIRESTORE_BASE_URL}/materials/${id}?key=${FIREBASE_API_KEY}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!materialResponse.ok) {
      return NextResponse.json({ error: '자료를 찾을 수 없습니다.' }, { status: 404 });
    }

    // 권한 확인: 본인 자료이거나 관리자
    const isOwner = lessonUserId === userId;
    const isAdmin = await isSuperAdmin(userId);

    if (!isOwner && !isAdmin) {
      return NextResponse.json({ error: '수정 권한이 없습니다.' }, { status: 403 });
    }

    // Firestore에서 자료 업데이트 (REST API 사용)
    // content를 Firestore 값으로 변환
    function toFirestoreValue(value: unknown): Record<string, unknown> {
      if (value === null || value === undefined) return { nullValue: null };
      if (typeof value === 'string') return { stringValue: value };
      if (typeof value === 'number') {
        return Number.isInteger(value) ? { integerValue: value.toString() } : { doubleValue: value };
      }
      if (typeof value === 'boolean') return { booleanValue: value };
      if (Array.isArray(value)) {
        return { arrayValue: { values: value.map(toFirestoreValue) } };
      }
      if (typeof value === 'object') {
        const fields: Record<string, unknown> = {};
        for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
          fields[k] = toFirestoreValue(v);
        }
        return { mapValue: { fields } };
      }
      return { nullValue: null };
    }

    const updateUrl = `${FIRESTORE_BASE_URL}/materials/${id}?key=${FIREBASE_API_KEY}&updateMask.fieldPaths=content&updateMask.fieldPaths=updated_at`;
    const updateResponse = await fetch(updateUrl, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: {
          content: toFirestoreValue(content),
          updated_at: { stringValue: new Date().toISOString() },
        },
      }),
    });

    if (!updateResponse.ok) {
      throw new Error(`Failed to update material: ${updateResponse.status}`);
    }

    return NextResponse.json({
      success: true,
      message: '자료가 수정되었습니다.',
    });
  } catch (error) {
    console.error('Material PUT error:', error);
    return NextResponse.json(
      { error: '자료 수정 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
