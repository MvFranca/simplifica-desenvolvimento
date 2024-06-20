import { PrismaClient, Prisma } from "@prisma/client";
import dotenv from "dotenv";
import { conteudoCreateMany } from "./data/conteudoCreateMany";
import { trilhaCreateMany } from "./data/trilhaCreateMany";
import { questaoCreateMany } from "./data/questaoCreateMany";
import { questaoOrdenadaCreateMany } from "./data/questaoCreateMany";
import { respostasCreateMany } from "./data/respostasCreateMany";
import { respostaOrdenadaCreateMany } from "./data/respostaOrdenadaCreateMany";
import { posicaoValidaCreateMany } from "./data/posicaoValidaCreateMany";
dotenv.config({ path: "./.env" });

const prisma = new PrismaClient();

const load = async () => {
  try {
    if (process.env.PROJECT_STATE === "DEVELOPMENT") {
      await prisma.conteudo.deleteMany();
      await prisma.conteudo.createMany({
        data: conteudoCreateMany,
      });
      await prisma.trilha.deleteMany();
      await prisma.trilha.createMany({
        data: trilhaCreateMany,
      });

      await prisma.questao.deleteMany();
      await prisma.questao.createMany({
        data: questaoCreateMany,
      });
      await prisma.questao.createMany({
        data: questaoOrdenadaCreateMany,
      });

      await prisma.respostas.deleteMany();
      await prisma.respostas.createMany({
        data: respostasCreateMany,
      });
      await prisma.respostaOrdenada.deleteMany();
      await prisma.respostaOrdenada.createMany({
        data: respostaOrdenadaCreateMany,
      })
      await prisma.posicaoValida.deleteMany();
      await prisma.posicaoValida.createMany({
        data: posicaoValidaCreateMany,
      })
    } else {
      throw new Error(
        `Esse comando não é permitido no estado atual da aplicação. Adicione ao arquivo '.env' a variável e valor 'PROJECT_STATE=DEVELOPMENT', o seed deve usado apenas em desenvolvimento.`
      );
    }
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
};

load();
