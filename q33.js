// 33:Write a function that takes an array of integers and sorts them from smallest to largest.
function sortArray(arr) {
    return arr.sort(function (a, b) { return a - b; });
}
// Example usage:
var integArr = [5, 2, 8, 1, 9];
var sortedNumbers = sortArray(integArr);
console.log(sortedNumbers); // Output: [1, 2, 5, 8, 9]
