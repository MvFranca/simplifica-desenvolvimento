import pg from "pg";
import dotenv from "dotenv";
import { Request, Response } from "express";
import { getClient } from "../services/connectDB";
const { Client } = pg;
dotenv.config({ path: "./.env" });


async function insert(query, values, func) {
  const conn = await getClient();
  await conn.query(query, values, func);
  return conn;
}

async function update(query, values, func) {
  const conn = await getClient();
  await conn.query(query, values, func);
  return conn;
}

async function consulta(query, values, func) {
  const conn = await getClient();
  await conn.query(query, values, func);
  return conn;
}

export const idPoints = async (req: Request, res: Response) => {
  const { email } = req.body;
  const client = await consulta(
    "SELECT id_usuario FROM usuario WHERE email=$1",
    [email],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Servidor indisponível. Tente novamente mais tarde.",
        });
      } else {
        const id = data.rows[0].id_usuario;
        const pontuacaoInicial = 0;
        const client = await insert(
          `INSERT INTO pontuacaoq (fk_id_usuario, pontuacao) VALUES ($1, $2)`,
          [id, pontuacaoInicial],
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

        // await client.end();

      }
    }
  );
  // await client.end()
};

export const selectDiamondsPoints = async (req: Request, res: Response) => {
  const { idUser } = req.body;

  await consulta(
    "SELECT pontuacao FROM pontuacaoq WHERE fk_id_usuario=$1",
    [idUser],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Servidor indisponível. Tente novamente mais tarde.",
        });
      } else {
        const resposta = data.rows[0];
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
    [pontos, idUser],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Servidor indisponível. Tente novamente mais tarde.",
        });
      } else {
        const resposta = data;
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
