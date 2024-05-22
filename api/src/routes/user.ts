import express from "express";
import { AttUser, GetUserById, ImgAtt, ImgGet } from "../controllers/users";

const router = express.Router();

router.get("/user/:id", GetUserById);
router.put("/user/:id", AttUser);

router.get("/user/:id/image", ImgGet);
router.put("/user/:id/image", ImgAtt);

export default router;
