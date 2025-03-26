const userEmail = "hi@henry.ai";

if (userEmail) {
  console.log("got user email");
} else {
  console.log("no email");
}

/*
Falsy values:
    false, 0, -0, 0n, "", null, undefined, NaN

Truthy values:
    true, 1, -1, '0', 'false', [], {}, function(){}
 */

const emptyArr = [];
if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null, undefined
let val1;
val1 = 5 ?? 10; // 5
val1 = null ?? 10; // 10
val1 = undefined ?? 15; // 15
console.log(val1);
