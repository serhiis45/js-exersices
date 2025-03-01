function getDateAgo(date, days) {
    const HOURS = 24;
    const SEC_IN_HOUR = 3600;
    const MILISEC_IN_SECOND = 1000; 

    let daysMillisec = (days * HOURS *  SEC_IN_HOUR * MILISEC_IN_SECOND);
    
    return (new Date(+date - daysMillisec)).getDate();
}

function getDateAgo1(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

module.exports = getDateAgo, getDateAgo1;
