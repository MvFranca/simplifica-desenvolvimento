import express from "express";
import { GetDuvidas, PostDuvidas } from "../controllers/community";

const router = express.Router();

router.get("/duvidas", GetDuvidas);
router.post("/post_duvidas", PostDuvidas);


export default router;
