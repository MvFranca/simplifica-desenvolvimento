import pg from "pg";
import dotenv from "dotenv";
import { Request, Response } from "express";

const { Client } = pg;
dotenv.config({ path: "./.env" });

async function insert(query, params, func) {
  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST_POSTGRESS,
    port: parseInt(process.env.DB_PORT_POSTGRESS || "5432"),
    database: process.env.DB,
  });

  await conn.connect();
  const values = [params.fk_id_usuario, params.pontuacao];

  await conn.query(query, values, func);
  return conn;
}

async function update(query, params, func) {
  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST_POSTGRESS,
    port: parseInt(process.env.DB_PORT_POSTGRESS || "5432"),
    database: process.env.DB,
  });

  await conn.connect();
  const values = [params.pontos, params.idUser];

  await conn.query(query, values, func);
  return conn;
}

async function consulta(query, params, func) {
  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST_POSTGRESS,
    port: parseInt(process.env.DB_PORT_POSTGRESS || "5432"),
    database: process.env.DB,
  });
  await conn.connect();

  await conn.query(query, [params], func);

  return conn;
}

export const idPoints = async (req: Request, res: Response) => {
  const { email } = req.body;
  await consulta(
    "SELECT id_usuario FROM usuario WHERE email=$1",
    email,
    async (error, data) => {
      if (error) {
        console.log(error);

        return res
          .status(500)
          .json({ msg: "Servidor indisponível. Tente novamente mais tarde." });
      } else {
        const id = await data.rows[0].id_usuario;
        const pontuacaoInicial = 0;

        await insert(
          `INSERT INTO pontuacaoq (fk_id_usuario, pontuacao) VALUES ($1, $2)`,
          {
            fk_id_usuario: id,
            pontuacao: pontuacaoInicial,
          },
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

export const selectDiamondsPoints = async (req: Request, res: Response) => {

  const { idUser } = req.body;


  console.log("id: ")
  console.log(idUser)

  await consulta(
    "SELECT pontuacao FROM pontuacaoq WHERE fk_id_usuario=$1",
    idUser,
    async (error, data) => {
      if (error) {
        console.log(error);

        return res
          .status(500)
          .json({ msg: "Servidor indisponível. Tente novamente mais tarde." });
      } else {
        const resposta = await data.rows[0];
        console.log("resposta: ")
        console.log(resposta)

        return res.status(200).json({
          msg: "Pontos atualizados!",
          data: { resposta },
        });
      }
    }
  );
};

export const updateDiamantes = async (req: Request, res: Response) => {
  const { idUser, pontos } = req.body;

  await update(
    "UPDATE pontuacaoq SET pontuacao=$1 WHERE fk_id_usuario=$2",
    {
      pontos: pontos,
      idUser: idUser,
    },
    async (error, data) => {
      if (error) {
        console.log(error);

        return res
          .status(500)
          .json({ msg: "Servidor indisponível. Tente novamente mais tarde.1" });
      } else {
        const resposta = await data;
        console.log(resposta);

        return res.status(200).json({
          msg: "Atualização realizada!!",
          data: { resposta },
        });
      }
    }
  );
};

export const pointsFire = () => {};
