const assert = require('assert');
const getAverageAge = require('./getAverageAge');

describe("filterRangeInPlace", function() {
  it("gets average age", function() {

  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 29 };

  let arr = [ john, pete, mary ];
  assert.deepEqual(getAverageAge(arr), 28)
  });

});
