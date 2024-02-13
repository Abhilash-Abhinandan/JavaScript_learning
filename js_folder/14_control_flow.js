//************************************  Control Flow ************************************ 

// if...else
//The if...else statement executes a statement if a specified condition is true. If the condition is false, another statement in the optional else clause will be executed.
const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 40");
}  // [Output] => temperature is greater than 40

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== [These are the operaters we will frequently use in this control flow concept.]


// Scope related concept
const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`); // [Output] => User power: fly
}
// console.log(`User power: ${power}`); // [Output] => Throw error
// Bcz power is declared in the block scope, So we can not access power outside the scope.
// If we declare power with 'var' datatype instade of 'let' & 'const' then we can access power out side the scope, but this is the totaly wrong process, it will cause many problem.


// Short_hand notation.(Implicit scope)
const balance = 1000
if (balance > 500) console.log("test");
// This is applicable for one line only.
// We can also add multiple lines in it......
if (balance <= 1000) console.log("Abhilash"), console.log("Abhinandan");
// This syntax is also works, but writting this code is not a good practice at all.


// Nesting if...else
let newBalance = 2000;
if (newBalance < 500) {
    console.log("less than 500");
} else if (newBalance < 750) {
    console.log("less than 750");
    
} else if (newBalance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}  // [Output] => less than 1200



// Real life use of if..else
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    // We can use operators maximum 2 times
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
} 


// switch case

// Basic syntax
// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }


// Example - 1
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// Example - 2
const newMonth = 4

switch (newMonth) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Imp for interview

// truthy value & falsy value
// Let's dig into it.............


// Case - 1
const userEmail = "";
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
} // [Output] => Don't have user email


// Case - 2
const userEmail1 = [];
if (userEmail1) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
} // [Output] => Got user email

/*  
    Here the noticable thing is, when userEmail value is " " (a empty string) in case - 1 then the output is 'Don't have user email'. It means the compiler assums the empty string as a true value. This is called 'truthy value'.

    While userEmail1 value is [ ] (a empty array) in case - 2 then the output is 'Got user email'. It means the compiler assums the empty array as a false value. This is called 'falsy value'.
*/
/*
    Rules for truthy values & falsy values
    -------------------------------------------
    falsy values..............
     => false, 0, -0, BigInt 0n, "", null, undefined, NaN

    truthy values.............
     => "0", 'false', " ", [], {}, function(){}
*/


// How to check declared array is empty?
const myArray = [];

if (myArray.length === 0){
    console.log("Array is empty");
}


// How to check the declared object is empty?
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??)  => Following are the demo examples. We will learn more latter.
// he nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// Case - 1
const foo = null ?? 'default string';
console.log(foo); // [Output] => "default string"

// Case - 2
const baz = 0 ?? 42;
console.log(baz); // [Output] => 0

// Case - 3
const akm = undefined ?? 3232;
console.log(akm); // [Output] => 3232

// Case - 4
const val = null ?? 10 ?? 20;
console.log(val); // [Output] => 10

// Case - 5
const wt = 32 ?? null ?? 1;
console.log(wt); // [Output] => 32

// Case - 6
const wtf = null ?? undefined ?? "Abhilash_Abhinandan";
console.log(wtf); // [Output] => Abhilash_Abhinandan


// Terniary Operator
// This operator is frequently used as an alternative to an if...else statement.
// Syntax =>   condition ? true : false
const jsCourse = 5999;
jsCourse <= 6000 ? console.log("Affordable") : console.log("Expensive"); // [Output] => Affordable