import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// PUT: 자료 수정 (편집 기능)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    // 자료 조회 및 권한 확인
    const { data: material } = await supabase
      .from('materials')
      .select('*, lessons!inner(user_id)')
      .eq('id', id)
      .single();

    if (!material) {
      return NextResponse.json({ error: '자료를 찾을 수 없습니다.' }, { status: 404 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((material.lessons as any).user_id !== user.id) {
      return NextResponse.json({ error: '수정 권한이 없습니다.' }, { status: 403 });
    }

    const { content } = await req.json();

    // 새 버전으로 저장 (기존 버전의 content는 트리거로 자동 NULL 처리됨)
    const { data: updated, error } = await supabase
      .from('materials')
      .insert({
        lesson_id: material.lesson_id,
        type: material.type,
        title: material.title,
        content,
        file_format: material.file_format,
        version: material.version + 1,
        is_latest: true,
      })
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      material: updated,
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
