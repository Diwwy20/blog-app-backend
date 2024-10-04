import express from 'express';
import { registerUser, loginUser, userProfile, updateProfile, updateProfilePicture, getAllUsers, deleteUser } from '../controllers/userControllers';
import { adminGuard, authGuard } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authGuard, userProfile);
router.put('/update/profile/:userId', authGuard, updateProfile);
router.put('/update/profile/picture', authGuard, updateProfilePicture);
router.get('/', authGuard, adminGuard, getAllUsers);
router.delete("/:userId", authGuard, adminGuard, deleteUser);

export default router