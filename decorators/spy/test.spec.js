import { spy } from './spy.js';
import { strict as assert } from 'assert';

describe('spy', function () {
    it('records calls into its property', function () {
        function work() { };

        work = spy(work);
        assert.deepEqual(work.calls, []);

        work(1, 2);
        assert.deepEqual(work.calls), [
            [1, 2]
        ];

        work(3, 4);
        assert.deepEqual(work.calls, [
            [1, 2],
            [3, 4]
        ]);
    });

    
})