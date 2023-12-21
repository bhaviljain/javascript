class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`username is ${this.username}`);
    }
}
class teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }
    addCourse()
    {
        console.log(`new course is avail by ${this.username}`);
    }
}

const chai = new teacher("Bhavil", "chai@gmail.com","123")

chai.addCourse()
chai.logMe()

const masalachai = new User("Masala Chai")
masalachai.logMe()