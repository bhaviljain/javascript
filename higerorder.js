// //higerorder.js

const radius = [2,3,4,5]

// const area = function (radius)
// {
//     const output = [];
//     for(let i =0; i<radius.length ; i++)
//     output.push(Math.PI * radius[i] * radius[i])
// return output
// }
// console.log(area(radius));

// const diameter = function (radius)
// {
//     const output = [];
//     for(let i =0; i<radius.length ; i++)
//     output.push(2 * radius[i])
// return output
// }
// console.log(diameter(radius));

//in the above we are writting the code again and again

const areaofCircle = function(radius){
return  Math.PI * radius * radius
}

const diameterofCircle = function(radius){
    return  2 * radius ;
    }

Array.prototype.calArea = function(logic)
{
    const output = [];
    for(let i =0; i<this.length; i++)
    {
    output.push(logic(this[i]))
    }
    return output;
}
console.log(radius.calArea(areaofCircle));
// console.log(calArea(radius,areaofCircle));
// console.log(calArea(radius,diameterofCircle));

//here there is no repeatable code
//every fucntion has its own task
//chech the same in askhay sajni or free code camp


const data = [10,20,30,40]

function Calsquare (x)
{
 return x * 2;
}
function Caladd (x)
{
 return x + 2;
}

Array.prototype.square = function(calculate){
    let op = []
    for(let i =0; i<this.length; i++)
    {
        op.push(calculate(this[i]))
    }
    return op
}

console.log(data.square(Calsquare))
// console.log(square(data,Caladd));

// console.log(Caladd(data));


// const add = function(a){
//     let op = []
//     for(let i =0; i<a.length; i++)
//     {
//         op.push(a[i]+2)
//     }
//     return op
// }
// console.log(add(data));
