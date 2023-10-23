const mysum = Symbol("key")
const JsUser ={
  name :"Bhavil" ,
  "full namee":"Bhavil Solanki",
  age :18,
  location: "Mumbai",
  upi:"haha",
  isloggedin: false,
  [mysum]: "keyaa"

}
console.log(JsUser.name);
console.log(JsUser["full namee"]);
console.log(JsUser[mysum]);

JsUser.name = "Bhahahahavil"
//Object.freeze(JsUser)
console.log(JsUser);



JsUser.greeting = function()
{
    console.log(`hi ${this.location}`);
}
console.log(JsUser.greeting());