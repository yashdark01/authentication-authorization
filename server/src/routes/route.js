import express from 'express';
import userRoute from './user.route.js';
import adminRoute from './admin.route.js';
import bioDataRoute from './bioData.route.js';
import authRoute from './auth.route.js';

const router = express.Router();

router.use('/user', userRoute);
router.use('/admin', adminRoute);
router.use('/auth', authRoute);
router.use('/bioData', bioDataRoute);


export default router;