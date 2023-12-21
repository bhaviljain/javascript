// let obj = {
//     name :"bhavil"
// }



// Shallow copy: In the case of shallow copy when we copy the original object into the clone object then the clone object has the copy of the memory address of the original object. Means both points to the same memory address.

// Both original object and cloned object internally point to the same referenced object. Since they point to the same memory address so if we changed the cloned object then changes would be reflected back to the original object because they point to the same memory address.

// let user =  obj
// user.name = "jain" //in object its copying the memory location 
// console.log(obj);


// let x = "anil"
// let y =x;
// y = "haha"
// console.log(x);   //in variable its copy the value

// *********************************************************************


//to avoid this we use shallow ND DEEP copy

// shallow copy eg

// var obj1 = { 
//     id: 1, 
//     company: "GFG",

// }; 
// var obj2 = { ...obj1 };  //Using spread operator
// obj2.id = 2; 
// console.log(obj1.id); 
// console.log(obj2.id); 


// var obj1 = { 
//     id: 1, 
//     company: "GFG"
// }; 
// var obj2 = Object.assign({}, obj1) 


// //Using Object.assign operator
// obj2.id = 2; 
// console.log(obj1.id); 
// console.log(obj2.id); 

// //but shallow copy only workds at level 1, not in nested objects or fucntion ,is somewhat useless to talk about the depth of such a copy, though, because it has no nested properties . It means that if you make changes, it will also affect the original object, as well as the copied object.





// var obj1 = { 
//     id: 1, 
//     company: "GFG",
//     address:{
// city: "mumbai"
//     }
// }; 


// var obj2 = {...obj1}


// obj2.address.city = "hahah" //nahi hua shallow copy yaha 

// console.log(obj1);


//DEEP COPY

//One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object: 
// A deep copy is a copy that creates a new object with new memory locations for all of its properties and nested objects or arrays. It means that if you make changes to the copied object or any of its nested objects or arrays, it will not affect the original object.


var obj1 = { 
    id: 1, 
    company: "GFG",
    address:{
city: "mumbai"
    },
     sum : function(){
        return "all"
    }
}; 


var obj2 = _.cloneDeep(obj1)

obj2.address.city = "hahah" 

console.log(obj1);
console.log(obj2); 