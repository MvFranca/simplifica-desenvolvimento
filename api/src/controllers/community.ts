import { consulta } from "../services/connectDB";
import { Request, Response } from "express";

export const GetDuvidas = async (req: Request, res: Response) => {
  
    await consulta(
      "SELECT * from duvida",
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
            msg: "Dúvidas carregadas com sucessso!",
            data: { resposta },
          });
        }
      }
    );
};

export const PostDuvidas = async (req:Request, res: Response) => {
    const { titulo, descricao, url_img, conteudo, data, hora, idUser } = req.body;
  
    if (!titulo) return res.status(422).json({ msg: "O título é obrigatório!" });
    if (!descricao) return res.status(422).json({ msg: "A descrição é obrigatória!" });
    if (!conteudo) return res.status(422).json({ msg: "O conteúdo é obrigatório!" });
    if (!descricao) return res.status(422).json({ msg: "O e-mail é obrigatório!" });

    await consulta(
    `INSERT INTO duvida (titulo, descricao, url_img, conteudo, data, hora, fk_id_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
        titulo,
        descricao,
        url_img,
        conteudo,
        data,
        hora,
        idUser
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
            .json({ msg: "Dúvida cadastrada com sucesso!" });
        }
    }
    );
  };
  