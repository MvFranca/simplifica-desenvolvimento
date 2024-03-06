import { Request, Response } from "express";

import pg from "pg";
import { consulta, getClient } from "../services/connectDB";
const { Client } = pg;

export const GetUser = async (req: Request, res: Response) => {
  const { idUser } = req.params;
  const conn = await getClient();

  await conn.connect();
  await conn.query(
    "SELECT * FROM usuario WHERE id_usuario=$1",
    [idUser],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ msg: "Servidor indisponível. Tente novamente mais tarde." });
      } else {
        const resposta = await data;
        return res.status(200).json({
          msg: "Usuário buscado com sucesso!",
          data: { resposta },
        });
      }
    }
  );
};

export const AttUser = async (req: Request, res: Response) => {
  const { idUser, fullname, username, email, turma } = req.body

  await consulta(
    `SELECT email FROM usuario WHERE email=$1`,
    [email],
    async (error, data) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ msg: "Servidor indisponível." });
      }

      if (data.rows.length > 0) return res.status(500).json({ msg: "E-mail já existente." });
      else{
        await consulta(
          'SELECT username FROM usuario WHERE username=$1',
          [username],
          async (error, data) => {
            if (error) {
              return res
                .status(500)
            }
          }
        );
        await consulta(
          'UPDATE usuario SET fullname = $1, username = $2, email = $3, turma = $4 WHERE id_usuario = $5',
          [fullname, username, email, turma, idUser],
          (error) => {
            if (error) {
              console.log(error);
              return res.status(500).json({
                msg: "Servidor indisponível. Tente novamente.",
              });
            } else {
              return res
                .status(200)
                .json({ msg: "Usuário atualizado com sucesso!" });
            }
          }
        );
      }
    }
  );
};

export const ImgAtt = async (req: Request, res: Response) => {
  const {urlImg, idUser} = req.body
  await consulta(
    'UPDATE usuario SET url_image = $1 WHERE id_usuario = $2',
    [urlImg, idUser],
    (error) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Servidor indisponível. testee.",
        });
      } else {
        return res
          .status(200)
          .json({ msg: "Imagem atualizada com sucesso!" });
      }
    }
  );

  res.status(200).json({ msg: "funcionando!!" });

};


export const ImgGet = async (req: Request, res: Response) => {
  const { idUser } = req.params;
  console.log("idUser: ", idUser);
  await consulta(
    "SELECT url_image FROM usuario WHERE id_usuario=$1",
    [idUser],
    async (error, data) => {
      if (error) {
        console.log(error);
        console.log("error");
        return res
          .status(500)
          .json({ msg: "Servidor indisponível. Tente novamente mais tarde." });
      } else {
        // const resposta = await data.rows[0];
        const resposta = await data;
        console.log("resposta: ", resposta);
        return res.status(200).json({
          msg: "Imagem Carregada!",
          data: { resposta },
        });
      }
    }
  );
};