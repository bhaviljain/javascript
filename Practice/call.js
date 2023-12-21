// let user = {
//     name :"Bhavil",
//     lastname :"Jain",
//     print(greeting)
//     {
//     return`${this.name} ${greeting}`
//     }
// }


// let user2 = {
//     name :"Jainam",
//     lastname :"shah",
// }
//     console.log(user.print.call(user2,'morning'))
//     console.log(user.print.apply(user2,['morning']))

//     //apply aur call same hain sirf apply ke arguments array mein pass karte hain

// // ***************EXP 2**************************************************
//     let userdetails = {
//     name : "bhavil",
//     }
//     let printDetail = function(state, country)
//     {
//         console.log(this.name + state + country);
//     }
//     printDetail.call(userdetails,"maha" ,"india")


// /////////// EXP 3 ///////////
// const person
// ={
//     name :"Bhavil"
// }

// function say (age)
// {
//     return `${this.name}  ${age}`
// }
// console.log(say.call(person));





let userdetails = {
        name : "bhavil",
        }
        let printDetail = function(state, country)
        {
            console.log(this.name + state + country);
        }
        // printDetail.call(userdetails,"maha" ,"india")

let userdetails2 = {
        name : "Rocky",
        }
      let newfun =   printDetail.bind(userdetails2,"maha" ,"india")
      newfun()









