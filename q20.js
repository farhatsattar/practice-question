"use strict";
// 20:Write a function to find and return the smallest number in an array of integers.
function findSmallestno(numbers) {
    let smallestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallestNumber) {
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;
}
const numbers = [10, 5, 20, 3, 15];
console.log("Smallest number:", findSmallestno(numbers));
