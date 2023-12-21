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
