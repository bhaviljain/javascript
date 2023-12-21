let arr =[1,2,3,4,5]
//reduce take 4 arg previos value , current val , currindex, array
// let res = arr.reduce((acc , currval)=> {
//   return acc + currval 
// },0)
// 0 is the initial value

// console.log(res);

Array.prototype.myreduce = function(cb,initialvalue)
{
let acc = initialvalue;
for (let index = 0; index < this.length; index++) {
    acc = acc ?cb (acc, this[index]) :this[index]
   
}
return acc;
}

let res = arr.myreduce((acc , currval)=> {
    return acc * currval 
  })


  console.log(res);