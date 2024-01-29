"use strict"; // treat all JS codes as newer JS version.

// alert (7 + 7) //  currently we are using nodejs, not a browser. in browser we will get a alert pop-up.

let name = "Abhilash"
let age = 18
let isLoggedIn = false
let state;
// ********** DataTypes **********
// number => 2 to the power 53
// bigint 
// string => " "
// boolean => true/false
//null => standalone value
// undefined
//symbol => unique
//object

/* "typeof" => used to know type of a value. 
We can write type of in 2 ways*/
/* console.log (tyoeof variable) => 1st type
    console.log (tyoeof (variable)) =>  2nd type */
console.log(typeof "Abhilash"); //[output] => string
console.log(typeof 18); // [output] => number
console.log(typeof null); // [output] => object
console.log(typeof undefined); // [output] => undefined

//******************** DataTypes Summary ********************

// Primitive  types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn2 = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('132');
const anotherId = Symbol ('123');

const bigNumber = 87451295623451298562389451234512n; 


// Reference (Non primitives)
// Array, Objects, Functions  

const heros = ["shaktiman", "naagaraj", "doga"];
 let myObj = {
    myName : "Abhilash" ,
    age : 23, 
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof bigNumber); //[o/p] => bigint
console.log(typeof score); //[o/p] => number
console.log(typeof isLoggedIn2); //[o/p] => boolean
console.log(typeof outsideTemp); //[o/p] => object
console.log(typeof id); //[o/p] => symbol
console.log(typeof anotherId); //[o/p] => symbol


// undefined (typeof) => "undefined"
// Null (typeof) => "object"
// Boollean (typeof) => "boolean"
// Number (typeof) => "number"
// String (typeof) => "string"
// function (typeof) => "object function "
//Symbol (typeof) => "symbol"

// https://262.ecma-international.org/5.1/#sec-11.4.3   Go through this to better understanding.




// ******************** Stack and Heap Memory ********************

// Stack(Primitive), Heap(Non-Primitive)
let myYoutubename = "CodewithAbhilash";
let anotherName = myYoutubename;
anotherName = "Abhilash_code_world";

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "abhilashofficial404@gmail.com",
    upi : "abhilash@ibl",
}

let userTwo = userOne;
userOne.email = "abhilashofficial405@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
  // I have to learn more about this topic
