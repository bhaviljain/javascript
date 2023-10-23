let a= 100 //global scope variable at block scope
if (true){ 
    let a =10 //but block scope is not available at global scope
const b = 20
console.log("INNER:",a);

}
console.log(a);

//console.log(a);
//console.log(b);
console.log(a);