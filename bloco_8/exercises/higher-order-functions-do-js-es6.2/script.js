// Exercícios do bloco 8 - módulo 1

// Uso do for.Each, manipulação de arrays e objetos
const emailListInData = [
    'anaroberta@email.com',
    'luizantunes@email.com',
    'adalovelace@email.com',
    'fabiano@email.com'
];

const dadosCadastrados = {
    Ana: 'anaroberta@email.com',
    Luiz: 'luizantunes@email.com',
    Ada: 'adalovelace@email.com',
    Fabiano: 'fabiano@email.com'
};

const showEmailList = (email) => console.table(`O email de ${email}, está cadastrado no banco de dados!`);
let keys = Object.entries(dadosCadastrados);
keys.forEach((item) => {
  showEmailList(item);
});

console.table(dadosCadastrados);

// Exercício forEach - tabuada do 2 com forEach
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multipliesFor2 = (el) => console.log(`${el} * 2: ${el * 2}`);
numbers.forEach(multipliesFor2);

// Exercício forEach:
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
    names[index] = name.toUpperCase();
};
names.forEach(convertToUpperCase);
console.log(names);

// Revisando função create Menu do JS Unit Test Project 
// e comparando com conteúdo sobre arrow functions
let myRestaurant = {};
const orderFromMenu = (request) => {
  myRestaurant.consumption.push(request);
};
const createMenu = (cardapio) => {
 myRestaurant = {
    fetchMenu: () => cardapio,
    consumption: [],
    order: (request) => orderFromMenu(request),
    pay: () => {
        let consumo = 0;
        const foodItem = Object.keys(cardapio.food);
        const drinkItem = Object.keys(cardapio.drink);
        const consumptionArr = myRestaurant.consumption;
        for (let key = 0; key <= consumptionArr.length; key += 1) {
          if (foodItem.includes(consumptionArr[key])) {
            consumo += cardapio.food[consumptionArr[key]];
          }
          if (drinkItem.includes(consumptionArr[key])) {
            consumo += cardapio.drink[consumptionArr[key]];
          }
        }
        return (consumo * 1.1).toPrecision(4);
    }
  };
  return myRestaurant;
};
const conta = createMenu({ food: { coxinha: 4.00, pastel: 5.00, sopa: 10.00 }, drink: { agua: 2.00, cerveja: 7.50, suco: 5.90}});
conta.order('coxinha');
conta.order('agua');
conta.order('coxinha');
conta.order('pastel');
conta.order('suco');
conta.order('cerveja');
conta.order('cerveja');
conta.order('cerveja');
conta.order('cerveja');
console.log(conta.pay());


// Exercício do CodePen - usando .forEach
// Array contendo a lista de emails.
const emailList = [
    "isa@myemail.com",
    "lipe@myemail.com",
    "digo@myemail.com",
    "greg@myemail.com",
   "mariahelena@gmail.com",
  ];
  
  // Função callback que recebe o array emailList como parâmetro.
  const showEmailList = (list) => {
    const div = document.querySelector("#email-list");
    div.innerHTML = '';
  // Para cada e-mail da lista, a função cria uma tag <p> com a frase '${email}: Enviado com sucesso'
    list.forEach((email) => {
      const p = document.createElement("p");
      p.innerHTML = `${email} : Enviado com sucesso!`;
      div.appendChild(p);
    });
  }
  
  const btnFilter = document.querySelector("#btn-filter");
  btnFilter.addEventListener("click", () => showEmailList(emailList));

// Exemplos do CodePen - usando .every:
// Array que será passado para o .every
const numbers = [1, 3, 5, 7, 25, 11];
// Callback que checa se o número é ímpar
function isOdd(number) {
  return number % 2 !== 0;
}
// Função em que passamos o array numbers como parâmetro. Se todos os números são ímpares, 
// a callback retornará true e a frase "Todos os números são ímpares". 
// Caso contrário, o retorno da callback é false, indicando que há um número par no array.
checkIsOdd = (array) => {
  const answer = document.querySelector("#answer");
  if (array.every(isOdd)) {
    answer.innerHTML = "Todos os números são ímpares";
  } else {
    answer.innerHTML = "Pelo menos um número é par";
  }
};

const btnEvery = document.querySelector("#btn-every");
btnEvery.addEventListener("click", () => checkIsOdd(numbers));

// Exercícios do course - bloco 8 - every, sort
const listNames = ['Maria', 'Joaquina', 'Felipa', 'Matheus', 'João'];

const grades = {
    portugues: 'Aprovado',
    matematica: 'Aprovado',
    ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
   Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades));

// Exercícios do course usando .sort()
const myFood = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
myFood.sort();
console.log(myFood);

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.sort();
console.log(numeros);

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => b - a);
console.log(points);

