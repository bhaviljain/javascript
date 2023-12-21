// const change = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(change);

const chai =
{
    name : "chai",
    price: 250,
    orderchai : function(){
    console.log("chai nahi bani");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false,
    
})
Object.defineProperty(chai, 'price', {
    //writable: false,
    enumerable: false,
    
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    {
    console.log(`${key} ${value}`);
    }
}
    




