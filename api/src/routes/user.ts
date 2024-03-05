import express from "express";
import { GetUser, ImgAtt, ImgGet } from "../controllers/users";

const router = express.Router();


router.post("/img_att" ,ImgAtt);
router.get("/img_get", ImgGet);
router.get("/get_user", GetUser);
router.get("/att_user", AttUser);

export default router;
