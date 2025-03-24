// const tinderUser = new Object()

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.isLoggedIn = false;

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // returns in an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const regularUser = {
  email: "someone@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Johnny",
      lastname: "Bravo",
    },
  },
};

// console.log(regularUser.fullname.userfullname.lastname); // Bravo

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

const obj3 = Object.assign({}, obj1, obj2);
const obj4 = { ...obj1, ...obj2 };
console.log(obj3);
console.log(obj4);

// OBJECT DESTRUCTURING

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor;

// const { courseInstructor } = course;
// console.log(courseInstructor);
const { courseInstructor: instructor } = course;
console.log(instructor);
