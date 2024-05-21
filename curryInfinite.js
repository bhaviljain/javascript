function add(a){
    return function(b){
        if(b) return add(a + b)
        return a
        
    }
}
console.log(add(1)(2)(3)(3)());


//we have converted the function to have infinite argument.
// This allows you to create an infinite currying chain, where you can keep adding numbers as needed, and when you're ready to get the final result, just call the curried function with no arguments to compute the sum