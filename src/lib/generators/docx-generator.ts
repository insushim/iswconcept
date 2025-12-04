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
  TableOfContents,
  PageBreak,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
} from 'docx';
import type { Lesson } from '@/types/lesson';
import type { TeachingScriptContent, WorksheetContent } from '@/types/material';
import { CBI_STAGES, type CBIStageId } from '@/lib/constants/cbi-stages';

// 색상 정의
const COLORS = {
  primary: '4F46E5',
  secondary: '7C3AED',
  text: '1F2937',
  lightText: '6B7280',
  background: 'F3F4F6',
};

// 교수학습 지도안 생성
export async function generateLessonPlanDocx(lesson: Lesson): Promise<Buffer> {
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
        children: [
          // 제목
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
          }),

          // 기본 정보 테이블
          createInfoTable(lesson),

          new Paragraph({ spacing: { before: 400 } }),

          // 학습 목표
          createSectionTitle('📎 학습 목표'),
          ...lesson.learning_objectives.map(
            (obj, i) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `${i + 1}. ${obj}`, size: 22 }),
                ],
                spacing: { before: 100, after: 100 },
                indent: { left: 360 },
              })
          ),

          new Paragraph({ spacing: { before: 300 } }),

          // 핵심 개념
          createSectionTitle('💡 핵심 개념'),
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
          }),

          new Paragraph({ spacing: { before: 300 } }),

          // 핵심 아이디어 (일반화)
          createSectionTitle('📚 핵심 아이디어 (일반화)'),
          ...lesson.big_ideas.map(
            (idea) =>
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
          ),

          new Paragraph({ spacing: { before: 300 } }),

          // 안내 질문
          createSectionTitle('❓ 안내 질문'),
          new Paragraph({
            children: [
              new TextRun({ text: '사실적 질문', bold: true, size: 20 }),
            ],
            indent: { left: 360 },
          }),
          ...lesson.factual_questions.map(
            (q) =>
              new Paragraph({
                children: [new TextRun({ text: `• ${q}`, size: 20 })],
                indent: { left: 720 },
              })
          ),
          new Paragraph({
            children: [
              new TextRun({ text: '개념적 질문', bold: true, size: 20 }),
            ],
            spacing: { before: 200 },
            indent: { left: 360 },
          }),
          ...lesson.conceptual_questions.map(
            (q) =>
              new Paragraph({
                children: [new TextRun({ text: `• ${q}`, size: 20 })],
                indent: { left: 720 },
              })
          ),
          new Paragraph({
            children: [
              new TextRun({ text: '논쟁적 질문', bold: true, size: 20 }),
            ],
            spacing: { before: 200 },
            indent: { left: 360 },
          }),
          ...lesson.debatable_questions.map(
            (q) =>
              new Paragraph({
                children: [new TextRun({ text: `• ${q}`, size: 20 })],
                indent: { left: 720 },
              })
          ),

          // 페이지 나누기
          new Paragraph({
            children: [new PageBreak()],
          }),

          // 7단계 수업 전개
          createSectionTitle('📋 7단계 수업 전개'),

          // 각 단계별 내용
          ...createStagesSections(lesson),

          // 페이지 나누기
          new Paragraph({
            children: [new PageBreak()],
          }),

          // 평가 계획
          createSectionTitle('📊 평가 계획'),
          ...(lesson.assessment_plan
            ? createAssessmentSection(lesson.assessment_plan)
            : []),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// 수업 대본 생성
export async function generateTeachingScriptDocx(
  lesson: Lesson,
  script: TeachingScriptContent
): Promise<Buffer> {
  const sections: Paragraph[] = [];

  // 각 단계별 대본
  for (const section of script.sections) {
    const stageInfo = section.stageId
      ? CBI_STAGES[section.stageId as CBIStageId]
      : null;

    sections.push(
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
    for (const dialogue of section.dialogues) {
      const isTeacher = dialogue.speaker === 'teacher';

      sections.push(
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

      // 행동 지시
      if (dialogue.action) {
        sections.push(
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
      sections.push(
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
        sections.push(
          new Paragraph({
            children: [new TextRun({ text: `• ${tip}`, size: 18 })],
            indent: { left: 720 },
          })
        );
      }
    }
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
                text: '수업 대본',
                size: 24,
                color: COLORS.lightText,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          }),
          ...sections,
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// 학습지 생성
export async function generateWorksheetDocx(
  lesson: Lesson,
  worksheetContent: WorksheetContent
): Promise<Buffer> {
  const sections: Paragraph[] = [];
  const worksheet = worksheetContent.worksheet;

  for (const section of worksheet.sections) {
    // 섹션 제목
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: section.title,
            bold: true,
            size: 26,
            color: COLORS.primary,
          }),
        ],
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 400, after: 200 },
        border: {
          bottom: {
            color: COLORS.primary,
            style: BorderStyle.SINGLE,
            size: 12,
          },
        },
      })
    );

    // 설명
    if (section.instructions) {
      sections.push(
        new Paragraph({
          children: [
            new TextRun({
              text: section.instructions,
              size: 20,
              color: COLORS.lightText,
              italics: true,
            }),
          ],
          spacing: { after: 200 },
        })
      );
    }

    // 문제/활동들
    for (const item of section.questions) {
      if (item.type === 'short_answer' || item.type === 'long_answer') {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${item.number}. ${item.question}`,
                size: 22,
              }),
            ],
            spacing: { before: 200, after: 100 },
          })
        );

        // 답안 공간
        const lines = item.lines || (item.answerSpace === 'large' ? 5 : item.answerSpace === 'medium' ? 3 : 2);
        for (let i = 0; i < lines; i++) {
          sections.push(
            new Paragraph({
              children: [
                new TextRun({
                  text: '_'.repeat(80),
                  size: 20,
                  color: COLORS.lightText,
                }),
              ],
              spacing: { before: 100 },
            })
          );
        }
      } else if (item.type === 'multiple_choice') {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${item.number}. ${item.question}`,
                size: 22,
              }),
            ],
            spacing: { before: 200, after: 100 },
          })
        );

        // 선택지
        if (item.options) {
          for (const option of item.options) {
            sections.push(
              new Paragraph({
                children: [
                  new TextRun({
                    text: `    ${option}`,
                    size: 20,
                  }),
                ],
                indent: { left: 360 },
              })
            );
          }
        }
      } else if (item.type === 'fill_blank') {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${item.number}. ${item.question}`,
                size: 22,
              }),
            ],
            spacing: { before: 200, after: 100 },
          })
        );
      } else if (item.type === 'drawing') {
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${item.number}. ${item.question}`,
                size: 22,
              }),
            ],
            spacing: { before: 200, after: 100 },
          })
        );

        // 다이어그램 공간
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: '[그림/다이어그램 공간]',
                size: 18,
                color: COLORS.lightText,
                italics: true,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 200 },
            border: {
              top: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              left: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
              right: { style: BorderStyle.SINGLE, size: 1, color: COLORS.lightText },
            },
          })
        );
      } else {
        // 기타 타입 처리
        sections.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${item.number}. ${item.question}`,
                size: 22,
              }),
            ],
            spacing: { before: 200, after: 100 },
          })
        );
      }
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
        children: [
          // 헤더
          new Paragraph({
            children: [
              new TextRun({
                text: `${lesson.grade}학년 ${lesson.subject_id}`,
                size: 20,
                color: COLORS.lightText,
              }),
            ],
            alignment: AlignmentType.RIGHT,
          }),
          // 제목
          new Paragraph({
            children: [
              new TextRun({
                text: worksheet.header.title,
                bold: true,
                size: 36,
                color: COLORS.primary,
              }),
            ],
            heading: HeadingLevel.TITLE,
            alignment: AlignmentType.CENTER,
            spacing: { after: 100 },
          }),
          // 이름/날짜 입력란
          new Paragraph({
            children: [
              new TextRun({
                text: '이름: ________________    날짜: ____년 ____월 ____일',
                size: 20,
              }),
            ],
            alignment: AlignmentType.RIGHT,
            spacing: { after: 300 },
          }),
          ...sections,
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// 헬퍼 함수들
function createInfoTable(lesson: Lesson): Table {
  return new Table({
    width: {
      size: 100,
      type: WidthType.PERCENTAGE,
    },
    rows: [
      new TableRow({
        children: [
          createTableCell('학년/과목', true),
          createTableCell(`${lesson.grade}학년 / ${lesson.subject_id}`),
          createTableCell('단원', true),
          createTableCell(lesson.unit_id || '-'),
        ],
      }),
      new TableRow({
        children: [
          createTableCell('차시', true),
          createTableCell(`${lesson.class_period}차시`),
          createTableCell('수업 시간', true),
          createTableCell(`${lesson.duration}분`),
        ],
      }),
    ],
  });
}

function createTableCell(
  text: string,
  isHeader: boolean = false
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
      size: 25,
      type: WidthType.PERCENTAGE,
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
