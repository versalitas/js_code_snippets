//destructuring an object to access properties

const animal = {
      name: 'polar bear',
      colour: 'white', 
      legs: 4
}

const infoAnimal = (animal) => {
const {name, colour, legs} = animal;
      console.log(`The animal is a ${name} with ${colour} fur.);
}

//spread syntax : constructing a new obj out of two

const pikachu = {name: pikachu};
const stats = {force:3, colour:yellow};
const pikachuStats = {...pikachu...stats};

//spread syntax: pushing 

let pokemon = [bulbasaur, pikachu];
let pokemonTeam = [...pokemon, charmander,];

//spread syntax: unshifting
let pokemonTeam = [bulbasaur, pikachu, charmander, ...pokemon,]

//reduce: sum the values in an array

const total = orders.reduce((acc, curr) => acc + curr);

//map returns a new array here with added VAT

const ordersAddedVat = orders.map(order => order * 1.21);

//filter returns an element or various according to filtering logic

const bigOrders = orders.filter( order => order > 100);



