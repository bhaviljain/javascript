const arr =[1,2,3,4]

// const res =  arr.map((e)=> e *2)

// console.log(res)

Array.prototype.myMap = function(cb)
{

    let res = []; //as map return a new array
    for (let index = 0; index < this.length; index++) {
        res.push(cb(this[index],this))
    }
    return res
}

const res = arr.myMap((e)=> e*4)
console.log(res);