for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("I am 5");
  }
  console.log(element);
}

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop ${i}`);

  for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop ${j}`);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArr = ["flash", "batman", "superman", "wonderwoman", "aquaman"];
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

// Break and Continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    break; // Breaks the loop
  }
  console.log(`value of index is ${index}`);
}

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log(`Detected 5`);
    continue; // Skips the current iteration
  }
  console.log(`value of index is ${index}`);
}
