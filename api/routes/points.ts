import express from "express";
import { selectDiamondsPoints, idPoints, updateDiamantes } from "../controllers/points.js";

const router = express.Router();

router.post("/diamantes", selectDiamondsPoints);
router.put("/updateDiamantes", updateDiamantes);
router.post("/insertIdPoints", idPoints);
//router.post("/fogo", pointsFire);

export default router;
