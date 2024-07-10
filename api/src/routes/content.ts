import express from 'express';
import {
  getContent,
  getQuestions,
  getOrderedQuestions,
} from '../controllers/content';

const router = express.Router();

router.get('/conteudo/:id', getContent);
router.get('/questao/:id', getQuestions);
router.get('/ordenadas/:id', getOrderedQuestions);

export default router;
