function sum (...numbers){
    console.log(numbers);
let result = 0

numbers.forEach(element => {
    result += element;

});
return result
}

// const numbers = [1,2,3,4,,5]
// console.log(sum(2,3,4,4));


// destructuring of objecf

const user = {
    name : "bhavil",
    street : "Andheri",
    pin : 400069
}

const {name , ...others} = user

console.log(name, others);