//29:Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers. 
function minMaxAverage(numbers: number[]): { min: number, max: number, average: number } {
    if (numbers.length === 0) {
        return { min: NaN, max: NaN, average: NaN };
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    return { min, max, average };
}


const numbersArr: number[] = [5, 10, 15, 20, 25];
const result = minMaxAverage(numbersArr);
console.log(result); 
