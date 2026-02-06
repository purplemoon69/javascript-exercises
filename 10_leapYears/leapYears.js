const leapYears = function(year) {
        if (!Number.isInteger(year)) return "Error";
        if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
};
//the leap year must be divisible by 4 (% it means the remainder is 0)
//We use ! the NOT operator to establish the condition that a leap year is not divisible
//by 100
//and must be divisible by 400 (% helps to determine if a number is divisible by === 0)

// Do not edit below this line
module.exports = leapYears;
