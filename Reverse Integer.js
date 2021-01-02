/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Note:
 * Assume we are dealing with an environment that could only store integers 
 * within the 32-bit signed integer range: [−231,  231 − 1]. 
 * For the purpose of this problem, assume that your function returns 0 
 * when the reversed integer overflows.
 */
var a = -1463847412;

var reverse = function(x) {
    var result = 0;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -1 * Math.pow(2, 31);
    
    while (x != 0) {
        var tempMax = parseInt(INT_MAX / 10);
        var tempMin = parseInt(INT_MIN / 10);
        if (result > tempMax || (result == tempMax && x % 10 > 7))
            return 0;
        if (result < tempMin || (result == tempMin && x % 10 < -8))
            return 0;

        result = result * 10 + x % 10;
        x = parseInt(x/10);
    }

    return result;
};

console.log(reverse(a));
console.log(Math.pow(2, 31) - 1);
console.log(-1 * Math.pow(2, 31));