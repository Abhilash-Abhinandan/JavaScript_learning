// **************************************** Array ****************************************

/*  
    => The Array, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name.
    => JavaScript arrays are resizable and can contain a mix of different data types.
    => JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of    
       the array's length property minus 1.
*/

const myArr = [0, 1, 2, 3, 4, 5]; // A way to declare a array.
const mySub = ["DSA", "OOPs", "DLD", "OS"]; 
console.log(myArr); // [Output] => [ 0, 1, 2, 3, 4, 5 ]
console.log(mySub); // [Output] => [ 'DSA', 'OOPs', 'DLD', 'OS' ]

const myArr2 = new Array(1, 2, 3, 4); // Another way to declare a array.
console.log(myArr[1]); // [Output] => 1


// **************************************** Array Methods ****************************************

// push();
myArr.push(6);
// The push() method of Array adds the specified elements to the end of an array and returns the new length of the array.
console.log(myArr); // [Output] => [ 0, 1, 2, 3, 4, 5, 6 ]

// pop();
myArr.pop();
// The pop() method of Array removes the last element from an array and returns that element. This method changes the length of the array.
console.log(myArr); // [Output] => [ 0, 1, 2, 3, 4, 5 ]

// unshift();
myArr.unshift(9);
// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// It is not a good practice to use it because it is a time consuming process.  
// But we can use it in a very rare case if necessary.
console.log(myArr); // [Output] => [ 9, 0, 1, 2, 3, 4, 5 ]

// shift();
myArr.shift(9);
// The shift() method of Array removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log(myArr); // [Output] => [ 0, 1, 2, 3, 4, 5 ]

// includes();
console.log(myArr.includes(9)); // [Output] => false
// The includes() method of Array asks whether an array includes a certain value among its entries, returning true or false as appropriate.

// indexof();
console.log(myArr.indexOf(9)); // [Output] => -1
console.log(myArr.indexOf(3)); // [Output] => 3 (index of 3)
// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// join();
const newArr = myArr.join();
// The join() method of Array creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
console.log(myArr); // [Output] => [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr); // [Output] =>  0, 1, 2, 3, 4, 5   (As a string)
console.log(typeof newArr); // [Output] => string

// slice();
console.log("A ", myArr); // [Output] => A [ 0, 1, 2, 3, 4, 5 ]
const num1 = myArr.slice(1, 3);
// The slice() method of Array returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
// The original array will not be modified.
console.log(num1); // // [Output] => [ 1, 2 ]
console.log("A", myArr); // [Output] => A [ 0, 1, 2, 3, 4, 5 ] (Main array is not altered)

const num2 = myArr.splice(1, 3);
// The splice() method of Array changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// The original array will be modified.
console.log(num2); // [Output] => [ 1, 2, 3 ]
console.log("A", myArr); // [Output] => A [ 0, 4, 5 ] (Main array is altered)

/*   
    Interview note [IMP]
    => The key diffrence between slice() method and splice() method is
        1. End index is not included in slice() while end index is 
           included in splice().
        2. After use of slice() method in array the main array will not 
           be altered while splice() method will alter the main array.
*/

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);  // [Output] => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
/* 
   Explanation of above output.
   => 'thor' = index no. 0
   => 'Ironman' = index no. 1
   => 'spiderman' = index no. 2
   => [ 'superman', 'flash', 'batman' ] = index no. 3
*/
// Here output is a dc_heros array is inserted inside the marvel_heros array and return as a array inside a array, so whole dc_heros array is treated as single element .
// This is not a correct way to mearge arrays.
// But in some cases if we are in a situation where we have to put a array inside of a array then push() method is useful. 
// If we want to access the flash element then the code will be.....
// console.log(marvel_heros[3][1]);   // [Output] => flash
// But there are another ways to access these tyoe of elements, which will explore latter. 

// concat();
 const allHeros = marvel_heros.concat(dc_heros);
 // The concat() method of Array is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 console.log(allHeros);    // [Output] => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
 /* 
   Explanation of above output.
   => 'thor' = index no. 0
   => 'Ironman' = index no. 1
   => 'spiderman' = index no. 2
   => 'superman' = index no. 3
   => 'flash' = index no. 3
   => 'batman' = index no. 3
*/

//spread
const all_new_heros = [...marvel_heros, ...dc_heros]
//It is not a method but it is a syntax which helps to concadinate 2 arrays and we will get to see this syntax in most of the codes.
// Syntax => (...)
console.log(all_new_heros); // [Output] => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
/* 
   Explanation of above output.
   => 'thor' = index no. 0
   => 'Ironman' = index no. 1
   => 'spiderman' = index no. 2
   => 'superman' = index no. 3
   => 'flash' = index no. 3
   => 'batman' = index no. 3
*/


// flat();
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// If we ever find above type of situation then we can deal with this easily by following method.
const real_another_array = another_array.flat(Infinity);
// The flat() method of Array creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array); // [Output] =>  [1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5]

//Array.isArray();
// The Array.isArray() static method asks whether the passed value is an Array.
console.log(Array.isArray('Abhilash')); // [Output] => false

//Array.from();
//Create an array from a string.
//The Array.from() method returns an array from any object with a length property.
console.log(Array.from("Abhilash")); // [Output] => ['A', 'b', 'h','i', 'l', 'a','s', 'h']

// Array.of();
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //  [Output] =>[ 100, 200, 300 ]
//The Array.of() static method creates a new Array from a variable number of arguments, regardless of number or type of the arguments.


// We have to master this array chapter by exploring more....