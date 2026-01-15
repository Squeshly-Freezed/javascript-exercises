const repeatString = function(string, number) {
    if (number < 0) return string = "ERROR";
    if (number == 0) return string = "";
    return string += repeatString(string, number-1);
};

// Do not edit below this line
module.exports = repeatString;
