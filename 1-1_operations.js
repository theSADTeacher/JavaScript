"use strict";
/* 1.1 Complete and debug code that uses assignment and arithmetic  
operators 
• Assignment, increment, decrement, addition, subtraction, division,  
multiplication, modulus, compound assignment operators (+=, -=, *=, /=,  
%=)
 */

// the assignment operator =
let a = 10; // Assigns the value 10 to variable 'a'

// basic math operators
let result;
let x = 10;
let y = 3;

result = x + y; // addition, result is 13
result = x - y; // subtraction, result is 7
result = x * y; // multiplicatio, result is 30
result = x / y; // division, result is approximately 3.33
result = x % y; // modulus or remainder, result is 1
result = x ** y; // exponentiation;  10 to the power of 3

//increment and decrement
let count = 0;
count++; // count is now 1
count--; // count returns to 0

// the position of the incrment and decrement
// changes the order of assignment and calculation.
x = 5;
y = ++x; // increments x to 6 first, then assigns 6 to y
console.log("++x : " + x); // Outputs: 6
console.log("y : " + y); // Outputs: 6
x = 5;
y = x++; // assigns y to 5 first, then increments x to 6 <-- appears to break order of operations!
console.log("x++ : " + x);
console.log("y : " + y);

a = 5;
let b = --a; // decrements a to 4 first, then assigns 4 to b
console.log("--a : " + a); // Outputs: 4
console.log("b : " + b); // Outputs: 4

a = 5;
b = a--; // assigns b to 5 first, then decrement a to 4 <-- appears to break order of operations!
console.log("--a : " + a); // Outputs: 4
console.log("b : " + b); // Outputs: 4

//compound operators
let num = 10;

num += 5; // same as num = num + 5; num is now 15
num -= 2; // same as num = num - 2; num is now 13
num *= 2; // same as num = num * 2; num is now 26
num /= 2; // same as num = num / 2; num is now 13
num %= 7; // same as num = num % 2; num is now 6

// Order of Operations in JavaScript (from highest precedence to lowest):
// 	18.	Parentheses (())
// 	13.	Exponentiation (**)
// 	12.	Multiplication, Division, and Modulus (*, /, %) in order from left to right
// 	11.	Addition and Subtraction (+, -) in order from left to right
// 	2.	Compound Assignment Operators (+=, -=, *=, /=, %=, **=) the expression on the right is done first, then compound operation is done last operator is evaluated first, and then the operation is applied.
// 	2.	Assignment Operator (=) right side done first then assignment

// prefix and postfix increment and decrement operators are NOT math operators,
// they are variable assignment operators and encode instructions to change the
// value in memory either before (pre) or after (post) the variable value is used
// in a calculation or other logic.
// for this reason, you will raise an error trying to use it on number such as
// ++4 or 3--
// these operators are primarily used to control loops and would rarely or never
// be used in a calculation

// we use it in a calculation here to highlight it's odd behavior and for the fun
//  and challenge of tracing the order of operations.  :D

x = 4;
y = 2;
let z = 3;

result = x + (y * z ** ++y) / (x-- + ++z);
// Substitution                 :   4 + (2 * 3 ** ++2) / (4-- + ++3) <-- prefix:  z is updated in memory then the new value is used in calculation
// Parentheses: Postfix         :   4 + (2 * 3 ** ++2) / (4 -- + ++3)  <-- postfix:  current x value is used in calculation THEN the value in memory is updated
// Parentheses: Prefix          :   4 + (2 * 3 ** 3)/ (4-- + 4)
// Parentheses: Exponentiation  :   4 + (2 * 27) / (4-- + 4)
// Parentheses: Multiplication  :   4 + (54) / (4-- + 4)
// Parentheses: Addition        :   4 + (54) / (8)  <- the denominator evaluates to 8 THEN the value of x is changed in memory
// Parentheses: cleared         :   4 + 54 / 8
// Division                     :   4 + 6.75
console.log(result); // result returns 10.75

// this sort of stuff makes debugging very hard
x = 4;
z = 3;
result = x-- + ++z;
console.log(result);
console.log(z);
console.log(x);

//In real-world code, it’s better to write this clearly:
x = 4;
z = 3;

z++; // Increment z first
result = x + z; // Perform the addition
x--; // Decrement x afterward
console.log(result); // Outputs: 8

// If you’re working on sequential updates where the current value
// is used for one variable and the incremented/decremented value for another:
x = 1;
y = x++; // y = 1, x = 2
z = ++x; // x = 3, z = 3

//Most common use case for postfix incrementing
for (let i = 0; i < 10; i++) {
  console.log(i); // Prints numbers 0 through 9
}
