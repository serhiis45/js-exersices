function getSecondsToTomorrow() {
    const SECONDS_IN_DAY = 24 * 60 * 60;

    let d = new Date();
    return SECONDS_IN_DAY - (d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds());
}

function getSecondsToTomorrow1() {
    let now = new Date();

    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
}

function getSecondsToTomorrow2() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;

    return totalSecondsInADay - totalSecondsToday;
}
