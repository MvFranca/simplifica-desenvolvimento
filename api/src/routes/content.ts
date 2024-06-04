import express from "express";
import {
    getContent
} from "../controllers/content";

const router = express.Router();

router.get("/conteudo/:id", getContent);

export default router;
