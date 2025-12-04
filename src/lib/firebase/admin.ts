// Firebase Admin SDK for server-side operations
import { initializeApp, getApps, cert, App, applicationDefault } from 'firebase-admin/app';
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

  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

  // 방법 1: JSON 형태의 서비스 계정 키
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (serviceAccountKey) {
    try {
      const parsedAccount = JSON.parse(serviceAccountKey);
      adminApp = initializeApp({
        credential: cert(parsedAccount),
        projectId,
      });
      console.log('Firebase Admin initialized with service account key');
      return adminApp;
    } catch (e) {
      console.error('Failed to parse service account key:', e);
    }
  }

  // 방법 2: 개별 환경 변수로 서비스 계정 정보
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

  if (privateKey && clientEmail && projectId) {
    try {
      adminApp = initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          // 줄바꿈 문자 처리 (Vercel에서는 \n이 문자열로 저장됨)
          privateKey: privateKey.replace(/\\n/g, '\n'),
        }),
        projectId,
      });
      console.log('Firebase Admin initialized with individual env vars');
      return adminApp;
    } catch (e) {
      console.error('Failed to initialize with individual env vars:', e);
    }
  }

  // 방법 3: Application Default Credentials (Google Cloud 환경)
  try {
    adminApp = initializeApp({
      credential: applicationDefault(),
      projectId,
    });
    console.log('Firebase Admin initialized with default credentials');
    return adminApp;
  } catch (e) {
    console.error('Failed to initialize with default credentials:', e);
  }

  // 방법 4: 프로젝트 ID만으로 초기화 (제한적 기능)
  console.warn('Firebase Admin initializing without credentials - limited functionality');
  adminApp = initializeApp({
    projectId,
  });
  return adminApp;
}

export function getAdminDb(): Firestore {
  if (adminDb) return adminDb;
  adminDb = getFirestore(getAdminApp());
  return adminDb;
}

// 수업 조회 (서버용)
export async function getServerLesson(lessonId: string): Promise<Record<string, unknown> | null> {
  try {
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
  } catch (error) {
    console.error('getServerLesson error:', error);
    throw error;
  }
}

// 자료 조회 (서버용)
export async function getServerMaterial(lessonId: string, type: string): Promise<Record<string, unknown> | null> {
  try {
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
  } catch (error) {
    console.error('getServerMaterial error:', error);
    throw error;
  }
}

// 자료 저장 (서버용)
export async function saveServerMaterial(
  lessonId: string,
  type: string,
  title: string,
  content: Record<string, unknown>
): Promise<string> {
  try {
    const db = getAdminDb();

    // 기존 자료의 is_latest를 false로 변경
    const existingSnapshot = await db
      .collection('materials')
      .where('lesson_id', '==', lessonId)
      .where('type', '==', type)
      .where('is_latest', '==', true)
      .get();

    const batch = db.batch();
    existingSnapshot.docs.forEach(doc => {
      batch.update(doc.ref, { is_latest: false });
    });

    // 새 자료 추가
    const newMaterialRef = db.collection('materials').doc();
    batch.set(newMaterialRef, {
      lesson_id: lessonId,
      type,
      title,
      content,
      is_latest: true,
      version: existingSnapshot.docs.length + 1,
      created_at: new Date(),
      updated_at: new Date(),
    });

    await batch.commit();
    return newMaterialRef.id;
  } catch (error) {
    console.error('saveServerMaterial error:', error);
    throw error;
  }
}
