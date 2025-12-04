import { LessonForm } from '@/components/lesson/lesson-form';

export default function NewLessonPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">새 수업 만들기</h1>
        <p className="text-muted-foreground mt-1">
          기본 정보를 입력하면 AI가 전북형 개념기반탐구 7단계 수업을 자동으로 설계합니다.
        </p>
      </div>

      <LessonForm />
    </div>
  );
}
