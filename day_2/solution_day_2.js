// Task: How many passwords are valid according to their policies?

var fs = require('fs');
var inputArray = fs.readFileSync('input.txt').toString().split("\n");

inputArray = inputArray.map(input => {
  input = input.split(" ");
  input[0] = input[0].split("-")
  input[1] = input[1][0];
  return input;
});

let correct_password = 0;

inputArray.forEach(input => {
  let min_occurrence = input[0][0];
  let max_occurrence = input[0][1];
  let search_indicator = input[1];
  let passwordMatches = input[2].split('').filter(char => char === search_indicator).length
  if (passwordMatches <= max_occurrence && passwordMatches >= min_occurrence) {
    correct_password++;
  }
});

console.log(correct_password)