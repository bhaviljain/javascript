const obj = {
    name :"bhavil",
    getRoll : function(){
        return this.roll
    }
}

const obj2 = {
    roll : 1,
    name: "jain",
    __proto__ : obj
}

const obj3 = {
    roll : 1,
    __proto__ : obj2
}

// console.log(obj3.name);
//yeh sab inheritance hain

const arr = [1,2,3,4,5]
// arr.forEach (el=>{
//     console.log(el);
// })



Array.prototype.show = function(cb){
    for (let index = 0; index < this.length; index++) {
     cb(this[index]);
        
    }
}
arr.show((el)=>console.log(el)); 