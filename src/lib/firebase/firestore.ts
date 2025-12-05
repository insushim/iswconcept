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
  orderBy,
  Timestamp,
  increment,
} from 'firebase/firestore';
import { db } from './config';
import type { Lesson } from '@/types/lesson';
import type { Material } from '@/types/material';

// ========== Lessons ==========

// 수업 생성
export async function createLesson(
  userId: string,
  lessonData: Omit<Lesson, 'id' | 'user_id' | 'created_at' | 'updated_at'>
) {
  try {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, 'lessons'), {
      ...lessonData,
      user_id: userId,
      is_public: lessonData.is_public ?? false,
      view_count: lessonData.view_count ?? 0,
      created_at: now,
      updated_at: now,
    });

    console.log('Lesson saved successfully:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating lesson:', error);
    throw error;
  }
}

// 수업 조회
export async function getLesson(lessonId: string) {
  const docRef = doc(db, 'lessons', lessonId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...data,
      created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
    } as Lesson;
  }
  return null;
}

// 사용자의 모든 수업 조회
export async function getUserLessons(userId: string, limitCount: number = 50) {
  try {
    const q = query(
      collection(db, 'lessons'),
      where('user_id', '==', userId),
      limit(limitCount * 2) // 정렬을 위해 여유있게 가져옴
    );

    const querySnapshot = await getDocs(q);
    const lessons = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
        updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      } as Lesson;
    });

    // 클라이언트에서 정렬
    lessons.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return lessons.slice(0, limitCount);
  } catch (error) {
    console.error('Error fetching user lessons:', error);
    return [];
  }
}

// 공개 수업 조회 (자료실)
export async function getPublicLessons(limitCount: number = 50) {
  try {
    const q = query(
      collection(db, 'lessons'),
      where('is_public', '==', true),
      limit(limitCount * 2) // 정렬을 위해 여유있게 가져옴
    );

    const querySnapshot = await getDocs(q);
    const lessons = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
        updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      } as Lesson;
    });

    // 클라이언트에서 정렬
    lessons.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    return lessons.slice(0, limitCount);
  } catch (error) {
    console.error('Error fetching public lessons:', error);
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
  // 최근 수업 10개만 가져옴 (성능 최적화)
  const lessons = await getUserLessons(userId, 10);
  const lessonIds = lessons.map((l) => l.id);

  if (lessonIds.length === 0) {
    return [];
  }

  // 단일 쿼리로 최적화 (최대 10개 ID)
  const q = query(
    collection(db, 'generation_history'),
    where('lesson_id', 'in', lessonIds),
    orderBy('created_at', 'desc'),
    limit(limitCount)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const lesson = lessons.find((l) => l.id === data.lesson_id);
    return {
      id: doc.id,
      ...data,
      created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      lesson: lesson ? { title: lesson.title } : null,
    };
  });
}
