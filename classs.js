// //es 6
// class User{
// constructor(user,email,pass){
//     this.user = user
//     this.email = email
//     this.pass =  pass
// }

// encryptPassword()
// {return `${this.pass}abc`
// }
// change()
// {
//     return`${this.user.toUpperCase()}`
// }
// }
// const chai = new User("bhavil","gmail.com","123")
// console.log(chai.encryptPassword());
// console.log(chai.change());

//bts 

function User(user,email,pass){
    this.user = user
    this.email = email
    this.pass =  pass
}
User.prototype.encryptPassword = function(){
    return `${this.pass}abc`
}
User.prototype.changeaa = function(){
    return`${this.user.toUpperCase()}`
}
const chai = new User("bhavil","gmail.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeaa());