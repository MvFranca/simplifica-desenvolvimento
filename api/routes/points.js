import express from "express"
import { pointsDiamonds } from "../controllers/points.js";

const router = express.Router();
 
router.post("/diamantes", pointsDiamonds);
//router.post("/fogo", pointsFire);

export default router