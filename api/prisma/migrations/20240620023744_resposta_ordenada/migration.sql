-- CreateTable
CREATE TABLE "RespostaOrdenada" (
    "id" SERIAL NOT NULL,
    "bloco" TEXT NOT NULL,
    "questaoId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "RespostaOrdenada_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PosicaoValida" (
    "id" SERIAL NOT NULL,
    "index" INTEGER NOT NULL,
    "respostaId" INTEGER NOT NULL,

    CONSTRAINT "PosicaoValida_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RespostaOrdenada_questaoId_key" ON "RespostaOrdenada"("questaoId");

-- CreateIndex
CREATE UNIQUE INDEX "PosicaoValida_respostaId_key" ON "PosicaoValida"("respostaId");

-- AddForeignKey
ALTER TABLE "RespostaOrdenada" ADD CONSTRAINT "RespostaOrdenada_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "questao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PosicaoValida" ADD CONSTRAINT "PosicaoValida_respostaId_fkey" FOREIGN KEY ("respostaId") REFERENCES "RespostaOrdenada"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
