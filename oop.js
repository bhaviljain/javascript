const user ={
    username: "Bhavil",
    login : true,

    getuser: function(){
console.log("yes");
console.log(this);
    }
}

console.log(user.username);
console.log(user.getuser());
console.log(this);

function User(username,login){
this.username = username;
this.login =  login;
this.greeting = function(){
    console.log(`welcome ${User}`);
}
return this 
}        

const userone =new User("Bhavil", true)
const usertwo = new User("Rocky", false)
console.log(userone.constructor);
console.log(usertwo);
