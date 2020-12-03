// Task: What do you get if you multiply together the number of trees encountered on each of the listed slopes?

let fs = require("fs");
let inputArray = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((input) => input.split(""));

const LENGTH = inputArray.length;

for (let i = 0; i < LENGTH; i++) {
  for (let j = 0; j <= 10; j++) {
    inputArray[i] = inputArray[i].concat(inputArray[i]);
  }
}

const checkTreeRows = (right, down) => {
  let treeCount = 0;

  let myArray = inputArray.slice();
  if (down === 1) {
    myArray.shift();
  }

  myArray.reduce((step, treeRow, i) => {
    if (down === 2) {
      if (i % 2 === 0 && i !== 0) {
        if (treeRow[step] === "#") {
          treeCount++;
        }
        return step + right;
      } else {
        return step;
      }
    } else {
      if (treeRow[step] === "#") {
        treeCount++;
      }
      return step + right;
    }
  }, right);

  return treeCount;
};

console.log(
  checkTreeRows(1, 2) *
    checkTreeRows(1, 1) *
    checkTreeRows(3, 1) *
    checkTreeRows(5, 1) *
    checkTreeRows(7, 1)
);
