let name = document.querySelector(".name")

const data =  async function (){
 try {
    const data = await fetch("https://dummyjson.com/products/1")
    const res =await data.json()
    console.log(res);
    console.log(res.brand);
    name.innerHTML = `${res.brand}`
 } catch (error) {
    console.log(error);
 }


}

data()

