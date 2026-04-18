class User {
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sendEmail() {
    console.log(this.email)
  }
}


const user = new User("Lucas", "lucas@gmail.com")
user.sendEmail()
