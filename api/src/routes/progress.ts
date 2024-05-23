import express from "express";
import {
  findAllTrilha,
  getProgress,
  updateProgress,
} from "../controllers/progress";

const router = express.Router();

router.get("/trilha", findAllTrilha);
router.get("/user/:id_usuario/progresso", getProgress);
router.put("/user/:id_usuario/progresso", updateProgress);

export default router;
