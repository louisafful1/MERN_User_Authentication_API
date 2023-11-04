import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { authUser, registerUser,
    logoutUser,
    getUserProfile,
    updateUser 
} from '../controllers/userController.js';
const router = express.Router();
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUser); //getUserProfile and updateUser have the same route but different methods


export default router;