// 34: Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
const arrayR = [1, 2, 3, 4, 5];
function logArrayReverse<T>(arr: T[]): void {
    for (let i = arr.length - 1; i >= 1; i--) {
        console.log(arr[i]);
    }
}

logArrayReverse(arrayR);
