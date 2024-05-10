// 30 :Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countOccurrences(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}
var stringInput = "Hello !how are you";
var characterInput = "o";
var occurrencesStr = countOccurrences(stringInput, characterInput);
console.log("The character '".concat(characterInput, "' appears ").concat(occurrencesStr, " times in the string."));
