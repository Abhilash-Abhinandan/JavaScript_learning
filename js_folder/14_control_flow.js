//****************** Control Flow ****************** 

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
// let newBalance = 2000;
// if (newBalance < 500) {
//     console.log("less than 500");
// } else if (newBalance < 750) {
//     console.log("less than 750");
    
// } else if (newBalance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }