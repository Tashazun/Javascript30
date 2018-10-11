
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);


const animals = ['pig', 'emu', 'dog', 'snake'];

const animals2 = animals.slice();
console.log(animals2, animals);

const animals3 = [].concat(animals);
console.log(animals3, animals);

const animals4 = [...animals];
animals4[2] = 'bulldog';
console.log(animals4, animals);


const pokemon = {
    name: 'pikachu',
    type: 'electric',
};

const pokemon2 = Object.assign({}, pokemon, { name: 'pichu', type: 'electric mouse' });
console.log(pokemon2, pokemon);

