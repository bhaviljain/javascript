class user{
    constructor(username)
    {
     this.username = username
    }
    logMe()
    {
        console.log(`username ${this.username}`);
    }
 static createId(){  //stati inheritance rook dega aur uske child ko bhi access nahi karne dega
        return `123`
    }
}

const bhavil =  new user("Bhavil")
console.log(bhavil.createId());

class teacher extends user {
    constructor(username, email)
    {
        super(username)
        this.email = email
       

    }
}
const bhav = new teacher("Rocky", "ahahaha@gmail.com")
bhav.logMe();