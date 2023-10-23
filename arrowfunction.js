// const user={
//     username:"Bhavil",
//     price : 999, 

//     welcomeMessage: function()
//     {
//         console.log(`${this.username}, welcome to website`);
//        // console.log(this);
//     }
// }

// user.welcomeMessage()
//  user.username = "Bhavil Jain"
//   user.welcomeMessage()

//console.log(this); //browser ke under joh object hain wo hain window object

// function one()
//  {   let user = "Bhavil"
//     console.log(this.user); //this dot nahi chalta inside a function
//  }
// one( )

// const chai = function()
// {
//     let user = "Bhavil"
//        console.log(this.user);   
// }
// chai()

const chai = () =>
{
    let user = "Bhavil"
       console.log(this);   
}
//chai() //o/p: undefined & {} 

//  const addTwo = (num1 ,num2)=> //niceh parenthesis nikal diye usse khete hain implicit return.(return likhne ki zaruurat nahi kyuki ek he line return kar rhe hai)
//  {
//     return num1+num2
//  }
 //const addTwo = (num1 ,num2)=>  num1+num2 
// const addTwo = (num1 ,num2)=>  (num1+num2)  // agar idar curly braces dala to nahi chalega
 const addTwo = (num1 ,num2)=>  ({user:"Bhavil"})  //object declaration with parenthethis () 
 
 console.log(addTwo(3,4));

  