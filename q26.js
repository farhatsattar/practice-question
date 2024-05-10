//26:Create a function isSorted that checks if an array is sorted in ascending order.
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [5, 4, 3, 2, 1];
function isSorted(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted(arr1));
console.log(isSorted(arr2));
