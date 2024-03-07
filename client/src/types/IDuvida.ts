import { IResposta } from "./IResposta";
import { IUser } from "./IUser";

export interface IDuvida {
  id: number;
  user: IUser;
  tituloConteudo?: string;
  titulo?: string;
  descricao?: string;
  data: Date;
  respostas?: IResposta[];
}
