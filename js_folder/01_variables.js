// Variables are containers for data.
/* variable Rules
      => Case sensitive
      => Only letters, digits, underscore( _ ) and $ is allowed. ( not even space) 
      => Only a lettre,underscore ( _ ) or $ ahould be 1st character. 
      => Reserved words cannot be variable names. [Mdn reserved words link => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar]
*/

/* We can use different cases to write a variable name
      => fullName (Camel case)  [Recommended]
      => full_name (Snake case)
      => full-name (Kabab case)
      => FullName (Pascal case)
*/

/* There are three types of variables in JavaScript
      => var : Variable can be re-declared & updated. A global scope variable. [Old use]
      => let : Variable cannot be re-declared but can be updated. A block scope variable.
      => const : Variable cannot be re-declared or updated. A block scope variable.
*/

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

console.log(accountId); // "console.log();" =>  A method to print data in the console.

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])// a method to print data in a tabular form.
