import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

export const GetUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const idInt = parseInt(id as string);

    if (isNaN(idInt)) {
      return res
        .status(422)
        .json({ msg: `'id' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.usuario.findFirst({
      where: {
        id: idInt,
      },
    });

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

export const AttUser = async (req: Request, res: Response) => {
  try {
    const { id_usuario } = req.params;
    const { fullname, username, email, turma } = req.body;

    const idUserInt = parseInt(id_usuario as string);

    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'id_usuario' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const foundUser = await prisma.usuario.findUnique({
      where: {
        email,
      },
    });

    if (foundUser) {
      const data = await prisma.usuario.update({
        where: {
          id: idUserInt,
        },
        data: {
          fullname,
          username,
          email,
          turma,
        },
      });

      return res
        .status(200)
        .json({ msg: "Usuário atualizado com sucesso!", data });
    } else {
      return res.status(404).json({ msg: "Usuário não encontrado." });
    }
  } catch (error) {
    return res.status(500).json({
      msg: "Servidor indisponível",
      error,
    });
  }
};

export const ImgAtt = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { urlImg } = req.body;

    const idInt = parseInt(id as string);

    if (isNaN(idInt)) {
      return res
        .status(422)
        .json({ msg: `'id' informado não é um número (NaN).` });
    }

    if (!urlImg) {
      return res.status(422).json({ msg: `'urlImg' não informado.` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.usuario.update({
      where: {
        id: idInt,
      },
      data: {
        url_image: urlImg,
      },
      select: {
        id: true,
        url_image: true,
      },
    });

    return res.status(200).json({
      msg: "Imagem de usuário atualizada com sucesso!",
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Servidor indisponível.",
      error,
    });
  }
};

export const ImgGet = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const idInt = parseInt(id as string);

    if (isNaN(idInt)) {
      return res
        .status(422)
        .json({ msg: `'id' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.usuario.findFirst({
      where: {
        id: idInt,
      },
      select: {
        id: true,
        url_image: true,
      },
    });

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
