import dotenv from "dotenv";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

dotenv.config({ path: "./.env" });

export const getContent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const idUserInt = parseInt(id as string);
    
    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'id' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const dataTrilha = await prisma.trilha.findUnique({
        where: {
            id: idUserInt
          },
    });


    const data = await prisma.conteudo.findMany({
        where: {
            titulo: dataTrilha.conteudo
        }
    })


    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Servidor indisponível.",
      error,
    });
  }
};
