function user(email, password)
{
    this._email = email
    this._password = password

Object.defineProperty(this, 'password',{
    get: function(){
        return this._password
    },
    set: function(value){
   this._password = value
    }
})

}

const bhavil = new user("sbsbs", "aca")
console.log(bhavil.password);
console.log(bhavil.email);