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
  updateLesson,
  deleteLesson,
  createMaterial,
  getMaterialsByLesson,
  getMaterial,
  updateMaterial,
  addGenerationHistory,
  getGenerationHistory,
} from './firestore';
