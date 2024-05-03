//will make the index.js to be accessible in other files
module.exports.sum = function (num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Invalid input";
  } else {
    return num1 + num2;
  }
};
module.exports.difference = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
  } else {
    return a - b;
  }
};