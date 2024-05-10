// 27 : Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
function formatNames(names) {
    if (names.length === 0) {
        return "";
    }
    else if (names.length === 1) {
        return names[0];
    }
    else if (names.length === 2) {
        return names.join(" and ");
    }
    else {
        var lastTwoNames = names.slice(-2).join(" and ");
        var remainingNames = names.slice(0, -2).join(", ");
        return "".concat(remainingNames, ", ").concat(lastTwoNames);
    }
}
// Example usage:
var names1 = ["Ali", "Babar", "Ahmad"];
var names2 = ["Ibrahim"];
var names3 = ["Maryum", "Jamil"];
console.log(formatNames(names1)); // Output: Alice, Bob and Charlie
console.log(formatNames(names2)); // Output: John
console.log(formatNames(names3)); // Output: Mary and James
