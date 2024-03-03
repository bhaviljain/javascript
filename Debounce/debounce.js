const btn = document.querySelector('.increment')
const btnPresses = document.querySelector('.increment-pressed')
const count = document.querySelector('.increment-count')


let pressCount = 0
let triggerCount = 0


const Mydebounce = (cb, d)=>{
    let timer;
    return function (...args){
    if(timer) clearTimeout(timer)
   timer = setTimeout(()=>{
   cb(...args)
},d)
}
}


const deb = Mydebounce (()=>{
    count.innerHTML = ++pressCount

},800)
btn.addEventListener('click', () => {
    btnPresses.innerHTML = ++triggerCount
    deb()
})