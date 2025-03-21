const score = 500;
console.log(score); // 500

const balance = new Number(400);
console.log(balance); // [Number: 400]

console.log(balance.toString());
console.log(balance.toFixed(2)); // 400.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000

console.log(Math.abs(-4.7)); // 4.7
console.log(Math.ceil(4.4)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.max(4, 7, 2, 9, 3)); // 9
console.log(Math.min(4, 7, 2, 9, 3)); // 2

console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10

const min = 50;
const max = 100;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20
