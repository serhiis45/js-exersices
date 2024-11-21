const assert = require('assert');
const isEmpty = require('./isEmpty');

describe("isEmptyObject", function() {
  it('returns true for an empty obj', function() {
    assert.deepStrictEqual(isEmpty({}), true);
  });

  it('returns false if a property exists', function() {
    assert.deepStrictEqual(isEmpty({anything: false}), false);
  })
});
