import express from 'express';
import { AttUser, GetUserById, ImgAtt, ImgGet } from '../controllers/users';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/user/:id', authenticate, GetUserById);
router.put('/user/:id', authenticate, AttUser);

router.get('/user/:id/image', ImgGet);
router.put('/user/:id/image', authenticate, ImgAtt);

export default router;
