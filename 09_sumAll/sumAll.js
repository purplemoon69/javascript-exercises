const sumAll = function(min, max) {
    let sum = 0;
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    
    if (min > max) { 
        [min, max] = [max, min];
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};
//let must be used because the value is constantly changing because of the loop, const won't allow any changes to the value
//we do safety checks
//we do a logic swap
//we do the arithmetic 
// Do not edit below this line
module.exports = sumAll;
