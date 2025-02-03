// to run test in terminal
//npm test calculator.spec.js

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((acc, el) => acc += el, 0);
};

const multiply = function(array) {
  return array.reduce((acc, el) => acc *= el);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
	if(num <= 0){
    return 1;
  } 
  return num * factorial(num - 1);
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
