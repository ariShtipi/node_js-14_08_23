const lodash = require("lodash");

const fs = require("fs");
fs.readFile("./data.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);

//   const strArr = data.split(" ");
//   console.log(strArr.length);

//   reverseStrArr = lodash.reverse(strArr);
//   console.log(reverseStrArr.join(" "));

//   noDuplication = lodash.uniq(strArr);
//   newNoDuplication = noDuplication.join(" ");
//   console.log(newNoDuplication);

//   console.log(noDuplication.length);

//   console.log(newNoDuplication.toUpperCase());

  // const result = noDuplication.filter((word) => word.length > 5);
//   console.log(result.join(" "));
//   console.log(result.length);
});

// function noDuplication() {
//   const path =fs.readFile("./data.txt", "utf-8", (error, data) => {
//     if (error) throw error;
//     console.log(data);
  
//     const strArr = data.split(" ");
//   noDuplication = lodash.uniq(strArr);
//   newNoDuplication = noDuplication.join(" ");
//   console.log(newNoDuplication.toUpperCase())});
// }
