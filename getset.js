class user {
    constructor(email, pass) {
        this.email = email
        this.pass = pass //pass abhi get and set method set kar rha h coz appne pass ko ovveride kar diya h
        
    }
    get email()
    {
        return this._email.toUpperCase()
    }
    set email(value)
    {
         this._email = value //setters mein return nahi karte hai
    }
    get pass()
    {
    // return this._pass.toUpperCase()
    return `${this._pass}******` //manupalting the password who is trying to access the passoword
    }
    set pass(value)
    {
       this._pass =  value
    }
}

const bhavil = new user("sbsbs", "aca")
console.log(bhavil.pass);
console.log(bhavil.email);