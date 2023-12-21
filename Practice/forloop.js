const users = [
    {
    id:1,
    name: "bhavil",
    lastname: "jain",
    gender: "male",
    isActive : true,
    age:15,
    },
    {
    id:2,
    name: "Rocky",
    lastname: "jain",
    gender: "male",
    isActive : true,
    age:16,
    },
    {
    id:3,
    name: "Lucifer",
    lastname: "jain",
    gender: "male",
    isActive : true,
    age:13,
    },
    {
    id:4,
    name: "Bhai",
    lastname: "jain",
    gender: "male",
    isActive : false,
    age:30,
    },
]

const names = []

// for(let i =0; i<users.length; i++)
// {
//   names.push(users[i].name)    approach 1
// }
// console.log(names);


// users.forEach(element => {
//   names.push(element.name)  //appraoch 2
// });
// console.log(names);


//  for(let i =0; i<users.length; i++)
// {   
//   if(users[i].isActive)
//   names.push(users[i].name)    
// }  //active user approach 1
// console.log(names);

//note : foreach does not return array
//  users.forEach(element => {
//   if(users.isActive)
//    names.push(element.name) 
// }); //active user approach 2
// console.log(names);

//filter
const a =users.filter((user)=>user.isActive)
.sort((user1 , user2) =>user1.age < user2.age ? 1 : -1)
.map((user)=>user.name)
console.log(a);

//sort acc to age

// users.sort((user1 , user2) =>user1.age > user2.age ? 1 : -1)
// console.log(users);







