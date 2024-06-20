import { Prisma } from "@prisma/client";

export const respostaOrdenadaCreateMany: Prisma.RespostaOrdenadaUncheckedCreateInput[] = [
  {
    id: 1,
    questaoId: 37,
    bloco: "char nome[50];",
  },
  {
    id: 2,
    questaoId: 37,
    bloco: 'printf("Digite o nome: ");',
  },
  {
    id: 3,
    questaoId: 37,
    bloco: 'scanf("%s", nome);',
  },
  {
    id: 4,
    questaoId: 37,
    bloco: 'printf("Nome digitado: %s\n", nome);',
  },
  {
    id: 5,
    questaoId: 38,
    bloco: 'num1 = int(input("Digite o primeiro número: "))',
  },
  {
    id: 6,
    questaoId: 38,
    bloco: 'num2 = int(input("Digite o segundo número: "))',
  },
  {
    id: 7,
    questaoId: 38,
    bloco: 'resultado = num1 * num2',
  },
  {
    id: 8,
    questaoId: 38,
    bloco: 'print("O resultado da multiplicação é:", resultado)',
  },
  {
    id: 9,
    questaoId: 39,
    bloco: 'float media;',
  },
  {
    id: 10,
    questaoId: 39,
    bloco: 'printf("Digite a media");',
  },
  {
    id: 11,
    questaoId: 39,
    bloco: 'scanf("%f", &media);',
  },
  {
    id: 12,
    questaoId: 39,
    bloco: 'if(media >= 6) printf("aprovado");',
  },
  {
    id: 13,
    questaoId: 39,
    bloco: 'else printf("reprovado");',
  },
  {
    id: 14,
    questaoId: 40,
    bloco: 'printf("Digite um número inteiro: ");',
  },
  {
    id: 15,
    questaoId: 40,
    bloco: 'scanf("%d", &numero);',
  },
  {
    id: 16,
    questaoId: 40,
    bloco: 'if(numero % 2 == 0) printf("O número é par.");',
  },
  {
    id: 17,
    questaoId: 40,
    bloco: 'else printf("O número é ímpar.");',
  },
  {
    id: 18,
    questaoId: 41,
    bloco: 'int numero, i = 2;',
  },
  {
    id: 19,
    questaoId: 41,
    bloco: 'scanf("%d", &numero);',
  },
  {
    id: 20,
    questaoId: 41,
    bloco: 'while (i <= numero) {',
  },
  {
    id: 21,
    questaoId: 41,
    bloco: 'printf("%d ", i);',
  },
  {
    id: 22,
    questaoId: 41,
    bloco: 'i += 2;',
  },
  {
    id: 23,
    questaoId: 41,
    bloco: '}',
  },
  {
    id: 24,
    questaoId: 42,
    bloco: 'numero = int(input("Digite um número inteiro positivo: "))',
  },
  {
    id: 25,
    questaoId: 42,
    bloco: 'print("Tabuada de", numero)',
  },
  {
    id: 26,
    questaoId: 42,
    bloco: 'for i in range(1, 11):',
  },
  {
    id: 27,
    questaoId: 42,
    bloco: 'print(numero, "x", i, "=", numero * i)',
  },
  {
    id: 28,
    questaoId: 43,
    bloco: 'inteiro numero, soma = 0, digito',
  },
  {
    id: 29,
    questaoId: 43,
    bloco: 'leia(numero)',
  },
  {
    id: 30,
    questaoId: 43,
    bloco: 'faca{',
  },
  {
    id: 31,
    questaoId: 43,
    bloco: 'digito = numero % 10',
  },
  {
    id: 32,
    questaoId: 43,
    bloco: 'soma = soma + digito',
  },
  {
    id: 33,
    questaoId: 43,
    bloco: 'numero = numero / 10',
  },
  {
    id: 34,
    questaoId: 43,
    bloco: '} enquanto (numero > 0)',
  },
  {
    id: 35,
    questaoId: 43,
    bloco: 'escreva("A soma dos dígitos é: ", soma)',
  },
  {
    id: 36,
    questaoId: 44,
    bloco: 'int vetor[5] = {10, 20, 30, 40, 50}, int i;',
  },
  {
    id: 37,
    questaoId: 44,
    bloco: 'printf("Valores do vetor:\n");',
  },
  {
    id: 38,
    questaoId: 44,
    bloco: 'for (i = 0; i < 5; i++) {',
  },
  {
    id: 39,
    questaoId: 44,
    bloco: 'printf("vetor[%d] = %d\n", i, vetor[i]);',
  },
  {
    id: 40,
    questaoId: 44,
    bloco: '}',
  },
  {
    id: 41,
    questaoId: 45,
    bloco: 'vetor = []',
  },
  {
    id: 42,
    questaoId: 45,
    bloco: 'tamanho = int(input("Digite o tamanho do vetor: "))',
  },
  {
    id: 43,
    questaoId: 45,
    bloco: 'for i in range(tamanho):',
  },
  {
    id: 44,
    questaoId: 45,
    bloco: 'valor = int(input("Valor : “))',
  },
  {
    id: 45,
    questaoId: 45,
    bloco: 'vetor.append(valor)',
  },
  {
    id: 46,
    questaoId: 46,
    bloco: 'real notas[5], soma=0, media',
  },
  {
    id: 47,
    questaoId: 46,
    bloco: 'para(inteiro i=0; i<5; i++){',
  },
  {
    id: 48,
    questaoId: 46,
    bloco: 'leia(notas[i])',
  },
  {
    id: 49,
    questaoId: 46,
    bloco: 'soma=soma+notas[i]',
  },
  {
    id: 50,
    questaoId: 46,
    bloco: '}',
  },
  {
    id: 51,
    questaoId: 46,
    bloco: 'media=soma/5',
  },
  {
    id: 52,
    questaoId: 46,
    bloco: 'escreva("Média das notas dos aluno: ",media)',
  },
  {
    id: 53,
    questaoId: 47,
    bloco: 'matriz = []',
  },
  {
    id: 54,
    questaoId: 47,
    bloco: 'for i in range(0,2):',
  },
  {
    id: 55,
    questaoId: 47,
    bloco: 'matriz.append([])',
  },
  {
    id: 56,
    questaoId: 47,
    bloco: 'for j in range(0,2):',
  },
  {
    id: 57,
    questaoId: 47,
    bloco: 'matriz[i].append(int(input("Digite em ["+str(i)+"]["+str(j)+"]: ")))',
  },
  {
    id: 58,
    questaoId: 48,
    bloco: 'int i, j, matriz[3][3]={1,2,3,4,5,6,7,8,9};',
  },
  {
    id: 59,
    questaoId: 48,
    bloco: 'for (i = 0; i < 3; i++){',
  },
  {
    id: 60,
    questaoId: 48,
    bloco: 'for (j = 0; j < 3; j++){',
  },
  {
    id: 61,
    questaoId: 48,
    bloco: 'matriz[i][j] = matriz[i][j] * 2;',
  },
  {
    id: 62,
    questaoId: 48,
    bloco: '}',
  },
  {
    id: 63,
    questaoId: 48,
    bloco: '}',
  },
  {
    id: 64,
    questaoId: 48,
    bloco: 'for (i = 0; i < 3; i++){',
  },
  {
    id: 65,
    questaoId: 48,
    bloco: 'for (j = 0; j < 3; j++){',
  },
  {
    id: 66,
    questaoId: 48,
    bloco: '}',
  },
  {
    id: 67,
    questaoId: 48,
    bloco: '}',
  },
  {
    id: 68,
    questaoId: 48,
    bloco: 'printf("%d ", matriz[i][j]);',
  },
];
