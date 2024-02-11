const arr =[1,2,3,4]

function filterFunction (x) {
return x % 2;
}

const output = arr.filter(filterFunction)

console.log(output);

const user = [
    {name:"Bhavil", lastName: "Jain",age:23},
    {name:"tick", lastName: "yol", age:30},
    {name:"Bhavil", lastName: "aaa",age:21},
]

const op = user.filter((x)=>x.age <= 23).map((x)=>x.name)
console.log(op);