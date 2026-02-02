const reverseString = function(string) {
    return string.split("").reverse().join("")
};
//first we transform our string into an array using .split("") 
//it will separate the string into substrings e.g. (h,e,l,l,o)
//now that we have an array we use .reverse()
//then use .join("") 

// Do not edit below this line
module.exports = reverseString;
