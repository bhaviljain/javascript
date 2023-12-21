let hero = ["bhavil" ,"jain"]

let heroPower = {
  bhavil : "hello",
  jain: "bhavil",

  getHeroPower: function(){
   console.log(`hero power ${this.bhavil}`);
  }
}
Object.prototype.chai = function(){
    console.log(`bhavil is present`);
}
Array.prototype.tea = function(){
    console.log(`bhavil is present`);
}

heroPower.chai()
hero.chai()
// heroPower.tea() 

