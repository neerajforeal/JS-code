// <, >, <=, >=, ==, ===, !=, !== (comparison operators)

// &&, ||, ! (logical operators)

const temperature = 41;
if (temperature > 40) {
  console.log("It's hot outside!");
} else {
  console.log("It's cold outside!");
}

const score = 200;
if (score >= 100) {
  const power = "fly";
  console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`); // ReferenceError: power is not defined

const balance = 1000;
//if (balance > 500) console.log("test"); // Implicit scope
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInGoogle = false;
const loggedInEmail = true;
if (userLoggedIn && debitCard) {
  console.log("User can make a purchase");
}
if (loggedInGoogle || loggedInEmail) {
  console.log("User can login");
}
