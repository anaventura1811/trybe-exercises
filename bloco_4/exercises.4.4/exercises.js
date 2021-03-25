//Exercícios - Dia 4.4 - Parte I - Objetos e For/In//

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'Sim',
  };

  console.log('Bem-vinda, ' + info.personagem);

  console.log(info);
  

  for(let key in info) {
      console.log(info[key])
  }

let character = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178" ,
    nota: "O último MacPatinhas" ,
    recorrente: "Sim"
}

console.log(character);



function converteAlgarismosRomanos (algarismoRomano) {
    let resultado; 
    let arrayAlgarismos = [];
    let numerosRomanos = {
     podemSerEscritasAntesOuDepois : {
       I : 1,
       X : 10,
       C : 100,
     },
     numerosMaiores : {
       V : 5,
       L : 50,
       D : 500,
       M : 1000,
     }
   }; //objeto com os números romanos de base 
 
   //Regra 1: Os numerais I, X, C, M podem ser repetidos por até três vezes consecutivas.
    for (let index in algarismoRomano) {
     arrayAlgarismos = algarismoRomano.split('');
     arrayAlgarismos[index] === numerosRomanos[index]; 
       
      {
          if (arrayAlgarismos[index] === numerosRomanos.podemSerEscritasAntesOuDepois['I'] || numerosRomanos.podemSerEscritasAntesOuDepois['X'] || numerosRomanos.podemSerEscritasAntesOuDepois['C'] || numerosRomanos.numerosMaiores['M']  &&
          arrayAlgarismos[index] === arrayAlgarismos[index + 1] &&
          arrayAlgarismos[index] === arrayAlgarismos[index + 2] &&
          arrayAlgarismos[index] === arrayAlgarismos[index + 3]) {
            return false;
          } else  {
                if (algarismoRomano[index] < algarismoRomano[index + 1]) {
                    resultado = algarismoRomano[index + 1] - algarismoRomano[index];
                }
                else {
                    resultado += algarismoRomano[index];
                }
            }
      }
    }
    return resultado;
}

function converterAlgarismosRomanos () {
    const convert = require('lab-roman-int-converter');
}


meuNumero = 'CCC';
console.log(converterAlgarismosRomanos(meuNumero));