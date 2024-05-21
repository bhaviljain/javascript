
function start(num)
{
    return num;
}
console.log(start(+"23"));


console.log(1 + -'1' + '2'); 
// - is uniary operator , first that one(-"1") will be converted to a integer 1 and then - will appended so
// it will be 1 - 1 =0 and now it is 0 + "2" now is a string it will be appended , op - 02


let a1 = [1,2]
let a2= [2,3]
let a3 = a2.push(a1)

console.log(a2);



console.log(1 || 2);
console.log(1 || 0);
console.log(2 && 0);
console.log(1 && 2);
console.log(2 && 4);

let random = {
    name:'bhavil'
}
random = 23;
console.log(!typeof random);

if(!typeof random === String)
{
    console.log("not");
}
else{
    console.log("yes");
}


let person = {
    name:"Kiran"
}
function hello(occ)
{
    return `${this.name} is ${occ}`
}
console.log(hello.call(person, "eng"));
const red  = hello.bind(person, "eng");
console.log(red());
