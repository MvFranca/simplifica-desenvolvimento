# Simplifica
Trata-se de um projeto voltado para os alunos do 1º ano do curso Integrado em Informática, no IFAL - Campus Arapiraca, onde buscaremos junto ao nosso orientador, desenvolver um Website a partir de uma análise detalhada (conteúdos abordados na disciplina) da grade curricular dos estudantes e das dificuldades vivenciadas por estes durante os seus primeiros contatos com a área (notas baixas, questionário/entrevista com alunos vigentes do 1º ano do curso integrado etc). 

No website, disponibilizaremos exercícios, explicações e exemplos de forma interativa, semelhante a forma como o aplicativo Duolingo realiza suas abordagens, para que o público possa revisar os conteúdos tratados em sala a qualquer momento, criando cada vez mais familiaridade com os temas e, consequemente, tendo melhores resultados acadêmicos. O aluno poderá escolher entre a opção denominada “trilha de aprendizagem”, onde diariamente o próprio site indicará de forma automática os conteúdos que ele deve estudar e/ou realizar exercícios, ou escolher a opção “estudo manual”, revisando conteúdos e atividades no seu próprio ritmo. Os materiais presentes na plataforma serão desenvolvidos por nós, juntamente com o orientador. O site também buscará automatizar os processos de monitoria, para que os alunos não precisem se deslocar sempre ao contraturno, sobre isso, a plataforma terá uma aba denominada “comunidade”, que será um chat geral onde alunos colocarão suas dúvidas e estas poderão ser respondidas por monitores ou professores da Instituição.
A cada estudo diário realizado, uma pontuação será atribuída, através de um sistema de metas que variará de acordo com o aproveitamento de cada estudante. Futuramente, planejamos desenvolver um ranking com a colocação de cada aluno, visando estimular cada vez mais a aprendizagem.


## Configuração de ambiente do projeto

- Clonar e configuração do repositório localmente
```
git init
```
```
git clone https://github.com/MvFranca/simplifica-desenvolvimento.git
```
```
git remote add origin "https://github.com/MvFranca/simplifica-desenvolvimento.git"
```
```
cd simplifica-desenvolvimento
```

- Instalar dependências
```
cd api
```
```
npm i
```

- Configurar variáveis de ambiente
  - Criar o arquivo `.env` com as credenciais do banco Postgres, baseado no `/api/.env.example`

- Rodar banco PostgreSQL no Docker
```
docker-compose down
```
```
docker-compose up -d
```

- Rodar versão de desenvolvimento com `nodemon` (na pasta client)
```
npm run dev
```

- gerar build (pasta `dist/`) do projeto (na pasta client)
```
npm run build
```

- rodar build (pasta `dist/`)  do projeto na pasta (api)
```
npm run start
```
