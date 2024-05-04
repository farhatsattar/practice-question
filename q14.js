"use strict";
// 14:write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
const originalArray = ["ali", "ahmad", "ana", "amal"];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray);
