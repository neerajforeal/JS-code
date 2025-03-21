const name = "Henry";
const age = 25;

// console.log(name + age + " years old") // Henry25 years old

//String interpolation
console.log(`${name} is ${age} years old`); // Henry is 25 years old

const gameName = new String("Henryhc");

console.log(gameName[0]); // H
console.log(gameName.length); // 7
console.log(gameName.toUpperCase()); // HENRYHC
console.log(gameName.charAt(3)); // r
console.log(gameName.indexOf("r")); // 3

const newString = gameName.substring(0, 5);
console.log(newString); // Henry

const anotherString = gameName.slice(-7, 5);
console.log(anotherString); // Henry

const newStringOne = "   Henry   ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Henry (whitespace removed)

const url = "https://www.henryhc.dev/henry%20hc";
console.log(url.replace("%20", "-")); // https://www.henryhc.dev/henry-hc

console.log(url.includes("jacob")); // false
console.log(url.startsWith("https")); // true

const newUrl = url.split("/");
console.log(newUrl); // ["https:", "", "www.henryhc.dev", "henry%20hc"]
