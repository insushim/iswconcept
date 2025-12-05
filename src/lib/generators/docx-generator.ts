import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  HeadingLevel,
  Header,
  Footer,
  PageNumber,
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
};

// 교수학습 지도안 생성 (표 없이 텍스트 기반)
export async function generateLessonPlanDocx(
  lesson: Lesson,
  lessonPlanContent?: LessonPlanDocxContent
): Promise<Buffer> {
  const allChildren: Paragraph[] = [];

  // 제목
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `${lesson.title} - 교수학습지도안`,
          bold: true,
          size: 32,
          color: COLORS.primary,
        }),
      ],
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  // 기본 정보
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: `학년: ${lesson.grade}학년 | 과목: ${lesson.subject_id} | 차시: ${lesson.class_period}차시`, size: 20 }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    })
  );

  // 차시별 지도안
  if (lessonPlanContent?.lessonPlans && lessonPlanContent.lessonPlans.length > 0) {
    for (const plan of lessonPlanContent.lessonPlans) {
      // 차시 제목
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `━━━ ${plan.periodRange} - ${plan.stageName}(${plan.stageNameEn}) ━━━`,
              bold: true,
              size: 26,
              color: COLORS.primary,
            }),
          ],
          spacing: { before: 300, after: 150 },
        })
      );

      // 학습 주제
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: '▶ 학습 주제: ', bold: true, size: 22 }),
            new TextRun({ text: plan.topic || '', size: 22 }),
          ],
          spacing: { after: 100 },
        })
      );

      // 학습 목표
      if (plan.learningObjectives && plan.learningObjectives.length > 0) {
        allChildren.push(
          new Paragraph({
            children: [
              new TextRun({ text: '▶ 학습 목표:', bold: true, size: 22 }),
            ],
            spacing: { after: 50 },
          })
        );
        for (const obj of plan.learningObjectives) {
          allChildren.push(
            new Paragraph({
              children: [new TextRun({ text: `  • ${obj}`, size: 20 })],
              spacing: { after: 30 },
            })
          );
        }
      }

      // 도입
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: '▶ 도입 (5분)', bold: true, size: 22, color: COLORS.secondary }),
          ],
          spacing: { before: 150, after: 50 },
        })
      );
      const introText = plan.intro || (plan.introduction?.activities?.map(a => a.teacherActivity).join(' ') || '');
      allChildren.push(
        new Paragraph({
          children: [new TextRun({ text: `  ${introText}`, size: 20 })],
          spacing: { after: 100 },
        })
      );

      // 전개
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: '▶ 전개 (30분)', bold: true, size: 22, color: COLORS.secondary }),
          ],
          spacing: { before: 100, after: 50 },
        })
      );
      const mainText = plan.main || (plan.development?.activities?.map(a => `${a.activityName || ''}: ${a.teacherActivity || ''}`).join(' / ') || '');
      allChildren.push(
        new Paragraph({
          children: [new TextRun({ text: `  ${mainText}`, size: 20 })],
          spacing: { after: 100 },
        })
      );

      // 정리
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({ text: '▶ 정리 (5분)', bold: true, size: 22, color: COLORS.secondary }),
          ],
          spacing: { before: 100, after: 50 },
        })
      );
      const closingText = plan.closing || (plan.conclusion?.activities?.map(a => a.teacherActivity).join(' ') || '');
      allChildren.push(
        new Paragraph({
          children: [new TextRun({ text: `  ${closingText}`, size: 20 })],
          spacing: { after: 200 },
        })
      );
    }
  } else {
    // lessonPlanContent가 없는 경우 기본 정보만 표시
    allChildren.push(
      new Paragraph({
        children: [new TextRun({ text: '교수학습 지도안 내용이 생성되지 않았습니다.', size: 22 })],
        spacing: { before: 200 },
      })
    );
  }

  const doc = new Document({
    creator: 'CBI Lesson Designer',
    title: `${lesson.title} - 교수학습지도안`,
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
            margin: { top: 720, right: 720, bottom: 720, left: 720 },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                children: [
                  new TextRun({ text: `${lesson.title} - 교수학습지도안`, size: 18, color: COLORS.lightText }),
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
                children: [new TextRun({ children: [PageNumber.CURRENT, ' / ', PageNumber.TOTAL_PAGES], size: 18 })],
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

// 탐구 학습지 생성 (표 없이 텍스트 기반)
export async function generateWorksheetDocx(
  lesson: Lesson,
  worksheetContent?: WorksheetContent
): Promise<Buffer> {
  const allChildren: Paragraph[] = [];

  // 제목
  const title = worksheetContent?.worksheet?.title || `${lesson.title} 탐구 학습지`;
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: title, bold: true, size: 36, color: COLORS.primary }),
      ],
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  // 기본 정보
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: `${lesson.grade}학년 ${lesson.subject_id}`, size: 22 }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
    })
  );

  // 이름/반 입력란
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: '이름: ________________    반: ____    번호: ____', size: 22 }),
      ],
      alignment: AlignmentType.RIGHT,
      spacing: { after: 300 },
    })
  );

  // 학습지 내용
  if (worksheetContent?.worksheet?.stages) {
    for (const stage of worksheetContent.worksheet.stages) {
      // 단계 제목
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `■ ${stage.name || stage.title || stage.stage}`,
              bold: true,
              size: 26,
              color: COLORS.primary,
            }),
          ],
          spacing: { before: 300, after: 150 },
        })
      );

      // 질문들
      if (stage.questions) {
        for (const q of stage.questions) {
          const questionText = q.text || q.question || '';
          const num = q.num || q.number || '';

          allChildren.push(
            new Paragraph({
              children: [
                new TextRun({ text: `${num}. ${questionText}`, size: 22 }),
              ],
              spacing: { after: 50 },
            })
          );

          // 답변 공간 (빈 줄)
          const lines = q.lines || 3;
          for (let i = 0; i < lines; i++) {
            allChildren.push(
              new Paragraph({
                children: [
                  new TextRun({ text: '_'.repeat(80), size: 20, color: COLORS.lightText }),
                ],
                spacing: { after: 30 },
              })
            );
          }
          allChildren.push(new Paragraph({ spacing: { after: 100 } }));
        }
      }
    }
  } else if (worksheetContent?.worksheet?.sections) {
    // 이전 형식 지원
    for (const section of worksheetContent.worksheet.sections) {
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `■ ${section.title || section.name || section.stage}`,
              bold: true,
              size: 26,
              color: COLORS.primary,
            }),
          ],
          spacing: { before: 300, after: 150 },
        })
      );

      if (section.questions) {
        for (const q of section.questions) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const qAny = q as any;
          const questionText = qAny.text || qAny.question || '';
          const num = qAny.num || qAny.number || '';

          if (questionText) {
            allChildren.push(
              new Paragraph({
                children: [
                  new TextRun({ text: `${num}. ${questionText}`, size: 22 }),
                ],
                spacing: { after: 50 },
              })
            );

            const lines = qAny.lines || 3;
            for (let i = 0; i < lines; i++) {
              allChildren.push(
                new Paragraph({
                  children: [
                    new TextRun({ text: '_'.repeat(80), size: 20, color: COLORS.lightText }),
                  ],
                  spacing: { after: 30 },
                })
              );
            }
            allChildren.push(new Paragraph({ spacing: { after: 100 } }));
          }
        }
      }
    }
  } else {
    allChildren.push(
      new Paragraph({
        children: [new TextRun({ text: '학습지 내용이 생성되지 않았습니다.', size: 22 })],
      })
    );
  }

  const doc = new Document({
    creator: 'CBI Lesson Designer',
    title: title,
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
            margin: { top: 720, right: 720, bottom: 720, left: 720 },
          },
        },
        children: allChildren,
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// 수업 대본 생성
export async function generateTeachingScriptDocx(
  lesson: Lesson,
  scriptContent?: TeachingScriptContent
): Promise<Buffer> {
  const allChildren: Paragraph[] = [];

  // 제목
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: `${lesson.title} - 수업 대본`, bold: true, size: 32, color: COLORS.primary }),
      ],
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 },
    })
  );

  // 기본 정보
  allChildren.push(
    new Paragraph({
      children: [
        new TextRun({ text: `${lesson.grade}학년 ${lesson.subject_id} | ${lesson.class_period}차시`, size: 20 }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    })
  );

  // 대본 내용
  if (scriptContent?.lessonScript?.stages) {
    for (const stage of scriptContent.lessonScript.stages) {
      // 단계 제목
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const stageAny = stage as any;
      allChildren.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `━━━ ${stageAny.stageName || stageAny.stage || ''} ━━━`,
              bold: true,
              size: 26,
              color: COLORS.primary,
            }),
          ],
          spacing: { before: 300, after: 150 },
        })
      );

      // 활동들
      if (stageAny.activities) {
        for (const activity of stageAny.activities) {
          if (activity.title) {
            allChildren.push(
              new Paragraph({
                children: [
                  new TextRun({ text: `▶ ${activity.title}`, bold: true, size: 22 }),
                ],
                spacing: { before: 150, after: 100 },
              })
            );
          }

          if (activity.teacherScript) {
            allChildren.push(
              new Paragraph({
                children: [
                  new TextRun({ text: '교사: ', bold: true, size: 20, color: COLORS.secondary }),
                  new TextRun({ text: activity.teacherScript, size: 20 }),
                ],
                spacing: { after: 100 },
              })
            );
          }

          if (activity.expectedResponse) {
            allChildren.push(
              new Paragraph({
                children: [
                  new TextRun({ text: '예상 반응: ', bold: true, size: 20, color: COLORS.lightText }),
                  new TextRun({ text: activity.expectedResponse, size: 20 }),
                ],
                spacing: { after: 100 },
              })
            );
          }
        }
      }
    }
  } else {
    allChildren.push(
      new Paragraph({
        children: [new TextRun({ text: '수업 대본 내용이 생성되지 않았습니다.', size: 22 })],
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
        properties: {
          page: {
            margin: { top: 720, right: 720, bottom: 720, left: 720 },
          },
        },
        children: allChildren,
      },
    ],
  });

  return await Packer.toBuffer(doc);
}
