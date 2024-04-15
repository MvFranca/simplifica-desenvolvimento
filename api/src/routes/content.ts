import express from "express";
import { trilha, getProgress, updateProgress } from "../controllers/content";

const router = express.Router();

router.get("/trilha", trilha);
router.get("/getProgress", getProgress);
router.put("/updateProgress", updateProgress);

export default router;
