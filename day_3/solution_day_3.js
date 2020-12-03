// Task: Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?

let fs = require("fs");
let inputArray = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((input) => input.split(""));

inputArray.shift();

const LENGTH = inputArray.length;

for (let i = 0; i < LENGTH; i++) {
  for (let j = 0; j <= 4; j++) {
    inputArray[i] = inputArray[i].concat(inputArray[i]);
  }
}

let treeCount = 0;

inputArray.reduce((step, treeRow) => {
  if (treeRow[step] === "#") {
    treeCount++;
  }
  return step + 3;
}, 3);

console.log(treeCount);
