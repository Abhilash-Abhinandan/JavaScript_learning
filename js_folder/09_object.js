// **************************************** Object ****************************************
/*  
=>  We have already learned that JavaScript variables are containers for data values.
=> Objects are variables too. But objects can contain many values.
*/

// singleton (Have to explore latter)
//Object.create


// object literals
const jsUser = {
    name: "Abhilash",
    age: 18,
    location: "Bhubaneswar",
    email: "reingsbubun404@gmail.com",
    lastLoginDays: ["Monday", "Saturday"],
    "statename": "Odisha"
}
// This is how objects are declared above.


// Accessing Object Properties
/* You can access object properties in two ways 
    => objectName.propertyName   => Recommended
    => objectName["propertyName"]
*/ 
console.log(jsUser.email); // [Output] => reingsbubun404@gmail.com
console.log(jsUser["email"]); // [Output] => reingsbubun404@gmail.com
// The diffrence between objectName.propertyName and objectName["propertyName"] is.....
// If we want to access statename from the jsUser object then the only method to access is objectName["propertyName"]. There is no other ways to access this. The expected code is in bellow.
console.log(jsUser["statename"]); // [Output] => Odisha

// ============================== Interview question [IMP] ==============================
/*  
Declare a symbol and add it in a object and print it, but the typeof of the output should symbol.
*/
// The Wrong Answer
const mySym = Symbol("key1");
const jsUser1 = {
    mySym: "mykey"
}
console.log(jsUser1.mySym); // [Output] => mykey
console.log(typeof jsUser1.mySym); // [Output] => string. 
console.log(jsUser1); // [Output] => { mySym: 'mykey' }
// Here the answer is wrong because the typeof of output is string but we have to print the output as symbol type. Then the code is in follows..

// The Correct Answer
const mySym1 = Symbol("key2");
const jsUser2 = {
    [mySym1]: "mykey"
}
console.log(jsUser2[mySym1]); // [Output] => mykey
console.log(typeof jsUser2[mySym1]); // [Output] => string. 
// Here the interesting thing is, if we try to print the (typeof jsUser2[mySym1]) we will get string as an output same as before.
// But if we try to print the whole jsUser2 object then only we can find that the element is a symbol type.
console.log(jsUser2); // [Output] => { [Symbol(key2)]: 'mykey' }
// =================================================================================================================================

const jsUser3 = {
    email: "abhilash@google.com",
    name: "Abhilash"
}
// Now we can modify the email value
jsUser3.email = "abhilash@git.com";
console.log(jsUser3); // [Output] => { email: 'abhilash@git.com' }

//Now we can freeze this email value, so no one can able to modify further.
//Object.freeze(jsUser3);
jsUser3.email = "abhilash@official.com"
console.log(jsUser3);  // [Output] => { email: 'abhilash@git.com' }
//Same output as before no alterlation occured.

// Now adding function in jsUser3
jsUser3.greeting = function(){
    console.log("Hello JS user");
} 
console.log(jsUser3.greeting()); // [Output] => Hello JS user

jsUser3.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
    // We will learn about 'this.' latter .
}

console.log(jsUser3.greeting2()); // [Output] => Hello JS User, Abhilash


// const tinderUser = new Object() // This is a singleton object declartion
const tinderUser = {} // This is a non-singleton object 
// Adding some values in tinderUser Object.
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser); // [Output] => { id: '123abc', name: 'Sammy', isLoggedIn: false }


// We can declare objects inside a object and we can nesting objects also.
const regularUser = {
    email: "abh@12.com",
    fullname:{
        userFullname: {
            firstname: "Abhilash",
            lastname: "Abhinandan"
        }
    }
}
// Accessing these nesting object elements...
console.log(regularUser.fullname); // [Output] =>  { userFullname: { firstname: 'Abhilash', lastname: 'Abhinandan' } }
console.log(regularUser.fullname.userFullname); // [Output] =>  { firstname: 'Abhilash', lastname: 'Abhinandan' }
console.log(regularUser.fullname.userFullname.lastname); // [Output] =>  Abhinandan

// Combining objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const clr = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 };
console.log(obj3); // [Output] =>  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// Here the obj1 object and obj2 object are inserted in obj3 object and the obj1 & obj2 treated like elements as a whole.


// Object.assign()
const obj4 = Object.assign(obj1, obj2);
// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
console.log(obj4); // [Output] =>   { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = Object.assign({}, obj1, obj2, clr);
// '{}' used as target that means we give a empty object to store all our source(obj1, obj2, clr)
// It not compulsory to use '{}' , but using it is a good practice.
console.log(obj5); // [Output] => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//spread (same as array)
const obj6 = {...obj1, ...obj2, ...clr};
//It is not a method but it is a syntax which helps to to merge multiple objects into one new object same as spread in arrays.
// Syntax => (...)
// We will going to use this spread syntax all of the time bcz its new and easy also a good practice.
console.log(obj6); // [Output] => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// Values comes from the database in following type. (Array of objects)
const users = [
    // Objects are present under users array

    { // 1st object => index number 0
        id: 1,
        email: "h@gmail.com"
    },
    { // 2nd object => index number 1
        id: 2,
        email: ".....h@gmail.com"
    },
    { // 3rd object => index number 2
        id: 3,
        email: "@@@@@@h@gmail.com"
    },
]
// Accessing the object values in the array.
console.log(users[2].email); // [Output] => @@@@@@h@gmail.com
console.log(users[2].id); // [Output] => 3


// Some more accessing details about object's key and values. This is a very important concept that we are going to use it in databases many times. 
// Let's accessing the tinderUser object again.
// 1st print the tinderUser object again.
console.log(tinderUser); // [Output] => { id: '123abc', name: 'Sammy', isLoggedIn: false }
// Printing all keys of tinderUser object.
console.log(Object.keys(tinderUser)); // [Output] => [ 'id', 'name', 'isLoggedIn' ] => (The noticeable thing is the the type of output is array ).
// It means all keys are in a array. So, we can use all keys in loops or many more.
console.log(Object.values(tinderUser)); // [Output] => [ '123abc', 'Sammy', false ] => (The noticeable thing is the the type of output is array ).
// It means all values are in a array. So, we can use all keys in loops or many more.

// Object.entries()
//The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
console.log(Object.entries(tinderUser)); // [Output] => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
/*  
    [ 'id', '123abc' ]
    --------------------
    [ 'key', 'value']
*/

//Object.hasOwnProperty()
//Determines whether an object has a property with the specified name.
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // [Output] => true




// **************************************** Object de-structure ****************************************
const course = {
    coursename : "JavaScript",
    price: "999",
    courseInstructor: "Abhilash"
}
// If we want to access a value
console.log(course.courseInstructor);  // [Output] => Abhilash (This is the normal way we always use).
// This is a good way but some time we have to access same object values multiple times, then writting same line again and again is little awkward.

// A different way to access the object value
const {courseInstructor} = course
// After this line we don't have to write 'course.courseInstructor' again and again. We just write 'courseInstructor'.
console.log(courseInstructor);  // [Output] => Abhilash

// If we want to change the key name to access keys whatever reason it may be then...
const {courseInstructor: instructor} = course; // Here we changed the courseInstructor to instructor. Now we can use instructor instade of courseInstructor.
console.log(instructor);  // [Output] => Abhilash

// **************************************** JSON API Intro ****************************************
// We will get APIs in object form.
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
// Here keys and values both are present in string format.
// Ignore this errors for now.

// We will get APIs sometimes in array form also.
// Syntax
[
    {},
    {},
    {}
]

 // Sample response Link => https://randomuser.me/api/
 // For understanding the response use JSON formatter => https://jsonformatter.org/
 // We will learn again clearly. This is a intro only.