// Firebase Admin SDK for server-side operations
import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let adminApp: App | undefined;
let adminDb: Firestore | undefined;

function getAdminApp(): App {
  if (adminApp) return adminApp;

  const apps = getApps();
  if (apps.length > 0) {
    adminApp = apps[0];
    return adminApp;
  }

  // 환경 변수에서 서비스 계정 정보 가져오기
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

  if (serviceAccount) {
    try {
      const parsedAccount = JSON.parse(serviceAccount);
      adminApp = initializeApp({
        credential: cert(parsedAccount),
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      });
    } catch {
      // JSON 파싱 실패 시 기본 초기화
      adminApp = initializeApp({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      });
    }
  } else {
    // 서비스 계정이 없으면 기본 초기화
    adminApp = initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  }

  return adminApp;
}

export function getAdminDb(): Firestore {
  if (adminDb) return adminDb;
  adminDb = getFirestore(getAdminApp());
  return adminDb;
}

// 수업 조회 (서버용)
export async function getServerLesson(lessonId: string): Promise<Record<string, unknown> | null> {
  const db = getAdminDb();
  const doc = await db.collection('lessons').doc(lessonId).get();

  if (!doc.exists) {
    return null;
  }

  const data = doc.data() || {};
  return {
    id: doc.id,
    ...data,
    created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
    updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
  };
}

// 자료 조회 (서버용)
export async function getServerMaterial(lessonId: string, type: string): Promise<Record<string, unknown> | null> {
  const db = getAdminDb();
  const snapshot = await db
    .collection('materials')
    .where('lesson_id', '==', lessonId)
    .where('type', '==', type)
    .where('is_latest', '==', true)
    .limit(1)
    .get();

  if (snapshot.empty) {
    return null;
  }

  const doc = snapshot.docs[0];
  const data = doc.data() || {};
  return {
    id: doc.id,
    ...data,
    created_at: data.created_at?.toDate?.()?.toISOString() || new Date().toISOString(),
    updated_at: data.updated_at?.toDate?.()?.toISOString() || new Date().toISOString(),
  };
}
