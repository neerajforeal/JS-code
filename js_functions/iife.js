// Immediately Invoked Function Expression (IIFE)

(function biscuit() {
  console.log("DB CONNECTED");
})();

// IIFE with arrow function
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("henry");
