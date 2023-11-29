import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import pg from "pg";

const { Client } = pg;
dotenv.config({ path: "./.env" });

async function consulta(query, params, func) {
  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: "Malandro123@",
    host: process.env.DB_HOST_POSTGRESS,
    port: process.env.DB_PORT_POSTGRESS,
    database: process.env.DB,
  });

  await conn.connect();
  await conn.query(query, [params], func);
  return conn;
}

async function insert(query, params, func) {

  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST_POSTGRESS,
    port: process.env.DB_PORT_POSTGRESS,
    database: process.env.DB,
  });

  await conn.connect();
  const values = [
    params.username,
    params.email,
    params.senha,
    params.url_image,
  ];

  await conn.query(query, values, func);
  return conn;

}

export const register = async (req, res) => {
  const { username, email, senha, confirmPassword, url_image } = req.body;

  if (!username) return res.status(422).json({ msg: "O nome é obrigatório!" });
  if (!email) return res.status(422).json({ msg: "O e-mail é obrigatório!" });
  if (!senha) return res.status(422).json({ msg: "A senha é obrigatória!" });
  if (senha != confirmPassword)
    return res.status(422).json({ msg: "As senhas não são iguais" });

  const conn = await consulta(
    "SELECT email FROM usuario WHERE email=$1",
    email,
    async (error, data) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ msg: "Servidor indisponível. Tente novamente mais tarde.1" });
      }

      if (data.length > 0)
        return res.status(500).json({ msg: "E-mail já existente." });
      else {
        const passwordHash = await bcrypt.hash(senha, 8);
        insert(
          `INSERT INTO usuario (username, email, senha, url_image) VALUES ($1, $2, $3, $4)`,
          {
            username: username,
            email: email,
            senha: passwordHash,
            url_image: url_image,
          },
          (error) => {
            if (error) {
              console.log(error);
              return res.status(500).json({
                msg: "Servidor indisponível. Tente novamente mais tarde.",
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
  console.log(conn);
};

export const login = (req, res) => {
  const { email, senha } = req.body;

  consulta(
    "SELECT * FROM usuario WHERE email=$1",
    email,
    async (error, data) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ msg: "Servidor indisponível. Tente novamente mais tarde." });
      }
      if (data.length === 0) {
        return res.status(404).json({ msg: "Usuário não encontrado." });
      } else {
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
            msg: "Servidor indisponível. Tente novamente mais tarde.",
          });
        }
      }
    }
  );
};
