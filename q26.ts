//26:Create a function isSorted that checks if an array is sorted in ascending order.
const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [5, 4, 3, 2, 1];

function isSorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}




console.log(isSorted(arr1));  
console.log(isSorted(arr2));  













