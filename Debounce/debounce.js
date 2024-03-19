
const handler =
async(e)=>{
        const res = await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
        const data = await res.json()
    
     console.log(e.target.value);
     console.log(data);
     
    }


const debounce =function  (fn, delay) {
    let timer;
    return function (...args) {
    clearTimeout(timer)
   timer = setTimeout(() => {
        fn(...args)
    }, delay);
    }
}


const debouned = debounce(handler,1000)
let inp = document.querySelector('input')
inp.addEventListener("input",debouned)