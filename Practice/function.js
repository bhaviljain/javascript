console.log(sum(2,3)); 

function sum (a,d) {   //fucntion declaration
  return a + d;         //yes hoisting
}

let sum2 = function (a,d) {   //function expression
    return a * d;             // no hoisting
  }
  console.log(sum2(2,3)); 


  let sum3 =function(a,d) {   //function anonymous
    return a + d;
  }
  console.log(sum3(2,3)); 


  function age (birthyear)
  {
return 20 - birthyear
  }
const birth = age(2000)
console.log(birth);