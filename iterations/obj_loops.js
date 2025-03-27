const myObj = {
  js: "JavaScript",
  py: "Python",
  rb: "Ruby",
  cs: "C#",
  rs: "Rust",
};

for (const key in myObj) {
  console.log(`${key} : ${myObj[key]}`);
}

// For In with arrays
const codLang = ["js", "py", "rb", "cs", "rs"];
for (const key in codLang) {
  console.log(codLang[key]);
}
