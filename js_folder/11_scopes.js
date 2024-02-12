let a = 10;
const b = 20;
var c = 30;
console.log(a); // [Output] => 10
console.log(b); // [Output] => 20
console.log(c); // [Output] => 30



// Now we will declare variables within a block with all the 3 datatypes.
// The main reason behind the declaring varibles with 3 data type is...
if(true){
    let nm1 = 22; // Declared in a block
    const nm2 = 34; // Declared in a block
    var nm3 = 43; // Declared in a block
    console.log(nm1); // [Output] => 22
    // Here we sucessfully able to print the value of num1. But if we try to print the value of nm1 out side the block then it will show us error.
    // Because we can access the nm1 varible in this block only. We can't use value outside the block.
    // This is called 'block scope'.
    console.log(nm2); // [Output] => 34
    // Same thing happened here also.
    console.log(nm3);  // [Output] => 43
    // Here we get same output but if we try to print nm3 value outside of this block, then also we get same output.
    // We can called this is a problem of using var.
} 
// console.log(nm1);
// console.log(nm2);
// console.log(nm3);


let num1 = 567; // This is the global scope (Declare variable outside the scope)
if(true){
    let num1 = 22; // This is the block  scope
    const num2 = 34; 
    console.log(num1); // [Output] => 22
}
console.log(num1); // [Output] => 567
// We can clearly understand after we analize both outputs.


// A functoin within a function.
function one(){
    const username = "Abhiash"

    function two(){
        const website = "youtube"
        console.log(username); //  [Output] => Abhilash
        // We can directly access the outer function('one()') inside the inner function(two()).
    }
    // console.log(website); //  [Output] => Error
    // But we directly can not use inner function (two()) in outer function(one()).
    two(); // Here we can call the inner frunction to access it.
}
 one();

 // Same thing happens in If.. else.. also
 if (true) {
    const username = "Abhilash"
    if (username === "Abhilash") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //  [Output] => Error (Bcz website is present in inner scope, So we can not use it outside this scope.)
}
// console.log(username); //  [Output] => Error (Bcz username is present in a scope , So we can not use it outside this scope.)


// ******************* interesting *******************


console.log(addone(5));  //  [Output] => 6
function addone(num){// A way to declare a function
    return num + 1;
}


addTwo(5); //  [Output] => Error
// Bcz we call the function before the declaration. This will happen if we declare function in following way.
// If we try to call this function after the declaration then it will work. We will going to use this way of function declaration many times. 
const addTwo = function(num){ // Another way to declare a function with a variable to hold return values.
    return num + 2;
}