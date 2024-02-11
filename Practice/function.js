console.log(sum(2,3)); 

function sum (a,d) {   //fucntion declaration also know as funtion declaration
  return a + d;         //yes hoisting
}

const sum2 = function (a,d) {   //function expression
    return a * d;             // no hoisting
  }
  console.log(sum2(2,3)); 


  // function () {   //function anonymous
   
  // }
 


  function age (birthyear)
  {
return 20 - birthyear
  }
const birth = age(2000)
console.log(birth);


var b =function xyz() {   //named function 
   console.log("a");
}
b()


function summ(a,b){
 return a + b
}
console.log(summ(1,2));


function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
//We are passing our sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!

var g = function (){
  return function xyz (){

  }
}
console.log(g());


