function sum (a,d) {   //fucntion declaration
  return a + d;         //yes hoisting
}
console.log(sum(2,3)); 

let sum2 = function (a,d) {   //fucntion expression
    return a * d;             // no hoisting
  }
  console.log(sum2(2,3)); 


  function(a,d) {   //fucntion anonymous
    return a + d;
  }
  console.log(sum(2,3)); 