// let name = "Bhavil     "

// console.log(name.trim().length); //low iq thinking

let myhero = ["thor", "spiderman"]
let heropower = {
    thor: "hammer",
    spiderman: "gandu",
    getspiderpower: function () {
        console.log(`spider ${this.spiderman}`);
    }
}

Object.prototype.bhavil = function () {
    console.log(`bhavil`);
}
// heropower.bhavil()
Array.prototype.heybhavil = function () {
    console.log("Bhavil says hi")
}
// myhero.bhavil()
// myhero.heybhavil()
// heropower.heybhavil()

//inheritance
const user = {
    name: "Bhavil",
    email: "google.com"
}
const teacher = {
    makevideo: true
}
const support = {
    support: false

}
const Asssupport = {
    assignment: "JS",
    fulltime: true,
    __proto__: support
}
teacher.__proto__ = user

//modern syntax

Object.setPrototypeOf(support, teacher)

let anotherusername = "Bhavil    "
String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this}`);
    console.log(`true length : ${this.trim().length}`);
}
anotherusername.trueLength()
"tea".trueLength()
"rand".trueLength()