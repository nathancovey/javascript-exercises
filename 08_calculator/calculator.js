const add = function(nOne, nTwo) {
	return nOne + nTwo
};

const subtract = function(nOne, nTwo) {
	return nOne - nTwo
};

const sum = function(numbers) {
	return numbers.reduce((total, num) => total + num, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total * num, 1)
};

const power = function(nOne, nTwo) {
	return nOne ** nTwo
};

const factorial = function(n) {
    if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
