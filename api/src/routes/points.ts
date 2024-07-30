import express from 'express';
import {
  updateDiamantes,
  updateFogo,
  selectPontuacao,
} from '../controllers/points';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/user/:id_usuario/pontuacao', authenticate, selectPontuacao);
router.put('/user/:id_usuario/diamantes', authenticate, updateDiamantes);
router.put('/user/:id_usuario/fogo', authenticate, updateFogo);

export default router;
