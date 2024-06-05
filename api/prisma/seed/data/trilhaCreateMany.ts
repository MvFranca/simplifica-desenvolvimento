import { Prisma } from "@prisma/client";

export const trilhaCreateMany: Prisma.TrilhaUncheckedCreateInput[] = [
  {
    id: 1,
    conteudo: "Variáveis",
    descricao:
      "Desvende o mundo da programação com o poder das variáveis e torne-se um mestre da criação!",
    descricaoModal:
      "Vamos explorar e aprender sobre o mundo das variáveis na programação e descobrir como elas podem tornar seus códigos mais poderosos e flexíveis. Pronto para embarcar nessa jornada de aprendizado?",
    img_url: "",
  },
  {
    id: 2,
    conteudo: "Input e Output",
    descricao:
      "Domine a arte do diálogo entre programador e computador: desvende os mistérios do input e output!",
    descricaoModal:
      "Input e Output são como portas de entrada e saída para os programas. Compreender esses conceitos é essencial para interagir com o usuário e produzir resultados. Vamos aprender e entender como usar input e output para criar programas incríveis!",
    img_url: "",
  },
  {
    id: 3,
    conteudo: "Estruturas de decisão",
    descricao:
      "Estruturas de decisão: a base para a tomada de decisões inteligentes em seus programas.",
    descricaoModal:
      "Aprenda como manipular seu código de acordo com as decisões e necessidades do cotidiano. Para isso, vamos introduzir um novo tópico essencial: estruturas de decisão.",
    img_url: "",
  },
  {
    id: 4,
    conteudo: "Laços de repetição",
    descricao:
      "Laços de repetição: automatize tarefas repetitivas e otimize seus programas com maestria!",
    descricaoModal:
      "Agora que já aprendeu tanto, conheceremos os laços de repetição, um assunto básico da programação que é essencial para qualquer código!",
    img_url: "",
  },
  {
    id: 5,
    conteudo: "Vetor",
    descricao:
      "Vetores: poder e flexibilidade para organizar e manipular dados do mesmo tipo.",
    descricaoModal:
      "Agora iremos aumentar o nível de dificuldade! Vamos iniciar um assunto importante, mas mais complexo de ser entendido que os outros.\nVetor, nome de um assunto visto na matemática e que tem um conceito parecido na programação. Aprenda o que são e como aplica-los.",
    img_url: "",
  },
  {
    id: 6,
    conteudo: "Matriz",
    descricao:
      "Organize e manipule grandes conjuntos de dados bidimensionais com eficiência e flexibilidade: explore o universo das estruturas de dados matriciais.",
    descricaoModal:
      "Já que aprendeu vetores, vamos nos aprofundar um pouco mais nesse conceito, mas agora com as matrizes.\nAs matrizes são como uma evolução dos vetores, então evolua em programação aprendendo esse assunto e suba seu nível de entendimento!",
    img_url: "",
  },
  {
    id: 7,
    conteudo: "Subprograma",
    descricao: "Divida, conquiste e reutilize com subprogramas.",
    descricaoModal:
      "Agora, se prepare para descobrir como o subprograma pode simplificar e otimizar seus projetos de programação.",
    img_url: "",
  },
];
