// Write a function incrementAll that takes an array of integers and increments each element by one.
var integersArr = [1, 2, 3, 4, 5];
function incrementAll(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] += 1;
    }
    return (arr);
}
var incrementedAll = incrementAll(integersArr);
console.log(incrementedAll);
