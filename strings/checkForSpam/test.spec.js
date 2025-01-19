const assert = require('assert');
const checkSpam = require('./checkSpam');


describe('checkForSpam', function() {
  it('finds spam in "buy ViAgRA now"', function() {
    assert.strictEqual(checkSpam('buy ViAgRA now'), true);
  });
    
  it('finds spam in "free xxxxx"', function() {
    assert.strictEqual(checkSpam('free xxxxx'), true);
  });
    
  it('no spam in "innocent rabbit"', function() {
    assert.strictEqual(checkSpam('innocent rabbit'), false);
  });
});