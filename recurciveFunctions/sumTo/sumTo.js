function sumToLoop(n) {
    let sum = 0;
    
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    
    return sum;
}

function sumToRecurcive(n) {
    return (n == 1) ? 1 : n + sumToRecurcive(n - 1);
}

function sumToArithmeticProgression(n) {
    return (n * (1 + n)) / 2;
}

module.exports = sumToLoop, sumToRecurcive, sumToArithmeticProgression;

