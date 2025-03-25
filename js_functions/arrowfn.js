const user = {
  username: "henry",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to our website!`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();

console.log(this); // Empty object in node, Window object in browser

const biscuit = () => {
  let username = "henry";
  //console.log(this); // {}
};
//biscuit();

// basic Arrow function
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// Implicit return
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(4, 5)); // 9
