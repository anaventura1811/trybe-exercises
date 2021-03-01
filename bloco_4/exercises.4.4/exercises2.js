//PARTE 2 - Funções - Dia 4.4
//Exercício 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Exemplo de palíndromo: arara .
//verificaPalindrome("arara") ;
//Retorno esperado: true
//verificaPalindrome("desenvolvimento") ;
//Retorno esperado: false
function verificacaoDePalindromo(word) {
  let wordInReverse = word.split('').reverse().join('');
  if (wordInReverse === word) {
    return true;
  } else {
    return false;
  }
}
console.log(verificacaoDePalindromo('ala'));
console.log(verificacaoDePalindromo('arara'));
console.log(verificacaoDePalindromo('desenvolvimento'));

//Referência sobre split, reverse e join: https://hcode.com.br/blog/dividindo-strings-com-metodo-split 

//Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Posições/índices: 0, 1, 2, 3, 4, 5
//Valor esperado no retorno da função: 4 .

function maiorNumeroInteiro(numerosInteiros) {
    let indiceMaiorNumero = 0;

    for (let index in numerosInteiros) {
        if (numerosInteiros[index] > numerosInteiros[indiceMaiorNumero]) {
          indiceMaiorNumero = index;
        }
    }
    return indiceMaiorNumero;
}

let meusNumerosInteiros = [2, 3, 6, 7, 10, 1]; //array de teste
console.log(maiorNumeroInteiro(meusNumerosInteiros));
//O exercício 2 foi feito com ajuda do Instrutor Jackson Pires durante o plantão das 18h40 do dia 4.4 

//Exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//Valor esperado no retorno da função: 6 .

function menorNumeroInteiro (numeroInteiro) {
  let indiceMenorNumero = 0;

  for(let indice in numeroInteiro) {
    if (numeroInteiro[indice] < numeroInteiro[indiceMenorNumero]){
      indiceMenorNumero = indice;
    }
  }
  return indiceMenorNumero;
}
let meusNumerosTeste = [2, 4, 6, 7, 10, 0, -3];
console.log(menorNumeroInteiro(meusNumerosTeste));

