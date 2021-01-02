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