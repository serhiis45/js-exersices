function printNumbersSt(from, to) {
    let timerId = setTimeout(function step() {
        console.log(from);
        from++;
        if (from <= to) {
            timerId = setTimeout(step, 1000);
        }
    }, 1000);
}

function printNumbersSi(from, to) {
    let timeId = setInterval(() => {
        console.log(from);
        from++;
        if (from > to) clearInterval(timeId);
    }, 1000);
}
