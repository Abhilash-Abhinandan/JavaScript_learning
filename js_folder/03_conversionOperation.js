// ************************* Conversion *************************

let score = 89
let score_1 ="45"
console.log(typeof score) // [o/p] => number.
console.log(typeof score_1) // [o/p] => string.

/* Now I am going to convert one variable type to another type */
let valueInNumber = Number (score_1) // Here the data type "number" should written as "Number". It is same for all the data types.
console.log(typeof valueInNumber); // [o/p] => number.
//Here score_1 value is "45" which is a string and I convert the string value into a numeric value. So the type of score_1 converted into number.

let valueInString = String (score) 
console.log(typeof valueInString);// [o/p] => string.
//Here score value is 89 which is a number and I convert the numeric value into a string value. So the type if score converted into string.

let score_2 = "74abd" // a string value
let valueInNumber_1 = Number (score_2) // convertion of string to number.
console.log(typeof valueInNumber_1); //[o/p] => number. 
/*"Successfully converted" . But it is considered as a error of JavaScript because the value of score_2 is "74abd" which is not a purely a string. So the value should not converted into number but the compiler converted to  number.*/
console.log(valueInNumber_1) // [o/p] => NaN
/* After conversion the value of score_2 is "NaN" . Which is a error. */

let score_3 = null;
console.log(typeof score_3) // [o/p] => object (I will learn about object in future.)
let valueInNumber_2 = Number (score_3) // Successfully converted object to number.
console.log(typeof valueInNumber_2) // [o/p] => number
console.log(valueInNumber_2) //[o/p] => 0
// Here null converted into 0.

let score_4 = undefined
console.log(typeof score_4) // [o/p] => undefined
let valueInNumber_3 = Number (score_4) // Successfully converted undefined to number.
console.log(typeof valueInNumber_3) // [o/p] => number
console.log(valueInNumber_3) // [o/p] => NaN
// Here undefined converted into number but the value I get NaN.

let score_5 = true // Boolean value
console.log(typeof score_5) // [o/p] => boolean
let valueInNumber_4 = Number (score_5) // Successfully converted boolean to number.
console.log(typeof valueInNumber_4) // [o/p] => number
console.log(valueInNumber_4) // [o/p] => 1
//Here boolean value true converted into number 1. Same for false => 0.


/* String value can not convert into number so [o/p] is always NaN */


/* Deep Dive into conversion */
let isLoggedIn = 1 
let valueInBoolean = Boolean (isLoggedIn) // Conversion number to boolean
console.log(typeof valueInBoolean) // [o/p] => boolean
console.log(valueInBoolean) // [o/p] => true

let isLoggedIn_1 = 0
let valueInBoolean_1 = Boolean (isLoggedIn_1) // Conversion number to boolean
console.log(typeof valueInBoolean_1) // [o/p] => boolean
console.log(valueInBoolean_1) // [o/p] => false

let isLoggedIn_2 = "" // Empty string
let valueInBoolean_2 = Boolean (isLoggedIn_2) // Conversion empty string to boolean
console.log(typeof valueInBoolean_2) // [o/p] => boolean
console.log(valueInBoolean_2) // [o/p] => false

let isLoggedIn_3 = "Abhilash" // Value in string
let valueInBoolean_3 = Boolean (isLoggedIn_3) // Conversion value in string to boolean
console.log(typeof valueInBoolean_3) // [o/p] => boolean
console.log(valueInBoolean_3) // [o/p] => True

/* Hint notes */
// 1 => true; 0 => false;
//[Empty string] "" => false
//[Value in string] "Abhilash" => true

let myNumber = 98
let stringValue = String (myNumber) // conversion number into string
console.log(typeof stringValue); // [o/p] => string
console.log(stringValue) // [o/p] => 98 (It looks like a number but actually it a string value.)



// ************************* Operation *************************

// String addition
let str1 = "Hello"
let str2 = " Abhilash"
let str3 = str1 + str2
console.log(str3); // [o/p] => Hello Abhilash

console.log("1" + 2); // [o/p] => 12; Same output
console.log(1 + "2"); // [o/p] => 12; same output
console.log("1" + "2"); // [o/p] => 12; Same output
// But the confusing part is.............
console.log("1" + 2 + 2); // [o/p] => 122; diffrent output
console.log(1 + 2 + "2"); // [o/p] => 32;  another diffrent output
// If a string is present in the first of the operation the remaining are treat as a string.
// If a string is present at the end of a operation then the remaing are not treat as a string.


// Increment & Decrement
//Example - 1
let gameCounter = 100
++gameCounter; // Prefix increment
console.log (gameCounter); // [o/p] => 101

//Example - 2
let gameCounter1 = 101
gameCounter1++; // Postfix Increment
console.log(gameCounter1); // [o/p] => 102
// Here I do not see any diffrence in output of both above examples, but actually there are changes occures inside.

//Let's dig in....
let x = 3;
const y = x++; // Postfix increment
console.log(x);
console.log(y);
// Expected output: "x:4, y:3" bcz in postfix the increment operator increments and returns the value before incrementing.

let a = 3;
const b = ++a; // Prefix increment
console.log(a);
console.log(b);
// Expected output: "a:4, b:4" bcz in prefix the increment operator increments and returns the value after incrementing.