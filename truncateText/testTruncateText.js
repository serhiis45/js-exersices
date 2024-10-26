const assert = require('assert');
const truncateText = require('./truncateText');

describe("truncateText", function() {
  it('should truncate text', function() {
    assert.strictEqual(truncateText("What I'd like to tell on this topic is:", 20), "What I'd like to te…");
  });

  it('should truncate text', function() {
    assert.strictEqual(truncateText("Hi everyone!", 1), "H…");
  });

  it('should not be truncated', function() {
    assert.strictEqual(truncateText("Hi everyone!", 20), "Hi everyone!");
  });

  it('should not be truncated', function() {
    assert.strictEqual(truncateText("", 20), "");
  });

  it('should not be truncated', function() {
    assert.strictEqual(truncateText("", 1), "");
  });
});