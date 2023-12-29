const accountId = 789456
let accountEmail = "abhilash@google.com"
var accountPassword = "789"
/* prefer not to use var due to issue in block scope & functional scope */
accountCity = "Bhubaneswar" // we can reserve a variable memory without mention its type bcz JavaScript is a safe language. But it is not a good practice at all.
let accountState; // output undefined bcz value is not defined in accountState variable.

// accountId = 2 // changes not allowed due to use of const variable.

accountEmail = "abcd@com"//changes allowed due to no use of const variable.
accountPassword = "88877"//changes allowed due to no use of const variable.
accountCity = "Cuttack"//changes allowed due to no use of const variable.

console.log(accountId); // A method to print data.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])// a method to print data in a tabular form.