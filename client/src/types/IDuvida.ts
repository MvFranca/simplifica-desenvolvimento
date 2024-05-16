import { IResposta } from "./IResposta";
import { IUser } from "./IUser";

export interface IDuvida {
  id_duvida: number;
  user: IUser;
  username:string;
  tituloConteudo?: string;
  titulo_duvida?: string;
  turma: string;
  conteudo: string;
  descricao_duvida?: string;
  // data: Date;
  data_duvida: string;
  url_img_duvida?: string;
  respostas_duvida?: IResposta[];
}

export interface IComentario {
  id_duvida: number;
  user: IUser;
  username:string;
  tituloConteudo?: string;
  titulo_comentario?: string;
  turma: string;
  conteudo: string;
  descricao_comentario?: string;
  // data: Date;
  hora_comentario: string;
  data_comentario: string;
  url_img_comentario?: string;
  respostas_comentario?: IResposta[];
}

export interface Duvidas {
  id_duvida: number;
  titulo_duvida: string,
  descricao_duvida: string,
  url_img_duvida: string,
  conteudo: string,
  data_duvida: string,
  hora_duvida: string,
  idUser: number
}