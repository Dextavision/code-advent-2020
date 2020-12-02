// Task:
// In your expense report, what is the product of the three entries that sum to 2020?

var fs = require('fs');
var inputArray = fs.readFileSync('input.txt').toString().split("\n");

// Convert to Int
inputArray = inputArray.map(number => parseInt(number));

const MATCH_NUMBER = 2020;

let first_number = 0;
let second_number = 0;
let third_number = 0;

// Not the best Big O but for that Input sufficient
inputArray.forEach((num) => {
  inputArray.forEach((secNum) => {
    inputArray.some((thirdNumb) => {
      if (num === secNum === thirdNumb) {
        return;
      }

      if (num + secNum + thirdNumb === MATCH_NUMBER) {
        first_number = num;
        second_number = secNum;
        third_number = thirdNumb;
        return true;
      }
    });
  })
});

console.log(first_number * second_number * third_number);