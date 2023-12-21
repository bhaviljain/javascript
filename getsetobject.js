const user ={
    _name : "Bhavil",
    _password : "123",


    get name()
    {
return this._name
    },
   set name(value)
   {
    this._name = value
   }
}

const tea = Object.create(user)
console.log(tea.name);