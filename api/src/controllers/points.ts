import dotenv from "dotenv";
import { Request, Response } from "express";
import { consulta } from "../services/connectDB";
import { PrismaClient } from "@prisma/client";

dotenv.config({ path: "./.env" });

export const idPoints = async (req: Request, res: Response) => {
  const { email } = req.body;
  await consulta(
    "SELECT id_usuario FROM usuario WHERE email=$1",
    [email],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Servidor indisponível. Tente novamente mais tarde.",
        });
      } else {
        const id = data.rows[0].id_usuario;
        const pontuacaoInicial = 0;
        await consulta(
          `INSERT INTO pontuacaoq (fk_id_usuario, pontuacao) VALUES ($1, $2)`,
          [id, pontuacaoInicial],
          async (error) => {
            if (error) {
              console.log(error);
              return res.status(500).json({
                msg: "Servidor indisponível. Tente novamente mais tarde.",
              });
            } else {
              return res.status(200).json({
                msg: "Dados inseridos",
                data: { id },
              });
            }
          }
        );
      }
    }
  );
};

export const selectPontuacao = async (req: Request, res: Response) => {
  try {
    const { id_usuario } = req.params;

    const idUserInt = parseInt(id_usuario as string);

    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'id_usuario' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.pontuacao.findFirst({
      where: {
        usuarioId: idUserInt,
      },
    });

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Servidor indisponível.",
    });
  }
};

export const updateDiamantes = async (req: Request, res: Response) => {
  try {
    const { pontos } = req.body;
    const { id_usuario } = req.params;

    const idUserInt = parseInt(id_usuario as string);
    const pontosInt = parseInt(pontos as string);

    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'id_usuario' informado não é um número (NaN).` });
    }

    if (isNaN(pontosInt)) {
      return res
        .status(422)
        .json({ msg: `'pontos' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.pontuacao.update({
      where: { usuarioId: idUserInt },
      data: {
        pontuacao: pontosInt,
      },
    });

    return res.status(200).json({
      msg: "Atualização realizada!!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Servidor indisponível.",
    });
  }
};

export const updateFogo = async (req: Request, res: Response) => {
  try {
    const { fogo } = req.body;
    const { id_usuario } = req.params;

    const idUserInt = parseInt(id_usuario as string);
    const fogoInt = parseInt(fogo as string);

    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'id_usuario' informado não é um número (NaN).` });
    }

    if (isNaN(fogoInt)) {
      return res
        .status(422)
        .json({ msg: `'fogo' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.pontuacao.update({
      where: { usuarioId: idUserInt },
      data: {
        fogo: fogoInt,
      },
    });

    return res.status(200).json({
      msg: "Atualização realizada!!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Servidor indisponível.",
    });
  }
};
