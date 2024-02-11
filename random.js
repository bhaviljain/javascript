const user1 ={
    name:"bhavil",
    age:23,
    address:{
        city:"bombay"
    }
}

const user2 = JSON.parse(JSON.stringify(user1))
user2.name = 'shailesh'
user2.age =30;
user2.address.city = "Goa"
console.log(user1);
console.log(user2);

//shallow copy only