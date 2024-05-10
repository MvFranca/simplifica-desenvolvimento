-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "url_image" TEXT,
    "turma" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conteudo" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "subtitulo" TEXT NOT NULL,
    "paragrafo" TEXT,
    "img1_titulo" TEXT,
    "img1_url" TEXT,
    "img1_alt" TEXT,
    "img1_descricao" TEXT,
    "img2_titulo" TEXT,
    "img2_url" TEXT,
    "img2_alt" TEXT,
    "img2_descricao" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "conteudo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questao" (
    "id" SERIAL NOT NULL,
    "assunto" TEXT NOT NULL,
    "pergunta" TEXT NOT NULL,
    "id_grupo" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "questao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "respostas" (
    "id" SERIAL NOT NULL,
    "alternativa1" TEXT NOT NULL,
    "alternativa2" TEXT NOT NULL,
    "alternativa3" TEXT NOT NULL,
    "alternativa4" TEXT NOT NULL,
    "alternativa_correta" INTEGER NOT NULL,
    "questaoId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "respostas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pontuacao" (
    "id" SERIAL NOT NULL,
    "pontuacao" INTEGER NOT NULL DEFAULT 0,
    "fogo" INTEGER NOT NULL DEFAULT 0,
    "usuarioId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "pontuacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "duvida" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "usuarioId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "duvida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comentario" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "usuarioId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trilha" (
    "id" SERIAL NOT NULL,
    "conteudo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "descricaoModal" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "trilha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progresso" (
    "id" SERIAL NOT NULL,
    "conteudoId" INTEGER NOT NULL DEFAULT 1,
    "avanco" INTEGER NOT NULL DEFAULT 0,
    "usuarioId" INTEGER,

    CONSTRAINT "progresso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_username_key" ON "usuario"("username");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "respostas_questaoId_key" ON "respostas"("questaoId");

-- CreateIndex
CREATE UNIQUE INDEX "pontuacao_usuarioId_key" ON "pontuacao"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "duvida_usuarioId_key" ON "duvida"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "comentario_usuarioId_key" ON "comentario"("usuarioId");

-- CreateIndex
CREATE UNIQUE INDEX "progresso_usuarioId_key" ON "progresso"("usuarioId");

-- AddForeignKey
ALTER TABLE "respostas" ADD CONSTRAINT "respostas_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "questao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pontuacao" ADD CONSTRAINT "pontuacao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "duvida" ADD CONSTRAINT "duvida_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "progresso" ADD CONSTRAINT "progresso_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
