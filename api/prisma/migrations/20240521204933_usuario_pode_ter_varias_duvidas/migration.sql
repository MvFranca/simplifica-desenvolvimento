/*
  Warnings:

  - Made the column `usuarioId` on table `duvida` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "duvida" DROP CONSTRAINT "duvida_usuarioId_fkey";

-- DropIndex
DROP INDEX "duvida_usuarioId_key";

-- AlterTable
ALTER TABLE "duvida" ALTER COLUMN "usuarioId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "duvida" ADD CONSTRAINT "duvida_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
