let person = {
    name: "bhavil",
    // age : 23
}
// let person2 = {
//     age: 23
// }

let printage = function(age)
{
    console.log(`${this.name} ${age}`);
    }

printage.call(person, 23)
// Function.prototype.mycall = function(obj ={} , ...args)
// {
//  if(typeof this !== "function")
//  {
//     throw new Error(this + "not callable")
//  }
//  obj.fn = this;
//  obj.fn(...args);
// }

// printage.mycall(person,23)
