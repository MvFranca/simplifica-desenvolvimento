import express from "express";
import {
  findAllTrilha,
  getProgress,
  updateProgress,
} from "../controllers/content";

const router = express.Router();

router.get("/trilha", findAllTrilha);
router.get("/user/:id_usuario/progresso", getProgress);
router.put("/user/:id_usuario/progresso", updateProgress);

export default router;
