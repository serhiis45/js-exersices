const assert = require('assert');
const filterRange = require('./filterRange');

describe("filterRange", function() {
  it('should filter array in scope of specify range', function() {
    assert.deepStrictEqual(filterRange([5, 3, 8, 1], 1, 4), [3, 1]);
  });

});
