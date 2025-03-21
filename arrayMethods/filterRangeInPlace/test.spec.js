const assert = require('assert');
const filterRangeInPlace = require('./filterRangeInPlace');

describe("filterRangeInPlace", function() {
  it("returns the filtered values", function() {

    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 2, 5); 

    assert.deepEqual(arr, [5, 3]);
  });

  it("doesn't return anything", function() {
    assert.deepEqual(filterRangeInPlace([1,2,3], 1, 4), undefined);
  });
});
