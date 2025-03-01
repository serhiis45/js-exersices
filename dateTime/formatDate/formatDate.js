function formatDate(date) {
    const MILLISECONDS_IN_SECOND = 1000;
    const MILLISECONDS_IN_MINUTE = 60000;
    const MILLISECONDS_IN_HOUR = 3.6e+6;
    const SECONDS_IN_HOUR = 60;

    let diff = Date.now() - date;

    if (diff < MILLISECONDS_IN_SECOND) {
        return 'right now';
    } else if (diff < MILLISECONDS_IN_MINUTE) {
        return `${Math.floor(diff / MILLISECONDS_IN_SECOND)} sec. ago`;
    } else if (diff < MILLISECONDS_IN_HOUR) {
        return `${Math.floor(diff / MILLISECONDS_IN_SECOND / SECONDS_IN_HOUR)} min. ago`
    } else {
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0');
        let yy = String(date.getYear()).slice(1);
        let hh = String(date.getHours()).padStart(2, '0');
        let mn = String(date.getMinutes()).padStart(2, '0');

        return `${dd}.${mm}.${yy} ${hh}:${mn}`;
    }
}

module.exports = formatDate;
