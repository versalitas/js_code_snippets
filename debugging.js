//debugging various variables

console.log({foo, bar, foobar});

//debugging array

let someArray = [2,3,5];

console.table(someArray);

//benchmarking performance... defining timer as looper

console.time('looper');

let i = 0; 

while (i < 10000){
i++;
}
console.timeEnd('looper');

//checking where a function was called

deleteFunction = () => console.trace('Called here');
