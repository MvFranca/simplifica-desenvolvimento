import { Request, Response } from "express";

import pg from "pg";
const { Client } = pg;

async function updateImage(query, params, func) {
  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST_POSTGRESS,
    port: parseInt(process.env.DB_PORT_POSTGRESS),
    database: process.env.DB,
  });

  await conn.connect();
  const values = [
    params.url_image,
  ];

  await conn.query(query, values, func);
  return conn;
}

export const ImgAtt = (req: Request, res: Response) => {
  const {urlImg, idUser} = req.body
  

  updateImage(
    'UPDATE usuario SET url_image = $1 WHERE id_usuario = $2',
    {
      url_image: urlImg,
      id_usuario: idUser
    },
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

  let conn = new Client({
    user: process.env.DB_USER_POSTGRESS,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST_POSTGRESS,
    port: parseInt(process.env.DB_PORT_POSTGRESS),
    database: process.env.DB,
  });

  await conn.connect(); // Conecte-se ao banco de dados

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