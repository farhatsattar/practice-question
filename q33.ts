// 33:Write a function that takes an array of integers and sorts them from smallest to largest.

function sortArray(arr: number[]): number[] {
    
    return arr.sort((a, b) => a - b);
}


const integArr: number[] = [5, 2, 8, 1, 9];
const sortedNumbers = sortArray(integArr);
console.log(sortedNumbers); 
