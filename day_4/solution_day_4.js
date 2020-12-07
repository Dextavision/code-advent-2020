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
const validateFields = (passport) => {
  let isValid = true;
  passport = passport.replace(/\n/g, " ").split(" ");
  passport.some((pass) => {
    if (!isValid) {
      return false;
    }
    let field = pass.substring(0, 3);
    let value = pass.substring(4);

    switch (field) {
      case "byr":
        isValid = value >= 1920 && value <= 2002;
        break;
      case "iyr":
        isValid = value >= 2010 && value <= 2020;
        break;
      case "eyr":
        isValid = value >= 2020 && value <= 2030;
        break;
      case "hgt":
        let unit = value.slice(-2);
        let height = value.slice(0, -2);
        if (unit === "cm") {
          isValid = height >= 150 && height <= 193;
        } else if (unit === "in") {
          isValid = height >= 59 && height <= 76;
        } else {
          isValid = false;
        }
        break;
      case "hcl":
        isValid =
          value[0] === "#" &&
          value.substring(1).length === 6 &&
          value.substring(1).match(/^[0-9a-f]+$/) !== null;
        break;
      case "ecl":
        switch (value) {
          case "amb":
            isValid = true;
            break;
          case "blu":
            isValid = true;
            break;
          case "brn":
            isValid = true;
            break;
          case "gry":
            isValid = true;
            break;
          case "grn":
            isValid = true;
            break;
          case "hzl":
            isValid = true;
            break;
          case "oth":
            isValid = true;
            break;

          default:
            isValid = false;
            break;
        }
        break;
      case "pid":
        isValid =
          value.toString().length === 9 &&
          value.toString().match(/^\d+$/) !== null;
        break;

      default:
        break;
    }
  });

  return isValid;
};

inputArray.forEach((passport) => {
  if (REQUIRED_MATCHES.every((check) => passport.includes(check))) {
    if (validateFields(passport)) {
      validPassports++;
    }
  }
});

console.log(validPassports);
