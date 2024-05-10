// 21: Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
var arrayOfnum = [4, 8, 10, 12];
function calculateProduct(arr) {
    var product = 1;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        product *= num;
    }
    return product;
}
console.log("product of all elements:", calculateProduct(arrayOfnum));
