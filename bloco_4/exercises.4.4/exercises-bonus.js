//1º Regra – As letras I, X, C, M somente poderão ser repetidas por três vezes consecutivas.
//2º Regra – As letras I, X, C podem ser escritas na frente das outras, tendo seus valores somados à letra de maior valor.
//3º Regra – As letras I, X, C podem ser escritas antes da outra, tendo seus valores subtraídos da letra de maior valor.
//4º Regra – Ao colocar um traço horizontal sobre a letra representativa do numeral, multiplicamos seu valor por 1000.

function converteAlgarismosRomanos (algarismoRomano) {
   let resultado;
   let algarismosParaConversao = []; //para armazenar o array que será criado numa variável
   let numerosRomanos = {
    podemSerEscritasAntesOuDepois : {
      'I' : 1,
      'X' : 10,
      'C' : 100,
    },
    numerosMaiores : {
      'V' : 5,
      'L' : 50,
      'D' : 500,
      'M' : 1000,
    }
  }; //objeto com os números romanos de base 

  algarismoRomano.split('') = algarismosParaConversao; // converte string em array e os armazena

  //Regra 1: Os numerais I, X, C, M podem ser repetidos por até três vezes consecutivas.
   for (let index in algarismosParaConversao) {
     if (algarismosParaConversao[index] === 'I' || 'X' || 'C' || 'M'  &&
         algarismosParaConversao[index] === algarismosParaConversao[index + 1] &&
         algarismosParaConversao[index] === algarismosParaConversao[index + 2] &&
         algarismosParaConversao[index] === algarismosParaConversao[index + 3]) {
           return false;
           console.log('Operação inválida! Só pode repetir o mesmo número por até três vezes consecutivas');
         }
   }
   for (let indice in numerosRomanos) {
     if (algarismosParaConversao[index] === numerosRomanos.podemSerEscritasAntesOuDepois[indice]) {
       index += 1;
       if (algarismosParaConversao[index] < algarismosParaConversao[index + 1]) {
         resultado = subtraction(algarismosParaConversao[index + 1], algarismosParaConversao[index])
       }
       if (algarismosParaConversao[index] >= algarismosParaConversao[index + 1]) {
         index += 1;
         resultado = sum(algarismosParaConversao[index], algarismosParaConversao[index + 1])
       }
     }
     return resultado;
   }
  
   console.log(converteAlgarismosRomanos('IX'));

   function Romanos(roma) {
    let romanos = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    let arrayNumbers = [];
    let result = 0;
  
    for (let indice in roma) {
      arrayNumbers[indice] = romanos[roma[indice]];
    }
  
    for (let indice in arrayNumbers) {
      if (arrayNumbers[indice] < arrayNumbers[indice + 1]) {
        arrayNumbers[indice + 1] = arrayNumbers[indice + 1] - arrayNumbers[indice];
      } else {
        result += arrayNumbers[indice];
      }
    }
  
    return result;
  }
  
  console.log(Romanos('MMXVIII'));
    
    //for (let indice in algarismoRomano) {
      //algarismosParaConversao = algarismoRomano.split('');
    //}
    //for (let key in numerosRomanos) {
      //if (algarismosParaConversao[indice] === numerosRomanos[key]) {
       // indiceNumeroMenor = 0; 
        //if (algarismosParaConversao[indiceNumeroMenor] < algarismosParaConversao[indice]) {
          //algarismo = algarismosParaConversao[indice] - algarismosParaConversao[indiceNumeroMenor];
        //}
        //else if (algarismosParaConversao[indice] > algarismosParaConversao[indiceNumeroMaior]) {
          //indiceNumeroMaior > 0;
          //algarismo = algarismosParaConversao[indice] + algarismosParaConversao[indiceNumeroMaior]
        //}
      //}
    //}
    
    //{
      //      for (key = 0; key < numerosRomanos.length; key +=1) {
        //        indice += 1;
          //      algarismoRomano[indice] === numerosRomanos[key];
            //    indiceNumeroMenor >= 0 && indiceNumeroMenor < indiceNumeroMaior;
              // if(numerosRomanos[key] >= numerosRomanos.podemSerEscritasAntesOuDepois[indiceNumeroMenor] || 
                //numerosRomanos.podemSerEscritasAntesOuDepois[indiceNumeroMaior] > numerosRomanos.podemSerEscritasAntesOuDepois[key]) {
                  //  algarismo = numerosRomanos[key] + numerosRomanos[key];
          //}
          
      //}
     //}
    //}
    //return algarismo;
    
//}
