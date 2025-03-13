import { inBetween, inArray} from './filter.js';
import { strict as assert } from 'assert';

describe('inArray', function() {
    let arr = [1, 2, 3, 4, 5, 6, 7];

    it('returns the filter for values in array', function() {

        let filter = inArray(arr);
        assert.strictEqual(filter(5), true);
        assert.strictEqual(filter(0), false);
    });
});

describe('inBetween', function() {
    it('returns the values in filter between', function() {
        let filter = inBetween(3, 6);
        assert.strictEqual(filter(5), true);
        assert.strictEqual(filter(0), false);
    });
});
