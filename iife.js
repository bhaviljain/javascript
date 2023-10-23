(function chai()
{   //named iife
    console.log("DB connected");
})(); // agar semi colon nahi lagaya toh error ayega
//code end karne liye ; lagaya

((name) =>
{
    //unamed iife
    console.log(`${name}`);
})('bhavil')

//iife why?
 // a function who execytes immediately
 //global scope ke pollution se problem hoti hai kahi baar
 // to uss global scope ke variables ya jo bhi declratation hai usse
 // joh problem hoti hai usko hatane ne liye use hoti hain IIFE