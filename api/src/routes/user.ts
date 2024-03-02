import express from "express";
import { ImgAtt, ImgGet } from "../controllers/users";

const router = express.Router();


router.post("/img_att" ,ImgAtt);
router.get("/img_get", ImgGet);

export default router;
