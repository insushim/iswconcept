export { app, auth, db, storage } from './config';
export {
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  onAuthChange,
  getUserProfile,
  updateUserProfile,
} from './auth';
export {
  createLesson,
  getLesson,
  getUserLessons,
  getUserLessonsList,
  updateLesson,
  deleteLesson,
  createMaterial,
  getMaterialsByLesson,
  getMaterial,
  updateMaterial,
  getPublicLessonsList,
  type PublicLessonSummary,
  type UserLessonSummary,
} from './firestore';
