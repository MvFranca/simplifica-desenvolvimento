import express from "express";
import { FullUsers } from "../controllers/table";

const router = express.Router();

router.get("/tableusers", FullUsers);

export default router;
