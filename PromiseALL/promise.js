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

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})