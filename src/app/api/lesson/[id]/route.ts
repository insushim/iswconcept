import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET: 수업 조회
export async function GET(
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

    // 수업 조회
    const { data: lesson, error: lessonError } = await supabase
      .from('lessons')
      .select('*')
      .eq('id', id)
      .single();

    if (lessonError || !lesson) {
      return NextResponse.json({ error: '수업을 찾을 수 없습니다.' }, { status: 404 });
    }

    // 권한 확인 (본인 수업이거나 공개 수업)
    if (lesson.user_id !== user.id && !lesson.is_public) {
      return NextResponse.json({ error: '접근 권한이 없습니다.' }, { status: 403 });
    }

    // 자료 조회
    const { data: materials } = await supabase
      .from('materials')
      .select('*')
      .eq('lesson_id', id)
      .eq('is_latest', true);

    return NextResponse.json({
      success: true,
      lesson,
      materials: materials || [],
    });
  } catch (error) {
    console.error('Lesson GET error:', error);
    return NextResponse.json(
      { error: '수업 조회 중 오류가 발생했습니다.' },
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
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    // 권한 확인
    const { data: existing } = await supabase
      .from('lessons')
      .select('user_id')
      .eq('id', id)
      .single();

    if (!existing || existing.user_id !== user.id) {
      return NextResponse.json({ error: '수정 권한이 없습니다.' }, { status: 403 });
    }

    const updates = await req.json();

    // 수업 업데이트
    const { data: lesson, error } = await supabase
      .from('lessons')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      lesson,
      message: '수업이 수정되었습니다.',
    });
  } catch (error) {
    console.error('Lesson PUT error:', error);
    return NextResponse.json(
      { error: '수업 수정 중 오류가 발생했습니다.' },
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
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
    }

    // 권한 확인
    const { data: existing } = await supabase
      .from('lessons')
      .select('user_id')
      .eq('id', id)
      .single();

    if (!existing || existing.user_id !== user.id) {
      return NextResponse.json({ error: '삭제 권한이 없습니다.' }, { status: 403 });
    }

    // 수업 삭제 (CASCADE로 자료도 함께 삭제됨)
    const { error } = await supabase.from('lessons').delete().eq('id', id);

    if (error) {
      throw error;
    }

    return NextResponse.json({
      success: true,
      message: '수업이 삭제되었습니다.',
    });
  } catch (error) {
    console.error('Lesson DELETE error:', error);
    return NextResponse.json(
      { error: '수업 삭제 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
