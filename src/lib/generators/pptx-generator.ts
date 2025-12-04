import PptxGenJS from 'pptxgenjs';
import type { PPTXContent, PPTXSlide } from '@/types/material';
import type { Lesson } from '@/types/lesson';
import { CBI_STAGES, type CBIStageId } from '@/lib/constants/cbi-stages';

// 슬라이드 색상 테마 - 더 세련된 컬러
const THEME = {
  primary: '4F46E5', // indigo-600
  secondary: '7C3AED', // purple-600
  accent: '06B6D4', // cyan-500
  success: '10B981', // emerald-500
  warning: 'F59E0B', // amber-500
  text: '1F2937', // gray-800
  lightText: '6B7280', // gray-500
  white: 'FFFFFF',
  lightBg: 'F3F4F6', // gray-100
  // 단계별 색상
  engage: 'EC4899', // pink-500
  focus: '8B5CF6', // violet-500
  investigate: '3B82F6', // blue-500
  organize: '14B8A6', // teal-500
  generalize: 'F97316', // orange-500
  transfer: '84CC16', // lime-500
  reflect: '64748B', // slate-500
};

export async function generatePPTX(
  lesson: Lesson,
  pptxContent: PPTXContent
): Promise<Buffer> {
  const pptx = new PptxGenJS();

  // 프레젠테이션 설정
  pptx.author = 'CBI Lesson Designer';
  pptx.title = lesson.title;
  pptx.subject = `${lesson.grade}학년 ${lesson.subject_id}`;
  pptx.company = '전북형 개념기반탐구';

  // 슬라이드 마스터 정의
  pptx.defineSlideMaster({
    title: 'TITLE_SLIDE',
    background: { color: THEME.primary },
    objects: [
      {
        placeholder: {
          options: {
            name: 'title',
            type: 'title',
            x: 0.5,
            y: 2.5,
            w: 9,
            h: 1.5,
            fontSize: 44,
            fontFace: 'Malgun Gothic',
            color: THEME.white,
            bold: true,
            align: 'center',
          },
          text: '',
        },
      },
    ],
  });

  pptx.defineSlideMaster({
    title: 'CONTENT_SLIDE',
    background: { color: THEME.white },
    objects: [
      {
        rect: {
          x: 0,
          y: 0,
          w: '100%',
          h: 0.8,
          fill: { color: THEME.primary },
        },
      },
    ],
  });

  // 슬라이드 생성
  for (const slideData of pptxContent.slides) {
    await createSlide(pptx, slideData, lesson);
  }

  // Buffer로 반환
  const data = await pptx.write({ outputType: 'nodebuffer' });
  return data as Buffer;
}

async function createSlide(
  pptx: PptxGenJS,
  slideData: PPTXSlide,
  lesson: Lesson
): Promise<void> {
  const slide = pptx.addSlide();

  // 레이아웃에 따른 분기 처리
  if (slideData.layout === 'two_column') {
    createTwoColumnSlide(slide, slideData);
  } else if (slideData.layout === 'image_text') {
    createImageTextSlide(slide, slideData);
  } else {
    // 기존 타입 기반 처리
    switch (slideData.type) {
      case 'title':
        createTitleSlide(slide, slideData, lesson);
        break;
      case 'objectives':
        createObjectivesSlide(slide, slideData, lesson);
        break;
      case 'concepts':
        createConceptsSlide(slide, slideData, lesson);
        break;
      case 'stage':
        createStageSlide(slide, slideData);
        break;
      case 'activity':
        createActivitySlide(slide, slideData);
        break;
      case 'question':
        createQuestionSlide(slide, slideData);
        break;
      case 'summary':
        createSummarySlide(slide, slideData, lesson);
        break;
      case 'reflection':
        createReflectionSlide(slide, slideData);
        break;
      default:
        createContentSlide(slide, slideData);
    }
  }

  // 슬라이드 노트 추가 (이미지 설명 포함)
  let notes = slideData.notes || '';
  if (slideData.imageDescription) {
    notes += `\n\n[이미지 제안] ${slideData.imageDescription}`;
  }
  if (notes) {
    slide.addNotes(notes);
  }
}

// 단계별 색상 가져오기
function getStageColor(stage?: string): string {
  if (!stage) return THEME.primary;
  const stageColors: Record<string, string> = {
    engage: THEME.engage,
    focus: THEME.focus,
    investigate: THEME.investigate,
    organize: THEME.organize,
    generalize: THEME.generalize,
    transfer: THEME.transfer,
    reflect: THEME.reflect,
  };
  return stageColors[stage] || THEME.primary;
}

// 두 열 레이아웃 슬라이드
function createTwoColumnSlide(slide: PptxGenJS.Slide, slideData: PPTXSlide): void {
  const stageColor = getStageColor(slideData.stage);

  // 헤더
  addColoredHeader(slide, slideData.title, stageColor);

  // 왼쪽 열 배경
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.3,
    y: 1.1,
    w: 4.5,
    h: 3.8,
    fill: { color: 'F8FAFC' }, // slate-50
    line: { color: stageColor, width: 2 },
  });

  // 오른쪽 열 배경
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 5.2,
    y: 1.1,
    w: 4.5,
    h: 3.8,
    fill: { color: 'F8FAFC' }, // slate-50
    line: { color: stageColor, width: 2 },
  });

  // 왼쪽 열 내용
  const leftContent = slideData.leftContent || slideData.content?.slice(0, Math.ceil(slideData.content.length / 2)) || [];
  if (leftContent.length > 0) {
    const leftItems = leftContent.map((item) => ({
      text: `• ${item}`,
      options: {
        bullet: false,
        fontSize: 16,
        fontFace: 'Malgun Gothic',
        color: THEME.text,
        breakLine: true,
        paraSpaceAfter: 8,
      },
    }));
    slide.addText(leftItems, {
      x: 0.5,
      y: 1.3,
      w: 4.1,
      h: 3.4,
      valign: 'top',
    });
  }

  // 오른쪽 열 내용
  const rightContent = slideData.rightContent || slideData.content?.slice(Math.ceil(slideData.content.length / 2)) || [];
  if (rightContent.length > 0) {
    const rightItems = rightContent.map((item) => ({
      text: `• ${item}`,
      options: {
        bullet: false,
        fontSize: 16,
        fontFace: 'Malgun Gothic',
        color: THEME.text,
        breakLine: true,
        paraSpaceAfter: 8,
      },
    }));
    slide.addText(rightItems, {
      x: 5.4,
      y: 1.3,
      w: 4.1,
      h: 3.4,
      valign: 'top',
    });
  }

  // 이미지 설명 힌트 (하단)
  if (slideData.imageDescription) {
    slide.addText(`💡 ${slideData.imageDescription}`, {
      x: 0.3,
      y: 5,
      w: 9.4,
      h: 0.4,
      fontSize: 10,
      fontFace: 'Malgun Gothic',
      color: THEME.lightText,
      italic: true,
      align: 'center',
    });
  }
}

// 이미지 + 텍스트 레이아웃 슬라이드
function createImageTextSlide(slide: PptxGenJS.Slide, slideData: PPTXSlide): void {
  const stageColor = getStageColor(slideData.stage);

  // 헤더
  addColoredHeader(slide, slideData.title, stageColor);

  // 왼쪽: 이미지 플레이스홀더 영역
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.3,
    y: 1.1,
    w: 4.5,
    h: 3.8,
    fill: { color: 'E2E8F0' }, // slate-200
    line: { color: stageColor, width: 2, dashType: 'dash' },
  });

  // 이미지 힌트 텍스트
  const imageHint = slideData.imageDescription || '이미지를 추가하세요';
  slide.addText(`🖼️\n${imageHint}`, {
    x: 0.5,
    y: 1.8,
    w: 4.1,
    h: 2.4,
    fontSize: 12,
    fontFace: 'Malgun Gothic',
    color: THEME.lightText,
    align: 'center',
    valign: 'middle',
    italic: true,
  });

  // 오른쪽: 텍스트 내용
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 5.2,
    y: 1.1,
    w: 4.5,
    h: 3.8,
    fill: { color: 'FFFFFF' },
    line: { color: stageColor, width: 1 },
  });

  if (slideData.content && slideData.content.length > 0) {
    const contentItems = slideData.content.map((item) => ({
      text: `• ${item}`,
      options: {
        bullet: false,
        fontSize: 16,
        fontFace: 'Malgun Gothic',
        color: THEME.text,
        breakLine: true,
        paraSpaceAfter: 10,
      },
    }));

    slide.addText(contentItems, {
      x: 5.4,
      y: 1.3,
      w: 4.1,
      h: 3.4,
      valign: 'top',
    });
  }
}

// 성찰 슬라이드
function createReflectionSlide(slide: PptxGenJS.Slide, slideData: PPTXSlide): void {
  // 배경 그라데이션 효과
  slide.background = { color: 'F8FAFC' };

  addColoredHeader(slide, slideData.title, THEME.reflect);

  // 성찰 질문 박스들
  const prompts = slideData.content || [
    '예전에는 _____ 라고 생각했어요.',
    '지금은 _____ 라고 생각해요.',
    '더 알고 싶은 것: _____',
  ];

  prompts.forEach((prompt, i) => {
    // 배경 박스
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.5,
      y: 1.2 + i * 1.3,
      w: 9,
      h: 1.1,
      fill: { color: 'FFFFFF' },
      line: { color: THEME.reflect, width: 1 },
      shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.2, color: '000000' },
    });

    // 숫자 원
    slide.addShape(pptx.ShapeType.ellipse, {
      x: 0.7,
      y: 1.35 + i * 1.3,
      w: 0.6,
      h: 0.6,
      fill: { color: THEME.reflect },
    });

    slide.addText(`${i + 1}`, {
      x: 0.7,
      y: 1.35 + i * 1.3,
      w: 0.6,
      h: 0.6,
      fontSize: 14,
      fontFace: 'Malgun Gothic',
      color: THEME.white,
      bold: true,
      align: 'center',
      valign: 'middle',
    });

    // 프롬프트 텍스트
    slide.addText(prompt, {
      x: 1.5,
      y: 1.3 + i * 1.3,
      w: 7.8,
      h: 0.9,
      fontSize: 18,
      fontFace: 'Malgun Gothic',
      color: THEME.text,
      valign: 'middle',
    });
  });
}

function createTitleSlide(
  slide: PptxGenJS.Slide,
  slideData: PPTXSlide,
  lesson: Lesson
): void {
  // 배경 - 그라데이션 효과
  slide.background = { color: THEME.primary };

  // 장식 도형
  slide.addShape(pptx.ShapeType.ellipse, {
    x: -1,
    y: -1,
    w: 4,
    h: 4,
    fill: { color: THEME.secondary },
    line: { color: THEME.secondary },
  });

  slide.addShape(pptx.ShapeType.ellipse, {
    x: 7.5,
    y: 3.5,
    w: 3,
    h: 3,
    fill: { color: THEME.accent },
    line: { color: THEME.accent },
  });

  // 제목
  slide.addText(slideData.title, {
    x: 0.5,
    y: 2,
    w: 9,
    h: 1.5,
    fontSize: 44,
    fontFace: 'Malgun Gothic',
    color: THEME.white,
    bold: true,
    align: 'center',
  });

  // 부제목
  const subtitle = slideData.subtitle || `${lesson.grade}학년 ${lesson.subject_id}`;
  slide.addText(subtitle, {
    x: 0.5,
    y: 3.5,
    w: 9,
    h: 0.6,
    fontSize: 24,
    fontFace: 'Malgun Gothic',
    color: THEME.white,
    align: 'center',
  });

  // 하단 정보
  const footer = slideData.footer || '전북형 개념기반탐구 수업';
  slide.addText(footer, {
    x: 0.5,
    y: 5,
    w: 9,
    h: 0.4,
    fontSize: 16,
    fontFace: 'Malgun Gothic',
    color: THEME.white,
    align: 'center',
  });
}

function createObjectivesSlide(
  slide: PptxGenJS.Slide,
  slideData: PPTXSlide,
  lesson: Lesson
): void {
  // 헤더
  addHeader(slide, '📎 오늘의 학습 목표');

  // 목표 목록
  const objectives = lesson.learning_objectives.map((obj, i) => ({
    text: `${i + 1}. ${obj}`,
    options: {
      bullet: false,
      fontSize: 20,
      fontFace: 'Malgun Gothic',
      color: THEME.text,
      breakLine: true,
      paraSpaceAfter: 12,
    },
  }));

  slide.addText(objectives, {
    x: 0.5,
    y: 1.2,
    w: 9,
    h: 4,
    valign: 'top',
  });

  // 핵심 개념 배지
  if (lesson.core_concepts.length > 0) {
    slide.addText('핵심 개념:', {
      x: 0.5,
      y: 4.5,
      w: 2,
      h: 0.4,
      fontSize: 14,
      fontFace: 'Malgun Gothic',
      color: THEME.lightText,
      bold: true,
    });

    lesson.core_concepts.forEach((concept, i) => {
      slide.addText(concept, {
        x: 0.5 + i * 2,
        y: 4.9,
        w: 1.8,
        h: 0.35,
        fontSize: 12,
        fontFace: 'Malgun Gothic',
        color: THEME.white,
        fill: { color: THEME.secondary },
        align: 'center',
        valign: 'middle',
      });
    });
  }
}

function createConceptsSlide(
  slide: PptxGenJS.Slide,
  slideData: PPTXSlide,
  lesson: Lesson
): void {
  addHeader(slide, '💡 핵심 아이디어 (일반화)');

  // 빅 아이디어 박스들
  lesson.big_ideas.forEach((idea, i) => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.5,
      y: 1.2 + i * 1.4,
      w: 9,
      h: 1.2,
      fill: { color: 'EEF2FF' }, // indigo-50
      line: { color: THEME.primary, width: 2 },
    });

    slide.addText(`"${idea}"`, {
      x: 0.7,
      y: 1.3 + i * 1.4,
      w: 8.6,
      h: 1,
      fontSize: 18,
      fontFace: 'Malgun Gothic',
      color: THEME.text,
      align: 'center',
      valign: 'middle',
      italic: true,
    });
  });
}

function createStageSlide(slide: PptxGenJS.Slide, slideData: PPTXSlide): void {
  const stageId = slideData.stage as CBIStageId;
  const stageInfo = stageId ? CBI_STAGES[stageId] : null;
  const stageColor = getStageColor(slideData.stage);

  // 스테이지 색상 헤더
  if (stageInfo) {
    addColoredHeader(slide, `${stageInfo.emoji} ${stageInfo.name} (${stageInfo.nameEn})`, stageInfo.color.replace('#', ''));
  } else {
    addColoredHeader(slide, slideData.title, stageColor);
  }

  // 배경 장식
  slide.addShape(pptx.ShapeType.ellipse, {
    x: 8,
    y: 4,
    w: 2.5,
    h: 2.5,
    fill: { color: stageColor },
    line: { color: stageColor },
  });

  // 내용 박스
  if (slideData.content && slideData.content.length > 0) {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.3,
      y: 1.1,
      w: 7.5,
      h: 3.8,
      fill: { color: 'FFFFFF' },
      line: { color: stageColor, width: 2 },
      shadow: { type: 'outer', blur: 4, offset: 2, angle: 45, opacity: 0.15, color: '000000' },
    });

    const contentItems = slideData.content.map((item, i) => ({
      text: `${i + 1}. ${item}`,
      options: {
        bullet: false,
        fontSize: 18,
        fontFace: 'Malgun Gothic',
        color: THEME.text,
        breakLine: true,
        paraSpaceAfter: 12,
      },
    }));

    slide.addText(contentItems, {
      x: 0.5,
      y: 1.3,
      w: 7.1,
      h: 3.4,
      valign: 'top',
    });
  }

  // 이미지 설명 (있는 경우)
  if (slideData.imageDescription) {
    slide.addText(`💡 ${slideData.imageDescription}`, {
      x: 0.3,
      y: 5,
      w: 9.4,
      h: 0.4,
      fontSize: 10,
      fontFace: 'Malgun Gothic',
      color: THEME.lightText,
      italic: true,
    });
  }
}

function createActivitySlide(slide: PptxGenJS.Slide, slideData: PPTXSlide): void {
  const stageColor = getStageColor(slideData.stage);

  // 단계별 색상 헤더
  addColoredHeader(slide, slideData.title, stageColor);

  // 활동 설명
  if (slideData.content && slideData.content.length > 0) {
    // 메인 활동 설명 박스
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.3,
      y: 1.1,
      w: 9.4,
      h: 1.8,
      fill: { color: 'FFFFFF' },
      line: { color: stageColor, width: 2 },
      shadow: { type: 'outer', blur: 3, offset: 2, angle: 45, opacity: 0.1, color: '000000' },
    });

    // 아이콘
    slide.addText('📋', {
      x: 0.5,
      y: 1.3,
      w: 0.6,
      h: 0.6,
      fontSize: 24,
    });

    slide.addText(slideData.content[0], {
      x: 1.2,
      y: 1.3,
      w: 8.3,
      h: 1.4,
      fontSize: 20,
      fontFace: 'Malgun Gothic',
      color: THEME.text,
      valign: 'top',
    });

    // 추가 지시사항
    if (slideData.content.length > 1) {
      slideData.content.slice(1).forEach((item, i) => {
        // 체크 아이콘 원
        slide.addShape(pptx.ShapeType.ellipse, {
          x: 0.5,
          y: 3.1 + i * 0.6,
          w: 0.35,
          h: 0.35,
          fill: { color: stageColor },
        });

        slide.addText('✓', {
          x: 0.5,
          y: 3.1 + i * 0.6,
          w: 0.35,
          h: 0.35,
          fontSize: 10,
          fontFace: 'Malgun Gothic',
          color: THEME.white,
          align: 'center',
          valign: 'middle',
        });

        slide.addText(item, {
          x: 1,
          y: 3.05 + i * 0.6,
          w: 8.5,
          h: 0.5,
          fontSize: 16,
          fontFace: 'Malgun Gothic',
          color: THEME.text,
          valign: 'middle',
        });
      });
    }
  }

  // 이미지 설명 (있는 경우)
  if (slideData.imageDescription) {
    slide.addText(`💡 ${slideData.imageDescription}`, {
      x: 0.3,
      y: 5,
      w: 9.4,
      h: 0.4,
      fontSize: 10,
      fontFace: 'Malgun Gothic',
      color: THEME.lightText,
      italic: true,
    });
  }
}

function createQuestionSlide(slide: PptxGenJS.Slide, slideData: PPTXSlide): void {
  // 질문 배경
  slide.background = { color: 'FEF3C7' }; // amber-100

  slide.addText('🤔', {
    x: 4.25,
    y: 1,
    w: 1.5,
    h: 1,
    fontSize: 60,
    align: 'center',
  });

  // 질문
  slide.addText(slideData.title, {
    x: 0.5,
    y: 2.2,
    w: 9,
    h: 2,
    fontSize: 32,
    fontFace: 'Malgun Gothic',
    color: THEME.text,
    bold: true,
    align: 'center',
    valign: 'middle',
  });

  // 힌트나 추가 내용
  if (slideData.content && slideData.content.length > 0) {
    slide.addText(slideData.content.join('\n'), {
      x: 0.5,
      y: 4.2,
      w: 9,
      h: 1,
      fontSize: 16,
      fontFace: 'Malgun Gothic',
      color: THEME.lightText,
      align: 'center',
    });
  }
}

function createSummarySlide(
  slide: PptxGenJS.Slide,
  slideData: PPTXSlide,
  lesson: Lesson
): void {
  addHeader(slide, '📝 오늘 배운 내용');

  // 핵심 개념 요약
  slide.addText('핵심 개념', {
    x: 0.5,
    y: 1.2,
    w: 4,
    h: 0.4,
    fontSize: 16,
    fontFace: 'Malgun Gothic',
    color: THEME.primary,
    bold: true,
  });

  lesson.core_concepts.forEach((concept, i) => {
    slide.addText(`• ${concept}`, {
      x: 0.5,
      y: 1.7 + i * 0.4,
      w: 4,
      h: 0.4,
      fontSize: 14,
      fontFace: 'Malgun Gothic',
      color: THEME.text,
    });
  });

  // 일반화 요약
  slide.addText('일반화', {
    x: 5,
    y: 1.2,
    w: 4.5,
    h: 0.4,
    fontSize: 16,
    fontFace: 'Malgun Gothic',
    color: THEME.secondary,
    bold: true,
  });

  if (lesson.big_ideas.length > 0) {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5,
      y: 1.6,
      w: 4.5,
      h: 2,
      fill: { color: 'FAF5FF' }, // purple-50
      line: { color: THEME.secondary, width: 1 },
    });

    slide.addText(`"${lesson.big_ideas[0]}"`, {
      x: 5.2,
      y: 1.8,
      w: 4.1,
      h: 1.6,
      fontSize: 14,
      fontFace: 'Malgun Gothic',
      color: THEME.text,
      italic: true,
      valign: 'middle',
      align: 'center',
    });
  }

  // 다음 시간 안내 (있을 경우)
  if (slideData.content && slideData.content.length > 0) {
    slide.addText('다음 시간 예고', {
      x: 0.5,
      y: 4.2,
      w: 9,
      h: 0.4,
      fontSize: 14,
      fontFace: 'Malgun Gothic',
      color: THEME.lightText,
      bold: true,
    });

    slide.addText(slideData.content.join(', '), {
      x: 0.5,
      y: 4.6,
      w: 9,
      h: 0.5,
      fontSize: 14,
      fontFace: 'Malgun Gothic',
      color: THEME.text,
    });
  }
}

function createContentSlide(slide: PptxGenJS.Slide, slideData: PPTXSlide): void {
  addHeader(slide, slideData.title);

  if (slideData.content) {
    const contentItems = slideData.content.map((item) => ({
      text: `• ${item}`,
      options: {
        bullet: false,
        fontSize: 18,
        fontFace: 'Malgun Gothic',
        color: THEME.text,
        breakLine: true,
        paraSpaceAfter: 10,
      },
    }));

    slide.addText(contentItems, {
      x: 0.5,
      y: 1.2,
      w: 9,
      h: 4,
      valign: 'top',
    });
  }
}

function addHeader(slide: PptxGenJS.Slide, title: string): void {
  addColoredHeader(slide, title, THEME.primary);
}

function addColoredHeader(slide: PptxGenJS.Slide, title: string, color: string): void {
  // 헤더 배경
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: '100%',
    h: 0.9,
    fill: { color: color },
  });

  // 작은 악센트 바
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0.85,
    w: '100%',
    h: 0.05,
    fill: { color: THEME.accent },
  });

  // 헤더 텍스트
  slide.addText(title, {
    x: 0.5,
    y: 0.15,
    w: 9,
    h: 0.6,
    fontSize: 24,
    fontFace: 'Malgun Gothic',
    color: THEME.white,
    bold: true,
  });
}

// PptxGenJS 인스턴스 (전역 접근용)
const pptx = new PptxGenJS();

export function generateDefaultSlides(lesson: Lesson): PPTXSlide[] {
  const slides: PPTXSlide[] = [];

  // 1. 타이틀 슬라이드
  slides.push({
    id: 'slide-1',
    type: 'title',
    title: lesson.title,
    content: [],
    order: 1,
  });

  // 2. 학습 목표 슬라이드
  slides.push({
    id: 'slide-2',
    type: 'objectives',
    title: '오늘의 학습 목표',
    content: lesson.learning_objectives,
    order: 2,
  });

  // 3. 핵심 개념 슬라이드
  slides.push({
    id: 'slide-3',
    type: 'concepts',
    title: '핵심 아이디어',
    content: lesson.big_ideas,
    order: 3,
  });

  // 4-10. 각 단계별 슬라이드
  let slideOrder = 4;
  const stageIds: CBIStageId[] = [
    'engage',
    'focus',
    'investigate',
    'organize',
    'generalize',
    'transfer',
    'reflect',
  ];

  for (const stageId of stageIds) {
    const stageKey = `stage_${stageId}` as keyof Lesson;
    const stageData = lesson[stageKey] as Lesson['stage_engage'];
    const stageInfo = CBI_STAGES[stageId];

    if (stageData) {
      // 단계 소개 슬라이드
      slides.push({
        id: `slide-${slideOrder}`,
        type: 'stage',
        stage: stageId,
        title: `${stageInfo.name} (${stageInfo.nameEn})`,
        content: stageData.objectives || [],
        order: slideOrder,
        notes: `이 단계의 목표: ${stageData.objectives?.join(', ')}`,
      });
      slideOrder++;

      // 활동 슬라이드들
      if (stageData.activities) {
        for (const activity of stageData.activities) {
          slides.push({
            id: `slide-${slideOrder}`,
            type: 'activity',
            stage: stageId,
            title: activity.title,
            content: [activity.description, `소요시간: ${activity.duration}분`],
            order: slideOrder,
            notes: `활동 유형: ${activity.type}`,
          });
          slideOrder++;
        }
      }
    }
  }

  // 마무리 슬라이드
  slides.push({
    id: `slide-${slideOrder}`,
    type: 'summary',
    title: '오늘 배운 내용 정리',
    content: [],
    order: slideOrder,
  });

  return slides;
}
