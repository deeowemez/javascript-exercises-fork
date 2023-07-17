const convertToCelsius = function(degFahrenheit) {
  result = ((5/9)*(degFahrenheit - 32));
  if (Number.isInteger(result)){
    return +result;
  } else return +result.toFixed(1);
};

const convertToFahrenheit = function(degCelsius) {
  result = ((degCelsius * 1.8) + 32);
  if (Number.isInteger(result)){
    return +result;
  } else return +result.toFixed(1);
};

console.log(convertToFahrenheit(-10))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
