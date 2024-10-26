const assert = require('assert');
const filterRangeInPlace = require('./filterRangeInPlace');

describe("filterRangeInPlace", function() {
  let arr = [5, 3, 8, 1];
  it('should remove from array all values except those that are between a and b', function() {
    assert.deepStrictEqual(filterRangeInPlace(arr, 2, 5), [5, 3]);
  });

  it("doesn't return anything", function() {
    assert.strictEqual(filterRangeInPlace([1,2,3], 1, 4), undefined); 
  });
});
