const removeFromArray = function(array, ...removeArgs) {
    return array.filter(ele => !removeArgs.includes(ele));
};
// Do not edit below this line
module.exports = removeFromArray;

// element => element != removeArgs.forEach()