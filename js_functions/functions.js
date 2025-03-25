function sayMyName() {
  console.log("h");
  console.log("e");
  console.log("n");
  console.log("r");
  console.log("y");
}
sayMyName(); // h e n r y

// function addTwoNums(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNums(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}
const result = addTwoNums(4, 6);
console.log("Result: ", result);

function userMsg(username = "Sam") {
  if (!username) {
    console.log("Please provide a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(userMsg("Henry")); // Henry just logged in

function calcCartPrice(...num1) {
  // rest operator
  return num1;
}
console.log(calcCartPrice(324, 234, 23, 421, 234)); // [324, 234, 23, 4321, 234] // array

// Functions with objects
const user = {
  username: "Henry",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject(user); // Username is Henry and price is 199
handleObject({ username: "Sam", price: 299 }); // Username is Sam and price is 299

// Functions with arrays
const myNewArr = [200, 499, 294, 199, 299];

function returnSecVal(arr) {
  return arr[1];
}

console.log(returnSecVal(myNewArr)); // 499
console.log(returnSecVal([237, 837, 124, 397, 123])); // 837
