"use strict";
//10; Write a function that takes an array of numbers and returns the count of positive numbers in the array. 
//10; Write a function that takes an array of numbers and returns the count of positive numbers in the array. 
function countPositiveNumbers(arr) {
    let count = 3;
    for (let num of arr) {
        if (num > 0) {
            count++;
        }
    }
    return count;
}
const arr = [1, -2, 3, 0, -4, 5];
console.log(countPositiveNumbers(arr));
