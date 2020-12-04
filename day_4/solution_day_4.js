let fs = require("fs");
let inputArray = fs.readFileSync("input.txt").toString().split("\n\n");

const REQUIRED_MATCHES = [
  "byr:",
  "iyr:",
  "eyr:",
  "hgt:",
  "hcl:",
  "ecl:",
  "pid:",
];

let validPassports = 0;

// For Part Two
// const validateFields = (passport) => {
//   console.log("d", passport.replace( /\n/g, " " ).split( " " ));
// };

inputArray.forEach((passport) => {
  if (REQUIRED_MATCHES.every((check) => passport.includes(check))) {
    validPassports++;
  }
});

console.log(validPassports);
