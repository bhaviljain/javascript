let btn = document.getElementById('btn')
let press = document.getElementById('press')
let trigger = document.getElementById('trigger')

let PressCount =0
let triggerCount = 0


const deb = (cb,d) =>{
    let timer;
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
       cb(...args)
        },d)
    }

}
const debounce = deb(()=>{
    trigger.innerHTML = `trigger: ${++triggerCount}`
},800)


btn.addEventListener("click",()=>{
    press.innerHTML = `Press: ${++PressCount}`
    debounce()
})





// const deb = (cb,d) =>{
//     let timer;
//     return function(){
//         let context= this,
//         args = arguments
//         clearTimeout(timer)
//         timer = setTimeout(()=>{
//        cb.apply(arguments,this)
//         },d)
//     }

// }