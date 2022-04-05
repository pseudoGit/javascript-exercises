const removeFromArray = function(arr, ...elem) {
    arr = arr.filter(function(value, index) {
        return !elem.includes(value);
    })
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
