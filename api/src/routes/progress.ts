import express from 'express';
import {
  findAllTrilha,
  getProgress,
  updateProgress,
} from '../controllers/progress';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/trilha', findAllTrilha);
router.get('/user/:id_usuario/progresso', authenticate, getProgress);
router.put('/user/:id_usuario/progresso', authenticate, updateProgress);

export default router;
