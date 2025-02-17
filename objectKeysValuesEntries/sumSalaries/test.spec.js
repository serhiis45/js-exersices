const assert = require('assert');
const sumSalaries = require('./sumSalaries');

describe('sumSalaries', function() {
    it('returns sum of salaries', function() {
        let salaries = {
            'John': 100,
            'Pete': 300,
            'Mary':250
        };

        assert.equal( sumSalaries(salaries), 650 );
    });

    it('returns 0 for empty object', function() {
        assert.equal( sumSalaries({}), 0 );
    });
} )