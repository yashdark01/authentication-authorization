import express from 'express';
import { getToken } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/token/check', getToken);

export default router;