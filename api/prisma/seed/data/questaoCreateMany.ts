import { Prisma } from "@prisma/client";

export const questaoCreateMany: Prisma.QuestaoUncheckedCreateInput[] = [
  {
    id: 1,
    assunto: "Variáveis",
    pergunta: "O que são variáveis?",
    id_grupo: 1,
  },
  {
    id: 2,
    assunto: "Variáveis",
    pergunta: "Por que existem diferentes tipos de variáveis?",
    id_grupo: 1,
  },
  {
    id: 3,
    assunto: "Variáveis",
    pergunta: "O que é necessário para que uma variável exista?",
    id_grupo: 1,
  },
  {
    id: 4,
    assunto: "Variáveis",
    pergunta:
      "Considere os seguintes dados: 232.49 e 234. Para armazenar esses dados em Portugol usamos respectivamente os tipos:",
    id_grupo: 1,
  },
  {
    id: 5,
    assunto: "Variáveis",
    pergunta:
      "Seu código deverá armazenar informações em Portugol. Considere os dados a seguir: sentimento = Felicidade e letra J.",
    id_grupo: 1,
  },
  {
    id: 6,
    assunto: "Variáveis",
    pergunta:
      "Você está fazendo um site de vendas para uma empresa e precisa armazenar o nome do produto e seu código em Py. Considere o nome do produto = caderno e o código = 00000.",
    id_grupo: 1,
  },
  {
    id: 7,
    assunto: "Input e Output",
    pergunta: "O que é entrada de dados em programação?",
    id_grupo: 2,
  },
  {
    id: 8,
    assunto: "Input e Output",
    pergunta:
      "Como a saída de dados é geralmente apresentada ao usuário na linguagem C?",
    id_grupo: 2,
  },
  {
    id: 9,
    assunto: "Input e Output",
    pergunta:
      "Em um programa, qual componente permite a interação direta com o usuário?",
    id_grupo: 2,
  },
  {
    id: 10,
    assunto: "Input e Output",
    pergunta:
      'Qual é a função do comando "escreva", "printf", "print" em programação?',
    id_grupo: 2,
  },
  {
    id: 11,
    assunto: "Input e Output",
    pergunta: "Como você exibiria a soma de dois números em Portugol?",
    id_grupo: 2,
  },
  {
    id: 12,
    assunto: "Input e Output",
    pergunta:
      "O que deve ser utilizado para exibir o resultado de uma operação de multiplicação em C?",
    id_grupo: 2,
  },
  {
    id: 13,
    assunto: "Input e Output",
    pergunta:
      "Qual função em Python é usada para solicitar ao usuário que insira um nome?",
    id_grupo: 2,
  },
  {
    id: 14,
    assunto: "Estrtura de decisão",
    pergunta: "Qual a função das estruturas de decisão?",
    id_grupo: 3,
  },
  {
    id: 15,
    assunto: "Estrtura de decisão",
    pergunta: "Para executar (condição1 e condição2) é necessário que:",
    id_grupo: 3,
  },
  {
    id: 16,
    assunto: "Estrtura de decisão",
    pergunta: "Para executar (condição1 ou condição2) é necessário que:",
    id_grupo: 3,
  },
  {
    id: 17,
    assunto: "Estrtura de decisão",
    pergunta:
      "Você está elaborando um site para a venda de bilhetes de um espetáculo, para comprá-los é necessário que o usuário tenha mais de 18 anos, se a condição for verdadeira o código deverá exibir uma mensagem dizendo “tudo certo” para o usuário. Como fazer esse comando em Portugol?",
    id_grupo: 3,
  },
  {
    id: 18,
    assunto: "Estrtura de decisão",
    pergunta: "Seu programa deve verificar se um número é negativo em Py:",
    id_grupo: 3,
  },
  {
    id: 19,
    assunto: "Laços de repetição",
    pergunta:
      "Qual é a principal vantagem de utilizar laços de repetição em um programa?",
    id_grupo: 4,
  },
  {
    id: 20,
    assunto: "Laços de repetição",
    pergunta:
      "Qual é a função das variáveis auxiliares em um laço de repetição?",
    id_grupo: 4,
  },
  {
    id: 21,
    assunto: "Laços de repetição",
    pergunta:
      'Qual é a maneira correta de escrever um loop "for" em Python que itera sobre os números de 1 a 5?',
    id_grupo: 4,
  },
  {
    id: 22,
    assunto: "Vetor",
    pergunta: "Qual é uma característica dos vetores em programação?",
    id_grupo: 5,
  },
  {
    id: 23,
    assunto: "Vetor",
    pergunta: "Qual é a forma mais comum de leitura de vetores em programação?",
    id_grupo: 5,
  },
  {
    id: 24,
    assunto: "Vetor",
    pergunta: "Qual é uma das formas de escrita de vetores em programação?",
    id_grupo: 5,
  },
  {
    id: 25,
    assunto: "Vetor",
    pergunta: "Qual é o objetivo da ordenação de vetores em programação?",
    id_grupo: 5,
  },
  {
    id: 26,
    assunto: "Matriz",
    pergunta: "Qual é uma distinção entre vetores e matrizes em programação?",
    id_grupo: 6,
  },
  {
    id: 27,
    assunto: "Matriz",
    pergunta:
      "Qual é uma característica da leitura de matrizes em programação?",
    id_grupo: 6,
  },
  {
    id: 28,
    assunto: "Matriz",
    pergunta:
      "Qual é uma característica da escrita de matrizes em programação?",
    id_grupo: 6,
  },
  {
    id: 29,
    assunto: "Subprograma",
    pergunta: "O que é um subprograma em C?",
    id_grupo: 7,
  },
  {
    id: 30,
    assunto: "Subprograma",
    pergunta: "Qual é a diferença entre procedimentos e funções?",
    id_grupo: 7,
  },
  {
    id: 31,
    assunto: "Subprograma",
    pergunta: "Em Python, como são definidos os subprogramas?",
    id_grupo: 7,
  },
  {
    id: 32,
    assunto: "Subprograma",
    pergunta: "Por que os subprogramas são úteis na programação?",
    id_grupo: 7,
  },
  {
    id: 33,
    assunto: "Subprograma",
    pergunta:
      "Como você implementaria um subprograma em Portugol para calcular a média de três notas de um aluno?",
    id_grupo: 7,
  },
  {
    id: 34,
    assunto: "Subprograma",
    pergunta:
      "Como você definiria uma função em Python chamada calcular_media que recebe uma lista de números como argumento e retorna a média desses números?",
    id_grupo: 7,
  },
  {
    id: 35,
    assunto: "Subprograma",
    pergunta: "Qual é a sintaxe correta para definir uma função em Python?",
    id_grupo: 7,
  },
  {
    id: 36,
    assunto: "Subprograma",
    pergunta: "Qual é a sintaxe correta para chamar uma função em Portugol?",
    id_grupo: 7,
  },
];
