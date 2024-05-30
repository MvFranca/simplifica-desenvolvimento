import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import { conteudoCreateMany } from "./data/conteudoCreateMany";
import { trilhaCreateMany } from "./data/trilhaCreateMany";
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
