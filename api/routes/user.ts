import express from "express"
import { getUser } from "../controllers/users.js";

const router = express.Router();

router.get("/teste", getUser);

export default router