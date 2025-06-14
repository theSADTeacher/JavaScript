
//var
 /*   function scoped not block scoped but can be global scoped and still
        won't be block scoped. 
        
        This means that if defined in a function, the variable is 
        accessible ONLY within that function.
        However, if defined outside of a function, it becomes a global 
        variable but will not respect the {} boundaries on the global
        scope. This can lead to issues in loops,
        conditionals and other block-level constructs.
         
        Worse, var variables are hoisted to the top of their scope
        but are not initialized meaning you can reference a var variable 
        BEFORE it is declared without throwing errors (value will be undefined)
        */

// Hoisting example: 
console.log(A);// undefined
var A = 40;
console.log(A); // 40
// interpreted as
var A;
console.log(A);
A = 40
console.log(A);
/* hoisting can cause all kinds of weird bugs that are hard to fix when
a variable is referenced called before it's initialized */

/* var allows you to redeclare the same variable within the same
scope which can overwrite previous values w/o error */
var A = 10;
var A = 50;
console.log(A);

//Loop scope problems
// not block scoped so var variables disrespect the {} boumdaries
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
//i is shared across all iterations because it is function scoped
// by the time the setTimeout callbacks run, the loop has completed
// and i has been incremented to 3

/* using var at the global level can lead to unintentional overwrite
of existing global variables or create conflicts with external
libraries
*/
function myFunction() {
  B = 300; // No `var`, `let`, or `const`: creates a global variable! <-global scope pollution
}
myFunction();
console.log(B); // 300

/*

var
    Function scoped
    Hoisting yes initialized to undefined
    re-declaration allowed
    re-assignment allowed

let
    Block scoped
    Hoisting yes initialized to Temporal Dead Zone
    re-declaration not allowed
    re-assignment allowed

const
    Block scoped
    Hoisting yes initialized to Temporal Dead Zone
    re-declaration not allowed
    re-assignment not allowed
*/

/* avoid var in modern JS 
use const by default
use let, const, or var to preven global scope pollution
avoid relying on hoisting by declaring all variables at the top of their scope
  ^^ Python does this as well but primarily for readability &  maintainablity. 
        Python doesn't have hoisting oro scoping rules like JS. Python 
        doesn't have block scope, only function scope -- funcitons declared in loops
        and if statements exist outside the loop
*/


/* 
function scope:  variables are accessible only to the function and 
    to any part of the function included nested blocks. each function 
    has its own scope.  not accessible globally

block scope: variable lifetime is limited to the  {} of its block (if, 
    for, while, etc).  these are the smallest logical units of code.
    Each block has its own scope. not accessible globally and, in fact, 
    cannot be accessed outside the block

global scope:  variables declared outside of a function or a block become
    global and its behavior depends on how they are declared. 


    var: declared outside any function becomes globoal even if they are
        declared within the <script> tag or a block scope. attaches to 
        global object (window in browsers or global in Node.js)
    
    let/const: better to think of them as script/module scoped because
        these variables do not attach to the global object

Always use let or const, const by default
avoid implicit globals
use as few global scoped variables as possible
*/
var globalx = 10; // 'x' is attached to the global object
console.log(window.globalx); // 10

function sayHello() {
  console.log("Hello, world!");
}
console.log(window.sayHello); // Function: sayHello