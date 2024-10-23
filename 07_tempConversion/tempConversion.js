const convertToCelsius = function(fahrenheitTemp) {
  let celsiusConvertedTemp = Math.round(((fahrenheitTemp - 32) * 5/9) * 10) / 10;
  return celsiusConvertedTemp
};

console.log(convertToCelsius(100))

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitConvertedTemp = Math.round(((celsiusTemp * 9 / 5) + 32) * 10) / 10;
  return fahrenheitConvertedTemp
};

console.log(convertToFahrenheit(12))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
