const name = "Abhilash";
const repoCount = 50;

console.log(name + repoCount + "Value"); // little old way of printing outputs.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Morder way to print outputs. [String Interpolation]    {Recommended}

const gameName = new String('Abhilash'); // Another way of defining string variable.

console.log(gameName[0]); //[o/p] => A
console.log(gameName[2]); //[o/p] => h

console.log(gameName.length); //[o/p] => 8
console.log(gameName.toUpperCase()); //[o/p] => ABHILASH
// But it does not change the original string.
console.log(gameName.charAt(5)); //[o/p] => a
console.log(gameName.indexOf("s")); //[o/p] => 6

const newString = gameName.substring(0, 4);
console.log(newString);  //[o/p] => Abhi

const anotherString = gameName.slice(-5, 4);
console.log(anotherString); //[o/p] => i

const newStringOne = "      Abhilash       ";
console.log(newStringOne); //[o/p] =>  Abhilash [With some space as written in newStringOne variable.]
console.log(newStringOne.trim()); //[o/p] =>  Abhilash [After trimming the spaces]

const url = "https://fantastic-system-v665qrwv4vpr3w5qw.github.dev/?autoStart=false";
console.log(url.replace('v665', 'v2348')); //[o/p] => https://fantastic-system-v2348qrwv4vpr3w5qw.github.dev/?autoStart=false

console.log(url.includes('system')) // [o/p] => true
// url.includes check wheather the string value is present in url or not.

// I need to do deep research in this and write a article about.





// YouTube Link - https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11



