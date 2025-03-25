// var c = 200;
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("Inside block: ", a); // 10
}

console.log(a); // 300
//console.log(a); // ReferenceError: a is not defined
//console.log(b); // ReferenceError: b is not defined
console.log(c); // 30

function one() {
  const username = "Henry";

  function two() {
    const website = "youtube.com";
    console.log(username); // Henry
  }
  //console.log(website); // ReferenceError: website is not defined
  two();
}
one();

if (true) {
  const username = "henry";
  if (true) {
    const website = " youtube.com";
    console.log(username + website);
  }
  //console.log(website); // ReferenceError: website is not defined
}
//console.log(username); // ReferenceError: username is not defined

addOne(4); // 5
function addOne(num) {
  return num + 1;
}

addTwo(4); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
