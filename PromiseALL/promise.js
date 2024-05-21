const p1 = new Promise((resolve, reject)=>{
    fetch('https://fakestoreapi.com/products')
    .then(res =>{
        console.log(res);
    })
    .catch(error=>{
        console.error(error)
    })
})


const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('Unable to fetch data:', error));
    },1000)
    })
 

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('Unable to fetch data:', error));
    })
 
})






const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p4 success")
    },1000)
})
const p5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p5 success")
    },3000)
})
const p6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("p6 success")
    },500)
    // setTimeout(()=>{
    //     reject("p6 success")
    // },1000)
  
})


Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


Promise.all([p4,p5,p6]).then((res)=>{
    console.log(res);
})
.catch((error)=>{
console.error(error);
})





Promise.allSettled([p1,p2,p2]).then((res)=>{
    console.log(res);
})
.catch((error)=>{
console.error(error);
})

Promise.allSettled([p4,p5,p6]).then((res)=>{
    console.log(res);
})
.catch((error)=>{
console.error(error);
})



Promise.race([p1,p2,p3,p4,p5,p6]).then((res)=>{
    console.log(res);
})
.catch((error)=>{
console.error(error);
})





Promise.any([p4,p5,p6]).then((res)=>{
    console.log(res);
})
.catch((error)=>{
console.error(error);
})