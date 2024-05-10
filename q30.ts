// 30:Create a function swapElements that swaps two specified indices in an array.

function swapElements<T>(arr: T[], index1: number, index2: number): void {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.error("Error: Indices out of bounds");
        return;
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

// Example usage:
const arraySw: number[] = [1, 2, 3, 4, 5];
swapElements(arraySw, 1, 3);
console.log(arraySw); // Output: [1, 4, 3, 2, 5]
