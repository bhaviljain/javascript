// function name(){
// console.log("B");
// console.log("H");
// console.log("A");
// }
//invoking the function/ calling/ execting
// //name() 
//                 //parameters
// function addtwo(number1 ,number2)
// {
//     let add = number1+number2 // can write direct reeturn or you can assign a let // dont do console 
//     return add
// }

//                      //arguments
// const result = addtwo(3,4)
// console.log("result:",result);

// function loginmessage(username="Bhavil")
// {
//     if(username === undefined)
//     {
//     console.log("please enter");
//     return;
//     }
//     return `${username} logged in`
// }
// //console.log(loginmessage("Bhavil"));
// console.log(loginmessage("Bhavilllll"));// override the line 19

 function mul(n1,n2) {

    let multiply = n1*n2
    return multiply
 }
 let result2 = mul(2,2)


 console.log(result2);

///////////////////////////////



 function log(age) 
 {
   console.log(`hello ${age}`);
 }
 log(3)

                //parameter
 function fruits(orange,apple)
 {
   // console.log('fruits');
   const fruits2 = `make juice of ${orange} oranges and ${apple} `
   return fruits2
 }                //arguments
 const ok = fruits(2,3) //can be done by having a extra variable
 console.log(fruits(1,2)); //also can be done directly 
 console.log(ok); 


 function summ(b)
 {
  return 1 + b;
 }
 summ(2);