// Comparison btw same datatypes
console.log(2 > 1); //[o/p] => true
console.log(2 >= 1); //[o/p] => true
console.log(2 < 1); //[o/p] => False
console.log(2 == 1); //[o/p] => False
console.log(2 != 1); //[o/p] => true


// Comparison btw different datatypes
console.log("2" > 1); //[o/p] => true
console.log("02" > 1); //[o/p] => true
// Here javascript converts string datatype to number datatype automatically.
// But the problem is some times I do not get the predictable outputs because of this type of conversions.
// So I have to make sure that when ever I do comparison the datatypes should be same always.
// We should avoid these types of comparison.

console.log(null > 0); //[o/p] => False
console.log(null == 0); //[o/p] => False
console.log(null >= 0); //[o/p] => True
// In here I do no get the predictable outputs bcz of conversion.
// The reason is that an equality check == and comparision <, >, <=, >= works differently in JavaScript.
// Comparisons converts null to a number, treating null as 0.
// That's why null >= 0 is true & null > 0 is false.
// We should also avoid these types of comparison.



// "==" — loose equality (double equals)
/* In "==" if datatypes differs then no issue will arise. It will convert datatypes. */
// Example
console.log("89" == 89); //[o/p] => True

// "===" — strict equality (triple equals)
/* In "===" if  datatypes differs then false will return bcz it it will strictly check wheather the datatypes are same or not. Datatypes should be same.  */
// Example
console.log("89" === 89); //[o/p] => False