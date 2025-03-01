function getSecondsToday() {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    return Math.round((Date.now() - today) / 1000);
}

function getSecondsToday1() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
