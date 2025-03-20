// PRIMITIVE DATA TYPES

// String, Numbers, Boolean, Undefined, Null, Symbol, BigInt

// Symbol
const id = symbol("123");
const anotherId = symbol("123");
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
