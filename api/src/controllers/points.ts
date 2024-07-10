import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { prisma } from '../services/prisma';
import { AuthCustomRequest } from '../types/AuthCustomRequest';

dotenv.config({ path: './.env' });

export const selectPontuacao = async (req: Request, res: Response) => {
  try {
    const { id_usuario } = req.params;
    const { user_info } = req as AuthCustomRequest;

    const idUserInt = parseInt(id_usuario as string);

    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'id_usuario' informado não é um número (NaN).` });
    }

    if (user_info.id != idUserInt) {
      return res
        .status(401)
        .json({ msg: 'Usuário não autorizado para esta operação.' });
    }

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
      msg: 'Servidor indisponível.',
      error,
    });
  }
};

export const updateDiamantes = async (req: Request, res: Response) => {
  try {
    const { pontos } = req.body;
    const { id_usuario } = req.params;
    const { user_info } = req as AuthCustomRequest;

    const idUserInt = parseInt(id_usuario as string);
    const pontosInt = parseInt(pontos as string);

    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'id_usuario' informado não é um número (NaN).` });
    }

    if (user_info.id != idUserInt) {
      return res
        .status(401)
        .json({ msg: 'Usuário não autorizado para esta operação.' });
    }

    if (isNaN(pontosInt)) {
      return res
        .status(422)
        .json({ msg: `'pontos' informado não é um número (NaN).` });
    }

    const data = await prisma.pontuacao.update({
      where: { usuarioId: idUserInt },
      data: {
        pontuacao: pontosInt,
      },
    });

    return res.status(200).json({
      msg: 'Atualização realizada!!',
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Servidor indisponível.',
      error,
    });
  }
};

export const updateFogo = async (req: Request, res: Response) => {
  try {
    const { fogo } = req.body;
    const { id_usuario } = req.params;
    const { user_info } = req as AuthCustomRequest;

    const idUserInt = parseInt(id_usuario as string);
    const fogoInt = parseInt(fogo as string);

    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'id_usuario' informado não é um número (NaN).` });
    }

    if (user_info.id != idUserInt) {
      return res
        .status(401)
        .json({ msg: 'Usuário não autorizado para esta operação.' });
    }

    if (isNaN(fogoInt)) {
      return res
        .status(422)
        .json({ msg: `'fogo' informado não é um número (NaN).` });
    }

    const data = await prisma.pontuacao.update({
      where: { usuarioId: idUserInt },
      data: {
        fogo: fogoInt,
      },
    });

    return res.status(200).json({
      msg: 'Atualização realizada!!',
      data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Servidor indisponível.',
      error,
    });
  }
};
