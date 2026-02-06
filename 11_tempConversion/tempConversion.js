const convertToCelsius = function(number) {
  let celsius = (number - 32) * (5/9);
  return Number((celsius).toFixed(1));
};
//another way
//const convertToCelsius = (f) => Number(((f - 32) * (5/9)).toFixed(1));

const convertToFahrenheit = function(number) {
  let fahrenheit = (number * (9/5)) + 32;
  return Number((fahrenheit).toFixed(1));
};
//another way
//const convertToFahrenheit = (number) => Number(((number * (9/5)) + 32).toFixed(1));

//another way using (number * 10) / 10
//const convertToCelsius = function (fahrenheit) {
//return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
//};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
