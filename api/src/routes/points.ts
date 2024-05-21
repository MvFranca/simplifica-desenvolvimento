import express from "express";
import {
  idPoints,
  updateDiamantes,
  updateFogo,
  selectPontuacao,
} from "../controllers/points";

const router = express.Router();

router.get("/user/:id_usuario/pontuacao", selectPontuacao);
router.put("/user/:id_usuario/pontuacao", updateDiamantes);
router.put("/user/:id_usuario/pontuacao", updateFogo);

router.post("/insertIdPoints", idPoints);

export default router;
