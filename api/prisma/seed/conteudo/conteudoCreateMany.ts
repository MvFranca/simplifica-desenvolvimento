import { Prisma } from "@prisma/client";

export const conteudoCreateMany: Prisma.ConteudoCreateInput[] = [
  {
    titulo: "Variáveis",
    subtitulo: "O que é uma variável?",
    paragrafo:
      "Uma variável é um espaço destinado à armazenação de um determinado conteúdo, que por sua vez pode se manter constante ou variar conforme as alterações dentro do sistema ou de acordo com as necessidades do programador ao decorrer da execução do programa. Ou seja, as variáveis são responsáveis por armazenar informações que serão utilizadas pelo programador, para facilitar o armazenamento de dados.",
  },
  {
    titulo: "Variáveis",
    subtitulo: "Tipos de variáveis",
    paragrafo:
      "As variáveis são classes ou grupos que armazenam informações, entretanto, não é possível armazenar todas informações dentro de um grupo apenas, para facilitar a organização e distinguir informações distintas, existem diferentes tipos de variáveis, veja:",
  },
  {
    titulo: "Variáveis",
    subtitulo: "Tipos de variáveis",
    img1_titulo: "Em Portugol",
    img2_titulo: "Em C",
    img1_alt: "Código em portugol dos tipos de variáveis.",
    img2_alt: "Código em C dos tipos de variáveis",
    img1_url: "./img_conteudos/variaveis1.png",
    img2_url: "./img_conteudos/variaveis2.png",
    img1_descricao:
      "Observe que para diferentes tipos de informações temos diferentes tipos de variáveis, uma vez que cada tipo de variável é destinada para receber informações de uma determinada característica. Para escolher a variável que será utilizada é necessário uma análise do contexto para perceber quais funções o programa deve realizar, e os elementos que a variável deverá armazenar.",
    img2_descricao:
      "Aqui estão alguns exemplos de tipos de variáveis em C e o que cada grupo suporta. É válido ressaltar que  cada linguagem possui sua forma de nomear as categorias. É possível notar tal diferença ao comparar com o exemplo citado anteriormente. Além disso, para armazenar palavras em C utilizamos um  vetor do tipo char. Posteriormente abordaremos esse assunto de forma detalhada.",
  },
  {
    titulo: "Variáveis",
    subtitulo: "Declaração de variáveis",
    paragrafo:
      "É importante que todas as variáveis sejam declaradas antes de serem utilizadas dentro do código. Para declará-la é simples, basta apenas informar o tipo da variável e na frente nomeá-la de forma aleatória, desde que não tenha outra variável com o mesmo nome dentro do programa.",
  },
  {
    titulo: "Variáveis",
    subtitulo: "Declaração de variáveis",
    img1_titulo: "Em Portugol",
    img2_titulo: "Em Python",
    img1_alt: "Código em Portugol da declaração de variáveis.",
    img2_alt: "Código em Python da declaração de variáveis.",
    img1_url: "./img_conteudos/variaveis3.png",
    img2_url: "./img_conteudos/variaveis4.png",
    img1_descricao:
      "Observe que para declarar a variável primeiro informamos o tipo dela e em seguida nomeamos, podendo também atribuí-la um valor adicionando o símbolo “=” e em seguida o valor que ela recebe.",
    img2_descricao:
      "Neste caso a declaração é bastante similar ao exemplo anterior, mudando apenas a nomenclatura das variáveis, uma vez que a linguagem define que deve estar na língua inglesa e por fim, neste caso, lembre-se de adicionar um “;” para encerrar a declaração. Em Python não precisa informar o tipo da variável.",
  },
  {
    titulo: "Variáveis",
    subtitulo: "Inicialização de variáveis",
    img1_titulo: "Em Portugol",
    paragrafo:
      "Podemos também inicializar a variável atribuindo a ela um valor, para que ela assuma aquele determinado valor enquanto não for atribuída nenhuma mudança à ela, para isto é necessário apenas que seja inserido um sinal de igualdade e o valor que a variável recebe, na frente dela. Exemplo:",
    img1_alt: "Código em Portugol da inicialização de variáveis",
    img1_url: "./img_conteudos/variaveis5.png",
  },
  {
    titulo: "Estruturas de decisão",
    subtitulo: "Estruturas de decisão",
    paragrafo:
      "Para ser um programador é essencial saber lidar com imprevistos, temos que pensar fora da caixinha para resolvermos problemas. Nem sempre os problemas serão simples, na maioria dos casos iremos precisar da interação com o usuário, onde a resposta do usuário será essencial para o funcionamento do código.\nA estrutura de repetição é um elemento indispensável na programação, uma vez que possibilita a execução repetida de um bloco de código em função de uma situação específica. Vejamos na prática:",
  },
  {
    titulo: "Estruturas de decisão",
    subtitulo: 'Condicional "se"/"if"',
    paragrafo:
      "Seu próprio nome diz tudo sobre esta condição. Ela consiste na análise das informações que foram dadas inicialmente, para confirmar se são realmente verídicas. Se for, esta condição vai executar o comando que lhe foi dado inicialmente. Caso seja falsa, nada vai acontecer e o código vai seguir. Além disso, um ‘se’ pode estar dentro de outro para executar funções.",
  },
  {
    titulo: "Estruturas de decisão",
    img1_titulo: 'Condicional "se" em Portugol',
    img2_titulo: 'Condicional "if" em C',
    subtitulo: 'Condicional "se"/"if"',
    img1_alt: 'Código da estrutura de condição "se" em Portugol.',
    img2_alt: 'Código da estrutura de condição "if" em C.',
    img1_url: "./img_conteudos/ec1.png",
    img2_url: ".img_conteudos/ec2.png",
    img1_descricao:
      "No exemplo acima estamos analisando se a idade do indivíduo corresponde a classificação do filme, se a idade do usuário não corresponder à idade mínima ideal para assistir, será impresso na tela uma mensagem na tela informando que não será possível assistir ao filme. Caso contrário, o código continuará a ser executado normalmente.",
    img2_descricao:
      "Neste caso, o exemplo é similar ao anterior, possui a mesma ideia, porém neste caso a mensagem só será impressa se o usuário tiver mais que 18 anos. Observe que a diferença entre a forma de representação das linguagens é mínima, virando apenas a passagem do “se” para a língua inglesa e o “;” obrigatório da linguagem.",
  },
  {
    titulo: "Estruturas de decisão",
    subtitulo: 'Condicional "se"/"if" ',
    img1_titulo: 'Condicional "se" em Portugol',
    img2_titulo: 'Condicional "if" em Python',
    img1_alt: 'Código da estrutura de condição "se" em Portugol.',
    img2_alt: 'Código da estrutura de condição "if" em Python.',
    img1_url: "./img_conteudos/ec1.png",
    img2_url: "./img_conteudos/ec3.png",
    img1_descricao:
      "No exemplo acima estamos analisando se a idade do indivíduo corresponde a classificação do filme, se a idade do usuário não corresponder à idade mínima ideal para assistir, será impresso na tela uma mensagem na tela informando que não será possível assistir ao filme. Caso contrário, o código continuará a ser executado normalmente.",
    img2_descricao:
      "Seguimos com o mesmo exemplo, mudando apenas a linguagem, como podemos observar, a variação de C para Python, neste caso, foi apenas a troca de “{}” por “:” antes de declarar o comando.",
  },
  {
    titulo: "Estruturas de decisão",
    subtitulo: "Operadores lógicos",
    paragrafo:
      "São responsáveis pela análise da informação e fornecem um resultado lógico (verdadeiro ou falso).\nE - usado para determinar que duas condições precisam ser verdadeiras;\nOU - usamos quando pelo menos uma das informações deve ser verdadeira, contudo podemos usá-lo no caso de ambas serem.\nNÃO - resulta na inversão de valores, se uma informação é verdadeira ela passa a ser falsa. Ou seja, ele nega afirmações.",
  },
  {
    titulo: "Estruturas de decisão",
    img1_titulo: "Em Python",
    img2_titulo: "Em C",
    subtitulo: "Operadores lógicos",
    img1_alt: "Operadores lógicos em Python",
    img2_alt: "Operadores lógicos em C",
    img1_url: "./img_conteudos/ec4.png",
    img2_url: "./img_conteudos/ec5.png",
    img1_descricao:
      "Operador && (E): vai analisar duas condições, é necessário que ambas sejam verdadeiras para execução do comando, ou seja, para que o resultado seja verdadeiro. Operador || (OU): Para que o resultado seja verdadeiro é necessário apenas que uma das condições sejam verdadeiras. Operador ! (NÃO): A consequência de uma condição é anulada. Se a condição for verdadeira, ela se torna falsa, e assim por diante.",
    img2_descricao:
      "Operador and (E): Retorna verdadeiro se as duas expressões forem verdadeiras. Operador or(OU): Caso uma das expressões seja verdadeira, retorna verdadeiro. Operador not (NÃO): Ajusta o valor da expressão.",
  },
  {
    titulo: "Estruturas de decisão",
    subtitulo: 'Condicional "senao"',
    paragrafo:
      "Essa condição funciona de maneira similar a anterior, entretanto, este bloco do código só será executado se o primeiro comando for falso. Neste exemplo, a idade deve ser maior que 18 para que o comando dentro do “se” seja executado, caso contrário, será executada a função do “senao”. Observe abaixo a estrutural:",
    img1_alt: 'Condição "senão" em Portugol.',
    img1_url: "./img_conteudos/ec6.png",
  },
  {
    titulo: "Estruturas de decisão",
    img1_titulo: 'Condicional "else"',
    img2_titulo: 'Condicional "elif"/"else if"',
    subtitulo: "",
    img1_alt: 'Condicional "else" em C.',
    img2_alt: 'Condicional "elif"/"else if" em Python.',
    img1_url: "./img_conteudos/ec7.png",
    img2_url: "./img_conteudos/ec8.png",
    img1_descricao:
      "Parte da mesma lógica do “senao”.  Neste exemplo, a idade deve ser maior que 18 para que o comando dentro do “if” seja executado, caso contrário, será executada a função do “else” (em Python também são como “if” e “else”).",
    img2_descricao:
      "O elif permite que você verifique várias condições em sequência e execute o bloco de código associado à primeira condição real, como no exemplo acima.",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "O que são os laços de repetição?",
    paragrafo:
      "Eles são estruturas de código que se repetem de acordo com uma condição; que, caso verdadeira, o laço repete. Usados quando há necessidade de repetir uma ação várias vezes com poucas linhas de código.",
    img1_alt: "Exemplo gráfico de um laço de repetição.",
    img1_url: "./img_conteudos/lr1.png",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "Variáveis auxiliar",
    paragrafo:
      "Usadas para controlar e adicionar limites nos laços, com elas é possível determinar em que número ele começa, e antes de qual ele termina, assim determinando quantas vezes o comando se repete.\nNo exemplo visual sobre laços, a variável auxiliar está no losango, auxiliando a formação da condição. Um looping pode começar, por exemplo, no 1 e terminar antes do 6, sendo uma adicionada unidade a variável a cada repetição do looping.",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "Tipos de laços",
    img1_titulo: "Pós-teste",
    img1_alt: 'Laço de repetição "pós-teste" em Portugol.',
    img1_url: "./img_conteudos/lr2.png",
    img1_descricao:
      "Nesse tipo, primeiro ocorre a execução do código e, em seguida, ele testa a condição para decidir se deve continuar a repetição ou não. Isso garante que o código seja executado pelo menos uma vez. No exemplo, o “i” será escrito uma vez e se a condição não for atendida o código não se repetirá.",
    img2_titulo: "Pré-teste",
    img2_alt: 'Laço de repetição "pré-teste" em Portugol.',
    img2_descricao:
      "Nos laços pré-teste, a condição é verificada antes da execução das ações ordenadas. Se a condição não for atendida desde o início, o código não será executado nenhuma vez. No exemplo, enquanto “i” for menor que 10, o código se repete.",
    img2_url: "./img_conteudos/lr3.png",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "",
    img1_alt: 'Laço de repetição "For" em Portugol.',
    img1_descricao:
      'O "para" é o comando "for" em portugol, "i" é o nome dado à variável que armazena o número de início do loop, adicionado no primeiro parâmetro. No segundo parâmetro é definido o número limite de repetições. O terceiro parâmetro serve para adicionar uma unidade a mais a variável "i" a cada repetição.',
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/lr4.png",
    img2_alt: 'Laço de repetição "For" em Portugol.',
    img2_descricao:
      'O comando "for" é declarado como “for i in range”, sendo "i" o nome da variável. Sua estrutura é simples, sendo o primeiro parâmetro o valor da variável “i”, o segundo parâmetro o limite de repetições e o terceiro parâmetro dita que a cada loop será adicionado 1 valor a mais a variável “i”.',
    img2_titulo: "Em Python",
    img2_url: "./img_conteudos/lr5.png",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "",
    img1_alt: 'Laço de repetição "For" em Portugol.',
    img1_descricao:
      'O "para" é o comando "for" em portugol, "i" é o nome dado à variável que armazena o número de início do loop, adicionado no primeiro parâmetro. No segundo parâmetro é definido o número limite de repetições. O terceiro parâmetro serve para adicionar uma unidade a mais a variável "i" a cada repetição.',
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/lr4.png",
    img2_alt: 'Laço de repetição "For" em C.',
    img2_descricao:
      'A estrutura do "for" em linguagem C é extremamente parecida com portugol, tendo apenas como diferença a troca do comando "para" para "for". Sendo assim, sua estrutura se repete com o mesmo formato descrito em portugol.',
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/lr6.png",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "",
    img1_alt: 'Laço de repetição "while" em Portugol.',
    img1_descricao:
      "O “enquanto” é o comando “while” em portugol, i é a variável que armazena o número 0. O comando “enquanto” continuará a se repetir enquanto a condição for atendida. Condição essa na qual “i” aumenta uma unidade a cada loop, esse que cessará quando “i” for menor que 10.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/lr7.png",
    img2_alt: 'Laço de repetição "while" em Python.',
    img2_descricao:
      "Em Python, o comando “while” mantém sua escrita e não há mais a necessidade de usar os parênteses e as chaves, sendo estes substituídos por “:” , mantendo o resto da estrutura.",
    img2_titulo: "Em Python",
    img2_url: "./img_conteudos/lr8.png",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "",
    img1_alt: 'Laço de repetição "while" em Portugol.',
    img1_descricao:
      "O “enquanto” é o comando “while” em portugol, i é a variável que armazena o número 0. O comando “enquanto” continuará a se repetir enquanto a condição for atendida. Condição essa na qual “i” aumenta uma unidade a cada loop, esse que cessará quando “i” for menor que 10.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/lr7.png",
    img2_alt: 'Laço de repetição "while" em C.',
    img2_descricao:
      "Como mostrado acima, não há nenhuma diferença entre a estrutura em portugol e C, exceto pelo comando que é escrito como “while”.",
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/lr9.png",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "",
    img1_alt: 'Laço de repetição "do while" em Portugol.',
    img1_descricao:
      "O “faca/enquanto” é o comando “do/while” em portugol. O comando “faca” faz com que uma ação seja executada ao menos uma vez antes de ser testada pelo “enquanto” que aplica a condição para o loop se formar. Isso significa que mesmo que “i” fosse maior que 10, ele seria escrito ao menos uma vez.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/lr10.png",
    img2_alt: 'Laço de repetição "do while" em Python.',
    img2_descricao:
      "Em Python, o comando “do/while” não existe, porém, ainda é possível arranjar outras formas de aplicar a funcionalidade mesmo sem o comando específico, formando uma estrutura que se assemelha ao seu efeito, ainda que não efetivo quanto o original.",
    img2_titulo: "Em Python",
    img2_url: "./img_conteudos/lr11.png",
  },
  {
    titulo: "Laços de Repetição",
    subtitulo: "",
    img1_alt: 'Laço de repetição "do while" em Portugol.',
    img1_descricao:
      "O “faca/enquanto” é o comando “do/while” em portugol. O comando “faca” faz com que uma ação seja executada ao menos uma vez antes de ser testada pelo “enquanto” que aplica a condição para o loop se formar. Isso significa que mesmo que “i” fosse maior que 10, ele seria escrito ao menos uma vez.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/lr10.png",
    img2_alt: 'Laço de repetição "do while" em C.',
    img2_descricao:
      "Como mostrado acima, não há nenhuma diferença entre a estrutura em portugol e C, exceto pelo comando “faca”  e “enquanto” que passam a serem escritos como “do” e “while”.",
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/lr12.png",
  },
  {
    titulo: "Vetor",
    subtitulo: "O que são vetores?",
    paragrafo:
      "São variáveis que podem armazenar outras variáveis. São como uma caixa que pode armazenar outras caixas, essas por sua vez têm suas localizações identificadas por números únicos, chamados de índices.",
    img1_alt: "Imagem da representação de um vetor de 4 posições.",
    img1_url: "./img_conteudos/v1.png",
  },
  {
    titulo: "Vetor",
    subtitulo: "Leitura",
    paragrafo:
      "A leitura dos vetores acontece de duas formas, uma através dos laços de repetição, que lêem os dados e os aloca em seus devidos endereços de forma ordenada e a segunda forma é a manual, na qual o próprio programador especifica o endereço de cada dado lido, sendo a primeira forma a mais usada, pois é mais rápida e poupa tempo.",
  },
  {
    titulo: "Vetor",
    subtitulo: "",
    img1_alt: "Leitura de dados em vetores na linguagem Portugol.",
    img1_descricao:
      "O vetor é declarado com a quantidade de índices desejados entre “[ ]”. Depois, é preciso um laço de repetição para ler os dados, e para indicar o índice que armazenará o dado é colocado o “i” entre “[ ]”, que automaticamente muda o índice a cada loop. O laço deve ser menor ou igual ao vetor.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/v2.png",
    img2_alt: "Leitura de dados em vetores na linguagem Python.",
    img2_descricao:
      "O vetor não precisa de um tamanho definido, por isso ele pode ser declarado vazio. Para armazenar é usado o “.append( )” e entre “( )” fica a variável ou o dado a ser recebido. Para que a leitura dê certo, é preciso ter uma variável fora do laço, que receba os dados e repasse para o vetor, que não pode receber diretamente.",
    img2_titulo: "Em Python",
    img2_url: "./img_conteudos/v3.png",
  },
  {
    titulo: "Vetor",
    subtitulo: "",
    img1_alt: "Leitura de dados em vetores na linguagem Portugol.",
    img1_descricao:
      "O vetor é declarado com a quantidade de índices desejados entre “[ ]”. Depois, é preciso um laço de repetição para ler os dados, e para indicar o índice que armazenará o dado é colocado o “i” entre “[ ]”, que automaticamente muda o índice a cada loop. O laço deve ser menor ou igual ao vetor.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/v2.png",
    img2_alt: "Leitura de dados em vetores na linguagem C.",
    img2_descricao:
      "Em linguagem C, a leitura de vetor segue a mesma estrutura do Portugol, sendo declarado com o número de índices, lido, normalmente, em um “for” e tendo seu endereço indicado pela variável “i”. O scanf o “%i” indica o tipo da variável e o “&” indica a variável que receberá esse dado.",
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/v4.png",
  },
  {
    titulo: "Vetor",
    subtitulo: "Escrita",
    paragrafo:
      "A escrita pode ocorrer de duas formas: A primeira é informando o índice exato do dado a ser escrito, essa forma é mais individualista. A segunda é usando um laço de repetição, no qual todos os dados ou quantos quiser, serão escritos de uma vez, sem precisar que o próprio programador o faça um por um. Os exemplos abaixo mostram a segunda forma.",
  },
  {
    titulo: "Vetor",
    subtitulo: "",
    img1_alt: "Escrita de dados em vetores na linguagem Portugol.",
    img1_descricao:
      "Após o vetor ter recebido os dados, é preciso escrevê-los, para isso se usa um “para” idêntico ao primeiro, com o mesmo tamanho, e dentro dele está o “escreva” que vai exibir o vetor de índice “i”, que indica endereço do dado a ser exibido.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/v5.png",
    img2_alt: "Escrita de dados em vetores na linguagem Python.",
    img2_descricao:
      "Em Python, apesar da “leitura” ser diferente do portugol, a “escrita” não é. Já tendo lido os dados, basta apenas fazer outro “for” de tamanho 10 e nele contendo um “print” que vai escrever todos os dados do vetor.",
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/v6.png",
  },
  {
    titulo: "Vetor",
    subtitulo: "",
    img1_alt: "Escrita de dados em vetores na linguagem Portugol.",
    img1_descricao:
      "Após o vetor ter recebido os dados, é preciso escrevê-los, para isso se usa um “para” idêntico ao primeiro, com o mesmo tamanho, e dentro dele está o “escreva” que vai exibir o vetor de índice “i”, que indica endereço do dado a ser exibido.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/v5.png",
    img2_alt: "Escrita de dados em vetores na linguagem C.",
    img2_descricao:
      "Em linguagem C, assim como em portugol e em python, a estrutura de escrita é a mesma, com um “for” idêntico ao usado na “leitura”, com um “printf” para exibir todos os dados do vetor.",
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/v7.png",
  },
  {
    titulo: "Vetor",
    subtitulo: "Ordenação",
    paragrafo:
      "A ordenação de vetores serve para colocar os dados armazenados em ordem crescente ou decrescente. Para fazer isso existem vários métodos, mas de início iremos mostrar apenas o Insertion Sort.",
  },
  {
    titulo: "Vetor",
    subtitulo: "Método Insertion Sort",
    paragrafo:
      "O método consiste na comparação de dados, em fazer dois comandos “para” chamarem dois números e com um “se” compará-los para saber qual é o maior, se o primeiro número chamado for maior que o segundo, sua posição é trocada pelo segundo que é menor. E com funcionamento do loop, os outros dados serão testados, até que o vetor esteja em ordem crescente, se for para a decrescente é feito o contrário.",
  },
  {
    titulo: "Vetor",
    subtitulo: "",
    img1_titulo: "Método Insertion Sort",
    img1_alt: "Método Insertion Sort em Portugol",
    img1_descricao:
      "Primeiro faça dois “para” um para controlar o primeiro índice do vetor e outro para o segundo índice, com o controle sobre esses dois índices, são feitas as comparações.\nSe o vetor [a] for maior que o [b], ele já não é o menor, então é preciso colocar o [b] como primeiro, com a variável aux é feita esse troca, aux recebe os dados de [b], [b](que agora está vazio) recebe os de [a] e o [a] recebe os dados de aux.\nSe o vetor [a] for menor que [b], ele será testado com os outros índices do vetor [b]. E após os testes aquele indíce de [a] for o menor, então ele continua em sua posição enquanto os outros índices são testados, até que todos estejam em ordem crescente.",
    img1_url: "./img_conteudos/v8.png",
  },
  {
    titulo: "Vetor",
    subtitulo: "",
    img1_alt: "Método Insertion Sort em Python",
    img1_descricao:
      "Em Python, há uma mistura da leitura de vetores de python, com a mesma estrutura de ordenação mostrada em Portugol, tendo apenas diferenças de sintaxe da própria linguagem.",
    img1_titulo: "Em Python",
    img1_url: "./img_conteudos/v8.png",
    img2_alt: "Método Insertion Sort em C",
    img2_descricao:
      "Esse é o exemplo desse método em linguagem C, como é possível observar o formato é o mesmo que em Portugol, as únicas diferenças se devem à sintaxe, própria da linguagem C.",
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/v9.png",
  },
  {
    titulo: "Matriz",
    subtitulo: "",
    img1_descricao:
      "São semelhantes aos vetores, porém mais complexas, pois são estruturadas por linhas e colunas. Vetores são unidimensionais(apenas linhas), já as matrizes são bidimensionais(linhas e colunas) e comportam mais dados, pois são maiores. A matriz é escrita como: “matriz[L,C]”, sendo L a linha e C a coluna, que juntos formam o índice.",
    img1_alt: "Imagem da representação de uma matriz.",
    img1_titulo: "O que são matrizes?",
    img1_url: "./img_conteudos/m1.png",
  },
  {
    titulo: "Matriz",
    subtitulo: "Leitura",
    paragrafo:
      "Assim como em vetor, a leitura de matriz pode ser feita de duas formas: Diretamente, com o programador colocando os dados de forma manual; e indiretamente, através de um laço de repetição.\nA forma de se fazer com o laço de repetição é muito parecida com a de vetor, a diferença é a necessidade de dois “for”, um para preencher as linhas e outro para preencher as colunas, que juntas formam um índice específico.",
  },
  {
    titulo: "Matriz",
    subtitulo: "",
    img1_alt: "Leitura de matriz em Portugol.",
    img1_descricao:
      "A matriz é criada, no exemplo, com 2 linhas e 2 colunas. O primeiro “para” vai definir a linha que será lida e o segundo “para” definirá a coluna que será lida, as duas em conjunto. Dentro do “leia” tem a matriz e entre “[ ]” tem o número da linha e da coluna, decididos pela variável “l” e “c”.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/m2.png",
    img2_alt: "Leitura de matriz em Python.",
    img2_descricao:
      "Em Python, é misturado o formato único de armazenar vetores de python, com a mesma estrutura de ordenação mostrada em Portugol, tendo apenas diferenças de sintaxe da própria linguagem.",
    img2_titulo: "Em Python",
    img2_url: "./img_conteudos/m3.png",
  },
  {
    titulo: "Matriz",
    subtitulo: "",
    img1_alt: "Leitura de matriz em Portugol.",
    img1_descricao:
      "A matriz é criada, no exemplo, com 2 linhas e 2 colunas. O primeiro “para” vai definir a linha que será lida e o segundo “para” definirá a coluna que será lida, as duas em conjunto. Dentro do “leia” tem a matriz e entre “[ ]” tem o número da linha e da coluna, decididos pela variável “l” e “c”.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/m2.png",
    img2_alt: "Leitura de matriz em C.",
    img2_descricao:
      "Esse é o exemplo desse método em linguagem C, como é possível observar o formato é o mesmo que em Portugol, as únicas diferenças se devem à sintaxe própria da linguagem C.",
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/m4.png",
  },
  {
    titulo: "Matriz",
    subtitulo: "Escrita",
    paragrafo:
      "A escrita dos dados da matriz é tão simples quanto a de vetores, sem complicações, basta apenas repetir a mesma estrutura de dois “para”, um para as linhas e outro para as colunas, tendo dentro do segundo laço um “escreva” com o nome da matriz e especificando através das variáveis auxiliares a linha e a coluna a ser exibida.",
  },
  {
    titulo: "Matriz",
    subtitulo: "",
    img1_alt: "Escrita de matriz em Portugol.",
    img1_descricao:
      "Com os dados já lidos e a matriz preenchida, para exibi-los basta repetir os “para” e escrever a matriz da forma mostrada, onde a cada repetição ela exibirá o índice indicado pela linha e coluna.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/m5.png",
    img2_alt: "Escrita de matriz em Python.",
    img2_descricao:
      "Em Python, o processo e a explicação anterior se repetem, com a mesma estrutura mostrada em Portugol, tendo apenas diferenças de sintaxe da própria linguagem.",
    img2_titulo: "Em Python",
    img2_url: "./img_conteudos/m6.png",
  },
  {
    titulo: "Matriz",
    subtitulo: "",
    img1_alt: "Escrita de matriz em Portugol.",
    img1_descricao:
      "Com os dados já lidos e a matriz preenchida, para exibi-los basta repetir os “para” e escrever a matriz da forma mostrada, onde a cada repetição ela exibirá o índice indicado pela linha e coluna.",
    img1_titulo: "Em Portugol",
    img1_url: "./img_conteudos/m5.png",
    img2_alt: "Escrita de matriz em C.",
    img2_descricao:
      "Em linguagem C, o processo e a explicação anterior se repetem, com a mesma estrutura mostrada em Portugol, tendo apenas diferenças de sintaxe da própria linguagem.",
    img2_titulo: "Em C",
    img2_url: "./img_conteudos/m7.png",
  },
];