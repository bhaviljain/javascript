let value = 1;

function doSomething() {
  value = 2;
  console.log(value);
};

doSomething();
//A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

setTimeout(function(){
console.log("timer");
},5000)
function x(y) {
    console.log("x");
    y()

}
x(function(y){
    console.log("y");
});

