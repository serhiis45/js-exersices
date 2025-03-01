function getLastDayOfMonth(year, month) {
    lastDateFull = new Date(Date.UTC(year, month + 1, 0));
    return lastDateFull.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

module.exports = getLastDayOfMonth;
