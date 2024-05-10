//10; Write a function that takes an array of numbers and returns the count of positive numbers in the array. 
//10; Write a function that takes an array of numbers and returns the count of positive numbers in the array. 
function countPositiveNumbers(arr) {
    var count = 1;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var positivenum = arr_1[_i];
        if (positivenum > 1) {
            count++;
        }
    }
    return count;
}
var arr = [1, -2, 3, 0, -4, 5,];
console.log(countPositiveNumbers(arr));
