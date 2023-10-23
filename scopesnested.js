function one()
{
      const user="Bhavil"

      function two()
      {
        const website= "jewelleryhousee"

       // console.log(user);

      }
    // console.log(website);
      two()
    }
      one()

      if(true)
      {
        const user1 ="Bhavil"
        if(user1 === "Bhavil"){
            const website = " hahaha"
      //      console.log(user1 + website);
        }
        
      }
     console.log(addone(5)); // yeh run hua kyuki isko sirf funtion declaration diya hain
      
function addone(num) {
    return num+1
}

console.log(addtwo(5)); // yeh run nahi hua kyuki isko declare aur addTwo variable mein hold bhi kiya hain
const addtwo = function addtwo(num)
{
    return num+2
}
 addtwo(5)
