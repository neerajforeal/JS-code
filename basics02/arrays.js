// Arrays
const myArr = [0, 1, 2, 3, 4, 5];

const myArr2 = new Array(1, 2, 3, 4, 5);

console.log(myArr[0]); // 0
console.log(myArr2[2]); // 3

// Array Methods
myArr.push(6); // [0, 1, 2, 3, 4, 5, 6]
myArr.pop(); // [0, 1, 2, 3, 4, 5]
myArr.shift(); // [1, 2, 3, 4, 5]
myArr.unshift(0); // [0, 1, 2, 3, 4, 5]
myArr.includes(9); // false
myArr.indexOf(3); // 2
myArr.indexOf(9); // -1

const newArr = myArr.join();
console.log(newArr); // 0,1,2,3,4,5 ==> string

//slice
myArr.slice(1, 3); // [1, 2]
myArr.slice(2); // [2, 3, 4, 5]
myArr.slice(); // [0, 1, 2, 3, 4, 5]

//splice
myArr.splice(1, 3); // [0, 4, 5]
myArr.splice(2, 0, 2, 3); // [0, 1, 2, 3, 4, 5]
myArr.splice(2, 2, 9, 8); // [0, 1, 9, 8, 4, 5]

const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["batman", "superman", "flash"];

marvelHeros.push(dcHeros); // ['thor', 'ironman', 'spiderman', ['batman', 'superman', 'flash']]
marvelHeros.concat(dcHeros); // ['thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash']

// Spread Operator
const allHeros = [...marvelHeros, ...dcHeros]; // ['thor', 'ironman', 'spiderman', 'batman', 'superman', 'flash']

const multiArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];
multiArr.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

Array.isArray("hello"); // false
Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
Array.isArray(multiArr); // true

let score1 = 12;
let score2 = 38;
let score3 = 56;
let score4 = 34;

const scores = Array.of(score1, score2, score3, score4); // [12, 38, 56, 34]
