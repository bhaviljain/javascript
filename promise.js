const promiseone = new Promise(function(resolve, reject){
   setTimeout(function(){
    console.log('task complete');
    resolve()
   },1000)
}) 
promiseone.then(function(){
    console.log('promises consumed');
})

new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2");
    resolve()
},1000)
}).then(function(){
    console.log('promises consumed');
})

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({name : "Bhavil"})
    },1000)
})
promisethree.then(function(user){
    console.log(user);

})
const proFour = new Promise(function(resolve,reject){
    setTimeout(function(){
     let error = true
     if(!error){
        resolve({name : "bhavil" , password :"123"})
     }
     else{
             reject('Error something went wrong')  
     }
    },1000)
})
proFour.then((user)=>{
console.log(user);
return user.name
}).then(function(myname){
    console.log(myname);
}).catch(function(error){
    console.log(error);
}).finally(() =>console.log("Finally promised has done"));

const promisefive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
           resolve({name : "javascript" , password :"123"})
        }
        else{
                reject('errmmmmor')  
        }
       },1000)

})

async function pro (){
  try {
    const response = await promisefive
    console.log(response);
  } catch (error) {
     console.log(error); 
  }
}
pro()

// async function behindthescene(){
//   try {
//     const response = await 
//     fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// behindthescene()

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res);
})
.catch((error)=>{
  console.log(error);
})