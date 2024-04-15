import { consulta } from "../services/connectDB";
import { Request, Response } from "express";

export const trilha = async (req: Request, res: Response) => {
  
    await consulta(
      "SELECT * from trilha",
      []
      ,
      async (error, data) => {
        if (error) {
          console.log(error);
          console.log("error");
          return res
            .status(500)
            .json({ msg: "Servidor indisponível. Tente novamente mais tarde." });
        } else {
          const resposta = await data.rows;
          console.log("resposta: ", resposta);
          return res.status(200).json({
            msg: "Dados carregados com sucessso!",
            data: { resposta },
          });
        }
      }
    );
};


export const getProgress = async (req: Request, res: Response) => {

    const {idUser}  = req.query;

    await consulta(
      "SELECT * FROM progresso WHERE fk_id_usuario=$1",
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
            msg: "Progresso encontrado!",
            data: { resposta },
          });
        }
      }
    );

}


export const updateProgress = async (req: Request, res: Response) => {

    const {idUser, myProgress, progressoBotoes}  = req.body;

    await consulta(
        'UPDATE progresso SET id_progresso = $1, avanco = $2 WHERE fk_id_usuario = $3',
        [myProgress, progressoBotoes, idUser],
        (error) => {
          if (error) {
            console.log(error);
            return res.status(500).json({
              msg: "Servidor indisponível. Tente novamente.",
            });
          } else {
            return res
              .status(200)
              .json({ msg: "Progresso atualizado com sucesso!" });
          }
        }
      );

}