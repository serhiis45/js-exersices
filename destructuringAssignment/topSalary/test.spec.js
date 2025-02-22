const assert = require('assert');
const topSalary = require('./topSalary');
const topSalary1 = require('./topSalary');

describe("topSalary", function () {
    it("returns top-paid person", function () {
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };

        assert.equal(topSalary(salaries), "Pete");
    });

    it("returns null for the empty object", function () {
        assert.equal(topSalary({}), null);
    });

    it('returns any top-paid person if few persons have equal top salary', function () {
        let salaries = {
            "John": 100,
            "Andry": 300,
            "Mary": 250,
            "Pete": 300,
        };

        let result = topSalary(salaries);
        assert.strictEqual(result === 'Pete' || result === 'Andry', true);
    });
});


describe("topSalary1", function () {
    it("returns top-paid person", function () {
        let salaries = {
            "John": 100,
            "Pete": 300,
            "Mary": 250
        };

        assert.equal(topSalary1(salaries), "Pete");
    });

    it("returns null for the empty object", function () {
        assert.equal(topSalary1({}), null);
    });

    it('returns any top-paid person if few persons have equal top salary', function () {
        let salaries = {
            "John": 100,
            "Andry": 300,
            "Mary": 250,
            "Pete": 300,
        };

        let result = topSalary1(salaries);
        assert.strictEqual(result === 'Pete' || result === 'Andry', true);
    });
});