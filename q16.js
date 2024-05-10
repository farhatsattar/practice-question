"use strict";
// 16:Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
const falseyVlues = [1, 2, 4, 5, false, 0, undefined, "", NaN];
function removeFalseyvalues(arr) {
    return arr.filter((element) => Boolean(element) == true);
}
const newArr = removeFalseyvalues(falseyVlues);
console.log(newArr);
