// Task:
// Find the two entries that sum to 2020; what do you get if you multiply them together?

let fs = require("fs");
let inputArray = fs.readFileSync("input.txt").toString().split("\n");

// Convert to Int
inputArray = inputArray.map((number) => parseInt(number));

const MATCH_NUMBER = 2020;

let first_number = 0;
let second_number = 0;

inputArray.forEach((num) => {
  inputArray.some((secNumb) => {
    if (num === secNumb) {
      return;
    }

    if (num + secNumb === MATCH_NUMBER) {
      first_number = num;
      second_number = secNumb;
      return true;
    }
  });
});

console.log(first_number * second_number);
