import { IResposta } from "./IResposta";
import { IUser } from "./IUser";

export interface IDuvida {
  id_duvida: number;
  user: IUser;
  username:string;
  tituloConteudo?: string;
  titulo?: string;
  turma: string;
  conteudo: string;
  descricao?: string;
  // data: Date;
  data: string;
  url_img?: string;
  respostas?: IResposta[];
}