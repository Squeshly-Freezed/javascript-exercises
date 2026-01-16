const sumAll = function(a, b) {
    let sum = 0;
    let difference = Math.abs(a - b);
    if (typeof a == "number" && typeof b == "number" && a >= 0 && b >= 0
        && a % 1 == 0 && b % 1 == 0) {
        for (let i = 0; i < difference+1; i++) {
            if (a >= b) {
                sum += (b + i);
            } else {
                sum += (a + i);
            }
        }
        return sum;
    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
