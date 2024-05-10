//10; Write a function that takes an array of numbers and returns the count of positive numbers in the array. 
 



//10; Write a function that takes an array of numbers and returns the count of positive numbers in the array. 
 



function countPositiveNumbers(arr: number[]): number {
    let count: number = 1;
    for (let positivenum of arr) {
        if (positivenum >1 ) {
            count++;
        }
    }
    return count;
}
const arr: number[] = [1, -2, 3, 0, -4, 5,];
console.log(countPositiveNumbers(arr)); 

