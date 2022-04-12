const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    }
    let fib0 = 0;
    let fib1 = 1;
    for (let i = 1; i < a; i++){
        let temp = fib1;
        fib1 = fib1 + fib0;
        fib0 = temp;
    }
    return fib1;
};

// Do not edit below this line
module.exports = fibonacci;
