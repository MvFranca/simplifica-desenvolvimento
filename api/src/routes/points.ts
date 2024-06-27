import express from 'express';
import {
  updateDiamantes,
  updateFogo,
  selectPontuacao,
} from '../controllers/points';

const router = express.Router();

router.get('/user/:id_usuario/pontuacao', selectPontuacao);
router.put('/user/:id_usuario/diamantes', updateDiamantes);
router.put('/user/:id_usuario/fogo', updateFogo);

export default router;
