// Desafio
// Neste desafio você deverá construir uma função que recebe uma String e identifique se a mesma é um palíndromo, ou seja, se a String é igual a ela mesma invertida. 
// Dado que temos a String "digital" uma vez invertida temos "latigid" que são diferentes. 
// Logo, NÃO é um Palíndromo. 
// Já se recebemos a string "radar" uma vez invertida temos "radar" que são iguais.

// Entrada
// A entrada consiste em um palavra.

// Saída
// Para cada String informada, terá uma saída de valor Booleano: TRUE, caso a palavra seja um palíndromo, ou FALSE caso a palavra NÃO seja um palíndromo.

// Exemplos de Entrada  Exemplos de Saída
// radar                TRUE
// digital	            FALSE
// ana	                TRUE

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let resultado = gets();
print(checaPalindromo(resultado));


function checaPalindromo(str) {
  return ((str.split("").reverse().join("").localeCompare(str)) == 0 ? "TRUE" : "FALSE");
  }

//TODO:Retorne TRUE ou FALSE, caso a "palavra" seja ou não um Palíndromo.