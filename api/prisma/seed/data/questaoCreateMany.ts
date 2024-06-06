import { Prisma } from "@prisma/client";

export const questaoCreateMany: Prisma.QuestaoCreateInput[] = [
    {
        assunto: "Variáveis",
        pergunta: "O que são variáveis?",
        id_grupo: 1,
        respostas: {
            create: {
                alternativa1: "Estrutura de dados que pode mudar de conteúdo durante a execução de um programa.",
                alternativa2: "São valores que não podem ser modificados ao decorrer do programa.",
                alternativa3: "Funções que recebem valores como parâmetros.",
                alternativa4: "Estruturas que permitem a repetição de determinadas ações.",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Variáveis",
        pergunta: "Por que existem diferentes tipos de variáveis?",
        id_grupo: 1,
        respostas: {
            create: {
                alternativa1: "Para dificultar o acesso às informações e auxiliar na estrutura do código.",
                alternativa2: "Para guardar informações de um mesmo tipo, e criptografá-las.",
                alternativa3: "Para guardar diferentes tipos de informações e facilitar a organização dos dados.",
                alternativa4: "Para facilitar o acesso às informações, uma vez que estão armazenadas na memória do PC.",
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Variáveis",
        pergunta: "O que é necessário para que uma variável exista?",
        id_grupo: 1,
        respostas: {
            create: {
                alternativa1: "Ser inicializada.",
                alternativa2: "Ser declarada.",
                alternativa3: "Conter dados.",
                alternativa4: "Armazenar dados do tipo inteiro.",
                alternativa_correta: 2
            }
        }
    },
    {
        assunto: "Variáveis",
        pergunta: "Considere os seguintes dados: 232.49 e 234. Para armazenar esses dados em Portugol usamos respectivamente os tipos:",
        id_grupo: 1,
        respostas: {
            create: {
                alternativa1: "inteiro e inteiro.",
                alternativa2: "inteiro e real.",
                alternativa3: "real e real.",
                alternativa4: "real e inteiro.",
                alternativa_correta: 4
            }
        }
    },
    {
        assunto: "Variáveis",
        pergunta: "Seu código deverá armazenar informações em Portugol. Considere os dados a seguir: sentimento = Felicidade e letra J.",
        id_grupo: 1,
        respostas: {
            create: {
                alternativa1: 'caracter letra = ”j” cadeia sentimento = "felicidade"',
                alternativa2: "caracter letra = 'j' cadeia sentimento = 'felicidade'",
                alternativa3: "caracter letra = j cadeia sentimento = felicidade",
                alternativa4: `caracter letra = 'j' cadeia sentimento = "felicidade"`,
                alternativa_correta: 4
            }
        }
    },
    {
        assunto: "Variáveis",
        pergunta: "Você está fazendo um site de vendas para uma empresa e precisa armazenar o nome do produto e seu código em Py. Considere o nome do produto = caderno e o código = 00000.",
        id_grupo: 1,
        respostas: {
            create: {
                alternativa1: 'codigo = 00000 produto = "caderno"',
                alternativa2: 'codigo = 00000 and produto = "caderno"',
                alternativa3: "codigo = 00000 and produto = caderno",
                alternativa4: 'codigo = 00000 , produto = "caderno"',
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Input e Output",
        pergunta: "O que é entrada de dados em programação?",
        id_grupo: 2,
        respostas: {
            create: {
                alternativa1: "Resultados processados pelo programa.",
                alternativa2: "Informações inseridas pelo usuário.",
                alternativa3: "Comandos de impressão na tela.",
                alternativa4: "Valores armazenados em variáveis.",
                alternativa_correta: 2
            }
        }
    },
    {
        assunto: "Input e Output",
        pergunta: "Como a saída de dados é geralmente apresentada ao usuário na linguagem C?",
        id_grupo: 2,
        respostas: {
            create: {
                alternativa1: "Através de comandos de leitura de arquivos.",
                alternativa2: 'Usando o comando "scanf()".',
                alternativa3: "Por meio de cliques do mouse.",
                alternativa4: 'Utilizando o comando "printf()".',
                alternativa_correta: 4
            }
        }
    },
    {
        assunto: "Input e Output",
        pergunta: "Em um programa, qual componente permite a interação direta com o usuário?",
        id_grupo: 2,
        respostas: {
            create: {
                alternativa1: "Entrada de dados.",
                alternativa2: "Saída de dados.",
                alternativa3: "Variáveis.",
                alternativa4: "Operadores.",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Input e Output",
        pergunta: 'Qual é a função do comando "escreva", "printf", "print" em programação?',
        id_grupo: 2,
        respostas: {
            create: {
                alternativa1: "Capturar dados inseridos pelo usuário.",
                alternativa2: "Processar resultados do programa.",
                alternativa3: "Imprimir informações na tela.",
                alternativa4: "Armazenar valores em variáveis.",
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Input e Output",
        pergunta: "Como você exibiria a soma de dois números em Portugol?",
        id_grupo: 2,
        respostas: {
            create: {
                alternativa1: "soma = num1 + num2",
                alternativa2: "calcule soma = num1 + num2",
                alternativa3: 'imprima("A soma é:", soma)',
                alternativa4: 'escreva("A soma é:", soma)',
                alternativa_correta: 4
            }
        }
    },
    {
        assunto: "Input e Output",
        pergunta: "O que deve ser utilizado para exibir o resultado de uma operação de multiplicação em C?",
        id_grupo: 2,
        respostas: {
            create: {
                alternativa1: 'mostrar("O resultado é:", resultado)',
                alternativa2: 'printf("O resultado é: %d", resultado)',
                alternativa3: 'escrever("O resultado é:", resultado)',
                alternativa4: 'print("O resultado é:", resultado)',
                alternativa_correta: 2
            }
        }
    },
    {
        assunto: "Input e Output",
        pergunta: "Qual função em Python é usada para solicitar ao usuário que insira um nome?",
        id_grupo: 2,
        respostas: {
            create: {
                alternativa1: 'input()',
                alternativa2: 'read()',
                alternativa3: 'scanf()',
                alternativa4: 'leia()',
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Estrtura de decisão",
        pergunta: "Qual a função das estruturas de decisão?",
        id_grupo: 3,
        respostas: {
            create: {
                alternativa1: "Analisar determinadas situações e tomar decisões com base no análise.",
                alternativa2: "Interagir exclusivamente com o usuário, para tomar decisões.",
                alternativa3: "Estruturas que permitem a repetição de determinadas ações.",
                alternativa4: "Estrutura que armazena dados semelhantes.",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Estrtura de decisão",
        pergunta: "Para executar (condição1 e condição2) é necessário que:",
        id_grupo: 3,
        respostas: {
            create: {
                alternativa1: "Nenhuma das condições sejam verdadeiras.",
                alternativa2: "Ambas condições sejam verdadeiras.",
                alternativa3: "Apenas uma das condições seja verdadeira.",
                alternativa4: "Nenhuma das respostas acima.",
                alternativa_correta: 2
            }
        }
    },
    {
        assunto: "Estrtura de decisão",
        pergunta: "Para executar (condição1 ou condição2) é necessário que:",
        id_grupo: 3,
        respostas: {
            create: {
                alternativa1: "Nenhuma das condições sejam verdadeiras.",
                alternativa2: "Ambas condições sejam verdadeiras.",
                alternativa3: "Apenas uma das condições seja verdadeira.",
                alternativa4: "Nenhuma das respostas acima.",
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Estrtura de decisão",
        pergunta: "Você está elaborando um site para a venda de bilhetes de um espetáculo, para comprá-los é necessário que o usuário tenha mais de 18 anos, se a condição for verdadeira o código deverá exibir uma mensagem dizendo “tudo certo” para o usuário. Como fazer esse comando em Portugol?",
        id_grupo: 3,
        respostas: {
            create: {
                alternativa1: "se(idade>18){ escreva(“tudo certo”) }",
                alternativa2: "se(idade<18){ escreva(“tudo certo”) }",
                alternativa3: "se(idade>18) : escreva(“tudo certo”)",
                alternativa4: "se(idade>18 : {escreva tudo certo})",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Estrtura de decisão",
        pergunta: "Seu programa deve verificar se um número é negativo em Py:",
        id_grupo: 3,
        respostas: {
            create: {
                alternativa1: 'if numero >= 0{  print("O número é positivo.")  }else{  print("O número é negativo.")  }',
                alternativa2: "if numero <= 0:  print(O número é positivo.) else:  print(O número é negativo.)",
                alternativa3: 'if numero >= 0:  print("O número é positivo.") else:  print("O número é negativo.")',
                alternativa4: "Nenhuma das alternativas anteriores.",
                alternativa_correta: 4
            }
        }
    },
    {
        assunto: "Laços de repetição",
        pergunta: "Qual é a principal vantagem de utilizar laços de repetição em um programa?",
        id_grupo: 4,
        respostas: {
            create: {
                alternativa1: "Redução do tempo de escrita do código.",
                alternativa2: "Economia de espaço na memória do computador.",
                alternativa3: "Aumento da legibilidade do código.",
                alternativa4: "Facilitação na escrita de comandos redundantes.",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Laços de repetição",
        pergunta: "Qual é a função das variáveis auxiliares em um laço de repetição?",
        id_grupo: 4,
        respostas: {
            create: {
                alternativa1: "Controlar a execução de comandos dentro do laço.",
                alternativa2: "Determinar o número de vezes que o laço será repetido.",
                alternativa3: "Adicionar limites ao laço e controlar sua repetição.",
                alternativa4: "Armazenar valores temporários durante a execução do laço.",
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Laços de repetição",
        pergunta: 'Qual é a maneira correta de escrever um loop "for" em Python que itera sobre os números de 1 a 5?',
        id_grupo: 4,
        respostas: {
            create: {
                alternativa1: "for i in range(5):",
                alternativa2: "for i in range(1, 6):",
                alternativa3: "for i in range(1, 5):",
                alternativa4: "for i in range(6):",
                alternativa_correta: 2
            }
        }
    },
    {
        assunto: "Vetor",
        pergunta: "Qual é uma característica dos vetores em programação?",
        id_grupo: 5,
        respostas: {
            create: {
                alternativa1: "Podem armazenar apenas valores numéricos.",
                alternativa2: "Sempre iniciam pelo índice 1.",
                alternativa3: "São utilizados exclusivamente em operações matriciais.",
                alternativa4: "São estruturas de dados capazes de armazenar múltiplas variáveis, onde cada variável é acessada através de um índice único.",
                alternativa_correta: 4
            }
        }
    },
    {
        assunto: "Vetor",
        pergunta: "Qual é a forma mais comum de leitura de vetores em programação?",
        id_grupo: 5,
        respostas: {
            create: {
                alternativa1: "Através de laços de repetição.",
                alternativa2: "Utilizando funções de comparação.",
                alternativa3: "Por meio de métodos de ordenação.",
                alternativa4: "Através de operadores aritméticos.",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Vetor",
        pergunta: "Qual é uma das formas de escrita de vetores em programação?",
        id_grupo: 5,
        respostas: {
            create: {
                alternativa1: "Através de métodos de ordenação.",
                alternativa2: "Por meio de declarações condicionais.",
                alternativa3: "Informando o índice exato do dado a ser escrito.",
                alternativa4: "Utilizando funções matemáticas avançadas.",
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Vetor",
        pergunta: "Qual é o objetivo da ordenação de vetores em programação?",
        id_grupo: 5,
        respostas: {
            create: {
                alternativa1: "Aumentar a complexidade dos algoritmos.",
                alternativa2: "Reduzir o número de dados no vetor.",
                alternativa3: "Organizar os dados em crescente e decrescente para a utilização e otimização de métodos de busca em vetores.",
                alternativa4: "Utilizando funções matemáticas avançadas.",
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Matriz",
        pergunta: "Qual é uma distinção entre vetores e matrizes em programação?",
        id_grupo: 6,
        respostas: {
            create: {
                alternativa1: "Vetores são unidimensionais, enquanto matrizes são bidimensionais.",
                alternativa2: "Vetores têm mais colunas do que matrizes.",
                alternativa3: "Matrizes têm apenas uma linha, enquanto vetores têm várias linhas.",
                alternativa4: "Matrizes têm estrutura mais complexa em comparação com vetores.",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Matriz",
        pergunta: "Qual é uma característica da leitura de matrizes em programação?",
        id_grupo: 6,
        respostas: {
            create: {
                alternativa1: "Requer apenas um loop de repetição para preencher tanto as linhas quanto as colunas.",
                alternativa2: "É realizada exclusivamente por métodos de ordenação.",
                alternativa3: "Pode ser feita apenas com a entrada de dados através de interfaces gráficas.",
                alternativa4: "Pode ser realizada diretamente, com o programador inserindo os dados manualmente, ou indiretamente, através de um laço de repetição.",
                alternativa_correta: 4
            }
        }
    },
    {
        assunto: "Matriz",
        pergunta: "Qual é uma característica da escrita de matrizes em programação?",
        id_grupo: 6,
        respostas: {
            create: {
                alternativa1: "Envolve a aplicação de diferentes estruturas de repetição para cada linha e coluna.",
                alternativa2: "Utiliza uma estrutura de dois loops aninhados, um para as linhas e outro para as colunas, para exibir os dados.",
                alternativa3: "Exige a manipulação de variáveis auxiliares exclusivas para cada elemento da matriz.",
                alternativa4: "Pode ser realizada apenas por meio de funções específicas para matrizes.",
                alternativa_correta: 2
            }
        }
    },
    {
        assunto: "Subprograma",
        pergunta: "O que é um subprograma em C?",
        id_grupo: 7,
        respostas: {
            create: {
                alternativa1: "Uma parte do código que não pode ser chamada de outras partes do programa.",
                alternativa2: "Uma unidade de código que pode ser chamada a partir de outras partes do programa.",
                alternativa3: "Uma instrução específica que executa uma tarefa complexa.",
                alternativa4: "Um tipo de variável que armazena valores numéricos.",
                alternativa_correta: 2
            }
        }
    },
    {
        assunto: "Subprograma",
        pergunta: "Qual é a diferença entre procedimentos e funções?",
        id_grupo: 7,
        respostas: {
            create: {
                alternativa1: "Procedimentos retornam valores, enquanto funções não.",
                alternativa2: "Funções retornam valores, enquanto procedimentos não.",
                alternativa3: "Procedimentos e funções são idênticos em Python.",
                alternativa4: "Procedimentos e funções não podem ser usados em Python.",
                alternativa_correta: 2
            }
        }
    },
    {
        assunto: "Subprograma",
        pergunta: "Em Python, como são definidos os subprogramas?",
        id_grupo: 7,
        respostas: {
            create: {
                alternativa1: 'Através do comando "module".',
                alternativa2: 'Através do comando "subprogram".',
                alternativa3: 'Através do comando "def".',
                alternativa4: 'Através do comando "function".',
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Subprograma",
        pergunta: "Por que os subprogramas são úteis na programação?",
        id_grupo: 7,
        respostas: {
            create: {
                alternativa1: "Para aumentar a complexidade do código.",
                alternativa2: "Para tornar o programa mais difícil de entender.",
                alternativa3: "Para organizar e modularizar o código, tornando-o mais legível e fácil de manter.",
                alternativa4: "Para reduzir a eficiência do programa.",
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Subprograma",
        pergunta: "Como você implementaria um subprograma em Portugol para calcular a média de três notas de um aluno?",
        id_grupo: 7,
        respostas: {
            create: {
                alternativa1: "Definindo uma função calcularMedia com parâmetros para as três notas e retornando a média.",
                alternativa2: "Utilizando uma estrutura de repetição para calcular a média.",
                alternativa3: "Escrevendo uma série de instruções no programa principal para calcular a média.",
                alternativa4: "Não é possível implementar subprogramas em Portugol.",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Subprograma",
        pergunta: "Como você definiria uma função em Python chamada calcular_media que recebe uma lista de números como argumento e retorna a média desses números?",
        id_grupo: 7,
        respostas: {
            create: {
                alternativa1: "def calcular_media(lista): return sum(lista) / len(lista)",
                alternativa2: "def calcular_media(lista): total = sum(lista); return total / len(lista)",
                alternativa3: "def calcular_media(lista): return sum(lista) / total(lista)",
                alternativa4: "def calcular_media(lista): return sum(lista) * len(lista)",
                alternativa_correta: 1
            }
        }
    },
    {
        assunto: "Subprograma",
        pergunta: "Qual é a sintaxe correta para definir uma função em Python?",
        id_grupo: 7,
        respostas: {
            create: {
                alternativa1: "definir_funcao():",
                alternativa2: "function definir_funcao():",
                alternativa3: "def definir_funcao():",
                alternativa4: "return funcao",
                alternativa_correta: 3
            }
        }
    },
    {
        assunto: "Subprograma",
        pergunta: "Qual é a sintaxe correta para chamar uma função em Portugol?",
        id_grupo: 7,
        respostas: {
            create: {
                alternativa1: "nome_funcao(parametros);",
                alternativa2: "inicio.nome_funcao(parametros);",
                alternativa3: "nome_funcao;",
                alternativa4: "programa.nome_funcao(parametros)",
                alternativa_correta: 1
            }
        }
    },
]