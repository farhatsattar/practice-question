//29:Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers. 
function minMaxAverage(numbers) {
    if (numbers.length === 0) {
        return { min: NaN, max: NaN, average: NaN };
    }
    var min = Math.min.apply(Math, numbers);
    var max = Math.max.apply(Math, numbers);
    var sum = numbers.reduce(function (acc, num) { return acc + num; }, 0);
    var average = sum / numbers.length;
    return { min: min, max: max, average: average };
}
var numbersArr = [5, 10, 15, 20, 25];
var result = minMaxAverage(numbersArr);
console.log(result);
