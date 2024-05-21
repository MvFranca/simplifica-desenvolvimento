import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const FindDuvidaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const id_duvidaInt = parseInt(id as string);

    if (isNaN(id_duvidaInt)) {
      return res
        .status(422)
        .json({ msg: `'id' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.duvida.findFirst({
      where: {
        id: id_duvidaInt,
      },
      include: {
        usuario: {
          select: {
            username: true,
            turma: true,
          },
        },
      },
    });

    return res.status(200).json({
      msg: "Dúvida carregada com sucessso!",
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Servidor indisponível.", error });
  }
};

export const FindAllDuvidas = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();

    const data = await prisma.duvida.findMany();

    return res.status(200).json({
      msg: "Dúvidas carregadas com sucessso!",
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Servidor indisponível.", error });
  }
};

export const PostDuvida = async (req: Request, res: Response) => {
  try {
    const { titulo, descricao, url_img, conteudo, /*, data, hora,*/ idUser } =
      req.body;

    if (!titulo)
      return res.status(422).json({ msg: "O título é obrigatório!" });
    if (!descricao)
      return res.status(422).json({ msg: "A descrição é obrigatória!" });
    if (!conteudo)
      return res.status(422).json({ msg: "O conteúdo é obrigatório!" });
    if (!descricao)
      return res.status(422).json({ msg: "A descrição é obrigatória!" });

    const prisma = new PrismaClient();

    const duvidaData = await prisma.duvida.create({
      data: {
        titulo,
        descricao,
        img_url: url_img,
        conteudo,
        usuarioId: idUser,
      },
    });

    return res
      .status(200)
      .json({ msg: "Dúvida cadastrada com sucesso!", data: duvidaData });
  } catch (error) {
    return res.status(500).json({
      msg: "Servidor indisponível.",
      error,
    });
  }
};

export const FindAllComentarios = async (req: Request, res: Response) => {
  try {
    const { id_duvida } = req.params;

    if (!id_duvida) {
      return res.status(422).json({ msg: `'id_duvida' não informado.` });
    }

    const id_duvidaInt = parseInt(id_duvida as string);

    if (isNaN(id_duvidaInt)) {
      return res
        .status(422)
        .json({ msg: `'id_duvida' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.comentario.findMany({
      where: {
        duvidaId: id_duvidaInt,
      },
      include: {
        usuario: {
          select: {
            username: true,
          },
        },
      },
    });

    return res.status(200).json({
      msg: "Comentários encontrados com sucesso!",
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Servidor indisponível.", error });
  }
};

export const FindComentarioById = async (req: Request, res: Response) => {
  try {
    const { id_duvida, id } = req.params;

    const id_duvidaInt = parseInt(id_duvida as string);
    const idInt = parseInt(id as string);

    if (isNaN(id_duvidaInt)) {
      return res
        .status(422)
        .json({ msg: `'id_duvida' informado não é um número (NaN).` });
    }

    if (isNaN(idInt)) {
      return res
        .status(422)
        .json({ msg: `'id' [de comentário] informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.comentario.findFirst({
      where: {
        duvidaId: id_duvidaInt,
        id: idInt,
      },
      include: {
        usuario: {
          select: {
            username: true,
          },
        },
      },
    });

    return res.status(200).json({
      msg: "Comentários encontrados com sucesso!",
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: "Servidor indisponível.", error });
  }
};

export const PostComentario = async (req: Request, res: Response) => {
  try {
    const { descricao, titulo, url_img, /* data, hora,*/ id_duvida, idUser } =
      req.body;

    if (!titulo)
      return res.status(422).json({ msg: "O título é obrigatório!" });
    if (!descricao)
      return res.status(422).json({ msg: "A descrição é obrigatória!" });
    if (!id_duvida)
      return res.status(422).json({ msg: `'id_duvida' não informado.` });

    const id_duvidaInt = parseInt(id_duvida as string);

    if (isNaN(id_duvidaInt)) {
      return res
        .status(422)
        .json({ msg: `'id_duvida' informado não é um número (NaN).` });
    }

    if (!idUser)
      return res.status(422).json({ msg: `'idUser' não informado.` });

    const idUserInt = parseInt(idUser as string);

    if (isNaN(idUserInt)) {
      return res
        .status(422)
        .json({ msg: `'idUser' informado não é um número (NaN).` });
    }

    const prisma = new PrismaClient();

    const data = await prisma.comentario.create({
      data: {
        descricao,
        img_url: url_img,
        usuarioId: idUserInt,
        duvidaId: id_duvidaInt,
        titulo: titulo,
      },
    });

    return res
      .status(200)
      .json({ msg: "Comentário enviado com sucesso!", data });
  } catch (error) {
    return res.status(500).json({
      msg: "Servidor indisponível.",
      error,
    });
  }
};
