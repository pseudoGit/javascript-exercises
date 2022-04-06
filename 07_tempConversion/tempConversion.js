const ftoc = function(temp) {
  temp = Math.round(((temp - 32) * (5 / 9)) * 10) / 10;
  return temp;
};

const ctof = function(temp) {
  temp = Math.round(((temp * (9 / 5)) + 32) * 10) / 10;
  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
