import { create } from 'zustand';
import type { Lesson, GenerationProgress, LessonInput, GeneratedLesson } from '@/types/lesson';
import type { Material, PPTXContent, WorksheetContent, TeachingScriptContent } from '@/types/material';

interface LessonState {
  // 현재 수업 데이터
  currentLesson: Lesson | null;
  lessonInput: LessonInput | null;
  generatedLesson: GeneratedLesson | null;

  // 자료들
  materials: Material[];
  pptxContent: PPTXContent | null;
  worksheetContent: WorksheetContent | null;
  teachingScript: TeachingScriptContent | null;

  // 생성 상태
  isGenerating: boolean;
  generationProgress: GenerationProgress;
  error: string | null;

  // 편집 상태
  isEditing: boolean;
  hasUnsavedChanges: boolean;

  // 액션들
  setLessonInput: (input: LessonInput) => void;
  setGeneratedLesson: (lesson: GeneratedLesson) => void;
  setCurrentLesson: (lesson: Lesson | null) => void;
  setMaterials: (materials: Material[]) => void;
  setPPTXContent: (content: PPTXContent | null) => void;
  setWorksheetContent: (content: WorksheetContent | null) => void;
  setTeachingScript: (content: TeachingScriptContent | null) => void;
  setIsGenerating: (isGenerating: boolean) => void;
  updateProgress: (progress: Partial<GenerationProgress>) => void;
  setError: (error: string | null) => void;
  setIsEditing: (isEditing: boolean) => void;
  setHasUnsavedChanges: (hasChanges: boolean) => void;
  reset: () => void;
}

const initialProgress: GenerationProgress = {
  currentStep: '',
  percentage: 0,
  steps: [
    { id: 'analysis', name: '교육과정 분석', status: 'pending' },
    { id: 'concepts', name: '핵심 개념 도출', status: 'pending' },
    { id: 'design', name: '7단계 수업 설계', status: 'pending' },
    { id: 'script', name: '수업 대본 작성', status: 'pending' },
    { id: 'pptx', name: 'PPT 생성', status: 'pending' },
    { id: 'worksheet', name: '학습지 생성', status: 'pending' },
    { id: 'complete', name: '완료', status: 'pending' },
  ],
};

export const useLessonStore = create<LessonState>((set) => ({
  currentLesson: null,
  lessonInput: null,
  generatedLesson: null,
  materials: [],
  pptxContent: null,
  worksheetContent: null,
  teachingScript: null,
  isGenerating: false,
  generationProgress: initialProgress,
  error: null,
  isEditing: false,
  hasUnsavedChanges: false,

  setLessonInput: (input) => set({ lessonInput: input }),
  setGeneratedLesson: (lesson) => set({ generatedLesson: lesson }),
  setCurrentLesson: (lesson) => set({ currentLesson: lesson }),
  setMaterials: (materials) => set({ materials }),
  setPPTXContent: (content) => set({ pptxContent: content }),
  setWorksheetContent: (content) => set({ worksheetContent: content }),
  setTeachingScript: (content) => set({ teachingScript: content }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  updateProgress: (progress) =>
    set((state) => ({
      generationProgress: { ...state.generationProgress, ...progress },
    })),
  setError: (error) => set({ error }),
  setIsEditing: (isEditing) => set({ isEditing }),
  setHasUnsavedChanges: (hasChanges) => set({ hasUnsavedChanges: hasChanges }),
  reset: () =>
    set({
      currentLesson: null,
      lessonInput: null,
      generatedLesson: null,
      materials: [],
      pptxContent: null,
      worksheetContent: null,
      teachingScript: null,
      isGenerating: false,
      generationProgress: initialProgress,
      error: null,
      isEditing: false,
      hasUnsavedChanges: false,
    }),
}));
