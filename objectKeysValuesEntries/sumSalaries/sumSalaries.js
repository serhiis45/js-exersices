function sumSalaries(obj) {
    
    let sum = 0;
    for (salary of Object.values(obj)) {
        sum += salary;
    }
    
    return sum;
}

module.exports = sumSalaries;