import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  ShadingType,
  PageBreak,
  Header,
  Footer,
  PageNumber,
  VerticalAlign,
  TableLayoutType,
} from 'docx';
import type { Lesson } from '@/types/lesson';
import type { TeachingScriptContent, WorksheetContent, LessonPlanDocxContent } from '@/types/material';
import { CBI_STAGES, type CBIStageId } from '@/lib/constants/cbi-stages';

// 색상 정의
const COLORS = {
  primary: '4F46E5',
  secondary: '7C3AED',
  text: '1F2937',
  lightText: '6B7280',
  background: 'F3F4F6',
};

// 교수학습 지도안 생성 (도입-전개-정리 테이블 형식)
export async function generateLessonPlanDocx(
  lesson: Lesson,
  lessonPlanContent?: LessonPlanDocxContent
): Promise<Buffer> {
  const allChildren: (Paragraph | Table)[] = [];

  // lessonPlanContent가 있으면 차시별 도입-전개-정리 테이블 형식으로 생성
  if (lessonPlanContent?.lessonPlans && lessonPlanContent.lessonPlans.length > 0) {
    for (let i = 0; i < lessonPlanContent.lessonPlans.length; i++) {
      const plan = lessonPlanContent.lessonPlans[i];

      // 차시 제목
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${plan.periodRange} - ${plan.stageName}(${plan.stageNameEn})`,
              bold: true,
              size: 28,
              color: COLORS.primary,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
          spacing: { before: i === 0 ? 0 : 400, after: 200 },
        })
      );

      // 기본 정보 테이블
      allChildren.push(createPeriodInfoTable(lesson, plan));
      allChildren.push(new Paragraph({ spacing: { before: 200 } }));

      // 학습목표
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: '학습목표', bold: true, size: 22 }),
          ],
          spacing: { before: 100, after: 100 },
        })
      );
      for (const obj of plan.learningObjectives) {
        allChildren.push(
          new Paragraph({
            children: [new TextRun({ text: `• ${obj}`, size: 20 })],
            indent: { left: 360 },
          })
        );
      }

      allChildren.push(new Paragraph({ spacing: { before: 200 } }));

      // 도입-전개-정리 테이블
      allChildren.push(createLessonPhaseTable(plan));

      // 평가 정보
      if (plan.assessment) {
        allChildren.push(new Paragraph({ spacing: { before: 200 } }));
        allChildren.push(
          new Paragraph({
            children: [
              new TextRun({ text: `평가: ${plan.assessment.type}`, bold: true, size: 20 }),
            ],
          })
        );
        for (const criterion of plan.assessment.criteria) {
          allChildren.push(
            new Paragraph({
              children: [new TextRun({ text: `• ${criterion}`, size: 18 })],
              indent: { left: 360 },
            })
          );
        }
      }

      // 차시 간 구분선 (페이지 나누기 대신 구분선 사용, 3차시마다 페이지 브레이크)
      if (i < lessonPlanContent.lessonPlans.length - 1) {
        // 3차시마다만 페이지 브레이크 (예: 3, 6, 9차시 후)
        if ((i + 1) % 3 === 0) {
          allChildren.push(
            new Paragraph({
              children: [new PageBreak()],
            })
          );
        } else {
          // 그 외에는 구분선만
          allChildren.push(
            new Paragraph({
              spacing: { before: 300, after: 100 },
              border: {
                bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORS.lightText },
              },
            })
          );
        }
      }
    }
  } else {
    // 기존 형식 (lessonPlanContent가 없는 경우)
    allChildren.push(
      new Paragraph({
        children: [
          new TextRun({
            text: lesson.title,
            bold: true,
            size: 36,
            color: COLORS.primary,
          }),
        ],
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
      })
    );

    allChildren.push(createInfoTable(lesson));
    allChildren.push(new Paragraph({ spacing: { before: 400 } }));

    // 학습 목표
    allChildren.push(createSectionTitle('학습 목표'));
    for (let i = 0; i < lesson.learning_objectives.length; i++) {
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: `${i + 1}. ${lesson.learning_objectives[i]}`, size: 22 }),
          ],
          spacing: { before: 100, after: 100 },
          indent: { left: 360 },
        })
      );
    }

    allChildren.push(new Paragraph({ spacing: { before: 300 } }));

    // 핵심 개념
    allChildren.push(createSectionTitle('핵심 개념'));
    allChildren.push(
      new Paragraph({
        children: lesson.core_concepts.map(
          (concept) =>
            new TextRun({
              text: ` ${concept} `,
              bold: true,
              shading: {
                type: ShadingType.CLEAR,
                fill: 'EEF2FF',
              },
            })
        ),
        spacing: { before: 100, after: 200 },
        indent: { left: 360 },
      })
    );

    allChildren.push(new Paragraph({ spacing: { before: 300 } }));

    // 핵심 아이디어
    allChildren.push(createSectionTitle('핵심 아이디어 (일반화)'));
    for (const idea of lesson.big_ideas) {
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `"${idea}"`,
              italics: true,
              size: 22,
            }),
          ],
          spacing: { before: 100, after: 100 },
          indent: { left: 360 },
          shading: {
            type: ShadingType.CLEAR,
            fill: 'FAF5FF',
          },
        })
      );
    }

    allChildren.push(new Paragraph({ spacing: { before: 300 } }));

    // 안내 질문
    allChildren.push(createSectionTitle('안내 질문'));
    allChildren.push(
      new Paragraph({
        children: [new TextRun({ text: '사실적 질문', bold: true, size: 20 })],
        indent: { left: 360 },
      })
    );
    for (const q of lesson.factual_questions) {
      allChildren.push(
        new Paragraph({
          children: [new TextRun({ text: `• ${q}`, size: 20 })],
          indent: { left: 720 },
        })
      );
    }
    allChildren.push(
      new Paragraph({
        children: [new TextRun({ text: '개념적 질문', bold: true, size: 20 })],
        spacing: { before: 200 },
        indent: { left: 360 },
      })
    );
    for (const q of lesson.conceptual_questions) {
      allChildren.push(
        new Paragraph({
          children: [new TextRun({ text: `• ${q}`, size: 20 })],
          indent: { left: 720 },
        })
      );
    }
    allChildren.push(
      new Paragraph({
        children: [new TextRun({ text: '논쟁적 질문', bold: true, size: 20 })],
        spacing: { before: 200 },
        indent: { left: 360 },
      })
    );
    for (const q of lesson.debatable_questions) {
      allChildren.push(
        new Paragraph({
          children: [new TextRun({ text: `• ${q}`, size: 20 })],
          indent: { left: 720 },
        })
      );
    }

    allChildren.push(new Paragraph({ children: [new PageBreak()] }));
    allChildren.push(createSectionTitle('7단계 수업 전개'));
    allChildren.push(...createStagesSections(lesson));
    allChildren.push(new Paragraph({ children: [new PageBreak()] }));
    allChildren.push(createSectionTitle('평가 계획'));
    if (lesson.assessment_plan) {
      allChildren.push(...createAssessmentSection(lesson.assessment_plan));
    }
  }

  const doc = new Document({
    creator: 'CBI Lesson Designer',
    title: `${lesson.title} - 교수학습지도안`,
    description: '전북형 개념기반탐구 교수학습지도안',
    styles: {
      default: {
        document: {
          run: {
            font: 'Malgun Gothic',
            size: 22,
          },
        },
      },
    },
    sections: [
      {
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: '전북형 개념기반탐구 교수학습지도안',
                    size: 18,
                    color: COLORS.lightText,
                  }),
                ],
                alignment: AlignmentType.RIGHT,
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    children: [PageNumber.CURRENT],
                  }),
                  new TextRun({ text: ' / ' }),
                  new TextRun({
                    children: [PageNumber.TOTAL_PAGES],
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
          }),
        },
        children: allChildren,
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// 차시별 기본정보 테이블 - 100% 너비 사용
function createPeriodInfoTable(lesson: Lesson, plan: LessonPlanDocxContent['lessonPlans'][0]): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({
        children: [
          createPercentCell('학년/과목', true, 15),
          createPercentCell(`${lesson.grade}학년 ${lesson.subject_id}`, false, 25),
          createPercentCell('단원', true, 12),
          createPercentCell(lesson.unit_id || lesson.title, false, 48),
        ],
      }),
      new TableRow({
        children: [
          createPercentCell('차시', true, 15),
          createPercentCell(plan.periodRange, false, 25),
          createPercentCell('학습주제', true, 12),
          createPercentCell(plan.topic, false, 48),
        ],
      }),
    ],
  });
}

// 퍼센트 기반 셀 생성
function createPercentCell(text: string, isHeader: boolean, widthPercent: number): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text,
            bold: isHeader,
            size: 20,
          }),
        ],
        alignment: isHeader ? AlignmentType.CENTER : AlignmentType.LEFT,
      }),
    ],
    shading: {
      type: ShadingType.CLEAR,
      fill: isHeader ? 'F3F4F6' : 'FFFFFF',
    },
    width: {
      size: widthPercent,
      type: WidthType.PERCENTAGE,
    },
    verticalAlign: VerticalAlign.CENTER,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
    },
  });
}

// 도입-전개-정리 테이블 생성 - 100% 너비 사용
function createLessonPhaseTable(plan: LessonPlanDocxContent['lessonPlans'][0]): Table {
  const rows: TableRow[] = [];

  // 헤더 행 - 퍼센트로 지정
  rows.push(
    new TableRow({
      children: [
        createHeaderCellPercent('단계', 10),
        createHeaderCellPercent('시간', 8),
        createHeaderCellPercent('교수·학습 활동', 55),
        createHeaderCellPercent('자료 및 유의점', 27),
      ],
    })
  );

  // 도입 - 퍼센트 기반 너비 사용
  const introActivities = plan.introduction?.activities || [];
  if (introActivities.length > 0) {
    for (let i = 0; i < introActivities.length; i++) {
      const activity = introActivities[i];
      rows.push(
        new TableRow({
          children: [
            i === 0 ? createMergeCell('도입', introActivities.length, 10, 'E8F5E9') : null,
            i === 0 ? createMergeCell(`${plan.introduction?.duration || 5}분`, introActivities.length, 8) : null,
            createActivityCell(activity),
            createMaterialCell(activity.materials),
          ].filter(Boolean) as TableCell[],
        })
      );
    }
  } else {
    rows.push(
      new TableRow({
        children: [
          createPhaseCell('도입', 'E8F5E9'),
          createPercentCell(`${plan.introduction?.duration || 5}분`, false, 8),
          createPercentCell('', false, 55),
          createPercentCell('', false, 27),
        ],
      })
    );
  }

  // 전개 - 퍼센트 기반 너비 사용
  const devActivities = plan.development?.activities || [];
  if (devActivities.length > 0) {
    for (let i = 0; i < devActivities.length; i++) {
      const activity = devActivities[i];
      rows.push(
        new TableRow({
          children: [
            i === 0 ? createMergeCell('전개', devActivities.length, 10, 'E3F2FD') : null,
            i === 0 ? createMergeCell(`${plan.development?.duration || 30}분`, devActivities.length, 8) : null,
            createActivityCell(activity),
            createMaterialCell(activity.materials),
          ].filter(Boolean) as TableCell[],
        })
      );
    }
  } else {
    rows.push(
      new TableRow({
        children: [
          createPhaseCell('전개', 'E3F2FD'),
          createPercentCell(`${plan.development?.duration || 30}분`, false, 8),
          createPercentCell('', false, 55),
          createPercentCell('', false, 27),
        ],
      })
    );
  }

  // 정리 - 퍼센트 기반 너비 사용
  const concActivities = plan.conclusion?.activities || [];
  if (concActivities.length > 0) {
    for (let i = 0; i < concActivities.length; i++) {
      const activity = concActivities[i];
      rows.push(
        new TableRow({
          children: [
            i === 0 ? createMergeCell('정리', concActivities.length, 10, 'FFF3E0') : null,
            i === 0 ? createMergeCell(`${plan.conclusion?.duration || 5}분`, concActivities.length, 8) : null,
            createActivityCell(activity),
            createMaterialCell(activity.materials),
          ].filter(Boolean) as TableCell[],
        })
      );
    }
  } else {
    rows.push(
      new TableRow({
        children: [
          createPhaseCell('정리', 'FFF3E0'),
          createPercentCell(`${plan.conclusion?.duration || 5}분`, false, 8),
          createPercentCell('', false, 55),
          createPercentCell('', false, 27),
        ],
      })
    );
  }

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows,
  });
}

// 헤더 셀 생성 - 퍼센트 기반
function createHeaderCellPercent(text: string, widthPercent: number): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold: true, size: 20 })],
        alignment: AlignmentType.CENTER,
      }),
    ],
    shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    verticalAlign: VerticalAlign.CENTER,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
    },
  });
}

// 단계 셀 생성 (색상 포함) - 퍼센트 기반
function createPhaseCell(text: string, fillColor: string): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold: true, size: 20 })],
        alignment: AlignmentType.CENTER,
      }),
    ],
    shading: { type: ShadingType.CLEAR, fill: fillColor },
    width: { size: 10, type: WidthType.PERCENTAGE },
    verticalAlign: VerticalAlign.CENTER,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
    },
  });
}

// 병합 셀 생성 - 퍼센트 기반
function createMergeCell(text: string, rowSpan: number, widthPercent: number, fillColor?: string): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun({ text, bold: true, size: 20 })],
        alignment: AlignmentType.CENTER,
      }),
    ],
    rowSpan,
    shading: fillColor ? { type: ShadingType.CLEAR, fill: fillColor } : undefined,
    width: { size: widthPercent, type: WidthType.PERCENTAGE },
    verticalAlign: VerticalAlign.CENTER,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
    },
  });
}

// 활동 셀 생성 - 퍼센트 기반
function createActivityCell(activity: LessonPlanDocxContent['lessonPlans'][0]['introduction']['activities'][0]): TableCell {
  const paragraphs: Paragraph[] = [];

  if (activity.activityName) {
    paragraphs.push(
      new Paragraph({
        children: [new TextRun({ text: `◆ ${activity.activityName}`, bold: true, size: 18 })],
        spacing: { after: 50 },
      })
    );
  }

  paragraphs.push(
    new Paragraph({
      children: [
        new TextRun({ text: '교사: ', bold: true, size: 18, color: COLORS.primary }),
        new TextRun({ text: activity.teacherActivity || '', size: 18 }),
      ],
      spacing: { after: 50 },
    })
  );

  paragraphs.push(
    new Paragraph({
      children: [
        new TextRun({ text: '학생: ', bold: true, size: 18, color: COLORS.secondary }),
        new TextRun({ text: activity.studentActivity || '', size: 18 }),
      ],
    })
  );

  return new TableCell({
    children: paragraphs,
    width: { size: 55, type: WidthType.PERCENTAGE },
    verticalAlign: VerticalAlign.TOP,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
    },
  });
}

// 자료 셀 생성 - 퍼센트 기반
function createMaterialCell(materials: string): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [new TextRun({ text: materials || '', size: 18 })],
      }),
    ],
    width: { size: 27, type: WidthType.PERCENTAGE },
    verticalAlign: VerticalAlign.TOP,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
    },
  });
}

// 수업 대본 생성 - lessonScript 형식 지원
export async function generateTeachingScriptDocx(
  lesson: Lesson,
  script: TeachingScriptContent
): Promise<Buffer> {
  const paragraphs: Paragraph[] = [];

  // lessonScript 형식 처리
  const lessonScript = script?.lessonScript;

  if (lessonScript) {
    // Opening
    if (lessonScript.opening) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: '도입',
              bold: true,
              size: 28,
              color: COLORS.primary,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 200 },
          shading: { type: ShadingType.CLEAR, fill: 'EEF2FF' },
        })
      );

      if (lessonScript.opening.greeting) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '인사: ', bold: true, size: 22, color: COLORS.primary }),
              new TextRun({ text: lessonScript.opening.greeting, size: 22 }),
            ],
            spacing: { before: 100, after: 100 },
            indent: { left: 360 },
          })
        );
      }

      if (lessonScript.opening.motivation) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '동기유발: ', bold: true, size: 22, color: COLORS.primary }),
              new TextRun({ text: lessonScript.opening.motivation, size: 22 }),
            ],
            spacing: { before: 100, after: 100 },
            indent: { left: 360 },
          })
        );
      }

      if (lessonScript.opening.objectiveShare) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '목표 안내: ', bold: true, size: 22, color: COLORS.primary }),
              new TextRun({ text: lessonScript.opening.objectiveShare, size: 22 }),
            ],
            spacing: { before: 100, after: 100 },
            indent: { left: 360 },
          })
        );
      }
    }

    // Stages
    if (lessonScript.stages && Array.isArray(lessonScript.stages)) {
      for (const stage of lessonScript.stages) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${stage.stageName || '단계'}`,
                bold: true,
                size: 26,
                color: COLORS.primary,
              }),
              new TextRun({
                text: stage.timing ? ` [${stage.timing}]` : '',
                size: 20,
                color: COLORS.lightText,
              }),
            ],
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 },
            shading: { type: ShadingType.CLEAR, fill: 'F0FDF4' },
          })
        );

        if (stage.sections && Array.isArray(stage.sections)) {
          for (const section of stage.sections) {
            // 활동 제목
            if (section.activity) {
              paragraphs.push(
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `▸ ${section.activity}`,
                      bold: true,
                      size: 22,
                      color: COLORS.secondary,
                    }),
                  ],
                  spacing: { before: 200, after: 100 },
                  indent: { left: 360 },
                })
              );
            }

            // 교사 발언
            if (section.teacherSays && Array.isArray(section.teacherSays)) {
              for (const say of section.teacherSays) {
                paragraphs.push(
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: say,
                        size: 22,
                      }),
                    ],
                    spacing: { before: 50, after: 50 },
                    indent: { left: 720 },
                    shading: { type: ShadingType.CLEAR, fill: 'EEF2FF' },
                  })
                );
              }
            }

            // 예상 학생 반응
            if (section.expectedStudentResponses && Array.isArray(section.expectedStudentResponses)) {
              paragraphs.push(
                new Paragraph({
                  children: [
                    new TextRun({
                      text: '예상 학생 반응:',
                      bold: true,
                      size: 20,
                      color: COLORS.secondary,
                    }),
                  ],
                  spacing: { before: 100 },
                  indent: { left: 720 },
                })
              );
              for (const response of section.expectedStudentResponses) {
                paragraphs.push(
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: response,
                        size: 20,
                        italics: true,
                      }),
                    ],
                    indent: { left: 1080 },
                    shading: { type: ShadingType.CLEAR, fill: 'FAF5FF' },
                  })
                );
              }
            }

            // 교사 노트
            if (section.teacherNotes && Array.isArray(section.teacherNotes)) {
              paragraphs.push(
                new Paragraph({
                  children: [
                    new TextRun({
                      text: '💡 교사 팁:',
                      bold: true,
                      size: 18,
                      color: COLORS.lightText,
                    }),
                  ],
                  spacing: { before: 100 },
                  indent: { left: 720 },
                })
              );
              for (const note of section.teacherNotes) {
                paragraphs.push(
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `• ${note}`,
                        size: 18,
                        color: COLORS.lightText,
                      }),
                    ],
                    indent: { left: 1080 },
                  })
                );
              }
            }

            // 전환 발언
            if (section.transition) {
              paragraphs.push(
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `➡️ ${section.transition}`,
                      size: 20,
                      italics: true,
                      color: COLORS.secondary,
                    }),
                  ],
                  spacing: { before: 100, after: 100 },
                  indent: { left: 720 },
                })
              );
            }
          }
        }
      }
    }

    // Closing
    if (lessonScript.closing) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: '마무리',
              bold: true,
              size: 28,
              color: COLORS.primary,
            }),
          ],
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 300, after: 200 },
          shading: { type: ShadingType.CLEAR, fill: 'FEF3C7' },
        })
      );

      if (lessonScript.closing.summary) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '정리: ', bold: true, size: 22 }),
              new TextRun({ text: lessonScript.closing.summary, size: 22 }),
            ],
            spacing: { before: 100, after: 100 },
            indent: { left: 360 },
          })
        );
      }

      if (lessonScript.closing.preview) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '예고: ', bold: true, size: 22 }),
              new TextRun({ text: lessonScript.closing.preview, size: 22 }),
            ],
            spacing: { before: 100, after: 100 },
            indent: { left: 360 },
          })
        );
      }

      if (lessonScript.closing.farewell) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: lessonScript.closing.farewell, size: 22, italics: true }),
            ],
            spacing: { before: 100, after: 100 },
            indent: { left: 360 },
          })
        );
      }
    }

    // Contingency Plans
    if (lessonScript.contingencyPlans) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: '상황별 대응 계획',
              bold: true,
              size: 24,
              color: COLORS.primary,
            }),
          ],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 300, after: 200 },
        })
      );

      if (lessonScript.contingencyPlans.timeShortage) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '⏱️ 시간 부족 시: ', bold: true, size: 20 }),
              new TextRun({ text: lessonScript.contingencyPlans.timeShortage, size: 20 }),
            ],
            indent: { left: 360 },
          })
        );
      }

      if (lessonScript.contingencyPlans.studentStruggle) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '🆘 학생 어려움 시: ', bold: true, size: 20 }),
              new TextRun({ text: lessonScript.contingencyPlans.studentStruggle, size: 20 }),
            ],
            indent: { left: 360 },
          })
        );
      }

      if (lessonScript.contingencyPlans.fastFinishers) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '🚀 빨리 끝낸 학생: ', bold: true, size: 20 }),
              new TextRun({ text: lessonScript.contingencyPlans.fastFinishers, size: 20 }),
            ],
            indent: { left: 360 },
          })
        );
      }
    }
  }

  // 기존 sections 형식도 지원 (fallback)
  const scriptSections = script?.sections || [];
  if (paragraphs.length === 0 && scriptSections.length > 0) {
    for (const section of scriptSections) {
      const stageInfo = section.stageId
        ? CBI_STAGES[section.stageId as CBIStageId]
        : null;

      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: stageInfo
                ? `${stageInfo.emoji} ${stageInfo.name} (${stageInfo.nameEn})`
                : section.stageId || '도입',
              bold: true,
              size: 28,
              color: COLORS.primary,
            }),
            new TextRun({
              text: ` [${section.duration}분]`,
              size: 20,
              color: COLORS.lightText,
            }),
          ],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 400, after: 200 },
        })
      );

      // 대사들
      for (const dialogue of section.dialogues || []) {
        const isTeacher = dialogue.speaker === 'teacher';

        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: isTeacher ? '👩‍🏫 교사: ' : '👧 학생: ',
                bold: true,
                size: 22,
                color: isTeacher ? COLORS.primary : COLORS.secondary,
              }),
              new TextRun({
                text: dialogue.text,
                size: 22,
              }),
            ],
            spacing: { before: 100, after: 100 },
            indent: { left: 360 },
            shading: {
              type: ShadingType.CLEAR,
              fill: isTeacher ? 'EEF2FF' : 'FAF5FF',
            },
          })
        );

        if (dialogue.action) {
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `[${dialogue.action}]`,
                  italics: true,
                  size: 18,
                  color: COLORS.lightText,
                }),
              ],
              indent: { left: 720 },
            })
          );
        }
      }

      // 교사 팁
      if (section.teacherTips && section.teacherTips.length > 0) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: '💡 교사 팁',
                bold: true,
                size: 20,
                color: COLORS.secondary,
              }),
            ],
            spacing: { before: 200 },
            indent: { left: 360 },
          })
        );

        for (const tip of section.teacherTips) {
          paragraphs.push(
            new Paragraph({
              children: [new TextRun({ text: `• ${tip}`, size: 18 })],
              indent: { left: 720 },
            })
          );
        }
      }
    }
  }

  // 내용이 없으면 기본 메시지
  if (paragraphs.length === 0) {
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({
            text: '수업 대본을 생성해주세요.',
            size: 22,
            color: COLORS.lightText,
          }),
        ],
        alignment: AlignmentType.CENTER,
      })
    );
  }

  const doc = new Document({
    creator: 'CBI Lesson Designer',
    title: `${lesson.title} - 수업 대본`,
    styles: {
      default: {
        document: {
          run: {
            font: 'Malgun Gothic',
            size: 22,
          },
        },
      },
    },
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `${lesson.title}`,
                bold: true,
                size: 36,
                color: COLORS.primary,
              }),
            ],
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: '수업 진행 대본',
                size: 24,
                color: COLORS.lightText,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          }),
          ...paragraphs,
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// 학습지 생성 - 완전한 구현
export async function generateWorksheetDocx(
  lesson: Lesson,
  worksheetContent: WorksheetContent
): Promise<Buffer> {
  // 방어 코드: worksheetContent가 없거나 잘못된 형식일 경우
  if (!worksheetContent || !worksheetContent.worksheet) {
    console.error('[generateWorksheetDocx] worksheetContent가 없거나 잘못된 형식입니다:', worksheetContent);
    throw new Error('학습지 데이터가 없거나 잘못된 형식입니다. 학습지를 다시 생성해주세요.');
  }

  const allChildren: (Paragraph | Table)[] = [];
  const worksheet = worksheetContent.worksheet;

  // header, sections, footer 기본값 설정
  const header = worksheet.header || { title: lesson.title };
  const sections = worksheet.sections || [];
  const footer = worksheet.footer || {};

  // 헤더 정보
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${header.grade || lesson.grade + '학년'} ${header.subject || lesson.subject_id}`,
          size: 20,
          color: COLORS.lightText,
        }),
        new TextRun({
          text: header.totalPeriods ? `  |  ${header.totalPeriods}` : '',
          size: 20,
          color: COLORS.lightText,
        }),
      ],
      alignment: AlignmentType.RIGHT,
    })
  );

  // 제목
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({
          text: header.title || lesson.title,
          bold: true,
          size: 32,
          color: COLORS.primary,
        }),
      ],
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 50 },
    })
  );

  // 부제목
  if (header.subtitle) {
    allChildren.push(
      new Paragraph({
        children: [
          new TextRun({
            text: header.subtitle,
            size: 22,
            color: COLORS.lightText,
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
      })
    );
  }

  // 개념 렌즈
  if (header.conceptLens) {
    allChildren.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `개념 렌즈: `,
            bold: true,
            size: 20,
          }),
          new TextRun({
            text: header.conceptLens,
            size: 20,
            shading: { type: ShadingType.CLEAR, fill: 'FEF3C7' },
          }),
        ],
        alignment: AlignmentType.CENTER,
        spacing: { after: 150 },
      })
    );
  }

  // 이름/날짜 입력란
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({
          text: '이름: ________________    반: _______    날짜: ____년 ____월 ____일',
          size: 20,
        }),
      ],
      alignment: AlignmentType.RIGHT,
      spacing: { after: 300 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 8, color: COLORS.primary },
      },
    })
  );

  // 섹션별 처리
  for (const section of sections) {
    // 섹션 제목 (단계 색상 적용)
    const stageColor = section.stageColor?.replace('#', '') || COLORS.primary;

    allChildren.push(
      new Paragraph({
        children: [
          new TextRun({
            text: section.title,
            bold: true,
            size: 24,
            color: stageColor,
          }),
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 300, after: 100 },
        shading: { type: ShadingType.CLEAR, fill: stageColor + '15' },
        border: {
          left: { style: BorderStyle.SINGLE, size: 24, color: stageColor },
        },
      })
    );

    // 차시/단계 정보
    if (section.periods || section.phase) {
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${section.periods || ''} ${section.phase ? `| ${section.phase}` : ''}`,
              size: 18,
              color: COLORS.lightText,
              italics: true,
            }),
          ],
          spacing: { after: 100 },
          indent: { left: 200 },
        })
      );
    }

    // 설명
    if (section.instructions) {
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: section.instructions,
              size: 20,
              color: COLORS.text,
            }),
          ],
          spacing: { after: 150 },
          indent: { left: 200 },
        })
      );
    }

    // 문제/활동들
    for (const item of section.questions || []) {
      allChildren.push(...renderWorksheetQuestion(item, stageColor));
    }
  }

  // 푸터
  if (footer && Object.keys(footer).length > 0) {
    allChildren.push(
      new Paragraph({
        spacing: { before: 400 },
        border: {
          top: { style: BorderStyle.SINGLE, size: 4, color: COLORS.lightText },
        },
      })
    );

    if (footer.teacherComment) {
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: footer.teacherCommentPrompt || '선생님의 피드백',
              bold: true,
              size: 20,
            }),
          ],
          spacing: { before: 200, after: 100 },
        })
      );
      // 피드백 작성 공간
      for (let i = 0; i < 3; i++) {
        allChildren.push(
          new Paragraph({
            children: [
              new TextRun({
                text: '_'.repeat(90),
                size: 18,
                color: COLORS.lightText,
              }),
            ],
            spacing: { before: 80 },
          })
        );
      }
    }

    if (footer.portfolioNote) {
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: footer.portfolioNote,
              size: 16,
              color: COLORS.lightText,
              italics: true,
            }),
          ],
          alignment: AlignmentType.RIGHT,
          spacing: { before: 200 },
        })
      );
    }
  }

  const doc = new Document({
    creator: 'CBI Lesson Designer',
    title: `${lesson.title} - 학습지`,
    styles: {
      default: {
        document: {
          run: {
            font: 'Malgun Gothic',
            size: 22,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,
              right: 720,
              bottom: 720,
              left: 720,
            },
          },
        },
        children: allChildren,
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// 학습지 문제 렌더링 헬퍼
function renderWorksheetQuestion(item: WorksheetContent['worksheet']['sections'][0]['questions'][0], stageColor: string): (Paragraph | Table)[] {
  const elements: (Paragraph | Table)[] = [];
  const questionNum = item.number || '';

  // 문제 제목
  elements.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${questionNum}. ${item.question}`,
          bold: true,
          size: 22,
        }),
      ],
      spacing: { before: 250, after: 100 },
      indent: { left: 100 },
    })
  );

  // 타입별 처리
  switch (item.type) {
    case 'see_think_wonder':
      // 보고-생각하고-궁금해하기
      if (item.subQuestions) {
        for (const sub of item.subQuestions) {
          elements.push(
            new Paragraph({
              children: [
                new TextRun({ text: sub.label, bold: true, size: 20 }),
              ],
              spacing: { before: 150, after: 50 },
              indent: { left: 300 },
            })
          );
          const lines = sub.lines || 2;
          for (let i = 0; i < lines; i++) {
            elements.push(createAnswerLine());
          }
        }
      }
      break;

    case 'frayer_model':
      // 프레이어 모델 (4분면 테이블)
      if (item.quadrants) {
        elements.push(createFrayerModelTable(item.quadrants, item.centerConcept || ''));
      }
      break;

    case 'fill_blank':
      // 빈칸 채우기
      if (item.blanks) {
        for (let i = 0; i < item.blanks.length; i++) {
          elements.push(
            new Paragraph({
              children: [
                new TextRun({ text: `(${i + 1}) ${item.blanks[i]}`, size: 20 }),
              ],
              spacing: { before: 100, after: 50 },
              indent: { left: 400 },
            })
          );
        }
      }
      break;

    case 'investigation_table':
    case 'compare_contrast_table':
      // 탐구 기록표 / 비교 대조표
      if (item.tableHeaders && item.rows) {
        elements.push(createInvestigationTable(item.tableHeaders, item.rows));
      }
      if (item.note) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.note, size: 18, italics: true, color: COLORS.lightText }),
            ],
            spacing: { before: 50 },
            indent: { left: 300 },
          })
        );
      }
      break;

    case 'pattern_finding':
    case 'inquiry_start':
      // 패턴 찾기 / 탐구 시작
      if (item.subQuestions) {
        for (const sub of item.subQuestions) {
          elements.push(
            new Paragraph({
              children: [
                new TextRun({ text: sub.label, bold: true, size: 20 }),
              ],
              spacing: { before: 150, after: 50 },
              indent: { left: 300 },
            })
          );
          if (sub.prompt) {
            elements.push(
              new Paragraph({
                children: [
                  new TextRun({ text: sub.prompt, size: 18, color: COLORS.lightText }),
                ],
                indent: { left: 400 },
              })
            );
          }
          const lines = sub.lines || 2;
          for (let i = 0; i < lines; i++) {
            elements.push(createAnswerLine());
          }
        }
      }
      break;

    case 'concept_map':
      // 개념 맵
      elements.push(
        new Paragraph({
          children: [
            new TextRun({ text: item.instructions || '가운데에 핵심 개념을 쓰고, 관련된 내용을 연결해 봅시다.', size: 18, italics: true }),
          ],
          indent: { left: 300 },
          spacing: { after: 100 },
        })
      );
      elements.push(createConceptMapSpace(item.centerConcept || ''));
      break;

    case 'headlines':
    case 'class_consensus':
      // 헤드라인 / 반 합의
      if (item.prompt) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.prompt, size: 18, color: COLORS.lightText }),
            ],
            indent: { left: 300 },
          })
        );
      }
      elements.push(createHighlightedBox(item.lines || 2, item.highlight));
      break;

    case 'generalization_builder':
      // 빅 아이디어 만들기
      if (item.template) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.template, size: 18, italics: true, color: COLORS.secondary }),
            ],
            indent: { left: 300 },
            spacing: { after: 100 },
            shading: { type: ShadingType.CLEAR, fill: 'F3E8FF' },
          })
        );
      }
      if (item.steps) {
        for (const step of item.steps) {
          elements.push(
            new Paragraph({
              children: [
                new TextRun({ text: step.label, bold: true, size: 20 }),
                new TextRun({ text: ` ${step.hint || ''}`, size: 18, color: COLORS.lightText }),
              ],
              spacing: { before: 100 },
              indent: { left: 300 },
            })
          );
          for (let i = 0; i < (step.lines || 1); i++) {
            elements.push(createAnswerLine());
          }
        }
      }
      if (item.finalStatement) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.finalStatement.label, bold: true, size: 20, color: COLORS.primary }),
            ],
            spacing: { before: 150 },
            indent: { left: 300 },
          })
        );
        elements.push(createHighlightedBox(item.finalStatement.lines || 2, true));
      }
      break;

    case 'transfer_thinking':
      // 전이 생각하기
      if (item.prompt) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.prompt, size: 18, color: COLORS.lightText }),
            ],
            indent: { left: 300 },
          })
        );
      }
      for (let i = 0; i < (item.lines || 3); i++) {
        elements.push(createAnswerLine());
      }
      break;

    case 'grasps_understanding':
      // GRASPS 이해하기
      if (item.elements) {
        for (const el of item.elements) {
          elements.push(
            new Paragraph({
              children: [
                new TextRun({ text: `${el.icon} ${el.label}: `, bold: true, size: 20 }),
                new TextRun({ text: el.prompt, size: 18, color: COLORS.lightText }),
              ],
              spacing: { before: 100 },
              indent: { left: 300 },
            })
          );
          elements.push(createAnswerLine());
        }
      }
      break;

    case 'planning_sheet':
      // 계획서
      if (item.sections) {
        for (const sec of item.sections) {
          elements.push(
            new Paragraph({
              children: [
                new TextRun({ text: sec.label, bold: true, size: 20 }),
              ],
              spacing: { before: 150 },
              indent: { left: 300 },
            })
          );
          for (let i = 0; i < (sec.lines || 2); i++) {
            elements.push(createAnswerLine());
          }
        }
      }
      break;

    case 'rubric_check':
      // 자기 점검표
      if (item.criteria) {
        elements.push(createRubricTable(item.criteria));
      }
      break;

    case 'thinking_change':
      // 예전에는-지금은
      if (item.before) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.before.label, bold: true, size: 20 }),
            ],
            spacing: { before: 150 },
            indent: { left: 300 },
          })
        );
        for (let i = 0; i < (item.before.lines || 3); i++) {
          elements.push(createAnswerLine());
        }
      }
      if (item.after) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.after.label, bold: true, size: 20 }),
            ],
            spacing: { before: 150 },
            indent: { left: 300 },
          })
        );
        for (let i = 0; i < (item.after.lines || 3); i++) {
          elements.push(createAnswerLine());
        }
      }
      if (item.reason) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.reason.label, bold: true, size: 20 }),
            ],
            spacing: { before: 150 },
            indent: { left: 300 },
          })
        );
        for (let i = 0; i < (item.reason.lines || 2); i++) {
          elements.push(createAnswerLine());
        }
      }
      break;

    case '3_2_1_summary':
      // 3-2-1 정리
      if (item.items) {
        for (const it of item.items) {
          elements.push(
            new Paragraph({
              children: [
                new TextRun({ text: `${it.number} `, bold: true, size: 28, color: COLORS.primary }),
                new TextRun({ text: it.label, bold: true, size: 20 }),
              ],
              spacing: { before: 150 },
              indent: { left: 300 },
            })
          );
          for (let i = 0; i < (it.subLines || 1); i++) {
            elements.push(
              new Paragraph({
                children: [
                  new TextRun({ text: `• `, size: 20 }),
                  new TextRun({ text: '_'.repeat(70), size: 18, color: COLORS.lightText }),
                ],
                indent: { left: 500 },
                spacing: { before: 50 },
              })
            );
          }
        }
      }
      break;

    case 'self_assessment_table':
      // 자기평가표
      if (item.criteria) {
        elements.push(createSelfAssessmentTable(item.criteria, item.scale));
      }
      break;

    case 'final_reflection':
    case 'summary':
      // 최종 성찰 / 정리하기
      if (item.subQuestions) {
        for (const sub of item.subQuestions) {
          elements.push(
            new Paragraph({
              children: [
                new TextRun({ text: sub.label, bold: true, size: 20 }),
              ],
              spacing: { before: 150 },
              indent: { left: 300 },
            })
          );
          for (let i = 0; i < (sub.lines || 2); i++) {
            elements.push(createAnswerLine());
          }
        }
      }
      break;

    case 'experience_connection':
    case 'initial_thinking':
    case 'short_answer':
    default:
      // 기본 서술형
      if (item.prompt) {
        elements.push(
          new Paragraph({
            children: [
              new TextRun({ text: item.prompt, size: 18, color: COLORS.lightText }),
            ],
            indent: { left: 300 },
          })
        );
      }
      const lines = item.lines || 3;
      if (item.box) {
        elements.push(createHighlightedBox(lines, item.highlight));
      } else {
        for (let i = 0; i < lines; i++) {
          elements.push(createAnswerLine());
        }
      }
      break;
  }

  return elements;
}

// 답안 작성 줄 생성
function createAnswerLine(): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: '_'.repeat(85),
        size: 18,
        color: COLORS.lightText,
      }),
    ],
    spacing: { before: 80 },
    indent: { left: 400 },
  });
}

// 강조 박스 생성
function createHighlightedBox(lines: number, highlight?: boolean): Paragraph {
  const lineTexts: TextRun[] = [];
  for (let i = 0; i < lines; i++) {
    lineTexts.push(new TextRun({ text: '\n', size: 40 }));
  }
  return new Paragraph({
    children: lineTexts,
    spacing: { before: 100, after: 100 },
    indent: { left: 300, right: 300 },
    border: {
      top: { style: BorderStyle.SINGLE, size: 8, color: highlight ? COLORS.primary : COLORS.lightText },
      bottom: { style: BorderStyle.SINGLE, size: 8, color: highlight ? COLORS.primary : COLORS.lightText },
      left: { style: BorderStyle.SINGLE, size: 8, color: highlight ? COLORS.primary : COLORS.lightText },
      right: { style: BorderStyle.SINGLE, size: 8, color: highlight ? COLORS.primary : COLORS.lightText },
    },
    shading: highlight ? { type: ShadingType.CLEAR, fill: 'FEFCE8' } : undefined,
  });
}

// 프레이어 모델 테이블 생성
function createFrayerModelTable(quadrants: Array<{position: string; label: string; lines: number}>, centerConcept: string): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({
        children: [
          createFrayerCell(quadrants.find(q => q.position === 'top-left')?.label || '정의', quadrants.find(q => q.position === 'top-left')?.lines || 3),
          createFrayerCell(quadrants.find(q => q.position === 'top-right')?.label || '특징', quadrants.find(q => q.position === 'top-right')?.lines || 3),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({ text: centerConcept, bold: true, size: 24, color: COLORS.primary }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
            columnSpan: 2,
            shading: { type: ShadingType.CLEAR, fill: 'EEF2FF' },
            verticalAlign: VerticalAlign.CENTER,
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
            },
          }),
        ],
      }),
      new TableRow({
        children: [
          createFrayerCell(quadrants.find(q => q.position === 'bottom-left')?.label || '예시', quadrants.find(q => q.position === 'bottom-left')?.lines || 3),
          createFrayerCell(quadrants.find(q => q.position === 'bottom-right')?.label || '비예시', quadrants.find(q => q.position === 'bottom-right')?.lines || 3),
        ],
      }),
    ],
  });
}

function createFrayerCell(label: string, lines: number): TableCell {
  const children: Paragraph[] = [
    new Paragraph({
      children: [
        new TextRun({ text: label, bold: true, size: 18 }),
      ],
      spacing: { after: 50 },
    }),
  ];
  for (let i = 0; i < lines; i++) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({ text: '_'.repeat(35), size: 16, color: COLORS.lightText }),
        ],
        spacing: { before: 40 },
      })
    );
  }
  return new TableCell({
    children,
    width: { size: 50, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
      left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
      right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
    },
  });
}

// 탐구 기록표 생성
function createInvestigationTable(headers: string[], rows: Array<{case?: string; item?: string; cells: string[]}>): Table {
  const tableRows: TableRow[] = [];

  // 헤더 행
  tableRows.push(
    new TableRow({
      children: headers.map(h =>
        new TableCell({
          children: [
            new Paragraph({
              children: [new TextRun({ text: h, bold: true, size: 18 })],
              alignment: AlignmentType.CENTER,
            }),
          ],
          shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
          verticalAlign: VerticalAlign.CENTER,
          borders: {
            top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
            bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
            left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
            right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
          },
        })
      ),
    })
  );

  // 데이터 행
  for (const row of rows) {
    const firstCell = row.case || row.item || '';
    const cells = [firstCell, ...(row.cells || [])];

    tableRows.push(
      new TableRow({
        children: cells.map((cell, idx) =>
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: cell || '', size: 16 })],
              }),
              // 빈 셀에는 작성 공간 추가
              ...(cell === '' ? [
                new Paragraph({ children: [new TextRun({ text: '\n\n', size: 32 })] }),
              ] : []),
            ],
            shading: idx === 0 ? { type: ShadingType.CLEAR, fill: 'FAFAFA' } : undefined,
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
            },
          })
        ),
      })
    );
  }

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows: tableRows,
  });
}

// 개념 맵 공간 생성
function createConceptMapSpace(centerConcept: string): Table {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            children: [
              new Paragraph({
                children: [new TextRun({ text: '\n\n', size: 40 })],
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: centerConcept, bold: true, size: 24, color: COLORS.primary }),
                ],
                alignment: AlignmentType.CENTER,
                border: {
                  top: { style: BorderStyle.SINGLE, size: 8, color: COLORS.primary },
                  bottom: { style: BorderStyle.SINGLE, size: 8, color: COLORS.primary },
                  left: { style: BorderStyle.SINGLE, size: 8, color: COLORS.primary },
                  right: { style: BorderStyle.SINGLE, size: 8, color: COLORS.primary },
                },
              }),
              new Paragraph({
                children: [new TextRun({ text: '\n\n\n\n', size: 40 })],
              }),
            ],
            borders: {
              top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
            },
          }),
        ],
      }),
    ],
  });
}

// 루브릭 점검표 생성
function createRubricTable(criteria: Array<{item: string; options?: string[]}>): Table {
  const defaultOptions = ['⭐⭐⭐', '⭐⭐', '⭐'];

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows: [
      // 헤더
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({ children: [new TextRun({ text: '평가 항목', bold: true, size: 18 })], alignment: AlignmentType.CENTER })],
            shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
            width: { size: 60, type: WidthType.PERCENTAGE },
            borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText } },
          }),
          ...defaultOptions.map(opt =>
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: opt, size: 16 })], alignment: AlignmentType.CENTER })],
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText } },
            })
          ),
        ],
      }),
      // 기준 행들
      ...criteria.map(c =>
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: c.item, size: 18 })] })],
              borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText } },
            }),
            ...defaultOptions.map(() =>
              new TableCell({
                children: [new Paragraph({ children: [new TextRun({ text: '○', size: 20 })], alignment: AlignmentType.CENTER })],
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText } },
              })
            ),
          ],
        })
      ),
    ],
  });
}

// 자기평가표 생성
function createSelfAssessmentTable(criteria: Array<{item: string}>, scale?: string[]): Table {
  const scaleLabels = scale || ['⭐⭐⭐ 잘함', '⭐⭐ 보통', '⭐ 노력요함'];

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows: [
      // 헤더
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({ children: [new TextRun({ text: '평가 항목', bold: true, size: 18 })], alignment: AlignmentType.CENTER })],
            shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
            width: { size: 50, type: WidthType.PERCENTAGE },
            borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText } },
          }),
          ...scaleLabels.map(label =>
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: label, size: 14 })], alignment: AlignmentType.CENTER })],
              shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
              borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText } },
            })
          ),
        ],
      }),
      // 기준 행들
      ...criteria.map(c =>
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: c.item, size: 18 })] })],
              borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText } },
            }),
            ...scaleLabels.map(() =>
              new TableCell({
                children: [new Paragraph({ children: [new TextRun({ text: '○', size: 20 })], alignment: AlignmentType.CENTER })],
                borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText }, right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText } },
              })
            ),
          ],
        })
      ),
    ],
  });
}

// 헬퍼 함수들 - 테이블 너비 수정 (전체 너비 100%)
function createInfoTable(lesson: Lesson): Table {
  return new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    columnWidths: [1500, 3000, 1500, 3000],
    rows: [
      new TableRow({
        children: [
          createTableCell('학년/과목', true, 1500),
          createTableCell(`${lesson.grade}학년 / ${lesson.subject_id}`, false, 3000),
          createTableCell('단원', true, 1500),
          createTableCell(lesson.unit_id || '-', false, 3000),
        ],
      }),
      new TableRow({
        children: [
          createTableCell('차시', true, 1500),
          createTableCell(`${lesson.class_period || 1}차시`, false, 3000),
          createTableCell('수업 시간', true, 1500),
          createTableCell(`${lesson.duration}분`, false, 3000),
        ],
      }),
    ],
  });
}

function createTableCell(
  text: string,
  isHeader: boolean = false,
  width: number = 2250
): TableCell {
  return new TableCell({
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text,
            bold: isHeader,
            size: 20,
          }),
        ],
        alignment: AlignmentType.CENTER,
      }),
    ],
    shading: {
      type: ShadingType.CLEAR,
      fill: isHeader ? 'F3F4F6' : 'FFFFFF',
    },
    width: {
      size: width,
      type: WidthType.DXA,
    },
    verticalAlign: VerticalAlign.CENTER,
    borders: {
      top: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      bottom: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      left: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
      right: { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' },
    },
  });
}

function createSectionTitle(title: string): Paragraph {
  return new Paragraph({
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 28,
        color: COLORS.primary,
      }),
    ],
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 400, after: 200 },
    border: {
      bottom: {
        color: COLORS.primary,
        style: BorderStyle.SINGLE,
        size: 12,
      },
    },
  });
}

function createStagesSections(lesson: Lesson): Paragraph[] {
  const paragraphs: Paragraph[] = [];
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
      // 단계 제목
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `${stageInfo.emoji} ${stageInfo.name} (${stageInfo.nameEn})`,
              bold: true,
              size: 26,
            }),
            new TextRun({
              text: ` [${stageData.duration || stageInfo.defaultDuration}분]`,
              size: 20,
              color: COLORS.lightText,
            }),
          ],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 300, after: 100 },
          shading: {
            type: ShadingType.CLEAR,
            fill: stageInfo.color.replace('#', ''),
          },
        })
      );

      // 단계 목표
      if (stageData.objectives && stageData.objectives.length > 0) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '목표:', bold: true, size: 20 }),
            ],
            indent: { left: 360 },
          })
        );
        for (const obj of stageData.objectives) {
          paragraphs.push(
            new Paragraph({
              children: [new TextRun({ text: `• ${obj}`, size: 20 })],
              indent: { left: 720 },
            })
          );
        }
      }

      // 활동
      if (stageData.activities && stageData.activities.length > 0) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '활동:', bold: true, size: 20 }),
            ],
            spacing: { before: 100 },
            indent: { left: 360 },
          })
        );

        for (const activity of stageData.activities) {
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: `▸ ${activity.title}`,
                  bold: true,
                  size: 20,
                }),
                new TextRun({
                  text: ` (${activity.duration}분, ${activity.type})`,
                  size: 18,
                  color: COLORS.lightText,
                }),
              ],
              indent: { left: 720 },
            })
          );
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({ text: activity.description, size: 18 }),
              ],
              indent: { left: 1080 },
            })
          );
        }
      }

      // 교사/학생 행동
      if (stageData.teacherActions || stageData.studentActions) {
        paragraphs.push(
          new Paragraph({
            children: [
              new TextRun({ text: '교사/학생 활동:', bold: true, size: 20 }),
            ],
            spacing: { before: 100 },
            indent: { left: 360 },
          })
        );

        if (stageData.teacherActions) {
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({ text: '교사: ', bold: true, size: 18 }),
              ],
              indent: { left: 720 },
            })
          );
          for (const action of stageData.teacherActions) {
            paragraphs.push(
              new Paragraph({
                children: [new TextRun({ text: `- ${action}`, size: 18 })],
                indent: { left: 1080 },
              })
            );
          }
        }

        if (stageData.studentActions) {
          paragraphs.push(
            new Paragraph({
              children: [
                new TextRun({ text: '학생: ', bold: true, size: 18 }),
              ],
              indent: { left: 720 },
            })
          );
          for (const action of stageData.studentActions) {
            paragraphs.push(
              new Paragraph({
                children: [new TextRun({ text: `- ${action}`, size: 18 })],
                indent: { left: 1080 },
              })
            );
          }
        }
      }
    }
  }

  return paragraphs;
}

function createAssessmentSection(assessmentPlan: Lesson['assessment_plan']): Paragraph[] {
  const paragraphs: Paragraph[] = [];

  if (assessmentPlan?.formative) {
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({ text: '형성 평가', bold: true, size: 24 }),
        ],
        spacing: { before: 200 },
      })
    );

    if (assessmentPlan.formative.methods) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({ text: '방법: ', bold: true, size: 20 }),
            new TextRun({
              text: assessmentPlan.formative.methods.join(', '),
              size: 20,
            }),
          ],
          indent: { left: 360 },
        })
      );
    }

    if (assessmentPlan.formative.criteria) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({ text: '기준: ', bold: true, size: 20 }),
            new TextRun({
              text: assessmentPlan.formative.criteria.join(', '),
              size: 20,
            }),
          ],
          indent: { left: 360 },
        })
      );
    }
  }

  if (assessmentPlan?.summative) {
    paragraphs.push(
      new Paragraph({
        children: [
          new TextRun({ text: '총괄 평가', bold: true, size: 24 }),
        ],
        spacing: { before: 200 },
      })
    );

    if (assessmentPlan.summative.methods) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({ text: '방법: ', bold: true, size: 20 }),
            new TextRun({
              text: assessmentPlan.summative.methods.join(', '),
              size: 20,
            }),
          ],
          indent: { left: 360 },
        })
      );
    }

    if (assessmentPlan.summative.criteria) {
      paragraphs.push(
        new Paragraph({
          children: [
            new TextRun({ text: '기준: ', bold: true, size: 20 }),
            new TextRun({
              text: assessmentPlan.summative.criteria.join(', '),
              size: 20,
            }),
          ],
          indent: { left: 360 },
        })
      );
    }
  }

  return paragraphs;
}
