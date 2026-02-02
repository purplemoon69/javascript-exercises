const repeatString = function (word, num) {
    if (num < 0) return "ERROR";
    let string = "";
    for (let i=0; i < num; i++) {
          string += word;
    }
    return string;
};
//first we error proof on line 2 
//we declare our string variable making it empty ""
//we create our for loop on line 4
//we concatenate our words into our string on line 5 (string = string + word)

// Do not edit below this line
module.exports = repeatString;
