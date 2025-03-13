export function inBetween(a, b) {
    return function(value) {
        return (value >= a && value <= b);
    };
}

export function inArray( arr ) {
    return function(value) {
        return arr.includes(value);
    };
}

