import { IResposta } from './IResposta';
import { IUser } from './IUser';

export interface IDuvida {
  id: number;
  user: IUser;
  username: string;
  tituloConteudo?: string;
  titulo?: string;
  turma: string;
  conteudo: string;
  descricao?: string;
  // data: Date;
  data: string;
  img_url?: string;
  url_img: string;
  respostas?: IResposta[];
  usuario: IUser;
  createdAt: string;
}

export interface IComentario {
  id: number;
  id_duvida: number;
  user: IUser;
  username: string;
  tituloConteudo?: string;
  titulo_comentario?: string;
  turma: string;
  conteudo: string;
  descricao?: string;
  // data: Date;
  hora_comentario: string;
  data_comentario: string;
  img_url?: string;
  respostas?: IResposta[];
  usuario?: IUser;
}

export interface Duvidas {
  id: number;
  titulo: string;
  descricao: string;
  img_url: string;
  url_img: string;
  conteudo: string;
  // data_duvida: string,
  // hora_duvida: string,
  idUser: number;
  usuario: IUser;
  createdAt: string;
}
