const age =18;
const name = "18"

if(age === 18)
console.log("=== is true"); // === does not perform type coersion (strict)
else{
    console.log("=== false");
}

if(name == 18)
console.log("== is true"); // ==  perform type coersion (loose)
//always use===  while comparing