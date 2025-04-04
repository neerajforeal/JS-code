const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const myNewObj = {
  name: "ginger",
  price: 250,
  isAvailable: true,
};

console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

Object.defineProperty(myNewObj, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"));

for (let [key, value] of Object.entries(myNewObj)) {
  if (typeof value != "function") {
    console.log(`${key}, ${value}`);
  }
}
