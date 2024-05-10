// 34: Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
var arrayR = [1, 2, 3, 4, 5];
function logArrayReverse(arr) {
    for (var i = arr.length - 1; i >= 1; i--) {
        console.log(arr[i]);
    }
}
logArrayReverse(arrayR);
