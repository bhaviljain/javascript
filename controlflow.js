// // // const isUserLoggedIn =true
// // // const temperature = 41

// // // if(temperature >50)
// // // {
// // // console.log("right");
// // // }
// // // else{
// // //     console.log("Less ");
// // // }
// // // //operators  

// // const score =200

// // if(score > 100)
// // {
// //     var power ="fly" 
// //     console.log(`user power: ${power}`);
// // }
// // console.log(`user power: ${power}`); //var use karege line 17 pe toh yeh wali bhi execute hogi
// const balance =1000
// //if(balance > 500) console.log("test"),console.log("test2"); not a good practice to write a code, no {} braces used , its called as implicit scope

// if(balance < 500)
// {
//     console.log("less than 500");
    
// }
// else if(balance < 500)
// {
//     console.log("less than 550");
// }
// else if(balance < 750)
// {
//     console.log("less than 750");
// }
// else
// {
//     console.log("Gareeb");
// }

const isUserLoggedIn = true
const debitcard = true
const loggedInfromGoogle= false
const loggedInfromEmail = true

if (loggedInfromEmail || loggedInfromGoogle ) { //&& , ||
    console.log("user logged in");
    
} 