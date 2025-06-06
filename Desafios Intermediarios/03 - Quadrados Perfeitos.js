// Desafio  
// Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

// Entrada
// A entrada consiste em um número inteiro n, representando o valor total. 

// Saída
// A saída consiste em retornar o menor número de números quadrados perfeitos. 

// EXEMPLO DE ENTRADA EXEMPLO DE SAÍDA 
// 12                 3 
// 13                 2 
// 10                 2 

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let lines = gets().split("\n");
let n = parseInt(lines.shift());

const dp = new Array(n + 1).fill(Infinity);
dp[0] = 0; 

const perfectSquares = [];
for (let i = 1; i * i <= n; i++) {
  perfectSquares.push(i * i);
}

for (let i = 1; i <= n; i++) {
  for (const square of perfectSquares) {
    if (i - square >= 0) {
      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }
}

print(dp[n] === Infinity ? -1 : dp[n]);
