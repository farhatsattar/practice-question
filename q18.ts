// 18: Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumOfElements(arr: number[], isEven: boolean): number {
    let sum = 0;
    for (const num of arr) {
        if (isEven && num % 2 === 0) {
            sum += num;
        } else if (!isEven && num % 2 !== 0) {
            sum += num;
        }
    }
    return sum;
}


console.log("Sum of even elements:", sumOfElements(arrayNum, true)); 
console.log("Sum of odd elements:", sumOfElements(arrayNum, false)); 


