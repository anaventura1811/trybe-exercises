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

//Exercício 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .

function nomesDePessoas (nomes) {
  let nomeComMaisCaracteres = nomes[0]; //iguala a variável a uma das strings, no caso: à de índice zero no array
  for (let indiceDeNomes in nomes) { 
    if (nomeComMaisCaracteres.length < nomes[indiceDeNomes].length) { 
       nomeComMaisCaracteres = nomes[indiceDeNomes];
   }
  }
  return nomeComMaisCaracteres;
}
let minhaListaDeNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(nomesDePessoas(minhaListaDeNomes));

//Exercício 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//Valor esperado no retorno da função: 2 .

function verificaInteirosRepetidos (numeros) {
  let numeroRepetido = numeros[0];

  for (let index in numeros) {
    if(numeroRepetido === numeros[index]) {
      numeroRepetido += 1;
      numeroRepetido = numeros[index];
    }
 }
  return numeroRepetido;
}
let meuArrayDeNumerosRepetidos = [2, 3, 2, 5, 8, 2, 3];
console.log(verificaInteirosRepetidos(meuArrayDeNumerosRepetidos));

//Exercício 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5 .
//Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function somaDeInteiros (inteiros) {
  let somaDeNumeros = 0;

  for (let index= 1; index <= inteiros; index+=1) {
    somaDeNumeros = somaDeNumeros + index;
    } 
  return somaDeNumeros;
}

let meuNumeroInteiro = 5;
console.log(somaDeInteiros(meuNumeroInteiro));

//Exercício 7 - Crie uma função que receba uma string word e outra string ending . 
//Verifique se a string ending é o final da string word . [comparar]
//Considere que a string ending sempre será menor que a string word . [condicional]
//Valor de teste: "trybe" e "be"
//Valor esperado no retorno da função: true [boolean]
//verificaFimPalavra("trybe", "be") ;
//Retorno esperado: true
//verificaFimPalavra("joaofernando", "fernan") ;
//Retorno esperado: false

function comparacaoDePalavras (stringWord, stringEnding) {
  let resultado;

  if (stringWord.charAt(stringWord.length-1, stringWord.length-2) === stringEnding.charAt(stringEnding.length-1, stringEnding.length-2) && stringEnding.length < stringWord.length) {
    return resultado = true;
  }
  else { 
    return resultado = false;
  }
}

let primeiraPalavra = 'joaofernando';
let segundaPalavra = 'fernan';
console.log(comparacaoDePalavras(primeiraPalavra, segundaPalavra));

let firstWord = 'trybe';
let secondWord = 'be';
console.log(comparacaoDePalavras(firstWord, secondWord));

//Artigo sobre uso do método charAt: https://www.w3schools.com/jsref/jsref_charat.asp 

//EXERCÍCIOS BÔNUS 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos 
// e retorne o número que a string representa.
//Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
//Dicas:
//Uma string é um array de caracteres, então cada elemento do array é uma letra.
//O valor de cada numeral romano é:
//  | I   | 1    |
//  | --- | ---- |
//  | IV  | 4    |
//  | V   | 5    |
//  | IX  | 9    |
//  | X   | 10   |
//  | XL  | 40   |
//  | L   | 50   |
//  | XC  | 90   |
//  | C   | 100  |
//  | CD  | 400  |
//  | D   | 500  |
//  | CM  | 900  |
//  | M   | 1000 |

// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. 
// Exemplo: XI = 10 + 1 = 11. 
// No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. 
// Exemplo: IX = 10 - 1 = 9.

function converteAlgarismosRomanos (algarismoRomano) {
  let algarismo;

  numerosRomanos = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000
  }
  //1º Regra – As letras I, X, C, M somente poderão ser repetidas por três vezes consecutivas.
  //2º Regra – As letras I, X, C podem ser escritas na frente das outras, tendo seus valores somados à letra de maior valor.
  //2º Regra – As letras I, X, C podem ser escritas na frente das outras, tendo seus valores somados à letra de maior valor.
  //4º Regra – Ao colocar um traço horizontal sobre a letra representativa do numeral, multiplicamos seu valor por 1000.
 //for (algarismo > 0 in numerosRomanos) {
  // if (algarismoRomano === numerosRomanos['']) {
  //  algarismo -= 1; 
  //  algarismo === (numerosRomanos[''] - numerosRomanos['']);
  //}
  //return algarismo;
 //}
  
}


//let meunumero = ['I', 'X'];
//console.log(converteAlgarismosRomanos(meunumero));