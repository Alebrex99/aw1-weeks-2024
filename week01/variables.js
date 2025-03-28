"use strict"; // strict mode

console.log(c); // hoisting (possibile per var)

let a = 5;
const b = [];
var c = 2;

// b = [1, 2] // riassegnazione non possibile per const

console.log(a); // stampa

if ("" === 0){
    console.log("true");
}
else {
    console.log("false");
}