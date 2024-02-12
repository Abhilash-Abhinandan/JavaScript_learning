// Immediately Invoked Function Expression (IIFE)
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman.

// Syntax
// We also called it 'Named IIFE'
(function abh( ){
    console.log(`Database Connected`);
})(); // [Output] => Database Connected 
// It is very necessry to use ';' after the invoke function at the end, which prevents from errors.

/*  
    Interview question...............
    What is IIFE?
    => 1. It is a function that excute immediately.
       2. And it save us from the global variable pollution problem.
*/

// IIFE with arrow function.
// We also called it 'Unamed IIFE'
(() => {
    console.log(`Database Connected two`);
})(); // [Output] => Database Connected two

// Unnamed IIFE with arrow function with passing arguments through parameters.
((name) => {
    console.log(`Hello ${name}! Database is Connected successfully`);
})('Abhilash'); // [Output] => Hello Abhilash! Database is Connected successfully