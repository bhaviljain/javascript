// function x()
// {   
//     for(let i=0; i<=5; i++)
//     setTimeout(function (){
//       console.log(i);
//     },i * 1000) //op ; 1,2,3,4,5 par yeh toh let ke karan hua qki let ek block scope hain isliye har loop mein uski value change horti hain , aur var is a gloabl scope so haar baar i ki value same he hoti hain isliye 6 6 6 6 6 print hota hai
// }
// x()


//interviewer puchega var se karo toh yeh karo
function y()
{   
    for(let i=0; i<=5; i++)
    {
        function closer(a){
            setTimeout(function (){
                console.log(a);
              },i * 1000) 
          
        }
    closer(i)
}
}
y()


// In below case, close is getting called for each value of i. And for each close() called a new execution context is getting created and in execution phase of that context new callback function context is created with lexical environment, which is reffering to i with which close() was called as close(i) was immediate parent of that callback function. Above cycle goes on and on until for loop ends.

function clock(){
    for(var i = 1 ; i <= 5 ; i ++){
        function close(i){
            setTimeout(function (){
                console.log(i);
            },i * 1000);
        }
        close(i);
    }
}
clock();

// In earlier case, only x() was there which was getting called only once and then callback function  was called 6 times but all of them were having their parent as x() and hence all were pointing to same address(reference) of i.
