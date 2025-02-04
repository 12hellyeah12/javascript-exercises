//npm test palindromes.spec.js

const palindromes = function (palindrome) {
/* 
Take palindrome as the input convert it to a lower case
string
In order to get rid of punctuation and white space with
reduce use split to convert "palindrome" into an array
*/
const cleanArray = 
palindrome.toLowerCase().
split("").
reduce((accumulator, char) => {
    if(
        char == "."
        || char == "!"
        || char == "?"
        || char == ","
        || char == " "
    ){
        accumulator.push("");
    } else {
        accumulator.push(char);
    }
    return accumulator;
}, []);

// Read clean Array in reversed order and rejoin it into 
// a string
const reverseInput = 
cleanArray.toReversed().
join("");

const input = cleanArray.join("");

return reverseInput === input ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
