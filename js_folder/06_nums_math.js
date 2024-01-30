// ******************** Num ********************

const score = 400;
console.log(score); // [output] => 400

const balance = new Number(200); // Better way to spacify the particular datatype.
console.log(balance); // [output] => [Number: 200]

console.log(balance.toString()); // [output] => 200 (But as a string value)
console.log(typeof balance.toString()); // [output] => string.
console.log(balance.toString().length); // [output] => 3.
// Now we can use all the string properties after the conversion of balance value to string.
console.log(balance.toFixed(2)); // [output] => 200.00 (Return value as a string.)
// The toFixed() method converts a number to a string and rounds the string to a specified number of decimals.

const otherNumber = 212.98867;
console.log(otherNumber.toPrecision(6));

let num = 0.001658853; 
console.log(num.toPrecision(2)); // [output] => 0.0017 (Return value as a string.)
// The toPrecision() method formats a number to a specified length and a decimal point and nulls are added (if needed), to create the specified length.

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //[output] => 1,000,000 (USA standards)
console.log(hundreds.toLocaleString('en-IN')); // //[output] => 10,00,000 (Indian standards)

// ******************** Maths ********************

console.log(Math); // If we run this command in browser we can find many methods.
console.log(Math.abs(-4)); //[output] => 4 
 // The Math.abs() method returns the absolute value of a number that means it always gives positive number.

console.log(Math.round(4.6)); //[output] => 5
//The Math.round() method returns the value of a number rounded to the nearest integer.

console.log(Math.ceil(4.2)); //[output] => 5
// The Math.ceil() method always rounds up and returns the smallest integer greater than or equal to a given number.

console.log(Math.floor(4.9)); //[output] => 4 
// The Math.floor() method always rounds down and returns the largest integer less than or equal to a given number.

console.log(Math.min(4, 3, 6, 8)); //[output] => 3
// The Math.min() method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

console.log(Math.max(4, 3, 6, 8)); //[output] => 8
// The Math.max() method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

console.log(Math.random()); // It gives random numbers in output everytime we try to run it.
// A floating-point, pseudo-random number between 0(inclusive) and 1 (exclusive) always.
console.log(Math.random()*10); // It gives random numbers between 0(inclusive) and 10(exclusive) always.
// In some cases if we want to generate random numbers between 0(exclusive) and 10(exclusive) then following method will help us.
console.log((Math.random()*10) + 1);
// After adding 1 , whenever the  result will 0 then it will increase by 1 and that is how we never get 0 in output.

// Now I want to generate random numbers between 10(inclusive) and 20(inclusive).
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);



// I have to dig in this to better understanding.
// Stackoverflow link for study - https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript


  