 let arr =[1,2,3,4,5]

// const res = arr.filter((el)=>el<=2);

// console.log(res);

Array.prototype.myfilter = function(callback){
let res = [];
for (let index = 0; index < this.length; index++) {
    if(callback(this[index]))
    {
    res.push(this[index])
    }
    
}
return res;
}

const res = arr.myfilter((el)=>el<=4);
console.log(res);