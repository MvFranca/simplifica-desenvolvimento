/*
  Warnings:

  - Made the column `usuarioId` on table `comentario` required. This step will fail if there are existing NULL values in that column.
  - Made the column `duvidaId` on table `comentario` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "comentario" DROP CONSTRAINT "comentario_duvidaId_fkey";

-- DropForeignKey
ALTER TABLE "comentario" DROP CONSTRAINT "comentario_usuarioId_fkey";

-- DropIndex
DROP INDEX "comentario_usuarioId_key";

-- AlterTable
ALTER TABLE "comentario" ALTER COLUMN "usuarioId" SET NOT NULL,
ALTER COLUMN "duvidaId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_duvidaId_fkey" FOREIGN KEY ("duvidaId") REFERENCES "duvida"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
