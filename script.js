"use strict";

//function getAreaOfCircle
function getAreaOfCircle (radius) {
    return 3.14 * (radius ** 2);
}
console.log (getAreaOfCircle(2.5));

//function getCircumferenceOfCircle
function getCircumferenceOfCircle (radius) {
    return 2 * 3.14 * radius;
}
console.log (getCircumferenceOfCircle(3.5));

//function getAreaOfSquare
function getAreaOfSquare (side) {
    return side ** 2;
}
console.log (getAreaOfSquare(4.5));

//function getAreaOfTriangle
function getAreaOfTriangle (base, height) {
    return (base * height) / 2;
}
console.log(getAreaOfTriangle(6, 15));