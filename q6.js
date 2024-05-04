"use strict";
// 6:Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(r, pi = 3.14) {
    return pi * r * r;
}
console.log(calculateArea(5));
