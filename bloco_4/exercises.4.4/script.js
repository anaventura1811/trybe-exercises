//Exercício de fixação 1 - Objetos - Dia 4.4//

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade');

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' de prata');

