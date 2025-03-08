import express from 'express';
import { findAll, findOne, create, update, deleteBioData } from '../controllers/bioData.controller.js'; 

const router = express.Router();

router.get('/', findAll);
router.get('/:bioDataId', findOne);
router.post('/', create);
router.put('/:bioDataId', update);
router.delete('/:bioDataId', deleteBioData);

export default router;