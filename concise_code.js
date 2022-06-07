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
