import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, type Firestore, enableNetwork, initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim(),
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.trim(),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim(),
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET?.trim(),
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID?.trim(),
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.trim(),
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID?.trim(),
};

console.log('[Firebase] 설정 로드:', {
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  apiKey: firebaseConfig.apiKey ? '설정됨' : '없음',
});

// Initialize Firebase (싱글톤 패턴)
let app;
if (getApps().length > 0) {
  app = getApp();
  console.log('[Firebase] 기존 App 사용');
} else {
  app = initializeApp(firebaseConfig);
  console.log('[Firebase] 새 App 초기화 완료');
}

const auth = getAuth(app);
console.log('[Firebase] Auth 초기화 완료');

// Firestore 초기화 - 오프라인 캐시 비활성화하여 네트워크 문제 확인
let db: Firestore;
try {
  db = getFirestore(app);
  console.log('[Firebase] Firestore 초기화 완료');
} catch (error) {
  console.error('[Firebase] Firestore 초기화 실패:', error);
  throw error;
}

// Firestore 네트워크 연결 확인
if (typeof window !== 'undefined') {
  enableNetwork(db)
    .then(() => {
      console.log('[Firebase] Firestore 네트워크 연결됨');
    })
    .catch((err) => {
      console.error('[Firebase] Firestore 네트워크 연결 실패:', err);
    });
}

const storage = getStorage(app);

export { app, auth, db, storage };
