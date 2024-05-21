// let sum = 0;

// const cal = (n)=>{
//     for(let i =0; i<=n;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }
// console.time()
// console.log(cal(5));
// console.timeEnd();



//using cache

function fibMemo (n ,memo = {0:0 ,1:1}){
    if(n<=1)
    {
        return n;
    }
    if(n in memo)
    {
        return memo[n]
    }
    memo[n] = fibMemo(n-1,memo) + fibMemo(n-2,memo)
    return memo[n]
}
console.time()
console.log(fibMemo(50));
console.timeEnd()

console.time()
console.log(fibMemo(50));

console.timeEnd()





























//using higher order fucntion
function fib(n)
{
    if(n<=0)
    {
        return 0;
    }
    else if(n<=1)
    {
        return 1;
    }
    return fib(n-1) + fib(n-2)
}

// const memo = (fn ) =>{
//     let cache = {}
//     return function(n){
    

//         if(cache[n])
//         {
//           return cache[n]
//         }
//         else{
//             const res = fn(n)
//             cache[n] = res;
//             return res;
//         }
//     }
// }
// const cal = memo(fib)
// console.log(cal(60));



function memoize(func) {
    const cache = {};
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (cache[key]) {
        return cache[key];
      }
      
      const result = func.apply(this, args);
      cache[key] = result;
      
      return result;
    };
  }
const cal = memoize(fib)
console.log(cal(50));