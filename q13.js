"use strict";
//13:Develop a function that takes an array of numbers and returns a new array with each number squared.
function squaredNumbers(numbers) {
    return numbers.map(number => number * number);
}
const numbersArray = [2, 8, 10, 15, 22, 36];
const sequaredNumberarray = squaredNumbers(numbersArray);
console.log(sequaredNumberarray);
