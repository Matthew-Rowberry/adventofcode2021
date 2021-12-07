const fs = require("fs");

// Day 1 stuff
let array = fs.readFileSync("dayOne/data.txt").toString().split("\n");
const toNumbers = (arr: []) => arr.map(Number);
let array2 = toNumbers(array);
// fs.writeFileSync("data.js", JSON.stringify(array2));

// Day 2 stuff
const directions = fs.readFileSync("dayTwo/data.txt").toString().split("\n");
// fs.writeFileSync("dayTwo/directions.js", JSON.stringify(directions));

//Day 3 stuff
const powerBinaries = fs
  .readFileSync("dayThree/data.txt")
  .toString()
  .split("\n");
// fs.writeFileSync("dayThree/powerBinaries.js", JSON.stringify(powerBinaries));
