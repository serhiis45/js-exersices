const { type } = require("mocha/lib/utils");

function multiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] != "number") continue;
    obj[key] *= 2;
  }
};


module.exports = multiplyNumeric;
