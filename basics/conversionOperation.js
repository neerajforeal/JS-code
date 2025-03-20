let score = "22abc";

/*
    let score = null; => 0
    let score = undefined; => NaN
    let score = true; => 1
    let score = "Yash"; => NaN
*/

console.log(score); // => "22aba"
console.log(typeof score); // => string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // => number
console.log(valueInNumber); // => (NaN) if the string is not a number

// "33" => 33
// "33abc" => NaN (type => number)

let isLoggedIn = ""; // => false
isLoggedIn = "no"; // => true

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "yeah" => true
// " " => true

let someNumber = 32;

let stringNumber = String(someNumber);
console.log(stringNumber); // => "32"
console.log(typeof stringNumber); // => string

// OPERATIONS

let value = 3;
let negvalue = -value;
console.log(negvalue); // => -3

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
console.log(str3); // => "hello hitesh"

console.log("1" + 2); // => "12"
console.log(1 + "2"); // => "12"
console.log("1" + 2 + 2); // => "122"
console.log(1 + 2 + "2"); // => "32"

let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // => 101

// postfix increment
let x = 3;
const y = x++; // => x = 4, y = 3

// prefix increment
let x2 = 3;
const y2 = ++x2; // => x2 = 4, y2 = 4
