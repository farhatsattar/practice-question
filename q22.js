//22:Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n character.
var words = ["Civic", "Honda", "Corolla", "Suzuki"];
var n1 = 5;
function filterByLength(words, n1) {
    return words.filter(function (words) { return words.length > n1; });
}
var filteredWords = filterByLength(words, 5);
console.log(filteredWords);
