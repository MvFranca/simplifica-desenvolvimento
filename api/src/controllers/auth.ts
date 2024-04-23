import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import pg from "pg";
import { consulta, getClient } from "../services/connectDB";

const { Client } = pg;
dotenv.config({ path: "./.env" });

export const register = async (req, res) => {
  const { username, email, senha, confirmPassword, url_image, fullname, turma } = req.body;

  if (!fullname) return res.status(422).json({ msg: "Nome completo é obrigatório!" });
  if (!turma) return res.status(422).json({ msg: "A turma é obrigatória!" });
  if (!username) return res.status(422).json({ msg: "Usuário é obrigatório!" });
  if (!email) return res.status(422).json({ msg: "O e-mail é obrigatório!" });
  if (!senha) return res.status(422).json({ msg: "A senha é obrigatória!" });
  
  if (senha.length < 8) return res.status(422).json({ msg: "A senha precisa de no mínimo 8 caracteres!" });
  if (senha != confirmPassword)
    return res.status(422).json({ msg: "As senhas não são iguais" });

  const conn = await consulta(
    `SELECT email FROM usuario WHERE email=$1`,
    [email],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ msg: "Servidor indisponível." });
      }

      await consulta(
        `SELECT username FROM usuario WHERE username=$1`,
        [username],
        async (error, data) => {
          if (error) {
            console.log(error);
            return res
            .status(500)
            .json({ msg: "Servidor indisponível." });
          }
          if (data.rows.length > 0 ) return res.status(500).json({ msg: "Username já existente." });
        }
      );

      if (data.rows.length > 0) return res.status(500).json({ msg: "E-mail já existente." });

      else {
        const passwordHash = await bcrypt.hash(senha, 8);
        await consulta(
          `INSERT INTO usuario (fullname, username, email, senha, url_image, turma) VALUES ($1, $2, $3, $4, $5, $6)`,
          [
            fullname,
            username,
            email,
            passwordHash,
            url_image,
            turma
          ],
          (error) => {
            if (error) {
              console.log(error);
              return res.status(500).json({
                msg: "Servidor indisponível.",
              });
            } else {
              return res
                .status(200)
                .json({ msg: "Cadastro realizado com sucesso!" });
            }
          }
        );
      }
    }
  );
};

export const login = async (req, res) => {
  const { email, senha } = req.body;

    const conn = await consulta(
      "SELECT * FROM usuario WHERE email=$1",
    [email],
      async (error, data) => {
        if (error) {
          console.log(error);
          return res
            .status(500)
            .json({ msg: "Servidor indisponível." });
        }
        if (data.rows[0]) {
          console.log(data);
          var user = data.rows[0];
  
          const checkPassword = await bcrypt.compare(senha, user.senha);
          if (!checkPassword)
            return res.status(422).json({ msg: "Senha incorreta." });
  
          try {
            const refreshToken = jwt.sign(
              {
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                id: user.senha,
              },
              process.env.REFRESH,
              { algorithm: "HS256" }
            );
            const token = jwt.sign(
              {
                exp: Math.floor(Date.now() / 1000) + 3600,
                id: user.senha,
              },
              process.env.TOKEN,
              { algorithm: "HS256" }
            );
            res.status(200).json({
              msg: "Usuário logado com sucesso!",
              data: { user, token: { token, refreshToken } },
            });
            
          } catch (error) {
            console.log(error);
            return res.status(500).json({
              msg: "Servidor indisponível.",
            });
          }
          finally{
            conn.end()
          }
        } else {
          return res.status(404).json({ msg: "Usuário não encontrado." });
        }
      }
    );


};
