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
