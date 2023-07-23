const add = function(numOne, numTwo) {
    return numOne + numTwo; 
};

const subtract = function(numOne, numTwo) {
    return numOne - numTwo; 
};

const sum = function(array) {
    return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function(...input) {
  let product = 1;
  for (let dig of input) product *= dig;
  return product;
};

const power = function(numOne, numTwo) {
	return numOne ** numTwo;
};

const factorial = function(num) {
  let array = [];
  if (num === 0) return 1;
  do{
      array.push(num);
      num--;
  } while (num > 0);
  return array.reduce((factorial, current) => factorial * current, 1);	
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
