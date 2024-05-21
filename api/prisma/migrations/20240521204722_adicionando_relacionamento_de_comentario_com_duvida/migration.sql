-- AlterTable
ALTER TABLE "comentario" ADD COLUMN     "duvidaId" INTEGER;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_duvidaId_fkey" FOREIGN KEY ("duvidaId") REFERENCES "duvida"("id") ON DELETE SET NULL ON UPDATE CASCADE;
