// Singleton
// Object.create

// object listerals
const mySym = Symbol("Key1");

const JsUser = {
  name: "John",
  "full name": "John oliver",
  [mySym]: "myKey1",
  age: 30,
  email: "john@gmail.com",
  isLoggedIn: false,
  lastloginDays: ["Monday", "Tuesday", "Wednesday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "john@microsoft.com";
console.log(JsUser);

// Object.freeze(JsUser);
JsUser.email = "john@apple.com";
console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello, Js User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
