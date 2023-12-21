function user(username,email){
    this.username =username
    this.email = email
}
function createuser(username,email,password){
user.call(this,username,email)
this.password = password
}
const element = new createuser("Bhavil","bhavil@gmail.com","123")
console.log(element);