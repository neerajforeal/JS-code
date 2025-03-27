const codLang = ["js", "rb", "py", "cpp", "rs"];

codLang.forEach((lang) => {
  console.log(lang);
});

function printMe(item) {
  console.log(item);
}
codLang.forEach(printMe);

codLang.forEach((lang, index, arr) => {
  console.log(lang, index, arr);
});

const myCod = [
  {
    langName: "javascript",
    langFile: "js",
  },
  {
    langName: "ruby",
    langFile: "rb",
  },
  {
    langName: "rust",
    langFile: "rs",
  },
];
myCod.forEach((lang) => {
  console.log(lang.langName, lang.langFile);
});

const values = codLang.forEach((lang) => {
  console.log(lang);
});
console.log(values); // undefined
