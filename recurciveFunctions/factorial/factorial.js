function factorial(n) {
    return (n == 1) ? n : n * (factorial(n - 1));
}

module.exports = factorial;
