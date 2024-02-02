/*A javScript date fundamentlly specified as the time in milliseconds,
 which is defined as the midnight at the beginning of January 1, 1970(All dates will print from this date). */
 let myDate = new Date();
 console.log(myDate); // [Output] => 2024-02-01T21:49:18.090Z (This is not readable at all)
 console.log(myDate.toString()); // [Output] => Thu Feb 01 2024 21:52:52 GMT+0000 (Coordinated Universal Time) => This type of output is far better than previous.
 console.log(myDate.toDateString()); // [Output] => Thu Feb 01 2024
 console.log(myDate.toISOString()); // [Output] => 2024-02-01T21:59:40.286Z
 console.log(myDate.toJSON()); // [Output] => 2024-02-01T21:59:40.286Z
 console.log(myDate.toLocaleDateString()); // [Output] => 2/1/2024
 console.log(myDate.toLocaleString()); // [Output] => 2/1/2024, 10:03:22 PM

// If we want to print a specific date 
 let myCreatedDate = new Date(2024 , 1, 2); // YY-MM-DD (we can it to the MM-DD-YY and DD-MM-YY format by passing the date accordingly iin Date)
console.log(myCreatedDate.toDateString()); // [Output] => Fri Feb 02 2024

// If we want to print a specific date with time
let myCreatedDate1 = new Date(2024, 1, 2, 3, 45);
console.log(myCreatedDate1.toLocaleString()); // [Output] => 2/2/2024, 3:45:00 AM


let myTimeStamp = Date.now();  // Date.now(); => It shows us the current exact time.
console.log(myTimeStamp); // [Output] => 1706827122013 (In milliseconds)

let newDate = new Date();
console.log(newDate.getMonth()); // [Output] => 1;  Here the month is february but we got 1 in output instade of 2 because jan is start from 0.
// If we want to print exact the number of month then => (newDate.getMonth() + 1); simply add 1.

console.log(newDate.toLocaleString('default', {
    weekday: "short", 
    day: "numeric" }));
// We have to study deep in this chapter.