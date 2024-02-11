// const arr =[1,2,3]

// const output = arr.reduce(function(max , curr){
// if(curr > max)
// {
// max = curr;
// }
// return max
// },0)
// console.log(output);

const user = [
    {name:"Bhavil", lastName: "Jain",age:23},
    {name:"tick", lastName: "yol", age:30},
    {name:"Bhavil", lastName: "aaa",age:21},
    {name:"Bhavil", lastName: "aaa",age:51},
    {name:"Bhavil", lastName: "aaa",age:11},
    {name:"Bhavil", lastName: "aaa",age:24},
]


const output2 = user.reduce(function(acc , curr){
if(acc[curr.age] > 23)
{
    acc[curr.name] = ++acc[curr.name]
}
else{
    acc[curr.name] =1
}
return acc;
},{})

console.log(output2);


let belowAge = user.reduce((res,user)=>{
if(user.age<=11)
{
    res.push(user.name)
}
return res;
},[])
console.log(belowAge);