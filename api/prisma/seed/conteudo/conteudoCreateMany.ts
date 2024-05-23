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
];
