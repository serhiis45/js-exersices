//fast
function fibInit(n) {
    let first = 1,
        second = 1,
        result = 0;

    if ( n <= 2) {
        return 1;
    }

    for (let i = 3; i <= n; i++) {
        result = first + second;
        first = second; 
        second = result;   
    }

    return result;
}

//slow
function fibRecurcive(n){
    return (n <= 1) ? n : fibRecurcive(n - 1) + fibRecurcive (n - 2);
}



module.exports = fibInit, fibRecurcive;
