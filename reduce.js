const myNums =[1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){

//     console.log(`acc ${acc} and curr ${currval}`);
// return acc+currval

// }, 0)

const myTotal = myNums.reduce((acc,currval)=>acc+currval,0)

console.log(myTotal);

const shoppingcart = [
{
    itemname: "js",
    price: 2999
},
{
    itemname: "python",
    price: 999
},
{
    itemname: "mobiledeveloper",
    price: 5999
},
]
const pay =shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pay);