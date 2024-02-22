// ************************************ for loop (block statement) ************************************

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) { 
        console.log("5 is best number");
    }
    console.log(element);
    
}


// Nesting in for loop
for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 0; j <= 5; j++) {
        console.log(`Inner loop values ${j} and innerloop value ${i}`)
    }
    
}
/*
    [Output] =>
    Outer loop value: 0
Inner loop values 0 and innerloop value 0
Inner loop values 1 and innerloop value 0
Inner loop values 2 and innerloop value 0
Inner loop values 3 and innerloop value 0
Inner loop values 4 and innerloop value 0
Inner loop values 5 and innerloop value 0
Outer loop value: 1
Inner loop values 0 and innerloop value 1
Inner loop values 1 and innerloop value 1
Inner loop values 2 and innerloop value 1
Inner loop values 3 and innerloop value 1
Inner loop values 4 and innerloop value 1
Inner loop values 5 and innerloop value 1
Outer loop value: 2
Inner loop values 0 and innerloop value 2
Inner loop values 1 and innerloop value 2
Inner loop values 2 and innerloop value 2
Inner loop values 3 and innerloop value 2
Inner loop values 4 and innerloop value 2
Inner loop values 5 and innerloop value 2
Outer loop value: 3
Inner loop values 0 and innerloop value 3
Inner loop values 1 and innerloop value 3
Inner loop values 2 and innerloop value 3
Inner loop values 3 and innerloop value 3
Inner loop values 4 and innerloop value 3
Inner loop values 5 and innerloop value 3
Outer loop value: 4
Inner loop values 0 and innerloop value 4
Inner loop values 1 and innerloop value 4
Inner loop values 2 and innerloop value 4
Inner loop values 3 and innerloop value 4
Inner loop values 4 and innerloop value 4
Inner loop values 5 and innerloop value 4
Outer loop value: 5
Inner loop values 0 and innerloop value 5
Inner loop values 1 and innerloop value 5
Inner loop values 2 and innerloop value 5
Inner loop values 3 and innerloop value 5
Inner loop values 4 and innerloop value 5
Inner loop values 5 and innerloop value 5
*/

// Print tabel using for loop 
for (let i = 0; i <= 5; i++) {
    console.log(`Table of ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
        
    }
    
}
/*
    [Output] =>
 Table of 0
0 * 0 = 0
0 * 1 = 0
0 * 2 = 0
0 * 3 = 0
0 * 4 = 0
0 * 5 = 0
0 * 6 = 0
0 * 7 = 0
0 * 8 = 0
0 * 9 = 0
0 * 10 = 0
Table of 1
1 * 0 = 0
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
1 * 4 = 4
1 * 5 = 5
1 * 6 = 6
1 * 7 = 7
1 * 8 = 8
1 * 9 = 9
1 * 10 = 10
Table of 2
2 * 0 = 0
2 * 1 = 2
2 * 2 = 4
2 * 3 = 6
2 * 4 = 8
2 * 5 = 10
2 * 6 = 12
2 * 7 = 14
2 * 8 = 16
2 * 9 = 18
2 * 10 = 20
Table of 3
3 * 0 = 0
3 * 1 = 3
3 * 2 = 6
3 * 3 = 9
3 * 4 = 12
3 * 5 = 15
3 * 6 = 18
3 * 7 = 21
3 * 8 = 24
3 * 9 = 27
3 * 10 = 30
Table of 4
4 * 0 = 0
4 * 1 = 4
4 * 2 = 8
4 * 3 = 12
4 * 4 = 16
4 * 5 = 20
4 * 6 = 24
4 * 7 = 28
4 * 8 = 32
4 * 9 = 36
4 * 10 = 40
Table of 5
5 * 0 = 0
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/

// Foor loop in arrays
let myArray = ["Flash", "Batman", "Superman" ];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
/*
    [Output] =>
        Flash
        Batman
        Superman
*/

// Break and continue
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`We detected 5`);
        break; // Here break stops the execution of code if the condition is true. Otherwise, the execution will be complete.

    }
    console.log(`Value of i = ${index}`);
}
/*
    [Output] =>
        Value of i = 1
        Value of i = 2
        Value of i = 3
        Value of i = 4
        We detected 5
*/

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`We detected 5`);
        continue;

    }
    console.log(`Value of i = ${index}`);
}

/*
    [Output] =>
        Value of i = 1
        Value of i = 2
        Value of i = 3
        Value of i = 4
        We detected 5
        Value of i = 6
        Value of i = 7
        Value of i = 8
        Value of i = 9
        Value of i = 10
        Value of i = 11
        Value of i = 12
        Value of i = 13
        Value of i = 14
        Value of i = 15
        Value of i = 16
        Value of i = 17
        Value of i = 18
        Value of i = 19
        Value of i = 20
*/


// ************************************ Do...while loop ************************************

// While 
// Example - 1 
let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
    
}
/*
    [Output] =>
        Value of index is 0
        Value of index is 2
        Value of index is 4
        Value of index is 6
        Value of index is 8
        Value of index is 10
*/


// Example - 2
let animal = ["Tiger", "Dog", "Lion"];
let arr = 0;
while (arr < animal.length ) {
    console.log(`Animals are : ${animal[arr]}`);
    arr = arr + 1;
}
/*
    [Output] =>
        Animals are : Tiger
        Animals are : Dog
        Animals are : Lion
*/

// Do...while
let score = 1;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);

/*
    [Output] =>
        Score is 1
        Score is 2
        Score is 3
        Score is 4
        Score is 5
        Score is 6
        Score is 7
        Score is 8
        Score is 9
        Score is 10
*/

// Special case of Do...while.
let score1 = 11;
do {
    console.log(`Score : ${score1}`);
    score1++;
} while (score <= 10); 
// [Output] => Score : 11
// Here the answer is 11 bcz in do...while loop 1st code will execute which are present in do scope then after condition will check.
// we will not use this loop in most of the cases.


// ************************************ for...of loop ************************************

// Using for..of loop in array
const arr1 = [1, 2, 3, 4, 5];
for (const num of arr1) {
    console.log(num);
}
/*
    [Output] =>
        1        
        2
        3
        4
        5
 */

// Using for..of loop in string
const greetings = "Hello world";
for (const greet of greetings) {
    // Code to avoid prining of blankspace.
    if(greet == " "){
        continue;
    }
    console.log(greet);
    
}
    /*
    [Output] =>
        H
        e
        l
        l
        o
        w
        o
        r
        l
        d
 */


// Maps
/*  
 => The Map object holds key-value pairs and remembers the original insertion order of the keys.

 => Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
*/
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // This value will not insert in map, bcz Map() is known for unique value entries. There is no second entry of the same value allowed here.

console.log(map);
 /*
    [Output] =>
        Map(3) {
            'IN' => 'India',
            'USA' => 'United States of America',
            'Fr' => 'France'
        }
 
*/

// Using for...of loop in Map()
for (const key of map) {
        console.log(key);
}
/*
    [Output] =>
        [ 'IN', 'India' ]
        [ 'USA', 'United States of America' ]
        [ 'Fr', 'France' ]
 
*/
// Here we get output in an array form
// If we want to print output separately then...
for (const [key, value] of map) {
        console.log(`${key} => ${value}`);
}
/*
    [Output] =>
        IN => India
        USA => United States of America
        Fr => France
 
*/


// Using for of loop in object...
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(`${key} => ${value}`);
    
// } // [Output] => myObject is not iterable
// Here we see that the for...of loop will not execute in obects bcz objects are not iterable.
// We can use for...in loop instade..

// for..in loop
const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject1) {
    console.log(`${key} :- ${myObject1[key]}`);
}
/*
    [Output] =>
        js :- javascript
        cpp :- C++
        rb :- ruby
        swift :- swift by apple
 
*/

// Using for of loop in array...
const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
     console.log(key);
}
/*
    [Output] =>
        0
        1
        2
        3
        4
 
*/
// This an exception that we get keys(keys of array) as an output insatade of values.
// About array keys => need to study for better understanding.

// If we need to access the values..
for (const key in programming) {
    console.log(programming[key]);
     
}
/*
    [Output] =>
        js
        rb
        py
        java
        cpp
 
*/


// Is it possibe to use for..in loop on Map() => No it is not possible.
const map1 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map1) {
    console.log(key);
}// [Output] => No output
// We will learn more about this topic latter.


// ************************************ for...each loop ************************************

const coding = ["js", "ruby", "java", "python", "cpp"];


// Following is the basic function syntax.
//coding.forEach( function greet () { } )

// But following is the callback function syntax.
coding.forEach (function (val) {
    console.log(val);
})

// We can also write it with an arrow function.
coding.forEach( (item) => { console.log(item) } );
/*
    [Output] =>
        js
        ruby
        java
        python
        cpp
 
*/


// Another way to run above program.
function printMe( item){
    console.log(item);
}
coding.forEach(printMe);
/*
    [Output] =>
        js
        ruby
        java
        python
        cpp
 
*/


// Some basics...
// We can access more parameters with forEach loop not just one parameter but also we can access index number and the total declared array...
coding.forEach( (item, index, arr) => { console.log(item, index, arr) } );
/*
    [Output] =>
       js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
       ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
       java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
       python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
       cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
 
*/


// This is the concept we need to remember anyway.
// We are going to use this concept the whole time because the values are received from the database in array forma & each value is an object here.  
const myCoding = [
    {
        languageName: "javascript",
        languageFilename : "js"
    },
    {
        languageName: "java",
        languageFilename : "java"
    },
    {
        languageName: "python",
        languageFilename : "py"
    }
]
myCoding.forEach((item) => {console.log(item.languageName) } );
/*
    [Output] =>
       javascript
       java
       python
*/

// Does forEach loop returns any value? Let's find out.......
const coding = ["js", "ruby", "java", "python", "cpp"];
const values = coding.forEach( (item) => {
    return item;
} )
console.log(values); // [Output] => undefined
// From above output we know that the forEach loop does not return any value.

// If we really want to return a value using forEach loop only then....
// Creating a myNums1 array.
const myNums1 = [12, 13, 15, 67, 65, 75, 34, 23];
const newArrayList = []; // Creating a empty array.
myNums1.forEach ( (num) => {
    if(num > 15){
         return newArrayList.push(num);
    }
});
console.log(newArrayList);  // [Output] => [ 67, 65, 75, 34, 23 ]


// filter() method
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not change the original array.
// filter() method also supports callback function.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNum =  myNums.filter((num) => num > 4  ); // This is Implict return type (We learn it on arrow.js file).
console.log(newNum); // [Output] => [ 5, 6, 7, 8, 9, 10 ]
// Following is Explict return type (We learn it on arrow.js file).
 // But we are bound here to write return keyword in the block to return the value.
const newNum1 = myNums.filter( (num) => {
    return num > 4 ;
} )
console.log(newNum1); // [Output] => [ 5, 6, 7, 8, 9, 10 ]


// A Real example using filter()
// Data are receive from database in following types.
// Let's play on following data....
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// Case -1 => User request a data to show him/her all books which genre is history only .
let newUser = books.filter((bk) =>bk.genre === 'History'  )
console.log(newUser);
/*
    [Output] =>
       [
        {
            title: 'Book Three',
            genre: 'History',
            publish: 1999,
            edition: 2007
          },
          {
            title: 'Book Seven',
            genre: 'History',
            publish: 1986,
            edition: 1996
          }
    ]
 
*/

// Case - 2 => User request a data to show him/her all books which were published after the year 2000.
// No need to declare a new variable, we can simply reride the varible 'newUser'.
newUser = books.filter( (bk) => bk.publish > 2000 )
console.log(newUser);
/*
    [Output] =>
    [
        {
            title: 'Book Five',
            genre: 'Science',
            publish: 2009,
            edition: 2014
          },
          {
            title: 'Book Eight',
            genre: 'Science',
            publish: 2011,
            edition: 2016
          }
    ]
 */

// Case - 3 => User request a data to show him/her all books which were published after the year 1995 and gener must be history only .
newUser = books.filter((bk) => bk.publish > 1995 && bk.genre === 'History' );
console.log(newUser);
/*
    [Output] =>
       [
             {
               title: 'Book Three',
               genre: 'History',
               publish: 1999,
               edition: 2007
             }
        ]
 */
// We can practice like this more....

// ************************************ map() and reduce() method ************************************

// map() method
// If a user want to add 10 in every element of an array then...
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = myNumbers.map((num) => num + 10 );
console.log(newNumbers);
/*
    [Output] =>
       [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 */


// Channing of methods....
// We can use multiple methods multiple times.
// In this case user firstly want to multiply 10 in every elemnt of existing array then secondly want to add 1 then thirdly want to show him/her all the data that are bigger than the 40. ( We can do first and second case in one map() method but we do it separately for better understanding in channing of methods ).
const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) 

console.log(newNums);
/*
    [Output] =>
       [41, 51,  61, 71, 81, 91, 101]
 */


// reduce() method
// Without arrow function
const myNums2 = [1, 2, 3]
const myTotal = myNums2.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);
/*
    [Output] =>
       acc: 0 and currval: 1
       acc: 1 and currval: 2
       acc: 3 and currval: 3
       6
 */


// With arrow function
const myTotal1 = myNums2.reduce((acc, curr) => acc + curr, 0 );
console.log(myTotal1); // [Output] => 6



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, itemPrice) => acc + itemPrice.price, 0 );
console.log(priceToPay);  // [Output] => 22996


 
