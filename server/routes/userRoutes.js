import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

// creates an instance of express router, used to group related routes and middleware handlers
const router = express.Router();

// defines POST/GET routes and certain endpoints and then the controller function must handle the request
router.post('/register', registerUser);
router.post('/login', authUser);
router.post('/logout', logoutUser);
router.get('/profile', protect, getUserProfile);

export default router;
