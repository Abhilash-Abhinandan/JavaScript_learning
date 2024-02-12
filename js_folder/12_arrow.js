const user = {
    username: "Abhilash",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        // Here if we write only username instade of this.userame it will work but it is  not the good practice bca will it may face many errors in some cases.
        // 'this' keyword refers to current context (current scope)
        // This will save us from many errors.
        console.log(this);
        /*  
            [Output] (before the altertion of username value) =>
            {
                 username: 'Abhilash',
                 price: 999,
                 welcomeMessage: [Function: welcomeMessage]
            }
        */

        /*  
            [Output] (after the altertion of username value) =>
            {
                 username: 'Bubun',
                 price: 999,
                 welcomeMessage: [Function: welcomeMessage]
            }
        */
    }
}
user.welcomeMessage(); // [Output] => Abhilash , Welcome to website
user.username = "Bubun"; // Here we chnage the username of 'user' object.
user.welcomeMessage(); // [Output] => Bubun , Welcome to website

console.log(this); // [Output] => {} (This is a empty object)
// If we are in a node environment then this output we will get.
// If we try to execute this code in browser then the output will be...
/*  
    [Output] =>
    Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
*/
// This is the difference we have to remember.

function abhi(){
    console.log(this);
}
//abhi();
/*
    [Output] =>
    <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/
// We will get this output if we are in node environment. But we do not have to worry about this output for now.
// 'console.log(this);' after this execution if we get something as an output then we will know that there is something inside the function.
// Slowly we will know know more aboutit

function abhi1(){ 
    let username = "Abhilash_Abhinandan";
    console.log(this.username); // [Output] => undefined
}
abhi1();
// Here we have to remember that we can not use 'this' keyword in functions in this way. This works in objects only.


// How to call functions through the 'arrow' function?
// Explicit return (A basic way to declare)
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5,5)); // [Output] => 10

// Implict return (type - 1)
const addtwo1 = (lt1, lt2) => lt1 + lt2;
console.log(addtwo1(12, 1)); // [Output] => 13

// Implict return (type - 2)
// This type will majorly use in react.
const addtwo2 = (nm1, nm2) => (nm1 + nm2);
console.log(addtwo2(3, 3)); // [Output] => 6

/* 
    The difference between explicit and implicit type is....
    1. We have to use '{}' in explicit return type & use '()' in        
       implicit return type.

    2. We have to write return keyword in explict return type & no need  
       to write return keyword to return any value.

*/

//  Arrow function that returns an object
//  When returning an object from an arrow function, it seems that it is necessary to use an extra set of {}.
const akm = () => ({username: "Abhilash"});
console.log(akm());


// Extra consept that need to study in deep.
// This another way to return a object, but we need dig-in it.
const akm1 = () => {return {foo: "bar"}; };
console.log(akm1());
// Study link => https://stackoverflow.com/questions/28770415/ecmascript-6-arrow-function-that-returns-an-object
