// 25:Develop a function countOccurrences that counts how many times a specific element appears in an array.
var elementArr = [2, 3, 4, 5, 4, 4, 6, 4];
function countOccurrences(arr, target) {
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var items = arr_1[_i];
        if (items === target) {
            count++;
        }
    }
    return count;
}
var targetElement = 4;
var occurrences = countOccurrences(elementArr, targetElement);
console.log("The element ".concat(targetElement, " appears ").concat(occurrences, " times in the array."));
