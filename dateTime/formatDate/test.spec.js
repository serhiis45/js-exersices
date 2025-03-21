const assert = require('assert');
const formatDate = require('./formatDate');

describe("formatDate", function () {
    it("shows 1ms ago as \"right now\"", function () {
        assert.equal(formatDate(new Date(new Date - 1)), 'right now');
    });

    it('"30 seconds ago"', function () {
        assert.equal(formatDate(new Date(new Date - 30 * 1000)), "30 sec. ago");
    });

    it('"5 minutes ago"', function () {
        assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 min. ago");
    });

    it("older dates as DD.MM.YY HH:mm", function () {
        assert.equal(formatDate(new Date(2014, 2, 1, 11, 22, 33)), "01.03.14 11:22");
    });

    it("older dates as DD.MM.YY HH:mm, when minutes and seconds haev leading zero", function () {
        assert.equal(formatDate(new Date(2014, 11, 25, 1, 1, 1)), "25.12.14 01:01");
    });

    it("older dates as DD.MM.YY HH:mm, when minutes and seconds are zeros", function () {
        assert.equal(formatDate(new Date(2014, 11, 25, 0, 0, 0)), "25.12.14 00:00");
    });
});

