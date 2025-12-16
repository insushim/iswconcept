import { NextRequest, NextResponse } from 'next/server';
import { recommendConceptLenses, CONCEPT_LENSES, CONCEPT_LENS_CATEGORIES, type ConceptLens } from '@/lib/constants/concept-lens';

export async function POST(req: NextRequest) {
  try {
    const { subject, unitName, objectives } = await req.json();

    if (!subject || !unitName) {
      return NextResponse.json(
        { error: '과목과 단원명은 필수입니다.' },
        { status: 400 }
      );
    }

    // 3개의 추천 개념 렌즈 반환
    const recommendedLenses = recommendConceptLenses(
      subject,
      unitName,
      objectives || [],
      3
    );

    return NextResponse.json({
      success: true,
      recommendedLenses,
      allLenses: CONCEPT_LENSES,
      categories: CONCEPT_LENS_CATEGORIES,
    });
  } catch (error) {
    console.error('Concept lens suggestion error:', error);
    return NextResponse.json(
      { error: '개념 렌즈 추천 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// GET: 전체 개념 렌즈 목록 조회
export async function GET() {
  return NextResponse.json({
    success: true,
    lenses: CONCEPT_LENSES,
    categories: CONCEPT_LENS_CATEGORIES,
  });
}
