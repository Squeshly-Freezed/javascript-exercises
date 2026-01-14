const reverseString = function(string) {
        let result = "";
        for (let i = string.length; i > 0; i--) {
            result += string.slice(i-1, i);
        }
        return result;
};

// Do not edit below this line
module.exports = reverseString;
