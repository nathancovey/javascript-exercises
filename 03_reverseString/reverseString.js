const reverseString = function(string) {
    let array = string.split("")
    let arrayReverse = array.reverse()
    return arrayReverse.join('')
};

console.log(reverseString('your mom goes to college'))

// Do not edit below this line
module.exports = reverseString;
