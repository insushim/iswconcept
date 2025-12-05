'use client';

import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  limit,
  Timestamp,
  increment,
} from 'firebase/firestore';
import { db } from './config';
import type { Lesson } from '@/types/lesson';
import type { Material } from '@/types/material';

// ========== Lessons ==========

// 수업 생성 (타임아웃 없이 직접 호출)
export async function createLesson(
  userId: string,
  lessonData: Omit<Lesson, 'id' | 'user_id' | 'created_at' | 'updated_at'>
) {
  console.log('[createLesson] 시작 - userId:', userId);
  console.log('[createLesson] lessonData:', JSON.stringify(lessonData).slice(0, 200) + '...');
  console.log('[createLesson] db 객체:', db ? '있음' : '없음');

  const now = Timestamp.now();
  const docData = {
    ...lessonData,
    user_id: userId,
    is_public: lessonData.is_public ?? false,
    view_count: lessonData.view_count ?? 0,
    created_at: now,
    updated_at: now,
  };

  console.log('[createLesson] Firestore addDoc 호출 중...');
  console.log('[createLesson] collection 경로: lessons');

  try {
    const lessonsRef = collection(db, 'lessons');
    console.log('[createLesson] collection ref 생성됨');

    const docRef = await addDoc(lessonsRef, docData);
    console.log('[createLesson] 성공! ID:', docRef.id);
    return docRef.id;
  } catch (error: unknown) {
    console.error('[createLesson] 실패:', error);
    if (error instanceof Error) {
      console.error('[createLesson] 에러 메시지:', error.message);
      console.error('[createLesson] 에러 스택:', error.stack);
    }
    throw error;
  }
}

// 수업 조회
export async function getLesson(lessonId: string) {
  console.log('[getLesson] 시작 - lessonId:', lessonId);

  try {
    const docRef = doc(db, 'lessons', lessonId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log('[getLesson] 성공! 제목:', data.title);
      return {
        id: docSnap.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
        updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      } as Lesson;
    }
    console.log('[getLesson] 문서 없음');
    return null;
  } catch (error) {
    console.error('[getLesson] 실패:', error);
    throw error;
  }
}

// 사용자의 모든 수업 조회
export async function getUserLessons(userId: string, limitCount: number = 50) {
  console.log('[getUserLessons] 시작 - userId:', userId);

  try {
    const q = query(
      collection(db, 'lessons'),
      where('user_id', '==', userId),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    console.log('[getUserLessons] 조회 완료 - 개수:', querySnapshot.docs.length);

    const lessons = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
        updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      } as Lesson;
    });

    lessons.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return lessons;
  } catch (error) {
    console.error('[getUserLessons] 실패:', error);
    return [];
  }
}

// 공개 수업 조회 (자료실)
export async function getPublicLessons(limitCount: number = 50) {
  console.log('[getPublicLessons] 시작');

  try {
    const q = query(
      collection(db, 'lessons'),
      where('is_public', '==', true),
      limit(limitCount)
    );
    console.log('[getPublicLessons] 쿼리 생성됨');

    const querySnapshot = await getDocs(q);
    console.log('[getPublicLessons] 조회 완료 - 개수:', querySnapshot.docs.length);

    const lessons = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
        updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      } as Lesson;
    });

    lessons.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return lessons;
  } catch (error) {
    console.error('[getPublicLessons] 실패:', error);
    if (error instanceof Error) {
      console.error('[getPublicLessons] 에러 메시지:', error.message);
    }
    return [];
  }
}

// 수업 업데이트
export async function updateLesson(lessonId: string, data: Partial<Lesson>) {
  const docRef = doc(db, 'lessons', lessonId);
  await updateDoc(docRef, {
    ...data,
    updated_at: Timestamp.now(),
  });
}

// 수업 공개/비공개 토글
export async function toggleLessonPublic(lessonId: string, isPublic: boolean) {
  const docRef = doc(db, 'lessons', lessonId);
  await updateDoc(docRef, {
    is_public: isPublic,
    updated_at: Timestamp.now(),
  });
}

// 조회수 증가
export async function incrementViewCount(lessonId: string) {
  const docRef = doc(db, 'lessons', lessonId);
  await updateDoc(docRef, {
    view_count: increment(1),
  });
}

// 수업 복사 (다른 사용자의 공개 수업을 내 것으로 복사)
export async function copyLesson(lessonId: string, newUserId: string) {
  const originalLesson = await getLesson(lessonId);
  if (!originalLesson) {
    throw new Error('원본 수업을 찾을 수 없습니다.');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, user_id, created_at, updated_at, view_count, is_public, ...lessonData } = originalLesson;

  const newLessonId = await createLesson(newUserId, {
    ...lessonData,
    title: `${lessonData.title} (복사본)`,
    status: 'draft',
    is_public: false,
    view_count: 0,
  });

  // 자료도 복사
  const materials = await getMaterialsByLesson(lessonId);
  for (const material of materials) {
    await createMaterial(newLessonId, material.type, material.title, material.content);
  }

  return newLessonId;
}

// 수업 삭제
export async function deleteLesson(lessonId: string) {
  await deleteDoc(doc(db, 'lessons', lessonId));
}

// 자료 삭제 (클라이언트 SDK 사용)
export async function deleteMaterial(materialId: string) {
  console.log('[deleteMaterial] 시작 - materialId:', materialId);
  try {
    await deleteDoc(doc(db, 'materials', materialId));
    console.log('[deleteMaterial] 성공!');
    return true;
  } catch (error) {
    console.error('[deleteMaterial] 오류:', error);
    throw error;
  }
}

// ========== Materials ==========

// 자료 생성 (간소화 - 버전 관리 없이 바로 저장)
export async function createMaterial(
  lessonId: string,
  type: Material['type'],
  title: string,
  content: unknown
) {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'materials'), {
      lesson_id: lessonId,
      type,
      title,
      content,
      version: 1,
      is_latest: true,
      created_at: now,
      updated_at: now,
    });

    console.log('Material saved successfully:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating material:', error);
    throw error;
  }
}

// 수업의 모든 자료 조회
export async function getMaterialsByLesson(lessonId: string) {
  const q = query(
    collection(db, 'materials'),
    where('lesson_id', '==', lessonId),
    where('is_latest', '==', true)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
    } as Material;
  });
}

// 특정 타입의 자료 조회
export async function getMaterialsByLessonAndType(lessonId: string, type: string) {
  const q = query(
    collection(db, 'materials'),
    where('lesson_id', '==', lessonId),
    where('type', '==', type)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
    } as Material;
  });
}

// 자료 업데이트 (새 버전 생성)
export async function updateMaterial(materialId: string, content: unknown) {
  const docRef = doc(db, 'materials', materialId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error('자료를 찾을 수 없습니다.');
  }

  const materialData = docSnap.data();

  // 새 버전 생성
  return createMaterial(
    materialData.lesson_id,
    materialData.type,
    materialData.title,
    content
  );
}

// 자료 직접 업데이트 (버전 없이)
export async function updateMaterialContent(materialId: string, content: unknown) {
  const docRef = doc(db, 'materials', materialId);
  await updateDoc(docRef, {
    content,
    updated_at: Timestamp.now(),
  });
}

// 자료 조회 (단일)
export async function getMaterial(materialId: string) {
  const docRef = doc(db, 'materials', materialId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
    } as Material;
  }
  return null;
}

// ========== Generation History ==========

// 생성 기록 추가
export async function addGenerationHistory(
  lessonId: string,
  type: string,
  status: 'success' | 'error',
  tokensUsed: number = 0
) {
  await addDoc(collection(db, 'generation_history'), {
    lesson_id: lessonId,
    type,
    status,
    tokens_used: tokensUsed,
    created_at: Timestamp.now(),
  });
}

// 생성 기록 조회 (간소화된 버전 - 수업 10개만 조회)
export async function getGenerationHistory(userId: string, limitCount: number = 20) {
  try {
    // 최근 수업 10개만 가져옴 (성능 최적화)
    const lessons = await getUserLessons(userId, 10);
    const lessonIds = lessons.map((l) => l.id);

    if (lessonIds.length === 0) {
      return [];
    }

    // 단일 쿼리 (orderBy 제거하여 인덱스 불필요)
    const q = query(
      collection(db, 'generation_history'),
      where('lesson_id', 'in', lessonIds),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      const lesson = lessons.find((l) => l.id === data.lesson_id);
      return {
        id: doc.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
        lesson: lesson ? { title: lesson.title } : null,
      };
    });

    // 클라이언트에서 정렬
    results.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return results;
  } catch (error) {
    console.error('[getGenerationHistory] 실패:', error);
    return [];
  }
}
