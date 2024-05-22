import express from "express";
import {
  FindDuvidaById,
  FindAllDuvidas,
  FindAllComentarios,
  PostComentario,
  PostDuvida,
  FindComentarioById,
} from "../controllers/community";

const router = express.Router();

router.get("/duvidas", FindAllDuvidas);
router.get("/duvidas/:id", FindDuvidaById);
router.post("/duvidas", PostDuvida);

router.get("/duvidas/:id_duvida/comentarios", FindAllComentarios);
router.get("/duvidas/:id_duvida/comentarios/:id", FindComentarioById);
router.post("/comentarios", PostComentario);

export default router;
