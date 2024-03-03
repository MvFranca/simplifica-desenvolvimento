import { Request, Response } from "express";
import pg from "pg";
import { getClient } from "../services/connectDB";
const { Client } = pg;


async function consulta(query, func) {
  const conn = await getClient();

  await conn.connect();
  
  await conn.query(query, func);
  
  return conn;
}


export const FullUsers = async (req: Request, res: Response) => {

  

    await consulta(
      "SELECT id_usuario, username, turma, pontuacao FROM usuario INNER JOIN pontuacaoq ON usuario.id_usuario = pontuacaoq.fk_id_usuario",
      async (error, data) => {
        if (error) {
          console.log(error);
  
          return res
            .status(500)
            .json({ msg: "Servidor indisponível. Tente novamente mais tarde." });
        } else {
          const resposta = await data.rows[0].pontuacao;
  
          return res.status(200).json({
            msg: "Pontos atualizados!",
            data: { data },
          });
        }
      }
    );
  };
  