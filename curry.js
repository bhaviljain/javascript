function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f + a + b;
      };
    };
  }
  console.log(curry(1)(2)(7));

  function one(to){
return function (subject){
return function (body){
 console.log(`sending mail to ${to} with ${subject} and ${body}`);
}
}
  }
  const send = one("bhaviljain@gmail.com")
  const send2 = send("Gandu")
  console.log(send2("New order"))

  function add(a,b,c){
    return a+b+c;
  }
  console.log(add(1,3));


  userobj = {
    name: "bhavil",
    age: 23,
  }
  function userInfo(user){
    return function(aaa)
    {
    
    return user[aaa]
    
  }
}
  let res = userInfo(userobj)
  console.log(res('age'));
  console.log(res('name'));

  //At its core, currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each
  //where each function returns another function until the final result is achieved

//   Advantages of function currying in JavaScript
// Function currying is an important programming paradigm in JavaScript. It has several advantages, some of which are as follows:

// The currying function in JavaScript is a higher-order function. Higher-order functions are those that either take another function as an argument or return a function. These are the heart of functional programming and make complex things feel incredibly simple.
// In function currying, we break the actual function into several pieces, each of which takes a separate argument. Each of these functions can perform its assigned job. It makes the code more secure and maintainable.

const addss = num1 => num2 => num3 => num1 + num2 + num3;
console.log(addss(1)(1)(3)); //ES6

