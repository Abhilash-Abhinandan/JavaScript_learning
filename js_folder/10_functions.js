function addTwoNumbers(number1, number2){
    console.log(number1 + number2); // [Output] => 7
}
const result =  addTwoNumbers(3, 4);
console.log(result); // [Output] => undefined
// Why the output is undefined?
// In above addTwoNumbers function there is no return value to the result variable. That's way it gives undefined when we try to print result.
// console.log() does not return any value. It is just print the value.
function addTwoNumbers1(num1, num2){
    // let result1 =  num1 + num2;
    // return result1; //Here we return the value of result1( num1 + num2) to outside of function.
    return num1 + num2; // We can also add and return value in this direct way.

}
const result1 =  addTwoNumbers1(8, 2);
console.log(result1); // [Output] => 10

// A function rule we need to remember is, anything we write after the 'return' will not exicute.
function ab(s1, s2){
    let sum = s1 + s2;
    return sum;
    console.log("Abhilash"); // This line is not execute, bcz it is written after the return. If we move this line to before return then it will execute.
}
let sum = ab(2, 1);
console.log(sum);


function loginUserMessage(username){
    if(!username){ // !username is equivalent to username === undefined.
        console.log("Please enter a username");
        return
    }
    else{
        return `${username} just logged in`
    }
}
console.log(loginUserMessage("Abhilash"));  // [Output] => Abhilash just logged in
 console.log(loginUserMessage()); // [Output] => Please enter a username


// When we do not know how many arguments will be given by the user..
// We use 'Rest operator' to gather all arguments.
// The 'Rest operator' and 'Spread operater' are same but it is totly depends on usecase, when we will call it 'Rest operator' and when 'Spread operater'.
// We will learn the dfference btw 'Spread operater' and 'Rest operator' latter.
// Rest parameters
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
// Example - 1 [Using Rest parameter]
function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(2, 200, 999, 432, 122)); // [Output] => [ 2, 200, 999, 432, 122 ] => Gathered in a array format.

// Example - 2 [Using Rest parameter]
function myFun(a, b, ...manyMoreArgs) {
    console.log("a => ", a); // [Output] =>     a =>  one
    console.log("b => ", b); // [Output] =>     b =>  two
    console.log("manyMoreArgs => ", manyMoreArgs); // [Output] =>  manyMoreArgs =>  [ 'three', 'four', 'five', 'six' ]
  }
  myFun("one", "two", "three", "four", "five", "six");
// From above 2 examples we can clearly understand how 'Rest Parameters' work.


// How to use objects in a function?
const user = {
    username: "hitesh",
    price: 199
} // 1st we created a object. 

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); // Here we use the created object in function.
     // [Output] => Username is hitesh and price is 199
}
 handleObject(user); // Calling the function.


 // We can also use object in a function without creating a object.
 function handelObject1(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  // [Output] => Username is sam and price is 399
    }
    handelObject1({ // Calling the function with passing object directy.
       username: "sam",
       price: 399
   })


//  How to use arrays in a function?
const myNewArray = [200, 400, 100, 600]; // We created the array 1st.
function returnSecondValue(getArray){
    return getArray[3];
} // Created a function that accept a array and returns the 3rd element of the array.
console.log(returnSecondValue(myNewArray)); // [Output] => 600

// We can also use arrays in a function without creating a array.
function returnSecondValue1(getArray){
    return getArray[3];
} // Created a function that accept a array and returns the 3rd element of the array.
console.log(returnSecondValue1([1221, 32334, 4563, 765, 232334])); // Calling the function with passing array directy.
 // [Output] => 765