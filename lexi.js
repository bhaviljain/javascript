function a() {
    var b =10;

    x()

   function x(){
   
   }
   console.log(b);

}
a()
//x fucntion is lexically sitting inside fucntion called as lexical. lexical envirment : local variable and lexical envirment  of parents. here a lexical enviroment points to window which is null

function outer (){
    let username ='kumar'

    let user = 'bhavil'
    function inner (){
        // let username ='kumar' // ismeian likhige to nahi hoga run parent pe he hoga

        console.log(user)
    }
    function innerTwo()
    {
    console.log(username);
    }
    inner()
    innerTwo()
}
outer()
