let num = 1000
console.log(num.toString());
console.log(num.toFixed(2));//1000.00
let num2 = 34.5523
console.log(num2.toPrecision(3));
let hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));
//---
console.log(Math.ceil(3.1));
console.log(Math.floor(3.7));
//Random
console.log(Math.floor(Math.random()*10)+1);
const min = 10
const max = 15
console.log(Math.floor(Math.random() * (max-min+1)) + min);