function a(){
    var b =7
    function c(){
      console.log("C called");
    console.log(b);
    }
  return c;
}
const z = a()
z()



const outer = () =>{
  let count =0;
  
  function c(){
    count ++;
    return count;
    console.log(count);
  }
  return c
}
const inner = outer()
console.log(inner());
console.log(inner());
console.log(inner());