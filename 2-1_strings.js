"use strict";
/* 2.1 Declare and use variables of primitive data types 
• Number, Boolean, String, null, undefined, type of operator, type-checking  
functions, use strict, converting between data types (parseInt, parseFloat),  
formatting numbers, string operations, eval(), toFixed(), toLocaleString(),  
toPrecision(), single quote vs. double quote (nesting), initialization 
 
 */

/*
Primitive Data Types
- number:       both integers and floats
- boolean:      logical true and false
- string:       textual data enclosed in backticks, single or double quotes
- null:         the intentional absence of any object value
- undefined:    declared but not assigned a value
*/


console.log('typeof "Hello" ->', typeof "Hello");
console.log('typeof 5.8 ->', typeof 5.8);
console.log('typeof 8 < 3 ->', typeof 8 < 3 );

/* 
'use strict'; 
    helps to catch common coding mistakes and unsafe actions
    like accessing global objects or using reserved words as variable names
*/

// parseInt(str) -> number
//convert a string to an integer
console.log("typeof parseInt('10') ->", parseInt("10"), typeof parseInt("10"));
console.log("typeof parseInt('10.33') ->", parseInt("10.33"), typeof parseInt("10.33"));

// parseFloat(str) -> number
//convert a string to a float
console.log("typeof parseFloat('10.33') ->", parseFloat("10.33"), typeof parseFloat("10.33"));
console.log("typeof parseFloat('10') ->", parseFloat("10"), typeof parseFloat("10"));

// (number).toFixed(number)
//format a number to a fixed-point notation
console.log('(123.456).toFixed(2) ->', (123.456).toFixed(2));
console.log('(123).toFixed(2) ->', (123).toFixed(2));
console.log('(123.456).toFixed(7) ->', (123.456).toFixed(7));

// (number).toLocaleString()
// puts comma inbetween groups of three numbers R -> L
// rounds to three places past the decimal if applicable
console.log('(1234567).toLocaleString() ->',(1234567).toLocaleString());
console.log('(12345.67).toLocaleString() ->',(12345.67).toLocaleString());
console.log('(1234.5679).toLocaleString() ->',(1234.5679).toLocaleString());

//number.toPrecision(number)
// formats the number to a specified length
console.log('(12345678).toPrecision(4) ->', (12345678).toPrecision(4));
console.log('(123.45678).toPrecision(4) ->', (12345678).toPrecision(4));
console.log('(123456.78).toPrecision(4) ->', (12345678).toPrecision(4));

//String Methods
// Define a string for demonstration
let str = "Hello, world!";

// charAt() - returns the character at a specified index
console.log(str.charAt(0)); // 'H'

// concat() - concatenates two or more strings
console.log(str.concat(" Have a nice day.")); // 'Hello, world! Have a nice day.'

// includes() - checks if a string contains a specified substring
console.log(str.includes("world")); // true

// indexOf() - returns the index of the first occurrence of a specified text in a string
console.log(str.indexOf("world")); // 7

// lastIndexOf() - returns the last index at which a specified text occurs in a string
console.log(str.lastIndexOf("o")); // 8

// match() - retrieves the matches when matching a string against a regular expression
console.log(str.match(/lo/g)); // ['lo', 'lo']

// repeat() - returns a new string with a specified number of copies of the string it is called on
console.log("ha ".repeat(3)); // 'ha ha ha '

// replace() - searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced
console.log(str.replace("world", "everyone")); // 'Hello, everyone!'
str.replace(/\./g, '-');  // g for global/all \. for literal dot
str.replace(/./, '-');    // replaces the first character with - because . represents any character
str.replace(/./g, '-');   // replaces every character with - 
str.replace(/\./, '-');   // replaces only the first . with -

// slice() - extracts a part of a string and returns a new string
console.log(str.slice(0, 5)); // 'Hello'

// split() - splits a string into an array of substrings
console.log(str.split(", ")); // ['Hello', 'world!']

// substr() - returns a portion of the string, starting at the specified index and extending for a given number of characters
console.log(str.substr(1, 4)); // 'ello'

// substring() - returns the part of the string between the start and end indexes, or to the end of the string
console.log(str.substring(0, 5)); // 'Hello'

// toLowerCase() - converts a string to lowercase letters
console.log(str.toLowerCase()); // 'hello, world!'

// toUpperCase() - converts a string to uppercase letters
console.log(str.toUpperCase()); // 'HELLO, WORLD!'

// trim() - removes whitespace from both ends of a string
let extraSpace = "  trim me  ";
console.log(extraSpace.trim()); // 'trim me'

// concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // 'John Doe'

// Template literals
let user = "Jane";
let greeting = `Hello, ${user}!`;
console.log(greeting); // 'Hello, Jane!'

// Multi-line string
let poem = `Roses are red,
Violets are blue,
ES6 is cool,
And so are you!`;
console.log(poem);

// string comparison
let a = "apple";
let b = "banana";
console.log(a < b); // true because 'apple' comes before  'banana' in a dictionary

// bracket notation
let hello = "Hello, world!";
console.log(hello[7]); // 'w'

// avoid using eval()
// it poses security risks
// evaluates strings as if they were numbers
let value = "2 + 2";
console.log(eval(value)); // 4

// destructuring
let [firstLetter, secondLetter, ...rest] = "Hello";
console.log(firstLetter); // 'H'
console.log(secondLetter); // 'e'
console.log(rest); // ['l', 'l', 'o']

// string coercion
let value2 = 123;
console.log(value2 + ""); // '123' - number to string by concatenation with an empty string

// quotes
/* strings can be enclosed in backticks, single or double quotes.  
Nested quotes can be used to avoid escaping */



//  Practice Set: JavaScript Data Types and String Operations

// Question 1: Variable Declaration and Type Checking
// Declare a variable daysLeft to store the number of days until the end of the year and determine its type using the typeof operator.
let today = new Date()
console.log(today.getMonth(), today.getDate());
let daysSoFar = 0
switch (today.getMonth()) {
    case 0 :  // Jan
        daysSoFar = today.getDate();
        break;
    case 1 :  // Feb 
        daysSoFar = 31 + today.getDate();
        break;
    case 2 : // Mar 
        daysSoFar = 31 + 28 + today.getDate();
        break;
    case 3 : // Apr
        daysSoFar = 31 + 28 + 31 + today.getDate();
        break;
    case 4 : // May
        daysSoFar = 31 + 28 + 31 + 30 + today.getDate();
        break;
    case 5 : // Jun
        daysSoFar = 31 + 28 + 31 + 30 + 31 + today.getDate();
        break;
    case 6 : // Jul
        daysSoFar = 31 + 28 + 31 + 30 + 31 + 30 + today.getDate();
        break;
    case 7 : // Aug
        daysSoFar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + today.getDate();
        break;
    case 8 : // Sep
        daysSoFar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + today.getDate();
        break;
    case 9 :  // Oct
        daysSoFar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30  + today.getDate();
        break;
    case 10 :  // Nov
        daysSoFar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30  +  31 + today.getDate();
        break;
    case 11 :  // Nov
        daysSoFar = 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30  +  31 + 30 + today.getDate();
        break;
 }
console.log("days so far", daysSoFar);
let daysLeft = 365 - daysSoFar;
console.log('There are:', daysLeft, "days left in the year and the data type of this variable is", typeof daysLeft);

// Question 2: String Concatenation
// Create a variable firstName and lastName. Assign your first name to firstName and your 
// last name to lastName. Concatenate them to form a full name with a space in between and 
// store it in a variable fullName.
let myFirstName = "Pallas";
let myLastName = "Kennedy";
let myFullName = myFirstName + " " + myLastName;
console.log(myFullName);

// Question 3: Using String Methods
// Given the string email = "user@example.com", find the position of the “@” character 
// and extract the domain part of the email address.
let email = "user@example.com"
let domain = email.slice(email.indexOf('@')+1,)
console.log(domain);

// Question 4: Type Conversion
// Given the string height = "180.5", convert this string into a float and then round 
// it to the nearest whole number.
let height = "180.5";
let convertedHeight = parseFloat(height).toPrecision(3);
console.log('The height is approximately', convertedHeight);

// Question 5: Number Formatting
// For the number 45000.3333:
// 	1.	Format it to two decimal places.
// 	2.	Format it to no decimal places but with commas as thousands separators.
let  num = 45000.3333;
console.log(num.toFixed(2));
console.log(parseInt(num.toFixed(0)).toLocaleString());  

// Question 6: Escaping Characters in Strings
// Write a JavaScript string that outputs the following exactly:
// He said, "This is John's book."

console.log(`He said, "This is John's book."`);  // backticks 