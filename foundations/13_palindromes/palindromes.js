const palindromes = function (string) {
    const stringToArray = string.toLowerCase().split("");
    const filteredArray = stringToArray.filter(character => /^[a-z0-9]+$/i.test(character));
    return (filteredArray.join() == filteredArray.toReversed().join());
};

// Do not edit below this line
module.exports = palindromes;
