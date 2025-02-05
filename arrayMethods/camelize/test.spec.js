const assert = require('assert');
const camelize = require('./camelize');

describe("camelize", function() {
  it('should change dash-separated words into camel-cased ones', function() {
    assert.strictEqual(camelize('background-color'), 'backgroundColor');
  });

  it('should change dash-separated words into camel-cased ones', function() {
    assert.strictEqual(camelize('list-style-image'), 'listStyleImage');
  });

  it('should change dash-separated words into camel-cased ones', function() {
    assert.strictEqual(camelize('-webkit-transition'), 'WebkitTransition');
  });
});
