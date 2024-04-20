import express from "express";
import { GetDuvidas, GetRespostas, PostComentario, PostDuvidas } from "../controllers/community";

const router = express.Router();

router.get("/duvidas", GetDuvidas);
router.post("/post_duvidas", PostDuvidas);

router.get("/comentarios", GetRespostas);
router.post("/post_comentarios", PostComentario);

export default router;
