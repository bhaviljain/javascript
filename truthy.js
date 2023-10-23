// // const email= ""
// // if(email)
// // {
// //     console.log("yes");
// // }
// // else{
// //     console.log("No");
// // }
// // // falsy values

// // false ,0 ,-0 , BigInt 0n , "" ,null , undefined ,NaN

// // //truthy values

// // "0" , 'false' " " ,[] {} , function(){},

// if(email.length === 0)
// {
// console.log("Array");
// }

const empObj = {
    name :"Bhavil"
}

if(Object.keys(empObj).length === 0){
    console.log("YES");
}
else{
    console.log("NO");
}

//nullish coalescing operator (??)

let val1;
// val1 =5 ?? 10
// val1 =null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
console.log(val1);

// terniary operator

// condition ? true : false

const ice =70
ice >=80 ? console.log("less than 80") : console.log("more than 80");