let arr =['1','2','4']

let arr2 = [...arr]

// console.log(arr2);

//spread unpacks

const one = {
    name : "hello",
    lname : "jain"
}
const three = {
    ...one,
    

}
// console.log(three);

let array1= [1,2,3,4,5]

let array2 = [6,7,8,9,10]

console.log(...array1 , ...array2);




let news = [1,2,5,6]
console.log(Math.max(...news));
// console.log(Math.max(news));// NAN error as invalid



function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
const num = [2,3,4]

console.log(sum(...numbers ));
console.log(sum(...num ));

