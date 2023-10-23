// const tinderuser = new Object()
const tinderuser ={}

tinderuser.id ="1"
tinderuser.name ="Bhavil"
//console.log(tinderuser);

const regularUser ={
     name1: 
     {
        name:"Bhavil",
        last:"jain",
        real:"solanki"
     }
}
console.log(regularUser.name1);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}
//const obb3 = Object.assign({},obj1,obj2) // to combine all the objects using assign 
//console.log(obb3);

 //const obj3 ={...obj1,...obj2} //to combine all the objects using spread
 //console.log(obj3);

 //jab bhi database se value ayegi , array of objects ayega

 //console.log(Object.keys(tinderuser));
 //console.log(Object.entries(tinderuser));
 //console.log(Object.values(tinderuser));

 //console.log(tinderuser.hasOwnProperty('id'));

 const course ={
    "course name":"js in hindi",
    courseteacher:"Bhavil",
    price:"999"
 }
 const{"course name":c}= course //object destructuring
 console.log(course.courseteacher)
 console.log(c);





