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