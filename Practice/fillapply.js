let person = {
    name: "bhavil",
    age : 23
}

let printage = function(age,gender)
{
    console.log(`${this.name} ${age} ${gender}`);
    }


Function.prototype.myApply = function(obj ={} , args=[])
{
 if(typeof this !== "function")
 {
    throw new Error(this + "not callable")
 }

 if(!Array.isArray(args)){
    throw new TypeError("err") //coz apply take array
 }
 obj.fn = this;
 obj.fn(...args);
}

printage.myApply(person,[23,"male"])
