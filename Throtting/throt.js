myThrot = (fn,d) =>{

    return function(...args)
    {   
        button = document.querySelector('button').disabled = true
        setTimeout(()=>{
        fn()
        },d)
    }

}



const myFun = myThrot (()=>{
     button = document.querySelector('button').disabled = false
    console.log("hello");
},3000)

let myFuns = () =>{
    console.count("throttle")
}

const handleThrott = (fn,d) =>{
    let flag=  true
return function(){
    let context = this,
    args =  arguments
    if(flag){
        fn.apply(context,args)
        flag = false
        setTimeout(()=>{
          flag = true
        },5000)
    }

}
}


const throttle = handleThrott(myFuns,1000)
window.addEventListener("resize", throttle)

