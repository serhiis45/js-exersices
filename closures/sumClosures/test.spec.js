import { sumClosures } from "./sumClosures.js";
import { strict as assert } from 'assert';

describe('sumClosure', function() {
    it('should sum two numbers', function() {
        assert.strictEqual((sumClosures(2)(2)), 4);
    });
});
