

//objects for lookups
function lookUp(value){
  
  let lookUpObj = {
      "first_thing": "something",
      "second_thing": "something else",
      "third_thing": "A thing-a-mee"
      
    }
    //compulsary brackets since result will be a string
    let result = lookUpObj[value];
    return result;
}

lookUp("first_thing");


/*testing obj for properties 
with hasOwnProperty() method */

function checkObj(checkProp) {

  if ( myObj.hasOwnProperty(checkProp)){
      return myObj[checkProp];
  } else {
    return "not found";
  }
}

//complex objects - objects inside an array

let myArray = ['monday':{'entree': "mac'n'cheese",
  'main': 'sardines',
  'dessert': 'fruit sallad',
  'allergens': ['nuts', 'gluten','eggs'],
  'price':12
},
'tuesday':
{'entree': "soup",
  'main': 'steak',
  'dessert': 'cheesecake',
  'allergens': ['nuts', 'gluten','eggs'],
  'price':12
}]


let myAllergen = myArray[0][allergens][1];

/* making a copy of an object 
bjCopy = JSON.parse(JSON.stringify(myObj));
*/

//nested array
for(let i = 0; i < myArray.length; i++){

  for(let j = 0; j < myArray[i].length){
  
    product *= myArray[i][j];
  }
}
//lookup list array with name Objects
Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

//parseInt takes a string and converts to integer

function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger('56';)

someObj = {
  max: 15,
  min: 4,
  median: 8,5
}

//destructering, instead of calling the whole object
const someFunction = ({max, min}) => {

  return (max + min);




}


//implementing stream
//extracting readable class from stream module
const { Readable } = require('stream'); 
//instantiating new readable object
const inStream = new Readable({
  read() {}
});

//adding content
inStream.push('ABCDEFGHIJKLM');
inStream.push('NOPQRSTUVWXYZ');
// signal of end of data
inStream.push(null); // No more data

//outout via pipe (not efficient since it streams all the data)
inStream.pipe(process.stdout);


//this is more efficient only pushing data on demand...
//at this moment I don't understand this code

const inStream = new Readable({
  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);

