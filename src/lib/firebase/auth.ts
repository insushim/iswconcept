'use client';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';
import { auth, db } from './config';

// 회원가입
export async function signUp(email: string, password: string, name: string) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // 프로필 업데이트
  await updateProfile(user, { displayName: name });

  // Firestore에 사용자 정보 저장
  const now = Timestamp.now();
  await setDoc(doc(db, 'users', user.uid), {
    id: user.uid,
    email: user.email,
    name: name,
    role: 'teacher',
    created_at: now,
    updated_at: now,
  });

  return user;
}

// 로그인
export async function signIn(email: string, password: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

// 로그아웃
export async function signOut() {
  await firebaseSignOut(auth);
}

// 현재 사용자 가져오기
export function getCurrentUser(): User | null {
  return auth.currentUser;
}

// 인증 상태 변화 감지
export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// 사용자 프로필 가져오기
export async function getUserProfile(userId: string) {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }
  return null;
}

// 사용자 프로필 업데이트
export async function updateUserProfile(
  userId: string,
  data: {
    name?: string;
    school_name?: string;
    default_grade?: number;
    default_subject?: string;
  }
) {
  const docRef = doc(db, 'users', userId);
  await setDoc(docRef, { ...data, updated_at: Timestamp.now() }, { merge: true });
}
