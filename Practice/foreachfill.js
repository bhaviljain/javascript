let arr= [1,3,4,5,6]

// arr.forEach((e) => console.log(e))

function print(el){
    console.log(el);
}

Array.prototype.myForEach = function (cb) {
    for (let index = 0; index < this.length; index++) {
        cb(this[index]) 
        
    }
}

arr.myForEach(print)