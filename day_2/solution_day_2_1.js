// Task: How many passwords are valid according to their policies?

let fs = require("fs");
let inputArray = fs.readFileSync("input.txt").toString().split("\n");

inputArray = inputArray.map((input) => {
  input = input.split(" ");
  input[0] = input[0].split("-");
  input[1] = input[1][0];
  return input;
});

let correct_password = 0;

inputArray.forEach((input) => {
  let first_occurrence = input[0][0];
  let second_occurrence = input[0][1];
  let search_indicator = input[1];

  let passwordMatches = input[2].split("");

  let first_check = passwordMatches[first_occurrence - 1];
  let second_check = passwordMatches[second_occurrence - 1];

  if (
    (first_check === search_indicator) ^
    (second_check === search_indicator)
  ) {
    correct_password++;
  }
});

console.log(correct_password);
