import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

dotenv.config({ path: "./.env" });

export const register = async (req: Request, res: Response) => {
  try {
    const {
      username,
      email,
      senha,
      confirmPassword,
      url_image,
      fullname,
      turma,
    } = req.body;

    if (!fullname)
      return res.status(422).json({ msg: "Nome completo é obrigatório!" });
    if (!turma) return res.status(422).json({ msg: "A turma é obrigatória!" });
    if (!username)
      return res.status(422).json({ msg: "Usuário é obrigatório!" });
    if (!email) return res.status(422).json({ msg: "O e-mail é obrigatório!" });
    if (!senha) return res.status(422).json({ msg: "A senha é obrigatória!" });
    if (senha != confirmPassword)
      return res.status(422).json({ msg: "As senhas não são iguais" });

    const prisma = new PrismaClient();

    const alreadyExists = await prisma.usuario.findFirst({ where: { email } });

    if (alreadyExists) {
      return res.status(422).json({ msg: "E-mail já registrado." });
    }

    const passwordHash = await bcrypt.hash(senha, 8);

    const data = await prisma.usuario.create({
      data: {
        fullname,
        username,
        email,
        url_image,
        senha: passwordHash,
        turma,
      },
    });

    return res
      .status(200)
      .json({ msg: "Cadastro realizado com sucesso!", data });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: "Servidor indisponível. " + (error as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;

    const prisma = new PrismaClient();

    const user = await prisma.usuario.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      const checkPassword = await bcrypt.compare(senha, user.senha);
      if (!checkPassword) {
        return res.status(422).json({ msg: "Senha incorreta." });
      }

      const refreshToken = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 horas
          id: user.senha,
        },
        process.env.REFRESH,
        { algorithm: "HS256" }
      );
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 1 * 60 * 60, // 1 hora
          id: user.senha,
        },
        process.env.TOKEN,
        { algorithm: "HS256" }
      );

      return res.status(200).json({
        msg: "Usuário logado com sucesso!",
        data: { user, token: { token, refreshToken } },
      });
    } else {
      return res.status(404).json({ msg: "Usuário não encontrado." });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Servidor indisponível." });
  }
};
