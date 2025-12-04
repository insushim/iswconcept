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
  orderBy,
  limit,
  serverTimestamp,
  Timestamp,
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
  const docRef = await addDoc(collection(db, 'lessons'), {
    ...lessonData,
    user_id: userId,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
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
  const q = query(
    collection(db, 'lessons'),
    where('user_id', '==', userId),
    orderBy('created_at', 'desc'),
    limit(limitCount)
  );

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
      updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
    } as Lesson;
  });
}

// 수업 업데이트
export async function updateLesson(lessonId: string, data: Partial<Lesson>) {
  const docRef = doc(db, 'lessons', lessonId);
  await updateDoc(docRef, {
    ...data,
    updated_at: serverTimestamp(),
  });
}

// 수업 삭제
export async function deleteLesson(lessonId: string) {
  await deleteDoc(doc(db, 'lessons', lessonId));
}

// ========== Materials ==========

// 자료 생성
export async function createMaterial(
  lessonId: string,
  type: Material['type'],
  title: string,
  content: unknown
) {
  // 기존 최신 버전 비활성화
  const existingMaterials = await getMaterialsByLessonAndType(lessonId, type);
  for (const material of existingMaterials) {
    if (material.is_latest) {
      await updateDoc(doc(db, 'materials', material.id), {
        is_latest: false,
        content: null, // 비용 최적화: 구버전 내용 삭제
      });
    }
  }

  const docRef = await addDoc(collection(db, 'materials'), {
    lesson_id: lessonId,
    type,
    title,
    content,
    version: existingMaterials.length + 1,
    is_latest: true,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
  return docRef.id;
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
    created_at: serverTimestamp(),
  });
}

// 생성 기록 조회
export async function getGenerationHistory(userId: string, limitCount: number = 50) {
  // 먼저 사용자의 수업 ID들을 가져옴
  const lessons = await getUserLessons(userId, 100);
  const lessonIds = lessons.map((l) => l.id);

  if (lessonIds.length === 0) {
    return [];
  }

  // Firestore에서는 'in' 쿼리가 최대 10개까지만 지원
  const batchSize = 10;
  const results: unknown[] = [];

  for (let i = 0; i < lessonIds.length; i += batchSize) {
    const batch = lessonIds.slice(i, i + batchSize);
    const q = query(
      collection(db, 'generation_history'),
      where('lesson_id', 'in', batch),
      orderBy('created_at', 'desc'),
      limit(limitCount)
    );

    const querySnapshot = await getDocs(q);
    results.push(
      ...querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const lesson = lessons.find((l) => l.id === data.lesson_id);
        return {
          id: doc.id,
          ...data,
          created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
          lesson: lesson ? { title: lesson.title } : null,
        };
      })
    );
  }

  return results.slice(0, limitCount);
}
