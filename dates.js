 /*let date = new Date()
console.log(date.toString());
 console.log(date.toDateString());
 console.log(date.toISOString());
console.log(date.toLocaleDateString());
 console.log(typeof date);

 //let myDate = new Date(2023 , 0 ,23)
 //let myDate = new Date(2023 , 0 ,23,5,3)
 let myDate = new Date("01-14-2023")
 console.log(myDate.toLocaleString());

 let myTimestamp = Date.now();*/
 //console.log(myTimestamp);
 //console.log(myDate.getTime());
 //console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
 console.log(newDate);
 console.log(newDate.getMonth());
 
 console.log(newDate.toDateString());
 console.log(newDate.toISOString());
 console.log(newDate.toJSON());
 console.log(newDate.toLocaleDateString());
 

 let updatedate = `Date is ${newDate} and the time is ${newDate.getTime()}`
console.log(updatedate); 
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
    

})

console.log(newDate);
