const repeatString = function(string, num) {
    if (num >= 0) {
        let result = ''
        for (let i = 0; i < num; i++) {
            result += string
        }
        return result
    } else {
        return 'ERROR'
    }
};

console.log(repeatString('poop', 5))

// Do not edit below this line
module.exports = repeatString;
