class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123#@!`;
  }
}

const henry = new User("henry");
//console.log(henry.createId()); // TypeError: henry.createId is not a function

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const mynewVar = new Teacher("iphone", "iphone@mail.com");
console.log(mynewVar.createId());
