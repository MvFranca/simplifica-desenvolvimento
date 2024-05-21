/*
  Warnings:

  - Made the column `usuarioId` on table `pontuacao` required. This step will fail if there are existing NULL values in that column.
  - Made the column `usuarioId` on table `progresso` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "pontuacao" DROP CONSTRAINT "pontuacao_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "progresso" DROP CONSTRAINT "progresso_usuarioId_fkey";

-- AlterTable
ALTER TABLE "pontuacao" ALTER COLUMN "usuarioId" SET NOT NULL;

-- AlterTable
ALTER TABLE "progresso" ALTER COLUMN "usuarioId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "pontuacao" ADD CONSTRAINT "pontuacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progresso" ADD CONSTRAINT "progresso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
