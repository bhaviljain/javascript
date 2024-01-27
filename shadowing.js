// const a =10; block scope
var c = 3;

{
    const a = 100;
    let b = 200;
    var c = 300;
    console.log(a);
console.log(b);
console.log(c);
}
console.log(c);
