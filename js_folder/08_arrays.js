// ******************** Array ********************

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


// ******************** Array Methods ********************

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