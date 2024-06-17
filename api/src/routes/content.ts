import express from "express";
import {
    getContent,
    getQuestions
} from "../controllers/content";

const router = express.Router();

router.get("/conteudo/:id", getContent);

router.get("/questao/:id", getQuestions);

export default router;
