import { Request, Response } from 'express';
import { prisma } from '../services/prisma';

export const FullUsers = async (req: Request, res: Response) => {
  try {
    const data = await prisma.usuario.findMany({
      include: {
        pontuacao: true,
      },
    });

    return res.status(200).json({
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Servidor indisponível.' });
  }
};
