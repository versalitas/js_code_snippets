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


//constucting a new obeject out of two or several

const pikachu = {name: pikachu};
const stats = {force:3, colour:yellow};
const pikachuStats = (...pikachu...stats);

