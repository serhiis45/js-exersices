const assert = require('assert');
const checkSpam = require('./checkSpam');

describe("checkSpam", function() {
  it('should detect "buy ViAgRA now" as spam', function() {
    assert.strictEqual(checkSpam('buy ViAgRA now'), true);
  });

  it('should detect "free xxxxx" as spam', function() {
    assert.strictEqual(checkSpam('free xxxxx'), true);
  });

  it('should not detect "innocent rabbit" as spam', function() {
    assert.strictEqual(checkSpam('innocent rabbit'), false);
  });

  it('should not detect "Hello world" as spam', function() {
    assert.strictEqual(checkSpam('Hello world'), false);
  });

  it('should not detect an empty string as spam', function() {
    assert.strictEqual(checkSpam(''), false);
  });

  it('should not detect "0" as spam', function() {
    assert.strictEqual(checkSpam('0'), false);
  });
});
