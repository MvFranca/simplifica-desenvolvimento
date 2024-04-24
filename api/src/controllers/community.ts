import { consulta } from "../services/connectDB";
import { Request, Response } from "express";

export const GetDuvidas = async (req: Request, res: Response) => {
  
  const {id_duvida} = req.query
  
  const select  = id_duvida ? 
  "SELECT duvida.*, usuario.username, usuario.turma FROM duvida JOIN usuario ON duvida.fk_id_usuario = usuario.id_usuario WHERE duvida.id_duvida = $1 AND usuario.id_usuario = duvida.fk_id_usuario; " : "SELECT * from duvida"
  const values = id_duvida ? [id_duvida] : []
  
  await consulta(
      select,
      values,
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
          msg: "Comentários carregadas com sucessso!",
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
    if (!descricao) return res.status(422).json({ msg: "A descrição é obrigatória!" });

    await consulta(
    `INSERT INTO duvida (titulo_duvida, descricao_duvida, url_img_duvida, conteudo, data_duvida, hora_duvida, fk_id_usuario) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
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


  export const GetRespostas = async (req: Request, res: Response) => {
  
    const {id_duvida} = req.query

    
    const select  = id_duvida ? 
    "SELECT comentarios.*, usuario.username FROM comentarios JOIN usuario ON comentarios.fk_id_usuario = usuario.id_usuario WHERE comentarios.fk_id_duvida = $1; " : "SELECT * from duvida"
    const values = id_duvida ? [id_duvida] : []
    
    await consulta(
        select,
        values,
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

  export const PostComentario = async (req:Request, res: Response) => {
    const { descricao, url_img, data, hora, id_duvida, idUser } = req.body;
  
    if (!descricao) return res.status(422).json({ msg: "A descrição é obrigatória!" });

    await consulta(
    `INSERT INTO comentarios (fk_id_usuario, titulo_comentario, descricao_comentario, url_img_comentario, data_comentario, hora_comentario, fk_id_duvida) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [
        idUser,
        '',
        descricao,
        url_img,
        data,
        hora,
        id_duvida
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
            .json({ msg: "Comentário enviado com sucesso!" });
        }
    }
    );
  };
  