const removeFromArray = function(array, ...args) {
    return array.filter((item) => !args.includes(item));
};
//we used rest parameters (it allows to input multiple arguments in the form of an array)
//second line .filter is combined with ! (NOT Operator) so it will include in array the values that are NOT in args
//without ! it will include in array the items in args
// Do not edit below this line
module.exports = removeFromArray;
