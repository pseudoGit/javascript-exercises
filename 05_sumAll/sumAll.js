const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else {
        let x, y, sum = 0;
        x = (num1 > num2) ? num1 : num2;
        y = (num1 > num2) ? num2 : num1;

        for (let i = y; i <= x; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
