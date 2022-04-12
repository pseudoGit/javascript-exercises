const palindromes = function (str) {
    let result = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();
    return result === result.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
