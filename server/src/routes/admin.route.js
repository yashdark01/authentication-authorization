import express from 'express';
import {createAdmin, loginAdmin, getAdmins, getAdminById, updateAdmin, getAllUsers, deleteUser} from '../controllers/admin.contoller.js';
// import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

// Admin routes
router.post('/login', loginAdmin);
router.post('/register', createAdmin);

// Protected routes
// router.use(authMiddleware.verifyToken);

router.get('/users', getAllUsers);
router.delete('/user/:id', deleteUser);
router.get('/', getAdmins);
router.get('/:id', getAdminById);
router.put('/:id', updateAdmin);

export default router;