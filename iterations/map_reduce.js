// Map method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNums.map((num) => num + 10);

// Chaining
newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);

// Reduce method
const myArr = [1, 2, 3, 4, 5];

const myTotal = myArr.reduce((acc, curval) => {
  console.log(`acc: ${acc} & curval: ${curval}`);
  return acc + curval;
}, 0);
console.log(myTotal);

// An Example
const shoppingCart = [
  {
    item: "Book",
    price: 499,
  },
  {
    item: "Shirt",
    price: 699,
  },
  {
    item: "Deodrant",
    price: 299,
  },
  {
    item: "Shampoo",
    price: 399,
  },
];

const mySum = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(mySum);
