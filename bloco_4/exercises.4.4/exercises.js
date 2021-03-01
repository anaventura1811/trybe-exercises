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
      console.log(key)
  }

  