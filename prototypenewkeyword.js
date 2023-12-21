function one(num){
return num*5
}
one.power=5

console.log(one(5));
console.log(one.power);
console.log(one.prototype); //empty parenthesis 

function createuser(username , score){
  this.username = username
  this.score= score
} 

createuser.prototype.decrement = function(){
    this.score--
}
createuser.prototype.printMe = function(){
    console.log(`socre os ${this.score}`); //jisne bhi score pucha uska score
}
const bhavil =new createuser("Bhavil",23)
const rock = new createuser("Bhavil",123)

rock.printMe()