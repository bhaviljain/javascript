let clock = document.querySelector('#clock')
// let clock = document.getElementById('clock') aise bhi likh sakte h


setInterval(function(){
    let date = new Date()
// console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000) //**imp aise he likhna hain same ok..

