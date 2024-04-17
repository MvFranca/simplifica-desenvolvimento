import express from "express";
import {
  idPoints,
  updateDiamantes,
  updateFogo,
  selectPontuacao,
} from "../controllers/points";

const router = express.Router();

router.get("/pontuacao", selectPontuacao);

router.put("/updateDiamantes", updateDiamantes);
router.put("/updateFogo", updateFogo);

router.post("/insertIdPoints", idPoints);
//router.post("/fogo", pointsFire);

export default router;
