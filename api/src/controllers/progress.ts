import { Request, Response } from 'express';
import { prisma } from '../services/prisma';
import { AuthCustomRequest } from '../types/AuthCustomRequest';

export const findAllTrilha = async (req: Request, res: Response) => {
  try {
    const data = await prisma.trilha.findMany();

    return res.status(200).json({
      msg: 'Dados carregados com sucesso!',
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Servidor indisponível.', error });
  }
};

export const getProgress = async (req: Request, res: Response) => {
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

    const data = await prisma.progresso.findFirst({
      where: {
        usuarioId: idUserInt,
      },
    });

    return res.status(200).json({
      msg: 'Progresso encontrado!',
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: 'Servidor indisponível.', error });
  }
};

export const updateProgress = async (req: Request, res: Response) => {
  try {
    const { id_usuario } = req.params;
    const { myProgress, progressoBotoes } = req.body;
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

    const data = await prisma.progresso.update({
      where: {
        usuarioId: idUserInt,
      },
      data: {
        conteudoId: myProgress,
        avanco: progressoBotoes,
      },
    });

    return res
      .status(200)
      .json({ msg: 'Progresso atualizado com sucesso!', data });
  } catch (error) {
    return res.status(500).json({ msg: 'Servidor indisponível.', error });
  }
};
