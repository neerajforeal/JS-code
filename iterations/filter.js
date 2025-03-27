// Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     myNewNums.push(num);
//   }
// });
// console.log(myNewNums);

const newNums = myNums.filter((num) => num > 4);
console.log(newNums);

const dataDb = [
  {
    title: "Book One",
    genre: "Science",
    Publish: 1983,
    Edition: 2001,
  },
  {
    title: "Book Two",
    genre: "Non-Fiction",
    Publish: 1952,
    Edition: 1990,
  },
  {
    title: "Book Three",
    genre: "Fantasy",
    Publish: 1991,
    Edition: 2010,
  },
  {
    title: "Book Four",
    genre: "History",
    Publish: 1899,
    Edition: 1952,
  },
  {
    title: "Book Five",
    genre: "Fiction",
    Publish: 1995,
    Edition: 2012,
  },
];

let userBooks = dataDb.filter((bk) => bk.genre === "History");

userBooks = dataDb.filter((bk) => bk.Publish > 1990 && bk.genre === "Fiction");

console.log(userBooks);
