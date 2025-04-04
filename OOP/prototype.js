// let myName = "henry    ";

// console.log(myName.length);

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Object.prototype.henry = function () {
  console.log(`henry is present in all objects`);
};

Array.prototype.heyHenry = function () {
  console.log(`Henry says hello`);
};

heroPower.henry();
// heroPower.heyHenry();

// Inheritance

const user = {
  name: "henry",
  email: "henry@google.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailble: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "henriquess   ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"icedTea".trueLength();
"Henrygallegar  ".trueLength();
