// PRIMITIVE DATA TYPES

// String, Numbers, Boolean, Undefined, Null, Symbol, BigInt

// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

// REFERENCE DATA TYPES (NON PRIMITIVE)

// Object, Array, Function

// Object
let myObj = {
  name: "John",
  age: 30,
};

// Array
const myArray = [1, 2, 3, 4, 5];

// Function
const myFunction = function () {
  console.log("Hello World");
};

// STACK (Primitive Data Types)

let myRealName = "John";

let anotherName = myRealName;
anotherName = "Josh";

console.log(myRealName); // John
console.log(anotherName); // Josh

// HEAP (Reference Data Types)

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "Josh@google.com";
console.log(userOne.email); // Josh@google.com
console.log(userTwo.email); // Josh@google.com
