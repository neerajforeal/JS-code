// For of
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  if (greet === " ") {
    continue;
  }
  console.log(greet);
}

// Maps
const myMap = new Map();
myMap.set("In", "India");
myMap.set("Us", "United States");
myMap.set("Uk", "United Kingdom");
console.log(myMap);

for (const [key, value] of myMap) {
  console.log(key, ":", value);
}

const myObj = {
  name: "John",
  age: 25,
  city: "New York",
};
for (const [key, value] of myObj) {
  console.log(key, ":", value); // TypeError: myObj is not iterable
}
