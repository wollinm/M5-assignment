/*
   Author: Magdalena Wollin
   multiple functions
*/

function displayMFTitle() {
    "use strict";
    alert('Multiple Functions');
}
function halfNumber(x) {
    let y = x / 2;
    console.log(`Half of ${x} is ${y}.`);
    return y;
}
function squareNumber(x) {
    let y = x * x;
    console.log(`Square number ${x} is ${y}.`);
    return y;
}
function percentOf(x,y){
    p = (x/y)*100;
    return p;
}
function findModulus(x,y){
    m = x%y;
    return m; 
}

function main() {
    "use strict";
    let x,y,p,m;

    displayMFTitle();
    x = prompt('Enter a number to divide by 2');
    y = halfNumber(x);
    console.log(`result value of dividing by ${x} is ${y}.`)

    x = prompt('Enter a number to get square value');
    y = squareNumber(x);
    console.log(`return value of square function of ${x} is ${y}.`)

    x = prompt('Enter first number to calculate percentage');
    y = prompt('Enter second number');
    p = percentOf(x,y);
    console.log(`${x} is %${p} of ${y}.`)

    x = prompt('Enter first number to find the modulus');
    y = prompt('Enter second number');
    m = findModulus(x,y);
    console.log(`${m} is the modulus of ${x} and ${y}.`)
}

main();
