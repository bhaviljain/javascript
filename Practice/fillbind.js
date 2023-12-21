let person = {
    name: "bhavil",
    age : 23
}

let printage = function(age,year)
{
    console.log(`Name is ${this.name} age is ${age} born in ${year}`);
    }


Function.prototype.myBind = function(obj ={} , ...args1)
{
 if(typeof this !== "function")
 {
    throw new Error(this + "not callable")
 }

 obj.fn = this;
 return function(...args2)
 {
   obj.fn(...args1, ...args2)
 }
}

let newfun = printage.myBind(person,23)
newfun(2000)
