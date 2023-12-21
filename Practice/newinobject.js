function createUser(username , score){
    this.username = username
    this.score = score
}                    //method
createUser.prototype.increment = function(){
    this.score ++; //yaha pe score ++ kiska karna hai ? chai aur tea dono ek he createuser fucntion use kar rhe hain toh this use kar rahe hain, taki jisne bhi bulaya sirf uska score++ hoga
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai =  new createUser("chai" , 25) //new keyword lagane padega 
const tea = createUser("tea" , 250)

chai.printMe()


