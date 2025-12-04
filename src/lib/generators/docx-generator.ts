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
          createSectionTitle('학습 목표'),
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
          createSectionTitle('핵심 개념'),
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
          createSectionTitle('핵심 아이디어 (일반화)'),
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
          createSectionTitle('안내 질문'),
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
          createSectionTitle('7단계 수업 전개'),

          // 각 단계별 내용
          ...createStagesSections(lesson),

          // 페이지 나누기
          new Paragraph({
            children: [new PageBreak()],
          }),

          // 평가 계획
          createSectionTitle('평가 계획'),
          ...(lesson.assessment_plan
            ? createAssessmentSection(lesson.assessment_plan)
            : []),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
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

// 학습지 생성
export async function generateWorksheetDocx(
  lesson: Lesson,
  worksheetContent: WorksheetContent
): Promise<Buffer> {
  const sections: Paragraph[] = [];
  const worksheet = worksheetContent?.worksheet || { header: { title: lesson.title }, sections: [] };

  for (const section of worksheet.sections || []) {
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
    for (const item of section.questions || []) {
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
                text: worksheet.header?.title || lesson.title,
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

// 헬퍼 함수들 - 테이블 너비 수정
function createInfoTable(lesson: Lesson): Table {
  return new Table({
    width: {
      size: 9000,  // 고정 너비 (twips 단위)
      type: WidthType.DXA,
    },
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
