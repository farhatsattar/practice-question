// 30 :Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
function countOccurrences(str: string, char: string): number {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}


const stringInput = "Hello !how are you";
const characterInput = "o";
const occurrencesStr = countOccurrences(stringInput, characterInput);
console.log(`The character '${characterInput}' appears ${occurrencesStr} times in the string.`);
